import {
    moduleName
} from "./module";
import {
    init,
    SetModule,
    Service,
    LocalInjectables
} from "angular2-now";

init();
export var $Service = {
    name: "SimpleNavigationService"
};
SetModule(moduleName);
@Service({
    name: $Service.name,
    providers: [
        "$q", "store"
    ]
})
@LocalInjectables
export class SimpleNavigationService {
    context = this;
    debug = false;
    name = null; // navigation name
    navigation = {};

    constructor($q, store) {
        this.defer = {
            navigation: $q.defer()
        };
        if (this.debug === true) {
            console.log(`-----------------------------------------------`);
            console.info(`DEBUG SimpleNavigationService has been started!`);
            console.trace(`SimpleNavigationService`);
            console.log(`-----------------------------------------------`);
        }
        this.store = store;
    }

    /**
     * getSelectedPromise
     * @return {promise} promise
     */
    getSelectedPromise = () => {
        return this.defer.navigation.promise;
    }

    /**
     * set - set holder name and options
     * @param {String} name holder name
     * @param {Json} options displayed options
     * @return {this} this context
     */
    set = (name, options) => {
        if (this.debug === true) {
            console.group(`${$Service.name}.set(name, options)`);
            console.debug(`name:`, `"${name}"`);
            console.debug(`options: `, JSON.stringify(options));
            console.groupEnd();
        }
        return this.setName(name).setOptions(options);
    }

    /**
     * getSelected - get navigation object
     * @param {String} name get navigation object by holder name
     * @return
     */
    getSelected = (name) => {
        name = (name) ? name : this.name;
        if (this.debug === true) {
            console.group(`${$Service.name}.getSelected(name)`);
            console.debug(`name: `, name);
        }
        if (name !== false) {
            if (this.navigation[name]) {
                if (this.navigation[name].selected && this.navigation[name].options) {
                    var options_index = this.navigation[name].selected.options_index;
                    var items_index = this.navigation[name].selected.items_index;
                    if (options_index > -1 && items_index > -1) {
                        if (this.debug === true)
                            console.groupEnd();

                        return this.navigation[name].options[options_index].items[items_index].name;
                    }else {
                        if (this.debug === true)
                            console.groupEnd();
                        return this.navigation[name].options[options_index].name;
                    }
                }
            } else {
                if (this.debug === true) {
                    console.group(`this.navigation[name]`);
                    console.warn(`this.navigation["${name}"]:`, this.navigation[name]);
                    console.groupEnd();
                    //throw (`${$Service.name}.getSelected(${name}) is empty; this.navigation[${name}] is null`);
                }
            }
        } else {
            if (this.debug === true) {
                console.warn(`name:`, name);
                //throw (`${$Service.name}.getSelected(name) - variable name is missing`);
            }
        }
        if (this.debug === true)
            console.groupEnd();
    }

    /**
     * select - click on option navigation to select it
     * @param {String} name holder name
     * @param {Json} selected  set selected name and set to variable .selected {options_index, items_index}
     * @param {Function} callback Function that execute after
     * @return
    */
    select = (name, select, callback) => {
        if (this.debug === true) {
            console.group(`${$Service.name}.select(name, select, callback)`);
            console.debug(`name: `, `"${name}"`);
            console.debug(`select:`, JSON.stringify(select));
            console.debug(`callback: `, callback);
            console.groupEnd();
        }

        if (!name) {
            console.error(`${$Service.name}.select(name, select, callback) - variable name is missing`);
            throw (`${$Service.name}.select(name, select, callback) - variable name is missing`);
        }
        // Selected option and item
        this.navigation[name].selected = select;
        this.navigation[name].selected["name"] = this.getSelected(name);
        this.defer.navigation.notify(this.navigation);
        // Remember last choose
        this.store.set("navigation" + name, select);
        // After select run callback below
        if (callback)
            callback();
    }

    /* drop menu
    drop = (name,i) => {
      for(var x=0; x < this.navigation[name].options.length; x++) {
        this.navigation[name].options[x].drop = "";
      }
      this.navigation[name].options[i].drop = "drop";
    }
    */

    /**
     * setName - set navigation holder name
     * @param {String} name holder name
     * @retrun {this} this
     */
    setName = (name) => {
        if (this.debug === true) {
            console.group(`${$Service.name}.setName(name)`);
            console.debug(`name: `, `"${name}"`);
            console.groupEnd();
        }
        if (!name) {
            console.error(`${$Service.name}.setName(name) - variable name is missing`);
            throw (`${$Service.name}.setName(name) - variable name is missing`);
        }
        this.name = name;
        return this;
    }

    /**
     * setHeader - set simple header navigation
     * @param  {String} header Header navigation
     * @return {Object}        This context
     */
    setHeader = (header) => {
        if (this.debug === true) {
            console.group(`${$Service.name}.setHeader(header)`);
            console.debug(`header: `, `"${header}"`);
            console.debug(`this.name: `, `"${this.name}"`);
            console.groupEnd();
        }
        if (header && this.name) {
            this.navigation[this.name].header = header;
        }
        return this;
    }

