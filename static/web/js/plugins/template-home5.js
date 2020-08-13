$(document).ready(function() {
    "use strict";
    /* ==========================================================================
       revolution slider
       ========================================================================== */
     var tpj=jQuery;
             
             var revapi426;
             tpj(document).ready(function() {
             if(tpj("#rev_slider_426_1").revolution == undefined){
             revslider_showDoubleJqueryError("#rev_slider_426_1");
             }else{
             revapi426 = tpj("#rev_slider_426_1").show().revolution({
             sliderType:"hero",
             jsFileLocation:"revolution/js",
             sliderLayout:"fullscreen",
             

             dottedOverlay:"none",
             delay:9000,
             navigation: {
             },
             responsiveLevels:[1240,1024,778,480],
             visibilityLevels:[1240,1024,778,480],
             gridwidth:[1240,1024,778,480],
             gridheight:[868,768,960,720],
             lazyType:"none",
             parallax: {
                type:"scroll",
                origo:"slidercenter",
                speed:400,
                levels:[-10,-20,-30,-40,-50,30,35,40,45,46,47,48,49,65,75,55],
                type:"scroll",
             },
             shadow:0,
             spinner:"off",
             autoHeight:"off",
             fullScreenAutoWidth:"off",
             fullScreenAlignForce:"off",
              fullScreenOffsetContainer:".header-v1",
             fullScreenOffset: "40px",
             disableProgressBar:"on",
             hideThumbsOnMobile:"off",
             hideSliderAtLimit:0,
             hideCaptionAtLimit:767,
             hideAllCaptionAtLilmit:767,
             debugMode:false,
             fallbacks: {
                simplifyAll:"off",
                disableFocusListener:false,
             }
             });
             }
             });   
    
    
    /* ==========================================================================
       // Skill Progress Bar
       ========================================================================== */
    
    
    
     var executed = false;
                   $('#ourskill1').waypoint(function() {
                    if (!executed) {
                      executed = true;
                         $('.progress .progress-bar').progressbar({
                            update: function(current_percentage, $this) {
                                $this.parent().parent().find(".update-h").html(current_percentage  + '%');
                            }
                          });
                      }
                  },{offset: 'bottom-in-view' });

    // Scroll To
    (function($){
                $(window).on("load",function(){
                   $("ul.navi-level-1 li a, #menu ul li a").mPageScroll2id({
                        highlightSelector:"ul.navi-level-1 li a",
                        forceSingleHighlight :"mPS2id-highlight",
                        offset: 50,
                        scrollSpeed:800,
                        scrollEasing: "easeInOutCubic"
                    });
                });
            })(jQuery);

    /* ==========================================================================
       // twitter
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