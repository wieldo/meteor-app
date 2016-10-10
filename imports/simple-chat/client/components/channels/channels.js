import {name} from "../../module";
import templateUrl from "./channels.html";
import { Channels } from "./../../../api/channels/collection";
import { all } from "./../../../api/channels/selectors";
import {init,SetModule, Component, MeteorReactive, LocalInjectables} from "angular2-now";

init();
SetModule(name);
@Component({
    selector: "chat-channels",
    bind: {
        onSelect: "&?"
    },
    templateUrl: templateUrl,
    providers: ["$timeout"]
})
@MeteorReactive
@LocalInjectables
export class ChatChannelsComponent {
    constructor() {
        this.loading = true;
        this._subscription();
        this._helpers();
    }

    /**
     * Select channel.
     * Triggers onSelect expression.
     * @param  {Object} channel  Channels object
     * @param  {$event} event
     */
    select(channel, event) {
        event.preventDefault();
        if (angular.isFunction(this.onSelect)) {
            this.onSelect({
                channelId: channel._id
            });
        }
    }

    /**
     * Is being triggered when subscription is ready
     */
    onReady() {
        this.loading = false;
    }

    /**
     * Callback of subscription's stop
     * @param  {*} error
     */
    onStop(error) {
        if (error)
            this.loading = false;
    }

    /**
     * Start subscriptions
     */
    _subscription() {
        const vm = this;

        // subscribe available users
        this.subscribe("chat.channels", () => [], {
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
    _helpers() {
        this.helpers({
            /**
             * Fetch available channels
             * @return {Collection.Cursor} Channels's cursor
             */
            channels() {
                return Channels.find(all(Meteor.userId()));
            }
        });
    }
}
