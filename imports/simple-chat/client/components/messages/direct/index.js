import {name} from "./../../../module";
import templateUrl from "./view";
import moment from "moment";
// direct
import { markRead } from "./../../../../api/direct/methods";
import { messages } from "./../../../../api/direct/selectors";
// messages
import { Messages } from "./../../../../api/messages/collection";
import { Users } from "./../../../../api/users/collection";
import {init,SetModule, Component, MeteorReactive, LocalInjectables} from "angular2-now";

init();
SetModule(name);
@Component({
    selector: "chat-messages-direct",
    templateUrl: templateUrl,
    transclude: true,
    bind: {
        user: "="
    }
})
@MeteorReactive
@LocalInjectables
export class ChatMessagesDirectComponent {
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
                this.getReactively("user"), // recipient Id
                undefined,
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
             * Get data of recipient
             * @return {Object} User data
             */
            recipient() {
                return Users.findOne(this.getReactively("user"));
            },
            /**
             * Get all messages
             * @return {Collection.Cursor} Messages collection
             */
            messages() {
                const cursor = Messages.find(
                    messages(Meteor.userId(), this.getReactively("user")),
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
