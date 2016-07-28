const MessageAuthor = new SimpleSchema({
  id: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  name: {
    type: String
  }
});

const MessageRecipient = MessageAuthor;

SimpleSchema.messages({
  chatAuthorEqualsRecipient: 'Author and recipient cannot be the same user.',
  chatChannelOrRecipient: 'Message can be sent to channel or recipient.'
});

export default new SimpleSchema({
  author: {
    type: MessageAuthor
  },
  recipient: {
    type: MessageRecipient,
    optional: true,
    custom: function recipientIdCustom() {
      const recipientId = this.field('recipient.id').value;
      const authorId = this.field('author.id').value;
      const channelId = this.field('channelId').value;

      if (recipientId && recipientId === authorId) {
        return 'chatAuthorEqualsRecipient';
      }

      if (recipientId && channelId) {
        return 'chatChannelOrRecipient';
      }

      if (!recipientId && !channelId) {
        return 'chatChannelOrRecipient';
      }
    }
  },
  channelId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    optional: true,
    custom: function channelIdCustom() {
      const recipientId = this.field('recipient.id').value;

      if (recipientId && this.value) {
        return 'chatChannelOrRecipient';
      }

      if (!this.value && !recipientId) {
        return 'chatChannelOrRecipient';
      }
    }
  },
  text: {
    type: String
  },
  readAt: {
    type: Date,
    optional: true
  },
  readBy: {
    type: [Object],
    optional: true
  },
  'readBy.$.userId': {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  'readBy.$.readAt': {
    type: Date
  },
  'readBy.$.userName': {
    type: String,
    optional: true
  },
  createdAt: {
    type: Date,
    autoValue: function createdAtAutoValue() {
      if (this.isInsert) {
        return new Date();
      }

      if (this.isUpsert) {
        return {
          $setOnInsert: new Date()
        };
      }
      this.unset(); // Prevent user from supplying their own value
    }
  }
});
