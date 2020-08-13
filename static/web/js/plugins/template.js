$( document ).ready(function() {"use strict";
    
    // <!-- Intializing Navigation Effect-->
       $('ul.navi-level-1 li').on('mouseenter', function(){
          $(this).children('ul.navi-level-2').addClass("open-navi-2 animated fadeInUp");
      });
      $('ul.navi-level-1 li').on('mouseleave', function(){
         $(this).children('ul.navi-level-2').removeClass("open-navi-2 animated fadeInUp");
      });

      $('ul.navi-level-2 li').on('mouseenter', function(){
          $(this).addClass("active");
          $(this).children('ul.navi-level-3').addClass("open-navi-3 animated fadeInUp");
      });
      $('ul.navi-level-2 li').on('mouseleave', function(){
         $(this).children('ul.navi-level-3').removeClass("open-navi-3 animated fadeInUp");
                 $(this).removeClass("active");
      });


    // <!-- Form Search Navi-->
    $('.btn-search-navi').on('click', function(event)
    {
        $('.search-popup').toggleClass("open-search-input animated fadeInUp");
        $('.btn-search-navi .fa-search').toggleClass("fa-remove");
        $('.btn-search-navi').toggleClass("active");
        return false;
    });

    

    /* 
   ColorBox
   ========================================================================== */
  //Examples of how to assign the Colorbox event to elements
  // $(".group1").colorbox({rel:'group1'});
  // $(".single-img-demo").colorbox();
  // $(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390});
  // $(".vimeo").colorbox({iframe:true, innerWidth:500, innerHeight:409});
    
    
  /* 
   Backtotop
   ========================================================================== */
  var offset = 450;
  var duration = 500;   
  $(window).on('scroll', function(){
       if ($(this).scrollTop() > offset) {
              $('#to-the-top').fadeIn(duration);
          } else {
              $('#to-the-top').fadeOut(duration);
          }
  });

  $('#to-the-top').on('click', function(event){
      event.preventDefault();
      $('html, body').animate({scrollTop: 0}, duration);
      return false;
  });



  /* 
    DebouncedResize Function
     ========================================================================== */

    (function ($) { 
      var $event = $.event, 
        $special, 
        resizeTimeout;
      
      
      $special = $event.special.debouncedresize = { 
        setup : function () { 
          $(this).on('resize', $special.handler);
        }, 
        teardown : function () { 
          $(this).off('resize', $special.handler);
        }, 
        handler : function (event, execAsap) { 
          var context = this, 
            args = arguments, 
            dispatch = function () { 
              event.type = 'debouncedresize';
              
              $event.dispatch.apply(context, args);
            };
          
          
          if (resizeTimeout) {
            clearTimeout(resizeTimeout);
          }
          
          
          execAsap ? dispatch() : resizeTimeout = setTimeout(dispatch, $special.threshold);
        }, 
        threshold : 150 
      };
    } )(jQuery);
  
    /* 
       Resize Reponsive Colorbox
       ========================================================================== */
    $(window).on('debouncedresize', function () { 
       
        
      } );

});

  /*Preload*/
  (function($) { "use strict";
      Royal_Preloader.config({
          mode:           'logo',
          logo:           'images/Demo/logo.png',
          timeout:       1,
          showInfo:       false,
          opacity:        1,
          background:     ['#000']
      });
  })(jQuery);