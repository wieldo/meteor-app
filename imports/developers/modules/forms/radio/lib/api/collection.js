
export default [
    {
        title: "Default, theme, mdTheme, label, disabled",
        form: "form_default",
        model: {},
        js: JSON.stringify([
            {
                type: "radio",
                key: "radio.default",
                templateOptions: {
                    description: "Default radio",
                    options: [
                        {label: "First", ngValue: "First value"},
                        {label: "Second", ngValue: "Second value"}
                    ]
                }
            },
            {
                type: "radio",
                key: "radio.theme",
                templateOptions: {
                    theme: "meteorApp",
                    description: "Radio with theme changed to 'meteorApp'",
                    options: [
                        {label: "First", value: "First value"},
                        {label: "Second", value: "Second value"}
                    ]
                }
            },
            {
                type: "radio",
                key: "radio.mdtheme",
                templateOptions: {
                    mdTheme: "meteorApp",
                    description: "Radio with mdTheme changed to 'meteorApp'",
                    options: [
                        {label: "First", value: "First value"},
                        {label: "Second", value: "Second value"}
                    ]
                }
            },
            {
                type: "radio",
                key: "radio.label",
                templateOptions: {
                    label: "Radio label",
                    description: "Radio with label",
                    options: [
                        {label: "First", value: "First value"},
                        {label: "Second", value: "Second value"}
                    ]
                }
            },
            {
                type: "radio",
                key: "radio.disabled",
                templateOptions: {
                    description: "Radio is disabled",
                    options: [
                        {label: "First", value: "First value", disabled: false},
                        {label: "Second", value: "Second value", disabled: true},
                        {label: "Third", value: "Third value", disabled: true}
                    ]
                },
                expressionProperties: {
                    "templateOptions.ngDisabled": (value, options, scope) => {
                        return scope.model.checkbox.isdisabled;
                    }
                }
            },
            {
                type: "checkbox",
                key: "checkbox.isdisabled",
                templateOptions: {
                    label: "Disable radio above",
                    ngTrueValue: true,
                    ngFalseValue: false
                }
            }
        ], undefined, 4),
        field: [
            {
                type: "radio",
                key: "radio.default",
                templateOptions: {
                    description: "Default radio",
                    options: [
                        {label: "First", ngValue: "First value"},
                        {label: "Second", ngValue: "Second value"}
                    ]
                }
            },
            {
                type: "radio",
                key: "radio.theme",
                templateOptions: {
                    theme: "meteorApp",
                    description: "Radio with theme changed to 'meteorApp'",
                    options: [
                        {label: "First", value: "First value"},
                        {label: "Second", value: "Second value"}
                    ]
                }
            },
            {
                type: "radio",
                key: "radio.mdtheme",
                templateOptions: {
                    mdTheme: "meteorApp",
                    description: "Radio with mdTheme changed to 'meteorApp'",
                    options: [
                        {label: "First", value: "First value"},
                        {label: "Second", value: "Second value"}
                    ]
                }
            },
            {
                type: "radio",
                key: "radio.label",
                templateOptions: {
                    label: "Radio label",
                    description: "Radio with label",
                    options: [
                        {label: "First", value: "First value"},
                        {label: "Second", value: "Second value"}
                    ]
                }
            },
            {
                type: "radio",
                key: "radio.disabled",
                templateOptions: {
                    description: "Radio is disabled",
                    options: [
                        {label: "First", value: "First value", disabled: false},
                        {label: "Second", value: "Second value", disabled: true},
                        {label: "Third", value: "Third value", disabled: true}
                    ]
                },
                expressionProperties: {
                    "templateOptions.disabled": (value, options, scope) => {
                        return scope.model.checkbox.isdisabled;
                    }
                }
            },
            {
                type: "checkbox",
                key: "checkbox.isdisabled",
                templateOptions: {
                    label: "Disable radio above",
                    ngTrueValue: true
                }
            }
        ]
    },
    {
        title: "md-radio-group: className, ngClass, ngClick",
        form: "form_class",
        model: {},
        js: JSON.stringify([
            {
                type: "radio",
                key: "radio.classname",
                templateOptions: {
                    className: "md-primary",
                    description: "className = 'md-primary' defined",
                    options: [
                        {label: "First", value: "First ng-value"},
                        {label: "Second", value: "Second ng-value"},
                        {label: "Third", value: "Third value"}
                    ]
                }
            },
            {
                type: "radio",
                key: "radio.ngclass",
                templateOptions: {
                    label: "ngClass change label",
                    ngClass: (value, options, scope) => {
                        if (options.value() == "Second value") {
                            options.templateOptions.label = options.value();
                        }
                    },
                    description: "Radio options with ng-class",
                    options: [
                        {label: "First", value: "First value"},
                        {label: "Click to change label", value: "Second value"},
                        {label: "Third", value: "Third ng-value"}
                    ]
                }
            },
            {
                type: "radio",
                key: "radio.ngclick",
                templateOptions: {
                    description: "ngClick defined",
                    ngClick: (value, options, scope) => {
                        if (options.value() == "Third ng-value")
                            alert("You clicked on me!");
                    },
                    options: [
                        {label: "First", value: "First value"},
                        {label: "Second", value: "Second ng-value"},
                        {label: "Click on me to alert !", value: "Third ng-value"}
                    ]
                }
            },
            {
                type: "radio",
                key: "radio.ngclicklabel",
                templateOptions: {
                    description: "label radio option changed when click",
                    ngClick: (value, options, scope) => {
                        if (options.value() == "Third ng-value") {
                            scope.options.templateOptions.options[0] = {
                                label: "Is not disabled",
                                disabled: false
                            };
                        }
                    },
                    options: [
                        {label: "First", value: "First value", disabled: true},
                        {label: "Second", value: "Second ng-value"},
                        {label: "Third", value: "Third ng-value"}
                    ]
                }
            }
        ], undefined, 4),
        field: [
            {
                type: "radio",
                key: "radio.classname",
                templateOptions: {
                    className: "md-primary",
                    description: "className = 'md-primary' defined",
                    options: [
                        {label: "First", value: "First ng-value"},
                        {label: "Second", value: "Second ng-value"},
                        {label: "Third", value: "Third value"}
                    ]
                }
            },
            {
                type: "radio",
                key: "radio.ngclass",
                templateOptions: {
                    label: "ngClass change label",
                    ngClass: (value, options, scope) => {
                        if (options.value() == "Second value") {
                            options.templateOptions.label = options.value();
                        }
                    },
                    description: "Radio options with ng-class",
                    options: [
                        {label: "First", value: "First value"},
                        {label: "Click to change label", value: "Second value"},
                        {label: "Third", value: "Third ng-value"}
                    ]
                }
            },
            {
                type: "radio",
                key: "radio.ngclick",
                templateOptions: {
                    description: "ngClick defined",
                    ngClick: (value, options, scope) => {
                        if (options.value() == "Third ng-value")
                            alert("You clicked on me!");
                    },
                    options: [
                        {label: "First", value: "First value"},
                        {label: "Second", value: "Second ng-value"},
                        {label: "Click on me to alert !", value: "Third ng-value"}
                    ]
                }
            },
            {
                type: "radio",
                key: "radio.ngclicklabel",
                templateOptions: {
                    description: "label radio option changed when click",
                    ngClick: (value, options, scope) => {
                        if (options.value() == "Third ng-value") {
                            scope.options.templateOptions.options[0] = {
                                label: "Is not disabled",
                                disabled: false
                            };
                        }
                    },
                    options: [
                        {label: "First", value: "First value", disabled: true},
                        {label: "Second", value: "Second ng-value"},
                        {label: "Third", value: "Third ng-value"}
                    ]
                }
            }
        ]
    },
    {
        title: "ng-radio-button: ariaLabel, ngValue className, ngDisabled",
        description: "Few simple examples on options",
        form: "form_aria",
        model: {},
        js: JSON.stringify([
            {
                type: "radio",
                key: "radio.options.arialabel",
                templateOptions: {
                    description: "Radio option with options[arialabel] defined",
                    options: [
                        {label: "ariaLabel", value: "ariaLabel value", ariaLabel: "My Aria Label"},
                        {label: "Second", value: "Second value"},
                        {label: "Third", value: "Third value"}
                    ]
                }
            },
            {
                type: "radio",
                key: "radio.options.ngvalue",
                templateOptions: {
                    label: "Label",
                    description: "Radio option with ngValue defined",
                    options: [
                        {label: "value = '15x'", value: "15x"},
                        {label: "value = '153'", value: "153"},
                        {label: "Third", value: "Third value"}
                    ]
                }
            },
            {
                type: "radio",
                key: "radio.options.classname",
                templateOptions: {
                    description: "Radio options with second option[className]  md-primary",
                    options: [
                        {label: "First", ngValue: "First value"},
                        {label: "class='md-primary'", ngValue: "Second value", className: "md-primary"},
                        {label: "Third", ngValue: "Third test"}
                    ]
                }
            },
            {
                type: "radio",
                key: "radio.options.ngdisabled",
                templateOptions: {
                    description: "Radio options with second option disabled",
                    options: [
                        {label: "First", value: "First value"},
                        {label: "ngDisabled", value: "Second value", ngDisabled: true},
                        {label: "disabled", value: "Third value", disabled: true},
                        {label: "Fourth", value: "Fourth value"}
                    ]
                }
            }
        ], undefined, 4),
        field: [
            {
                type: "radio",
                key: "radio.options.arialabel",
                templateOptions: {
                    description: "Radio option with options[arialabel] defined",
                    options: [
                        {label: "ariaLabel", value: "ariaLabel value", ariaLabel: "My Aria Label"},
                        {label: "Second", value: "Second value"},
                        {label: "Third", value: "Third value"}
                    ]
                }
            },
            {
                type: "radio",
                key: "radio.options.ngvalue",
                templateOptions: {
                    label: "Label",
                    description: "Radio option with ngValue defined",
                    options: [
                        {label: "value = '15x'", value: "15x"},
                        {label: "value = '153'", value: "153"},
                        {label: "Third", value: "Third value"}
                    ]
                }
            },
            {
                type: "radio",
                key: "radio.options.classname",
                templateOptions: {
                    description: "Radio options with second option[className]  md-primary",
                    options: [
                        {label: "First", ngValue: "First value"},
                        {label: "class='md-primary'", ngValue: "Second value", className: "md-primary"},
                        {label: "Third", ngValue: "Third test"}
                    ]
                }
            },
            {
                type: "radio",
                key: "radio.options.ngdisabled",
                templateOptions: {
                    description: "Radio options with second option disabled",
                    options: [
                        {label: "First", value: "First value"},
                        {label: "ngDisabled", value: "Second value", ngDisabled: true},
                        {label: "disabled", value: "Third value", disabled: true},
                        {label: "Fourth", value: "Fourth value"}
                    ]
                }
            }
        ]
    }
];
