import templateUrl from "./view";
const benefitsTemplateUrl = templateUrl;
export default benefitsTemplateUrl;
import {ModuleName} from "./../../startup/client/";
import {init, SetModule, Component} from "angular2-now";
init();

SetModule(ModuleName);
@Component({
    selector: "benefits",
    templateUrl: templateUrl
});
export class BenefitsComponent {
    constructor(){
        this.test = "miaaau";
    }
}
