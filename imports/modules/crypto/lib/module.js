export const moduleName = "crypto";
import {init, SetModule, Directive, Inject, Filter, LocalInjectables} from "angular2-now";
import CryptoJS from "crypto-js";

init();
SetModule(moduleName, []);

export var KEY_SIZE = 256,
    KEY_ITERATIONS = 10;

@Directive({
    selector: "encrypted-model",
    bind: {key: "=encryptedModel"}
})
@Inject("@ngModel")
@LocalInjectables
class EncryptedModel {
    constructor() {
        this.$dependson = function (ngModel) {
            var context = this;
            ngModel.$formatters.push(function (value) {
                if (value && context.key) {
                    return CryptoJS.AES.decrypt(value, context.key)
                        .toString(CryptoJS.enc.Utf8);
                }

                return value;
            });

            ngModel.$parsers.push(function (value) {
                if (value && context.key) {
                    return CryptoJS.AES.encrypt(value, context.key);
                }

                return value;
            });
        };
    }
}

@Filter({name: "decrypt"})
class DecryptFilter {
    constructor() {
        return function (value, key) {
            if (value && key) {
                return CryptoJS.AES.decrypt(value, key)
                    .toString(CryptoJS.enc.Utf8);
            }

            return value;
        };
    }
}
