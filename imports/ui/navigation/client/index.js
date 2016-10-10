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
import {service} from "./../lib/service";
init();
export var component = {
    name: "simple-navigation"
};
SetModule(moduleName);
@Component({
    selector: component.name,
    templateUrl: templateUrl,
    bind: {
        data: "=?",
        name: "=?",
        options: "=?",
        header: "=?",
        parent: "=?"
    },
    providers: [
        service.name
    ]
})
@LocalInjectables
export class NavigationComponent {
    constructor() {
        // If using data
        if (this.data) {
            let navigationService = this.SimpleNavigationService;
            navigationService.set(this.data.name, this.data.options, this.data.header, this.data.parentName);
            this.navigation = navigationService.get();
        }
        if (this.name && this.options) {
            let navigationService = this.SimpleNavigationService;
            navigationService.set(this.name, this.options, this.header, this.parent);
            this.navigation = navigationService.get();
        }
    }
}
