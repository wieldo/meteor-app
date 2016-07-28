import {moduleName} from "../lib/module";
import templateUrl from "./view";
import "./style";
import {init,SetModule,State,Component,View,LocalInjectables} from "angular2-now";
init();
SetModule(moduleName);
@State({
    name: 'app.dashboard',
    url: '/dashboard'
})
@Component({
    selector: "dashboard"
})
@View({
    templateUrl: templateUrl
})
@LocalInjectables
export class DashboardComponent {
    constructor() {
    }
}
