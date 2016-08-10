export default [
    {
        type: 'input',
        key: 'email',
        templateOptions: {
            theme: 'meteor',
            type: 'email',
            label: 'Email',
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
        type: 'input',
        key: 'password',
        templateOptions: {
            theme: "meteor",
            type: "password",
            label: "Enter your password",
            required: true
        }
    }
];
