import templateUrl from "./view";
import {name} from "../../../../module";
import {
    init,
    SetModule,
    Component
} from "angular2-now";

init();
SetModule(name);
@Component({
    selector: "chat-message-read-at",
    templateUrl: templateUrl,
    bind: {
        when: "=?"
    }
})
export class ChatMessageReadAtComponent {
    constructor() {

    }
}
