describe('wieldo:chat \ channels \ methods', () => {
  const recipientId = 'Jjwjg6gouWLXhMGKW';
  const userId = 'Rrvih7hpiEACjZHLE';
  const channelId = 'Eecug6gouWLXhMGKW';
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

  function loadChannel(result) {
    const val = typeof result !== 'undefined' ? result : ({
      _id: channelId,
      name: 'test',
      users: [{
        id: userId
      }]
    });

    spyOn(Chat.channels, 'findOne').and.returnValue(val);
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
    const message = new MeteorMethod(
      Chat.channels.methods.message,
      'Chat.channels.methods.message'
    );

    function mockInsert() {
      spyOn(Chat.messages, 'insert').and.returnValue(undefined);
    }

    beforeEach(() => {
      mockInsert();
    });

    it('should fail on missing channelId', (done) => {
      message.call({
        text: 'foo'
      }, (error) => {
        expect(error.error).toBe('validation-error');
        expect(error.message).toContain('channel');
        done();
      });
    });

    it('should fail on missing text', (done) => {
      message.call({
        channelId
      }, (error) => {
        expect(error.error).toBe('validation-error');
        expect(error.message).toContain('Text');
        done();
      });
    });

    it('should fail on not logged in', (done) => {
      message.call({
        channelId,
        text: 'foo'
      }, (error) => {
        expect(error.error).toContain('notLoggedIn');
        done();
      });
    });

    it('should check if channel exists', (done) => {
      loggedIn();
      loadChannel(null);

      try {
        message.run({
          channelId,
          text: 'foo'
        });
      } catch(e) {
        expect(e.errorType).toEqual('Meteor.Error');
        expect(e.error).toMatch('channelNotFound');
        done();
      }
    });

    it('should check if user has access to channel', (done) => {
      loggedIn();
      loadChannel({
        _id: channelId
      });

      try {
        message.run({
          channelId,
          text: 'foo'
        });
      } catch(e) {
        expect(e.errorType).toEqual('Meteor.Error');
        expect(e.error).toMatch('noAccess');
        done();
      }
    });

    it('should insert new message', () => {
      loggedIn();
      loadChannel();

      const text = 'foo';

      message.run({
        text,
        channelId
      });

      expect(Chat.messages.insert).toHaveBeenCalled();

      const msg = Chat.messages.insert.calls.mostRecent().args[0];

      expect(msg.text).toBe(text);
      expect(msg.author.id).toBe(userId);
      expect(msg.channelId).toBe(channelId);
    });
  });

  describe('markRead', () => {
    const markRead = new MeteorMethod(
      Chat.channels.methods.markRead,
      'Chat.channels.methods.markRead'
    );
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

    it('should fail when message does not exist', (done) => {
      const spy = spyOn(Chat.messages, 'findOne').and.returnValue(undefined);

      loggedIn();

      try{
        markRead.run({
          messageId
        });
      } catch(error) {
        expect(spy).toHaveBeenCalled();
        expect(error.errorType).toBe('Meteor.Error');
        expect(error.error).toMatch('notFound');
        done();
      }
    });

    it('should fail when channel does not exist or no access', (done) => {
      const spyM = spyOn(Chat.messages, 'findOne').and.returnValue({
        _id: messageId
      });
      const spyC = spyOn(Chat.channels, 'findOne').and.returnValue(undefined);

      loggedIn();

      try{
        markRead.run({
          messageId
        });
      } catch(error) {
        expect(spyM).toHaveBeenCalled();
        expect(spyC).toHaveBeenCalled();
        expect(error.errorType).toBe('Meteor.Error');
        expect(error.error).toMatch('notFound');
        done();
      }
    });

    it('should update message', () => {
      const spyM = spyOn(Chat.messages, 'findOne').and.returnValue({
        _id: messageId
      });
      const spyC = spyOn(Chat.channels, 'findOne').and.returnValue({
        _id: channelId
      });
      const spyCU = spyOn(Chat.messages, 'update').and.returnValue();

      loggedIn();

      markRead.run({
        messageId
      });

      expect(spyCU).toHaveBeenCalledWith(messageId, {
        $push: {
          readBy: {
            userId,
            readAt: jasmine.any(Date)
          }
        }
      });
    });
  });

  describe('create', () => {
    const create = new MeteorMethod(
      Chat.channels.methods.create,
      'Chat.channels.methods.create'
    );

    it('should fail on missing name', (done) => {
      create.call({}, (e) => {
        expect(e.error).toBe('validation-error');
        expect(e.message).toMatch(/name/i);
        done();
      });
    });

    it('should fail when not logged in', (done) => {
      try {
        create.run({
          name: 'foo'
        });
      } catch(e) {
        expect(e.errorType).toBe('Meteor.Error');
        expect(e.error).toMatch('notLoggedIn');
        done();
      }
    });

    it('should create channel without users', () => {
      const spy = spyOn(Chat.channels, 'insert').and.returnValue();
      const name = 'foo';

      loggedIn();

      create.run({
        name
      });

      expect(spy).toHaveBeenCalledWith({
        name,
        users: undefined,
        authorId: userId
      })
    });

    it('should create channel with users', () => {
      const name = 'foo';
      const users = [recipientId];
      const spyI = spyOn(Chat.channels, 'insert').and.returnValue();
      const spyU = spyOn(Chat.users, 'findOne').and.returnValue({
        _id: recipientId
      });

      loggedIn();

      create.run({
        name,
        users
      });

      expect(spyU).toHaveBeenCalledWith(recipientId);
      expect(spyI).toHaveBeenCalledWith({
        name,
        users: [{
          id: recipientId,
          addedAt: jasmine.any(Date)
        }],
        authorId: userId
      });
    });

    it('should fail when user does not exist', (done) => {
      const name = 'foo';
      const users = [recipientId];
      const spyU = spyOn(Chat.users, 'findOne').and.returnValue(undefined);

      loggedIn();

      try{
        create.run({
          name,
          users
        });
      } catch(e) {
        expect(spyU).toHaveBeenCalledWith(recipientId);
        expect(e.errorType).toBe('Meteor.Error');
        expect(e.error).toMatch('userNotFound');
        done();
      }
    });
  });
});
