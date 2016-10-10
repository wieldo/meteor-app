import hljs from "highlight.js";
import $ from "jquery";
export default (element) => {
    $(document).ready(function() {
        $(element).each(function(i, block) {
            hljs.highlightBlock(block);
        });
    });
};
