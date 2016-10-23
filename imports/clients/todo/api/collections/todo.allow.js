import { todoCollection } from "./todo.collection";
todoCollection.allow({
    insert: function (userId, todoId) {
        console.log(`userId:`,userId);
        console.log(`todoId:`,todoId);
        return true;
    },
    update: function (userId, todoId) {
        console.log(`userId:`,userId);
        console.log(`todoId:`,todoId);
        return true;
    },
    remove: function (userId, todoId) {
        console.log(`userId:`,userId);
        console.log(`todoId:`,todoId);
        return true;
    }
});
