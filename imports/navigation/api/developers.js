export default {
    header: "Menu",
    name: "developers",
    options: [
        {name: "Dashboard",uisref:"app.developers.dashboard"},
        {name: "Crypto",uisref:"app.developers.crypto"},
        {name: "Forms",uisref:"app.developers.forms"},
        {name: "Translates",uisref:"app.developers.translates", ngDisabled: true},
        {name: "UI Elements",uisref:"app.developers.uielements", hidden: true}
    ]
};
