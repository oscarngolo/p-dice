var scores, roundScore, activePlayer, dice, gamePlaying;

function init() {
	scores = [0,0];
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;
	$('.dice').css("display", "none");
	$('#score-0').text('0');
	$('#score-1').text('0');
	$('#current-0').text('0');
	$('#current-1').text ('0');
	$('#name-0').text('Player A');
	$('#name-1').text('Player B');
	$('.player-0-panel').removeClass('winner');
	$('.player-1-panel').removeClass('winner');
	$('.player-0-panel').removeClass('active');
	$('.player-1-panel').removeClass('active');
	$('.player-0-panel').addClass('active');
}
function nextPlayer() {
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		roundScore = 0;
		$('#current-0').text('0');
		$('#current-1').text('0');

		$('.player-0-panel').toggleClass('active');
		$('.player-1-panel').toggleClass('active');

		$('.dice').css('display', 'none');
}

$(document).ready(function(){
	$('.btn-start').click(function(){
		$('#begin').hide();
		$('#home').show();
		init();
	});

	$('.btn-new').click(function(){
		init();
	});
	$('.btn-roll').click(function(){
		if (gamePlaying) {
			dice = Math.floor(Math.random()*6) + 1;


			if(dice !== 1) {
				roundScore += dice;
				$('#current-' + activePlayer).text(roundScore);
			}
			else {
				nextPlayer();
			}
		}

	});
	$('.btn-hold').click(function() {
		if (gamePlaying) {
			scores[activePlayer] += roundScore;
			$('#score-' + activePlayer).text(scores[activePlayer]);
			if (scores[activePlayer] >=40) {
				$('#name-' + activePlayer).text('Winner!');
	      $('.player-' + activePlayer + '-panel').addClass('winner');
				$('.player-' + activePlayer + '-panel').addClass('active');
				gamePlaying = false;
			}
			else {
				nextPlayer();
			}
		}

	});
})
