import { highlight } from "./helpers";

export default ($rootScope, $state) => {
    $rootScope.$on("$stateChangeError", (event, toState, toParams, fromState, fromParams, error) => {
    });
    $rootScope.$on("$stateChangeStart", () => {
    });
    $rootScope.$on("$stateChangeSuccess", () => {
        highlight("pre code");
    });
};
