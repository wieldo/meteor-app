import "./clients.style";
import "./../../ui/navigation/lib/service";
import clientsNavigation from "./clients.navigation";
import appNavigationCollection from "./../app.navigation";
import templateUrl from "./../view/signed-in.html";
import { ModuleName } from "./../app.module";
import { SetModule, init, Component, State, LocalInjectables, MeteorReactive } from "angular2-now";

export var component = {
    selector: "clients",
    templateUrl: templateUrl,
    providers: [
        "$q",
        "$state",
        "SidenavService",
        "$timeout",
        "SimpleNavigationService",
        "TodoFormService",
        "cfpLoadingBar"
    ]
};
import clientsState from "./clients.state";
init();
SetModule(ModuleName);
@State(clientsState)
@Component(component)
@LocalInjectables
@MeteorReactive
export class AppClientsComponent {
    type = "clients";
    debug = false;
    constructor(){
        //this.cfpLoadingBar.start();
        this.sidenav = this.SidenavService.Init();
        // set clientsNavigationCollection
        let TodoFormService = this.TodoFormService;
        this.navigationWorkspaces = clientsNavigation({
            TodoFormService
        });
        this.navigationApp = appNavigationCollection;
        this.SimpleNavigationService.getSelectedPromise().then(null, null, (notify) => {
            if (this.debug === true) {
                console.log(`notify`, notify);
            }
            this.simpleNavigation = notify;
        });
        this._helpers();
    }

    _helpers = () => {
        this.helpers({
            currentUser: () => {
                this.currentUser = Meteor.user();
                return this.currentUser;
            }
        });
    }

    logout = () => {
        Meteor.logout((result) => {
            if (this.debug === true) {
                console.log(`result`, result);
            }
            this.$state.go("app.sign.in");
        });
    }
}
