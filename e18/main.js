$(document).ready(function() {
    // run function on initial page load
	wordGuess();
});

function wordGuess() {
	var wordArray = ["are","acre","ace", "abide", "abate", "adore", "awe", "adhere", "attire", "able", "ache", "acne", "alone", "atone", "age", "aside", "algae", "agree", "apple", "aggrieve", "anodize", "ape"];
	var randomNumber = Math.floor(Math.random() * wordArray.length);
	console.log(randomNumber);
	var stripped = wordArray[randomNumber].toLowerCase();
	console.log(wordArray[randomNumber]);
	console.log(stripped);
	$('body').css('background-color', wordArray[randomNumber]);
	$('#submit').click(function() {
		var input = $('input').val();
		var guess = input.toLowerCase();
		console.log(guess);
		if (guess == stripped || guess == wordArray[randomNumber]) {
			$('h1').text(guess + ' is right!');
			$('input').val('');
			$('.button p').text('Play Again?');
			$('#submit').click(function() {
				location.reload(true);
			});
		} else  {
			$('h1').text(guess + ' is wrong');
			$('input').val('');
			$('.button p').text('Play Again?');
			$('#submit').click(function() {
				location.reload(true);
			});
		}
	});
	$(document).keypress(function(e){
			if(e.which == 13){ //Enter key pressed
					$('#submit').click();//Trigger button click event
			}
	});
}
