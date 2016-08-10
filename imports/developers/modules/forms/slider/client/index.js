import {ModuleName} from "./../../lib/module";
import templateUrl from "./view";
import elements from "./../lib/api/collection";
import submit from "./../../client/helpers/on-submit";
import {init, SetModule, State, Component, LocalInjectables} from "angular2-now";
init();

SetModule(ModuleName);
@State({
    name: "app.developers.forms.slider",
    url: "/slider"
})
@Component({
    selector: "meteor-forms-slider",
    templateUrl: templateUrl
})
@LocalInjectables
export class MeteorFormsSliderComponent {
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
