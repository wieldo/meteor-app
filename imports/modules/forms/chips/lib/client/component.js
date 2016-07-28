
import {ModuleName} from "/imports/modules/forms/lib/client/module";
import templateUrl from "./view";
import elements from "/imports/modules/forms/chips/lib/api/collection";
import submit from "/imports/modules/forms/lib/client/helpers/on-submit";
import {init,SetModule,State,Component,LocalInjectables} from "angular2-now";
init();
SetModule(ModuleName);
@State({
    name: "app.forms.chips",
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
