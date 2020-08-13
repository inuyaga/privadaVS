$(document).ready(function(){ "use strict";
			  var blog2slider = $('.slider8').bxSlider({
			    mode: 'vertical',
			    auto:true,
			    slideWidth: 300,
			    minSlides: 2,
			    slideMargin: 10,
			    moveSlides: 1,
			    controls:false,
			    pager:false
			  });
			  $('.next-blog2').click(function(){
			      blog2slider.goToNextSlide();
			      return false;
			    });

			    $('.prev-blog2').click(function(){
			      blog2slider.goToPrevSlide();
			      return false;
			    });
			});