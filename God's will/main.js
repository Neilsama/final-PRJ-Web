var containerIndex = 1;
// showContainer(containerIndex);
var containerArray;
var textArray = [];

var containerArray = document.getElementsByClassName("container");

 // -------------------------------functions of page switch-------------------------------

function showContainer(n){	
	console.log(n);
	containerArray[n].style.opacity = "1";	
		// containerArray[n].style.display="inline";
	containerArray[n].style.zIndex = "100";
	console.log(containerArray);
}

function hideContainer(n){

		containerArray[n].style.opacity = "0";
		containerArray[n].style.zIndex= "-100";

}


 // -------------------------------functions of input frame-------------------------------
function updateOptions(){
	var optionHolding = document.getElementById("showArea_options1");
	optionHolding.innerHTML = '';

	var len = textArray.length;
	var i;

	for(i=0;i<len;i++){
		var newOptionDiv = document.createElement('div');
		newOptionDiv.id = i;
		newOptionDiv.className = 'option';

		var optionContent = document.createElement('p');
		optionContent.innerHTML = textArray[i];

		var deleteButton = document.createElement("div");   
		deleteButton.id = "deleteButton";		//set id
		deleteButton.innerText = 'delete';
		deleteButton.addEventListener('click',function(e){
			e.preventDefault();
			deleteOption(e);
			});

		newOptionDiv.appendChild(optionContent);
		newOptionDiv.appendChild(deleteButton);
		optionHolding.appendChild(newOptionDiv);

	}
}

function deleteOption(e){
	var optionNumber = e.target.parentElement.id;
	textArray.splice(optionNumber,1);//the thing need to be delete and the number of delete
	updateOptions();
}

function saveText(){
	var textInput = document.getElementById("inputText");
	var newOption = textInput.value;
	textArray.push(newOption);
	textInput.value = '';
	console.log(textArray);
	updateOptions();
}

function showResult(e){
	console.log(textArray);
	var resultNum = Math.floor((Math.random() * textArray.length));

	var result = document.getElementById("result");
	result.innerHTML = textArray[resultNum];
	console.log(textArray[resultNum]);
}

// function clearOptions(){
// 	document.getElementById("showArea_options1").removeChild();
// }

 // -------------------------------branch of who will do-------------------------------
var peopleNumber;

function saveNumber(){
	var textInput = document.getElementById("inputNum");
	peopleNumber = parseInt(textInput.value);
	textInput.value = "";
	console.log(peopleNumber);
}

function showBoxes(){
	var boxHolding = document.getElementById("showArea_options2");
	boxHolding.innerHTML = '';

	var i;

	for(i=0;i<peopleNumber;i++){
		var newBoxDiv = document.createElement('div');
		newBoxDiv.id = "box-"+i;
		newBoxDiv.className = 'box';

		var newAnswerDiv = document.createElement('p');
		newAnswerDiv.id = "answer-"+i;
		newAnswerDiv.innerHTML = "NOT YOU!";
		newAnswerDiv.className = 'answer';

		var newCoverDiv = document.createElement('div');
		newCoverDiv.className = 'cover';
		newCoverDiv.addEventListener('click',function(e){
			this.className += " moveCover";
		});

		console.log(i);
			
		newBoxDiv.appendChild(newAnswerDiv);
		newBoxDiv.appendChild(newCoverDiv);
		boxHolding.appendChild(newBoxDiv);
	}

	var bingoNum = Math.floor((Math.random() * peopleNumber));

	var bingoBox = document.getElementById("box-" + bingoNum);
	console.log("bingoBox is: "+bingoBox.id + " class name is: "+ bingoBox.className);
	bingoBox.style.background = "red";

	var bingoAnswer = document.getElementById("answer-"+bingoNum);
	console.log("bingoAnswer is: "+bingoAnswer.id + " class name is: "+ bingoAnswer.className);
	bingoAnswer.innerHTML = "YOU!!!";
	bingoAnswer.style.color = "white";
}




var init = function(){
	// containerArray
	showContainer(0);
}


window.onload = init();





