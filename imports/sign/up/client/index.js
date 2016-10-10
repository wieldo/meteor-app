import {moduleName} from "../lib/module";
import templateUrl from "./view";
import "./style";
import "../form/client/";
import {init,SetModule,State,Component,LocalInjectables} from "angular2-now";

init();
SetModule(moduleName);
@State({
    name: "app.sign.up",
    url: "/signup",
    resolve: {
        user: ($stateParams, $state, $timeout) => {
        }
    },
    templateUrl: templateUrl,
    providers: [
        "$state"
    ]
})
@Component({
    selector: "sign-up"
})
@LocalInjectables
export class SignupComponent {
    constructor() {
    }
}
