import clientsNavigationCollection from "./../../../../navigation/api/clients";
import appNavigationCollection from "./../../../../navigation/api/app";
import templateUrl from "./../view/signed-in.html";
import {ModuleName} from "./../../";
import {$Service} from "./../../../../ui/navigation/lib/service";
import { SetModule, init, Component, State, LocalInjectables, MeteorReactive } from "angular2-now";

init();
SetModule(ModuleName);
@State({
    name: "app.clients",
    abstract: true,
    resolve: {
        user: ($stateParams, $state, $timeout) => {
            if (!Meteor.userId()) {
                $timeout(function() {
                    $state.go("app.signin");
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
        "SimpleNavigationService"
    ]
})
@LocalInjectables
@MeteorReactive
export class AppClientsComponent {
    type = "clients";
    constructor(){
        this.sidenav = this.SidenavService.Init();
        this.navigation_workspaces = clientsNavigationCollection;
        this.navigation_app = appNavigationCollection;
        this.SimpleNavigationService.getSelectedPromise().then(null, null, (notify) => {
            this.selected = notify[this.type].selected.name;
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
            this.$state.go("app.signin");
        });
    }
}
