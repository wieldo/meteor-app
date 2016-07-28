import 'angular-meteor';
import 'angular-storage';
import { init, SetModule } from 'angular2-now';

init();
export const ModuleName = 'Core';
SetModule(ModuleName,[
    'angular-meteor',
    'angular-storage'
]);
