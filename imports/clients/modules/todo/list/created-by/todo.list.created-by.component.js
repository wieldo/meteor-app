import templateUrl from "./todo.list.created-by.view";
import { service as TodoCollectionService} from "./../../todo.service";
import { moduleName } from "./../../todo.module";
import { init, SetModule, Component, LocalInjectables } from "angular2-now";
init();
SetModule(moduleName);
@Component({
    selector: "todo-list-created-by",
    templateUrl: templateUrl,
    bind: {
        model: "=",
        collection: "=?"
    },
    providers: [
        "$scope",
        TodoCollectionService.name
    ]
})
@LocalInjectables
export class TodoListCreatedByComponent {

    fields = [];
    debug = false;

    constructor() {
        this.$scope.$watch("vm.TodoCollectionService.result.all", (collection) => {
            this.set(collection);
        });
    }

    /**
     * Set createdBy filter for mongo query using TodoCollectionService
     * @param  {json} collection Todo collection
     * @return {this}
     */
    set = (collection) => {
        var createdBy = {};
        var setCreatedBy = [];
        this.fields = [];

        if (this.debug === true) {
            console.log(`collection`, collection);
        }
        _.each(collection, (value) => {
            createdBy[value["createdBy"]["id"]] = value["createdBy"];
        });
        if (this.debug === true) {
            console.log(`createdBy`, createdBy);
        }

        _.each(createdBy, (value) => {
            setCreatedBy.push({
                name: `${value.firstName} ${value.lastName}`,
                modelName: `${value.id}`
            });
        });

        this.setFormlyFields(setCreatedBy);
        if (this.debug === true)
            console.log(this.filter);

        return this;
    }

    /**
     * Set fields to create md-list-item with checkboxes using declared createdBy
     * @param  {json} setCreatedBy list of users from collection with id, firstname, lastname
     * @return {this}
     */
    setFormlyFields = (setCreatedBy) => {
        this.fields = [{
            type: "checkbox-md-list",
            key: "user",
            templateOptions: {
                className: "md-primary",
                mdListItem: setCreatedBy
            }
        }];
        return this;
    }
}
