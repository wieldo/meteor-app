import uiRouter from "angular-ui-router";
import { init, SetModule } from "angular2-now";
init();
export const moduleName = "Routing";
export const RoutingModule = SetModule(moduleName,[
    uiRouter
]);
