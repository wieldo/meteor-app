import templateUrl from "./view";
import {name as moduleName} from "../../../simple-chat/";
import {init, SetModule, Component, State, LocalInjectables} from "angular2-now";

init();
SetModule(moduleName);
@State({
    name: "app.chat",
    url: "/chat",
    resolve: {
        user: ($stateParams, $state, $timeout) => {
            if (!Meteor.userId()) {
                $timeout(function() {
                    $state.go('app.signin');
                },0);
            }
            else
                return Meteor.user();
        }
    }
})
@Component({
    selector: "meteor-chat",
    templateUrl: templateUrl,
    providers: [
        "meteorChat",
        "$timeout"
    ]
})
@LocalInjectables
export class ChatComponent {
    constructor() {
        console.log(this.meteorChat);
    }
    selectUser(userId) {
        this.userId = userId;
        this.channelId = undefined;
    }
    selectChannel(channelId) {
        this.channelId = channelId;
        this.userId = undefined;
    }
}
