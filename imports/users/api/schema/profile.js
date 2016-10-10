import {usersCountrySchema} from "./country";
export const usersProfileSchema = new SimpleSchema({
    firstName: {
        type: String,
        label: "Firstname"
    },
    lastName: {
        type: String,
        label: "Lastname"
    },
    birthday: {
        type: Object
    },
    "birthday.day": {
        type: Number,
        optional: true
    },
    "birthday.month": {
        type: Number,
        optional: true
    },
    "birthday.year": {
        type: Number,
        optional: true
    },
    "birthday.date": {
        type: Date,
        label: "Birthday"
    },
    gender: {
        type: String,
        allowedValues: ["Male", "Female"],
        label: "Gender"
    },
    organization : {
        type: String,
        optional: true,
        label: "Organization"
    },
    website: {
        type: String,
        regEx: SimpleSchema.RegEx.Url,
        optional: true,
        label: "Website"
    },
    country: {
        type: usersCountrySchema,
        optional: true,
        label: "Country"
    }
});
