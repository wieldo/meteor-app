import "./style";
import templateUrl from "./view";
import {moduleName} from "./../lib/module";
import {init,SetModule,Component, State} from "angular2-now";
init();
SetModule(moduleName);
@State({
    name: "app.developers.dashboard",
    url: "/dashboard"
});
@Component({
    selector: "developers-dashboard",
    templateUrl: templateUrl
});
export class DevelopersDashboardComponent {
    constructor() {

    }
}
