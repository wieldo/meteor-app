import templateUrl from "./view";
import {ModuleName} from '/imports/startup/client/';
import {init,SetModule,Component, State} from "angular2-now";
init();
SetModule(ModuleName);
@State({
    name: "app.developers.dashboard",
    url: "/dashboard"
})
@Component({
    selector: "developers-dashboard",
    templateUrl: templateUrl
})
export class DevelopersDashboardComponent {
    constructor() {

    }
}
