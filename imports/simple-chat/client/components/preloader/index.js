import templateUrl from "./view";
import {name} from "./../../module";
import {
    init,
    SetModule,
    Component
} from "angular2-now";

init();
SetModule(name);
@Component({
    selector: "chat-preloader",
    templateUrl: templateUrl
})
export class ChatPreloaderComponent {
    constructor() {

    }
}
