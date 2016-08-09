import templateUrl from "./view.html";
import initKey from "./helpers/initkey";
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
    /* Salt should be backend-generated and stored data */
    salt = "135576d158c5ed15132ffc36decde569fe59fef78b6192cd3a521205fb43c47344";
    /* Password provided by user */
    password = "MyPASSWORD_1235!@#";
    constructor() {
        this.key = initKey(this.password, this.salt);
    }
}
