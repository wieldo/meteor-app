export default (name, elements) => {
    console.log(name);
    if (name) {
        this.model = null;
        console.log(elements);
        _.each(elements, (element) => {
            console.log(element.form + " == " + name);
            if (element.form == name) {
                this.model = element.model;
            }
        });
    }
    console.log(this.model);
    alert(JSON.stringify(this.model), null, 2);
};
