
import {ModuleName} from "./../../lib/module";
import templateUrl from "./view";
import elements from "./../lib/api/collection";
import submit from "./../../client/helpers/on-submit";
import {init,SetModule,State,Component,LocalInjectables} from "angular2-now";
init();
SetModule(ModuleName);
@State({
    name: "app.developers.forms.chips",
    url: "/chips"
})
@Component({
    selector: "meteor-forms-chips",
    templateUrl: templateUrl
})
@LocalInjectables

export class MeteorFormsChipsComponent {
    constructor() {
        this.elements = elements;
    }

    /*
        Submit form
    */
    onSubmit = (name) => {
        submit(name, this.elements);
    };
}
