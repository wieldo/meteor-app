import {ModuleName} from "/imports/modules/forms/lib/client/module";
import templateUrl from "./view";
import elements from "/imports/modules/forms/textarea/lib/api/collection";
import submit from "/imports/modules/forms/lib/client/helpers/on-submit";
import {init, SetModule, State, Component, LocalInjectables} from "angular2-now";
init();

SetModule(ModuleName);
@State({
    name: "app.forms.textarea",
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
