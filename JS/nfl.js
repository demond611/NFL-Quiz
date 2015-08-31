$(function (){
	var DEBUG = true;
	var debug = function (msg){
		if (DEBUG == true)
			console.log("MESSAGE:", msg);
	};

	// GLOBAL VARIABLES
	var counter = 0;
	var numberOfQuestions = 0;
	var correctAnswers = 0;


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
			checkAnswer();
			numberOfQuestions++;

			if (numberOfQuestions === quizQuestions.length) {

				$("#answer-btn, #cancel-btn").hide();
				$("#finish-btn").show();

				$("#finish-btn").on("click", function (){
					preventDefault(event);
					// checkAnswer();
					displayResults();
				});

			} else{

				nextQuestion();
			
			}		
		});

		$("#cancel-btn").click(function (){
			preventDefault(event);
			reStartQuiz();
		});
	}

	function preventDefault (event){
		return event.preventDefault();
	}

	function checkAnswer () {
		var userAns = $("[type='radio']:checked").data('quesval');
		var actualAns = quizQuestions[counter].correctChoice;
		if (userAns === actualAns)
			correctAnswers++;
		debug(correctAnswers);
		counter++;
	}

	function nextQuestion () {

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
	}

	function displayResults () {
		$("#welcome, #questions").hide();
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
			reStartQuiz();
		});
	}

	function reStartQuiz () {
		counter = 0;
		numberOfQuestions = 0;
		correctAnswers = 0;
		$("#question-responses").text("");
		$("#results, #questions").hide();
		$("#welcome").show();
	}

});


// $(function (){
// 	var DEBUG = true;
// 	var debug = function (msg){
// 		if (DEBUG == true)
// 			console.log("MESSAGE:", msg);
// 	};
// 	var counter = 0;
// 	var correctUserGuess = 0;
// 	var userResponses = [];
// 	var answerChoices = "";

// 	function Question (question, choices){
// 		 // Initialize the instance properties​
// 		 this.question = question;
// 		 this.choices = choices;
// 	}

// 	// Store quiz questions in an array to access
// 	var quizQuestions =[
// 		new Question( "Which quarterback led all quarterbacks in fantasy points in 2014?",
// 			[{answer:"Aaron Rodgers", correctAnswer:false},
// 			{answer:"Andrew Luck", correctAnswer:true},
// 			{answer:"Cam Newton", correctAnswer:false},
// 			{answer:"Tomo Romo", correctAnswer:false}] ),

// 		new Question( "Which running back led the league in rushing yards and touchdowns in 2014?",
// 			[{answer:"Eddie Lacy", correctAnswer:false},
// 			{answer:"DeMarco Murray", correctAnswer:true},
// 			{answer:"Marshawn Lynch", correctAnswer:false},
// 			{answer:"Matt Forte", correctAnswer:false}] ),

// 		new Question( "Which defense led the league in safeties in 2014?",
// 			[{answer:"Detroit Lions", correctAnswer:false},
// 			{answer:"Carolina Panthers", correctAnswer:false},
// 			{answer:"Green Bay Packers", correctAnswer:true},
// 			{answer:"Arizona Cardinals", correctAnswer:false}] ),

// 		new Question( "How many kicker(s) scored at least 150 total pts in 2014?",
// 			[{answer:"1", correctAnswer:false},
// 			{answer:"2", correctAnswer:true},
// 			{answer:"3", correctAnswer:true},
// 			{answer:"4", correctAnswer:false}] ),

// 		new Question( "Which quarterback led the league in interceptions in 2014?",
// 			[{answer:"Andy Dalton", correctAnswer:false},
// 			{answer:"Eli Manning", correctAnswer:false},
// 			{answer:"Jay Cutler", correctAnswer:true},
// 			{answer:"Robert Griffin III", correctAnswer:false}] ),

// 		new Question( "Which Defensive End led the league in sacks in 2014?",
// 			[{answer:"Jason Pierre-Paul", correctAnswer:false},
// 			{answer:"J.J. Watt", correctAnswer:true},
// 			{answer:"Ziggy Ansah", correctAnswer:false},
// 			{answer:"DeMarcus Ware", correctAnswer:false}] ),

// 		new Question( "Which defense led the league in kickoff return touchdowns in 2014?",
// 			[{answer:"Washington Redskins", correctAnswer:false},
// 			{answer:"Jacksonville Jaguars", correctAnswer:false},
// 			{answer:"New Orleans Saints", correctAnswer:false},
// 			{answer:"Philadelphia Eagles", correctAnswer:true}] ),

