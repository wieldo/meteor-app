import {ModuleName} from "./../../";
import state from "./state";
import "./../../../../benefits/client";
import "./style";
import {init,SetModule,Component} from "angular2-now";
init();
SetModule(ModuleName).config(state);
@Component({
    selector: "sign"
})
export class SignComponent {
    constructor() {

    }
}
