export default {
    name: "app.clients",
    abstract: true,
    resolve: {
        user: ($stateParams, $state, $timeout) => {
            if (!Meteor.userId()) {
                $timeout(function() {
                    $state.go("app.sign.in");
                },0);
            }
        }
    }
};
