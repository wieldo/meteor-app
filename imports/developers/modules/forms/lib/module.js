// Forms
import "wieldoformlymaterial";
import customTemplateWrapper from "./../input/client/wrapper/wrapper";
import {init,SetModule,options} from "angular2-now";
options({controllerAs: "vm"});
init();
export const ModuleName = "FormsModule";
SetModule(ModuleName,[
    "wieldoFormlyMaterial"
]).config((formlyConfigProvider) => {
    customTemplateWrapper(formlyConfigProvider);
});
