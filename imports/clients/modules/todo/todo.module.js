// Modules
import {
    init,
    SetModule,
    options
} from "angular2-now";
options({
    controllerAs: "vm"
});
init();
export const moduleName = "Todo";
export const TodoModule = SetModule(moduleName, []);