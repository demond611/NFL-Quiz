// GLOBAL VARIABLES
	var counter = 0;
	var numberOfQuestions = 0;
	var correctAnswers = 0;

$(function (){
	var DEBUG = true;
	var debug = function (msg){
		if (DEBUG == true)
			console.log("MESSAGE:", msg);
	};


	// QUESTION OBJ
	function Question (questionNum, question, choices, correctChoice){
		 // Initialize the instance properties​
		 this.questionNum = questionNum;
		 this.question = question;
		 this.choices = choices;
		 this.correctChoice = correctChoice;
	}

	var quizQuestions = [
		new Question(
			1,
			"Which quarterback led all quarterbacks in fantasy points in 2014?",
			["Aaron Rodgers","Andrew Luck","Cam Newton","Tomo Romo"],
			1
		),

		new Question(
			2,
			"Which running back led the league in rushing yards and touchdowns in 2014?",
			["Eddie Lacy","DeMarco Murray","Marshawn Lynch","Matt Forte"],
			1
		),

		new Question(
			3,
			"Which defense led the league in safeties in 2014?",
			["Detroit Lions","Carolina Panthers","Green Bay Packers","Arizona Cardinals"],
			2
		),

		new Question(
			4,
			"How many kicker(s) scored at least 150 total pts in 2014?",
			["1","2","3","4"],
			1
		),

		new Question(
			5,
			"Which quarterback led the league in interceptions in 2014?",
			["Andy Dalton","Eli Manning","Jay Cutler","Robert Griffin III"],
			2
		),

		new Question(
			6,
			"Which Defensive End led the league in sacks in 2014?",
			["Jason Pierre-Paul","J.J. Watt","Ziggy Ansah","DeMarcus Ware"],
			1
		),

		new Question(
			7,
			"Which defense led the league in kickoff return touchdowns in 2014?",
			["Washington Redskins","Jacksonville Jaguars","New Orleans Saints","Philadelphia Eagles"],
			3
		),

		new Question(
			8,
			"Which quarterback rushed for over 500 yards and threw for over 3200 yards in 2014?",
			["Colin Kaepernick","Russell Wilson","Andrew Luck","Cam Newton"],
			0
		),

		new Question(
			9,
			"How many sacks did linebacker Justin Houston record in 2014 almost breaking Michael Strahan's single season record?",
			["20","25","18","22"],
			3
		),

		new Question(
			10,
			"How many tight ends had at least 6 touchdowns and at least 80 receptions in 2014?",
			["2","4","6","7"],
			0
		)
	];

	// START QUIZ APPLICATION
	$("#results, #questions").hide();
	$("#welcome").show();

	$("#welcome-btn").click(function (){
		preventDefault(event);
		startQuiz();
	});


	function startQuiz () {
		$("#results, #welcome, #finish-btn").hide();
		$("#questions").show();

		// INITIAL QUESTION
		$("#number").text(quizQuestions[0].questionNum);
		$(".totalNumber").text(quizQuestions.length);
		$("#fantasy-question").text(quizQuestions[0].question);

		var answerChoices = $.each(quizQuestions[counter].choices, function (index,value){value});
		var quizCounter = quizQuestions[counter].questionNum;

		$.each(answerChoices, function (index, value){
			var questionChoices = "<li><input type='radio' name='Q"+quizCounter+"' data-quesval='"+index+"'> "+value+"</li>";
			$("#question-responses").append(questionChoices);
		});


		$("#answer-btn").on("click", function (){
			preventDefault(event);
			checkAnswer(counter);

			if (numberOfQuestions === quizQuestions.length) {

				$("#answer-btn, #cancel-btn").hide();
				$("#finish-btn").show();

				$("#finish-btn").on("click", function (){
					preventDefault(event);
					// checkAnswer();
					displayResults();
				});

			} else {

				nextQuestion();
			
			}

			$("#answer-btn, #cancel-btn").show();
			numberOfQuestions++;		
		});

		$("#cancel-btn").click(function (){
			preventDefault(event);
			// reStartQuiz();
		});

		debug("Counter: " + counter);
		debug("Num of Ques: " + numberOfQuestions);
	}

	function preventDefault (event){
		return event.preventDefault();
	}

	function checkAnswer (counter) {
		var userAns = $("[type='radio']:checked").data('quesval');
		var actualAns = quizQuestions[counter].correctChoice;
		if (userAns === actualAns)
			correctAnswers++;
		debug(correctAnswers);
	}

	function nextQuestion () {
		$("#questions").show();
		$("#number").text(quizQuestions[counter].questionNum);
		$(".totalNumber").text(quizQuestions.length);

		$("#fantasy-question").text(quizQuestions[counter].question);

		$("#question-responses").text("");

		var answerChoices = $.each(quizQuestions[counter].choices, function (index,value){value});
		var quizCounter = quizQuestions[counter].questionNum;

		$.each(answerChoices, function (index, value){
			var questionChoices = "<li><input type='radio' name='Q"+quizCounter+"' data-quesVal='"+index+"'> "+value+"</li>";
			$("#question-responses").append(questionChoices);
		});

		counter++;
	}

	function displayResults () {
		$("#welcome").hide();
		$("#questions").hide();
		$("#results").show();

		$("#correct").text(correctAnswers);
		$(".totalNumber").text(quizQuestions.length);

		if (correctAnswers == 0){
			$("#results-statement").text("Wow...That's just terrible.");
		} else if (correctAnswers <= 3){
			$("#results-statement").text("Did you even play fantasy football last year?");
		} else if (correctAnswers <= 6){
			$("#results-statement").text("Your fantasy football knowledge is pretty decent.");
		} else if (correctAnswers <= 9){
			$("#results-statement").text("This isn't your first time. You are a fantasy football expert.");
		} else {
			$("#results-statement").text("10 out of 10...You won your league title I bet.");
		}

		$("#results-btn").click(function (){
			preventDefault(event);
			// reStartQuiz();
		});
	}

	// function reStartQuiz () {
	// 	counter = 0;
	// 	numberOfQuestions = 0;
	// 	correctAnswers = 0;
	// 	$("#question-responses").text("");
	// 	$("#results, #questions").hide();
	// 	$("#welcome").show();
	// }

});