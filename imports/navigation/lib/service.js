import {ModuleName} from "/imports/startup/client/";
import {init,SetModule,Service,LocalInjectables} from "angular2-now";

init();
export var $Service = {
    Name: "NavigationService"
};
SetModule(ModuleName);
@Service({
    name: $Service.Name,
    providers: [
        "store"
    ]
})
@LocalInjectables
export class NavigationService {
    constructor(store){
        this.navigation = {
            selected: ""
        };
        this.store = store;

        if (this.store.get('selected'))
            this.navigation.selected = this.store.get('selected');
    }

    Select = (name) => {
        if (!name)
            throw(`name is not defined`);

        this.navigation.selected = name;
        this.store.set('selected',name);
    }

    Init = () => {
        return this.navigation;
    }
}
