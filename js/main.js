
// Get Buttons to set diffculty
var easy = document.getElementById('easy');
var medium = document.getElementById('medium');
var hard = document.getElementById('hard');
var start = document.getElementById('start');
var answer_box = document.getElementById('answer');

// Score
var score = 0;
// Max-Number
var max_num = 12;

// Numbers to Math
var num1 = Math.round((Math.random() * max_num)+1);
var num2 = Math.round((Math.random() * max_num)+1);

var answer = num1 + num2;

// Display Numbers
document.getElementById("number1").innerHTML=num1;
document.getElementById("number2").innerHTML=num2;

//Submit Answer and check if correct
answer_box.onkeypress = function(e){
	if(e.keyCode == 13){
		var checkAnswer = answer_box.value;
		if(checkAnswer == answer ){
			score ++
		}else{
			score --
		}

	answer_box.value = "";
	document.getElementById('score').innerHTML = "Score: " + score;
	document.getElementById("number1").innerHTML="";
	document.getElementById("number2").innerHTML="";
	var num1 = Math.round((Math.random() * max_num)+1);
	var num2 = Math.round((Math.random() * max_num)+1);
	document.getElementById("number1").innerHTML=num1;
	document.getElementById("number2").innerHTML=num2;
	answer = num1 + num2;

	}
}






















