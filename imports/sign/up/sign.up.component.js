import "./sign.up.style";
import "./form/client/";
import signUpState from "./sign.up.state.js";
import { moduleName } from "./sign.up.module";
import { init, SetModule, State, Component, LocalInjectables } from "angular2-now";

init();
SetModule(moduleName);
@State(signUpState)
@Component({
    selector: "sign-up"
})
@LocalInjectables
export class SignupComponent {
    constructor() {}
}
