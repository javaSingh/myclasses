console.log('This would be the main JS file.');
$(document).ready(function(){
$("#map").show();
$("#locateus").hide();
$("#locateushide").show();
$("#locateushide").click(function(){
$("#map").toggle();
$("#locateus").toggle();
$("#locateushide").toggle();

  });
  
  $("#locateus").click(function(){
$("#map").toggle();
$("#locateus").toggle();
$("#locateushide").toggle();

});
  
  
});
