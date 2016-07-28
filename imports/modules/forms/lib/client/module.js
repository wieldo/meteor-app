// Forms
import "wieldoformlymaterial";
import {init,SetModule,options} from "angular2-now";
import customTemplateWrapper from "../../input/lib/client/wrapper/wrapper";
//options({controllerAs: "vm"});

init();
export const ModuleName = "ModuleForms";
SetModule(ModuleName,[
    "wieldoFormlyMaterial"
]).config((formlyConfigProvider) => {
    customTemplateWrapper(formlyConfigProvider);
});
