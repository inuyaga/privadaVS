$(document).ready(function() {
    "use strict";
    
    

   
    /* 
        Flickr feed
        ========================================================================== */
    $(document).ready(function() {

        $('#basicuse').jflickrfeed({
            limit: 6,
            qstrings: {
                id: '52617155@N08'
            },
            itemTemplate: '<li><a href="{{image_b}}"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
        });
    });



});