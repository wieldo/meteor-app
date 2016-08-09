import {
    moduleName
} from "./../lib/module";
import {
    init,
    SetModule,
    Component,
    LocalInjectables
} from "angular2-now";
import "./style";
import templateUrl from "./view";
import {$Service as SimpleNavigationService} from "./../lib/service";
init();
export var $Component = {
    name: "simple-navigation"
};
SetModule(moduleName);
@Component({
    selector: $Component.name,
    templateUrl: templateUrl,
    bind: {
        options: "@",
        name: "@",
        header: "@"
    },
    providers: [
        SimpleNavigationService.name
    ]
})
@LocalInjectables
export class NavigationComponent {
    constructor() {
        this.options = JSON.parse(this.options);
        this.navigation = this.SimpleNavigationService.set(this.name, this.options).setHeader(this.header).get(this.name);
    }
}
