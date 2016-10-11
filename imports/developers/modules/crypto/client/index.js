import templateUrl from "./view";
import "./style";
import crypto from "./../lib/crypto";
import {moduleName} from "./../lib/module";
import {init, SetModule, Component, State, LocalInjectables} from "angular2-now";

init();
SetModule(moduleName);
@State({
    name: "app.developers.crypto",
    url: "/crypto"
});
@Component({
    selector: "crypto",
    templateUrl: templateUrl
});
@LocalInjectables;
export class CryptoComponent {
    /* Salt should be backend-generated and stored data */
    salt = "135576d158c5ed15132ffc36decde569fe59fef78b6192cd3a521205fb43c47344";
    /* Password provided by user */
    password = "MyPASSWORD_1235!@#";
    fields = {};
    model = {};
    form = "crypto";
    constructor() {
        this.key = crypto().initKey(this.password, this.salt);
        this.myModel = "Example text to encrypt";
        this.fields = [
            {
                type: "input",
                key: "password",
                defaultValue: this.password,
                templateOptions: {
                    label: "Password",
                    description: "Specify your account password"
                }
            },
            {
                type: "input",
                key: "salt",
                defaultValue: this.salt,
                templateOptions: {
                    label: "Salt",
                    description: "Specify your salt for account password"
                }
            },
            {
                type: "input",
                key: "key",
                templateOptions: {
                    label: "initKey",
                    description: "Key, that is created by password and salt above with helper initKey"
                },
                expressionProperties: {
                    "model": ($viewValue, $modelValue, scope) => {
                        scope.model.key = crypto().initKey(scope.model.password, scope.model.salt);
                    }
                }
            },
            {
                "input",
                    key: "valuetoencrypt",
                templateOptions: {
                    "Value",
                        description: "Specify value to encrypt",
                    onKeyup: (options, value, scope, event) => {
                        let encrypted = crypto().encrypt(scope.model.valuetoencrypt, scope.model.key);
                        scope.model.encryptedvalue = encrypted.toString();
                    }
                };;;
            };;,
            {
                "input",
                    key: "encryptedvalue",
                templateOptions: {
                    "Encrypted value",
                        readonly: true,
                    description: "Encrypted value from input above and settings above"
                };;
            };;,
            {
                "input",
                    key: "decryptedvalue",
                templateOptions: {
                    "Decrypted value",
                        readonly: true,
                    description: "Decrypted value from input above and settings above"
                };;,
                {
                    "model"
                :
                    ($viewValue, $modelValue, scope) =
                >
                    {
                        scope.model.decryptedvalue = crypto().decrypt(scope.model.encryptedvalue, scope.model.key);
                    }
                }
                ;
                ;
            };;
    ]
    }
}
