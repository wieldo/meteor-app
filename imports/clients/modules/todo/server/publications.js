import TodoCollection from "./../api/collection";

if (Meteor.isServer){
    Meteor.startup(function(){
        Meteor.publish("todo", function () {
            return TodoCollection.collection.find();
        });
        console.log("todo Publish loaded");
    });
}
