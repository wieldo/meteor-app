import customKeys from "./../../client/helpers/custom-keys";
import customTemplate from "./../../client/custom-template";
export default [
    {
        title: "Label, Name with placeholder and secondary placeholder",
        description: "Chips with label and placeholders",
        form: "placeholder",
        model: {},
        js: JSON.stringify([
            {
                type: "chips",
                key: "chips.label",
                defaultValue: [
                    "First","Second","Third"
                ],
                name: "mycustomname",
                templateOptions: {
                    label: "Label is defined",
                    placeholder: "Enter a tag (placeholder)"
                }
            },
            {
                type: "chips",
                key: "chips.nameplaceholder",
                defaultValue: [
                    "First","Second","Third"
                ],
                templateOptions: {
                    description: "Chips with custom name and placeholder defined",
                    placeholder: "Enter a tag (placeholder)"
                }
            },
            {
                type: "chips",
                key: "chips.secondary",
                defaultValue: [
                    "My","secondary","placeholder"
                ],
                noFormControl: true,
                templateOptions: {
                    description: "Chips with secondary placeholder",
                    secondaryPlaceholder: "Enter a tag (secondaryPlaceholder)"
                }
            },
            {
                type: "chips",
                key: "chips.both",
                defaultValue: [
                    "My","new","car"
                ],
                templateOptions: {
                    description: "Chips with secondary placeholder and placeholder defined, remove all chips to see placeholder",
                    placeholder: "Add your first tag (placeholder)",
                    secondaryPlaceholder: "Enter a tag (secondaryPlaceholder)"
                }
            }
        ],undefined, 4),
        field: [
            {
                type: "chips",
                key: "chips.label",
                defaultValue: [
                    "First","Second","Third"
                ],
                name: "mycustomname",
                templateOptions: {
                    label: "Label is defined",
                    placeholder: "Enter a tag (placeholder)"
                }
            },
            {
                type: "chips",
                key: "chips.nameplaceholder",
                defaultValue: [
                    "First","Second","Third"
                ],
                templateOptions: {
                    description: "Chips with custom name and placeholder defined",
                    placeholder: "Enter a tag (placeholder)"
                }
            },
            {
                type: "chips",
                key: "chips.secondary",
                defaultValue: [
                    "My","secondary","placeholder"
                ],
                noFormControl: true,
                templateOptions: {
                    description: "Chips with secondary placeholder",
                    secondaryPlaceholder: "Enter a tag (secondaryPlaceholder)"
                }
            },
            {
                type: "chips",
                key: "chips.both",
                defaultValue: [
                    "My","new","car"
                ],
                templateOptions: {
                    description: "Chips with secondary placeholder and placeholder defined, remove all chips to see placeholder",
                    placeholder: "Add your first tag (placeholder)",
                    secondaryPlaceholder: "Enter a tag (secondaryPlaceholder)"
                }
            }
        ]
    },

    {
        title: "className, ngClass, ngClick",
        description: "Chips with style manipulate",
        form: "class",
        model: {},
        js: JSON.stringify([
            {
                type: "chips",
                key: "chips.classname",
                defaultValue: [
                    "First","Second","Third"
                ],
                templateOptions: {
                    description: "Chips with className 'md-primary'",
                    className: "md-primary",
                    placeholder: "Enter a tag (placeholder)"
                }
            },
            {
                type: "chips",
                key: "chips.ngclass",
                defaultValue: [
                    "First","Second","Third"
                ],
                templateOptions: {
                    description: "Chips with ngClass function return 'md-primary'",
                    ngClass: (value, options, scope) => {
                        return "md-primary";
                    },
                    placeholder: "Enter a tag (placeholder)"
                }
            },
            {
                type: "chips",
                key: "chips.ngclick",
                defaultValue: [
                    "First","Second","Third"
                ],
                templateOptions: {
                    description: "Chips with ngClick function defined",
                    placeholder: "Enter a tag (placeholder)",
                    ngClick: (value, options, scope) => {
                        alert("click");
                        console.log(value);
                        console.log(options);
                        console.log(scope);
                    }
                }
            }
        ],undefined, 4),
        field: [
            {
                type: "chips",
                key: "chips.classname",
                defaultValue: [
                    "First","Second","Third"
                ],
                templateOptions: {
                    description: "Chips with className 'md-primary'",
                    className: "md-primary",
                    placeholder: "Enter a tag (placeholder)"
                }
            },
            {
                type: "chips",
                key: "chips.ngclass",
                defaultValue: [
                    "First","Second","Third"
                ],
                templateOptions: {
                    description: "Chips with ngClass function return 'md-primary'",
                    ngClass: (value, options, scope) => {
                        return "md-primary";
                    },
                    placeholder: "Enter a tag (placeholder)"
                }
            },
            {
                type: "chips",
                key: "chips.ngclick",
                defaultValue: [
                    "First","Second","Third"
                ],
                templateOptions: {
                    description: "Chips with ngClick function defined",
                    placeholder: "Enter a tag (placeholder)",
                    ngClick: (value, options, scope) => {
                        alert("click");
                        console.log(value);
                        console.log(options);
                        console.log(scope);
                    }
                }
            }
        ]
    },

    {
        title: "deleteButtonLabel, deleteHint, readonly",
        description: "Chips with some button hints",
        form: "delete",
        model: {},
        js: JSON.stringify([
            {
                type: "chips",
                key: "chips.deleteButtonLabel",
                defaultValue: [
                    "My","new","car"
                ],
                templateOptions: {
                    description: "deleteButtonLabel is set to 'Remove me please !'",
                    deleteButtonLabel: "Remove me please !"
                }
            },
            {
                type: "chips",
                key: "chips.deletehint",
                defaultValue: [
                    "My","new","car"
                ],
                templateOptions: {
                    description: "deleteHint is set to 'Remove me please !'",
                    deleteHint: "Remove me please !"
                }
            },
            {
                type: "chips",
                key: "chipsreadonly",
                defaultValue: [
                    "i","am","readonly"
                ],
                templateOptions: {
                    description: "Chips are readonly",
                    readonly: true
                }
            }
        ], undefined, 4),
        field: [
            {
                type: "chips",
                key: "chips.deleteButtonLabel",
                defaultValue: [
                    "My","new","car"
                ],
                templateOptions: {
                    description: "deleteButtonLabel is set to 'Remove me please !'",
                    deleteButtonLabel: "Remove me please !"
                }
            },
            {
                type: "chips",
                key: "chips.deletehint",
                defaultValue: [
                    "My","new","car"
                ],
                templateOptions: {
                    description: "deleteHint is set to 'Remove me please !'",
                    deleteHint: "Remove me please !"
                }
            },
            {
                type: "chips",
                key: "chipsreadonly",
                defaultValue: [
                    "i","am","readonly"
                ],
                templateOptions: {
                    description: "Chips are readonly",
                    readonly: true
                }
            }
        ]
    },
    {
        title: "mdOnAdd, mdOnSelect, mdOnRemove",
        description: "Chips with on actions",
        form: "mdOn",
        model: {},
        js: JSON.stringify([
            {
                type: "chips",
                key: "chips.mdonadd",
                defaultValue: [
                    "Md","On","Add"
                ],
                templateOptions: {
                    description: "On Add - check your console",
                    mdOnAdd: (value, options, scope) => {
                        console.log("md-on-add");
                        console.log(value);
                        console.log(options);
                        console.log(scope);
                        return false;
                    }
                }
            },
            {
                type: "chips",
                key: "chips.mdonselect",
                defaultValue: [
                    "Md","On","Select"
                ],
                templateOptions: {
                    description: "On select - check your console",
                    mdOnSelect: (value, options, scope) => {
                        console.log("md-on-select");
                        console.log(value);
                        console.log(options);
                        console.log(scope);
                        return true;
                    }
                }
            },
            {
                type: "chips",
                key: "chips.mdonremove",
                defaultValue: [
                    "Md","On","Remove"
                ],
                templateOptions: {
                    description: "On remove - check your console",
                    mdOnRemove: (value, options, scope) => {
                        console.log('md-on-remove');
                        console.log(value);
                        console.log(options);
                        console.log(scope);
                        return false;
                    }
                }
            }
        ], undefined, 4),
        field: [
            {
                type: "chips",
                key: "chips.mdonadd",
                defaultValue: [
                    "Md","On","Add"
                ],
                templateOptions: {
                    description: "On Add - check your console",
                    mdOnAdd: (value, options, scope) => {
                        console.log("md-on-add");
                        console.log(value);
                        console.log(options);
                        console.log(scope);
                        return false;
                    }
                }
            },
            {
                type: "chips",
                key: "chips.mdonselect",
                defaultValue: [
                    "Md","On","Select"
                ],
                templateOptions: {
                    description: "On select - check your console",
                    mdOnSelect: (value, options, scope) => {
                        console.log("md-on-select");
                        console.log(value);
                        console.log(options);
                        console.log(scope);
                        return true;
                    }
                }
            },
            {
                type: "chips",
                key: "chips.mdonremove",
                defaultValue: [
                    "Md","On","Remove"
                ],
                templateOptions: {
                    description: "On remove - check your console",
                    mdOnRemove: (value, options, scope) => {
                        console.log('md-on-remove');
                        console.log(value);
                        console.log(options);
                        console.log(scope);
                        return false;
                    }
                }
            }
        ]
    },
    {
        title: "mdSeparatorKeys",
        description: "Chips with seprator keys defined",
        form: "separator",
        model: {},
        js: JSON.stringify([
            {
                type: "chips",
                key: "chips.mdseparatorkeys",
                defaultValue: [
                    "Md","Separator","Keys"
                ],
                templateOptions: {
                    description: "Separator keys is set to ';' or ','",
                    mdSeparatorKeys: customKeys()
                }
            }
        ],undefined, 4),
        field: [
            {
                type: "chips",
                key: "chips.mdseparatorkeys",
                defaultValue: [
                    "Md","Separator","Keys"
                ],
                templateOptions: {
                    description: "Separator keys is set to ';' or ','",
                    mdSeparatorKeys: customKeys()
                }
            }
        ]
    },
    {
        title: "Custom template",
        description: "Chips with custom template",
        form: "customtemplate",
        model: {},
        js: JSON.stringify([
            {
                key: "chips.customtemplate",
                defaultValue: [
                    "my", "custom", "template"
                ],
                templateUrl: customTemplate,
                templateOptions: {
                    ariaLabeL: "myCustomTemplate"
                }
            },
            {
                type: "chips",
                key: "chips.prewrapper",
                defaultValue: [
                    "my", "pre", "wrapper"
                ],
                templateManipulators: {
                    preWrapper: [
                        function(template, options, scope) {
                            // this is called for this field only before wrappers and other manipulators or wrappers
                            template = "<md-chips ng-model='model[options.key]' md-theme='{{to.theme}}'><md-chip-template><span><strong>{{$chip}}</strong></span></md-chip-template></md-chips><p class='description'></p>";
                            return template;
                        }
                    ]
                },
                templateOptions: {
                    description: "prewrapper to manipulate chips"
                }
            }
        ], undefined, 4),
        field: [
            {
                key: "chips.customtemplate",
                defaultValue: [
                    "my", "custom", "template"
                ],
                templateUrl: customTemplate,
                templateOptions: {
                    ariaLabeL: "myCustomTemplate"
                }
            },
            {
                type: "chips",
                key: "chips.prewrapper",
                defaultValue: [
                    "my", "pre", "wrapper"
                ],
                templateManipulators: {
                    preWrapper: [
                        function(template, options, scope) {
                            // this is called for this field only before wrappers and other manipulators or wrappers
                            template = "<md-chips ng-model='model[options.key]' md-theme='{{to.theme}}'><md-chip-template><span><strong>{{$chip}}</strong></span></md-chip-template></md-chips><p class='description'></p>";
                            return template;
                        }
                    ]
                },
                templateOptions: {
                    description: "prewrapper to manipulate chips"
                }
            }
        ]
    }
    /*,
    {
        title: "mdTransformChip",
        description: "",
        transformChip: (chip) => {
            console.log("transformChip");
            if (angular.isObject(chip)) {
                return chip;
            }
            // Otherwise, create a new one
            return { name: chip, type: 'new' };
        },
        field: [
            {
                type: "chips",
                key: "chips.mdtransformchip",
                defaultValue: [
                    "Md","Transform","Chip"
                ],
                templateOptions: {
                    description: "Chips transform",
                    mdTransformChip: "element.transformChip($chip)"
                }
            }
        ]
    },
    */
];
