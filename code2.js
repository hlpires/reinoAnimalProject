

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

var myImage = document.getElementById("imgBox");

var imageArray = ["./IMG/roupas/roupa2.png","./IMG/produtos2.png","./IMG/roupas/roupas3.png","./IMG/roupas/roupas4.png","./IMG/roupas/roupas5.png"]
                 
                 
var imageIndex = 0;

var bolsocheck = setInterval (increase,200);
function increase(){


jQuery('.racao').click(function(){
  $(this).data('clicked', true);
  });
jQuery('.camaCasa').click(function(){
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
jQuery('.casa').click(function(){
      $(this).data('clicked', true);
      });  
if($(window).width() > 1000){
  if(jQuery('.racao').data('clicked')) {																	
		console.log('ok');
    $(".racao").css({"width": "550px", "height": "600px","margin-left": "60px","cursor": "auto"});
    $("#imgBox5").css({"margin-left": "50px","margin-top":"50px","max-width": "1050px","width":"150px","max-height": "450px","height":"200px","padding":"20px","box-shadow": "0 0 1px"});
    $("#boxtext5").css({"margin-left": "80px","margin-top": "-130px", });
    $(".roupa").css({"width": "550px", "height": "600px","margin-left": "60px","cursor": "auto"});
    $("#imgBox").css({"margin-left": "50px","margin-top":"50px","max-width": "1050px","width":"150px","max-height": "450px","height":"200px","padding":"20px","box-shadow": "0 0 1px"});
    $("#boxtext").css({"margin-left": "80px","margin-top": "-60px", });
    $(".camaCasa").css({"width": "550px", "height": "600px","margin-left": "60px","cursor": "auto"});
    $("#imgBox6").css({"margin-left": "50px","margin-top":"50px","max-width": "1050px","width":"150px","max-height": "450px","height":"200px","padding":"20px","box-shadow": "0 0 1px"});
    $("#boxtext6").css({"margin-left": "80px","margin-top": "-60px", });
    $(".arranhador").css({"width": "550px", "height": "600px","margin-left": "60px","cursor": "auto"});
    $("#imgBox7").css({"margin-left": "50px","margin-top":"50px","max-width": "1050px","width":"150px","max-height": "450px","height":"200px","padding":"20px","box-shadow": "0 0 1px"});
    $("#boxtext7").css({"margin-left": "80px","margin-top": "-60px", });
    $(".brinquedo").css({"width": "550px", "height": "600px","margin-left": "60px","cursor": "auto"});
    $("#imgBox8").css({"margin-left": "50px","margin-top":"50px","max-width": "1050px","width":"180px","max-height": "450px","height":"150px","padding":"20px","box-shadow": "0 0 1px"});
    $("#boxtext8").css({"margin-left": "80px","margin-top": "-60px", });
    $(".casa").css({"width": "550px", "height": "600px","margin-left": "60px","cursor": "auto"});
    $("#imgBox9").css({"margin-left": "50px","margin-top":"50px","max-width": "1050px","width":"150px","max-height": "450px","height":"200px","padding":"20px","box-shadow": "0 0 1px"});
    $("#boxtext9").css({"margin-left": "80px","margin-top": "-60px", });   
    $(".p2").css({"opacity": "1","width":"420px","margin-left": "-40px","margin-top": "-20px" });
    $("h3").css({"opacity": "0", });
    $("p1").css({"opacity": "0", });
    $(".imgwpBox").css({"opacity": "1","margin-left": "180px","margin-top": "-270px", });
    $('.casa').hide();
    $('.brinquedo').hide();
    $('.camaCasa').hide();
    $('.arranhador').hide();
    $('.roupa').hide();
    
    clearInterval(bolsocheck);
 

		}
  if(jQuery('.roupa').data('clicked')) {																	
      console.log('ok');
      $(".racao").css({"width": "550px", "height": "600px","margin-left": "60px","cursor": "auto"});
    $("#imgBox5").css({"margin-left": "50px","margin-top":"50px","max-width": "1050px","width":"150px","max-height": "450px","height":"200px","padding":"20px","box-shadow": "0 0 1px"});
    $("#boxtext5").css({"margin-left": "80px","margin-top": "-130px", });
    $(".roupa").css({"width": "550px", "height": "600px","margin-left": "60px","cursor": "auto"});
    $("#imgBox").css({"margin-left": "50px","margin-top":"50px","max-width": "1050px","width":"150px","max-height": "450px","height":"200px","padding":"20px","box-shadow": "0 0 1px"});
    $("#boxtext").css({"margin-left": "80px","margin-top": "-60px", });
    $(".camaCasa").css({"width": "550px", "height": "600px","margin-left": "60px","cursor": "auto"});
    $("#imgBox6").css({"margin-left": "50px","margin-top":"50px","max-width": "1050px","width":"150px","max-height": "450px","height":"200px","padding":"20px","box-shadow": "0 0 1px"});
    $("#boxtext6").css({"margin-left": "80px","margin-top": "-60px", });
    $(".arranhador").css({"width": "550px", "height": "600px","margin-left": "60px","cursor": "auto"});
    $("#imgBox7").css({"margin-left": "50px","margin-top":"50px","max-width": "1050px","width":"150px","max-height": "450px","height":"200px","padding":"20px","box-shadow": "0 0 1px"});
    $("#boxtext7").css({"margin-left": "80px","margin-top": "-60px", });
    $(".brinquedo").css({"width": "550px", "height": "600px","margin-left": "60px","cursor": "auto"});
    $("#imgBox8").css({"margin-left": "50px","margin-top":"50px","max-width": "1050px","width":"180px","max-height": "450px","height":"150px","padding":"20px","box-shadow": "0 0 1px"});
    $("#boxtext8").css({"margin-left": "80px","margin-top": "-60px", });
    $(".casa").css({"width": "550px", "height": "600px","margin-left": "60px","cursor": "auto"});
    $("#imgBox9").css({"margin-left": "50px","margin-top":"50px","max-width": "1050px","width":"150px","max-height": "450px","height":"200px","padding":"20px","box-shadow": "0 0 1px"});
    $("#boxtext9").css({"margin-left": "80px","margin-top": "-60px", });
      $(".p2").css({"opacity": "1","width":"420px","margin-left": "-40px","margin-top": "-20px" });
      $("h3").css({"opacity": "0", });
      $("p1").css({"opacity": "0", });
      
      $(".imgwpBox").css({"opacity": "1","margin-left": "180px","margin-top": "-300px" });
      $('.brinquedo').hide();
      $('.camaCasa').hide();
      $('.arranhador').hide();
      $('.racao').hide();
      $('.casa').hide();
      setInterval(changeR,2000); 

      clearInterval(bolsocheck);
      }
  if(jQuery('.camaCasa').data('clicked')) {																	
        console.log('ok');
        $(".racao").css({"width": "550px", "height": "600px","margin-left": "60px","cursor": "auto"});
    $("#imgBox5").css({"margin-left": "50px","margin-top":"50px","max-width": "1050px","width":"150px","max-height": "450px","height":"200px","padding":"20px","box-shadow": "0 0 1px"});
    $("#boxtext5").css({"margin-left": "80px","margin-top": "-130px", });
    $(".roupa").css({"width": "550px", "height": "600px","margin-left": "60px","cursor": "auto"});
    $("#imgBox").css({"margin-left": "50px","margin-top":"50px","max-width": "1050px","width":"150px","max-height": "450px","height":"200px","padding":"20px","box-shadow": "0 0 1px"});
    $("#boxtext").css({"margin-left": "80px","margin-top": "-60px", });
    $(".camaCasa").css({"width": "550px", "height": "600px","margin-left": "60px","cursor": "auto"});
    $("#imgBox6").css({"margin-left": "50px","margin-top":"50px","max-width": "1050px","width":"150px","max-height": "450px","height":"200px","padding":"20px","box-shadow": "0 0 1px"});
    $("#boxtext6").css({"margin-left": "80px","margin-top": "-60px", });
    $(".arranhador").css({"width": "550px", "height": "600px","margin-left": "60px","cursor": "auto"});
    $("#imgBox7").css({"margin-left": "50px","margin-top":"50px","max-width": "1050px","width":"150px","max-height": "450px","height":"200px","padding":"20px","box-shadow": "0 0 1px"});
    $("#boxtext7").css({"margin-left": "80px","margin-top": "-60px", });
    $(".brinquedo").css({"width": "550px", "height": "600px","margin-left": "60px","cursor": "auto"});
    $("#imgBox8").css({"margin-left": "50px","margin-top":"50px","max-width": "1050px","width":"180px","max-height": "450px","height":"150px","padding":"20px","box-shadow": "0 0 1px"});
    $("#boxtext8").css({"margin-left": "80px","margin-top": "-60px", });
    $(".casa").css({"width": "550px", "height": "600px","margin-left": "60px","cursor": "auto"});
    $("#imgBox9").css({"margin-left": "50px","margin-top":"50px","max-width": "1050px","width":"150px","max-height": "450px","height":"200px","padding":"20px","box-shadow": "0 0 1px"});
    $("#boxtext9").css({"margin-left": "80px","margin-top": "-60px", });
        $(".p2").css({"opacity": "1","width":"420px","margin-left": "-40px","margin-top": "-20px" });
        $("h3").css({"opacity": "0", });
        $("p1").css({"opacity": "0", });
        $(".imgwpBox").css({"opacity": "1","margin-left": "180px","margin-top": "-320px", });
        $('.brinquedo').hide();
        $('.racao').hide();
        $('.arranhador').hide();
        $('.roupa').hide();
        $('.casa').hide();
        clearInterval(bolsocheck);
    
        }
  if(jQuery('.arranhador').data('clicked')) {																	
          console.log('ok');
          $(".racao").css({"width": "550px", "height": "600px","margin-left": "60px","cursor": "auto"});
    $("#imgBox5").css({"margin-left": "50px","margin-top":"50px","max-width": "1050px","width":"150px","max-height": "450px","height":"200px","padding":"20px","box-shadow": "0 0 1px"});
    $("#boxtext5").css({"margin-left": "80px","margin-top": "-130px", });
    $(".roupa").css({"width": "550px", "height": "600px","margin-left": "60px","cursor": "auto"});
    $("#imgBox").css({"margin-left": "50px","margin-top":"50px","max-width": "1050px","width":"150px","max-height": "450px","height":"200px","padding":"20px","box-shadow": "0 0 1px"});
    $("#boxtext").css({"margin-left": "80px","margin-top": "-60px", });
    $(".camaCasa").css({"width": "550px", "height": "600px","margin-left": "60px","cursor": "auto"});
    $("#imgBox6").css({"margin-left": "50px","margin-top":"50px","max-width": "1050px","width":"150px","max-height": "450px","height":"200px","padding":"20px","box-shadow": "0 0 1px"});
    $("#boxtext6").css({"margin-left": "80px","margin-top": "-60px", });
    $(".arranhador").css({"width": "550px", "height": "600px","margin-left": "60px","cursor": "auto"});
    $("#imgBox7").css({"margin-left": "50px","margin-top":"50px","max-width": "1050px","width":"150px","max-height": "450px","height":"200px","padding":"20px","box-shadow": "0 0 1px"});
    $("#boxtext7").css({"margin-left": "80px","margin-top": "-60px", });
    $(".brinquedo").css({"width": "550px", "height": "600px","margin-left": "60px","cursor": "auto"});
    $("#imgBox8").css({"margin-left": "50px","margin-top":"50px","max-width": "1050px","width":"180px","max-height": "450px","height":"150px","padding":"20px","box-shadow": "0 0 1px"});
    $("#boxtext8").css({"margin-left": "80px","margin-top": "-60px", });
    $(".casa").css({"width": "550px", "height": "600px","margin-left": "60px","cursor": "auto"});
    $("#imgBox9").css({"margin-left": "50px","margin-top":"50px","max-width": "1050px","width":"150px","max-height": "450px","height":"200px","padding":"20px","box-shadow": "0 0 1px"});
    $("#boxtext9").css({"margin-left": "80px","margin-top": "-60px", });
          $(".p2").css({"opacity": "1","width":"420px","margin-left": "-40px","margin-top": "-20px" });
          $("h3").css({"opacity": "0", });
          $("p1").css({"opacity": "0", });
          $(".imgwpBox").css({"opacity": "1","margin-left": "180px","margin-top": "-290px", });
          $('.brinquedo').hide();
          $('.camaCasa').hide();
          $('.racao').hide();
          $('.roupa').hide();
          $('.casa').hide();
          clearInterval(bolsocheck);
      
          }
  if(jQuery('.brinquedo').data('clicked')) {																	
            console.log('ok');
            $(".racao").css({"width": "550px", "height": "600px","margin-left": "60px","cursor": "auto"});
    $("#imgBox5").css({"margin-left": "50px","margin-top":"50px","max-width": "1050px","width":"150px","max-height": "450px","height":"200px","padding":"20px","box-shadow": "0 0 1px"});
    $("#boxtext5").css({"margin-left": "80px","margin-top": "-130px", });
    $(".roupa").css({"width": "550px", "height": "600px","margin-left": "60px","cursor": "auto"});
    $("#imgBox").css({"margin-left": "50px","margin-top":"50px","max-width": "1050px","width":"150px","max-height": "450px","height":"200px","padding":"20px","box-shadow": "0 0 1px"});
    $("#boxtext").css({"margin-left": "80px","margin-top": "-60px", });
    $(".camaCasa").css({"width": "550px", "height": "600px","margin-left": "60px","cursor": "auto"});
    $("#imgBox6").css({"margin-left": "50px","margin-top":"50px","max-width": "1050px","width":"150px","max-height": "450px","height":"200px","padding":"20px","box-shadow": "0 0 1px"});
    $("#boxtext6").css({"margin-left": "80px","margin-top": "-60px", });
    $(".arranhador").css({"width": "550px", "height": "600px","margin-left": "60px","cursor": "auto"});
    $("#imgBox7").css({"margin-left": "50px","margin-top":"50px","max-width": "1050px","width":"150px","max-height": "450px","height":"200px","padding":"20px","box-shadow": "0 0 1px"});
    $("#boxtext7").css({"margin-left": "80px","margin-top": "-60px", });
    $(".brinquedo").css({"width": "550px", "height": "600px","margin-left": "60px","cursor": "auto"});
    $("#imgBox8").css({"margin-left": "50px","margin-top":"50px","max-width": "1050px","width":"180px","max-height": "450px","height":"150px","padding":"20px","box-shadow": "0 0 1px"});
    $("#boxtext8").css({"margin-left": "80px","margin-top": "-60px", });
    $(".casa").css({"width": "550px", "height": "600px","margin-left": "60px","cursor": "auto"});
    $("#imgBox9").css({"margin-left": "50px","margin-top":"50px","max-width": "1050px","width":"150px","max-height": "450px","height":"200px","padding":"20px","box-shadow": "0 0 1px"});
    $("#boxtext9").css({"margin-left": "80px","margin-top": "-60px", });
            $(".p2").css({"opacity": "1","width":"420px","margin-left": "-40px","margin-top": "-20px" });
            $("h3").css({"opacity": "0", });
            $("p1").css({"opacity": "0", });
            $(".imgwpBox").css({"opacity": "1","margin-left": "180px","margin-top": "-285px", });
            $('.racao').hide();
            $('.camaCasa').hide();
            $('.arranhador').hide();
            $('.roupa').hide();
            $('.casa').hide();
            setInterval(changeB,2000); 
            clearInterval(bolsocheck);
        
            }
  if(jQuery('.casa').data('clicked')) {																	
              console.log('ok');
              $(".racao").css({"width": "550px", "height": "600px","margin-left": "60px","cursor": "auto"});
    $("#imgBox5").css({"margin-left": "50px","margin-top":"50px","max-width": "1050px","width":"150px","max-height": "450px","height":"200px","padding":"20px","box-shadow": "0 0 1px"});
    $("#boxtext5").css({"margin-left": "80px","margin-top": "-130px", });
    $(".roupa").css({"width": "550px", "height": "600px","margin-left": "60px","cursor": "auto"});
    $("#imgBox").css({"margin-left": "50px","margin-top":"50px","max-width": "1050px","width":"150px","max-height": "450px","height":"200px","padding":"20px","box-shadow": "0 0 1px"});
    $("#boxtext").css({"margin-left": "80px","margin-top": "-60px", });
    $(".camaCasa").css({"width": "550px", "height": "600px","margin-left": "60px","cursor": "auto"});
    $("#imgBox6").css({"margin-left": "50px","margin-top":"50px","max-width": "1050px","width":"150px","max-height": "450px","height":"200px","padding":"20px","box-shadow": "0 0 1px"});
    $("#boxtext6").css({"margin-left": "80px","margin-top": "-60px", });
    $(".arranhador").css({"width": "550px", "height": "600px","margin-left": "60px","cursor": "auto"});
    $("#imgBox7").css({"margin-left": "50px","margin-top":"50px","max-width": "1050px","width":"150px","max-height": "450px","height":"200px","padding":"20px","box-shadow": "0 0 1px"});
    $("#boxtext7").css({"margin-left": "80px","margin-top": "-60px", });
    $(".brinquedo").css({"width": "550px", "height": "600px","margin-left": "60px","cursor": "auto"});
    $("#imgBox8").css({"margin-left": "50px","margin-top":"50px","max-width": "1050px","width":"180px","max-height": "450px","height":"150px","padding":"20px","box-shadow": "0 0 1px"});
    $("#boxtext8").css({"margin-left": "80px","margin-top": "-60px", });
    $(".casa").css({"width": "550px", "height": "600px","margin-left": "60px","cursor": "auto"});
    $("#imgBox9").css({"margin-left": "50px","margin-top":"50px","max-width": "1050px","width":"150px","max-height": "450px","height":"200px","padding":"20px","box-shadow": "0 0 1px"});
    $("#boxtext9").css({"margin-left": "80px","margin-top": "-60px", });
              $(".p2").css({"opacity": "1","width":"420px","margin-left": "-40px","margin-top": "-20px" });
              $("h3").css({"opacity": "0", });
              $("p1").css({"opacity": "0", });
              $(".imgwpBox").css({"opacity": "1","margin-left": "180px","margin-top": "-300px", });
              
              $('.racao').hide();
              $('.camaCasa').hide();
              $('.arranhador').hide();
              $('.roupa').hide();
              $('.brinquedo').hide();
              clearInterval(bolsocheck);          
              }
  }
}

 
  increase();

  var myImage = document.getElementById("imgBox");

  var imageArray = ["./IMG/roupas/roupa2.png","./IMG/produtos2.png","./IMG/roupas/roupas3.png","./IMG/roupas/roupas4.png","./IMG/roupas/roupas5.png"]
                   
                   
  var imageIndex = 0;
  
  function changeR() {
    myImage.setAttribute("src",imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex >= imageArray.length) {
      imageIndex = 0;
    }
  }
  
 
  var myImage1 = document.getElementById("imgBox8");

  var imageArray1 = ["./IMG/brinquedos/brinquedo.png","./IMG/brinquedos/brinquedo1.png","./IMG/produtos5.PNG"]
                   
                   
  var imageIndex1 = 0;
  
  function changeB() {
    myImage1.setAttribute("src",imageArray1[imageIndex1]);
    imageIndex1++;
    if (imageIndex1 >= imageArray1.length) {
      imageIndex1 = 0;
    }
  }
