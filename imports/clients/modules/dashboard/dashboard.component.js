import "./dashboard.style";
import templateUrl from "./dashboard.view";
import dashboardState from "./dashboard.state";
import { moduleName } from "./dashboard.module";
import { init, SetModule, State, Component, LocalInjectables } from "angular2-now";
init();
SetModule(moduleName);
@State(dashboardState)
@Component({
    selector: "dashboard",
    templateUrl: templateUrl
})
@LocalInjectables
export class DashboardComponent {
    constructor() {
    }
}
