import templateUrl from "./app.view";
// abstract states
import "./developers";
import "./clients";
import "./sign";
import "./../ui/navigation/client/";
import { ModuleName } from "./app.module";
import { init, SetModule, State, Component, bootstrap, options, LocalInjectables } from "angular2-now";
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
