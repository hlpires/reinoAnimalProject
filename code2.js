

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