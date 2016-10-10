import "./style";
import templateUrl from "./../view/signed-in.html";
import {ModuleName} from "./../../";
import developersNavigationCollection from "./../../../../navigation/api/developers";
import appNavigationCollection from "./../../../../navigation/api/app";
import "./../../../../ui/navigation/lib/service";
import {
    init,
    SetModule,
    Component,
    State,
    LocalInjectables,
    MeteorReactive
} from "angular2-now";

init();
SetModule(ModuleName);
@State({
    name: "app.developers",
    url: "/developers",
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
