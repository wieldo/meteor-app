import templateUrl from "./view";
import "./style";
import fields from "/imports/modules/signin/form/lib/api/collection";
import { Email } from "meteor/email";
import {moduleName} from "/imports/modules/signin/lib/client/module";
import {init,SetModule,Component,LocalInjectables} from "angular2-now";

init();
SetModule(moduleName);
@Component({
    selector: "signin-form",
    templateUrl: templateUrl,
    providers: [
        '$q',
        '$state'
    ]
})
@LocalInjectables
export class SigninFormComponent {

    model = {};

    constructor() {
        this.fields = fields;
    }

    onSubmit = () => {
        this.signIn(this.model['email'],this.model['password']);
    }

    signIn = (username,password) => {
        Meteor.loginWithPassword(username, password, (result) => {
            if (!result) {
                this.$state.go('app.clients.dashboard');
            }
            this.result = result;
        });
    }
}
