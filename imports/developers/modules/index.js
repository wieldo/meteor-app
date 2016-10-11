
// crypto
import "./crypto/";
// Module Forms
import "./forms/";
// Dashboard
import "./dashboard/";

export const moduleName = "Developers";
import {init,SetModule} from "angular2-now";
init();
SetModule(moduleName,[
    "Crypto",
    "DevelopersDashboard",
    "FormsModule"
]);
