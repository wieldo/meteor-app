import "./style";
import "/imports/modules/todo/form/lib/client/component";
import templateUrl from "./view";
import TodoSchema from "/imports/modules/todo/api/schemas";
import TodoCollection from "/imports/modules/todo/api/collection";
import {ModuleName} from "./module";
import {init,SetModule,Component,State,LocalInjectables,MeteorReactive} from "angular2-now";

SetModule(ModuleName);
init();
@State({
    name: "app.clients.todo",
    url: "/todo"
})
@Component({
    selector: "meteor-todo",
    providers: [
        "$scope",
        "$timeout"
    ],
    templateUrl: templateUrl
})
@MeteorReactive
@LocalInjectables
export class TodoComponent {
    constructor(){
        this._helpers();
        this._subscribes();
        TodoCollection.attachSchema(TodoSchema);
    }

    _subscribes = () => {
        if (Meteor.isClient) {
            this.subscribe('todo');
        }
    }

    _helpers = () => {
        this.$scope.helpers({
            todo_collection: () => {
                console.log(TodoCollection.find({}));
                return TodoCollection.find({}).fetch().reverse();
            }
        });
    }

    SetCompleted = (update) => {
        TodoCollection.update(update._id, {
            $set: {'completed': update.completed}
        });
    }

    Remove = (_id) => {
        TodoCollection.remove(_id);
    }

    Edit = (_id) => {
        this.model = TodoCollection.find({'_id': _id}).fetch()[0];
    }

}
