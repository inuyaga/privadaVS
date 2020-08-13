$(document).ready(function() {
    "use strict";
    
    

    /* 
       Tweet Feed
       ========================================================================== */
        var config2 = {
          "id": '579924271629094913',
          "domId": 'twitter-bx',
          "maxTweets": 5,
          "enableLinks": true,
          "showUser": false,
          "showTime": true,
          "showImages": false,
          "lang": 'en'
        };
        twitterFetcher.fetch(config2);

    /* 
       Bx Slider & Tweet
       ========================================================================== */
      var myVar2 = setInterval(myTimer, 5000);
      var executed2 = false;
      function myTimer() {
          if (!executed2) {
          executed2 = true;
          $(function() {
             var twitter2 = $('#twitter-bx ul').bxSlider({
                  slideSelector:'li',
                  mode: 'fade',
                  auto:true,
                  slideWidth: 300,
                  minSlides: 1,
                  slideMargin: 10,
                  moveSlides: 1,
                  controls:false,
                  pager:false,
                });
          });
        }
      };
});