    /**
     * setOptions - create navigation options with defined holder name
     * @param {json} options Menu options with {}
     * @return {this} this return this object
     */
    setOptions = (options) => {
        if (this.debug === true) {
            console.group(`${$Service.name}.setOptions(options)`);
        }
        let name;
        if (this.name)
            name = this.name;
        if (!name)
            throw (`${$Service.name}.setOptions(options) - variable name is missing`);
        if (!options)
            throw (`${$Service.name}.setOptions(options) - variable options is missing`);
        // define options
        for (var i = 0; i < options.length; i++) {
            let option_index = i;
            // with items - two level menu
            if (options[i].items) {
                /*
                _.each(options[i].items,(item) => {
                    console.log(item);
                });
                */
                for (var j = 0; j < options[i].items.length; j++) {
                    let item_index = j;

                    // DEFAULT ICON
                    if (!options[i].items[j]["icon"] && options[i].items[j]["drop"] !== true) {
                        options[i].items[j]["icon"] = "fa fa-angle-right";
                    }
                    // default disabled
                    if (options[option_index].items[item_index]["ngDisabled"] == undefined)
                        options[option_index].items[item_index]["ngDisabled"] = false;
                    // default hidden
                    if (!options[option_index].items[item_index]["hidden"]  == undefined)
                        options[option_index].items[item_index]["hidden"] = false;
                    // default ariaLabel
                    if (!options[option_index].items[item_index]["ariaLabel"]  == undefined)
                        options[option_index].items[item_index]["ariaLabel"] = options[option_index].items[item_index]["name"];

                    // define items.select
                    options[i].items[j]["select"] = () => {
                        // select only if option is not disabled
                        if (this.debug === true) {
                            console.group(`options[i].items[j].["select"]`);
                            console.debug(`options[option_index]: `, JSON.stringify(options[option_index]));
                            console.groupEnd();
                        }
                        if (options[option_index].items[item_index]["ngDisabled"] !== true || options[option_index].items[item_index]["disabled"] !== true)
                            this.select(name, {options_index: option_index, items_index: item_index}, options[option_index].items[item_index]["callback"]);
                    };
                }
            // without items - one level menu
            } else {
                // default disabled
                if (options[option_index]["ngDisabled"] == undefined)
                    options[option_index]["ngDisabled"] = false;
                // default hidden
                if (options[option_index]["hidden"] == undefined)
                    options[option_index]["hidden"] = false;
                // default ariaLabel
                if (options[option_index]["ariaLabel"] == undefined)
                    options[option_index]["ariaLabel"] = options[option_index]["name"];

                // ng-click  select()
                options[i]["select"] = () => {
                    // select only if option is not disabled
                    if (this.debug === true) {
                        console.group(`options[i].["select"]`);
                        console.debug(`options[option_index]: `, JSON.stringify(options[option_index]));
                        console.groupEnd();
                    }
                    if (options[option_index]["ngDisabled"] !== true)
                        this.select(name, {options_index: option_index}, options[option_index]["callback"]);
                };
            }
        }
        if (this.debug === true) {
            console.debug(`options: `, JSON.stringify(options));
            console.groupEnd();
        }
        this.setNavigation(options);
        return this;
    }

    /**
     * setNavigation - set object navigation with specified name
     * @param {json} items menu options
     */
    setNavigation = (items) => {
        let name = this.name;
        this.navigation[name] = {
            selected: this.store.get("navigation" + name),
            options: items
        };
        if (this.debug === true) {
            console.group(`${$Service.name}.setNavigation(items)`);
            console.debug(`items: `, JSON.stringify(items));
            console.groupEnd();
        }
        this.defer.navigation.notify(this.navigation);
        return false;
    }


    /**
     * get - return navigation json
     * @param {string} name - holder name
     * @return {json}
     */
    get = (name) => {
        name = (name) ? name : this.name;
        if (this.debug === true) {
            console.group(`${$Service.name}.get(name)`);
            console.debug(`name: `, `"${name}"`);
        }
        if (!name) {
            throw(`${$Service.name}.get(name) - variable name is missing`)
        }
        if (name !== false && this.navigation[name]) {
            if (this.debug === true) {
                console.debug(`return: ${JSON.stringify(this.navigation[name])}`);
                console.groupEnd();
            }
            return this.navigation[name];
        }
        else {
            if (this.debug === true) {
                console.debug(`return: ${JSON.stringify(this.navigation)}`);
                console.groupEnd();
            }
            return this.navigation;
        }
    }

    /**
     * initialize
     * @return {json} navigation return object
     */
    initialize = () => {
        return this.navigation;
    }
}
