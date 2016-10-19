import templateUrl from "./view";
import {name} from "./../../../module";
import moment from "moment";
import {init,SetModule, Component} from "angular2-now";

init();
SetModule(name);
@Component({
    selector: "chat-messages-limit",
    templateUrl: templateUrl,
    bind: {
        start: "@",
        increaseLimit: "@",
        increaseType: "@",
        onChange: "&"
    }
})
export class ChatMessagesLimitComponent {
    constructor() {
        this.limit = this.start;
    }

    // start
    set start(start) {
        this._start = moment(start);
    }

    get start() {
        return this._start;
    }

    // limit
    set increaseLimit(increaseLimit) {
        this._increaseLimit = increaseLimit;
    }

    get increaseLimit() {
        return this._increaseLimit;
    }

    // type
    set increaseType(increaseType) {
        this._increaseType = increaseType;
    }

    get increaseType() {
        return this._increaseType;
    }

    /**
     * Load more message by increasing limit
     */
    loadMore() {
        this.limit = this._subtract(this.limit);
        this._change();
    }

    _change() {
        this.onChange({
            limit: this.limit.toDate()
        });
    }

    _subtract(date) {
        return moment(date).subtract(this.increaseLimit, this.increaseType);
    }
}
