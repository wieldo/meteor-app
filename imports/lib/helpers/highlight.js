import hljs from "highlight.js";
import "jquery";
export default (element) => {
    jQuery(document).ready(function() {
        jQuery(element).each(function(i, block) {
            hljs.highlightBlock(block);
        });
    });
};
