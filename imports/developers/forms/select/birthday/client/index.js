import {ModuleName} from "./../../../lib/module";
import templateUrl from "./view";
import elements from "./../api/fields";
//import submit from "./../../../../client/helpers/on-submit";
import "./components/birthday";
import {init, SetModule, State, Component, View, LocalInjectables} from "angular2-now";
init();

SetModule(ModuleName);
@State({
    name: "app.developers.forms.selectbirthday",
    url: "/selectbirthday"
})
@Component({
    selector: "meteor-forms-select-birthday"
})
@View({
    templateUrl: templateUrl
})
@LocalInjectables
export class FormsSelectbirthdayComponent {
    constructor(){
        this.elements = elements;
    }
    /*
        onSubmit
    */
    onSubmit = () => {
        console.log(this.model);
        //alert(JSON.stringify(this.model), null, 2);
    }

}
