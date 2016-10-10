import "./style";
import "./../form/client/";
import {moduleName} from "./../lib/module";
import templateUrl from "./view";
import {
    init,
    SetModule,
    State,
    Component,
    LocalInjectables
} from "angular2-now";
export var state = {
    name: "app.sign.in",
    url: "/signin",
    resolve: {
        loggedIn: ($state, $timeout) => {
            if (Meteor.userId()) {
                $timeout(function() {
                    $state.go("app.clients.dashboard");
                },0);
            }
        }
    }
};
export var component = {
    selector: "signin",
    templateUrl: templateUrl,
    providers: [
        "signin"
    ]
};
init();
SetModule(moduleName);
@State(state)
@Component(component)
@LocalInjectables
export class SigninComponent {
    constructor() {
        console.log(this.signin);
    }
}
