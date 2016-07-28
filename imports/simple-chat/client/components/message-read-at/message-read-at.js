import {name} from "../../module";
import templateUrl from './message-read-at.html';
import {init,SetModule, Component} from 'angular2-now';

init();
SetModule(name);
@Component({
    selector: 'chat-message-read-at',
    templateUrl: templateUrl,
    bind: {
        when: '=?'
    }
})
export class ChatMessageReadAtComponent {
    constructor() {

    }
}
