import {name} from './module';
import {init,SetModule,Service,Inject} from "angular2-now";

init();
SetModule(name);
@Service({
    name: 'UsePromise'
})
@Inject(['$q'])
export class UsePromise {
    constructor($q) {
        this.$q = $q;
    }

    on(obj, func, ...args) {
        if (angular.isFunction(obj)) {
            return this.onMethod(obj, func);
        }

        const promise = this._resolve(args);

        obj[func].apply(obj, args);

        return promise;
    }

    onMethod(func, arg) {
        const args = [arg];
        const promise = this._resolve(args);

        func(args[0], args[1]);

        return promise;
    }

    _resolve(args) {
        const deferred = this.$q.defer();

        args.push(function resolver(err, data) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(data);
            }
        });

        return deferred.promise;
    }
}
