import dialogTemplateUrl from "./../dialog/client/view";
import {
    todoInsert,
    todoUpdate
} from "./../../api/methods/";
import {moduleName} from "./../../todo.module";
import {
    init,
    SetModule,
    Service,
    LocalInjectables,
    MeteorReactive
} from "angular2-now";
init();
SetModule(moduleName);
@Service({
    name: "TodoFormService",
    providers: [
        "$mdDialog"
    ]
})
@LocalInjectables
@MeteorReactive
export class TodoFormService {

    _id = null;
    model = {};
    options = {};
    result = new ReactiveVar({});
    debug = false;

    constructor($mdDialog) {
        this.$mdDialog = $mdDialog;
    }

    /**
     * [description]
     * @return {[type]} [description]
     */
    insert = () => {
        let model = this.model;
        if (this.debug === true) {
            console.log(`model: `, model);
        }
        todoInsert.call({
            name: model.name
        } , (error, result) => {
            if (!error) {
                this.reset();
            }
            if (this.debug === true) {
                console.group("TodoFormService.insert()");
                console.log(`error: `, error);
                console.log(`result:`, result);
                console.log(`todoInsert.error: `, todoInsert.error);
                console.log(`todoInsert.result:`, todoInsert.result);
                console.groupEnd();
            }
        });
    }

    /**
     * Update - update mongo collection with specified _id
     * @param  {Number} _id Primary id
     * @return {null}
     */
    update = () => {
        todoUpdate.call(this.model,(error, affected) => {
            if (this.debug === true) {
                console.group("TodoFormService.update()");
                console.log(`error: `, error);
                console.log(`affected:`, affected);
                console.log(`todoUpdate.error: `, todoUpdate.error);
                console.log(`todoUpdate.result:`, todoUpdate.result);
                console.groupEnd();
            }
            this.reset();
        });
    }

    /**
     * Submit and insert or update form
     * @return
     */
    submit = () => {
        if (this.model._id)
            this.update(this.model._id);
        else
            this.insert(this.model);
    }

    /**
     * [description]
     * @return {[type]} [description]
     */
    reset = () => {
        this.options.resetModel();
        delete this.model._id;
    }

    /**
     * [description]
     * @param  {[type]} ev    [description]
     * @param  {[type]} model [description]
     * @return {[type]}       [description]
     */
    mdDialog = (ev, model) => {
        if (model) {
            this.model = model;
        }
        this.$mdDialog.show({
            controller: ($scope) => {
                $scope.close = () => {
                    this.$mdDialog.cancel();
                };
                $scope.answer = (answer) => {
                    this.$mdDialog.hide(answer);
                };
            },
            templateUrl: dialogTemplateUrl,
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
        })
        .then(function(result) {
            alert(result);
            console.log(`result:`, result);
        }, function() {
            console.log(`cancel:`);
        });
    }
}
