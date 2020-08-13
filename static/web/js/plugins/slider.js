 $(document).ready(function(){
   // <!-- Intializing Slider-->
    jQuery("#slider-h1").revolution({
      sliderType:"standar",
      sliderLayout:"fullwidth",
      delay:6000,
      spinner:"off",
      disableProgressBar:"on",
      navigation: {
        arrows:{enable:true},  
        onHoverStop:"off"        
      },  
      lazyType:"smart",    
      responsiveLevels:[1240,1024,778,480],
      gridwidth:[1240,1024,778,480],
      gridheight:[600,600,500,400]  
    }); 
// =====================================================
 });


