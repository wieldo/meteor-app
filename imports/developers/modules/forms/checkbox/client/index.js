
import {ModuleName} from "./../../lib/module";
import templateUrl from "./view";
import elements from "./../api/collection";
import submit from "./../../client/helpers/on-submit";
import {
    init,
    SetModule,
    State,
    Component,
    LocalInjectables
} from "angular2-now";

export var state = {
    name: "app.developers.forms.checkbox",
    url: "/checkbox"
};
export var component = {
    name: "FormsCheckboxComponent",
    state: state,
    selector: "meteor-forms-checkbox",
    templateUrl: templateUrl,
    providers: [
        "$scope"
    ]
};
init();
SetModule(ModuleName);
@State(state)
@Component(component)
@LocalInjectables
export class FormsCheckboxComponent {
    form = "checkboxForm";
    model = {};
    options = {
        formState: {
            disabled: false
        }
    };
    constructor() {
        this.elements = elements;
    }

    /*
     Submit form
     */
    onSubmit = (name) => {
        submit(name, this.elements);
    };

    isIndeterminate = () => {
        console.log("isIndeterminate");
        if (this.allChecked === false) {
            for (var key in this.checkbox) {
                if (this.checkbox[key] === true) {
                    return true;
                }
            }
        }
    }
}
