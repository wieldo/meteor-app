import templateUrl from "./view";
import {ModuleName} from "/imports/modules/forms/lib/client/module";
import elements from "/imports/modules/forms/datepicker/lib/api/collection";
import submit from "/imports/modules/forms/lib/client/helpers/on-submit";
import {init,SetModule,State,Component,LocalInjectables} from 'angular2-now';

init();
SetModule(ModuleName);
@State({
    name: 'app.forms.datepicker',
    url: '/datepicker'
})
@Component({
    selector: 'meteor-forms-datepicker',
    templateUrl: templateUrl
})
@LocalInjectables
export class FormsDatepickerComponent {
    constructor(){
        this.elements = elements;
    }
    onSubmit = (name) => {
        submit(name, this.elements);
    }
}
