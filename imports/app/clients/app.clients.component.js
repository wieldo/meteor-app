import "./app.clients.style";
import "./../../ui/navigation/navigation.service";
import clientsNavigation from "./app.clients.navigation";
import appNavigationCollection from "./../app.navigation";
import templateUrl from "./../app.signed-in.view";
import clientsState from "./app.clients.state";
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
            this.$state.go("app.sign.in");
        });
    }
}
