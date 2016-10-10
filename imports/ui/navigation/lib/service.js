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
export var service = {
    name: "SimpleNavigationService"
};
SetModule(moduleName);
@Service({
    name: service.name,
    providers: [
        "$q",
        "store",
        "$state"
    ]
})
@LocalInjectables
export class SimpleNavigationService {
    context = this;
    debug = true;
    name = null; // navigation name
    navigation = {};
    options = {};
    parent = null;

    constructor($q, store, $state) {
        this.defer = {
            navigation: $q.defer()
        };
        if (this.debug === true) {
            console.info(`---------------------------------------`);
            console.info(`Debug ${service.name} has been started!`);
            console.info(`---------------------------------------`);
        }
        this.store = store;
        this.$state = $state;
    }

    /**
     * _setSelected set navigation[name].selected json
     * @param {json} selected selected option object
     * @param {string} name
     * @return {object} this context
     */
    _setSelected = (selected, name) => {
        if (this.debug === true) {
            console.group(`${service.name}._setSelected(selected, name)`);
            console.log(`@param selected: `, selected);
            console.log(`@param name: `, name);
            console.log(`@return this: `, this);
        }
        if (!name) {
            console.error(`@param name: `, name);
            console.groupEnd();
            throw(`_setSelected(selected, name); variable name is missing`);
        }
        if (!selected) {
            console.error(`@param selected: `, selected);
            console.groupEnd();
            throw(`_setSelected(selected, name); variable selected is missing`);
        }
        if (this.debug === true)
            console.groupEnd();

        if (selected && name) {
            this.navigation[name].selected = selected;

            // Set navigation defer
            this._notifyNavigation();
        }

        return this;
    }

    /**
     * _notifyNavigation
     * @return {object} this context
     */
    _notifyNavigation = () => {
        if (this.debug === true) {
            console.group(`${service.name}._notifyNavigation()`);
            console.group(`this.defer.navigation.notify(this.navigation);`);
            console.log(`@param this.navigation: `, this.navigation);
            console.groupEnd();
            console.groupEnd();
        }
        this.defer.navigation.notify(this.navigation);
        return this;
    }


    /**
     * _defineOptionsWithItems
     * @param  {json} options
     * @return {json} options
     */
    _defineOptionsWithItems = (options) => {
        let name = this.name;
        if (this.debug === true) {
            let clonedOptions = _.clone(options);
            console.group(`${service.name}._defineOptionsWithItems(options)`);
            console.log(`@param options: `, clonedOptions);
            console.log(`name: `, `${name}`);
        }
        if (options && name) {
            for (var i = 0; i < options.length; i++) {
                let optionIndex = i;
                // with items - two level menu
                if (options[i].items) {
                    /*
                    _.each(options[i].items,(item) => {
                        console.log(item);
                    });
                    */
                    for (var j = 0; j < options[i].items.length; j++) {
                        let itemIndex = j;

                        // DEFAULT ICON
                        if (!options[i].items[j]["icon"] && options[i].items[j]["drop"] !== true) {
                            options[i].items[j]["icon"] = "fa fa-angle-right";
                        }
                        // default disabled
                        if (options[optionIndex].items[itemIndex]["ngDisabled"] == undefined)
                            options[optionIndex].items[itemIndex]["ngDisabled"] = false;
                        // default hidden
                        if (!options[optionIndex].items[itemIndex]["hidden"]  == undefined)
                            options[optionIndex].items[itemIndex]["hidden"] = false;
                        // default ariaLabel
                        if (!options[optionIndex].items[itemIndex]["ariaLabel"]  == undefined)
                            options[optionIndex].items[itemIndex]["ariaLabel"] = options[optionIndex].items[itemIndex]["name"];

                        // define items.select
                        if (options[i].items[j]["select"] !== false) {
                            options[i].items[j]["select"] = () => {
                                // select only if option is not disabled
                                if (this.debug === true) {
                                    console.group(`options[i].items[j].["select"]`);
                                    console.log(`options[optionIndex]: `, JSON.stringify(options[optionIndex]));
                                    console.groupEnd();
                                }
                                if (options[optionIndex].items[itemIndex]["ngDisabled"] !== true || options[optionIndex].items[itemIndex]["disabled"] !== true) {
                                    this._select({
                                        optionIndex: optionIndex,
                                        itemIndex: itemIndex
                                    }, name, options[optionIndex].items[itemIndex]["callback"]);
                                }
                            };
                        }
                        if (this.$state.current.name == options[optionIndex].items[itemIndex].uisref) {
                            let selected = angular.merge({
                                optionIndex: optionIndex,
                                itemIndex: itemIndex
                            }, options[optionIndex].items[itemIndex]);
                            if (this.debug === true) {
                                console.group(`if (this.$state.current.name == options[optionIndex].items[itemIndex].uisref)`);
                                console.log(`this.$state.current.name: `, this.$state.current.name);
                                console.log(`options[optionIndex].items[itemIndex].uisref: `, options[optionIndex].items[itemIndex].uisref);
                                console.log(`selected: `, selected);
                                console.groupEnd();
                            }
                            this.store.set("navigation" + name, selected);
                        }
                    }
                }
            }
        } else {
            if (this.debug === true) {
                console.warn(`if (options && name){} `);
            }
        }
        if (this.debug === true) {
            console.log(`@return options: `, options);
            console.groupEnd();
        }
        return options;
    }

