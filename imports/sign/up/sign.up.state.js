import templateUrl from "./sign.up.view";
export default {
    name: "app.sign.up",
    url: "/signup",
    resolve: {
        user: ($stateParams, $state, $timeout) => {
        }
    },
    templateUrl: templateUrl,
    providers: [
        "$state"
    ]
};
