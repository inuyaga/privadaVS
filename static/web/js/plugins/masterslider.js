 $(document).ready(function(){
  "use strict";
        var slider = new MasterSlider();
         slider.setup('masterslider' , {
             width:1400,    // slider standard width
             height:580,   // slider standard height
             space:1,
             fullwidth:true,
             loop:true,
             preload:0,
             autoplay:true
        });
        // adds Arrows navigation control to the slider.
        slider.control('arrows');
        slider.control('timebar' , {insertTo:'#masterslider'});
        slider.control('bullets');

       $(document).ready(function() {
          slider.api.pause();
        }); 


 });