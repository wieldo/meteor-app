import {name} from "../../module";
import {init,SetModule, Component} from "angular2-now";

init();
SetModule(name);
@Component({
    selector: "chat-message-read",
    template: `
      <chat-message-read-at when="vm.at" ng-if="vm.at && !vm.by"></chat-message-read-at>
      <chat-message-read-by users="vm.by" ng-if="vm.by && !vm.at"></chat-message-read-by>
    `,
    bind: {
        by: "=?",
        at: "=?"
    }
})
export class ChatMessageReadComponent {
    constructor() {

    }
}
