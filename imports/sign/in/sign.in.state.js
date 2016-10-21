export default {
    name: "app.sign.in",
    url: "/signin",
    resolve: {
        loggedIn: ($state, $timeout) => {
            if (Meteor.userId()) {
                $timeout(function() {
                    $state.go("app.clients.dashboard");
                },0);
            }
        }
    }
};
