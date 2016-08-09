export default [
    {
        title: "Custom select day, month, year",
        description: "Custom selectors to create birthday",
        form: "custom_select",
        model: {}, 
        js: JSON.stringify([
            {
                type: "select-day",
                key: "select.day",
                templateOptions: {
                    ariaLabel: "Day",
                    description: "Select with day numbers."
                }
            },
            {
                type: "select-month",
                key: "select.month",
                templateOptions: {
                    ariaLabel: "Month",
                    description: "Select with month english names."
                }
            },
            {
                type: "select-year",
                key: "select.year",
                templateOptions: {
                    ariaLabel: "Year",
                    description: "Select with year numbers."
                }
            }
        ],undefined, 4),
        field: [
            {
                type: "select-day",
                key: "select.day",
                templateOptions: {
                    ariaLabel: "Day",
                    description: "Select with day numbers."
                }
            },
            {
                type: "select-month",
                key: "select.month",
                templateOptions: {
                    ariaLabel: "Month",
                    description: "Select with month english names."
                }
            },
            {
                type: "select-year",
                key: "select.year",
                templateOptions: {
                    ariaLabel: "Year",
                    description: "Select with year numbers."
                }
            }
        ]
    }
];
