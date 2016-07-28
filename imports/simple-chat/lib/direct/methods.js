// messages
import { Messages } from './../messages/collection';
import messagesSchema from './../messages/schema';
// users
import { Users } from './../users/collection';
const methods = {};

export function message(arg) {
  methods.message.call(arg);
}

export function markRead(arg) {
  methods.markRead.call(arg);
}

methods.message = new ValidatedMethod({
  name: 'Chat.direct.methods.message',
  validate: new SimpleSchema([{
      recipientId: messagesSchema.schema('recipient.id')
    },
    messagesSchema.pick(['text'])
  ]).validator(),
  run({
    recipientId,
    text
  }) {
    const userId = this.userId;

    if (!userId) {
      throw new Meteor.Error(`${this.name}.notLoggedIn`,
        'Must be logged in to send message.');
    }

    const recipient = Users.findOne(recipientId);

    if (!recipient) {
      throw new Meteor.Error(`${this.name}.userNotFound`,
        'User does not exist.');
    }

    Messages.insert({
      text,
      recipient: {
        id: recipient._id,
        name: recipient.emails[0].address
      },
      author: {
        id: userId,
        name: Meteor.user().emails[0].address
      }
    });
  }
});

methods.markRead = new ValidatedMethod({
  name: 'Chat.direct.methods.markRead',
  validate: new SimpleSchema({
    messageId: {
      type: String,
      regEx: SimpleSchema.RegEx.Id
    }
  }).validator(),
  run({
    messageId
  }) {
    if (!this.userId) {
      throw new Meteor.Error(`${this.name}.notLoggedIn`,
        'Must be logged in to mark message as read.');
    }

    const changed = Messages.update(messageId, {
      $set: {
        readAt: new Date()
      }
    });

    if (changed === 0) {
      throw new Meteor.Error(`${this.name}.notFound`,
        'Message does not exist.');
    }
  }
});
