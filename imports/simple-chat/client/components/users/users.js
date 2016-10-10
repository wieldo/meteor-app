import templateUrl from "./users.html";
import {name} from "./../../module";
import {Users} from "./../../../api/users/collection";
import {all} from "./../../../api/users/selectors";
import {init,SetModule, Component, MeteorReactive, LocalInjectables} from "angular2-now";

init();
SetModule(name);
@Component({
    selector: "chat-users",
    bind: {
        onSelect: "&?"
    },
    templateUrl: templateUrl,
    providers: ["$timeout"]
})
@MeteorReactive
@LocalInjectables
export class ChatUsersComponent {
    constructor() {
        this.loading = true;
        this._subscription();
        this._helpers();
    }

    /**
     * Select user.
     * Triggers onSelect expression.
     * @param  {Object} user  Meteor.user object
     * @param  {$event} event
     */
    select(user, event) {
        event.preventDefault();
        if (angular.isFunction(this.onSelect)) {
            this.onSelect({
                userId: user._id
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
        this.loading = false;
    }

    /**
     * Start subscriptions
     */
    _subscription() {
        const vm = this;

        // subscribe available users
        this.subscribe("chat.users", () => [], {
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
             * Fetch available users
             * @return {Collection.Cursor} Meteor.users's cursor
             */
            users() {
                return Users.find(
                    all(Meteor.userId())
                );
            }
        });
    }
}
