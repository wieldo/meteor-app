import {todoSchema} from "./../../api/schemas";
// todoSchema.name.max
export default [
    {
        className: "flex layout-row layout-align-start-center",
        fieldGroup: [
            {
                type: "checkbox",
                key: "completed",
                templateOptions: {
                    type: "checkbox",
                    className: "md-primary",
                    ariaLabel: "Completed"
                },
                hideExpression: "!model._id"
            },
            {
                type: "input",
                key: "name",
                className: "flex-100",
                templateOptions: {
                    type: "text",
                    minlength: 5,
                    maxlength: 100,
                    mdMaxlength: 100,
                    label: "Add something to do",
                    required: true,
                    onKeyup: function($viewValue, $modelValue, scope, $event) {
                        if ($event.keyCode == 27) {
                            for(let key in scope.model) {
                                delete scope.model[key];
                            }
                        }
                    }
                }
            }
        ]
    }
];
