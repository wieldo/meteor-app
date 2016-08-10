export default [
    {
        title: "theme, mdTheme, label",
        description: "See below textarea examples",
        js: JSON.stringify([
            {
                type: "textarea",
                key: "textarea.default",
                templateOptions: {
                    description: "Default textarea"
                }
            },
            {
                type: "textarea",
                key: "textarea.theme",
                templateOptions: {
                    description: "Textarea with theme 'meteorApp'",
                    theme: "meteorApp"
                }
            },
            {
                type: "textarea",
                key: "textarea.mdtheme",
                templateOptions: {
                    description: "Textarea with mdTheme 'meteorApp'",
                    mdTheme: "meteorApp"
                }
            },
            {
                type: "textarea",
                key: "textarea.label",
                templateOptions: {
                    label: "Label",
                    description: "Textarea with label",
                    mdTheme: "meteorApp"
                }
            }
        ], undefined, 4),
        field: [
            {
                type: "textarea",
                key: "textarea.default",
                templateOptions: {
                    description: "Default textarea"
                }
            },
            {
                type: "textarea",
                key: "textarea.theme",
                templateOptions: {
                    description: "Textarea with theme 'meteorApp'",
                    theme: "meteorApp"
                }
            },
            {
                type: "textarea",
                key: "textarea.mdtheme",
                templateOptions: {
                    description: "Textarea with mdTheme 'meteorApp'",
                    mdTheme: "meteorApp"
                }
            },
            {
                type: "textarea",
                key: "textarea.label",
                templateOptions: {
                    label: "Label",
                    description: "Textarea with label",
                    mdTheme: "meteorApp"
                }
            }
        ]
    },
    {
        title: "disabled, ngDisabled, required, ngRequired",
        description: "Some important option",
        js: JSON.stringify([
            {
                type: "textarea",
                key: "textarea.disabled",
                templateOptions: {
                    disabled: true,
                    description: "Disabled textarea"
                }
            },
            {
                type: "textarea",
                key: "textarea.ngdisabled",
                templateOptions: {
                    ngDisabled: true,
                    description: "ngDisabled textarea"
                }
            },
            {
                type: "textarea",
                key: "textarea.required",
                templateOptions: {
                    required: true,
                    description: "Required textarea"
                }
            },
            {
                type: "textarea",
                key: "textarea.ngrequired",
                templateOptions: {
                    ngRequired: true,
                    description: "ngRequired textarea"
                }
            }
        ], undefined, 4),
        field: [
            {
                type: "textarea",
                key: "textarea.disabled",
                templateOptions: {
                    disabled: true,
                    description: "Disabled textarea"
                }
            },
            {
                type: "textarea",
                key: "textarea.ngdisabled",
                templateOptions: {
                    ngDisabled: true,
                    description: "ngDisabled textarea"
                }
            },
            {
                type: "textarea",
                key: "textarea.required",
                templateOptions: {
                    required: true,
                    description: "Required textarea"
                }
            },
            {
                type: "textarea",
                key: "textarea.ngrequired",
                templateOptions: {
                    ngRequired: true,
                    description: "ngRequired textarea"
                }
            }
        ]
    },
    {
        title: "className, ngClass, ngClick",
        description: "See below textarea examples",
        js: JSON.stringify([
            {
                type: "textarea",
                key: "textarea.classname",
                templateOptions: {
                    className: "md-primary",
                    description: "Textarea with class set to 'md-primary'"
                }
            },
            {
                type: "textarea",
                key: "textarea.ngclass",
                templateOptions: {
                    description: "Textarea with ngClass defined and depends on textarea model above",
                    ngClass: (value, options, scope) => {
                        if (scope.model) {
                            if (scope.model.textarea) {
                                return scope.model.textarea.classname;
                            }
                        }
                    }
                }
            },
            {
                type: "textarea",
                key: "textarea.ngclick",
                templateOptions: {
                    description: "Textarea with ngClick defined, after click class is set to 'md-primary'",
                    ngClick: (value, options, scope) => {
                        alert("click");
                    }
                }
            }
        ], undefined, 4),
        field: [
            {
                type: "textarea",
                key: "textarea.classname",
                templateOptions: {
                    className: "md-primary",
                    description: "Textarea with class set to 'md-primary'"
                }
            },
            {
                type: "textarea",
                key: "textarea.ngclass",
                templateOptions: {
                    description: "Textarea with ngClass defined and depends on textarea model above",
                    ngClass: (value, options, scope) => {
                        if (scope.model) {
                            if (scope.model.textarea) {
                                return scope.model.textarea.classname;
                            }
                        }
                    }
                }
            },
            {
                type: "textarea",
                key: "textarea.ngclick",
                templateOptions: {
                    description: "Textarea with ngClick defined, after click class is set to 'md-primary'",
                    ngClick: (value, options, scope) => {
                        alert("click");
                    }
                }
            }
        ]
    },
    {
        title: "Textarea mdMaxlength, rows, mdSelectOnFocus",
        description: "Simple examples switch with theme",
        js: JSON.stringify([
            {
                type: "textarea",
                key: "textarea.mdmaxlength",
                templateOptions: {
                    mdMaxlength: 270,
                    description: "Textarea with mdMaxlength 270"
                }
            },
            {
                type: "textarea",
                key: "textarea.rows",
                templateOptions: {
                    rows: 5,
                    description: "Textarea with rows 5"
                }
            },
            {
                type: "textarea",
                key: "textarea.mdselectonfocus",
                defaultValue: "Loves kittens, snowboarding, and can type at 130 WPM. And rumor has it she bouldered up Castle Craig!",
                templateOptions: {
                    mdSelectOnFocus: true,
                    description: "Textarea with mdSelectOnFocus"
                }
            }
        ], undefined, 4),
        field: [
            {
                type: "textarea",
                key: "textarea.mdmaxlength",
                templateOptions: {
                    mdMaxlength: 270,
                    description: "Textarea with mdMaxlength 270"
                }
            },
            {
                type: "textarea",
                key: "textarea.rows",
                templateOptions: {
                    rows: 5,
                    description: "Textarea with rows 5"
                }
            },
            {
                type: "textarea",
                key: "textarea.mdselectonfocus",
                defaultValue: "Loves kittens, snowboarding, and can type at 130 WPM. And rumor has it she bouldered up Castle Craig!",
                templateOptions: {
                    mdSelectOnFocus: true,
                    description: "Textarea with mdSelectOnFocus"
                }
            }
        ]
    }
];
