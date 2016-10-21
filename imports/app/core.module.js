import "angular-meteor";
import "angular-storage";
import { RoutingModule } from "./routing.module";
import { init, SetModule } from "angular2-now";
init();
export const ModuleName = "CoreModule";
export const CoreModule = SetModule(ModuleName,[
    "angular-meteor",
    "angular-storage",
    RoutingModule.name
]);
