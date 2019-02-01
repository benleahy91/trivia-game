var seconds = 30;
var question = "";
var answerOne = "";
var aswerTwo = "";
var answerThree = "";
var answerFour = "";
var correctAnswer = "";
var correctCounter = 0;
var wrongCounter = 0;
var trumpRight = "";
var trumpWrong = "";

function startGame (e) {

	$(".start-box").remove();
	$(".answers").html("<div class= 'answer-one offset-md-3'> </div> <div class= 'answer-two offset-md-3'> </div> <div class= 'answer-three offset-md-3'> </div> <div class= 'answer-four offset-md-3'> </div>");
	questionOne();
}

function questionOne (e) {

	question = "What was Dorothy's last name in The Wizard of OZ?";
	answerOne = "A: Doll";
	answerTwo = "B: Guild";
	answerThree = "C: Wolf";
	answerFour = "D: Gale";
	correctAnswer = "The correct Answer was: D: Gale";
	trumpRight = "<img src='assets/images/trump-twothumbs.gif' id='bg' alt=''>";
	trumpWrong = "<img src='assets/images/trump-wrongtwo.gif' id='bg' alt=''>";
	seconds = 30;

	var countdownTimer = setInterval(function() {
		seconds--;
		$(".time-remaining").text(seconds + " seconds remaining");
		if (seconds <= 0) {
			clearTimeout(countdownTimer);
			$(".answers").text(correctAnswer);
			$(".gif").html("<img src='assets/images/snail.gif' id='bg' alt=''>");
			wrongCounter++;
			setTimeout(function() {
				questionTwo();
			}, 5000);
		};
	}, 1000);

	$(".time-remaining").text(seconds + " seconds remaining");
	$(".question").text(question);
	$(".answer-one").text(answerOne);
	$(".answer-two").text(answerTwo);
	$(".answer-three").text(answerThree);
	$(".answer-four").text(answerFour);

	$(".answer-one").on("click", function() {
		clearInterval(countdownTimer);
		$(".answers").text(correctAnswer);
		$(".gif").html(trumpWrong);
		setTimeout(function() {
			questionTwo();
		}, 5000);
		wrongCounter++;
	});	

	$(".answer-two").on("click", function() {
		clearInterval(countdownTimer);
		$(".answers").text(correctAnswer);
		$(".gif").html(trumpWrong);
		wrongCounter++;
		setTimeout(function() {
			questionTwo();
		}, 5000);
	});

	$(".answer-three").on("click", function() {
		clearInterval(countdownTimer)
		$(".answers").text(correctAnswer);
		$(".gif").html(trumpWrong);
		wrongCounter++;
		setTimeout(function() {
			questionTwo();
		}, 5000);
	});

	$(".answer-four").on("click", function() {
		clearInterval(countdownTimer);
		$(".answers").text("Correct");
		$(".gif").html(trumpRight);
		correctCounter++;
		setTimeout(function() {
			questionTwo();
		}, 5000);
	});
};

function questionTwo (e) {

	question = "In Sigourney Weaver's movie Alien (1979), What was the name of their spacecraft?";
	answerOne = "A: Argonaut";
	answerTwo = "B: Nostromo";
	answerThree = "C: Nirvana";
	answerFour = "D: Hyperion";
	correctAnswer = "The correct Answer was: B: Nostromo";
	trumpRight = "<img src='assets/images/trump-dealin.gif' id='bg' alt=''>";
	trumpWrong = "<img src='assets/images/trump-fakenews.gif' id='bg' alt=''>";
	seconds = 30;

	countdownTimer = setInterval(function() {
		seconds--;
		$(".time-remaining").text(seconds + " seconds remaining");
		if (seconds <= 0) {
			clearTimeout(countdownTimer);
			$(".answers").text(correctAnswer);
			$(".gif").html("<img src='assets/images/snail.gif' id='bg' alt=''>");
			wrongCounter++;
			setTimeout(function() {
				questionThree();
			}, 5000);
		};
	}, 1000);

	$(".time-remaining").text(seconds + " seconds remaining");
	$(".answers").html("<div class= 'answer-one offset-md-3'> </div> <div class= 'answer-two offset-md-3'> </div> <div class= 'answer-three offset-md-3'> </div> <div class= 'answer-four offset-md-3'> </div>");
	$(".question").text(question);
	$(".answer-one").text(answerOne);
	$(".answer-two").text(answerTwo);
	$(".answer-three").text(answerThree);
	$(".answer-four").text(answerFour);
	$(".gif").text("");

	$(".answer-one").on("click", function() {
		clearInterval(countdownTimer);
		$(".answers").text(correctAnswer);
		$(".gif").html(trumpWrong);
		wrongCounter++;
		setTimeout(function() {
			questionThree();
		}, 5000);
	});	

	$(".answer-two").on("click", function() {
		clearInterval(countdownTimer);
		$(".answers").text("Correct");
		$(".gif").html(trumpRight);
		correctCounter++;
		setTimeout(function() {
			questionThree();
		}, 5000);
	});

	$(".answer-three").on("click", function() {
		clearInterval(countdownTimer);
		$(".answers").text(correctAnswer);
		$(".gif").html(trumpWrong);
		wrongCounter++;
		setTimeout(function() {
			questionThree();
		}, 5000);
	});	

	$(".answer-four").on("click", function() {
		clearInterval(countdownTimer);
		$(".answers").text(correctAnswer);
		$(".gif").html(trumpWrong);
		wrongCounter++;
		setTimeout(function() {
			questionThree();
		}, 5000);
	});
};

