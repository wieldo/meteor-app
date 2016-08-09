export default {
    header: "Menu",
    name: "clients",
    options: [
        {name: "Dashboard",uisref:"app.clients.dashboard"},
        {name: "Calendar",uisref:"app.clients.calendar", ngDisabled: true},
        {name: "To do",uisref:"app.clients.todo"},
        {name: "Settings",uisref:"app.clients.settings"},
        {name: "Users",uisref:"app.clients.users", ngDisabled: true}
    ]
};
