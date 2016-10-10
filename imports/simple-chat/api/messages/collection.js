import schema from "./schema";
import helpers from "./helpers";
export const Messages = new Mongo.Collection("messages");

Messages.attachSchema(schema);
Messages.helpers(helpers);

Messages.deny({
    insert() {
        return true;
    },
    update() {
        return true;
    },
    remove() {
        return true;
    }
});
