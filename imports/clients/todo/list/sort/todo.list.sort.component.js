import "./todo.list.sort.style";
import templateUrl from "./todo.list.sort.view";
import fields from "./todo.list.sort.formly";
import { moduleName as Todo } from "./../../todo.module";
import { init, SetModule, Component, LocalInjectables } from "angular2-now";
init();
SetModule(Todo);
@Component({
    selector: "todo-list-sort",
    templateUrl: templateUrl,
    bind: {
        model: "=",
        collection: "=?"
    }
})
@LocalInjectables
export class TodoListSortComponent {
    constructor(){
        this.fields = fields;
    }
}
