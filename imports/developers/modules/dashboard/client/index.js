import "./style";
import templateUrl from "./view";
import {moduleName} from "./../lib/module";
import {
    init,
    SetModule,
    Component,
    State
} from "angular2-now";
export var state = {
    name: "app.developers.dashboard",
    url: "/dashboard"
};
export var component = {
    name: "DevelopersDashboardComponent",
    state: state,
    selector: "developers-dashboard",
    templateUrl: templateUrl
};
init();
SetModule(moduleName);
@State(state)
@Component()
export class DevelopersDashboardComponent {
    constructor() {
    }
}
