// channels
import {
    Channels
} from "./../../channels/collection";
import {
    all as channelsAll
} from "./../../channels/selectors";


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
