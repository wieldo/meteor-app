import "wieldoformlymaterial";
import customTemplateWrapper from "./../input/client/wrapper/wrapper";
import {
    init,
    SetModule,
    options
} from "angular2-now";
init();
options({controllerAs: "vm"});
export const ModuleName = "FormsModule";
export const FormsModule = SetModule(ModuleName,[
    "wieldoFormlyMaterial"
]).config((formlyConfigProvider) => {
    customTemplateWrapper(formlyConfigProvider);
});
