import templateUrl from "./view";
import {ModuleName} from "./../../lib/module";
import elements from "./../api/collection";
import submit from "./../../client/helpers/on-submit";
import {init,SetModule,State,Component,LocalInjectables} from "angular2-now";

init();
SetModule(ModuleName);
@State({
    name: "app.developers.forms.datepicker",
    url: "/datepicker"
})
@Component({
    selector: "meteor-forms-datepicker",
    templateUrl: templateUrl
})
@LocalInjectables
export class FormsDatepickerComponent {
    constructor(){
        this.elements = elements;
    }
    onSubmit = (name) => {
        submit(name, this.elements);
    }
}
