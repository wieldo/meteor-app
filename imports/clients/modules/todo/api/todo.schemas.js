import { createdBy, updatedBy } from "./../../../../users/api/schema";
export var todoSchema = {
    _id: {
        type: String,
        optional: true
    },
    name: {
        type: String,
        label: "Name",
        min: 5,
        max: 50
    },
    completed: {
        type: Boolean,
        label: "Completed",
        denyInsert: true,
        optional: true
    },
    createdBy: {
        type: createdBy,
        denyUpdate: true
    },
    createdAt: {
        type: Date,
        autoValue: function() {
            if (this.isInsert) {
                return new Date();
            } else if (this.isUpsert) {
                return {$setOnInsert: new Date()};
            } else {
                this.unset();
            }
        },
        denyUpdate: true
    },
    updatedAt: {
        type: Date,
        autoValue: function() {
            if (this.isUpdate) {
                return new Date();
            } else {
                this.unset();
            }
        },
        denyInsert: true,
        optional: true
    },
    updatedBy: {
        type: updatedBy,
        optional: true,
        denyInsert: true
    },
    // Whenever the "content" field is updated, automatically
    // update a history array.
    updatesHistory: {
        type: Array,
        optional: true,
        autoValue: function() {
            var name = this.field("name");
            if (name.isSet) {
                if (this.isInsert) {
                    return [{
                        date: new Date(),
                        name: name.value
                    }];
                } else {
                    return {
                        $push: {
                            date: new Date,
                            name: name.value
                        }
                    };
                }
            } else {
                this.unset();
            }
        }
    },
    "updatesHistory.$": {
        type: Object
    },
    "updatesHistory.$.date": {
        type: Date,
        optional: true
    },
    "updatesHistory.$.name": {
        type: String
    },
    doAt: {
        type: Date,
        optional: true
    },
    removed: {
        type: Boolean,
        autoValue: function() {
            if (this.isInsert)
                return false;
        }
    },
    removedAt: {
        type: Date,
        denyInsert: true,
        optional: true
    }
};
export default new SimpleSchema(todoSchema);
