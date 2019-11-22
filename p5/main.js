$(document).ready(function(){
  colorChange ();

function colorChange (){
	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	    $(".tile1").css("background-color", '#' + randomColor);
	});
	$('.tile1').click(function() {
		if(clicked){
	    $('.tile').css('background-color', colorArray[Math.floor(Math.random() * colors.length)]);
});

});
