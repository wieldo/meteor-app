import {ModuleName} from "/imports/modules/forms/lib/client/module";
import templateUrl from "./view";
import "./style";
import {init, SetModule, Component, LocalInjectables} from "angular2-now";
init();
SetModule(ModuleName);
@Component({
    selector: "select-birthday",
    templateUrl: templateUrl,
    bind: {
        model: "="
    }
})
@LocalInjectables
export class SelectBirthdayComponent {
    model = {};
    constructor() {
        this.birthday = [
            {
                type: "select-day",
                key: "select.birthday.day",
                templateOptions: {}
            },
            {
                type: "select-month",
                key: "select.birthday.month",
                templateOptions: {}
            },
            {
                type: "select-year",
                key: "select.birthday.year",
                templateOptions: {}
            }
        ];
    }
}
