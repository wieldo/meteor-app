
if (Meteor.isServer) {
    // Validate username, sending a specific error message on failure.
    Accounts.validateNewUser(function (user) {
        if (user.password && user.username.length >= 3)
            return true;
        throw new Meteor.Error(403, "Username must have at least 3 characters");
    });
    // Validate username, without a specific error message.
    Accounts.validateNewUser(function (user) {
        return user.username !== "root";
    });
}
