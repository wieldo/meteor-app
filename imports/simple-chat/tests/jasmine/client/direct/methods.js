describe('wieldo:chat \ direct \ methods', () => {
  const recipientId = 'Jjwjg6gouWLXhMGKW';
  const userId = 'Rrvih7hpiEACjZHLE';
  let isLoggedIn = false;

  function loggedIn() {
    isLoggedIn = true;
    spyOn(Meteor, 'userId').and.returnValue(userId);
    spyOn(Meteor, 'user').and.returnValue({
      _id: userId,
      emails: [{
        address: 'author@bar.com'
      }]
    });
  }

  function notLoggedIn() {
    isLoggedIn = false;
  }

  function loadRecipient(result) {
    const val = typeof result !== 'undefined' ? result : ({
      _id: recipientId,
      emails: [{
        address: 'recipient@bar.com'
      }]
    });

    spyOn(Chat.users, 'findOne').and.returnValue(val);
  }

  class MeteorMethod {
    constructor(method, name) {
      this.method = method;
      this.name = name;
    }

    call(data, cb) {
      this.method.call(data, cb);
    }

    run(data) {
      const context = {
        userId: isLoggedIn === true ? userId : undefined,
        name: this.name
      };

      return this.method.run.call(context, data);
    }
  }

  beforeEach(() => {
    notLoggedIn();
  });

  describe('message', () => {
    const message = new MeteorMethod(Chat.direct.methods.message, 'Chat.direct.methods.message');

    it('should fail on missing recipientId', (done) => {
      message.call({
        text: 'foo'
      }, (error) => {
        expect(error.error).toBe('validation-error');
        expect(error.message).toContain('Recipient');
        done();
      });
    });

    it('should fail on missing text', (done) => {
      message.call({
        recipientId
      }, (error) => {
        expect(error.error).toBe('validation-error');
        expect(error.message).toContain('Text');
        done();
      });
    });

    it('should fail on not logged in', (done) => {
      message.call({
        recipientId,
        text: 'foo'
      }, (error) => {
        expect(error.error).toContain('notLoggedIn');
        done();
      });
    });

    it('should check if recipient exists', (done) => {
      loggedIn();
      loadRecipient(null);

      try {
        message.run({
          recipientId,
          text: 'foo'
        });
      } catch(e) {
        expect(e.errorType).toBe('Meteor.Error');
        expect(e.error).toMatch('userNotFound');
        done();
      }
    });

    it('should insert new message', () => {
      const spy = spyOn(Chat.messages, 'insert').and.returnValue(undefined);

      loggedIn();
      loadRecipient();

      const text = 'foo';

      message.run({
        text,
        recipientId
      });

      expect(spy).toHaveBeenCalled();

      const msg = spy.calls.mostRecent().args[0];

      expect(msg.text).toBe(text);
      expect(msg.author.id).toBe(userId);
      expect(msg.recipient.id).toBe(recipientId);
    });
  });

  describe('markRead', () => {
    const markRead = new MeteorMethod(Chat.direct.methods.markRead, 'Chat.direct.methods.markRead');
    const messageId = 'Eecug6gouWLXhMGKW';

    it('should fail on missing messageId', (done) => {
      markRead.call({}, (error) => {
        expect(error.error).toBe('validation-error');
        expect(error.message).toMatch(/message id/i);
        done();
      });
    });

    it('should fail when not logged in', (done) => {
      try{
        markRead.run({});
      } catch(error) {
        expect(error.errorType).toBe('Meteor.Error');
        expect(error.error).toMatch('notLoggedIn');
        done();
      }
    });

    it('should fail if no message has been changed', (done) => {
      const spy = spyOn(Chat.messages, 'update').and.returnValue(0);

      loggedIn();

      try{
        markRead.run({
          messageId
        });
      } catch(error) {
        expect(error.errorType).toBe('Meteor.Error');
        expect(error.error).toMatch('notFound');
        expect(spy).toHaveBeenCalled();
        done();
      }
    });

    it('should update message', () => {
      const spy = spyOn(Chat.messages, 'update').and.returnValue(1);

      loggedIn();

      markRead.run({
        messageId
      });

      expect(spy).toHaveBeenCalledWith(messageId, {
        $set: {
          readAt: jasmine.any(Date)
        }
      });
    });
  });
});
