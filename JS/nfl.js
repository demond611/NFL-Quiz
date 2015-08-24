$(function (){
	var DEBUG = true;
	var debug = function (msg){
		if (DEBUG == true)
			console.log("MESSAGE:", msg);
	};

	function preventDefault (event){
		return event.preventDefault();
	}

	$("#questions, #results").hide();

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

	$("#answer-btn").click(function (event){
		preventDefault(event);
	});

	$("#cancel-btn").click(function (event){
		preventDefault(event);
		$("#welcome").show();
		$("#questions, #results").hide();
	});

});