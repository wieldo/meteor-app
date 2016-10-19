import {
    Users
} from "./../../users/collection";
import {
    all as usersAll
} from "./../../users/selectors";

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
            emails: 1,
            profile: 1
        }
    };

    return Users.find(selector, options);
});
