
var $target = $('#servicos');
				
				
				var clock = setInterval(animeScroll,1000);
	
		function animeScroll() {
			var documentTop = $(document).scrollTop();
			
	
			$target.each(function(){
				var itemTop = $('#servicos').offset().top;
				console.log(itemTop);
				console.log(documentTop);
				if (documentTop > itemTop - 800) {
					$('.servicos').addClass('servicosAnime');
					clearInterval(clock);
				
				} else {
					
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