// 		new Question( "Which quarterback rushed for over 500 yards and threw for over 3200 yards in 2014?",
// 			[{answer:"Colin Kaepernick", correctAnswer:true},
// 			{answer:"Russell Wilson", correctAnswer:false},
// 			{answer:"Andrew Luck", correctAnswer:false},
// 			{answer:"Cam Newton", correctAnswer:false}] ),

// 		new Question( "How many sacks did linebacker Justin Houston record in 2014 almost breaking Michael Strahan's single season record?",
// 			[{answer:"20", correctAnswer:false},
// 			{answer:"25", correctAnswer:false},
// 			{answer:"18", correctAnswer:false},
// 			{answer:"22", correctAnswer:true}] ),

// 		new Question( "How many tight ends had at least 6 touchdowns and at least 80 receptions in 2014?",
// 			[{answer:"2", correctAnswer:true},
// 			{answer:"4", correctAnswer:false},
// 			{answer:"6", correctAnswer:false},
// 			{answer:"7", correctAnswer:false}] )
// 	];

// 	// 1st Instance of Questions
// 	$("#number").text(counter+1);
// 	// Display the initial question
// 	$("#fantasy-question").text(quizQuestions[counter].question);
// 	// Get the initial question choices
// 	for (var choice in quizQuestions[counter].choices){
// 		answerChoices = "<li><input type='radio' name='Q"+(counter+1)+"' value='" + quizQuestions[counter].choices[choice].answer + "' data-correct='" + quizQuestions[counter].choices[choice].correctAnswer + "'> "
// 			+ quizQuestions[counter].choices[choice].answer + " </li>";
// 		$("#question-responses").append(answerChoices);
// 	}

// 	$("[name='Q"+(counter+1)+"']").click(function (){
// 		var th = $(this);
// 		if (":checked"){
// 			if (th.data('correct') == true){
// 				correctUserGuess++;
// 			}
// 		}
// 		debug(correctUserGuess);
// 	});


// 	// $("input").change(function (){
// 	// 	userResponses.push($(this).data("correct"));
// 	// 	debug(userResponses);
// 	// 	debug("hey");
// 	// });


// 	function preventDefault (event){
// 		return event.preventDefault();
// 	}

// 	$("#questions, #results, #finish-btn").hide();

// 	// Loop through each question/choice set
// 	$("#answer-btn").on("click", function (event){

// 		preventDefault(event);

// 		counter++;
// 		$("#number").text(counter+1);
// 		if (counter < quizQuestions.length){

// 			$("#fantasy-question").text(quizQuestions[counter].question);

// 			$("#question-responses").text("");

// 			for (var choice in quizQuestions[counter].choices){

// 				answerChoices = "<li><input type='radio' name='Q"+(counter+1)+"' value='" + quizQuestions[counter].choices[choice].answer + "' data-correct='" + quizQuestions[counter].choices[choice].correctAnswer + "'> "
// 					+ quizQuestions[counter].choices[choice].answer + " </li>";

// 				$("#question-responses").append(answerChoices);
// 			}
// 		}

// 		// $("input").on("change", function (){
// 		// 	userResponses.push($(this).data("correct"));
// 		// 	debug(userResponses);
// 		// });

// 		// $("[name='Q"+(counter+1)+"']").click(function (){
// 		// 	var th = $(this);
// 		// 	if (":checked"){
// 		// 		if (th.data('correct') == true){
// 		// 			$("#answer-btn").click(function (){
// 		// 				correctUserGuess++;
// 		// 			});
// 		// 		}
// 		// 	}
// 		// 	debug(correctUserGuess);
// 		// });

// 		if (counter == quizQuestions.length - 1){
// 			$("#finish-btn").show();
// 			$("#cancel-btn, #answer-btn").hide();
// 		}

// 	});

// 	$("#welcome-btn").click(function (event){
// 		preventDefault(event);
// 		$("#welcome, #results").hide();
// 		$("#questions").show();
// 	});

// 	$("#finish-btn").click(function (event){
// 		preventDefault(event);
// 		$("#questions, #welcome").hide();
// 		$("#results").show();

// 		// debug(userResponses);
// 	});

// 	$("#results-btn").click(function (event){
// 		preventDefault(event);
// 		$("#questions, #results").hide();
// 		$("#welcome").show();
// 	});

// 	$("#cancel-btn").click(function (event){
// 		preventDefault(event);
// 		$("#welcome").show();
// 		$("#questions, #results").hide();
// 	});

// });