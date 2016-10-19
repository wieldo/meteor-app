import templateUrl from "./view";
import fields from "./../lib/fields";
import {moduleName} from "./../../../todo.module";
import {
    init,
    SetModule,
    Component,
    LocalInjectables
} from "angular2-now";
export var component = {
    selector: "todo-filter-status",
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
export class TodoFilterStatusComponent {
    constructor() {
        if (this.debug === true) {
            console.log(fields);
        }
        this.fields = fields;
    }
}
