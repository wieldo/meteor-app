const benefitsTemplateUrl = templateUrl;
import templateUrl from "./view";
export default benefitsTemplateUrl;
import {ModuleName} from "./../../startup/client/";
import {init, SetModule, Component} from "angular2-now";

export var component = {
    name: "BenefitsComponent",
    selector: "benefits",
    templateUrl: templateUrl
};
init();
SetModule(ModuleName);
@Component(component)
export class BenefitsComponent {
    constructor(){
        this.test = "miaaau";
    }
}
