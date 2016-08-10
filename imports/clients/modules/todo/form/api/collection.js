export default [
    {
        type: 'input',
        key: 'name',
        templateOptions: {
            theme: 'default',
            type: 'text',
            minlength: 10,
            maxlength: 20,
            label: 'To do name',
            placeholder: 'Enter your to do action',
            required: true
        }
    },
    {
        type: 'input',
        key: 'description',
        templateOptions: {
            theme: 'default',
            type: 'text',
            minlength: 10,
            maxlength: 250,
            label: 'To do action description',
            placeholder: 'Enter your to do action description'
        }
    },
    {
        type: 'checkbox',
        key: 'completed',
        templateOptions: {
            theme: 'default',
            type: 'checkbox',
            className: 'md-primary',
            label: 'Completed',
            placeholder: 'Completed',
            mdIndeterminate: ''
        },
        hideExpression: function($viewValue, $modelValue, scope) {
            return !scope.model._id;
        }
    }
];
