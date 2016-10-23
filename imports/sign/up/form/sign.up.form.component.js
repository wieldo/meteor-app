import "./sign.up.form.style";
import "/imports/developers/forms/select/birthday/client/components/birthday";
import templateUrl from "./sign.up.form.view";
import fields from "./sign.up.form.formly";
import {moduleName} from "./../sign.up.module";
import {ReactiveVar} from "meteor/reactive-var";
import { init, SetModule, Component, LocalInjectables, MeteorReactive } from "angular2-now";

export var component = {
    name: "SignupFormComponent",
    selector: "sign-up-form",
    transclude: true,
    templateUrl: templateUrl,
    providers: [
        "$scope",
        "$state"
    ]
};
init();
SetModule(moduleName);
@Component(component)
@LocalInjectables
@MeteorReactive
export class SignupFormComponent {
    debug = false;
    model = {};
    result = new ReactiveVar({});
    birthday = null;
    component = {};

    constructor() {
        this._helpers();
        this.fields = fields;
        this.reason = this.result.get().reason;
        if (this.debug === true) {
            console.info("====================");
            console.info(`${component.name} debug has been started.`);
            console.info("====================");
        }
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
     * on form submit sign up user
     * @return {}
     */
    onSubmit = () => {
        if (this.debug === true) {
            console.group(`${component.name}.onSubmit()`);
            console.log(`this._setBirthday()`);
            console.log(`this.signUp(this.model)`);
        }
        this._setBirthday();
        this.signUp(this.model);
        if (this.debug === true) {
            console.groupEnd();
        }
    }

    /**
     * _setBirthday set birthday properly to model
     * @return
     */
    _setBirthday = function() {
        if (this.debug === true) {
            console.group(`${component.name}._setBirthday()`);
            let profile = _.clone(this.model["profile"]);
            console.log(`this.model["profile"]`, profile);
        }
        if (this.model["profile"].birthday) {
            if (
                "year" in this.model["profile"].birthday &&
                "month" in this.model["profile"].birthday &&
                "day" in this.model["profile"].birthday
            )
                this.model["profile"].birthday.date = new Date(
                    this.model["profile"].birthday.year,
                    this.model["profile"].birthday.month - 1,
                    this.model["profile"].birthday.day
                );
        }
        if (this.debug === true) {
            let profile = _.clone(this.model["profile"]);
            console.log(`this.model["profile"]`, profile);
            console.groupEnd();
        }
    }

    /**
     * Give user a reason, why signUp did not work
     * @return {vm.reason} reason
     */
    _helpers = () => {
        if (this.debug === true) {
            console.info(`${component.name}._helpers()`);
        }
        this.$scope.helpers({
            result: () => {
                let get = this.result.get();
                if (this.debug === true) {
                    console.group(`${component.name}._helpers()`);
                    console.group(`this.$scope.helpers({}).result`);
                    console.log(`this.result.get(): `,this.result.get());
                    console.groupEnd();
                    console.groupEnd();
                }
                if (get) {
                    return get;
                }
            }
        });
    }

    /**
     * Create user with specified model
     * @param  {model} model user data fields
     * @return
     */
    signUp = (model) => {
        if (this.debug === true) {
            console.group(`${component.name}.signUp(model)`);
            console.log(`@param model: `, model);
        }
        Meteor.call("users.signup", model, (error, result) => {
            if (this.debug === true) {
                console.group(`Meteor.call("users.signup", model, (error, result) => {})`);
                console.log(`@param model: `, model);
            }
            if (error) {
                this.result.set(error);
                if (this.debug === true) {
                    console.error(`callback error:`, error);
                }
            } else {
                if (result) {
                    if (result.errorType) {
                        if (this.debug === true) {
                            console.error(`callback result:`, result);
                        }
                        this.result.set(result);
                    }else {
                        if (this.debug === true) {
                            console.log(`result:`, result);
                        }
                        this.result.set({
                            reason: `Successfully signed up as ${this.model.profile.firstName} ${this.model.profile.lastName}! Now you can sign in.`,
                            errorType: "success"
                        });
                    }
                }
            }
            if (this.debug === true) {
                console.groupEnd();
            }
        });
        if (this.debug === true) {
            console.groupEnd();
        }
    }
}
