import templateUrl from "./view";
import {ModuleName} from "./../../lib/module";
import InputsCollection from "./../api/collection";
import submit from "./../../client/helpers/on-submit";
import {init, SetModule, State, Component, LocalInjectables} from "angular2-now";

init();
SetModule(ModuleName);
@State({
    name: "app.developers.forms.input",
    url: "/input"
})
@Component({
    selector: "meteor-forms-element",
    templateUrl: templateUrl
})
@LocalInjectables
export class FormsElementComponent {
    form = "inputForm";
    model = {
        firstname: "Obi Wan"
    };
    elements = [];
    options = {
        formState: {
            disabled: true
        }
    };
    constructor(){
        this.elements = InputsCollection;
    }
    onSubmit = (name) => {
        submit(name, this.elements);
    }
}
