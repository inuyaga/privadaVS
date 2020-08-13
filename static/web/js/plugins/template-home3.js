$(document).ready(function() {
    "use strict";

    var config3 = {
        "id": '579924271629094913',
        "domId": 'twitter-bx-2',
        "maxTweets": 5,
        "enableLinks": true,
        "showUser": false,
        "showTime": true,
        "showImages": false,
        "lang": 'en'
      };
      twitterFetcher.fetch(config3);
    /* 
    Tweet & Bx Slider
       ========================================================================== */


    var myVar2 = setInterval(myTimer, 5000);
    var executed2 = false;
    function myTimer() {
        if (!executed2) {
        executed2 = true;
        $(function() {
           var twitter2 = $('#twitter-bx-2 ul').bxSlider({
                slideSelector:'li',
                mode: 'vertical',
                auto:true,
                
                minSlides: 1,
                slideMargin: 10,
                moveSlides: 1,
                controls:false,
                pager:false,
              });
                $('.next-twitter-2').click(function(){
                  twitter2.goToNextSlide();
                  return false;
                });

                $('.prev-twitter-2').click(function(){
                  twitter2.goToPrevSlide();
                  return false;
                });

        });
      }
    };



});