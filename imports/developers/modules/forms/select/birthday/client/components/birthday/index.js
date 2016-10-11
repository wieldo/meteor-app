import {ModuleName} from "./../../../../../lib/module";
import templateUrl from "./view";
import "./style";
import {init, SetModule, Component, LocalInjectables} from "angular2-now";
init();
SetModule(ModuleName);
@Component({
    selector: "select-birthday",
    templateUrl: templateUrl,
    transclude: true,
    bind: {
        model: "="
    }
})
@LocalInjectables
export class SelectBirthdayComponent {
    constructor() {
        this.birthday = [
            {
                type: "select-day",
                key: "select.birthday.day",
                templateOptions: {
                    required: true
                }
            },
            {
                type: "select-month",
                key: "select.birthday.month",
                templateOptions: {
                    required: true
                }
            },
            {
                type: "select-year",
                key: "select.birthday.year",
                templateOptions: {
                    required: true
                }
            }
        ];
    }
}
