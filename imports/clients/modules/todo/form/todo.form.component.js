import "./todo.form.style";
import "./todo.form.service";
import templateUrl from "./todo.form.view";
import TodoFormFields from "./todo.form.formly";
import { moduleName } from "./../todo.module";
import { init, SetModule, Component, LocalInjectables } from "angular2-now";
init();
SetModule(moduleName);
@Component({
    selector: "todo-form",
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
export class TodoFormComponent {
    debug = false;

    // valid
    valid = false;

    // name
    form = "TodoForm";

    // fields
    fields = [];

    constructor() {
        this.fields = TodoFormFields;
        if (this.setForm)
            this.form = this.setForm;
    }
}
