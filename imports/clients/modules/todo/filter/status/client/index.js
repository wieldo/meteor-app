import templateUrl from "./view";
import fields from "./../api/fields";
import {moduleName} from "./../../../lib/module";
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
