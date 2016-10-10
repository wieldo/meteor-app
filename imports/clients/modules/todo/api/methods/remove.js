import {
    todoCollection,
    todoSchema
} from "./../collection";

export const todoRemove = new ValidatedMethod({
    name: "todo.remove",
    validate: todoSchema.pick(["_id"]).validator(),
    run({_id}){
        todoCollection.update(_id, {
            $set: {
                "removed": true,
                "removedAt": new Date()
            }
        }, (error, result) => {
            console.log(`todoRemove.error:`, error);
            console.log(`todoRemove.result:`, result);
            todoRemove.result = result;
            todoRemove.error = error;
        });
    }
});
