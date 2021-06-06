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
		const to = getScrollTopByHref(event.currentTarget)-120;
		scrollToPosition(to);
		
	}

	
	function set(){
		if(jQuery('#servicos').data('clicked')) {
			scrollToldOnClick();
		}else if(jQuery('#visite-nos').data('clicked')){
			scrollToldOnClick1();
	
		}else if(jQuery('#bFotos').data('clicked')){
			scrollToldOnClick2();
	
	}
	
	}
set();


	menuItems.forEach(item => {
		item.addEventListener('click', scrollToIdOnClick);
	});
	

	function smoothScrollTo(endX, endY, duration) {
	  const startX = window.scrollX || window.pageXOffset;
	  const startY = window.scrollY || window.pageYOffset;
	  const distanceX = endX - startX;
	  const distanceY = endY - startY;
	  const startTime = new Date().getTime();
	
	  duration = typeof duration !== 'undefined' ? duration : 400;
	
	  
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

