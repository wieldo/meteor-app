import {ModuleName} from "./../../lib/module";
import templateUrl from "./view";
import elements from "./../api/collection";
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
export class FormsSelectComponent {
    constructor(){
        this.elements = elements;
    }
    /*
        onSubmit
    */
    onSubmit = (form) => {
        console.log(this.elements);
        submit(form, this.elements);
    }

}
