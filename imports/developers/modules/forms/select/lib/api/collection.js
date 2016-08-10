export default [
    {
        title: "Default, theme and ariaLabel",
        description: "Select with typical options",
        js: JSON.stringify([
            {
                type: "select",
                key: "select.default",
                templateOptions: {
                    ariaLabel: "my aria label",
                    options: [
                        {name: "First", ngValue: "First value"},
                        {name: "Second", ngValue: "Second value"},
                        {name: "Third", ngValue: "Third value"}
                    ]
                }
            },
            {
                type: "select",
                key: "select.theme",
                templateOptions: {
                    theme: "meteor",
                    description: "Select with theme 'meteor'",
                    options: [
                        {name: "First", ngValue: "First value"},
                        {name: "Second", ngValue: "Second value"},
                        {name: "Third", ngValue: "Third value"}
                    ]
                }
            },
            {
                type: "select",
                key: "select.theme",
                templateOptions: {
                    mdTheme: "meteor",
                    description: "Select with mdTheme 'meteor'",
                    options: [
                        {name: "First", ngValue: "First value"},
                        {name: "Second", ngValue: "Second value"},
                        {name: "Third", ngValue: "Third value"}
                    ]
                }
            },
            {
                type: "select",
                key: "select.arialabel",
                templateOptions: {
                    ariaLabel: "Aria label when no label or placeholder",
                    description: "Select with ariaLabel defined",
                    options: [
                        {name: "First", ngValue: "First value"},
                        {name: "Second", ngValue: "Second value"},
                        {name: "Third", ngValue: "Third value"}
                    ]
                }
            }
        ],undefined, 4),
        field: [
            {
                type: "select",
                key: "select.default",
                templateOptions: {
                    ariaLabel: "my aria label",
                    options: [
                        {name: "First", ngValue: "First value"},
                        {name: "Second", ngValue: "Second value"},
                        {name: "Third", ngValue: "Third value"}
                    ]
                }
            },
            {
                type: "select",
                key: "select.theme",
                templateOptions: {
                    theme: "meteor",
                    description: "Select with theme 'meteor'",
                    options: [
                        {name: "First", ngValue: "First value"},
                        {name: "Second", ngValue: "Second value"},
                        {name: "Third", ngValue: "Third value"}
                    ]
                }
            },
            {
                type: "select",
                key: "select.theme",
                templateOptions: {
                    mdTheme: "meteor",
                    description: "Select with mdTheme 'meteor'",
                    options: [
                        {name: "First", ngValue: "First value"},
                        {name: "Second", ngValue: "Second value"},
                        {name: "Third", ngValue: "Third value"}
                    ]
                }
            },
            {
                type: "select",
                key: "select.arialabel",
                templateOptions: {
                    ariaLabel: "Aria label when no label or placeholder",
                    description: "Select with ariaLabel defined",
                    options: [
                        {name: "First", ngValue: "First value"},
                        {name: "Second", ngValue: "Second value"},
                        {name: "Third", ngValue: "Third value"}
                    ]
                }
            }
        ]
    },
    {
        title: "Placeholder, label and both",
        js: JSON.stringify([
            {
                type: "select",
                key: "select.placeholder",
                templateOptions: {
                    placeholder: "Select with placeholder",
                    description: "Select with defined placeholder",
                    options: [
                        {name: "First", ngValue: "First value"},
                        {name: "Second", ngValue: "Second value"},
                        {name: "Third", ngValue: "Third value"}
                    ]
                }
            },
            {
                type: "select",
                key: "select.label",
                templateOptions: {
                    label: "Select with label",
                    description: "Select label is defined",
                    options: [
                        {name: "First", ngValue: "First value"},
                        {name: "Second", ngValue: "Second value"},
                        {name: "Third", ngValue: "Third value"}
                    ]
                }
            },
            {
                type: "select",
                key: "select.placeholderlabel",
                templateOptions: {
                    label: "Birthday",
                    placeholder: "I am placeholder",
                    description: "See a difference between label and placeholder",
                    options: [
                        {name: "First", ngValue: "First value"},
                        {name: "Second", ngValue: "Second value"},
                        {name: "Third", ngValue: "Third value"}
                    ]
                }
            }
        ], undefined, 4),
        field: [
            {
                type: "select",
                key: "select.placeholder",
                templateOptions: {
                    placeholder: "Select with placeholder",
                    description: "Select with defined placeholder",
                    options: [
                        {name: "First", ngValue: "First value"},
                        {name: "Second", ngValue: "Second value"},
                        {name: "Third", ngValue: "Third value"}
                    ]
                }
            },
            {
                type: "select",
                key: "select.label",
                templateOptions: {
                    label: "Select with label",
                    description: "Select label is defined",
                    options: [
                        {name: "First", ngValue: "First value"},
                        {name: "Second", ngValue: "Second value"},
                        {name: "Third", ngValue: "Third value"}
                    ]
                }
            },
            {
                type: "select",
                key: "select.placeholderlabel",
                templateOptions: {
                    label: "Birthday",
                    placeholder: "I am placeholder",
                    description: "See a difference between label and placeholder",
                    options: [
                        {name: "First", ngValue: "First value"},
                        {name: "Second", ngValue: "Second value"},
                        {name: "Third", ngValue: "Third value"}
                    ]
                }
            }
        ]
    },
    {
        title: "Required, ngRequired and disabled",
        form: "form_required",
        model: {},
        js: JSON.stringify([
            {
                type: "select",
                key: "select.required",
                templateOptions: {
                    required: true,
                    label: "Required",
                    description: "Select with attribute required true",
                    options: [
                        {name: "First", ngValue: "First value"},
                        {name: "Second", ngValue: "Second value"},
                        {name: "Third", ngValue: "Third value"}
                    ]
                }
            },
            {
                type: "select",
                key: "select.ngrequired",
                templateOptions: {
                    ngRequired: true,
                    label: "ngRequired",
                    description: "Select with attribute ngRequired true",
                    options: [
                        {name: "First", ngValue: "First value"},
                        {name: "Second", ngValue: "Second value"},
                        {name: "Third", ngValue: "Third value"}
                    ]
                }
            },
            {
                type: "select",
                key: "select.disabled",
                templateOptions: {
                    disabled: true,
                    label: "Disabled",
                    description: "Select is disabled",
                    options: [
                        {name: "First", ngValue: "First value"},
                        {name: "Second", ngValue: "Second value"},
                        {name: "Third", ngValue: "Third value"}
                    ]
                }
            },
            {
                type: "select",
                key: "select.option.disabled",
                templateOptions: {
                    label: "Disabled",
                    description: "Select first option is disabled and third ngDisabled",
                    options: [
                        {name: "First", ngValue: "First value", disabled: true},
                        {name: "Second", ngValue: "Second value"},
                        {name: "Third", ngValue: "Third value", ngDisabled: true},
                        {name: "Fourth", ngValue: "Fourth value"}
                    ]
                }
            },
            {
                type: "select",
                key: "select.option.group.disabled",
                templateOptions: {
                    label: "Group option disabled",
                    description: "Select first group option is disabled and second group third ngDisabled",
                    options: [
                        {
                            label: "Group 1",
                            options: [
                                {name: "First", ngValue: "Group 1 First value", disabled: true},
                                {name: "Second", ngValue: "Group 1 Second value"},
                                {name: "Third", ngValue: "Group 1 Third value"}
                            ]
                        },
                        {
                            label: "Group 2",
                            options: [
                                {name: "First", ngValue: "Group 2 First value"},
                                {name: "Second", ngValue: "Group 2 Second value"},
                                {name: "Third", ngValue: "Group 2 Third value", ngDisabled: true}
                            ]
                        }

                    ]
                }
            }
        ], undefined, 4),
        field: [
            {
                type: "select",
                key: "select.required",
                templateOptions: {
                    required: true,
                    label: "Required",
                    description: "Select with attribute required true",
                    options: [
                        {name: "First", ngValue: "First value"},
                        {name: "Second", ngValue: "Second value"},
                        {name: "Third", ngValue: "Third value"}
                    ]
                }
            },
            {
                type: "select",
                key: "select.ngrequired",
                templateOptions: {
                    ngRequired: true,
                    label: "ngRequired",
                    description: "Select with attribute ngRequired true",
                    options: [
                        {name: "First", ngValue: "First value"},
                        {name: "Second", ngValue: "Second value"},
                        {name: "Third", ngValue: "Third value"}
                    ]
                }
            },
            {
                type: "select",
                key: "select.disabled",
                templateOptions: {
                    disabled: true,
                    label: "Disabled",
                    description: "Select is disabled",
                    options: [
                        {name: "First", ngValue: "First value"},
                        {name: "Second", ngValue: "Second value"},
                        {name: "Third", ngValue: "Third value"}
                    ]
                }
            },
            {
                type: "select",
                key: "select.option.disabled",
                templateOptions: {
                    label: "Disabled",
                    description: "Select first option is disabled and third ngDisabled",
                    options: [
                        {name: "First", ngValue: "First value", disabled: true},
                        {name: "Second", ngValue: "Second value"},
                        {name: "Third", ngValue: "Third value", ngDisabled: true},
                        {name: "Fourth", ngValue: "Fourth value"}
                    ]
                }
            },
            {
                type: "select",
                key: "select.option.group.disabled",
                templateOptions: {
                    label: "Group option disabled",
                    description: "Select first group option is disabled and second group third ngDisabled",
                    options: [
                        {
                            label: "Group 1",
                            options: [
                                {name: "First", ngValue: "Group 1 First value", disabled: true},
                                {name: "Second", ngValue: "Group 1 Second value"},
                                {name: "Third", ngValue: "Group 1 Third value"}
                            ]
                        },
                        {
                            label: "Group 2",
                            options: [
                                {name: "First", ngValue: "Group 2 First value"},
                                {name: "Second", ngValue: "Group 2 Second value"},
                                {name: "Third", ngValue: "Group 2 Third value", ngDisabled: true}
                            ]
                        }

                    ]
                }
            }
        ]
    },
    {
        title: "Groups, groups className, option className, option ngClick ngClass",
        description: "Select with options in groups",
        form: "form_groups",
        model: {},
        js: JSON.stringify([
            {
                type: "select",
                key: "select.groups",
                templateOptions: {
                    label: "Groups",
                    description: "Select with options in groups",
                    options: [
                        {
                            label: "Group 1",
                            options: [
                                {name: "First", ngValue: "Group 1 First value"},
                                {name: "Second", ngValue: "Group 1 Second value"},
                                {name: "Third", ngValue: "Group 1 Third value"}
                            ]
                        },
                        {
                            label: "Group 2",
                            options: [
                                {name: "First", ngValue: "Group 2 First value"},
                                {name: "Second", ngValue: "Group 2 Second value"},
                                {name: "Third", ngValue: "Group 2 Third value"}
                            ]
                        }

                    ]
                }
            },
            {
                type: "select",
                key: "select.groups.classname",
                templateOptions: {
                    label: "Groups className",
                    description: "Select with options in groups and group 1 className 'md-primary'",
                    options: [
                        {
                            className: "md-primary",
                            label: "Group 1",
                            options: [
                                {name: "First", ngValue: "Group 1 First value"},
                                {name: "Second", ngValue: "Group 1 Second value"},
                                {name: "Third", ngValue: "Group 1 Third value"}
                            ]
                        },
                        {
                            label: "Group 2",
                            options: [
                                {name: "First", ngValue: "Group 2 First value"},
                                {name: "Second", ngValue: "Group 2 Second value"},
                                {name: "Third", ngValue: "Group 2 Third value"}
                            ]
                        }

                    ]
                }
            },
            {
                type: "select",
                key: "select.groups.option.classname",
                templateOptions: {
                    label: "Groups option className",
                    description: "Select with options in groups and group 1 first option className 'md-primary'",
                    options: [
                        {
                            label: "Group 1",
                            options: [
                                {name: "className='md-primary'", ngValue: "Group 1 First value", className: "md-primary"},
                                {name: "Second", ngValue: "Group 1 Second value"},
                                {name: "Third", ngValue: "Group 1 Third value"}
                            ]
                        },
                        {
                            label: "Group 2",
                            options: [
                                {name: "First", ngValue: "Group 2 First value"},
                                {name: "Second", ngValue: "Group 2 Second value"},
                                {name: "Third", ngValue: "Group 2 Third value"}
                            ]
                        }

                    ]
                }
            },
            {
                type: "select",
                key: "select.groups.option.ngClick",
                templateOptions: {
                    label: "Groups option ngClick",
                    description: "Select with options in groups and group 1 first option ngClick defined",
                    options: [
                        {
                            label: "Group 1",
                            options: [
                                {name: "ngClick => console.log()", ngValue: "Group 1 First value", ngClick: (options, model) => {
                                    console.log(options);
                                    console.log(model);
                                }},
                                {name: "Second", ngValue: "Group 1 Second value"},
                                {name: "Third", ngValue: "Group 1 Third value"}
                            ]
                        },
                        {
                            label: "Group 2",
                            options: [
                                {name: "First", ngValue: "Group 2 First value"},
                                {name: "Second", ngValue: "Group 2 Second value"},
                                {name: "Third", ngValue: "Group 2 Third value"}
                            ]
                        }

                    ]
                }
            },
            {
                type: "select",
                key: "select.groups.option.ngClass",
                templateOptions: {
                    label: "Groups option ngClass",
                    description: "Select with options in groups and group 1 first option ngClass defined",
                    options: [
                        {
                            label: "Group 1",
                            options: [
                                {name: "ngClass 'md-primary'", ngValue: "Group 1 First value", ngClass: (options) => {
                                    return "md-primary";
                                }},
                                {name: "Second", ngValue: "Group 1 Second value"},
                                {name: "Third", ngValue: "Group 1 Third value"}
                            ]
                        },
                        {
                            label: "Group 2",
                            options: [
                                {name: "First", ngValue: "Group 2 First value"},
                                {name: "Second", ngValue: "Group 2 Second value"},
                                {name: "Third", ngValue: "Group 2 Third value"}
                            ]
                        },
                        {name: "First", ngValue: "Group 2 First value"},
                        {name: "Second", ngValue: "Group 2 Second value"},
                        {name: "Third", ngValue: "Group 2 Third value"}
                    ]
                }
            }
        ], undefined, 4),
        field: [
            {
                type: "select",
                key: "select.groups",
                templateOptions: {
                    label: "Groups",
                    description: "Select with options in groups",
                    options: [
                        {
                            label: "Group 1",
                            options: [
                                {name: "First", ngValue: "Group 1 First value"},
                                {name: "Second", ngValue: "Group 1 Second value"},
                                {name: "Third", ngValue: "Group 1 Third value"}
                            ]
                        },
                        {
                            label: "Group 2",
                            options: [
                                {name: "First", ngValue: "Group 2 First value"},
                                {name: "Second", ngValue: "Group 2 Second value"},
                                {name: "Third", ngValue: "Group 2 Third value"}
                            ]
                        }

                    ]
                }
            },
            {
                type: "select",
                key: "select.groups.classname",
                templateOptions: {
                    label: "Groups className",
                    description: "Select with options in groups and group 1 className 'md-primary'",
                    options: [
                        {
                            className: "md-primary",
                            label: "Group 1",
                            options: [
                                {name: "First", ngValue: "Group 1 First value"},
                                {name: "Second", ngValue: "Group 1 Second value"},
                                {name: "Third", ngValue: "Group 1 Third value"}
                            ]
                        },
                        {
                            label: "Group 2",
                            options: [
                                {name: "First", ngValue: "Group 2 First value"},
                                {name: "Second", ngValue: "Group 2 Second value"},
                                {name: "Third", ngValue: "Group 2 Third value"}
                            ]
                        }

                    ]
                }
            },
            {
                type: "select",
                key: "select.groups.option.classname",
                templateOptions: {
                    label: "Groups option className",
                    description: "Select with options in groups and group 1 first option className 'md-primary'",
                    options: [
                        {
                            label: "Group 1",
                            options: [
                                {name: "className='md-primary'", ngValue: "Group 1 First value", className: "md-primary"},
                                {name: "Second", ngValue: "Group 1 Second value"},
                                {name: "Third", ngValue: "Group 1 Third value"}
                            ]
                        },
                        {
                            label: "Group 2",
                            options: [
                                {name: "First", ngValue: "Group 2 First value"},
                                {name: "Second", ngValue: "Group 2 Second value"},
                                {name: "Third", ngValue: "Group 2 Third value"}
                            ]
                        }

                    ]
                }
            },
            {
                type: "select",
                key: "select.groups.option.ngClick",
                templateOptions: {
                    label: "Groups option ngClick",
                    description: "Select with options in groups and group 1 first option ngClick defined",
                    options: [
                        {
                            label: "Group 1",
                            options: [
                                {name: "ngClick => console.log()", ngValue: "Group 1 First value", ngClick: (options, model) => {
                                    console.log(options);
                                    console.log(model);
                                }},
                                {name: "Second", ngValue: "Group 1 Second value"},
                                {name: "Third", ngValue: "Group 1 Third value"}
                            ]
                        },
                        {
                            label: "Group 2",
                            options: [
                                {name: "First", ngValue: "Group 2 First value"},
                                {name: "Second", ngValue: "Group 2 Second value"},
                                {name: "Third", ngValue: "Group 2 Third value"}
                            ]
                        }

                    ]
                }
            },
            {
                type: "select",
                key: "select.groups.option.ngClass",
                templateOptions: {
                    label: "Groups option ngClass",
                    description: "Select with options in groups and group 1 first option ngClass defined",
                    options: [
                        {
                            label: "Group 1",
                            options: [
                                {name: "ngClass 'md-primary'", ngValue: "Group 1 First value", ngClass: (options) => {
                                    return "md-primary";
                                }},
                                {name: "Second", ngValue: "Group 1 Second value"},
                                {name: "Third", ngValue: "Group 1 Third value"}
                            ]
                        },
                        {
                            label: "Group 2",
                            options: [
                                {name: "First", ngValue: "Group 2 First value"},
                                {name: "Second", ngValue: "Group 2 Second value"},
                                {name: "Third", ngValue: "Group 2 Third value"}
                            ]
                        },
                        {name: "First", ngValue: "Group 2 First value"},
                        {name: "Second", ngValue: "Group 2 Second value"},
                        {name: "Third", ngValue: "Group 2 Third value"}
                    ]
                }
            }
        ]
    },
    {
        title: "md-on-open, md-on-close",
        js: JSON.stringify([
            {
                type: "select",
                key: "select.mdonopen",
                templateOptions: {
                    required: true,
                    label: "Birthday",
                    placeholder: "I am placeholder",
                    description: "Alert on open",
                    options: [
                        {
                            label: "Group 1",
                            options: [
                                {name: "First", ngValue: "First value"},
                                {name: "Second", ngValue: "Second value"},
                                {name: "Third", ngValue: "Third value"}
                            ]
                        }
                    ],
                    mdOnOpen: () => {
                        alert("i am opened");
                    }
                }
            },
            {
                type: "select",
                key: "select.mdonclose",
                templateOptions: {
                    required: true,
                    label: "Birthday",
                    placeholder: "I am placeholder",
                    description: "Alert after close",
                    options: [
                        {
                            label: "Group 1",
                            options: [
                                {name: "First", ngValue: "First value"},
                                {name: "Second", ngValue: "Second value"},
                                {name: "Third", ngValue: "Third value"}
                            ]
                        }
                    ],
                    mdOnClose: () => {
                        alert("i am closed");
                    }
                }
            }
        ], undefined, 4),
        field: [
            {
                type: "select",
                key: "select.mdonopen",
                templateOptions: {
                    required: true,
                    label: "Birthday",
                    placeholder: "I am placeholder",
                    description: "Alert on open",
                    options: [
                        {
                            label: "Group 1",
                            options: [
                                {name: "First", ngValue: "First value"},
                                {name: "Second", ngValue: "Second value"},
                                {name: "Third", ngValue: "Third value"}
                            ]
                        }
                    ],
                    mdOnOpen: () => {
                        alert("i am opened");
                    }
                }
            },
            {
                type: "select",
                key: "select.mdonclose",
                templateOptions: {
                    required: true,
                    label: "Birthday",
                    placeholder: "I am placeholder",
                    description: "Alert after close",
                    options: [
                        {
                            label: "Group 1",
                            options: [
                                {name: "First", ngValue: "First value"},
                                {name: "Second", ngValue: "Second value"},
                                {name: "Third", ngValue: "Third value"}
                            ]
                        }
                    ],
                    mdOnClose: () => {
                        alert("i am closed");
                    }
                }
            }
        ]
    },
    {
        title: "mdContainerClass",
        description: "With container class '.meteorApp'",
        js: JSON.stringify([
            {
                type: "select",
                key: "select.mdcontainerclass",
                templateOptions: {
                    required: true,
                    label: "Birthday",
                    placeholder: "I am placeholder",
                    mdContainerClass: "meteorApp",
                    options: [
                        {
                            label: "Group 1",
                            options: [
                                {name: "First", ngValue: "First value"},
                                {name: "Second", ngValue: "Second value"},
                                {name: "Third", ngValue: "Third value"}
                            ]
                        }
                    ]
                }
            }
        ], undefined, 4),
        field: [
            {
                type: "select",
                key: "select.mdcontainerclass",
                templateOptions: {
                    required: true,
                    label: "Birthday",
                    placeholder: "I am placeholder",
                    mdContainerClass: "meteorApp",
                    options: [
                        {
                            label: "Group 1",
                            options: [
                                {name: "First", ngValue: "First value"},
                                {name: "Second", ngValue: "Second value"},
                                {name: "Third", ngValue: "Third value"}
                            ]
                        }
                    ]
                }
            }
        ]
    }
];
