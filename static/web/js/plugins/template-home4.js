$(document).ready(function() {
    "use strict";

    /* ==========================================================================
       Twitter
       ========================================================================== */

    var config2 = {
      "id": '579924271629094913',
      "domId": 'twitter-owl',
      "maxTweets": 5,
      "enableLinks": true,
      "showUser": false,
      "showTime": true,
      "showImages": false,
      "lang": 'en'
    };
    twitterFetcher.fetch(config2);
    /* 
       OWL & Tweet
       ========================================================================== */
    var myVar2 = setInterval(myTimer2, 3000);

    function myTimer2() {
            $(function() {
                $("#twitter-owl ul").owlCarousel({
           
                autoPlay: true, //Set AutoPlay to 3 seconds
                items : 1,
                itemsDesktop      : [1199,1],
                itemsDesktopSmall     : [979,1],
                itemsTablet       : [768,1],
                itemsMobile       : [479,1],
                pagination:true,
                navigation:false,
                transitionStyle : "fade"
                });
            });
    }

});