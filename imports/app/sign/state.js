import templateUrl from "./view";
import statusTemplateUrl from "./status";
import featuresTemplateUrl from "./features";
export default ($stateProvider) => {
    $stateProvider.state("app.sign", {
        abstract: true,
        views: {
            "": {
                templateUrl: templateUrl
            },
            "status@app.sign": {
                templateUrl: statusTemplateUrl
            },
            "features@app.sign": {
                templateUrl: featuresTemplateUrl
            }
        }
    });
};
