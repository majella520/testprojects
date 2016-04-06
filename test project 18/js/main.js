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

		// Get the modal
	var modal = document.getElementById('myModal');

	// Get the button that opens the modal
	var trigger = document.getElementsByClassName("trigger")[0];

	// Get the <span> element that closes the modal
	var close = document.getElementsByClassName("close")[0];

	// When the user clicks on the button, open the modal
	// console.log( trigger );
	// $.each( trigger, function(index, arrayItem ){
	// 	console.log(index+': '+arrayItem.style['backgroundImage']);
	// });

	trigger.onclick = function() {
	    modal.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	close.onclick = function() {
	    modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}

	console.log('you derr?');

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