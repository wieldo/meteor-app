import "./style";
import "./../../../../ui/navigation/lib/service";
import clientsNavigation from "./../../../../navigation/api/clients";
import appNavigationCollection from "./../../../../navigation/api/app";
import templateUrl from "./../view/signed-in.html";
import {ModuleName} from "./../../";
import {
    SetModule,
    init,
    Component,
    State,
    LocalInjectables,
    MeteorReactive
} from "angular2-now";

export var component = {
    selector: "clients",
    templateUrl: templateUrl,
    providers: [
        "$q",
        "$state",
        "SidenavService",
        "$timeout",
        "SimpleNavigationService",
        "TodoFormService"
    ]
};
export var state = {
    name: "app.clients",
    abstract: true,
    resolve: {
        user: ($stateParams, $state, $timeout) => {
            if (!Meteor.userId()) {
                $timeout(function() {
                    $state.go("app.sign.in");
                },0);
            }
        }
    }
};

init();
SetModule(ModuleName);
@State(state)
@Component(component)
@LocalInjectables
@MeteorReactive
export class AppClientsComponent {
    type = "clients";
    debug = false;
    constructor(){
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
