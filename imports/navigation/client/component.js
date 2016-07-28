import templateUrl from "./view";
import "./style";
import {ModuleName} from "/imports/startup/client/";
import {$Service as NavigationService} from "../lib/service";
import "../lib/directive";
import {init,SetModule,Component, LocalInjectables} from "angular2-now";

init();
export var $Component = {
    Name: "meteor-navigation",
    templateUrl: templateUrl
};
SetModule(ModuleName);
@Component({
    selector: $Component.Name,
    templateUrl: templateUrl,
    providers: [
        "$scope",
        "$state",
        "SidenavService",
        NavigationService.Name
    ]
})
@LocalInjectables
export class MeteorNavigation {
    constructor(){
        this.sidenav = this.SidenavService.Init();
    }
}
