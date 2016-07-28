import TodoCollection from '/imports/modules/todo/api/collection';

if (Meteor.isServer){
    Meteor.startup(function(){
        Meteor.publish("todo", function () {
            return TodoCollection.collection.find();
        });
        console.log('todo Publish loaded');
    });
}
