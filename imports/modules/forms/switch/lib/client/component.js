import {ModuleName} from "/imports/modules/forms/lib/client/module";
import templateUrl from "./view";
import elements from "/imports/modules/forms/switch/lib/api/collection";
import submit from "/imports/modules/forms/lib/client/helpers/on-submit";
import {init, SetModule, State, Component, LocalInjectables} from "angular2-now";
init();

SetModule(ModuleName);
@State({
    name: "app.forms.switch",
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
