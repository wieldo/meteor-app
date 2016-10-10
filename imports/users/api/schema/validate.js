import {usersSchema} from "./schema";
let validate = (model) => {
    // Debug
    var debug = false;
    if (Meteor.isServer)
        debug = false;

    // clone model
    var checkModel = _.clone(model);
    // remove unnecesary
    delete checkModel["email"];
    delete checkModel["confirmPassword"];
    delete checkModel["password"];

    var context = usersSchema.newContext();
    let isValid = context.validate(checkModel);

    // display some debug
    if (debug === true) {
        console.debug(`checkModel: `, checkModel);
        console.debug(`isValid: `, isValid);
    }
    // if model with specified schema is not valid
    if (!isValid) {
        var fields = context.invalidKeys();
        if (debug === true)
            console.debug(`fields: `, fields);

        var errors = {
            type: "error",
            messages: {}
        };

        for( var i in fields ) {
            let name = fields[i].name;
            errors.messages[name] = context.keyErrorMessage( name );
        }
        if (debug === true)
            console.debug(`errors: `, errors);

        return errors;
    }
    return isValid;
};
export default validate;
