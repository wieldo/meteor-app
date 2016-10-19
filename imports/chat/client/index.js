import "./style";
import templateUrl from "./view";
import { name as moduleName } from "./../../simple-chat/";
import { init, SetModule, Component, State, LocalInjectables } from "angular2-now";
init();
SetModule(moduleName);
@State({
    name: "app.clients.chat",
    url: "/chat",
    resolve: {
        user: ($stateParams, $state, $timeout) => {
            if (!Meteor.userId()) {
                $timeout(function() {
                    $state.go("app.sign.in");
                },0);
            }
            else {
                return Meteor.user();
            }
        }
    }
})
@Component({
    selector: "chat",
    templateUrl: templateUrl,
    providers: [
        "$timeout"
    ]
})
@LocalInjectables
export class ChatComponent {
    debug = true;

    constructor() {
        console.log(this.simpleChat);
    }

    /**
     * [selectUser description]
     * @param  {[type]} userId [description]
     * @return {[type]}        [description]
     */
    selectUser = (userId) => {
        this.userId = userId;
        this.channelId = undefined;
    }

    /**
     * [selectChannel description]
     * @param  {[type]} channelId [description]
     * @return {[type]}           [description]
     */
    selectChannel = (channelId) => {
        this.channelId = channelId;
        this.userId = undefined;
    }
}
