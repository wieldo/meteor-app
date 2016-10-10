
Meteor.methods({
    "users.list"(find) {
        return Meteor.users.find(find).fetch();
    }
});

export var UsersList;
