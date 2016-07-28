export default new SimpleSchema({
    name: {
        type: String,
        min: 3,
        max: 20
    },
    authorId: {
        type: String,
        regEx: SimpleSchema.RegEx.Id
    },
    users: {
        type: [Object],
        optional: true
    },
    'users.$.id': {
        type: String,
        regEx: SimpleSchema.RegEx.Id
    },
    'users.$.addedAt': {
        type: Date
    },
    createdAt: {
        type: Date,
        autoValue: function createdAtAutoValue() {
            if (this.isInsert) {
                return new Date();
            }
            if (this.isUpsert) {
                return {
                    $setOnInsert: new Date()
                };
            }
            this.unset(); // Prevent user from supplying their own value
        }
    }
});
