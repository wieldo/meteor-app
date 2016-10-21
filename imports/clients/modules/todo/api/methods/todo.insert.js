import todoSchema from "./../todo.schemas";
import { todoCollection } from "./../collections";

export const todoInsert = new ValidatedMethod({
    name: "todo.insert",
    validate: todoSchema.pick(["name"]).validator(),
    run({name}){
        console.log(`name`, name);
        todoCollection.insert({name}, (error, result) => {
            console.log(`todoInsert.error:`, error);
            console.log(`todoInsert.result:`, result);
            todoInsert.error = error;
            todoInsert.result = result;
        });
    }
});
