// messages
import {
    Messages
} from "./../../messages/collection";
import messagesSchema from "./../../messages/schema";
import messagesPublicFields from "./../../messages/public-fields";
// channels
import {
    Channels
} from "./../../channels/collection";
import {
    one as channelsOne,
    messages as channelsMessages
} from "./../../channels/selectors";
// direct
import {
    messages as directMessages
} from "./../../direct/selectors";

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
