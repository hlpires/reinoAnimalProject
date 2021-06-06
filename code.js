
var $target = $('#servicos');
				
				
				var clock = setInterval(animeScroll,1000);
	
		function animeScroll() {
			var documentTop = $(document).scrollTop();
			
	
			$target.each(function(){
				var servicosTop = $('#servicos').offset().top;
				var visiteTop = $('#mapaDiv').offset().top;
				
				if (documentTop > servicosTop - 800) {
					$('.servicos').addClass('servicosAnime');
					
				
				} if(documentTop > visiteTop - 800 ){
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
