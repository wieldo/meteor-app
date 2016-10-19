import templateUrl from "./view";
import {name} from "../../../module";
import {
    init,
    SetModule,
    Component
} from "angular2-now";

init();
SetModule(name);
@Component({
    selector: "chat-message-text",
    templateUrl: templateUrl,
    bind: {
        text: "=?"
    }
})
export class ChatMessageTextComponent {
    constructor() {

    }
}
