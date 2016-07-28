import myOwnFunction from "../client/helpers/my-own-function";
import customTemplate from "../client/custom-template";
import customTemplateWrapper from "../client/wrapper/wrapper";
export default [
    {
        title: "Label and placeholder with description",
        description: "Input with defined label and placeholder",
        js: JSON.stringify([
            {
                type: "input",
                key: "label",
                templateOptions: {
                    label: "Input with label",
                    description: "The best option is to set label without placeholder, look below why"
                }
            },
            {
                type: "input",
                key: "theme",
                templateOptions: {
                    label: "Input with theme defined",
                    theme: "meteorApp",
                    description: "Theme meteorApp is defined"
                }
            },
            {
                type: "input",
                key: "mdtheme",
                templateOptions: {
                    label: "Input with mdTheme defined",
                    mdTheme: "meteorApp",
                    description: "Theme meteorApp is defined"
                }
            },
            {
                type: "input",
                key: "placeholder",
                templateOptions: {
                    placeholder: "Input with placeholder",
                    description: "Label is not defined and placeholder is invisible until you focus on input"
                }
            },
            {
                type: "input",
                key: "labelplaceholder",
                templateOptions: {
                    label: "I am label",
                    placeholder: "I am placeholder",
                    description: "Label is defined and placeholder is invisible until you focus on input"
                }
            },
            {
                type: "input",
                key: "arialabel",
                templateOptions: {
                    ariaLabel: "Input with attribute ariaLabel defined",
                    description: "Input with attribute ariaLabel defined"
                }
            }
        ], undefined, 4),
        field: [
            {
                type: "input",
                key: "label",
                templateOptions: {
                    label: "Input with label",
                    description: "The best option is to set label without placeholder, look below why"
                }
            },
            {
                type: "input",
                key: "theme",
                templateOptions: {
                    label: "Input with theme defined",
                    theme: "meteorApp",
                    description: "Theme meteorApp is defined"
                }
            },
            {
                type: "input",
                key: "mdtheme",
                templateOptions: {
                    label: "Input with mdTheme defined",
                    mdTheme: "meteorApp",
                    description: "Theme meteorApp is defined"
                }
            },
            {
                type: "input",
                key: "placeholder",
                templateOptions: {
                    placeholder: "Input with placeholder",
                    description: "Label is not defined and placeholder is invisible until you focus on input"
                }
            },
            {
                type: "input",
                key: "labelplaceholder",
                templateOptions: {
                    label: "I am label",
                    placeholder: "I am placeholder",
                    description: "Label is defined and placeholder is invisible until you focus on input"
                }
            },
            {
                type: "input",
                key: "arialabel",
                templateOptions: {
                    ariaLabel: "Input with attribute ariaLabel defined",
                    description: "Input with attribute ariaLabel defined"
                }
            }
        ]
    },
    {
        title: "Required, disabled and readonly",
        description: "Input text with required or disabled or both option",
        js: JSON.stringify([
            {
                type: "input",
                key: "required",
                templateOptions: {
                    description: "This is required input without label",
                    required: true
                }
            },
            {
                type: "input",
                key: "requiredcustom",
                templateOptions: {
                    label: "This field is required",
                    description: "Input text required with custom validation",
                    required: true
                },
                validation: {
                    messages: {
                        required: `to.label + " is very required"`
                    }
                }
            },
            {
                type: "input",
                key: "required",
                templateOptions: {
                    label: "ngRequired",
                    description: "This is required input with label",
                    ngRequired: true
                }
            },
            {
                type: "input",
                key: "disabled",
                templateOptions: {
                    label: "Input is disabled",
                    description: "You can use ngDisabled too",
                    disabled: true
                }
            },
            {
                type: "input",
                key: "disabled",
                templateOptions: {
                    label: "Input is disabled",
                    description: "Input with ngDisabled true",
                    ngDisabled: true
                }
            },
            {
                type: "input",
                key: "readonly",
                templateOptions: {
                    label: "Input is readonly",
                    readonly: true
                }
            }
        ], undefined, 4),
        field: [
            {
                type: "input",
                key: "required",
                templateOptions: {
                    description: "This is required input without label",
                    required: true
                }
            },
            {
                type: "input",
                key: "requiredcustom",
                templateOptions: {
                    label: "This field is required",
                    description: "Input text required with custom validation",
                    required: true
                },
                validation: {
                    messages: {
                        required: `to.label + " is very required"`
                    }
                }
            },
            {
                type: "input",
                key: "required",
                templateOptions: {
                    label: "ngRequired",
                    description: "This is required input with label",
                    ngRequired: true
                }
            },
            {
                type: "input",
                key: "disabled",
                templateOptions: {
                    label: "Input is disabled",
                    description: "You can use ngDisabled too",
                    disabled: true
                }
            },
            {
                type: "input",
                key: "disabled",
                templateOptions: {
                    label: "Input is disabled",
                    description: "Input with ngDisabled true",
                    ngDisabled: true
                }
            },
            {
                type: "input",
                key: "readonly",
                templateOptions: {
                    label: "Input is readonly",
                    readonly: true
                }
            }
        ]
    },
    {
        title: "Password",
        description: "Input with hidden chars because of password type",
        js: JSON.stringify([
            {
                type: "input",
                key: "password",
                templateOptions: {
                    type: "password",
                    label: "Password input",
                    description: "Default type of input is 'text'"
                }
            }
        ], undefined, 4),
        field: [
            {
                type: "input",
                key: "password",
                templateOptions: {
                    type: "password",
                    label: "Password input",
                    description: "Default type of input is 'text'"
                }
            }
        ]
    },
    {
        title: "Minimum, maximum length",
        description: "Input text field with minimum or maximum or both length",
        js: JSON.stringify([
            {
                type: "input",
                key: "minlength",
                templateOptions: {
                    label: 'Minimum length field is 5',
                    minlength: 5
                }
            },
            {
                type: "input",
                key: "maxlength",
                templateOptions: {
                    label: "Maximum length field is 15",
                    maxlength: 15
                }
            },
            {
                type: "input",
                key: "minmaxlength",
                templateOptions: {
                    label: "Maximum and minimum length field",
                    minlength: 5,
                    maxlength: 15
                }
            },
            {
                type: "input",
                key: "minmdmaxlength",
                templateOptions: {
                    description: "Input text field with maximum counted length",
                    label: "Maximum and minimum length field",
                    minlength: 5,
                    maxlength: 15,
                    mdMaxlength: 15
                }
            }
        ], undefined, 4),
        field: [
            {
                type: "input",
                key: "minlength",
                templateOptions: {
                    label: 'Minimum length field is 5',
                    minlength: 5
                }
            },
            {
                type: "input",
                key: "maxlength",
                templateOptions: {
                    label: "Maximum length field is 15",
                    maxlength: 15
                }
            },
            {
                type: "input",
                key: "minmaxlength",
                templateOptions: {
                    label: "Maximum and minimum length field",
                    minlength: 5,
                    maxlength: 15
                }
            },
            {
                type: "input",
                key: "minmdmaxlength",
                templateOptions: {
                    description: "Input text field with maximum counted length",
                    label: "Maximum and minimum length field",
                    minlength: 5,
                    maxlength: 15,
                    mdMaxlength: 15
                }
            }
        ]
    },
    {
        title: "Email",
        description: "Input text field type email",
        js: JSON.stringify([
            {
                type: "input",
                key: "email-pattern",
                templateOptions: {
                    type: "email",
                    label: "Email address",
                    pattern: "/^.+@.+\..+$/",
                    patternValidationMessage: " /^.+@.+\..+$/ "
                }
            },
            {
                type: "input",
                key: "email-pattern-custom",
                templateOptions: {
                    type: "email",
                    label: "Email address",
                    description: "Custom validation message",
                    pattern: "/^.+@.+\..+$/"
                },
                validation: {
                    messages: {
                        pattern: `to.label + " pattern " + to.pattern + " is not correct"`
                    }
                }
            },
            {
                type: "input",
                key: "email-ngpattern",
                templateOptions: {
                    type: "email",
                    label: "Email address",
                    ngPattern: "/^.+@.+\..+$/",
                    patternValidationMessage: `email /^.+@.+\..+$/ `
                }
            }
        ], undefined, 4),
        field: [
            {
                type: "input",
                key: "email-pattern",
                templateOptions: {
                    type: "email",
                    label: "Email address",
                    pattern: "/^.+@.+\..+$/",
                    patternValidationMessage: " /^.+@.+\..+$/ "
                }
            },
            {
                type: "input",
                key: "email-pattern-custom",
                templateOptions: {
                    type: "email",
                    label: "Email address",
                    description: "Custom validation message",
                    pattern: "/^.+@.+\..+$/"
                },
                validation: {
                    messages: {
                        pattern: `to.label + " pattern " + to.pattern + " is not correct"`
                    }
                }
            },
            {
                type: "input",
                key: "email-ngpattern",
                templateOptions: {
                    type: "email",
                    label: "Email address",
                    ngPattern: "/^.+@.+\..+$/",
                    patternValidationMessage: `email /^.+@.+\..+$/ `
                }
            }
        ]
    },
    {
        title: "Number",
        description: "Input text field with minimu, maximum value on defined step",
        js: JSON.stringify([
            {
                type: "input",
                key: "number",
                defaultValue: 825,
                templateOptions: {
                    type: "number",
                    label: "Number with minimum 800 and maximum 900 with step 5",
                    min: 800,
                    max: 900,
                    step: 5
                }
            }
        ], undefined, 4),
        field: [
            {
                type: "input",
                key: "number",
                defaultValue: 825,
                templateOptions: {
                    type: "number",
                    label: "Number with minimum 800 and maximum 900 with step 5",
                    min: 800,
                    max: 900,
                    step: 5
                }
            }
        ]
    },
    {
        title: "ngClass and className",
        description: "Input with ng-class defined",
        js: JSON.stringify([
            {
                type: "input",
                key: "classname",
                className: "meteorApp",
                templateOptions: {
                    className: "meteorApp",
                    label: `formly className and to.className is set to meteorApp`
                }
            },
            {
                type: "input",
                key: "ngClass",
                templateOptions: {
                    description: "This input retrieve class from input below",
                    ngClass: (value, options, scope) => {
                        return scope.model.writengClass;
                    }
                },
                expressionProperties: {
                    "templateOptions.label": ($viewValue, $modelValue, scope) => {
                        return "class: " + scope.model.writengClass;
                    }
                }
            },
            {
                type: "input",
                key: "writengClass",
                templateOptions: {
                    label: "This input define class input above"
                }
            }
        ], undefined, 4),
        field: [
            {
                type: "input",
                key: "classname",
                className: "meteorApp",
                templateOptions: {
                    className: "meteorApp",
                    label: `formly className and to.className is set to meteorApp`
                }
            },
            {
                type: "input",
                key: "ngClass",
                templateOptions: {
                    description: "This input retrieve class from input below",
                    ngClass: (value, options, scope) => {
                        return scope.model.writengClass;
                    }
                },
                expressionProperties: {
                    "templateOptions.label": ($viewValue, $modelValue, scope) => {
                        return "class: " + scope.model.writengClass;
                    }
                }
            },
            {
                type: "input",
                key: "writengClass",
                templateOptions: {
                    label: "This input define class input above"
                }
            }
        ]
    },
    {
        title: "ngClick",
        description: "Input with ng-click defined",
        js: JSON.stringify([
            {
                type: "input",
                key: "ngClick",
                templateOptions: {
                    label: "On click console.log clicked element",
                    ngClick: (value, options, scope, event) => {
                        console.log(value);
                        console.log(options);
                        console.log(scope);
                        console.log(event);
                        scope.to.label = "You have clicked on me, mmmm";
                    }
                }
            },
            {
                type: "input",
                key: "ngClick",
                data: {
                    test: true
                },
                templateOptions: {
                    label: "On click console.log clicked element",
                    ngClick: myOwnFunction
                }
            }
        ], undefined, 4),
        field: [
            {
                type: "input",
                key: "ngClick",
                templateOptions: {
                    label: "On click console.log clicked element",
                    ngClick: (value, options, scope, event) => {
                        console.log(value);
                        console.log(options);
                        console.log(scope);
                        console.log(event);
                        scope.to.label = "You have clicked on me, mmmm";
                    }
                }
            },
            {
                type: "input",
                key: "ngClick",
                data: {
                    test: true
                },
                templateOptions: {
                    label: "On click console.log clicked element",
                    ngClick: myOwnFunction
                }
            }
        ]
    },
    {
        title: "Custom template",
        description: "Input with custom template",
        js: JSON.stringify([
            {
                key: "text",
                templateUrl: customTemplate,
                wrapper: ["customTemplateWrapper"],
                templateOptions: {
                    type: "text",
                    ariaLabel: "My aria label",
                    placeholder: "My custom placeholder"
                },
                ngModelAttrs: {
                    bound: {
                        attribute: "aria-label"
                    }
                }
            }
        ], undefined, 4),
        field: [
            {
                key: "text",
                templateUrl: customTemplate,
                wrapper: ["customTemplateWrapper"],
                templateOptions: {
                    type: "text",
                    ariaLabel: "My aria label",
                    placeholder: "My custom placeholder"
                },
                ngModelAttrs: {
                    bound: {
                        attribute: "aria-label"
                    }
                }
            }
        ]
    }
];
