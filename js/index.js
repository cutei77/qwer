	$(function(){
			$('.shoptop-in li').eq(0).mouseenter(function(){
			$('.shoptop-down').slideDown();
		})
		$('.shoptop-down').mouseleave(function(){
			$('.shoptop-down').slideUp();
		})	
		
		var swiper = new Swiper('.swiper-container', {
				pagination: '.swiper-pagination',
				paginationClickable: '.swiper-pagination',
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev',
				effect:'fade',
				loop:true,
				autoplay:'3000',
				
			})
	})
	