    /**
     * _defineOptionsWithoutItems
     * @param  {json} options
     * @return {json} options
     */
    _defineOptionsWithoutItems = (options) => {
        let name = this.name;
        if (this.debug === true) {
            let clonedOptions = _.clone(options);
            console.group(`${service.name}._defineOptionsWithoutItems(options)`);
            console.log(`@param options: `, clonedOptions);
            console.log(`name: `, `${name}`);
        }
        if (options && name) {
            for (var i = 0; i < options.length; i++) {
                let optionIndex = i;
                if (!options[i].items) {
                    // default disabled
                    if (options[optionIndex]["ngDisabled"] == undefined)
                        options[optionIndex]["ngDisabled"] = false;
                    // default hidden
                    if (options[optionIndex]["hidden"] == undefined)
                        options[optionIndex]["hidden"] = false;
                    // default ariaLabel
                    if (options[optionIndex]["ariaLabel"] == undefined)
                        options[optionIndex]["ariaLabel"] = options[optionIndex]["name"];

                    // ng-click _select()
                    if (options[optionIndex]["select"] !== false) {
                        options[optionIndex]["select"] = () => {
                            // select only if option is not disabled
                            if (this.debug === true) {
                                console.group(`options[i]["select"]`);
                                console.log(`options[optionIndex]: `, options[optionIndex]);
                                console.groupEnd();
                            }
                            if (options[optionIndex]["ngDisabled"] !== true)
                                this._select({
                                    optionIndex: optionIndex
                                }, name, options[optionIndex]["callback"]);
                        };
                    }
                    console.group(`if (this.$state.current.name == options[optionIndex].uisref)`);
                    console.assert(this.$state.current.name == options[optionIndex].uisref, {
                        "message": "Not equal",
                        "this.$state.current.name": this.$state.current.name,
                        "options[optionIndex].uisref": options[optionIndex].uisref
                    });
                    if (this.$state.current.name == options[optionIndex].uisref) {
                        let selected = angular.merge({
                            optionIndex: optionIndex
                        }, options[optionIndex]);
                        if (this.debug === true) {
                            console.log(`this.$state.current.name: `, this.$state.current.name);
                            console.log(`options[optionIndex].uisref: `, options[optionIndex].uisref);
                            console.log(`selected: `, selected);
                        }
                        this.store.set("navigation" + name, selected);
                    }
                    console.groupEnd();
                }
            }
        } else {
            if (this.debug === true) {
                console.warn(`if (options && name){} `);
            }
        }
        if (this.debug === true) {
            console.log(`@return options: `, options);
            console.groupEnd();
        }
        return options;
    }

