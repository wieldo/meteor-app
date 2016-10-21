import templateUrl from "./settings.view";
import settingsState from "./settings.state";
import { moduleName } from "./settings.module";
import { init, SetModule, Component, State, LocalInjectables } from "angular2-now";
init();
SetModule(moduleName);
@State(settingsState)
@Component({
    selector: "meteor-settings",
    templateUrl: templateUrl,
    providers: [
        "$timeout"
    ]
})
@LocalInjectables
export class SettingsComponent {
    constructor() {}
}
