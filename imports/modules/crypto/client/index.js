import templateUrl from "./view.html";
import {moduleName} from "../lib/module";
import {init, SetModule, Component, State, LocalInjectables} from "angular2-now";
init();
SetModule(moduleName);
@State({
    name: "app.developers.crypto",
    url: "/crypto"
})
@Component({
    selector: "crypto1",
    templateUrl: templateUrl
})
@LocalInjectables
export class CryptoComponent {
    constructor() {
    }
}
