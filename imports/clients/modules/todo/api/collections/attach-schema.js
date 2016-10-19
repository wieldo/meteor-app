import todoSchema from "./../schemas";
import {
    todoCollection
} from "./collection";
todoCollection.attachSchema(todoSchema);
