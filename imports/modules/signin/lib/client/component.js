import {moduleName} from "./module";
import templateUrl from "./view";
import "./style";
import "/imports/modules/signin/form/lib/client/component";
import {init,SetModule,State,Component,LocalInjectables} from "angular2-now";

init();
SetModule(moduleName);
@State({
    name: "app.signin",
    url: "/signin",
    resolve: {
        loggedIn: () => {
            return Meteor.userId();
        }
    }
})
@Component({
    selector: "signin",
    templateUrl: templateUrl,
    providers: [
        "signin"
    ]
})
@LocalInjectables
export class SigninComponent {
    constructor() {
        console.log(this.signin);
    }
}
