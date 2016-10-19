import templateUrl from "./view";
import {ChatMessageReadAtComponent} from "./at/";
import {ChatMessageReadByComponent} from "./by/";
import {name} from "../../../module";
import {
    init,
    SetModule,
    Component
} from "angular2-now";

init();
SetModule(name);
@Component({
    selector: "chat-message-read",
    templateUrl: templateUrl,
    bind: {
        by: "=?",
        at: "=?"
    }
})
class ChatMessageReadComponent {
    constructor() {

    }
}

export default {
    ChatMessageReadComponent,
    ChatMessageReadAtComponent,
    ChatMessageReadByComponent
};
