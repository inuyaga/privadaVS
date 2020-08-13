$(document).ready(function() {
    "use strict";
    /* 
       Responsive Tab
       ========================================================================== */
      $('ul.nav.nav-tabs  a').on('click',function(e) {
        e.preventDefault();
        $(this).tab('show');
    });

    (function($) {
        fakewaffle.responsiveTabs(['xs', 'sm']);
    })(jQuery);

});