import crypto from "./crypto";
import { init, SetModule, Directive, Filter, LocalInjectables, options } from "angular2-now";
options({controllerAs: "vm"});
export var directive = {
    name: "EncryptedModelDirective",
    selector: "encrypted-model",
    bind: {
        key: "=encryptedModel"
    },
    providers: [
        "@ngModel",
        "$scope",
        "$attrs",
        "$element"
    ]
};
init();
export const moduleName = "CryptoModule";
export const CryptoModule = SetModule(moduleName, []);
@Directive(directive)
@LocalInjectables
export class EncryptedModelDirective {
    constructor() {
        this.$dependson = function (ngModel) {
            var context = this;
            ngModel.$formatters.push(function (value) {
                if (value && context.key) {
                    return crypto().decrypt(value, context.key);
                }
                return value;
            });
            ngModel.$parsers.push(function (value) {
                if (value && context.key) {
                    return crypto().encrypt(value, context.key);
                }else {
                    return value;
                }
            });
        };
    }
}
@Filter({name: "decrypt"})
export class DecryptFilter {
    constructor() {
        return function (value, key) {
            if (value && key) {
                return crypto().decrypt(value, key);
            }

            return value;
        };
    }
}
