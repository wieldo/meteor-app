import {name} from "../../module";
import {init,SetModule, Component} from "angular2-now";

init();
SetModule(name);
@Component({
    selector: "chat-message-text",
    template: `
      <div marked="vm.text"></div>
    `,
    bind: {
        text: "=?"
    }
})
export class ChatMessageTextComponent {
    constructor() {

    }
}