function questionThree (e) {

	question = "What vehicle did the Jawas drive in Star Wars?";
	answerOne = "A: Sandcrawler";
	answerTwo = "B: Landspeeder";
	answerThree = "C: Minicrawler";
	answerFour = "D: Driller machine";
	correctAnswer = "The correct answer was: A: Sandcrawler";
	trumpRight = "<img src='assets/images/trump-rad.gif' id='bg' alt=''>";
	trumpWrong = "<img src='assets/images/trump-wedgie.gif' id='bg' alt=''>";
	seconds = 30;

	countdownTimer = setInterval(function() {
		seconds--;
		$(".time-remaining").text(seconds + " seconds remaining");
		if (seconds <= 0) {
			clearTimeout(countdownTimer);
			$(".answers").html(correctAnswer);
			$(".gif").html("<img src='assets/images/snail.gif' id='bg' alt=''>");
			wrongCounter++;
			setTimeout(function() {
				questionFour();
			}, 5000);
		};
	}, 1000);

	$(".time-remaining").text(seconds + " seconds remaining");
	$(".answers").html("<div class= 'answer-one offset-md-3'> </div> <div class= 'answer-two offset-md-3'> </div> <div class= 'answer-three offset-md-3'> </div> <div class= 'answer-four offset-md-3'> </div>");
	$(".question").text(question);
	$(".answer-one").text(answerOne);
	$(".answer-two").text(answerTwo);
	$(".answer-three").text(answerThree);
	$(".answer-four").text(answerFour);
	$(".gif").text("");

	$(".answer-one").on("click", function() {
		clearInterval(countdownTimer);
		$(".answers").text("Correct");
		$(".gif").html(trumpRight);
		correctCounter++;
		setTimeout(function() {
			questionFour();
		}, 5000);
	});	

	$(".answer-two").on("click", function() {
		clearInterval(countdownTimer);
		$(".answers").text(correctAnswer);
		$(".gif").html(trumpWrong);
		wrongCounter++;
		setTimeout(function() {
			questionFour();
		}, 5000);
	});

	$(".answer-three").on("click", function() {
		clearInterval(countdownTimer);
		$(".answers").text(correctAnswer);
		$(".gif").html(trumpWrong);
		wrongCounter++;
		setTimeout(function() {
			questionFour();
		}, 5000);
	});	

	$(".answer-four").on("click", function() {
		clearInterval(countdownTimer);
		$(".answers").text(correctAnswer);
		$(".gif").html(trumpWrong);
		wrongCounter++;
		setTimeout(function() {
			questionFour();
		}, 5000);
	});
};

