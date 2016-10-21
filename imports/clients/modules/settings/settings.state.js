export default {
    name: "app.clients.settings",
    url: "/settings",
    resolve: {
        user: ($stateParams, $state, $timeout) => {
            if (!Meteor.userId()) {
                $timeout(function() {
                    $state.go("app.sign.in");
                },0);
            }
            else {
                return Meteor.user();
            }
        }
    }
};
