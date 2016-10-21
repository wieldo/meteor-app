import "./chat.style";
import templateUrl from "./chat.view";
import chatState from "./chat.state";
import { name as moduleName } from "./../../simple-chat/";
import { init, SetModule, Component, State, LocalInjectables } from "angular2-now";
init();
SetModule(moduleName);
@State(chatState)
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
