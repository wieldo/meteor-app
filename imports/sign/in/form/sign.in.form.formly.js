export default [
    {
        type: "input",
        key: "email",
        templateOptions: {
            type: "email",
            label: "Email address",
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
            required: true
        }
    }
];