function questionFour (e) {

	question = "Which character has the most on-screen kills in the Lord of the Rings trilogy?";
	answerOne = "A: Aragorn";
	answerTwo = "B: Gimli";
	answerThree = "C: Legolas";
	answerFour = "D: Boromir";
	correctAnswer = "The correct Answer was: C: Legolas";
	trumpRight = "<img src='assets/images/trump-matrix.gif' id='bg' alt=''>";
	trumpWrong = "<img src='assets/images/trump-shock.gif' id='bg' alt=''>";
	seconds = 30;

	var countdownTimer = setInterval(function() {
		seconds--;
		$(".time-remaining").text(seconds + " seconds remaining");
		if (seconds <= 0) {
			clearTimeout(countdownTimer);
			$(".answers").text(correctAnswer);
			$(".gif").html("<img src='assets/images/snail.gif' id='bg' alt=''>");
			wrongCounter++;
			setTimeout(function() {
				questionFive();
			}, 5000);
		};
	}, 1000);

	$(".time-remaining").text(seconds + " seconds remaining");
	$(".answers").html("<div class= 'answer-one offset-md-3'> </div> <div class= 'answer-two offset-md-3'> </div> <div class= 'answer-three offset-md-3'> </div> <div class= 'answer-four offset-md-3'> </div>");
	$(".question").text(question);
	$(".answer-one").text(answerOne);
	$(".answer-two").text(answerTwo);
	$(".answer-three").text(answerThree);
	$(".answer-four").text(answerFour);
	$(".gif").text("");

	$(".answer-one").on("click", function() {
		clearInterval(countdownTimer);
		$(".answers").text(correctAnswer);
		$(".gif").html(trumpWrong);
		wrongCounter++;
		setTimeout(function() {
			questionFive();
		}, 5000);
	});	

	$(".answer-two").on("click", function() {
		clearInterval(countdownTimer);
		$(".answers").text(correctAnswer);
		$(".gif").html(trumpWrong);
		wrongCounter++;
		setTimeout(function() {
			questionFive();
		}, 5000);
	});

	$(".answer-three").on("click", function() {
		clearInterval(countdownTimer);
		$(".answers").text("Correct");
		$(".gif").html(trumpRight);
		correctCounter++;
		setTimeout(function() {
			questionFive();
		}, 5000);
	});	

	$(".answer-four").on("click", function() {
		clearInterval(countdownTimer);
		$(".answers").text(correctAnswer);
		$(".gif").html(trumpWrong);
		wrongCounter++;
		setTimeout(function() {
			questionFive();
		}, 5000);
	});
};

function questionFive (e) {

	question = "Which famous actor was offered and turned down the part of Han Solo in the original Star Wars film?";
	answerOne = "A: Arnold Schwarzenegger";
	answerTwo = "B: Al Pacino";
	answerThree = "C: Bruce Willis";
	answerFour = "D: Sean Connery";
	correctAnswer = "The correct Answer was: B: Al Pacino";
	trumpRight = "<img src='assets/images/trump-thanos.gif' id='bg' alt=''>";
	trumpWrong = "<img src='assets/images/trump-eagle.gif' id='bg' alt=''>";
	seconds = 30;

	countdownTimer = setInterval(function() {
		seconds--;
		$(".time-remaining").text(seconds + " seconds remaining");
		if (seconds <= 0) {
			clearTimeout(countdownTimer);
			$(".answers").text(correctAnswer);
			$(".gif").html("<img src='assets/images/snail.gif' id='bg' alt=''>");
			wrongCounter++;
			setTimeout(function() {
				questionSix();
			}, 5000);
		};
	}, 1000);

	$(".time-remaining").text(seconds + " seconds remaining");
	$(".answers").html("<div class= 'answer-one offset-md-3'> </div> <div class= 'answer-two offset-md-3'> </div> <div class= 'answer-three offset-md-3'> </div> <div class= 'answer-four offset-md-3'> </div>");
	$(".question").text(question);
	$(".answer-one").text(answerOne);
	$(".answer-two").text(answerTwo);
	$(".answer-three").text(answerThree);
	$(".answer-four").text(answerFour);
	$(".gif").text("");

	$(".answer-one").on("click", function() {
		clearInterval(countdownTimer);
		$(".answers").text(correctAnswer);
		$(".gif").html(trumpWrong);
		wrongCounter++;
		setTimeout(function() {
			questionSix();
		}, 5000);
	});

	$(".answer-two").on("click", function() {
		clearInterval(countdownTimer);
		$(".answers").text("Correct");
		$(".gif").html(trumpRight);
		correctCounter++;
		setTimeout(function() {
			questionSix();
		}, 5000);
	});

	$(".answer-three").on("click", function() {
		clearInterval(countdownTimer);
		$(".answers").text(correctAnswer);
		$(".gif").html(trumpWrong);
		wrongCounter++;
		setTimeout(function() {
			questionSix();
		}, 5000);
	});

	$(".answer-four").on("click", function() {
		clearInterval(countdownTimer)
		$(".answers").text(correctAnswer);
		$(".gif").html(trumpWrong);
		wrongCounter++;
		setTimeout(function() {
			questionSix();
		}, 5000);
	});
};

