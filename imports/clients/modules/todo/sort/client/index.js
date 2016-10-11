import "./style";
import templateUrl from "./view";
import fields from "./../api/fields";
import {
    moduleName as Todo
} from "./../../lib/module";
import {
    init,
    SetModule,
    Component,
    LocalInjectables
} from "angular2-now";
init();
SetModule(Todo);
@Component({
    selector: "todo-sort",
    templateUrl: templateUrl,
    bind: {
        model: "=",
        collection: "=?"
    }
})
@LocalInjectables
export class TodoSortComponent {
    constructor(){
        this.fields = fields;
    }
}
