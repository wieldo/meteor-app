import templateUrl from "./view";
import "./style";
import {ModuleName} from "/imports/modules/forms/lib/client/module";
// Forms input examples
import "/imports/modules/forms/input/lib/client/component";
// Forms checkbox examples
import "/imports/modules/forms/checkbox/lib/client/component";
// Forms chips examples
import "/imports/modules/forms/chips/lib/client/component";
// Forms datepicker examples
import "/imports/modules/forms/datepicker/lib/client/component";
// Forms radio examples
import "/imports/modules/forms/radio/lib/client/component";
// Forms select examples
import "/imports/modules/forms/select/lib/client/component";
// Forms select birthday examples
import "/imports/modules/forms/select/birthday/lib/client/component";
// Forms slider examples
import "/imports/modules/forms/slider/lib/client/component";
// Forms switch examples
import "/imports/modules/forms/switch/lib/client/component";
// Forms textarea examples
import "/imports/modules/forms/textarea/lib/client/component";

import {init,SetModule, State, Component, LocalInjectables} from 'angular2-now';
init();
SetModule(ModuleName);
@State({
    name: "app.forms",
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
    constructor(){
    }
}
