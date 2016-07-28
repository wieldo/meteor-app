import {ModuleName} from "/imports/startup/client/";
import "./service";
import {init,SetModule,Directive,LocalInjectables} from 'angular2-now';

init();
SetModule(ModuleName);
@Directive({
    selector: 'link',
    providers: [
        '$scope',
        '$attrs',
        '$element',
        'NavigationService',
        'SidenavService'
    ],
    scope: true,
    restrict: 'EA'
    //replace: true,
    //transclude: true,
    //template: '<a ng-transclude ng-click="onHandleClick()"></a>',
})
@LocalInjectables
export class LinkDirective {
    constructor(){
        this.$scope.click = () => {
            this.NavigationService.Select(this.$attrs.link);
            this.SidenavService.Init().left.close();
        };
        //console.log(this.$scope);
    }
}
