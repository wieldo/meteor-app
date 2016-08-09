import templateUrl from "./view.html";
import {initKey, moduleName} from "../lib/module";
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
        /* Salt should be backend-generated and stored data */
        var salt = '135576d158c5ed15132ffc36decde569fe59fef78b6192cd3a521205fb43c47344';
        /* Password provided by user */
        var password = 'MyPASSWORD_1235!@#';
        this.key = initKey(password, salt);
    }
}
