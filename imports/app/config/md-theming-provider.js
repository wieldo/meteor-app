export default ($mdThemingProvider) => {
    $mdThemingProvider.theme("meteorApp");
    $mdThemingProvider.definePalette("wieldoPaletteName", {
        "50": "ffebee", // #ffebee
        "100": "ffcdd2", // #ffcdd2
        "200": "ef9a9a", // #ef9a9a
        "300": "e57373", // #e57373
        "400": "ef5350", // #ef5350
        "500": "6B63AC", // rgb(107,99,172)
        "600": "6B63AC", // rgb(107,99,172)
        "700": "d32f2f", // #d32f2f
        "800": "c62828", // #c62828
        "900": "b71c1c", // #b71c1c
        "A100": "ff8a80", // #ff8a80
        "A200": "ff5252", // #ff5252
        "A400": "ff1744", // #ff1744
        "A700": "d50000", // #d50000
        "contrastDefaultColor": "light",    // whether, by default, text (contrast)
                                            // on this palette should be dark or light
        "contrastDarkColors": ["50", "100", "200", "300", "400", "A100"], //hues which contrast should be "dark" by default
        "contrastLightColors": undefined    // could also specify this if default was "dark"
    });
    $mdThemingProvider.theme("meteor").primaryPalette("wieldoPaletteName");
    $mdThemingProvider.setDefaultTheme("default");
};
