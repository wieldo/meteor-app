import {ModuleName as Core} from "./core";
import {moduleName as Routing} from "./routing";
import highlight from "./helpers/highlight";

// Chat
import "/imports/modules/chat/client/";
// Dashboard
import "/imports/modules/dashboard/lib/module";
import "/imports/modules/dashboard/client/";
// Module Forms
import "/imports/modules/forms/lib/client/module";
import "/imports/modules/forms/lib/client/component";
// Sidenav
import "/imports/ui/sidenav/lib/service";
// Module To do
import "/imports/modules/todo/lib/client/module";
import "/imports/modules/todo/lib/client/component";
// Module Signin
import "/imports/modules/signin/lib/client/module";
import "/imports/modules/signin/lib/client/component";
// Module Signup
import "/imports/modules/signup/lib/module";
import "/imports/modules/signup/client/";
// Settings
import "/imports/modules/settings/lib/module";
import "/imports/modules/settings/client/";

import "/imports/modules/crypto/lib/module";
import "/imports/modules/crypto/client/";

import {init, SetModule} from "angular2-now";
// initialize
export const ModuleName = "app";
init();
SetModule(ModuleName,[
    Core,
    Routing,
    "ngMaterial",
    // Modules
    "crypto",
    "Dashboard",
    "ModuleForms",
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
}).run(($rootScope, $state) => {
    $rootScope.$on("$stateChangeError", (event, toState, toParams, fromState, fromParams, error) => {
    });
    $rootScope.$on("$stateChangeStart", (event, toState, toParams, fromState, fromParams) => {
        highlight("pre code");
    });
});
