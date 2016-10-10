import todoSchema from "./schemas";
const todoCollection = new Mongo.Collection("todo");
todoCollection.attachSchema(todoSchema);
export default {
    todoCollection,
    todoSchema
};
