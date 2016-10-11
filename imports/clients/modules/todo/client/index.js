import "./style";
import templateUrl from "./view";
import {moduleName} from "./../lib/module";
import {init,SetModule,Component,State,LocalInjectables,MeteorReactive} from "angular2-now";
SetModule(moduleName);
init();
@State({
    name: "app.clients.todo",
    url: "/todo"
})
@Component({
    selector: "meteor-todo",
    templateUrl: templateUrl,
    providers: [
        "$scope",
        "$timeout",
        "TodoFormService"
    ]
})
@MeteorReactive
@LocalInjectables
export class TodoComponent {

    debug = false;

    constructor(){
        this._helpers();
        this._subscribes();
    }

    createDialog = (ev) => {
        this.TodoFormService.mdDialog(ev);
    }

    /**
     * Subscribes
     * @return
     */
    _subscribes = () => {
        if (Meteor.isClient) {
            this.subscribe("users.list", () => [{}]);
        }
    }


    _helpers = () => {
        this.$scope.helpers({
            createdBy: () => {
                return {};
            },
            find: () => {
                return {};
            }
        });
    }
}
