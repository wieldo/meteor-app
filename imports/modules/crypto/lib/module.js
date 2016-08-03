export const moduleName = "crypto";
import {init, SetModule, Directive, Inject, Filter} from "angular2-now";
import CryptoJS from "crypto-js";

init();
SetModule(moduleName, []);

var KEY_SIZE = 256,
    KEY_ITERATIONS = 10;

export function initKey(password, salt) {
    return CryptoJS.PBKDF2(password, salt, {keySize: KEY_SIZE / 32, iterations: KEY_ITERATIONS}).toString();
}

@Directive({
    selector: 'encrypted-model',
    bind: {key: '=encryptedModel'}
})
@Inject('@ngModel')
class EncryptedModel {
    constructor() {
        this.$dependson = function (ngModel) {
            var that = this;
            ngModel.$formatters.push(function (value) {
                if (value && that.key) {
                    return CryptoJS.AES.decrypt(value, that.key)
                        .toString(CryptoJS.enc.Utf8);
                }

                return value;
            });

            ngModel.$parsers.push(function (value) {
                if (value && that.key) {
                    return CryptoJS.AES.encrypt(value, that.key);
                }

                return value;
            });
        }

    }
}

@Filter({name: 'decrypt'})
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
