import todoSchema from "./../todo.schemas";
import { todoCollection } from "./todo.collection";
todoCollection.attachSchema(todoSchema);
