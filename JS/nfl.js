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
			[{answer:"Aaron Rodgers", correctAnswer:false},
			{answer:"Andrew Luck", correctAnswer:true},
			{answer:"Cam Newton", correctAnswer:false},
			{answer:"Tomo Romo", correctAnswer:false}] ),

		new Question( "Which running back led the league in rushing yards and touchdowns in 2014?",
			[{answer:"Eddie Lacy", correctAnswer:false},
			{answer:"DeMarco Murray", correctAnswer:true},
			{answer:"Marshawn Lynch", correctAnswer:false},
			{answer:"Matt Forte", correctAnswer:false}] ),

		new Question( "Which defense led the league in safeties in 2014?",
			[{answer:"Detroit Lions", correctAnswer:false},
			{answer:"Carolina Panthers", correctAnswer:false},
			{answer:"Green Bay Packers", correctAnswer:true},
			{answer:"Arizona Cardinals", correctAnswer:false}] ),

		new Question( "How many kicker(s) scored at least 150 total pts in 2014?",
			[{answer:"1", correctAnswer:false},
			{answer:"2", correctAnswer:true},
			{answer:"3", correctAnswer:true},
			{answer:"4", correctAnswer:false}] ),

		new Question( "Which quarterback led the league in interceptions in 2014?",
			[{answer:"Andy Dalton", correctAnswer:false},
			{answer:"Eli Manning", correctAnswer:false},
			{answer:"Jay Cutler", correctAnswer:true},
			{answer:"Robert Griffin III", correctAnswer:false}] ),

		new Question( "Which Defensive End led the league in sacks in 2014?",
			[{answer:"Jason Pierre-Paul", correctAnswer:false},
			{answer:"J.J. Watt", correctAnswer:true},
			{answer:"Ziggy Ansah", correctAnswer:false},
			{answer:"DeMarcus Ware", correctAnswer:false}] ),

		new Question( "Which defense led the league in kickoff return touchdowns in 2014?",
			[{answer:"Washington Redskins", correctAnswer:false},
			{answer:"Jacksonville Jaguars", correctAnswer:false},
			{answer:"New Orleans Saints", correctAnswer:false},
			{answer:"Philadelphia Eagles", correctAnswer:true}] ),

		new Question( "Which quarterback rushed for over 500 yards and threw for over 3200 yards in 2014?",
			[{answer:"Colin Kaepernick", correctAnswer:true},
			{answer:"Russell Wilson", correctAnswer:false},
			{answer:"Andrew Luck", correctAnswer:false},
			{answer:"Cam Newton", correctAnswer:false}] ),

		new Question( "How many sacks did linebacker Justin Houston record in 2014 almost breaking Michael Strahan's single season record?",
			[{answer:"20", correctAnswer:false},
			{answer:"25", correctAnswer:false},
			{answer:"18", correctAnswer:false},
			{answer:"22", correctAnswer:true}] ),

		new Question( "How many tight ends had at least 6 touchdowns and at least 80 receptions in 2014?",
			[{answer:"2", correctAnswer:true},
			{answer:"4", correctAnswer:false},
			{answer:"6", correctAnswer:false},
			{answer:"7", correctAnswer:false}] )
	];


	// Display the initial question
	$("#fantasy-question").text(quizQuestions[counter].question);
	// Get the initial question choices
	for (var choice in quizQuestions[counter].choices){
		$("#question-responses").append("<li><input type='radio' name='choice' value='" + quizQuestions[counter].choices[choice].answer + "'> "
			+ quizQuestions[counter].choices[choice].answer + " </li>");
	}


	function preventDefault (event){
		return event.preventDefault();
	}

	$("#questions, #results, #finish-btn").hide();

	// Loop through each question/choice set
	$("#answer-btn").click(function (event){
		preventDefault(event);
		counter++;
		if (counter < quizQuestions.length){
			$("#fantasy-question").text(quizQuestions[counter].question);
			for (var choice in quizQuestions[counter].choices){
				$("#question-responses").append("<li><input type='radio' name='choice' value='" + quizQuestions[counter].choices[choice].answer + "'> "
					+ quizQuestions[counter].choices[choice].answer + " </li>");
			}
		}

		if (counter == quizQuestions.length - 1){
			$("#finish-btn").show();
			$("#cancel-btn").hide();
		}
	});

	$("#welcome-btn").click(function (event){
		preventDefault(event);
		$("#welcome, #results").hide();
		$("#questions").show();
	});

	$("#finish-btn").click(function (event){
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