export default (providers) => {
    return {
        //header: "Menu",
        name: "clients",
        options: [
            {icon: "zmdi zmdi-plus", name: "Create", ngclick: (ev) => {
                providers.TodoFormService.mdDialog(ev);
            }, select: false},
            {icon: "zmdi zmdi-home", name: "Dashboard",uisref:"app.clients.dashboard"},
            {icon: "zmdi zmdi-calendar", name: "Calendar",uisref:"app.clients.calendar", hidden: true},
            {icon: "zmdi zmdi-check", name: "To do",uisref:"app.clients.todo"},
            {icon: "zmdi zmdi-settings", name: "Settings",uisref:"app.clients.settings"},
            {icon: "", name: "Users",uisref:"app.clients.users", hidden: true}
        ]
    };
};
