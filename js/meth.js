$(document).ready(function(){
var tgl = 0;
$("#back").load("gen/blinks.html");

 $("#tog").click(function(){
	if(tgl===0){
		$("#fore").animate({left:"250px"});
		$("#head").animate({left:"250px"});
		tgl=1;
	}
	else{
		$("#fore").animate({left:"0px"});
		$("#head").animate({left:"0px"});
		tgl=0;
	}
});


 document.addEventListener("deviceready", onDeviceReady, false);


 function onDeviceReady(){
        // Register the event listener
        document.addEventListener("backbutton", onBackKeyDown, false);
    }

 function onBackKeyDown() {
 		if(tgl===1){
			$("#fore").animate({left:"0px"});
			$("#head").animate({left:"0px"});
			tgl=0;
		}
		else{
			window.location.href="index.html";
		}
    }


});
