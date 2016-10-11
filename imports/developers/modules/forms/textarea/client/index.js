import {ModuleName} from "./../../lib/module";
import templateUrl from "./view";
import elements from "./../api/collection";
import submit from "./../../client/helpers/on-submit";
import {init, SetModule, State, Component, LocalInjectables} from "angular2-now";
init();

SetModule(ModuleName);
@State({
    name: "app.developers.forms.textarea",
    url: "/textarea"
})
@Component({
    selector: "meteor-forms-textarea",
    templateUrl: templateUrl
})
@LocalInjectables
export class MeteorFormsTextareaComponent {
    constructor(){
        this.elements = elements;
    }
    /*
        onSubmit
    */
    onSubmit = (form) => {
        submit(form);
    }
}
