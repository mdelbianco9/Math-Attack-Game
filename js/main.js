
// Get Buttons to set diffculty
var easy = document.getElementById('easy');
var medium = document.getElementById('medium');
var hard = document.getElementById('hard');
var start = document.getElementById('start');
var reset = document.getElementById('reset');
var answer_box = document.getElementById('answer');

// Score
var score = 0;
// Max-Number
var max_num = 10;


// Numbers to Math
var num1 = Math.floor((Math.random() * max_num)+1);
var num2 = Math.floor((Math.random() * max_num)+1);

var answer;

// Display Numbers
document.getElementById("number1").innerHTML='';
document.getElementById("number2").innerHTML='';

// Go Button
start.addEventListener('click', function(){
	document.getElementById("number1").innerHTML=num1;
	document.getElementById("number2").innerHTML=num2;
	answer_box.focus();
})

// Reset Button
reset.addEventListener('click', function(){
	document.getElementById("number1").innerHTML='';
	document.getElementById("number2").innerHTML='';
	document.getElementById('score').innerHTML = "Score: ";
})



// Get the container element
var dificulty = document.getElementById("dificulty");

// Get all buttons with class="btn" inside the container
var btns = dificulty.getElementsByClassName("nav-link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";

    // Change the value of Max_num for each btn
    if (this.innerHTML === "Medium") {
    	max_num = 12;
    }else if (this.innerHTML === "Hard") {
    	max_num = 15;
    }else{
    	max_num = 10;
    }
  });
}


// Get the container element
var math_sign = document.getElementById("math-sign");

// Get all buttons with class="btn" inside the container
var signs = math_sign.getElementsByClassName("nav-link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < signs.length; i++) {
  signs[i].addEventListener("click", function() {
    var current1 = document.getElementsByClassName("active1");
    current1[0].className = current1[0].className.replace(" active1", "");
    this.className += " active1";


    if(this.id === "addition"){
    	answer = num1 + num2;
    	document.getElementById('display-sign').innerHTML = "+";
    }else if (this.id === "subtraction") {
    	answer = num1 - num2;
    	document.getElementById('display-sign').innerHTML = "-";
    }else if (this.id === "multiplication") {
    	answer = num1 * num2;
    	document.getElementById('display-sign').innerHTML = "x";
    }else if (this.id === "division") {
    	answer = num1 / num2;
    	document.getElementById('display-sign').innerHTML = "&divide;";
    }


  });
}





//Submit Answer and check if correct
answer_box.onkeypress = function(e){
	if(e.keyCode == 13){
		var checkAnswer = answer_box.value;
		if(checkAnswer == answer ){
			score ++
			document.getElementById('navbar').classList.add("bg-success");
			setTimeout(function() {
				document.getElementById('navbar').classList.remove("bg-success");
			}, 650)
		}else{
			score --
			document.getElementById('navbar').classList.add("bg-danger");
			setTimeout(function() {
				document.getElementById('navbar').classList.remove("bg-danger");
			}, 650)
		}

	answer_box.value = "";
	document.getElementById('score').innerHTML = "Score: " + score;
	document.getElementById("number1").innerHTML="";
	document.getElementById("number2").innerHTML="";
	var num1 = Math.round((Math.random() * max_num)+1);
	var num2 = Math.round((Math.random() * max_num)+1);
	document.getElementById("number1").innerHTML=num1;
	document.getElementById("number2").innerHTML=num2;
	
		console.log(answer)
		if(signs[1].classList.value == "nav-link active1"){
			answer = num1 + num2;
		}else if (signs[2].classList.value == "nav-link active1") {
			answer = num1 - num2;
		}else if (signs[3].classList.value == "nav-link active1") {
			answer = num1 * num2;
		}else if (signs[4].classList.value == "nav-link active1") {
			answer = num1 / num2;
		}
	

	}
}






















