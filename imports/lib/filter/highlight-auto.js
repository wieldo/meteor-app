import hljs from "highlight.js";
import jsfy from "jsfy";

export default () => {
    return function(input) {
        if (input) {
            return hljs.highlightAuto(jsfy(input)).value;
        }
        return input;
    };
};
