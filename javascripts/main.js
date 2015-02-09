console.log('This would be the main JS file.');
$(document).ready(function(){
$("#map").show();
$("#locateushide").show();
$("#locateus").hide();
$("#messageus").hide();
				if ($( document ).width()<500) {

				$('#enquiryform').hide();
				$("#map").hide();
				$("#locateushide").hide();
				$("#locateus").show();
				$("#messageus").show();
				} else{
				$('#enquiryform').show();
				}
				
				
				
				
				$(window).resize(function() {

				if ($(document).width() >= 500) {

				$('#enquiryform').show();
				$("#map").show();
				$("#locateushide").show();
				$("#locateus").hide();
				$("#messageus").hide();
				}

				});
				
				


$(".myh2").fitText(1,{ minFontSize: '20px', maxFontSize: '30px' });
$("#one").fitText();
$("#mytext").fitText(1.5,{ minFontSize: '10px', maxFontSize: '20px' });


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
