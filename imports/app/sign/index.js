import "./style";
import "./../../benefits/client";
import stateProvider from "./state";
import { ModuleName } from "./../app.module";
import { init, SetModule, Component } from "angular2-now";
init();
SetModule(ModuleName)
    .config(stateProvider);
@Component({
    selector: "sign"
})
export class SignComponent {
    constructor() {

    }
}
