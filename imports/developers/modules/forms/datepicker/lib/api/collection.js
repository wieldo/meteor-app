import date from "./date";
export default [
    {
        title: "Default, theme and required",
        description: "Just typical datepicker with theme and with required option",
        js: JSON.stringify([
            {
                type: "datepicker",
                key: "date",
                templateOptions: {
                    placeholder: "Enter date"
                }
            },
            {
                type: "datepicker",
                key: "datetheme",
                templateOptions: {
                    theme: "meteorApp",
                    mdPlaceholder: "Theme",
                    description: "Datepicker with theme 'meteorApp'"
                }
            },
            {
                type: "datepicker",
                key: "datemdtheme",
                templateOptions: {
                    mdTheme: "meteorApp",
                    mdPlaceholder: "mdTheme",
                    description: "Datepicker with mdTheme 'meteorApp'"
                }
            },
            {
                type: "datepicker",
                key: "daterequired",
                templateOptions: {
                    mdPlaceholder: "Required",
                    required: true,
                    description: "Datepicker has required attribute to true"
                }
            },
            {
                type: "datepicker",
                key: "datengrequired",
                templateOptions: {
                    mdPlaceholder: "ngRequired",
                    ngRequired: true,
                    description: "Datepicker has ngRequired attribute to true"
                }
            }
        ], undefined, 4),
        field: [
            {
                type: "datepicker",
                key: "date",
                templateOptions: {
                    mdPlaceholder: "Enter date"
                }
            },
            {
                type: "datepicker",
                key: "datetheme",
                templateOptions: {
                    theme: "meteorApp",
                    mdPlaceholder: "Theme",
                    description: "Datepicker with theme 'meteorApp'"
                }
            },
            {
                type: "datepicker",
                key: "datemdtheme",
                templateOptions: {
                    mdTheme: "meteorApp",
                    mdPlaceholder: "mdTheme",
                    description: "Datepicker with mdTheme 'meteorApp'"
                }
            },
            {
                type: "datepicker",
                key: "daterequired",
                templateOptions: {
                    mdPlaceholder: "Required",
                    required: true,
                    description: "Datepicker has required attribute to true"
                }
            },
            {
                type: "datepicker",
                key: "datengrequired",
                templateOptions: {
                    mdPlaceholder: "ngRequired",
                    ngRequired: true,
                    description: "Datepicker has ngRequired attribute to true"
                }
            }
        ]
    },
    {
        title: "className, ngClass, ngClick, ngDisabled, disabled",
        description: "Datepicker with placeholder",
        js: JSON.stringify([
            {
                type: "datepicker",
                key: "dateclassname",
                templateOptions: {
                    description: "It have own class 'md-primary'",
                    className: "md-primary",
                    placeholder: "className"
                }
            },
            {
                type: "datepicker",
                key: "datengclass",
                templateOptions: {
                    description: "Datepicker with ngClass function return 'ngClass'",
                    mdPlaceholder: "ngClass",
                    ngClass: (value, options, scope) => {
                        return 'ngClass';
                    }
                }
            },
            {
                type: "datepicker",
                key: "datengclick",
                templateOptions: {
                    description: "Datepicker with ngClick function with alert",
                    mdPlaceholder: "ngClick",
                    ngClick: (value, options, scope) => {
                        alert('ngClick');
                    }
                }
            },
            {
                type: "datepicker",
                key: "datengdisabled",
                templateOptions: {
                    description: "Datepicker with ngDisabled true",
                    mdPlaceholder: "ngDisabled",
                    ngDisabled: true
                }
            },
            {
                type: "datepicker",
                key: "datedisabled",
                templateOptions: {
                    description: "Datepicker with disabled true",
                    mdPlaceholder: "disabled",
                    disabled: true
                }
            }
        ], undefined, 4),
        field: [
            {
                type: "datepicker",
                key: "dateclassname",
                templateOptions: {
                    description: "It have own class 'className'",
                    className: "className",
                    placeholder: "className"
                }
            },
            {
                type: "datepicker",
                key: "datengclass",
                templateOptions: {
                    description: "Datepicker with ngClass function return 'ngClass'",
                    mdPlaceholder: "ngClass",
                    ngClass: (value, options, scope) => {
                        return 'ngClass';
                    }
                }
            },
            {
                type: "datepicker",
                key: "datengclick",
                templateOptions: {
                    description: "Datepicker with ngClick function with alert",
                    mdPlaceholder: "ngClick",
                    ngClick: (value, options, scope) => {
                        alert('ngClick');
                    }
                }
            },
            {
                type: "datepicker",
                key: "datengdisabled",
                templateOptions: {
                    description: "Datepicker with ngDisabled true",
                    mdPlaceholder: "ngDisabled",
                    ngDisabled: true
                }
            },
            {
                type: "datepicker",
                key: "datedisabled",
                templateOptions: {
                    description: "Datepicker with disabled true",
                    mdPlaceholder: "disabled",
                    disabled: true
                }
            }
        ]
    },
    {
        title: "Hide expression, ngChange",
        description: "Datepicker that reveal after model",
        js: JSON.stringify([
            {
                type: "datepicker",
                 key: "datefill",
                templateOptions: {
                    description: "Set date to reveal hidden datepicker below",
                    placeholder: "Enter date"
                }
            },
            {
                type: "datepicker",
                key: "datengchange",
                templateOptions: {
                    description: "Datepicker with hideExpression ngChange function defined",
                    mdPlaceholder: "ngChange",
                    ngChange: (value, options, scope) => {
                        alert("You changed me");
                    }
                },
                hideExpression: "!model.datefill"
            },
            {
                type: "datepicker",
                key: "datearialabel",
                templateOptions: {
                    description: "Datepicker with hideExpression and ariaLabel defined",
                    mdPlaceholder: "ariaLabel",
                    ariaLabel: "This is aria-label"
                },
                hideExpression: "!model.datefill"
            }
        ], undefined, 4),
        field: [
            {
                type: "datepicker",
                 key: "datefill",
                templateOptions: {
                    description: "Set date to reveal hidden datepicker below",
                    placeholder: "Enter date"
                }
            },
            {
                type: "datepicker",
                key: "datengchange",
                templateOptions: {
                    description: "Datepicker with hideExpression ngChange function defined",
                    mdPlaceholder: "ngChange",
                    ngChange: (value, options, scope) => {
                        alert("You changed me");
                    }
                },
                hideExpression: "!model.datefill"
            },
            {
                type: "datepicker",
                key: "datearialabel",
                templateOptions: {
                    description: "Datepicker with hideExpression and ariaLabel defined",
                    mdPlaceholder: "ariaLabel",
                    ariaLabel: "This is aria-label"
                },
                hideExpression: "!model.datefill"
            }
        ]
    },
    {
        title: "Placeholder and Label",
        description: "Datepicker with placeholder",
        js: JSON.stringify([
            {
                type: "datepicker",
                key: "dateplaceholder",
                templateOptions: {
                    description: "Datepicker with placeholder defined",
                    placeholder: "My placeholder"
                }
            },
            {
                type: "datepicker",
                key: "datemdplaceholder",
                templateOptions: {
                    description: "Datepicker with md-placeholder",
                    mdPlaceholder: "mdPlaceholder"
                }
            },
            {
                type: "datepicker",
                key: "datelabel",
                templateOptions: {
                    description: "Datepicker with Label",
                    label: "Label"
                }
            }
        ], undefined, 4),
        field: [
            {
                type: "datepicker",
                key: "dateplaceholder",
                templateOptions: {
                    description: "Datepicker with placeholder defined",
                    placeholder: "My placeholder"
                }
            },
            {
                type: "datepicker",
                key: "datemdplaceholder",
                templateOptions: {
                    description: "Datepicker with md-placeholder",
                    mdPlaceholder: "mdPlaceholder"
                }
            },
            {
                type: "datepicker",
                key: "datelabel",
                templateOptions: {
                    description: "Datepicker with Label",
                    label: "Label"
                }
            }
        ]
    },
    {
        title: "Min, Max and both",
        description: "With minimum, maximum and both date",
        js: JSON.stringify([
            {
                type: "datepicker",
                key: "datemin",
                templateOptions: {
                    description: "Description with minimum date defined",
                    mdPlaceholder: "Min date",
                    mdMinDate: date.minDate
                }
            },
            {
                type: "datepicker",
                key: "datemax",
                templateOptions: {
                    description: "Description with maximum date defined",
                    mdPlaceholder: "Max date",
                    mdMaxDate: date.maxDate
                }
            },
            {
                type: "datepicker",
                key: "dateminmax",
                templateOptions: {
                    description: "Description with minimum and maximum date defined",
                    mdPlaceholder: "Min and max",
                    mdMinDate: date.minDate,
                    mdMaxDate: date.maxDate
                }
            }
        ], undefined, 4),
        field: [
            {
                type: "datepicker",
                key: "datemin",
                templateOptions: {
                    description: "Description with minimum date defined",
                    mdPlaceholder: "Min date",
                    mdMinDate: date.minDate
                }
            },
            {
                type: "datepicker",
                key: "datemax",
                templateOptions: {
                    description: "Description with maximum date defined",
                    mdPlaceholder: "Max date",
                    mdMaxDate: date.maxDate
                }
            },
            {
                type: "datepicker",
                key: "dateminmax",
                templateOptions: {
                    description: "Description with minimum and maximum date defined",
                    mdPlaceholder: "Min and max",
                    mdMinDate: date.minDate,
                    mdMaxDate: date.maxDate
                }
            }
        ]
    },
    {
        title: "mdDateFilter: Weekends",
        description: "Only weekends within given range are selectable",
        js: JSON.stringify([
            {
                type: "datepicker",
                key: "datefilter",
                templateOptions: {
                    description: "Datepicker with filter only weekends",
                    required: true,
                    mdPlaceholder: "Weekends required",
                    mdDateFilter: date.onlyWeekendsPredicate
                },
                validation: {
                    messages: {
                        filtered: ($viewValue, $modelValue, scope) => {
                            return "Only weekends allowed by this field";
                        }
                    }
                }
            }
        ], undefined, 4),
        field: [
            {
                type: "datepicker",
                key: "datefilter",
                templateOptions: {
                    description: "Datepicker with filter only weekends",
                    required: true,
                    mdPlaceholder: "Weekends required",
                    mdDateFilter: date.onlyWeekendsPredicate
                },
                validation: {
                    messages: {
                        filtered: ($viewValue, $modelValue, scope) => {
                            return "Only weekends allowed by this field";
                        }
                    }
                }
            }
        ]
    }
];
