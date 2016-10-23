import "./dashboard.style";
import templateUrl from "./dashboard.view";
import dashboardState from "./dashboard.state";
import { moduleName } from "./dashboard.module";
import { init, SetModule, Component, State } from "angular2-now";
export var component = {
    name: "DashboardComponent",
    state: dashboardState,
    selector: "developers-dashboard",
    templateUrl: templateUrl
};
init();
SetModule(moduleName);
@State(dashboardState)
@Component(component)
export class DashboardComponent {
    constructor() {
    }
}
