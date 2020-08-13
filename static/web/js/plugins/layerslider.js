$(document).ready(function(){
     
      // Calling LayerSlider on the target element
      jQuery("#layerslider").layerSlider({
      responsive: true,
      layersContainer: 1170,
      responsiveUnder:768,
      skin:'custom',
      skinsPath:'layerslider/skins/',
      navButtons:false,
      navStartStop:false,
    });

      // Calling LayerSlider on the target element
      jQuery("#layerslider3").layerSlider({
      responsive: true,
      layersContainer: 1170,
      skin:'fullwidth',
      skinsPath:'layerslider/skins/',
       responsiveUnder:1170,
    });



        
});