    /**
     * get - return navigation json
     * @param {string} name holder name
     * @return {json} this.navigation || this.navigation[name]
     */
    get = (name) => {
        name = (name) ? name : this.getName();
        if (this.debug === true) {
            console.group(`${service.name}.get(name)`);
            console.log(`@param name: `, `"${name}"`);
        }
        if (name !== false && this.navigation[name]) {
            if (this.debug === true) {
                console.log(`@return this.navigation[name]: `, this.navigation[name]);
                console.groupEnd();
            }
            return this.navigation[name];
        }
        else {
            if (this.debug === true) {
                console.log(`@return this.navigation: `, this.navigation);
                console.groupEnd();
            }
            return this.navigation;
        }
    }

    /**
     * getName return last defined holder navigation name
     * @return {string} this.name
     */
    getName = () => {
        if (this.debug === true) {
            console.group(`${service.name}.getName()`);
            console.log(`@return this.name: `, `${this.name}`);
            console.groupEnd();
        }
        if (this.name)
            return this.name;
    }

    /**
     * findOptionByIndex - get navigation object
     * @param {json} index {optionIndex: Number, itemIndex: Number}
     * @param {name} name navigation holder name
     * @return {json}
     */
    findOptionByIndex = (index, name) => {
        if (this.debug === true) {
            console.group(`${service.name}.findOptionByIndex(index)`);
            console.log(`@param index: `, index);
            console.log(`@param name: `, name);
        }
        if (this.navigation[name]) {
            if (this.navigation[name].selected && this.navigation[name].options) {
                if (index.optionIndex > -1 && index.itemIndex > -1) {
                    if (this.debug === true) {
                        console.groupEnd();
                    }
                    return angular.merge(index, this.navigation[name].options[index.optionIndex].items[index.itemIndex]);
                }else {
                    if (this.debug === true) {
                        console.log(`this.navigation[name]: `, this.navigation[name]);
                        console.groupEnd();
                    }
                    return angular.merge(index, this.navigation[name].options[index.optionIndex]);
                }
            }
        } else {
            if (this.debug === true) {
                console.warn(`this.navigation["${name}"]:`, this.navigation[name]);
            }
        }
        if (this.debug === true) {
            console.groupEnd();
        }
    }

    /**
     * getSelectedPromise
     * @return {promise} promise
     */
    getSelectedPromise = () => {
        return this.defer.navigation.promise;
    }

