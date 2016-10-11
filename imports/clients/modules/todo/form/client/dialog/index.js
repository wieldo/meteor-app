import "./../style";
import templateUrl from "./view";
import fields from "./../../api/fields";
import {moduleName} from "./../../../lib/module";
import {init,SetModule,Component,LocalInjectables} from "angular2-now";

init();
SetModule(moduleName);
@Component({
    selector: "meteor-dialogtodo-form",
    templateUrl: templateUrl,
    transclude: true,
    bind: {
        model: "=?",
        setForm : "=?"
    },
    providers: [
        "TodoFormService"
    ]
})
@LocalInjectables
export class TodoDialogFormComponent {
    // valid
    valid = false;

    // name
    form = "TodoDialogForm";

    // fields
    fields = [];
    constructor() {
        this.fields = fields;
        if (this.setForm)
            this.form = this.setForm;
    }
}
