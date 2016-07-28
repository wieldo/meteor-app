import templateUrl from "./view.html";
import {init, SetModule, Component, State, LocalInjectables} from "angular2-now";
init();
SetModule("crypto");
@State({
    name: "app.crypto",
    url: "/crypto"
})
@Component({
    selector: "crypto",
    templateUrl: templateUrl,
    providers: [
        "$scope"
    ]
})
@LocalInjectables
export class CryptoComponent {
    constructor() {
    }
}
