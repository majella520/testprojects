$(document).ready(function(){
	
	console.log('start your engines baby!');

	var slider = $(".carousel").lightSlider({
		item: 4,
		easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
		slideMargin: 60,
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