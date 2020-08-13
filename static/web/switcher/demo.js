// --------------------------------------------------
// demo.js by ThemeModern 2016
// --------------------------------------------------

jQuery(document).ready(function($){
	
	
	jQuery(".color1").click(function(){
		jQuery("#colors").attr("href", "switcher/colors/set1.css");
	});
	
	jQuery(".color2").click(function(){
		jQuery("#colors").attr("href", "switcher/colors/set2.css");
	});
	
	jQuery(".color3").click(function(){
		jQuery("#colors").attr("href", "switcher/colors/set3.css");
	});
	
	jQuery(".color4").click(function(){
		jQuery("#colors").attr("href", "switcher/colors/set4.css");
	});
	
	jQuery(".color5").click(function(){
		jQuery("#colors").attr("href", "switcher/colors/set5.css");
	});
	
	jQuery(".color6").click(function(){
		jQuery("#colors").attr("href", "switcher/colors/set6.css");
	});
	
	
	jQuery(".custom-show").hide();
	
	jQuery(".custom-close").click(function(){
		jQuery(this).hide();
		jQuery(".custom-show").show();
		jQuery('#switcher').animate({'margin-left': '0px'},'fast');
	});
  	
	jQuery(".custom-show").click(function(){
		jQuery(this).hide();
		jQuery(".custom-close").show();
		jQuery('#switcher').animate({'margin-left': '-300px'},'fast');
	});


	jQuery('#de-menu').on('change', function() {
		$('#main-navi').removeClass('no-seperator');
		$('#main-navi').removeClass('line-seperator');
		v = this.value
		if(v=='opt-1'){
			$('#main-navi').removeClass('no-seperator');
			$('#main-navi').removeClass('line-seperator');
		}else if(v=='opt-2'){
			$('#main-navi').addClass('line-seperator');
		}
		else if(v=='opt-0'){
			$('#main-navi').addClass('no-seperator');
		}
	});


		jQuery('#de-layout').on('change', function() {
		v = this.value
		if(v=='opt-1'){
			$('#page').removeClass('boxed');
		}else if(v=='opt-2'){
			$('#page').addClass('boxed');
			$('body').css('background-image', 'url(switcher/images/patern01.png)');
		}
	});

		jQuery('#tm-boxed-bg li').click(function(){		
		if($('#de-layout option:selected').text()!="Boxed"){
			alert('Please select boxed layout first.');
		}			
	});
		$('#switcher ul [class*="bg"]').click(function() {
		$('body').css('background-image', 'url(switcher/images/patern' + $(this).attr('data-value') + '.png)');
	});

		


	$('.demo-homepage > li ').hover(
		function(){ $('.popup-demo-homepage',this).addClass('animated fadeInUp') },
        function(){ $('.popup-demo-homepage',this).removeClass('animated fadeInUp') }
    )
});

