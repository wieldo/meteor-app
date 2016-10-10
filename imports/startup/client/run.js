import {
    highlight
} from "/imports/lib/helpers";

export default ($rootScope, $state) => {
    $rootScope.$on("$stateChangeError", (event, toState, toParams, fromState, fromParams, error) => {
    });
    $rootScope.$on("$stateChangeStart", () => {
    });
    $rootScope.$on("$stateChangeSuccess", () => {
        highlight("pre code");
    });
};
