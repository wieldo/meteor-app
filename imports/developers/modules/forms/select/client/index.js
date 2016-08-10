import {ModuleName} from "./../../lib/module";
import templateUrl from "./view";
import elements from "./../lib/api/collection";
import submit from "./../../client/helpers/on-submit";
import {init, SetModule, State, Component, View, LocalInjectables} from "angular2-now";
init();

SetModule(ModuleName);
@State({
    name: "app.developers.forms.select",
    url: "/select"
})
@Component({
    selector: "meteor-forms-select"
})
@View({
    templateUrl: templateUrl
})
@LocalInjectables
export class MeteorFormsSelectComponent {
    constructor(){
        this.elements = elements;
    }
    /*
        onSubmit
    */
    onSubmit = (form) => {
        submit(form, this.elements);
    }

}