function questionSix (e) {

	question = "Who holds the record of 14 nominations for Worst Actor at the Razzies?";
	answerOne = "A: Sylvester Stallone";
	answerTwo = "B: Nicholas Cage";
	answerThree = "C: Arnold Schwarzenegger";
	answerFour = "D: Meryl Streep";
	correctAnswer = "The correct Answer was: A: Sylvester Stallone";
	trumpRight = "<img src='assets/images/trump-sparkle.gif' id='bg' alt=''>";
	trumpWrong = "<img src='assets/images/trump-sad.gif' id='bg' alt=''>";
	seconds = 30;

	countdownTimer = setInterval(function() {
		seconds--;
		$(".time-remaining").text(seconds + " seconds remaining");
		if (seconds <= 0) {
			clearTimeout(countdownTimer);
			$(".answers").text(correctAnswer);
			$(".gif").html("<img src='assets/images/snail.gif' id='bg' alt=''>");
			wrongCounter++;
			setTimeout(function() {
				questionSeven();
			}, 5000);
		};
	}, 1000);

	$(".time-remaining").text(seconds + " seconds remaining");
	$(".answers").html("<div class= 'answer-one offset-md-3'> </div> <div class= 'answer-two offset-md-3'> </div> <div class= 'answer-three offset-md-3'> </div> <div class= 'answer-four offset-md-3'> </div>");
	$(".question").text(question);
	$(".answer-one").text(answerOne);
	$(".answer-two").text(answerTwo);
	$(".answer-three").text(answerThree);
	$(".answer-four").text(answerFour);
	$(".gif").text("");

	$(".answer-one").on("click", function() {
		clearInterval(countdownTimer);
		$(".answers").text("Correct");
		$(".gif").html(trumpRight);
		correctCounter++;
		setTimeout(function() {
			questionSeven();
		}, 5000);
	});	

	$(".answer-two").on("click", function() {
		clearInterval(countdownTimer);
		$(".answers").text(correctAnswer);
		$(".gif").html(trumpWrong);
		wrongCounter++;
		setTimeout(function() {
			questionSeven();
		}, 5000);
	});

	$(".answer-three").on("click", function() {
		clearInterval(countdownTimer);
		$(".answers").text(correctAnswer);
		$(".gif").html(trumpWrong);
		wrongCounter++;
		setTimeout(function() {
			questionSeven();
		}, 5000);
	});	

	$(".answer-four").on("click", function() {
		clearInterval(countdownTimer);
		$(".answers").text(correctAnswer);
		$(".gif").html(trumpWrong);
		wrongCounter++;
		setTimeout(function() {
			questionSeven();
		}, 5000);
	});
};

function questionSeven (e) {

	question = "For which of these movies did Daniel Day-Lewis not win Best Actor?";
	answerOne = "A: There Will Be Blood";
	answerTwo = "B: Lincoln";
	answerThree = "C: Gangs of New York";
	answerFour = "D: My Left Foot";
	correctAnswer = "The correct Answer was: C: Gangs of New York";
	trumpRight = "<img src='assets/images/trump-words.gif' id='bg' alt=''>";
	trumpWrong = "<img src='assets/images/trump-try.gif' id='bg' alt=''>";
	seconds = 30;

	countdownTimer = setInterval(function() {
		seconds--;
		$(".time-remaining").text(seconds + " seconds remaining");
		if (seconds <= 0) {
			clearTimeout(countdownTimer);
			$(".answers").text(correctAnswer);
			$(".gif").html("<img src='assets/images/snail.gif' id='bg' alt=''>");
			wrongCounter++;
			setTimeout(function() {
				questionEight();
			}, 5000);
		};
	}, 1000);

	$(".time-remaining").text(seconds + " seconds remaining");
	$(".answers").html("<div class= 'answer-one offset-md-3'> </div> <div class= 'answer-two offset-md-3'> </div> <div class= 'answer-three offset-md-3'> </div> <div class= 'answer-four offset-md-3'> </div>");
	$(".question").text(question);
	$(".answer-one").text(answerOne);
	$(".answer-two").text(answerTwo);
	$(".answer-three").text(answerThree);
	$(".answer-four").text(answerFour);
	$(".gif").text("");

	$(".answer-one").on("click", function() {
		clearInterval(countdownTimer);
		$(".answers").text(correctAnswer);
		$(".gif").html(trumpWrong);
		wrongCounter++;
		setTimeout(function() {
			questionEight();
		}, 5000);
	});	

	$(".answer-two").on("click", function() {
		clearInterval(countdownTimer);
		$(".answers").text(correctAnswer);
		$(".gif").html(trumpWrong);
		wrongCounter++;
		setTimeout(function() {
			questionEight();
		}, 5000);
	});	

	$(".answer-three").on("click", function() {
		clearInterval(countdownTimer);
		$(".answers").text("Correct");
		$(".gif").html(trumpRight);
		correctCounter++;
		setTimeout(function() {
			questionEight();
		}, 5000);
	});

	$(".answer-four").on("click", function() {
		clearInterval(countdownTimer);
		$(".answers").text(correctAnswer);
		$(".gif").html(trumpWrong);
		wrongCounter++;
		setTimeout(function() {
			questionEight();
		}, 5000);
	});
};

