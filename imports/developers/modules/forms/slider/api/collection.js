export default [
    {
        title: "Default, theme, disabled, discrete",
        description: "Just typical slider",
        form: "form_default",
        js: JSON.stringify([
            {
                type: "slider",
                key: "slider.default",
                templateOptions: {
                    description: "Default slider with minimum 50 and maximum 100 by step 5",
                    min: 50,
                    max: 100,
                    step: 5
                }
            },
            {
                type: "slider",
                key: "slider.theme",
                templateOptions: {
                    theme: "meteor",
                    description: "Default slider with minimum 50 and maximum 100 by step 5 with theme 'meteor'",
                    min: 50,
                    max: 100,
                    step: 5
                }
            },
            {
                type: "slider",
                key: "slider.mdtheme",
                templateOptions: {
                    theme: "meteor",
                    description: "Default slider with minimum 50 and maximum 100 by step 5 with mdTheme 'meteor'",
                    min: 50,
                    max: 100,
                    step: 5
                }
            },
            {
                type: "slider",
                key: "slider.disabled",
                templateOptions: {
                    disabled: true,
                    description: "Default slider with minimum 50 and maximum 100 by step 5 with disabled",
                    min: 50,
                    max: 100,
                    step: 5
                }
            },
            {
                type: "slider",
                key: "slider.mddisabled",
                templateOptions: {
                    ngDisabled: true,
                    description: "Default slider with minimum 50 and maximum 100 by step 5 with ngDisabled",
                    min: 50,
                    max: 100,
                    step: 5
                }
            },
            {
                type: "slider",
                key: "slider.discrete",
                templateOptions: {
                    mdDiscrete: true,
                    description: "Default slider with minimum 50 and maximum 100 by step 5 with mdDiscrete",
                    min: 50,
                    max: 100,
                    step: 5
                }
            }
        ], undefined, 4),
        field: [
            {
                type: "slider",
                key: "slider.default",
                templateOptions: {
                    description: "Default slider with minimum 50 and maximum 100 by step 5",
                    min: 50,
                    max: 100,
                    step: 5
                }
            },
            {
                type: "slider",
                key: "slider.theme",
                templateOptions: {
                    theme: "meteor",
                    description: "Default slider with minimum 50 and maximum 100 by step 5 with theme 'meteor'",
                    min: 50,
                    max: 100,
                    step: 5
                }
            },
            {
                type: "slider",
                key: "slider.mdtheme",
                templateOptions: {
                    theme: "meteor",
                    description: "Default slider with minimum 50 and maximum 100 by step 5 with mdTheme 'meteor'",
                    min: 50,
                    max: 100,
                    step: 5
                }
            },
            {
                type: "slider",
                key: "slider.disabled",
                templateOptions: {
                    disabled: true,
                    description: "Default slider with minimum 50 and maximum 100 by step 5 with disabled",
                    min: 50,
                    max: 100,
                    step: 5
                }
            },
            {
                type: "slider",
                key: "slider.mddisabled",
                templateOptions: {
                    ngDisabled: true,
                    description: "Default slider with minimum 50 and maximum 100 by step 5 with ngDisabled",
                    min: 50,
                    max: 100,
                    step: 5
                }
            },
            {
                type: "slider",
                key: "slider.discrete",
                templateOptions: {
                    mdDiscrete: true,
                    description: "Default slider with minimum 50 and maximum 100 by step 5 with mdDiscrete",
                    min: 50,
                    max: 100,
                    step: 5
                }
            }
        ]
    },
    {
        title: "ariaLabel, Label and showValue",
        description: "Example of ariaLabel and label",
        form: "form_arialabel",
        js: JSON.stringify([
            {
                type: "slider",
                key: "slider.arialabel",
                templateOptions: {
                    ariaLabel: "My aria label",
                    description: "Default slider with minimum 50 and maximum 100 by step 5 with ariaLabel",
                    min: 50,
                    max: 100,
                    step: 5
                }
            },
            {
                type: "slider",
                key: "slider.label",
                templateOptions: {
                    label: "My label",
                    description: "Default slider with minimum 50 and maximum 100 by step 5 with label",
                    min: 50,
                    max: 100,
                    step: 5
                }
            },
            {
                type: "slider",
                key: "slider.showvalue",
                templateOptions: {
                    label: "My label with value: ",
                    description: "Default slider with minimum 50 and maximum 100 by step 5 and value",
                    showValue: true,
                    min: 50,
                    max: 100,
                    step: 5
                }
            },
            {
                type: "slider",
                key: "slider.defaultvalue",
                defaultValue: 75,
                templateOptions: {
                    label: "My label with defaultValue: ",
                    description: "Default slider with minimum 50 and maximum 100 by step 5 and defaultValue '75'",
                    showValue: true,
                    min: 50,
                    max: 100,
                    step: 5
                }
            }
        ], undefined, 4),
        field: [
            {
                type: "slider",
                key: "slider.arialabel",
                templateOptions: {
                    ariaLabel: "My aria label",
                    description: "Default slider with minimum 50 and maximum 100 by step 5 with ariaLabel",
                    min: 50,
                    max: 100,
                    step: 5
                }
            },
            {
                type: "slider",
                key: "slider.label",
                templateOptions: {
                    label: "My label",
                    description: "Default slider with minimum 50 and maximum 100 by step 5 with label",
                    min: 50,
                    max: 100,
                    step: 5
                }
            },
            {
                type: "slider",
                key: "slider.showvalue",
                templateOptions: {
                    label: "My label with value: ",
                    description: "Default slider with minimum 50 and maximum 100 by step 5 and value",
                    showValue: true,
                    min: 50,
                    max: 100,
                    step: 5
                }
            },
            {
                type: "slider",
                key: "slider.defaultvalue",
                defaultValue: 75,
                templateOptions: {
                    label: "My label with defaultValue: ",
                    description: "Default slider with minimum 50 and maximum 100 by step 5 and defaultValue '75'",
                    showValue: true,
                    min: 50,
                    max: 100,
                    step: 5
                }
            }
        ]
    },
    {
        title: "className, ngClass, ngClick",
        form: "form_classname",
        description: "Few options",
        js: JSON.stringify([
            {
                type: "slider",
                key: "slider.classname",
                templateOptions: {
                    className: "md-primary",
                    description: "Default slider with minimum 50 and maximum 100 by step 5 and className 'md-primary'",
                    min: 50,
                    max: 100,
                    step: 5
                }
            },
            {
                type: "slider",
                key: "slider.ngclass",
                templateOptions: {
                    label: "Slider value: ",
                    showValue: true,
                    ngClass: (value, options, scope) => {
                        if (scope.model.slider) {
                            if (scope.model.slider.ngclass > 75) {
                                return "md-primary";
                            }
                        }
                    },
                    description: "Default slider with minimum 50 and maximum 100 by step 5 and ngClass return 'md-primary' if value > 75",
                    min: 50,
                    max: 100,
                    step: 5
                }
            },
            {
                type: "slider",
                key: "slider.ngclick",
                templateOptions: {
                    label: "Slider value: ",
                    showValue: true,
                    ngClick: (value, options, scope) => {
                        if (scope.model.slider) {
                            if (scope.model.slider.ngclick > 75) {
                                alert("more than 75%");
                            }
                        }
                    },
                    description: "Default slider with minimum 50 and maximum 100 by step 5 and ngClick alert 'more than 75%' if value > 75",
                    min: 50,
                    max: 100,
                    step: 5
                }
            }
        ], undefined, 4),
        field: [
            {
                type: "slider",
                key: "slider.classname",
                templateOptions: {
                    className: "md-primary",
                    description: "Default slider with minimum 50 and maximum 100 by step 5 and className 'md-primary'",
                    min: 50,
                    max: 100,
                    step: 5
                }
            },
            {
                type: "slider",
                key: "slider.ngclass",
                templateOptions: {
                    label: "Slider value: ",
                    showValue: true,
                    ngClass: (value, options, scope) => {
                        if (scope.model.slider) {
                            if (scope.model.slider.ngclass > 75) {
                                return "md-primary";
                            }
                        }
                    },
                    description: "Default slider with minimum 50 and maximum 100 by step 5 and ngClass return 'md-primary' if value > 75",
                    min: 50,
                    max: 100,
                    step: 5
                }
            },
            {
                type: "slider",
                key: "slider.ngclick",
                templateOptions: {
                    label: "Slider value: ",
                    showValue: true,
                    ngClick: (value, options, scope) => {
                        if (scope.model.slider) {
                            if (scope.model.slider.ngclick > 75) {
                                alert("more than 75%");
                            }
                        }
                    },
                    description: "Default slider with minimum 50 and maximum 100 by step 5 and ngClick alert 'more than 75%' if value > 75",
                    min: 50,
                    max: 100,
                    step: 5
                }
            }
        ]
    }
];
