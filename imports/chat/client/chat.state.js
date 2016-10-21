export default {
    name: "app.clients.chat",
    url: "/chat",
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
