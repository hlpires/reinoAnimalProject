

/*function loadAll() {
  var x, i;
  x = document.getElementsByClassName("product");
  for (i = 0; i < x.length; i++) {
    w3AddClass(x[i], "show");
  }
}*/

$("form input:checkbox").on('change', function() {
  $("form input:checkbox").not(this).prop('checked', false);
 
});

var clock = setInterval(check,200)
function check(){
  var checkRacao = document.getElementById('racao').checked;
  var checkRoupas = document.getElementById('roupas').checked;
  var checkCasas= document.getElementById('casasCamas').checked;
  var checkArranhadores = document.getElementById('arranhadores').checked;
  var checkBrinquedos = document.getElementById('brinquedos').checked;
  
  let activeFilters = [];

  if (checkRacao) {
    $('.racao').show();
    $('.brinquedo').hide();
    $('.camaCasa').hide();
    $('.arranhador').hide();
    $('.roupa').hide();
    
  }
  if (checkRoupas) {
    $('.roupa').show();
    $('.brinquedo').hide();
    $('.camaCasa').hide();
    $('.arranhador').hide();
    $('.racao').hide();
    
  }
  if (checkCasas) {
    $('.camaCasa').show();
    $('.brinquedo').hide();
    $('.racao').hide();
    $('.arranhador').hide();
    $('.roupa').hide();
    
  }
  if (checkArranhadores) {
    $('.arranhador').show();
    $('.brinquedo').hide();
    $('.camaCasa').hide();
    $('.racao').hide();
    $('.roupa').hide();
    
  
  }
  if (checkBrinquedos) {
    $('.brinquedo').show();
    $('.racao').hide();
    $('.camaCasa').hide();
    $('.arranhador').hide();
    $('.roupa').hide();


   
    
  }
}

var bolsocheck = setInterval (increase,200);
function increase(){


jQuery('.racao').click(function(){
  $(this).data('clicked', true);
  });
jQuery('.camacasa').click(function(){
  $(this).data('clicked', true);
  });
jQuery('.brinquedo').click(function(){
  $(this).data('clicked', true);
  });
jQuery('.arranhador').click(function(){
  $(this).data('clicked', true);
  });
jQuery('.roupa').click(function(){
    $(this).data('clicked', true);
    });  

  if(jQuery('.racao').data('clicked')) {																	
		console.log('ok');
    $(".racao").css({"width": "900px", "height": "600px","margin-left": "0px",});
    $("#imgBox5").css({"margin-left": "100px","margin-top":"50px","max-width": "1050px","width":"200px","max-height": "550px","height":"250px"});
    $("#boxtext5").css({"margin-left": "110px","margin-top": "-130px", });
    $(".p2").css({"opacity": "1","width":"600px" });
    $("h3").css({"opacity": "0", });
    $("p1").css({"opacity": "0", });
    $("#imgwpBox").css({"opacity": "1","margin-left": "310px","margin-top": "-210px", });
    $('.brinquedo').hide();
    $('.camaCasa').hide();
    $('.arranhador').hide();
    $('.roupa').hide();
 

		}
    if(jQuery('.roupa').data('clicked')) {																	
      console.log('ok');
      $(".roupa").css({"width": "900px", "height": "600px","margin-left": "0px",});
      $("#imgBox").css({"margin-left": "50px",});
      $('.brinquedo').hide();
      $('.camaCasa').hide();
      $('.arranhador').hide();
      $('.racao').hide();
   
  
      }
      if(jQuery('camaCasa').data('clicked')) {																	
        console.log('ok');
        $(".camaCasa").css({"width": "900px", "height": "600px","margin-left": "0px",});
        $("#imgBox6").css({"margin-left": "50px",});
        $('.brinquedo').hide();
        $('.racao').hide();
        $('.arranhador').hide();
        $('.roupa').hide();
        
    
        }
        if(jQuery('arranhador').data('clicked')) {																	
          console.log('ok');
          $(".arranhador").css({"width": "900px", "height": "600px","margin-left": "0px",});
          $("#imgBox7").css({"margin-left": "50px",});
          $('.brinquedo').hide();
          $('.camaCasa').hide();
          $('.racao').hide();
          $('.roupa').hide();
          
      
          }
          if(jQuery('brinquedo').data('clicked')) {																	
            console.log('ok');
            $(".brinquedo").css({"width": "900px", "height": "600px","margin-left": "0px",});
            $("#imgBox8").css({"margin-left": "50px",});
            $('.racao').hide();
            $('.camaCasa').hide();
            $('.arranhador').hide();
            $('.roupa').hide();
          
        
            }
  }
  increase();