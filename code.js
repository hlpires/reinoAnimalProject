const menuItems = document.querySelectorAll('.menu a[href^="#"]');

	function getScrollTopByHref(element) {
		const id = element.getAttribute('href');
		return document.querySelector(id).offsetTop;
	}
	
	function scrollToPosition(to) {
	 
	  smoothScrollTo(0, to);
	}
	
	
	function scrollToIdOnClick(event) {
		event.preventDefault();
		const i=0;
		const j=0;
		const k=140;
		

		if(jQuery('#bServicos').data('clicked')) {																	
		var to = getScrollTopByHref(event.currentTarget)-i;
		scrollToPosition(to);

		}if(jQuery('#Localizacao').data('clicked')){
	
		
		var to = getScrollTopByHref(event.currentTarget)-j;
		console.log(j);
		scrollToPosition(to);
		
		}if(jQuery('#bFotos').data('clicked')){
		
		
		var to = getScrollTopByHref(event.currentTarget)-k;
		scrollToPosition(to);
		
		
		}if(jQuery('#bsobre').data('clicked')){
		
		
			var to = getScrollTopByHref(event.currentTarget)-k;
			scrollToPosition(to);
		}


}
	jQuery('#bServicos').click(function(){
		$(this).data('clicked', true);
	  });


	  jQuery('#Localizacao').click(function(){
		$(this).data('clicked', true);
	  });

	
	  jQuery('#bFotos').click(function(){
		$(this).data('clicked', true);
	  });

	  jQuery('#bsobre').click(function(){
		$(this).data('clicked', true);
	  });



	menuItems.forEach(item => {
		item.addEventListener('click', scrollToIdOnClick);
	});
	

	function smoothScrollTo(endX, endY, duration) {
	  const startX = window.scrollX || window.pageXOffset;
	  const startY = window.scrollY || window.pageYOffset;
	  const distanceX = endX - startX;
	  const distanceY = endY - startY;
	  const startTime = new Date().getTime();
	
	  duration = typeof duration !== 'undefined' ? duration : 1000;
	
	  
	  const easeInOutQuart = (time, from, distance, duration) => {
		if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
		return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
	  };
	
	  const timer = setInterval(() => {
		const time = new Date().getTime() - startTime;
		const newX = easeInOutQuart(time, startX, distanceX, duration);
		const newY = easeInOutQuart(time, startY, distanceY, duration);
		if (time >= duration) {
		  clearInterval(timer);
		}
		window.scroll(newX, newY);
	  }, 1000 / 60); // 60 fps
	};




	
	var clock = setInterval(tela,200);
	

function tela(){


	if($(window).width() < 1000 ){


		function animeScroll1() {
			
			$('.servicos').addClass('servicosAnime');
			$('.mapaDiv').addClass('mapaAnime');
			$('.imgSobre').addClass('sobreAnime');
			$('h20').addClass('sobreAnime');
			clearInterval(clock);
	
			
		}
		animeScroll1();
	}else{
		
		var $target = $('#servicos');
	
		function animeScroll() {
			var documentTop = $(document).scrollTop();
			
	
			$target.each(function(){
				var servicosTop = $('#servicos').offset().top;
				var visiteTop = $('#mapaDiv').offset().top;
				
				var sobreTop = $('#sobreDiv').offset().top;
			
				if (documentTop > servicosTop - 800) {
					$('.servicos').addClass('servicosAnime');
					
				
				} if(documentTop > visiteTop - 800 ){
					$('.mapaDiv').addClass('mapaAnime');
					
				}
			
				if(documentTop > sobreTop - 600 ){
					$('.imgSobre').addClass('sobreAnime');
					$('h20').addClass('sobreAnime');

				} 
			});
			
		}
		animeScroll();

	}
}
tela();





if($(window).width() >= 1000)
{
	$('#fotos').slick({
		dots:false,
		infinite: true,
		speed: 300,
		slidesToShow: 4,
		adaptiveHeight: true,
		autoplay:true,
		autoplaySpeed:1200,
		speed:1000
	  });
}else{
$('#fotos').slick({
  dots:false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  autoplay:true,
  autoplaySpeed:1000,
  speed:1000,
  lazyLoad:'ondemand'
  
});
}

function retardo (){
	$('.imageLoad').Lazy();

}

retardo();