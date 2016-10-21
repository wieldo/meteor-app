export default [
    {
        type: "select",
        key: "completed",
        templateOptions: {
            label: "Completed",
            options: [
                {name: "Ascending", value: 1},
                {name: "Descending", value: -1}
            ]
        }
    },
    {
        type: "select",
        key: "createdAt",
        templateOptions: {
            label: "Created at",
            options: [
                {name: "Ascending", value: 1},
                {name: "Descending", value: -1}
            ]
        }
    },
    {
        type: "select",
        key: "name",
        templateOptions: {
            label: "Name",
            options: [
                {name: "Ascending", value: 1},
                {name: "Descending", value: -1}
            ]
        }
    },
    {
        type: "select",
        key: "removed",
        templateOptions: {
            label: "Removed",
            options: [
                {name: "Ascending", value: 1},
                {name: "Descending", value: -1}
            ]
        }
    }
];
