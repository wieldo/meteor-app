import {moduleName} from "../lib/module";
import templateUrl from "./view";
import "./style";
import "../form/client/";
import {init,SetModule,State,Component,LocalInjectables} from "angular2-now";

init();
SetModule(moduleName);
@State({
    name: 'app.signup',
    url: '/signup',
    resolve: {
        user: ($stateParams, $state, $timeout) => {
            if (Meteor.userId()) {
                $timeout(function() {
                    $state.go('app.dashboard');
                },0);
            }
        }
    }
})
@Component({
    selector: "signup",
    templateUrl: templateUrl
})
@LocalInjectables
export class SignupComponent {
    constructor() {
    }
}
