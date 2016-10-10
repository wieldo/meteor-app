import {name} from "../../module";
import templateUrl from "./message-direct.html";
import {init, SetModule, Component, MeteorReactive} from "angular2-now";

init();
SetModule(name);
@Component({
    selector: "chat-message-direct",
    templateUrl: templateUrl,
    transclude: true,
    bind: {
        message: "=",
        onRead: "&?"
    }
})
@MeteorReactive
export class ChatMessageDirectComponent {
    constructor() {
        // check(this.message, Chat.messages.schema);
        this.me = this.message.author.id === Meteor.userId();

        // mark as read because you can see it now!
        if (this.message.isRead() === false && !this.me) {
            this._read();
        }
    }

    /**
     * Message has been read so trigger onRead expression
     */
    _read() {
        if (this.onRead) {
            this.onRead({
                messageId: this.message._id
            });
        }
    }
}