function questionEight (e) {

	question = "How many donuts are in a Ben's Dozen?";
	answerOne = "A: 13";
	answerTwo = "B: 12";
	answerThree = "C: 11";
	answerFour = "D: Purebred Mutts is a good joke";
	correctAnswer = "The correct Answer was: C: 11";
	trumpRight = "<img src='assets/images/trump-wink.gif' id='bg' alt=''>";
	trumpWrong = "<img src='assets/images/trump-shake.gif' id='bg' alt=''>";
	seconds = 30;

	countdownTimer = setInterval(function() {
	seconds--;
	$(".time-remaining").text(seconds + " seconds remaining");
	if (seconds <= 0) {
		clearTimeout(countdownTimer);
		$(".answers").text(correctAnswer);
		$(".gif").html("<img src='assets/images/snail.gif' id='bg' alt=''>");
		wrongCounter++;
		setTimeout(function() {
			finalScore();
		}, 5000);
	};
}, 1000);

	$(".time-remaining").text(seconds + " seconds remaining");
	$(".answers").html("<div class= 'answer-one offset-md-3'> </div> <div class= 'answer-two offset-md-3'> </div> <div class= 'answer-three offset-md-3'> </div> <div class= 'answer-four offset-md-3'> </div>");
	$(".question").text(question);
	$(".answer-one").text(answerOne);
	$(".answer-two").text(answerTwo);
	$(".answer-three").text(answerThree);
	$(".answer-four").text(answerFour);
	$(".gif").text("");

	$(".answer-one").on("click", function() {
		clearInterval(countdownTimer);
		$(".answers").text(correctAnswer);
		$(".gif").html(trumpWrong);
		wrongCounter++;
		setTimeout(function() {
			finalScore();
		}, 5000);
	});	

	$(".answer-two").on("click", function() {
		clearInterval(countdownTimer);
		$(".answers").text(correctAnswer);
		$(".gif").html(trumpWrong);
		wrongCounter++;
		setTimeout(function() {
			finalScore();
		}, 5000);
	});		

	$(".answer-three").on("click", function() {
		clearInterval(countdownTimer);
		$(".answers").text("Correct");
		$(".gif").html(trumpRight);
		correctCounter++;
		setTimeout(function() {
			finalScore();
		}, 5000);
	});

	$(".answer-four").on("click", function() {
		clearInterval(countdownTimer);
		$(".answers").text("Correct");
		$(".gif").html(trumpRight);
		correctCounter++;
		setTimeout(function() {
			finalScore();
		}, 5000);
	});
};

function finalScore(e) {
	$(".question").html("You got " + correctCounter + " right! <br>");
	$(".question").append("You got " + wrongCounter + " wrong!");
	
	$(document).ready(function() {
		$(".time-remaining").text("")
	});

	if (correctCounter >= 6) {
		$(".answers").text("Holy moly you watch a lot of movies. Maybe try going outside sometime? You could probably benefit from some eclipse staring time.");
		$(".gif").html("<img src='assets/images/great-trump.gif' id='bg' alt=''>");
	}
		else if (correctCounter >= 4) {
			$(".answers").text("You're mediocre at movie trivia and have been found unworthy of The Great Donald, but there is room for improvement.");
			$(".gif").html("<img src='assets/images/trump-whoknows.gif' id='bg' alt=''>");
		}
		else if (correctCounter >= 2) {
			$(".answers").text("You have likely only seen a couple movies in your life and would be completely incapable of keeping up with Dear Leader's rigorous schedule of six hours of television per day. You're fired.");
			$(".gif").html("<img src='assets/images/trump-golf.gif' id='bg' alt=''>");
		}
		else {
			$(".answers").text("You have displayed an almost willful incompetence towards any movie trivia. Donald Trump would like to formally extend you an offer to join his Cabinet as the Secretary of Film Preservation and Research.");
			$(".gif").html("<img src='assets/images/trump-dumpster.gif' id='bg' alt=''>");
		};
};

$(document).ready(function() {
	$(".start-box").on("click", function() {
		startGame();
	});
});