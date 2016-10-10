import {validate} from "./../schema";
/*
export const usersSignUp = new ValidatedMethod({
    name: "todo.insert",
    //validate: todoSchema.pick(["name"]).validator(),
    run(model){
        var debug = false;
        if (Meteor.isServer)
            debug = false;

        try {
            var result = Accounts.createUser(model);
            if (debug === true)
                console.debug(`result: `, result);
            if (result) {
                return result;
            }
        }
        catch(error) {
            if (debug === true)
                console.debug(`error: `, error);
            return error;
        }
        /*
        todoCollection.insert({name}, (error, result) => {
            console.log(`todoInsert.error:`, error);
            console.log(`todoInsert.result:`, result);
            todoInsert.error = error;
            todoInsert.result = result;
        });
    }
});

*/
export var usersSignUp;

Meteor.methods({
    "users.signup"(model){
        var debug = false;
        if (Meteor.isServer)
            debug = false;

        var validated = validate(model);

        if (validated === true) {
            try {
                var result = Accounts.createUser(model);
                if (debug === true)
                    console.debug(`result: `, result);
                if (result) {
                    return result;
                }
            }
            catch(error) {
                if (debug === true)
                    console.debug(`error: `, error);
                return error;
            }
        }else {
            return validated;
        }
    }
});
