export default [
    {
        type: "checkbox-md-list",
        key: "filterStatus",
        templateOptions: {
            name: "Completed",
            className: "md-primary",
            mdListItem: [
                {name: "Completed", modelName: "completed"},
                {name: "Removed", modelName: "removed"}
            ]
        }
    }
];
