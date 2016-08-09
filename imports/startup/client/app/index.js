import templateUrl from "./view/index";
import "./developers";
import "./clients";
import "./../../../ui/app/toolbar/client";
import "./../../../ui/navigation/client/";
import {ModuleName} from "/imports/startup/client/";
import { SetModule, init, Component, State, bootstrap, options, LocalInjectables } from "angular2-now";
options({controllerAs: "vm"});
init();
export var $Component = {
    State: "app",
    Name: "app"
};
SetModule(ModuleName);
@State({
    name: $Component.State,
    abstract: true
})
@Component({
    selector: $Component.Name,
    templateUrl: templateUrl
})
@LocalInjectables
class AppComponent {
    constructor() {
    }
}
bootstrap(AppComponent);
