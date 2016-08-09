
import {
    init,
    SetModule,
    Service,
    LocalInjectables
} from "angular2-now";
init();
export var $Service = {
    ModuleName: "Sidenav",
    Name: "SidenavService"
};
SetModule($Service.ModuleName,[]);
@Service({
    name: $Service.Name,
    providers: [
        "$mdSidenav"
    ]
})
@LocalInjectables
export class SidenavService {
    constructor($mdSidenav){
        this.sidenav = {
            left: {
                open: () => {
                    $mdSidenav("left").open();
                },
                close: () => {
                    $mdSidenav("left").close();
                }
            },
            right: {
                open: () => {
                    $mdSidenav("right").open();
                },
                close: () => {
                    $mdSidenav("right").close();
                }
            }
        };
    }
    Init = () => {
        return this.sidenav;
    }
}
