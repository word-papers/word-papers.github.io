/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        // On the home page, move the blog icon inside the header 
        // for better relative/absolute positioning.

        //$("#blog-logo").prependTo("#site-head-content");

    });

}(jQuery));

/* Buster: correct local directory links to not include "index.html" */
(function($){
    var absUrlPattern = new RegExp('^(?:[a-z]+:)?//', 'i');
    $(document).ready(function(){
        $('a').each(function(){
            var e = $(this);
            var href = e.attr('href');
            if (!absUrlPattern.test(href)) {
                var new_href = href.replace(/\/index\.html$/, '/');
                e.attr('href', new_href);
            }
        });
    });
}(jQuery));