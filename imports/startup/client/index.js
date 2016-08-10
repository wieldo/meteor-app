import {ModuleName as Core} from "./core";
import {moduleName as Routing} from "./routing";
import highlight from "./helpers/highlight";
// Chat
import "./../../chat/client/";
// Dashboard
import "./../../clients/modules/dashboard/lib/module";
import "./../../clients/modules/dashboard/client/";
// Module Forms
import "./../../developers/modules/index";
// Sidenav
import "./../../ui/sidenav/lib/service";
// Module To do
import "./../../clients/modules/todo/lib/module";
import "./../../clients/modules/todo/client/";
// Module Signin
import "./../../clients/modules/signin/lib/module";
import "./../../clients/modules/signin/client/";
// Module Signup
import "./../../clients/modules/signup/lib/module";
import "./../../clients/modules/signup/client/";
// Settings
import "./../../clients/modules/settings/lib/module";
import "./../../clients/modules/settings/client/";
// Navigation
import "./../../ui/navigation/lib/module";

import {init, SetModule} from "angular2-now";
// initialize
export const ModuleName = "app";
init();
SetModule(ModuleName,[
    Core,
    Routing,
    "ngMaterial",

    // Modules
    "Dashboard",
    "Developers",
    "SimpleNavigationModule",
    "Todo",
    "Settings",
    "Sidenav",
    "Signin",
    "Signup",
    "simple-chat"
])
.config(($locationProvider, $mdThemingProvider, $sceProvider) => {
    $mdThemingProvider.theme("meteorApp");
    $mdThemingProvider.theme("meteor");

    $mdThemingProvider.setDefaultTheme("default");
    $locationProvider.html5Mode(true);
    $sceProvider.enabled(false);
}).run(($rootScope, $state, SimpleNavigationService) => {
    $rootScope.$on("$stateChangeError", (event, toState, toParams, fromState, fromParams, error) => {
        console.log(error);
    });
    $rootScope.$on("$stateChangeStart", () => {
    });
    $rootScope.$on("$stateChangeSuccess", () => {
        highlight("pre code");
        console.log($state);
        console.log("CHANGE"+ $state.includes("app.clients"));
        //NavigationService.setType($state.includes("app.clients") === true ? "clients" : "developers");
    });

});
