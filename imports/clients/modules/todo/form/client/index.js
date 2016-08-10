import templateUrl from "./view";
import {ModuleName} from "./../../lib/module";
import TodoSchema from "./../../api/schemas";
import TodoCollection from "./../../api/collection";
import fields from "./../api/collection";
import {init,SetModule,Component,LocalInjectables} from "angular2-now";

init();
SetModule(ModuleName);
@Component({
    selector: "meteor-todo-form",
    templateUrl: templateUrl,
    bind: {
        model: "="
    }
})
@LocalInjectables
export class MeteorTodoFromComponent {
    // valid
    valid = false;

    // name
    form = "TodoForm";

    // edit
    id_ = null;

    // model
    model = {};

    // fields
    fields = [];
    constructor() {
        this.fields = fields;
        TodoCollection.attachSchema(TodoSchema);
    }

    Submit = () => {
        this.context = TodoSchema.namedContext("Todo");
        /*
        if (this.model._id){
          //this._id = this.model._id;
          //delete this.model._id;
        }
        */
        this._id = this.model._id;
        delete this.model._id;
        this.valid = this.context.validate(this.model);
        if (this.valid === true) {
            if (this._id)
                this.Update();
            else
                this.Insert(this.model);
        }
        else {
            console.log(this.context);
        }
    }

    Reset = () => {
        this.options.resetModel();
        delete this.model._id;
    }

    Insert = () => {
        TodoCollection.insert(this.model, (error, result) => {
            console.log("Insert log error");
            console.log(error);
            console.log("Insert log result");
            console.log(result);
            this.Reset();
        });
    }

    Update = () => {
        TodoCollection.update(this._id, {
            $set: this.model
        },(error, affected) => {
            console.log("Update log error");
            console.log(error);
            console.log("Update log affected");
            console.log(affected);
            this.Reset();
        });
    }
}
