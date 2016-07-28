import {ModuleName} from "/imports/modules/forms/lib/client/module";
import templateUrl from "./view";
import elements from "/imports/modules/forms/slider/lib/api/collection";
import submit from "/imports/modules/forms/lib/client/helpers/on-submit";
import {init, SetModule, State, Component, LocalInjectables} from "angular2-now";
init();

SetModule(ModuleName);
@State({
    name: "app.forms.slider",
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
