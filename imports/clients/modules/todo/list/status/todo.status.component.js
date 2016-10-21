import templateUrl from "./todo.status.view";
import fields from "./todo.status.formly";
import { moduleName } from "./../../todo.module";
import { init, SetModule, Component, LocalInjectables } from "angular2-now";
export var component = {
    selector: "todo-list-status",
    templateUrl: templateUrl,
    bind: {
        model: "=",
        collection: "=?"
    },
    providers: [
        "$scope",
        "TodoCollectionService"
    ]
};
init();
SetModule(moduleName);
@Component(component)
@LocalInjectables
export class TodoListStatusComponent {
    constructor() {
        if (this.debug === true) {
            console.log(fields);
        }
        this.fields = fields;
    }
}
