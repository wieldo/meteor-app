export default [
    {
        title: "Default, theme, mdTheme",
        description: "Simple examples switch with theme",
        form: "slider_default",
        js: JSON.stringify([
            {
                type: "switch",
                key: "switch.default",
                defaultValue: true,
                templateOptions: {
                    description: "Default switch",
                    ngTrueValue: "'yes'",
                    ngFalseValue: "'no'"
                }
            },
            {
                type: "switch",
                key: "switch.theme",
                templateOptions: {
                    description: "Switch with theme 'meteorApp'",
                    theme: "meteorApp",
                    ngTrueValue: "'yes'",
                    ngFalseValue: "'no'"
                }
            },
            {
                type: "switch",
                key: "switch.mdtheme",
                templateOptions: {
                    description: "Switch with mdTheme 'meteorApp'",
                    theme: "meteorApp",
                    ngTrueValue: "'yes'",
                    ngFalseValue: "'no'"
                }
            }
        ], undefined, 4),
        field: [
            {
                type: "switch",
                key: "switch.default",
                templateOptions: {
                    description: "Default switch",
                    ngTrueValue: "'yes'",
                    ngFalseValue: "'no'"
                }
            },
            {
                type: "switch",
                key: "switch.theme",
                templateOptions: {
                    description: "Switch with theme 'meteorApp'",
                    theme: "meteorApp",
                    ngTrueValue: "'yes'",
                    ngFalseValue: "'no'"
                }
            },
            {
                type: "switch",
                key: "switch.mdtheme",
                templateOptions: {
                    description: "Switch with mdTheme 'meteorApp'",
                    theme: "meteorApp",
                    ngTrueValue: "'yes'",
                    ngFalseValue: "'no'"
                }
            }
        ]
    },
    {
        title: "Disabled, mdDisabled, mdNoInk",
        description: "Simple examples switch with theme",
        form: "slider_disabled",
        js: JSON.stringify([
            {
                type: "switch",
                key: "switch.disabled",
                templateOptions: {
                    name: "Disabled",
                    disabled: true,
                    description: "Disabled",
                    ngTrueValue: "'yes'",
                    ngFalseValue: "'no'"
                }
            },
            {
                type: "switch",
                key: "switch.ngDisabled",
                templateOptions: {
                    name: "ngDisabled",
                    ngDisabled: true,
                    description: "ngDisabled switch",
                    ngTrueValue: "'yes'",
                    ngFalseValue: "'no'"
                }
            },
            {
                type: "switch",
                key: "switch.ngDisableddefaultValue",
                defaultValue: true,
                templateOptions: {
                    name: "ngDisabled with defaultValue",
                    description: "ngDisabled switch with defaultValue",
                    ngTrueValue: "'yes'",
                    ngFalseValue: "'no'",
                    ngDisabled: true
                }
            },
            {
                type: "switch",
                key: "switch.mdnoink",
                defaultValue: true,
                templateOptions: {
                    name: "mdNoInk",
                    mdNoInk: true,
                    description: "switch with no ink",
                    ngTrueValue: "'yes'",
                    ngFalseValue: "'no'"
                }
            }
        ], undefined, 4),
        field: [
            {
                type: "switch",
                key: "switch.disabled",
                templateOptions: {
                    name: "Disabled",
                    disabled: true,
                    description: "Disabled",
                    ngTrueValue: "'yes'",
                    ngFalseValue: "'no'"
                }
            },
            {
                type: "switch",
                key: "switch.ngDisabled",
                templateOptions: {
                    name: "ngDisabled",
                    ngDisabled: true,
                    description: "ngDisabled switch",
                    ngTrueValue: "'yes'",
                    ngFalseValue: "'no'"
                }
            },
            {
                type: "switch",
                key: "switch.ngDisableddefaultValue",
                defaultValue: true,
                templateOptions: {
                    name: "ngDisabled with defaultValue",
                    description: "ngDisabled switch with defaultValue",
                    ngTrueValue: true,
                    ngFalseValue: false,
                    ngDisabled: true
                }
            },
            {
                type: "switch",
                key: "switch.ngDisableddefaultValueyes",
                defaultValue: "yes",
                templateOptions: {
                    name: "ngDisabled with defaultValue 'yes'",
                    description: "ngDisabled switch with defaultValue 'yes'",
                    ngTrueValue: "'yes'",
                    ngFalseValue: "'no'",
                    ngDisabled: true
                }
            },
            {
                type: "switch",
                key: "switch.mdnoink",
                defaultValue: true,
                templateOptions: {
                    name: "mdNoInk",
                    mdNoInk: true,
                    description: "switch with no ink",
                    ngTrueValue: "'yes'",
                    ngFalseValue: "'no'"
                }
            }
        ]
    },
    {
        title: "ariaLabel, label, showValue, name",
        description: "Simple examples switch with labels and values",
        form: "slider_simple",
        js: JSON.stringify([
            {
                type: "switch",
                key: "switch.arialabel",
                templateOptions: {
                    ariaLabel: "Aria label is defined",
                    description: "Switch with ariaLabel defined",
                    ngTrueValue: "'yes'",
                    ngFalseValue: "'no'"
                }
            },
            {
                type: "switch",
                key: "switch.label",
                templateOptions: {
                    label: "Switch label",
                    description: "Switch with label defined",
                    ngTrueValue: "'yes'",
                    ngFalseValue: "'no'"
                }
            },
            {
                type: "switch",
                key: "switch.labelshowvalue",
                templateOptions: {
                    label: "Label",
                    showValue: true,
                    description: "Select with label defined and label value",
                    ngTrueValue: "'yes'",
                    ngFalseValue: "'no'"
                }
            },
            {
                type: "switch",
                key: "switch.name",
                templateOptions: {
                    name: "Name",
                    showValue: true,
                    description: "Select with name defined",
                    ngTrueValue: "'yes'",
                    ngFalseValue: "'no'"
                }
            },
            {
                type: "switch",
                key: "switch.labelname",
                templateOptions: {
                    label: "Label",
                    name: "Name",
                    showValue: true,
                    description: "Switch label with label and name",
                    ngTrueValue: "'yes'",
                    ngFalseValue: "'no'"
                }
            }
        ], undefined, 4),
        field: [
            {
                type: "switch",
                key: "switch.arialabel",
                templateOptions: {
                    ariaLabel: "Aria label is defined",
                    description: "Switch with ariaLabel defined",
                    ngTrueValue: "'yes'",
                    ngFalseValue: "'no'"
                }
            },
            {
                type: "switch",
                key: "switch.label",
                templateOptions: {
                    label: "Switch label",
                    description: "Switch with label defined",
                    ngTrueValue: "'yes'",
                    ngFalseValue: "'no'"
                }
            },
            {
                type: "switch",
                key: "switch.labelshowvalue",
                templateOptions: {
                    label: "Label",
                    showValue: true,
                    description: "Select with label defined and label value",
                    ngTrueValue: "'yes'",
                    ngFalseValue: "'no'"
                }
            },
            {
                type: "switch",
                key: "switch.name",
                templateOptions: {
                    name: "Name",
                    showValue: true,
                    description: "Select with name defined",
                    ngTrueValue: "'yes'",
                    ngFalseValue: "'no'"
                }
            },
            {
                type: "switch",
                key: "switch.labelname",
                templateOptions: {
                    label: "Label",
                    name: "Name",
                    showValue: true,
                    description: "Switch label with label and name",
                    ngTrueValue: "'yes'",
                    ngFalseValue: "'no'"
                }
            }
        ]
    },
    {
        title: "className, ngClass, ngClick, ngChange",
        description: "Few examples",
        form: "slider_classname",
        js: JSON.stringify([
            {
                type: "switch",
                key: "switch.classname",
                templateOptions: {
                    className: "md-primary",
                    label: "Label",
                    name: "md-primary",
                    description: "Switch with class 'md-primary' and set switch class below to 'md-primary'",
                    ngTrueValue: "'yes'",
                    ngFalseValue: "'no'"
                }
            },
            {
                type: "switch",
                key: "switch.ngclass",
                templateOptions: {
                    ngTrueValue: "'yes'",
                    ngFalseValue: "'no'",
                    name: "ngClass",
                    description: "Switch with ngClass defined and switch above change class to 'md-primary'",
                    ngClass: (value, options, scope) => {
                        if (scope.model) {
                            if (scope.model.switch) {
                                if (scope.model.switch.classname == "yes")
                                    return "md-primary";
                            }
                        }
                    }
                }
            },
            {
                type: "switch",
                key: "switch.ngclick",
                templateOptions: {
                    name: "ngClick",
                    description: "Switch with ngClick defined and if click you get alert with first switch",
                    ngTrueValue: "'yes'",
                    ngFalseValue: "'no'",
                    ngClick: (value, options, scope) => {
                        if (scope.model) {
                            if (scope.model.switch) {
                                if (scope.model.switch.classname == "yes")
                                    alert(scope.model.switch.classname);
                            }
                        }
                    }
                }
            },
            {
                type: "switch",
                key: "switch.clickdisable",
                templateOptions: {
                    name: "Click to disable below",
                    description: "Click to disable switch below",
                    ngTrueValue: true,
                    ngFalseValue: false
                }
            },
            {
                type: "switch",
                key: "switch.ngchange",
                templateOptions: {
                    description: "Switch with ngChange defined",
                    name: "ngChange",
                    ngTrueValue: "'yes'",
                    ngFalseValue: "'no'",
                    ngChange: (value, options, scope) => {
                        if (scope.model) {
                            if (scope.model.switch) {
                                if (scope.model.switch.classname == "yes")
                                    alert(scope.model.switch.classname);
                            }
                        }
                    }
                },
                expressionProperties: {
                    "templateOptions.disabled": "model.switch.clickdisable"
                }
            }
        ], undefined, 4),
        field: [
            {
                type: "switch",
                key: "switch.classname",
                templateOptions: {
                    className: "md-primary",
                    label: "Label",
                    name: "md-primary",
                    description: "Switch with class 'md-primary' and set switch class below to 'md-primary'",
                    ngTrueValue: "'yes'",
                    ngFalseValue: "'no'"
                }
            },
            {
                type: "switch",
                key: "switch.ngclass",
                templateOptions: {
                    ngTrueValue: "'yes'",
                    ngFalseValue: "'no'",
                    name: "ngClass",
                    description: "Switch with ngClass defined and switch above change class to 'md-primary'",
                    ngClass: (value, options, scope) => {
                        if (scope.model) {
                            if (scope.model.switch) {
                                if (scope.model.switch.classname == "yes")
                                    return "md-primary";
                            }
                        }
                    }
                }
            },
            {
                type: "switch",
                key: "switch.ngclick",
                templateOptions: {
                    name: "ngClick",
                    description: "Switch with ngClick defined and if first switch is on click on this switch give you alert",
                    ngTrueValue: "'yes'",
                    ngFalseValue: "'no'",
                    ngClick: (value, options, scope) => {
                        if (scope.model) {
                            if (scope.model.switch) {
                                if (scope.model.switch.classname == "yes")
                                    alert(scope.model.switch.classname);
                            }
                        }
                    }
                }
            },
            {
                type: "switch",
                key: "switch.clickdisable",
                defaultValue: false,
                templateOptions: {
                    name: "Click to disable below",
                    description: "Click to disable switch below",
                    ngTrueValue: true,
                    ngFalseValue: false
                }
            },
            {
                type: "switch",
                key: "switch.ngchange",
                templateOptions: {
                    description: "Switch with ngChange defined",
                    name: "ngChange",
                    ngTrueValue: "'yes'",
                    ngFalseValue: "'no'",
                    ngChange: (value, options, scope) => {
                        if (scope.model) {
                            if (scope.model.switch) {
                                if (scope.model.switch.classname == "yes")
                                    alert(scope.model.switch.classname);
                            }
                        }
                    }
                },
                expressionProperties: {
                    "templateOptions.ngDisabled": "model.switch.clickdisable"
                }
            }
        ]
    }
];
