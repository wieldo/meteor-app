import templateUrl from "./todo.form.dialog.view";
import fields from "./../todo.form.formly";
import { moduleName } from "./../../todo.module";
import { init, SetModule, Component, LocalInjectables } from "angular2-now";

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
export class TodoFormDialogComponent {
    // valid
    valid = false;

    // name
    form = "TodoFormDialog";

    // fields
    fields = [];
    constructor() {
        this.fields = fields;
        if (this.setForm) {
            this.form = this.setForm;
        }
    }
}
