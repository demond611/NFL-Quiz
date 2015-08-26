$(function (){
	var DEBUG = true;
	var debug = function (msg){
		if (DEBUG == true)
			console.log("MESSAGE:", msg);
	};

	var counter = 0;

	function Question (question, choices){
		 // Initialize the instance properties​
		 this.question = question;
		 this.choices = choices;
	}

	// Store quiz questions in an array to access
	var quizQuestions =[
		new Question( "Which quarterback led all quarterbacks in fantasy points in 2014?",
			[{answer:"Aaron Rodgers", correctAnswer:false}, {answer:"Andrew Luck", correctAnswer:true},
			{answer:"Cam Newton", correctAnswer:false}, {answer:"Tomo Romo", correctAnswer:false}] ),

		new Question( "Which running back led the league in rushing yards and touchdowns in 2014?",
			[{answer:"Eddie Lacy", correctAnswer:false}, {answer:"DeMarco Murray", correctAnswer:true},
			{answer:"Marshawn Lynch", correctAnswer:false}, {answer:"Matt Forte", correctAnswer:false}] ),

		new Question( "Which defense led the league in safeties in 2014?",
			[{answer:"Detroit Lions", correctAnswer:false}, {answer:"Carolina Panthers", correctAnswer:false},
			{answer:"Green Bay Packers", correctAnswer:true}, {answer:"Arizona Cardinals", correctAnswer:false}] )
	];



	$("#fantasy-question").text(quizQuestions[counter].question);

	for (var choice in quizQuestions[counter].choices){
		$("#question-responses").append("<li><input type='radio' name='choice' value='" + quizQuestions[counter].choices[choice].answer + "'> "+ quizQuestions[counter].choices[choice].answer +" </li>");
		debug(quizQuestions[counter].choices[choice].answer);
	}





	function preventDefault (event){
		return event.preventDefault();
	}

	$("#questions, #results").hide();

	$("#answer-btn").click(function (event){
		preventDefault(event);
		counter++;
		if (counter < quizQuestions.length){
			$("#fantasy-question").text(quizQuestions[counter].question);
		}
	});

	$("#welcome-btn").click(function (event){
		preventDefault(event);
		$("#welcome, #results").hide();
		$("#questions").show();
	});

	$("#question-btn").click(function (event){
		preventDefault(event);
		$("#questions, #welcome").hide();
		$("#results").show();
	});

	$("#results-btn").click(function (event){
		preventDefault(event);
		$("#questions, #results").hide();
		$("#welcome").show();
	});

	$("#cancel-btn").click(function (event){
		preventDefault(event);
		$("#welcome").show();
		$("#questions, #results").hide();
	});

});