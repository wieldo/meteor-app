import { todoCollection } from "./../collections/todo.collection";

Meteor.startup(function(){
    this.debug = false;
    if (Meteor.isServer){
        Meteor.publish("todo", (selector, options) => {
            let fields = {
                name: 1,
                createdBy: 1,
                removed: 1,
                completed: 1,
                createdAt: 1
            };
            if (!options) {
                options = {
                    fields: {
                        name: 1,
                        createdBy: 1,
                        removed: 1,
                        completed: 1,
                        createdAt: 1
                    },
                    sort: {
                        createdAt: -1
                    }
                };
            } else {
                options.fields = fields;
            }
            if (this.debug === true) {
                console.log(`Meteor.publish("todo", (selector, options) => {})`);
                console.log(`selector`, selector);
                console.log(`options`, options);
            }
            return todoCollection.find(selector, options);
        });
    }
});
