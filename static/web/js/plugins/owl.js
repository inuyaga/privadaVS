 $(document).ready(function(){
  "use strict";
        $("#owl-project").owlCarousel({
           
                autoPlay: false, //Set AutoPlay to 3 seconds
                items : 4,
                itemsDesktop      : [1199,4],
                itemsDesktopSmall     : [979,3],
                itemsTablet       : [768,2],
                itemsMobile       : [479,1],
                pagination:false,
                navigation:false,
            });
        var owlProject = $("#owl-project");
        // Custom Navigation Events

        $("body").on("click",".next-project",function(event){
          owlProject.trigger("owl.next");
        });
        $("body").on("click",".prev-project",function(event){
          owlProject.trigger("owl.prev");
        });

/* 
   Testimonial 1
   ========================================================================== */
$("#owl-testimonial-1").owlCarousel({
           
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
/* 
   Testimonial 2
   ========================================================================== */
$("#owl-testimonial-avatar").owlCarousel({
           
                autoPlay: false, //Set AutoPlay to 3 seconds
                items : 1,
                itemsDesktop      : [1199,1],
                itemsDesktopSmall     : [979,1],
                itemsTablet       : [768,1],
                itemsMobile       : [479,1],
                pagination:false,
                navigation:false,
                transitionStyle : "fade"
            });
var owlTestimonial4 = $("#owl-testimonial-avatar");
        // Custom Navigation Events

        $("body").on("click",".next-testimonia4",function(event){
          owlTestimonial4.trigger("owl.next");
        });
        $("body").on("click",".prev-testimonia4",function(event){
          owlTestimonial4.trigger("owl.prev");
        });

/* 
   Testimonial 3
   ========================================================================== */
$("#owl-testimonial-3").owlCarousel({
           
                autoPlay: false , //Set AutoPlay to 3 seconds
                items : 1,
                itemsDesktop      : [1199,1],
                itemsDesktopSmall     : [979,1],
                itemsTablet       : [768,1],
                itemsMobile       : [479,1],
                pagination:false,
                navigation:false,
                transitionStyle : "fade"
            });
var owlTestimonial3 = $("#owl-testimonial-3");
        // Custom Navigation Events

        $("body").on("click",".next-testimonia3",function(event){
          owlTestimonial3.trigger("owl.next");
        });
        $("body").on("click",".prev-testimonia3",function(event){
          owlTestimonial3.trigger("owl.prev");
        });

/* ==========================================================================
   Testimonial Sync
   ========================================================================== */
var owlTestimonial2 = $("#sync3");
        // Custom Navigation Events
        $("body").on("click",".next-testimonia2",function(event){
          owlTestimonial2.trigger("owl.next");
        });
        $("body").on("click",".prev-testimonia2",function(event){
          owlTestimonial2.trigger("owl.prev");
        });

        $(document).ready(function() {
          var sync1 = $("#sync3");
          var sync2 = $("#sync4");
          sync1.owlCarousel({
            singleItem : true,
            slideSpeed : 1000,
            navigation: false,
            pagination:false,
            transitionStyle : "fade",
            afterAction : syncPosition,
            responsiveRefreshRate : 200,
            afterInit : progressBar,
            afterMove : moved,
            startDragging : pauseOnDragging,
            
          });
          
          var time = 5; // time in seconds

          var $progressBar,
              $bar, 
              $elem, 
              isPause, 
              tick,
              percentTime;

         
            //Init progressBar where elem is $("#owl-demo")
            function progressBar(elem){
              $elem = elem;
              //build progress bar elements
              buildProgressBar();
              //start counting
              start();
            }
         
            //create div#progressBar and div#bar then prepend to $("#owl-demo")
            function buildProgressBar(){
              $progressBar = $("<div>",{
                id:"progressBar"
              });
              $bar = $("<div>",{
                id:"bar"
              });
              $progressBar.append($bar).prependTo($elem);
            }
         
            function start() {
              //reset timer
              percentTime = 0;
              isPause = false;
              //run interval every 0.01 second
              tick = setInterval(interval, 10);
            };
         
            function interval() {
              if(isPause === false){
                percentTime += 1 / time;
                $bar.css({
                   width: percentTime+"%"
                 });
                //if percentTime is equal or greater than 100
                if(percentTime >= 100){
                  //slide to next item 
                  $elem.trigger('owl.next')
                }
              }
            }
         
            //pause while dragging 
            function pauseOnDragging(){
              isPause = true;
            }
         
            //moved callback
            function moved(){
              //clear interval
              clearTimeout(tick);
              //start again
              start();
            }

          sync2.owlCarousel({
            items : 5,
            itemsDesktop      : [1199,5],
            itemsDesktopSmall     : [979,4],
            itemsTablet       : [768,3],
            itemsMobile       : [479,2],
            pagination:false,
            responsiveRefreshRate : 100,
            afterInit : function(el){
              el.find(".owl-item").eq(0).addClass("synced");
            }
          });
         
          function syncPosition(el){
            var current = this.currentItem;
            $("#sync4")
              .find(".owl-item")
              .removeClass("synced")
              .eq(current)
              .addClass("synced")
            if($("#sync4").data("owlCarousel") !== undefined){
              center(current)
            }
          }
         
          $("#sync4").on("click", ".owl-item", function(e){
            e.preventDefault();
            var number = $(this).data("owlItem");
            sync1.trigger("owl.goTo",number);
          });
         
          function center(number){
            var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
            var num = number;
            var found = false;
            for(var i in sync2visible){
              if(num === sync2visible[i]){
                var found = true;
              }
            }
         
            if(found===false){
              if(num>sync2visible[sync2visible.length-1]){
                sync2.trigger("owl.goTo", num - sync2visible.length+2)
              }else{
                if(num - 1 === -1){
                  num = 0;
                }
                sync2.trigger("owl.goTo", num);
              }
            } else if(num === sync2visible[sync2visible.length-1]){
              sync2.trigger("owl.goTo", sync2visible[1])
            } else if(num === sync2visible[0]){
              sync2.trigger("owl.goTo", num-1)
            }
            
          }
         
        }); 


/* ==========================================================================
   Reward
   ========================================================================== */
$("#owl-reward").owlCarousel({
           
                autoPlay: false , //Set AutoPlay to 3 seconds
                items : 1,
                itemsDesktop      : [1199,1],
                itemsDesktopSmall     : [979,1],
                itemsTablet       : [768,1],
                itemsMobile       : [479,1],
                pagination:false,
                navigation:false,
                transitionStyle : "fade"
            });
var owlReward = $("#owl-reward");
        // Custom Navigation Events

        $("body").on("click",".next-reward",function(event){
          owlReward.trigger("owl.next");
        });
        $("body").on("click",".prev-reward",function(event){
          owlReward.trigger("owl.prev");
        });

/* ==========================================================================
   Owl Blog Landing
   ========================================================================== */
$("#owl-blog-landing").owlCarousel({
           
                autoPlay: false , //Set AutoPlay to 3 seconds
                items : 3,
                itemsDesktop      : [1199,3],
                itemsDesktopSmall     : [979,3],
                itemsTablet       : [768,2],
                itemsMobile       : [479,1],
                pagination:true,
                navigation:false,
            });
/* 
   Partner
   ========================================================================== */
$("#owl-partner").owlCarousel({
   
        autoPlay: true, //Set AutoPlay to 3 seconds
        items : 5,
        itemsDesktop      : [1199,4],
        itemsDesktopSmall     : [979,3],
        itemsTablet       : [768,2],
        itemsMobile       : [479,1],
        pagination:false,
        navigation:false,
    });
var owlPartner = $("#owl-partner");
// Custom Navigation Events

$("body").on("click",".next-partner",function(event){
  owlPartner.trigger("owl.next");
});
$("body").on("click",".prev-partner",function(event){
  owlPartner.trigger("owl.prev");
});

/* 
   Recent Blog
   ========================================================================== */
$("#owl-blog").owlCarousel({
   
        autoPlay: true, //Set AutoPlay to 3 seconds
        items : 1,
        itemsDesktop      : [1199,1],
        itemsDesktopSmall     : [979,1],
        itemsTablet       : [768,1],
        itemsMobile       : [479,1],
        pagination:false,
        navigation:false,
    });
var owlBlog = $("#owl-blog");
// Custom Navigation Events

$("body").on("click",".next-blog",function(event){
  owlBlog.trigger("owl.next");
});
$("body").on("click",".prev-blog",function(event){
  owlBlog.trigger("owl.prev");
});

/* 
   Core Feature
   ========================================================================== */
$("#owl-core-feature").owlCarousel({
           
                autoPlay: false, //Set AutoPlay to 3 seconds
                items : 3,
                itemsDesktop      : [1199,3],
                itemsDesktopSmall     : [979,3],
                itemsTablet       : [768,2],
                itemsMobile       : [479,1],
                pagination:false,
                navigation:false,
            });
        var owlCoreFeature = $("#owl-core-feature");
        // Custom Navigation Events

        $("body").on("click",".next-core-feature",function(event){
          owlCoreFeature.trigger("owl.next");
        });
        $("body").on("click",".prev-core-feature",function(event){
          owlCoreFeature.trigger("owl.prev");
        });

/* ==========================================================================
   Our Team
   ========================================================================== */
   $("#owl-team").owlCarousel({
           
                autoPlay: false, //Set AutoPlay to 3 seconds
                items : 4,
                itemsDesktop      : [1199,4],
                itemsDesktopSmall     : [979,3],
                itemsTablet       : [768,2],
                itemsMobile       : [479,1],
                pagination:true,
                navigation:false,
            });
        var owlTeam = $("#owl-team");
        // Custom Navigation Events

        $("body").on("click",".next-team",function(event){
          owlTeam.trigger("owl.next");
        });
        $("body").on("click",".prev-team",function(event){
          owlTeam.trigger("owl.prev");
        });

/* ==========================================================================
   Blog Gallery Post Type
   ========================================================================== */
  $("#owl-gallery-blog-post").owlCarousel({
           
                autoPlay: true, //Set AutoPlay to 3 seconds
                items : 1,
                itemsDesktop      : [1199,1],
                itemsDesktopSmall     : [979,1],
                itemsTablet       : [768,1],
                itemsMobile       : [479,1],
                pagination:false,
                navigation:false,
                transitionStyle : "fade"
            });
        var owlGalleryBlogPost = $("#owl-gallery-blog-post");
        // Custom Navigation Events

        $("body").on("click",".next-image",function(event){
          owlGalleryBlogPost.trigger("owl.next");
        });
        $("body").on("click",".prev-image",function(event){
          owlGalleryBlogPost.trigger("owl.prev");
        });
/* ==========================================================================
   Relate Blog
   ========================================================================== */
$("#owl-relate-blog").owlCarousel({
           
            autoPlay: true, //Set AutoPlay to 3 seconds
            items : 3,
            itemsDesktop      : [1199,3],
            itemsDesktopSmall     : [979,3],
            itemsTablet       : [768,2],
            itemsMobile       : [479,1],
            pagination:false,
            navigation:false,
        });
        var owlRelateBlog = $("#owl-relate-blog");
        // Custom Navigation Events

        $("body").on("click",".prev-relate-blog",function(event){
          owlRelateBlog.trigger("owl.next");
        });
        $("body").on("click",".next-relate-blog",function(event){
          owlRelateBlog.trigger("owl.prev");
        });

/* ==========================================================================
   Portfolio Gallery Post Type
   ========================================================================== */
  $("#owl-gallery-portfolio-post").owlCarousel({
           
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
        var owlGalleryPortfolioPost = $("#owl-gallery-portfolio-post");
        // Custom Navigation Events

        $("body").on("click",".next-portfolio-image",function(event){
          owlGalleryPortfolioPost.trigger("owl.next");
        });
        $("body").on("click",".prev-portfolio-image",function(event){
          owlGalleryPortfolioPost.trigger("owl.prev");
        });

/* ==========================================================================
   Relate Blog
   ========================================================================== */
$("#owl-relate-portfolio").owlCarousel({
           
            autoPlay: true, //Set AutoPlay to 3 seconds
            items : 3,
            itemsDesktop      : [1199,3],
            itemsDesktopSmall     : [979,3],
            itemsTablet       : [768,2],
            itemsMobile       : [479,1],
            pagination:false,
            navigation:false,
        });
        var owlRelatePortfolio = $("#owl-relate-portfolio");
        // Custom Navigation Events

        $("body").on("click",".prev-relate-portfolio",function(event){
          owlRelatePortfolio.trigger("owl.next");
        });
        $("body").on("click",".next-relate-portfolio",function(event){
          owlRelatePortfolio.trigger("owl.prev");
        });

// owl Skill Single Team
$("#owl-skill").owlCarousel({
           
                autoPlay: false , //Set AutoPlay to 3 seconds
                items : 5,
                itemsDesktop      : [1199,5],
                itemsDesktopSmall     : [979,4],
                itemsTablet       : [768,4],
                itemsMobile       : [479,3],
                pagination:false,
                navigation:false,
            });
var owlSkill = $("#owl-skill");
        // Custom Navigation Events

        $("body").on("click",".next-skill",function(event){
          owlSkill.trigger("owl.next");
        });
        $("body").on("click",".prev-skill",function(event){
          owlSkill.trigger("owl.prev");
        });

 });