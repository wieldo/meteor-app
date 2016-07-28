import templateUrl from "./view";
import fields from "../lib/api/collection";
import {moduleName} from "/imports/modules/signin/lib/client/module";
import {init,SetModule,Component,View} from "angular2-now";

init();
SetModule(moduleName);
@Component({
    selector: "signup-form"
})
@View({
    templateUrl: templateUrl
})
export class signupFormComponent {

    model = {};

    constructor() {
        this.fields = fields;
    }

    onSubmit = () => {
        this.model["username"] = this.model.email;
        this.signUp(this.model);
    }

    signUp = (options) => {
        Accounts.createUser(options, (result) => {
            this.result = result;
            console.log(result);
            console.log(result.message);
        });
    }
}
