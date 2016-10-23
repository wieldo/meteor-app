import todoSchema from "./../todo.schemas";
import {
    todoCollection
} from "./../collections";

export const todoUpdate = new ValidatedMethod({
    name: "todo.update",
    validate: todoSchema.pick(["_id", "name", "completed"]).validator(),
    run(update){
        todoCollection.update(update._id, {
            $set: {
                name: update.name,
                completed: update.completed
            }
        }, (error, result) => {
            console.log(`todoUpdate.error:`, error);
            console.log(`todoUpdate.result:`, result);
            todoUpdate.result = result;
            todoUpdate.error = error;
        });
    }
});

export const todoSetCompleted = new ValidatedMethod({
    name: "todo.setCompleted",
    validate: todoSchema.pick(["_id", "completed"]).validator(),
    run(update){
        todoCollection.update(update._id, {
            $set: {
                "completed": update.completed
            }
        }, (error, result) => {
            console.log(`todoSetCompleted.error:`, error);
            console.log(`todoSetCompleted.update.result:`, result);
            todoSetCompleted.result = result;
            todoSetCompleted.error = error;
        });
    }
});