    /**
     * _select - click on option navigation to select it
     * @param {json} index  set selected name and set to variable .selected {optionIndex, itemIndex}
     * @param {function} callback Function that execute after
     * @return
    */
    _select = (index, name, callback) => {
        if (this.debug === true) {
            console.group(`${service.name}._select(index, name, callback)`);
            console.log(`index:`, index);
            console.log(`name: `, name);
            console.log(`callback: `, callback);
        }

        var selected = this.findOptionByIndex(index, name);
        // Remember last choose
        this.store.set("navigation" + name, selected);
        // Selected option and item
        this._setSelected(selected, name);

        if (this.debug === true) {
            console.log(`selected`, selected);
            console.log(`this.navigation[name]`, this.navigation[name]);
            console.groupEnd();
        }

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
     * set - set holder name and options
     * @param {string} name holder name or setName()
     * @param {json} options displayed options or setOptions()
     * @param {string} header header name or setHeader()
     * @return {object} this context
     */
    set = (name, options, header, parentName) => {
        if (this.debug === true) {
            console.group(`${service.name}.set(name, options, header)`);
            console.log(`name:`, `"${name}"`);
            console.log(`options: `, JSON.stringify(options));
            console.log(`header: `, header);
            console.groupEnd();
        }
        if (name && options) {
            this
                .setName(name)
                .setHeader(header)
                .setOptions(options)
                .setParentNavigation(parentName);
        }
        return this;
    }

    /**
     * setHeader - set simple header navigation
     * @param  {string} header Header navigation
     * @return {object} this context
     */
    setHeader = (header) => {
        if (this.debug === true) {
            console.group(`${service.name}.setHeader(header)`);
            console.log(`header: `, `"${header}"`);
            console.log(`this.navigation[name].header: `, this.navigation[this.name].header);
            console.groupEnd();
        }
        this._setHeader(header);

        return this;
    }

    /**
     * _setHeader set this header and navigation header
     * @param {string} header name of navigation header
     * @return {object} this context
     */
    _setHeader = (header) => {
        if (header && this.name) {
            this.header = header;
            this.navigation[this.name].header = header;
        }
        return this;
    }

    /**
     * setName - set navigation holder name
     * @param {string} name holder name
     * @return {object} this context
     */
    setName = (name) => {
        if (this.debug === true) {
            console.group(`${service.name}.setName(name)`);
            console.log(`name: `, name);
            if (!name)
                console.error(`${service.name}.setName(name) - variable name is missing`);
            console.groupEnd();
        }
        if (!name && this.debug === true) {
            throw (`${service.name}.setName(name) - variable name is missing`);
        }
        this._setName(name);

        return this;
    }

    /**
     * [_setName description]
     * @param {[type]} name [description]
     */
    _setName = (name) => {
        if (name) {
            this.name = name;
            this.navigation[name] = {};
        }
        return this;
    }

    /**
     * setOptions - create navigation options with defined holder name
     * @param {json} options Menu options with {}
     * @return {object} this context
     */
    setOptions = (options) => {
        if (this.debug === true)
            console.group(`${service.name}.setOptions(options)`);
        if (!options) {
            console.groupEnd();
            throw (`${service.name}.setOptions(options) - variable options is missing`);
        }
        // define options
        options = this._defineOptionsWithoutItems(options);
        options = this._defineOptionsWithItems(options);
        this._setOptions(options);
        this._setSelected(this.store.get("navigation" + this.name), this.name);

        /*
        if (this.navigation[this.name]) {
            if (this.$state.current.name != this.navigation[this.name].selected.uisref) {
                var index = {};
                _.each(this.navigation[this.name].options, (option, key) => {
                    if (option.uisref == this.$state.current.name) {
                        index = {
                            optionIndex: key
                        };
                    }
                });
                var selected = this.findOptionByIndex(index, this.name);
                if (selected)
                    this._setSelected(selected, this.name);
            }
        }
        */


        if (this.debug === true) {
            console.log(`options: `, options);
            console.groupEnd();
        }

        return this;
    }

    /**
     * _setOptions set this and navigation options
     * @param {json} options navigation option in format [[
         {icon: "zmdi zmdi-plus", name: "Create"},
         {icon: "zmdi zmdi-home", name: "Dashboard",uisref:"app.clients.dashboard"},
     ]]
     * @return {object} this context
     */
    _setOptions = (options) => {
        if (options && this.name) {
            this.options = options;
            this.navigation[this.name].options = options;
        }
        return this;
    }

    /**
     * setParentNavigation description
     * @param {string} parentName it is the name navigation above that is linked with
     * @param {object} this context
     */
    setParentNavigation = (parentName) => {
        this._setParentName(parentName);

        return this;
    }

    /**
     * _setParentName set parent name for navigation
     * @param {string} parentName parent navigation holder name
     * @return {object} this context
     */
    _setParentName = (parentName) => {
        if (this.name && parentName) {
            this.parentName = parentName;
            this.navigation[this.name].parentName = parentName;
        }
        return this;
    }

    /**
     * initialize
     * @return {json} navigation return object
     */
    initialize = () => {
        return this.navigation;
    }
}
