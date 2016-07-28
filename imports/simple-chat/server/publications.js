import _ from "underscore";
// users
import {Users} from "./../lib/users/collection";
import {all as usersAll} from "./../lib/users/selectors";
// messages
import {Messages} from "./../lib/messages/collection";
import messagesSchema from "./../lib/messages/schema";
import messagesPublicFields from "./../lib/messages/public-fields";
// channels
import {Channels} from "./../lib/channels/collection";
import {all as channelsAll, one as channelsOne, messages as channelsMessages} from "./../lib/channels/selectors";
// direct
import {messages as directMessages} from "./../lib/direct/selectors";

//
// Publish all available users
// Used in chatUsersComponent
//
Meteor.publish("chat.users", function publishChatUsers() {
    if (!this.userId) {
        return this.ready();
    }

    const selector = usersAll(this.userId);
    const options = {
        fields: {
            emails: 1
        }
    };

    return Users.find(selector, options);
});

//
// Publish all available channels
// Used in ChannelsComponent
//
Meteor.publish("chat.channels", function publishChatChannels() {
    const userId = this.userId;

    if (!userId) {
        return this.ready();
    }

    const selector = channelsAll(userId);
    const options = {
        fields: {
            name: 1,
            authorId: 1,
            users: 1
        }
    };

    return Channels.find(selector, options);
});

//
// Publish all messages for ONE RECIPIENT
// Used in chatMessagesComponent
//
Meteor.publish("chat.messages", function publishChatMessages(recipientId, channelId, dateLimit) {
    const self = this;
    const userId = self.userId;
    const MAX_MESSAGES = 200;

    // validation
    const recipient = recipientId ? {
        id: recipientId
    } : undefined;
    const author = userId ? {
        id: userId
    } : undefined;

    new SimpleSchema(messagesSchema.pick(["channelId", "recipient.id", "author.id"])).validate({
        channelId,
        recipient,
        author
    });

    const optionsSchema = new SimpleSchema({
        dateLimit: {
            type: Date
        }
    });

    optionsSchema.validate({
        dateLimit
    });

    let selector;

    if (recipientId) {
        //
        // Messages where:
        // current user is an author and recipient matches user we're looking for
        // or
        // current user is a recipient and an author is the user we're looking for
        //
        selector = directMessages(userId, recipientId);
    } else if (channelId) {
        //
        // Messages where:
        // channel is the same we're looking for
        // and
        // we have access to the channel
        //
        selector = channelsMessages(channelId);

        if (!Channels.findOne(channelsOne(userId, channelId))) {
            throw new Meteor.Error("No access");
        }
    }

    selector.createdAt = {
        $gte: dateLimit
    };

    //
    // Sort by:
    // createdAt DESC
    //
    const options = {
        fields: messagesPublicFields,
        sort: {
            createdAt: -1
        },
        limit: MAX_MESSAGES
    };

    return Messages.find(selector, options);
});
