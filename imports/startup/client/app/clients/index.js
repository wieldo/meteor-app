import clientsNavigation from "./../../../../navigation/api/clients";
import appNavigationCollection from "./../../../../navigation/api/app";
import templateUrl from "./../view/signed-in.html";
import "./style";
import {ModuleName} from "./../../";
import "./../../../../ui/navigation/lib/service";
import {
    SetModule,
    init,
    Component,
    State,
    LocalInjectables,
    MeteorReactive
} from "angular2-now";

init();
SetModule(ModuleName);
@State({
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
})
@Component({
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
})
@LocalInjectables
@MeteorReactive
export class AppClientsComponent {
    type = "clients";
    constructor(){
        this.sidenav = this.SidenavService.Init();

        // set clientsNavigationCollection
        let TodoFormService = this.TodoFormService;
        this.navigationWorkspaces = clientsNavigation({
            TodoFormService
        });
        this.navigationApp = appNavigationCollection;
        this.SimpleNavigationService.getSelectedPromise().then(null, null, (notify) => {
            console.log(notify);
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
