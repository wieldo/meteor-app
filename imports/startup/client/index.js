// Modules
import {
    Core,
    Routing
} from "/imports/lib";

// Filters
import {
    highlightAuto,
    unsafe
} from "/imports/lib/filter";

// API USERS
import "./../../users";
// config
import "./../config/simple-schema-messages";
import {
    mdThemingProvider,
    stateProvider,
    locationProvider,
    sceProvider
} from "./../config";
// run
import run from "./run";
// Imported Modules that are used in primary module below
import "./modules";
// Imported Components that are used in primary module below
import "./components";
// Chat
import "./../../chat/client/";
// Sidenav
import "./../../ui/sidenav/lib/service";
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
]);
// Configs
SetModule(ModuleName).config(mdThemingProvider);
SetModule(ModuleName).config(stateProvider);
SetModule(ModuleName).config(locationProvider);
SetModule(ModuleName).config(sceProvider);

// Runs
SetModule(ModuleName)
    .run(run)
    .filter("highlight", highlightAuto)
    .filter("unsafe", unsafe);
