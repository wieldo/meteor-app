import templateUrl from "./view";
import "./style";
import {ModuleName} from "./../lib/module";
// Forms input examples
import "./../input/client/";
// Forms checkbox examples
import "./../checkbox/client/";
// Forms chips examples
import "./../chips/client/";
// Forms datepicker examples
import "./../datepicker/client/";
// Forms radio examples
import "./../radio/client/";
// Forms select examples
import "./../select/client/";
// Forms select birthday examples
import "./../select/birthday/client/";
// Forms slider examples
import "./../slider/client/";
// Forms switch examples
import "./../switch/client/";
// Forms textarea examples
import "./../textarea/client/";
import formsNavigationCollection from "./../api/navigation";
import {init,SetModule, State, Component, LocalInjectables} from "angular2-now";
init();
SetModule(ModuleName);
@State({
    name: "app.developers.forms",
    url: "/forms"
})
@Component({
    selector: "meteor-forms",
    templateUrl: templateUrl,
    providers: [
        "$mdSidenav"
    ]
})
@LocalInjectables
export class FormsComponent {
    navigation = formsNavigationCollection;
    constructor(){
    }
}
