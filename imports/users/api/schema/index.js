import {usersSchema} from "./schema";
import "./error-messages";
import validate from "./validate";
import createdBy from "./created-by";
import updatedBy from "./updated-by";
export default {
    createdBy,
    updatedBy,
    usersSchema,
    validate
};
Meteor.users.attachSchema(usersSchema);
