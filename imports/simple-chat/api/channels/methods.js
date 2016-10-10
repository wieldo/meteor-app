import _ from "underscore";
// channels
import channelsSchema from "./schema";
import { Channels } from "./collection";
import { one as channelsOne } from "./selectors";
// users
import { Users } from "./../users/collection";
// messages
import messagesSchema from "./../messages/schema";
import { Messages } from "./../messages/collection";

const methods = {};

export function create(arg) {
    methods.create.call(arg);
}

export function message(arg) {
    methods.message.call(arg);
}

export function markRead(arg) {
    methods.markRead.call(arg);
}

methods.create = new ValidatedMethod({
    name: "Chat.channels.methods.create",
    validate: new SimpleSchema([
        channelsSchema.pick(["name"]), {
            users: {
                type: [String],
                optional: true
            },
            "users.$": {
                type: String,
                regEx: SimpleSchema.RegEx.Id
            }
        }
    ]).validator(),
    run({
      name,
      users
    }) {
        const userId = this.userId;
        let usersObject;

        if (!userId) {
            throw new Meteor.Error(`${this.name}.notLoggedIn`, "Must be logged in to create channnel.");
        }

        if (users) {
            users.forEach((uid) => {
                if (!Users.findOne(uid)) {
                    throw new Meteor.Error(`${this.name}.userNotFound`, "User does not exist.");
                }
            });

            usersObject = users.map((uid) => ({
                id: uid,
                addedAt: new Date
            }));
        }

        Channels.insert({
            name,
            users: usersObject || undefined,
            authorId: userId
        });
    }
});

/**
 *
 */
methods.message = new ValidatedMethod({
    name: "Chat.channels.methods.message",
    validate: messagesSchema.pick(["channelId", "text"]).validator(),
    run({
      channelId,
      text
    }) {
        const userId = this.userId;

        if (!userId) {
            throw new Meteor.Error(`${this.name}.notLoggedIn`, "Must be logged in to send message.");
        }

        const channel = Channels.findOne(channelId);

        if (!channel) {
            throw new Meteor.Error(`${this.name}.channelNotFound`, "Channel does not exist.");
        }

        if (channel.authorId !== userId && !_.findWhere(channel.users, {
            id: userId
        })) {
            throw new Meteor.Error(`${this.name}.noAccess`, "No access.");
        }

        Messages.insert({
            channelId,
            text,
            author: {
                id: userId,
                name: Meteor.user().emails[0].address
            }
        });
    }
});

methods.markRead = new ValidatedMethod({
    name: "Chat.channels.methods.markRead",
    validate: new SimpleSchema({
        messageId: {
            type: String,
            regEx: SimpleSchema.RegEx.Id
        }
    }).validator(),
    run({
      messageId
    }) {
        const userId = this.userId;

        if (!userId) {
            throw new Meteor.Error(`${this.name}.notLoggedIn`, "Must be logged in to mark message as read.");
        }

        const message = Messages.findOne(messageId);

        if (!message) {
            throw new Meteor.Error(`${this.name}.notFound`, "Message does not exist.");
        }

        const channel = Channels.findOne(
          channelsOne(userId, message.channelId)
        );

        if (!channel) {
            throw new Meteor.Error(`${this.name}.notFound`, "Channel does not exist.");
        }

        if (!_.findWhere(message.readBy, {
            userId
        })) {
            Messages.update(messageId, {
                $push: {
                    readBy: {
                        userId,
                        readAt: new Date()
                    }
                }
            });
        }
    }
});
