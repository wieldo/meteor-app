export default (scope) => {
    var i = 0;
    _.each(scope.model.mdcheckbox.group, (value) => {
        if (value === true)
            i++;
    });
    if (i == _.size(scope.model.mdcheckbox.group))
        return true;
    else {
        return false;
    }
};
