const menuItems = document.querySelectorAll('.menu a[href^="#"]');

	function getScrollTopByHref(element) {
		const id = element.getAttribute('href');
		return document.querySelector(id).offsetTop;
	}
	
	function scrollToPosition(to) {
	 
	  smoothScrollTo(0, to);
	}
	/*var reseti = setInterval(scrollToIdOnClick,4000);*/
	
	function scrollToIdOnClick(event) {
		event.preventDefault();
		const i=188;
		const j=0;
		const k=140;
		

		if(jQuery('#bServicos').data('clicked')) {																	
		var to = getScrollTopByHref(event.currentTarget)-i;
		scrollToPosition(to);

		}if(jQuery('#Localizacao').data('clicked')){
	
		
		var ti = getScrollTopByHref(event.currentTarget)-j;
		console.log(j);
		scrollToPosition(ti);
		
		}if(jQuery('#bFotos').data('clicked')){
		
		
		var te = getScrollTopByHref(event.currentTarget)-k;
		scrollToPosition(te);
		
		
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




var $target = $('#servicos');
				
				
				var clock = setInterval(animeScroll,1000);
	
		function animeScroll() {
			var documentTop = $(document).scrollTop();
			
	
			$target.each(function(){
				var servicosTop = $('#servicos').offset().top;
				var visiteTop = $('#mapaDiv').offset().top;
				
				if (documentTop > servicosTop - 800) {
					$('.servicos').addClass('servicosAnime');
					
				
				} if(documentTop > visiteTop - 700 ){
					$('.mapaDiv').addClass('mapaAnime');
					clearInterval(clock);
				} 
			});
		}
animeScroll();


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
  autoplaySpeed:1200,
  speed:1000
});
}
