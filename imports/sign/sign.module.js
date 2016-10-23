import { SignInModule } from "./in";
import { SignUpModule } from "./up";
import { init, SetModule } from "angular2-now";
console.log(`SignUpModule`, SignUpModule);
init();
export const moduleName = "SignModule";
export const SignModule = SetModule(moduleName, [
    SignInModule.name,
    SignUpModule.name
]);
