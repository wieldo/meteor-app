import { todoSetCompleted, todoRemove } from "./api/methods";
import { todoCollection } from "./api/collections";
import { moduleName } from  "./todo.module";
import { init, SetModule, Service, MeteorReactive } from "angular2-now";
export var service = {
    name: "TodoCollectionService",
    providers: [
        "TodoFormService"
    ]
};
init();
SetModule(moduleName);
@Service(service)
@MeteorReactive
export class TodoCollectionService {

    // Fetched collection
    result = {};

    // Display browser console debug information about code below
    debug = false;

    constructor(TodoFormService) {
        this.TodoFormService = TodoFormService;

        if (this.debug === true) {
            console.info(`---------------------------------------`);
            console.info(`Debug ${service.name} has been started!`);
            console.debug(`this.TodoFormService`, this.TodoFormService);
            console.info(`---------------------------------------`);
        }
    }

    /**
     * Set todo as completed
     * @param  {json} update {todo._id}
     * @return
     */
    setCompleted = (update) => {
        if (this.debug === true) {
            console.group(`${service.name}.setCompleted(update)`);
            console.log(`@param update`, update);
        }
        todoSetCompleted.call(update, (error, result) => {
            if (this.debug === true) {
                console.log(`todoSetCompleted`, todoSetCompleted);
                console.log(`error: `, error);
                console.log(`result: `, result);
                console.log(`todoSetCompleted.error: `, todoSetCompleted.error);
                console.log(`todoSetCompleted.result: `, todoSetCompleted.result);
                console.groupEnd();
            }
        });

        return this;
    }

    toggleCompleted = (update) => {
        /*
        Meteor.call("todo.toggleCompleted", update, (error, result) => {

        });
        */
    }

    /**
     * Set todo as removed
     * @param  {string} _id
     * @return {object} this context
     */
    remove = (_id) => {
        if (this.debug === true) {
            console.group(`${service.name}.remove(_id)`);
            console.log(`@param _id`, _id);
        }
        todoRemove.call({_id}, (error, result) => {
            if (this.debug === true) {
                console.group("TodoCollectionService.remove");
                console.log(`todoRemove`, todoRemove);
                console.log(`error: `, error);
                console.log(`result: `, result);
                console.log(`todoRemove.error: `, todoRemove.error);
                console.log(`todoRemove.result: `, todoRemove.result);
                console.groupEnd();
            }
        });

        return this;
    }

    /**
     * get collection and send to form service
     * @param  {_id} _id primary id todo collection
     * @return {json} todoItem fetched mongo collection
     */
    edit = (_id) => {
        if (this.debug === true) {
            console.group(`${service.name}.edit(_id)`);
            console.log(`@param _id`, _id);
        }

        let todoItem = todoCollection.find({
            "_id": _id
        }).fetch()[0];

        if (this.debug === true) {
            console.log(`todoCollection.find({"_id": _id}).fetch()[0];`, todoCollection.find({"_id": _id}).fetch()[0]);
            console.log(`let todoItem = todoCollection.find({"_id": _id}).fetch()[0];`);
        }
        if (todoItem) {
            let model = {
                _id: todoItem._id,
                name: todoItem.name,
                completed: todoItem.completed
            };
            if (this.debug === true) {
                console.log(`let model:`, JSON.stringify({
                    _id: todoItem._id,
                    name: todoItem.name,
                    completed: todoItem.completed
                }, null, " "));
                console.log(`model: `, model);
                console.log(`this.TodoFormService.model: `, model);
            }
            this.TodoFormService.model = model;
        }
        if (this.debug === true) {
            console.log(`@return todoItem: `, todoItem);
            console.groupEnd();
        }

        return todoItem;
    }

    /**
     * [sort description]
     * @return {[type]} [description]
     */
    sort() {

    }

    /**
     * [limit description]
     * @return {[type]} [description]
     */
    limit() {

    }

    /**
     * get todo mongo collection returned json object
     * @param  {json} selector mongo collection selector
     * @param  {json} options mongo collection options
     * @return {json} filtered fetched mongo collection
     */
    get = (selector, options) => {
        let filtered;
        let all = todoCollection.find({}).fetch();
        if (this.debug === true) {
            console.group(`${service.name}.get(selector, options)`);
            console.log(`@param selector`, selector);
            console.log(`@param options`, options);
        }
        if (options === undefined) {
            filtered = todoCollection.find(selector).fetch();
        }else {
            filtered = todoCollection.find(selector, options).fetch();
        }
        if (this.debug === true) {
            console.log(`@return filtered`, filtered);
            console.groupEnd();
        }
        this.result = {
            filtered: filtered,
            all: all
        };

        return filtered;
    }
}
