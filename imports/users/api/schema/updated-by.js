export default new SimpleSchema({
    id: {
        type: String,
        autoValue: function() {
            if (this.isUpdate) {
                return this.userId;
                //return Meteor.user()._id;
            }else {
                this.unset();
            }
        }
    },
    firstName: {
        type: String,
        autoValue: function() {
            if (this.isUpdate) {
                //return this.userId;
                return Meteor.user().profile.firstName;
            }else {
                this.unset();
            }
        }
    },
    lastName: {
        type: String,
        autoValue: function() {
            if (this.isUpdate) {
                //return this.userId;
                return Meteor.user().profile.lastName;
            }else {
                this.unset();
            }
        }
    }
});
