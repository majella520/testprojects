$(document).ready(function(){
	
	console.log('start your engines baby!');

	var slider = $(".carousel").lightSlider({
		item: 4,
		slideMove: 2,
		easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
		slideMargin: 60,
		prevHtml: '<span class="icon fontawesome-arrow-left"></span',
        nextHtml: '<span class="icon fontawesome-arrow-right"></span',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					item: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					item: 1
				}
			}
		]
	});

	$('.highlight').each(function(i){
		console.log(i);
		var text = $(this).text();
		$(this).html('<span>'+text+'</span>');
	});

	/* Open */
	function openNav() {
	    document.getElementById("myNav").style.height = "100%";
	}

	/* Close */
	function closeNav() {
	    document.getElementById("myNav").style.height = "0%";
	}

	//$('.highlight').html('<span>bla bla bla</span>');

	// $(window).on('resize', function(){

	// 	var windowWidth = $(window).width();

	// 	if ( windowWidth < 768 ) {

	// 		console.log('mobile yo');

	// 		if ( !slider ) {

	// 			console.log('build carousel yo');

	// 			slider = $(".carousel").lightSlider({
	// 				item: 4,
	// 				slideMargin: 60,
	// 				responsive: [
	// 					{
	// 						breakpoint: 768,
	// 						settings: {
	// 							item: 2
	// 						}
	// 					},
	// 					{
	// 						breakpoint: 480,
	// 						settings: {
	// 							item: 1
	// 						}
	// 					}
	// 				]
	// 			});
	// 		}


	// 	} else {
	// 		console.log('desktop yo');
	// 		slider.destroy();
	// 	}

	// });

});