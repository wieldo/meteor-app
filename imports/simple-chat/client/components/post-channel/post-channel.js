import {name} from "../../module";
import { message } from "../../../lib/channels/methods";
import {init,SetModule, Component, LocalInjectables} from "angular2-now";

init();
SetModule(name);
@Component({
    selector: "chat-post-channel",
    bind: {
        channel: "="
    },
    template: `
      <chat-post on-message="vm.send(message)"></chat-post>
    `,
    providers: ["UsePromise"]
})
@LocalInjectables
export class ChatPostChannelComponent {
    constructor() {
    }

    send(text) {
        console.log("channelId", this.channel);
        return this.UsePromise.on(message, {
            text,
            channelId: this.channel
        })
        .then(() => {
            this.onSuccess();
        })
        .catch((error) => {
            this.onError(error);
        });
    }

    onSuccess() {
    }

    onError(error) {
        console.log("error", error);
    }
  }
