export default [
    {
        type: "input",
        key: "email",
        templateOptions: {
            theme: "meteor",
            type: "email",
            label: "Enter your email address",
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
            theme: "meteor",
            type: "password",
            label: "Enter your password",
            required: true
        }
    },
    {
        type: "input",
        key: "firstname",
        templateOptions: {
            theme: "meteor",
            label: "Enter your firstname",
            required: true
        }
    },
    {
        type: "input",
        key: "lastname",
        templateOptions: {
            theme: "meteor",
            type: "text",
            label: "Enter your lastname",
            required: true
        }
    }
];
