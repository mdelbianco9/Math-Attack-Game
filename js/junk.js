
// Max-num input
var max_num = document.getElementById("maxNum");

// Invokes the functions on keypress for Max Number
max_num.onkeydown = function(e){
	if(e.keyCode == 13){
		console.log(max_num.value)
		create_new_array()
	}
}

// Generates an array based on the inputed value 
function create_new_array() {
	var nums_array = [];
	for(i=1; i<=max_num.value; i++){
		nums_array.push(i);
	}
	console.log(nums_array);
	return nums_array;
}







// Get Buttons to set diffculty
var easy = document.getElementById('easy');
var medium = document.getElementById('medium');
var hard = document.getElementById('hard');
var start = document.getElementById('start');
var answer_box = document.getElementById('answer');

start.onclick = function(){
	
}


// Max-Number
var max_num = 0;

easy.addEventListener('click', function(){
	max_num = 10;
	create_new_array()
})

medium.addEventListener('click', function(){
	max_num = 12;
	create_new_array()
})

hard.addEventListener('click', function(){
	max_num = 15;
	create_new_array();
})




// Creates an array of numbers
function create_new_array() {
	var nums_array = [];
	for(i=1; i<=max_num; i++){
		nums_array.push(i);
	}
	console.log("New Numbers " + nums_array);
	return nums_array;
}

























