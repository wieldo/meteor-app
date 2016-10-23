import toggleAll from "./../client/helpers/toggle-all";
import isChecked from "./../client/helpers/is-checked";
import jsfy from "jsfy";
import replacer from "./../../client/helpers/replacer";
export default [
    {
        title: "Theme and aria-label",
        description: "Checkbox with different theme and ariaLabel",
        form: "form_1",
        model: {},
        js: jsfy([
            {
                type: "checkbox",
                key: "mdcheckbox.theme",
                templateOptions: {
                    theme: "meteor",
                    description: "Checkbox with theme 'meteor'"
                }
            },
            {
                type: "checkbox",
                key: "mdcheckbox.mdtheme",
                templateOptions: {
                    mdTheme: "meteor",
                    description: "Checkbox with theme 'meteor'"
                }
            },
            {
                type: "checkbox",
                key: "mdcheckbox.arialabel",
                templateOptions: {
                    ariaLabel: "aria-label is defined",
                    description: "Checkbox with aria-label defined"
                }
            }
        ], 4, "\n"),
        field: [
            {
                className: "display-flex",
                fieldGroup: [
                    {
                        type: "checkbox",
                        key: "mdcheckbox.theme",
                        name: "mybox",
                        templateOptions: {
                            theme: "meteor",
                            description: "Checkbox with theme 'meteor'"
                        }
                    },
                    {
                        type: "checkbox",
                        key: "mdcheckbox.mdtheme",
                        templateOptions: {
                            mdTheme: "meteor",
                            description: "Checkbox with theme 'meteor'"
                        }
                    },
                    {
                        type: "checkbox",
                        key: "mdcheckbox.arialabel",
                        templateOptions: {
                            ariaLabel: "aria-label is defined",
                            description: "Checkbox with aria-label defined"
                        }
                    }
                ]
            }
        ]
    },
    {
        title: "Label, name",
        description: "Checkbox with name, label or both",
        form: "form_label",
        model: {},
        js: jsfy([
            {
                type: "checkbox",
                key: "mdcheckbox.label",
                templateOptions: {
                    label: "My defined label",
                    description: "Checkbox with label defined"
                }
            },
            {
                type: "checkbox",
                key: "mdcheckbox.name",
                templateOptions: {
                    name: "Name is defined",
                    description: "Checkbox with name defined"
                }
            },
            {
                type: "checkbox",
                key: "mdcheckbox.namelabel",
                templateOptions: {
                    name: "Name",
                    label: "Label",
                    description: "Checkbox with name and label defined"
                }
            }
        ], 4, "\n"),
        field: [
            {
                type: "checkbox",
                key: "mdcheckbox.label",
                templateOptions: {
                    label: "My defined label",
                    description: "Checkbox with label defined"
                }
            },
            {
                type: "checkbox",
                key: "mdcheckbox.name",
                templateOptions: {
                    name: "Name is defined",
                    description: "Checkbox with name defined"
                }
            },
            {
                type: "checkbox",
                key: "mdcheckbox.namelabel",
                templateOptions: {
                    name: "Name",
                    label: "Label",
                    description: "Checkbox with name and label defined"
                }
            }
        ]
    },


    {
        title: "ngTrueValue, ngFalseValue and both",
        description: "Checkbox with defined true value",
        form: "form_2",
        model: {},
        js: jsfy([
            {
                type: "checkbox",
                key: "mdcheckbox.ngtruevalue",
                templateOptions: {
                    name: `My true value is 'true title'`,
                    ngTrueValue: "'true title'"
                }
            },
            {
                type: "checkbox",
                key: "mdcheckbox.ngfalsevalue",
                templateOptions: {
                    name: `My false value is 'false title'`,
                    ngFalseValue: "'false title'"
                }
            },
            {
                type: "checkbox",
                key: "mdcheckbox.ngtruefalsevalue",
                templateOptions: {
                    name: "ngTrueValue and ngFalseValue is set, click submit to check",
                    description: "Checkbox with defined true and false value",
                    ngTrueValue: "'true title'",
                    ngFalseValue: "'false title'"
                }
            }
        ], 4, "\n"),
        field: [
            {
                type: "checkbox",
                key: "mdcheckbox.ngtruevalue",
                templateOptions: {
                    name: `My true value is 'true title'`,
                    ngTrueValue: "'true title'"
                }
            },
            {
                type: "checkbox",
                key: "mdcheckbox.ngfalsevalue",
                templateOptions: {
                    name: `My false value is 'false title'`,
                    ngFalseValue: "'false title'"
                }
            },
            {
                type: "checkbox",
                key: "mdcheckbox.ngtruefalsevalue",
                templateOptions: {
                    name: "ngTrueValue and ngFalseValue is set, click submit to check",
                    description: "Checkbox with defined true and false value",
                    ngTrueValue: "'true title'",
                    ngFalseValue: "'false title'"
                }
            }
        ]
    },
    {
        title: "mdNoInk",
        description: "Checkbox without ink on click",
        form: "form_3",
        model: {},
        js: jsfy([
            {
                type: "checkbox",
                key: "mdcheckbox.mdnoink",
                templateOptions: {
                    name: "There is no ink no me",
                    mdNoInk: true
                }
            }
        ], 4, "\n"),
        field: [
            {
                type: "checkbox",
                key: "mdcheckbox[6]",
                templateOptions: {
                    name: "There is no ink no me",
                    mdNoInk: true
                }
            }
        ]
    },
    {
        title: "ngChange",
        description: "Checkbox that set name to 'You changed me' on change",
        js: jsfy([
            {
                type: "input",
                key: "textclass",
                templateOptions: {
                    type: "text",
                    name: "Write 'md-primary' to checkboxs below",
                    placeholder: "Write 'md-primary' to checkboxs below"
                }
            },
            {
                type: "checkbox",
                key: "mdcheckbox[7]",
                templateOptions: {
                    name: "Please, click on me and change",
                    ngChange: "options.templateOptions['name'] = (options.templateOptions['name'] == 'You changed me') ? 'Please, click on me and change' : 'You changed me' "
                }
            },
            {
                type: "checkbox",
                key: "mdcheckbox.changeclass",
                templateOptions: {
                    name: "Write 'md-primary' to add class to me",
                    ngChange: "options.templateOptions.className = model.textclass "
                },
                expressionProperties: {
                    "templateOptions.name": "to.className.indexOf('md-primary') > -1 ? 'Yes, its work, i am on md-primary' : 'Write md-primary to add class to me'"
                }
            }
        ], 4, "\n"),
        field: [
            {
                type: "input",
                key: "textclass",
                templateOptions: {
                    type: "text",
                    name: "Write 'md-primary' to checkboxs below",
                    placeholder: "Write 'md-primary' to checkboxs below"
                }
            },
            {
                type: "checkbox",
                key: "mdcheckbox[7]",
                templateOptions: {
                    name: "Please, click on me and change",
                    ngChange: "options.templateOptions['name'] = (options.templateOptions['name'] == 'You changed me') ? 'Please, click on me and change' : 'You changed me' "
                }
            },
            {
                type: "checkbox",
                key: "mdcheckbox.changeclass",
                templateOptions: {
                    name: "Write 'md-primary' to add class to me",
                    ngChange: "options.templateOptions.className = model.textclass "
                },
                expressionProperties: {
                    "templateOptions.name": "to.className.indexOf('md-primary') > -1 ? 'Yes, its work, i am on md-primary' : 'Write md-primary to add class to me'"
                }
            }
        ]
    },
    {
        title: "className, ngChecked",
        description: "Checkbox with primary material design class",
        form: "form_4",
        model: {},
        js: jsfy([
            {
                type: "checkbox",
                key: "mdcheckbox.classname",
                templateOptions: {
                    name: "This checkbox contains md-primary class",
                    className: "md-primary"
                }
            },
            {
                type: "checkbox",
                key: "mdcheckbox.depends",
                templateOptions: {
                    description: "Checkbox with ngChecked",
                    name: "This checkbox checks checkbox below"
                }
            },
            {
                type: "checkbox",
                key: "mdcheckbox.ngchecked",
                templateOptions: {
                    name: "This checkbox is checked, depends on checkbox.depends",
                    ngChecked: (value, options, scope) => {
                        if (scope.model.mdcheckbox) {
                            if (scope.model.mdcheckbox.depends) {
                                return scope.model.mdcheckbox.depends;
                            }
                            else {
                                return false;
                            }
                        }
                    }
                }
            }
        ], 4, "\n").replace(replacer, ""),
        field: [
            {
                type: "checkbox",
                key: "mdcheckbox.classname",
                templateOptions: {
                    name: "This checkbox contains md-primary class",
                    className: "md-primary"
                }
            },
            {
                type: "checkbox",
                key: "mdcheckbox.depends",
                templateOptions: {
                    description: "Checkbox with ngChecked",
                    name: "This checkbox checks checkbox below"
                }
            },
            {
                type: "checkbox",
                key: "mdcheckbox.ngchecked",
                templateOptions: {
                    name: "This checkbox is checked, depends on checkbox.depends",
                    ngChecked: (value, options, scope) => {
                        if (scope.model.mdcheckbox) {
                            if (scope.model.mdcheckbox.depends) {
                                return scope.model.mdcheckbox.depends;
                            }
                            else {
                                return false;
                            }
                        }
                    }
                }
            }
        ]
    },
    {
        title: "disabled, ngDisabled",
        description: "Checkboxes with disabled attribute",
        form: "form_5",
        model: {},
        js: jsfy([
            {
                type: "checkbox",
                key: "mdcheckbox.disabled",
                templateOptions: {
                    name: "This checkbox is disabled by option disabled: true",
                    disabled: true
                }
            },
            {
                type: "checkbox",
                key: "mdcheckbox.enable",
                templateOptions: {
                    name: "This checkbox enable the one below"
                }
            },
            {
                type: "checkbox",
                key: "mdcheckbox.ngdisabled",
                templateOptions: {
                    ngDisabled: true,
                    name: "This checkbox is disabled by default, but you can enable it by click on checkbox above"
                },
                expressionProperties: {
                    "templateOptions.ngDisabled": "!model.mdcheckbox.enable"
                }
            },
            {
                type: "input",
                key: "text",
                templateOptions: {
                    type: "text",
                    name: "Write to unlock checkbox below",
                    placeholder: "Write to unlock checkbox below"
                }
            },
            {
                type: "checkbox",
                key: "mdcheckbox.ngdisabled_text",
                templateOptions: {
                    description: "Checkbox that is disabled depends on input text above",
                    name: "This checkbox is disabled depends on input above"
                },
                expressionProperties: {
                    "templateOptions.ngDisabled": "!model.text"
                }
            }
        ],4, "\n"),
        field: [
            {
                type: "checkbox",
                key: "mdcheckbox.disabled",
                templateOptions: {
                    name: "This checkbox is disabled by option disabled: true",
                    disabled: true
                }
            },
            {
                type: "checkbox",
                key: "mdcheckbox.enable",
                templateOptions: {
                    name: "This checkbox enable the one below"
                }
            },
            {
                type: "checkbox",
                key: "mdcheckbox.ngdisabled",
                templateOptions: {
                    ngDisabled: true,
                    name: "This checkbox is disabled by default, but you can enable it by click on checkbox above"
                },
                expressionProperties: {
                    "templateOptions.ngDisabled": "!model.mdcheckbox.enable"
                }
            },
            {
                type: "input",
                key: "text",
                templateOptions: {
                    type: "text",
                    name: "Write to unlock checkbox below",
                    placeholder: "Write to unlock checkbox below"
                }
            },
            {
                type: "checkbox",
                key: "mdcheckbox.ngdisabled_text",
                templateOptions: {
                    description: "Checkbox that is disabled depends on input text above",
                    name: "This checkbox is disabled depends on input above"
                },
                expressionProperties: {
                    "templateOptions.ngDisabled": "!model.text"
                }
            }
        ]
    },
    {
        title: "ngClass, ngClick",
        description: "Checkbox that class depends",
        form: "form_ngclassexpression",
        model: {},
        js: jsfy([
            {
                type: "input",
                key: "textngclass",
                templateOptions: {
                    type: "text",
                    name: "Write to unlock add md-primary class to checkbox below",
                    placeholder: "Write to unlock add md-primary class to checkbox below"
                }
            },
            {
                type: "checkbox",
                key: "mdcheckbox.ngclass",
                templateOptions: {
                    name: "Add md-primary class to me",
                    ngClass: (value, options, scope) => {
                        return scope.model.textngclass;
                    }
                }
            },
            {
                type: "checkbox",
                key: "mdcheckbox.ngclick",
                templateOptions: {
                    name: "Click to see what this checkbox think about it",
                    ngClick: (value, options, scope) => {
                        alert("Please, do it again, i love it.");
                        return;
                    }
                }
            }
        ],4 , "\n").replace(replacer, ""),
        field: [
            {
                type: "input",
                key: "textngclass",
                templateOptions: {
                    type: "text",
                    name: "Write to unlock add md-primary class to checkbox below",
                    placeholder: "Write to unlock add md-primary class to checkbox below"
                }
            },
            {
                type: "checkbox",
                key: "mdcheckbox.ngclass",
                templateOptions: {
                    name: "Add md-primary class to me",
                    ngClass: (value, options, scope) => {
                        return scope.model.textngclass;
                    }
                }
            },
            {
                type: "checkbox",
                key: "mdcheckbox.ngclick",
                templateOptions: {
                    name: "Click to see what this checkbox think about it",
                    ngClick: (value, options, scope) => {
                        alert("Please, do it again, i love it.");
                        return;
                    }
                }
            }
        ]
    },
    {
        title: "name expression",
        description: "Change checkbox name by input",
        form: "form_name_expression",
        model: {},
        js: jsfy([
            {
                type: "input",
                key: "textname",
                templateOptions: {
                    type: "text",
                    name: "Write to add name to checkbox below",
                    placeholder: "Write to add name to checkbox below"
                }
            },
            {
                type: "checkbox",
                key: "mdcheckbox.name",
                templateOptions: {
                    name: "No name"
                },
                expressionProperties: {
                    "templateOptions.name": "model.textname"
                }
            }
        ], 4, "\n"),
        field: [
            {
                type: "input",
                key: "textname",
                templateOptions: {
                    type: "text",
                    name: "Write to add name to checkbox below",
                    placeholder: "Write to add name to checkbox below"
                }
            },
            {
                type: "checkbox",
                key: "mdcheckbox.name",
                templateOptions: {
                    name: "No name"
                },
                expressionProperties: {
                    "templateOptions.name": "model.textname"
                }
            }
        ]
    },
    {
        title: "Groups",
        description: "Checkboxes in groups",
        form: "form_groups",
        model: {},
        js: jsfy([
            {
                type: "checkbox",
                key: "mdcheckbox.selectgroup",
                templateOptions: {
                    name: "Select all below",
                    ngChecked: (value, options, scope) => {
                        return isChecked(scope);
                    },
                    ngClick: (value, options, scope) => {
                        toggleAll(scope);
                    }
                },
                expressionProperties: {
                    "templateOptions.name": "model.mdcheckbox.selectgroup === true ? 'Deselect all below' : 'Select all below'"
                }
            },
            {
                type: "checkbox",
                key: "mdcheckbox.group.first",
                templateOptions: {
                    name: "checkbox - first"
                }
            },
            {
                type: "checkbox",
                key: "mdcheckbox.group.second",
                templateOptions: {
                    name: "checkbox - second"
                }
            },
            {
                type: "checkbox",
                key: "mdcheckbox.group.third",
                templateOptions: {
                    name: "checkbox - third"
                }
            },
            {
                type: "checkbox",
                key: "mdcheckbox.group.fourth",
                templateOptions: {
                    name: "checkbox - fourth"
                }
            }
        ], 4, "\n").replace(replacer, ""),
        field: [
            {
                type: "checkbox",
                key: "mdcheckbox.selectgroup",
                templateOptions: {
                    name: "Select all below",
                    ngChecked: (value, options, scope) => {
                        return isChecked(scope);
                    },
                    ngClick: (value, options, scope) => {
                        toggleAll(scope);
                    }
                },
                expressionProperties: {
                    "templateOptions.name": "model.mdcheckbox.selectgroup === true ? 'Deselect all below' : 'Select all below'"
                }
            },
            {
                type: "checkbox",
                key: "mdcheckbox.group.first",
                templateOptions: {
                    name: "checkbox - first"
                }
            },
            {
                type: "checkbox",
                key: "mdcheckbox.group.second",
                templateOptions: {
                    name: "checkbox - second"
                }
            },
            {
                type: "checkbox",
                key: "mdcheckbox.group.third",
                templateOptions: {
                    name: "checkbox - third"
                }
            },
            {
                type: "checkbox",
                key: "mdcheckbox.group.fourth",
                templateOptions: {
                    name: "checkbox - fourth"
                }
            }
        ]
    }
];
