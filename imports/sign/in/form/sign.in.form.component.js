import "./sign.in.form.style";
import templateUrl from "./sign.in.form.view";
import fields from "./sign.in.form.formly";
import {Email} from "meteor/email";
import {moduleName} from "./../sign.in.module";
import {
    init,
    SetModule,
    Component,
    LocalInjectables
} from "angular2-now";

export var component = {
    name: "SigninFormComponent",
    selector: "signin-form",
    templateUrl: templateUrl,
    transclude: true,
    providers: [
        "$q",
        "$state",
        "$scope"
    ]
};
init();
SetModule(moduleName);
@Component(component)
@LocalInjectables
export class SigninFormComponent {

    model = {};
    debug = false;
    component = {};

    constructor() {
        if (this.debug === true) {
            console.info(`==================`);
            console.info(`${component.name} debug has been started.`);
            console.info(`==================`);
        }
        this.fields = fields;
        this.component = component;
        this._watchDebug();
    }

    /**
     * _watchDebug watch debug status and set highlight when true
     * @return
     */
    _watchDebug = () => {
        this.$scope.$watch("vm.debug", (value) => {
            if (value === true) {
                this._watchModel();
            }
        });
    }

    /**
     * _watchModel watch model if debug true
     * @return
     */
    _watchModel = () => {
        this.$scope.$watch("vm.model", (value) => {
            console.trace(`${component.name}.model: `, value);
        }, true);
    }

    /**
     * onSubmit sign in
     * @return
     */
    onSubmit = () => {
        if (this.debug === true) {
            console.group(`${component.name}.onSubmit()`);
            console.group(`this.signIn(this.model["email"],this.model["password"])`);
            console.log(`this.model["email"]: `, this.model["email"]);
            console.log(`this.model["password"]: `, this.model["password"]);
            console.groupEnd();
            console.groupEnd();
        }
        this.signIn(this.model["email"],this.model["password"]);
    }

    /**
     * signIn login to Meteor with username and password
     * @param  {string} username user login
     * @param  {string} password user password
     * @return
     */
    signIn = (username,password) => {
        if (this.debug.status === true) {
            console.group(`${component.name}.signIn(username, password)`);
            console.log(`@param username: `, username);
            console.log(`@param password: `, password);
        }
        Meteor.loginWithPassword(username, password, (result) => {
            if (this.debug === true) {
                console.group(`Meteor.loginWithPassword(username, password, (result) => {})`);
                console.log(`username: `, username);
                console.log(`password: `, password);
                if (result.error)
                    console.error(`result: `, result);
                else
                    console.log(`result: `, result);
                console.groupEnd();
                console.groupEnd();
            }
            if (result) {
                this.result = result;
            } else {
                this.$state.go("app.clients.dashboard");
            }
        });
    }
}
