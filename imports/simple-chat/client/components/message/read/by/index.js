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
    selector: "chat-message-read-by",
    templateUrl: templateUrl,
    bind: {
        users: "=?",
        idKey: "@?",
        dateKey: "@?",
        nameKey: "@?"
    }
})
export class ChatMessageReadByComponent {
    constructor() {
        this.keys = {
            id: this._id || "id",
            date: this._date || "date",
            name: this._name || "name"
        };
    }

    set idKey(idKey) {
        this._id = idKey;
    }

    set dateKey(dateKey) {
        this._date = dateKey;
    }

    set nameKey(nameKey) {
        this._name = nameKey;
    }
}
