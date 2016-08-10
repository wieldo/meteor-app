import "./style";
import templateUrl from "./view";
import {moduleName} from "../lib/module";
import {init,SetModule,State,Component,LocalInjectables} from "angular2-now";
init();
SetModule(moduleName);
@State({
    name: "app.clients.dashboard",
    defaultRoute: true,
    url: "/dashboard"
})
@Component({
    selector: "dashboard",
    templateUrl: templateUrl
})
@LocalInjectables
export class DashboardComponent {
    constructor() {
    }
}
