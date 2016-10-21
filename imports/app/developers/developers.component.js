import "./developers.style";
import "./../../ui/navigation/navigation.service";
import templateUrl from "./../app.signed-in.view";
import developersNavigationCollection from "./developers.navigation";
import appNavigationCollection from "./../app.navigation";
import developersState from "./developers.state";
import { ModuleName } from "./../app.module";
import { init, SetModule, Component, State, LocalInjectables, MeteorReactive } from "angular2-now";
init();
SetModule(ModuleName);
@State(developersState)
@Component({
    selector: "developers",
    templateUrl: templateUrl,
    providers: [
        "$q",
        "$state",
        "SidenavService",
        "SimpleNavigationService"
    ]
})
@MeteorReactive
@LocalInjectables
export class AppDevelopersComponent {
    type = "developers";
    constructor(){
        this.sidenav = this.SidenavService.Init();
        // Navigation Api
        this.navigationWorkspaces = developersNavigationCollection;
        this.navigationApp = appNavigationCollection;
        // Navigation
        this.SimpleNavigationService.getSelectedPromise().then(null, null, (notify) => {
            this.simpleNavigation = notify;
        });
        this._helpers();
    }

    _helpers = () => {
        this.helpers({
            currentUser: () => {
                this.currentUser = Meteor.user();
                return Meteor.user();
            }
        });
    }

    logout = () => {
        Meteor.logout((result) => {
            this.$state.go("app.sign.in");
        });
    }
}
