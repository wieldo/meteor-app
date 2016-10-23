import "./style";
import templateUrl from "./view";
import {ModuleName} from "./../lib/module";
import formsNavigationCollection from "./../api/navigation";
import {
    init,
    SetModule,
    State,
    Component,
    LocalInjectables
} from "angular2-now";
export var state = {
    name: "app.developers.forms",
    url: "/forms"
};
export var component = {
    name: "FormsComponent",
    state: state,
    selector: "meteor-forms",
    templateUrl: templateUrl,
    providers: [
        "$mdSidenav"
    ]
};
init();
SetModule(ModuleName);
@State(state)
@Component(component)
@LocalInjectables
export class FormsComponent {
    navigation = formsNavigationCollection;
    constructor(){}
}
