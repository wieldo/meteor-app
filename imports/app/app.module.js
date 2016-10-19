// Modules
import { CoreModule } from "./core.module";

// Optional
import "angular-loading-bar";

// Filters
import { highlightAuto, unsafe } from "./filter";

// API USERS
import "./../users";
// config
import "./config/simple-schema-messages";

import { mdThemingProvider, stateProvider, locationProvider, sceProvider } from "./config";

// run
import run from "./run";

// Imported Modules that are used in primary module below
import { DashboardModule, TodoModule, SettingsModule } from "./modules";

// Imported Components that are used in primary module below
import "./components";
// Chat
import "./../chat/client/";
// Sidenav
import "./../ui/sidenav/lib/service";

import { init, SetModule } from "angular2-now";
// initialize
export const ModuleName = "app";
init();
SetModule(ModuleName,[
    CoreModule.name,

    "angular-loading-bar",
    "cfp.loadingBar",
    "cfp.loadingBarInterceptor",
    "ngMaterial",
    "ngAnimate",

    DashboardModule.name,
    TodoModule.name,
    SettingsModule.name,
    "Developers",
    "SimpleNavigationModule",
    "Sidenav",
    "Signin",
    "Signup",
    "simple-chat"
]);
// Configs
SetModule(ModuleName).config(mdThemingProvider);
SetModule(ModuleName).config(stateProvider);
SetModule(ModuleName).config(locationProvider);
SetModule(ModuleName).config(sceProvider);
SetModule(ModuleName).config(["cfpLoadingBarProvider", function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
    cfpLoadingBarProvider.includeBar = true;
    cfpLoadingBarProvider.latencyThreshold = 0;
    cfpLoadingBarProvider.parentSelector = "#loading-bar-container";
    cfpLoadingBarProvider.startSize = 0.0;
    console.log(cfpLoadingBarProvider);
}]);
// Runs
SetModule(ModuleName)
    .run(run)
    .filter("highlight", highlightAuto)
    .filter("unsafe", unsafe);
