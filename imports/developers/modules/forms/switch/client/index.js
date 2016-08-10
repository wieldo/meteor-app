import {ModuleName} from "./../../lib/module";
import templateUrl from "./view";
import elements from "./../lib/api/collection";
import submit from "./../../client/helpers/on-submit";
import {init, SetModule, State, Component, LocalInjectables} from "angular2-now";
init();

SetModule(ModuleName);
@State({
    name: "app.developers.forms.switch",
    url: "/switch"
})
@Component({
    selector: "meteor-forms-switch",
    templateUrl: templateUrl
})
@LocalInjectables
export class MeteorFormsSwitchComponent {
    constructor(){
        this.elements = elements;
    }
    /*
        onSubmit
    */
    onSubmit = (name) => {
        submit(name, this.elements);
    }

}
