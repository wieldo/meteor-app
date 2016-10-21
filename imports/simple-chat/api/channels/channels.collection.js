import schema from "./channels.schema";
export const Channels = new Mongo.Collection("channels");
Channels.attachSchema(schema);
Channels.deny({
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
