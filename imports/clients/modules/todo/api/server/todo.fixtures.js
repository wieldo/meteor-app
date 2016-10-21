import { todoCollection } from "./../collections/todo.collection";

Meteor.startup(() => {
    /*
    if (todoCollection.find().count() === 0) {
        const todos = [{
            "name": "My first to do"
        }, {
            "name": "My second to do"
        }, {
            "name": "My third to do"
        }];

        todos.forEach((todo) => {
            todoCollection.insert(todo);
        });
        console.log("--------------------");
        console.log("TODO Fixtures Loaded");
        console.log("--------------------");
    }
    */
});
