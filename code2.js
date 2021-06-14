

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
  /*if("form input:checkbox" = false){
    $('.brinquedo').show();
    $('.racao').show();
    $('.camaCasa').show();
    $('.arranhador').show();
    $('.roupa').show();
  }*/
}


/*
  //console.log(activeFilters);
  
  // get a list of the secondary level filters
  var checkCircle = document.getElementById('circle').checked;
  var checkSquare = document.getElementById('square').checked;
  let secondaryFilters = [];
  if (checkCircle) {
    secondaryFilters.push('circle');
  }
  if (checkSquare) {
    secondaryFilters.push('square');
  }
  
  //console.log(secondaryFilters);
  
  if (activeFilters.length == 0 && secondaryFilters.length == 0) {
    // load all
    filter([""], secondaryFilters);
  } else {
    filter(activeFilters, secondaryFilters);
  }
  
}

// Function to sort objects
function filter (primaryFilters, secondaryFilters) {
  var x, i;
  x = document.getElementsByClassName("object");
  document.getElementById("no-results").style.display = "none";
  
  if (primaryFilters.length == 0) {
    primaryFilters.push("");
  }
  
  for (i = 0; i < x.length; i++) {
    let matchesFilter = false;
    w3RemoveClass(x[i], "show");
    //console.log(x[i].className);
    for (var p in primaryFilters) {
      //console.log(primaryFilters[p]);
      if (secondaryFilters.length > 0 ) {
        for (var s in secondaryFilters) {
          //console.log(secondaryFilters[s]);
            if (x[i].className.indexOf(primaryFilters[p]) > -1 && x[i].className.indexOf(secondaryFilters[s]) > -1) matchesFilter=true;
        }
      } else {
        if (x[i].className.indexOf(primaryFilters[p]) > -1) matchesFilter=true;
      }
    }
    
    if (matchesFilter) {
      w3AddClass(x[i], "show");
      //console.log("Filter added to box #" + i);
    }
  }
  
  checkForNoMatches();
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

function checkForNoMatches() {
    var x = document.getElementsByClassName("show");
    console.log(x.length);
    if (x.length == 0) {
      document.getElementById("no-results").style.display = "block";
    }
}*/