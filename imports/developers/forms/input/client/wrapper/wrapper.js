import templateUrl from "./wrapper.html";
export default (formlyConfigProvider) => {
    formlyConfigProvider.setWrapper({
        name: "customTemplateWrapper",
        templateUrl: templateUrl
    });
};
