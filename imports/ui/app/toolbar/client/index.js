import templateUrl from "./view";
import {ModuleName} from "./../../../../startup/client";
import { SetModule, init, Component, LocalInjectables } from "angular2-now";

init();
SetModule(ModuleName);
@Component({
    selector: "app-toolbar",
    templateUrl: templateUrl
})
@LocalInjectables
export class AppToolbarComponent {
    constructor(){
    }
}
