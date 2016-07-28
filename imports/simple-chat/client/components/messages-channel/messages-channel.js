import {name} from "../../module";

import templateUrl from "./messages-channel.html";
import moment from "moment";
//import { componentTemplate } from "../../utils";
// channels
import { Channels } from "../../../lib/channels/collection";
import { markRead } from "../../../lib/channels/methods";
import { messages } from "../../../lib/channels/selectors";
// messages
import { Messages } from "../../../lib/messages/collection";

import {init,SetModule, Component, MeteorReactive, LocalInjectables} from "angular2-now";

init();
SetModule(name);
@Component({
    selector: "chat-messages-channel",
    templateUrl: templateUrl,
    transclude: true,
    bind: {
        channel: "="
    }
})
@MeteorReactive
@LocalInjectables
export class ChatMessagesChannelComponent {
    constructor() {
        // mark as loading
        this.loading = true;
        this.increaseLimit = "1";
        this.increaseType = "day";
        this.dateLimit = moment().subtract(this.increaseLimit, this.increaseType).toDate();

        this._setHelpers();
        this._subscribeMessages();
    }

    /**
     * Is being triggered when subscription is ready
     */
    onReady() {
      this.loading = false;
    }

    /**
     * Callback for subscription's stop
     * @param  {*} error Reason of subscription stop
     */
    onStop(error) {
    }

    /**
     * Is being triggered when new message comes
     * @param  {String} id      Message id
     * @param  {Object} message Message data
     */
    onMessage(id, message) {
    }

    /**
     * Is being triggered when message has been seen
     * @param  {String} messageId message id
     */
    onRead(messageId) {
      markRead({
        messageId
      });
    }

    onLimitChange(limit) {
      this.dateLimit = limit;
    }

    /**
     * Triggers `chat.messages` subscription
     */
    _subscribeMessages() {
      const vm = this;
      this.subscribe("chat.messages", () => {
        this.loading = true;
        return [
          undefined,
          this.getReactively("channel"), // channel Id
          this.getReactively("dateLimit")
        ];
      }, {
        onStop(error) {
          vm.onStop(error);
        },
        onReady() {
          vm.onReady();
        }
      });
    }

    /**
     * Set helpers
     */
    _setHelpers() {
      this.helpers({
        /**
         * Get all messages
         * @return {Collection.Cursor} Messages collection
         */
        messages() {
          const cursor = Messages.find(
            messages(this.getReactively("channel")),
            {
              sort: {
                createdAt: 1
              }
            }
        );

          cursor.observeChanges({
            added: (id, doc) => {
              if (!this.loading) {
                // broadcast an event because of new message
                // and not these loaded, the new one
                this.onMessage(id, doc);
              }
            }
          });

          return cursor;
        }
      });
    }
}
