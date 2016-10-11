//import {todoCollection} from "./../../api/collection";
import "./style";
import "./../../form/api/service";
import templateUrl from "./view";
import {ReactiveVar} from "meteor/reactive-var";
import {
    moduleName as Todo
} from "./../../lib/module";
import {
    init,
    SetModule,
    Component,
    LocalInjectables,
    MeteorReactive
} from "angular2-now";
export var component = {
    name: "TodoListComponent",
    selector: "todo-list"
};
init();
SetModule(Todo);
@Component({
    selector: component.selector,
    templateUrl: templateUrl,
    providers: [
        "$scope",
        "$reactive",
        "TodoFormService",
        "TodoCollectionService"
    ],
    bind: {
        "getCreatedBy": "=createdBy",
        "getFind": "=find",
        "getSort": "=sort"
    }
})
@LocalInjectables
@MeteorReactive
export class TodoListComponent {

    // debug
    debug = false;

    // reactive var to find in collection specified fields
    findReactive = ReactiveVar({}, (oldValue, newValue) => {
        if (this.debug === true) {
            console.group(`${component.name}.findReactive = ReactiveVar({}, oldValue, newValue)`);
            console.log(`@param oldValue: `, oldValue);
            console.log(`@param newValue: `, newValue);

        }
        let isEqual = _.isEqual(oldValue, newValue);
        if (this.debug === true) {
            console.log(`isEqual: `, isEqual);
            console.groupEnd();
        }
        return isEqual;
    });

    constructor() {
        if (this.debug === true) {
            console.info(`----------------------------------------`);
            console.info(`Debug ${component.name} has been started`);
            console.info(`----------------------------------------`);
        }
        this.watch();
        this.helpers();
        this.subscribes();
    }

    /**
     * watch variables
     * @return {object} this context
     */
    watch = () => {
        if (this.debug === true) {
            console.group(`${component.name}.watch()`);
            console.log(`this.getFindWatch()`);
            console.log(`this.getCreatedByWatch()`);
            console.log(`this.getSortByWatch()`);
            console.groupEnd();
        }
        this.getFindWatch()
            .getCreatedByWatch()
            .getSortByWatch();

        return this;
    }

    /**
     * getSortByWatch watch getSort variable
     * @return {object} this context
     */
    getSortByWatch = () => {
        this.$scope.$watch("vm.getSort", (value) => {
            let setSort = {
                sort: value
            };

            this.sort = setSort;
        }, true);

        return this;
    }

    /**
     * get directive variable createdBy
     * @return this context
     */
    getCreatedByWatch = () => {
        if (this.debug === true) {
            console.debug(`${component.name}.getCreatedByWatch()`);
        }
        this.$scope.$watch("vm.getCreatedBy", (value) => {
            let clonedValue = _.clone(value);
            clonedValue = this.deleteFalseValues(clonedValue);

            let setCreatedBy = [];
            let findReactive = _.clone(this.findReactive.get());

            if (this.debug === true) {
                console.group(`${component.name}.$scope.$watch("vm.getCreatedBy")`);
                console.log(`clonedValue: `, clonedValue);
                console.log(`findReactive: `, findReactive);
            }

            _.each(clonedValue, (value, key) => {
                setCreatedBy.push(key);
            });

            if (this.debug === true) {
                console.log(`setCreatedBy: `, setCreatedBy);
            }
            if (setCreatedBy.length > 0) {
                findReactive["createdBy.id"] = {$in: setCreatedBy};
            }else
                delete findReactive["createdBy.id"];

            if (this.debug === true) {
                console.log(`findReactive: `, findReactive);
                console.groupEnd();
            }

            this.findReactive.set(findReactive);
        }, true);

        return this;
    }

    /**
     * getFindWatch watch getFind variable
     * @return {object} this context
     */
    getFindWatch = () => {
        if (this.debug === true) {
            console.debug(`${component.name}.getFindWatch()`);
        }
        this.$scope.$watch("vm.getFind", (find) => {
            let clonedFind = _.clone(find);
            let clonedFindReactive = _.clone(this.findReactive.get());

            if (this.debug === true) {
                console.group(`${component.name}.$scope.$watch("vm.getFind")`);
                console.log(`clonedFind: `, clonedFind);
            }

            // Insert keys with value from clonedFind
            _.each(clonedFind, (value, key) => {
                clonedFindReactive[key] = value;
            });
            // Remove keys with false value
            clonedFindReactive = this.deleteFalseValues(clonedFindReactive);

            if (this.debug === true) {
                console.log(`_findReactive: `, clonedFindReactive);
                console.groupEnd();
            }

            // Set reactive variable
            this.findReactive.set(clonedFindReactive);
        }, true);

        return this;
    }

    /**
     * deleteFalseValues delete false keys
     * @param  {json} value json object to check
     * @return {json} value filtered value
     */
    deleteFalseValues = (value) => {
        if (this.debug === true) {
            console.group(`${component.name}.deleteFalseValues(value)`);
            console.log(`@param value:`, value);
            console.groupEnd();
        }
        if (value !== undefined) {
            _.each(value, (val, key) => {
                if (val === false) {
                    delete value[key];
                }
            });
        }

        return value;
    }

    /**
     * helpers reactively assign todoCollection to $scope
     * @return
     */
    helpers = () => {
        if (this.debug === true) {
            console.debug(`${component.name}.helpers()`);
        }
        this.$scope.helpers({
            todoCollection: () => {
                let result = this.TodoCollectionService.get(this.findReactive.get(), this.getReactively("sort"));
                if (this.debug === true) {
                    console.group(`this.$scope.helpers()`);
                    console.group(`this.TodoCollectionService.get(this.findReactive.get(), this.getReactively("sort"))`);
                    console.log(`@param this.findReactive.get(): `, this.findReactive.get());
                    console.log(`@param this.getReactively("sort"): `, this.getReactively("sort"));
                    console.log(`@return result: `, result);
                    console.groupEnd();
                    console.groupEnd();
                }
                return result;
            }
        });
    }

    /**
     * Subscribes
     * @return {object} this context
     */
    subscribes = () => {
        if (Meteor.isClient) {
            if (this.debug === true) {
                console.debug(`${component.name}.subscribes()`);
            }
            this.subscribe("todo", () => [{}]);
        }
        return this;
    }

}
