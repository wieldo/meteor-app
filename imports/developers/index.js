
// crypto
import "./crypto";
// Module Forms
import "./forms";
// Dashboard
import { DashboardModule } from "./dashboard";
import { init,SetModule } from "angular2-now";
console.log(`DashboardModule`, DashboardModule);
init();
export const moduleName = "DevelopersModule";
export const DevelopersModule = SetModule(moduleName,[
    "CryptoModule",
    DashboardModule.name,
    "FormsModule"
]);
