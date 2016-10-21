export default [
    {
        type: "input",
        key: "email",
        templateOptions: {
            type: "email",
            label: "Email",
            pattern: "/^.+@.+\..+$/",
            required: true
        },
        validation: {
            messages: {
                pattern: 'to.label + " pattern " + to.pattern + " is not correct"'
            }
        }
    },
    {
        type: "input",
        key: "password",
        templateOptions: {
            type: "password",
            label: "Password",
            minlength: 6,
            required: true
        }
    },
    {
        type: "input",
        key: "confirmPassword",
        templateOptions: {
            type: "password",
            label: "Confirm password",
            minlength: 6,
            required: true
        },
        validators: {
            confirmPassword: {
                expression: function(viewValue, modelValue, fieldScope) {
                    if (fieldScope.model) {
                        return fieldScope.model.password === (modelValue || viewValue);
                    }
                },
                message: () => {
                    return `Confirm password does not match`;
                }
            }
        },
        validation: {
            messages: {
                required: 'to.label + " is required"'
            }
        }
    },
    {
        type: "input",
        key: "profile.firstName",
        templateOptions: {
            label: "Firstname",
            required: true
        }
    },
    {
        type: "input",
        key: "profile.lastName",
        templateOptions: {
            type: "text",
            label: "Lastname",
            required: true
        }
    },
    {
        template: "<label>Birthday</label>"
    },
    {
        className: "flex layout-row layout-align-space-between-start",
        fieldGroup: [
            {
                type: "select-day",
                key: "profile.birthday.day",
                templateOptions: {
                    required: true
                }
            },
            {
                type: "select-month",
                key: "profile.birthday.month",
                className: "flex",
                templateOptions: {
                    required: true
                }
            },
            {
                type: "select-year",
                key: "profile.birthday.year",
                templateOptions: {
                    required: true
                }
            }
        ]
    },
    {
        className: "flex",
        fieldGroup: [
            {
                type: "radio",
                key: "profile.gender",
                templateOptions: {
                    label: "Gender",
                    className: "md-primary flex layout-row ",
                    options: [
                        {name: "Male", value: "Male"},
                        {name: "Female", value: "Female"}
                    ],
                    required: true
                }
            }
        ]
    }
];
