import templateUrl from "./view";
import {moduleName} from "../lib/module";
import {init, SetModule, Component, State, LocalInjectables} from "angular2-now";

init();
SetModule(moduleName);
@State({
    name: "app.clients.settings",
    url: "/settings",
    resolve: {
        user: ($stateParams, $state, $timeout) => {
            if (!Meteor.userId()) {
                $timeout(function() {
                    $state.go("app.sign.in");
                },0);
            }
            else
                return Meteor.user();
        }
    }
})
@Component({
    selector: "meteor-settings",
    templateUrl: templateUrl,
    providers: [
        "$timeout"
    ]
})
@LocalInjectables
export class SettingsComponent {
    constructor() {
    }
}
