import templateUrl from "./view";
import "/imports/navigation/client/component";
import "/imports/navigation/lib/service";

import { SetModule, init, Component, State, bootstrap, options, LocalInjectables, MeteorReactive } from "angular2-now";
options({
    controllerAs: "vm"
});
init();
export var $Component = {
    State: "app",
    Name: "app"
};
import {ModuleName} from '/imports/startup/client/';
SetModule(ModuleName);
@State({
    name: $Component.State,
    //url: "/app",
    abstract: true
})
@Component({
    selector: $Component.Name,
    templateUrl: templateUrl,
    providers: [
        "$q",
        "$state",
        "SidenavService",
        "NavigationService"
    ]
})
@MeteorReactive
@LocalInjectables
class AppComponent {
    constructor(){
        this.sidenav = this.SidenavService.Init();
        this.navigation = this.NavigationService.Init();

        this._helpers();
    }

    _helpers = () => {
        this.helpers({
            currentUser: () => {
                this.currentUser = Meteor.user();
                console.log(Meteor.user());
                return Meteor.user();
            }
        });
    }

    logout = () => {
        Meteor.logout((result) => {
            console.log(result);
        });
    }
}
bootstrap(AppComponent);
