
Meteor.startup(function(){
    if (Meteor.isServer){
        var debug = false;
        Meteor.publish("users.list", (find) => {
            if(debug === true ) {
                console.log(`find: `,find);
            }

            //new SimpleSchema({}).validate(find);
            return Meteor.users.find(find, {fields: {
                profile: 1
            }});
        });
    }
});
