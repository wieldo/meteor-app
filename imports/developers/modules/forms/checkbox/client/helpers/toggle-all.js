export default (scope) => {
    var check = true;
    var i = 0;
    _.find(scope.model.mdcheckbox.group, (value) => {
        if (value === true) {
            check = false;
            return i;
        }
        i++;
    });
    if (i > 0 && i < _.size(scope.model.mdcheckbox.group)) {
        check = true;
    }
    _.each(scope.model.mdcheckbox.group, (value, key) => {
        scope.model.mdcheckbox.group[key] = check;
    });
};
