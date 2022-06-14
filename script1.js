function getHistory(){
	return document.getElementById("rat").innerText;
    
}

alert("dan")
function printHistory(num){
	document.getElementById("rat").innerText=num;
}
function getOutput(){
	return document.getElementById("pet").innerText;
}
function printOutput(num){
	if(num==""){
		document.getElementById("pet").innerText=num;
	}
	else{
		document.getElementById("pet").innerText=getFormattedNumber(num);
	}	
}
function getFormattedNumber(num){
	if(num=="-"){
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}
var operators = document.getElementsByClassName("operators");
for(var i =0;i<operators.length;i++){
	operators[i].addEventListener('click',function(){
		if(this.id=="clear"){
			printHistory("");
			printOutput("");
		}
		else if(this.id=="backspace"){
			var result=reverseNumberFormat(getOutput()).toString();
			if(result){//if output has a value
				result= result.substr(0,result.length-1);
				printOutput(result);
			}
		}
		else{
			var result=getOutput();
			var history=getHistory();
			if(result==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(result!="" || history!=""){
				result= result==""?result:reverseNumberFormat(result);
				history=history+result;
				if(this.id=="="){
					var result=eval(history);
					printOutput(result);
					printHistory("");
				}
				else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}
		
	});
}
var numbers = document.getElementsByClassName("numbers");
for(var i =0;i<numbers.length;i++){
	numbers[i].addEventListener('click',function(){
		var result=reverseNumberFormat(getOutput());
		if(result!=NaN){ //if output is a number
			result=result+this.id;
			printOutput(result);
		}
	});
}