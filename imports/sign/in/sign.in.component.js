import "./sign.in.style";
import "./form/client/";
import templateUrl from "./sign.in.view";
import signInState from "./sign.in.state";
import { moduleName } from "./sign.in.module";
import { init, SetModule, State, Component, LocalInjectables } from "angular2-now";
export var component = {
    selector: "signin",
    templateUrl: templateUrl,
    providers: [
        "signin"
    ]
};
init();
SetModule(moduleName);
@State(signInState)
@Component(component)
@LocalInjectables
export class SigninComponent {
    debug = false;
    constructor() {
        if (this.debug === true) {
            console.log(this.signin);
        }
    }
}
