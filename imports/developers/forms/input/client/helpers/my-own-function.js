export default (value, options, scope, event) => {
    console.log("myOwnFunction");
    console.log(value);
    console.log(options);
    console.log(scope);
    console.log(event);
    scope.to.label = "You have clicked on me, mmmm";
};
