
var $target = $('#servicos');
				
				offset = $(window).height() * 1/6+100;
	
		function animeScroll() {
			var documentTop = $(document).scrollTop();
			
	
			$target.each(function(){
				var itemTop = $('#servicos').offset().top;
				
				if (documentTop > itemTop - offset) {
					$('.servicos').addClass('servicosAnime');
				
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
