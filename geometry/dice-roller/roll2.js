// = Question 1 = //

function qone(runtimes,heads){

var mainCount = 0;

for (j=0;j<runtimes;j++){

var matchCount = 0;
for (i=0;i<10;i++){
  var randomNumber = Math.floor(Math.random()*2) // Random Generates 0,1 two conditions
  if (randomNumber == 0){
    var matchCount = matchCount + 1;
  }
}

if (matchCount > heads){
  var mainCount = mainCount + 1;
}

}

var posibility = (mainCount/runtimes)*100+"%";
document.getElementById("TitleWrite").innerHTML = "Question 1 - Run "+runtimes+" times, "+heads+" heads.";
document.getElementById("ResultWrite").innerHTML = posibility;

}

// = Question 2 = //

function qtwo(rtimes,match){
 var matched=0;
 for (k=0;k<rtimes;k++){
  var dice1=Math.floor(Math.random()*6+1);
  var dice2=Math.floor(Math.random()*6+1);
  var dice3=Math.floor(Math.random()*6+1);
  var diceSum=dice1+dice2+dice3;
  if (diceSum>match){
    matched=matched+1;
  }
 }
 var posibility2=(matched/rtimes)*100+"%";
 document.getElementById("TitleWrite").innerHTML = "Question 2 - Run "+rtimes+" times, "+match+" heads.";
 document.getElementById("ResultWrite").innerHTML=posibility2;
}

// = Question 3 = //

function qthree(runtimet){
  var qthreemain = 0;
  for (m=0;m<runtimet;m++){
    var x = Math.random()*3;
    var y = Math.random()*3;
    if ( (x-1)*(x-1)+(y-1)*(y-1)<1 && (x-2)*(x-2)+(y-2)*(y-2)<1 ){
      qthreemain = qthreemain + 1;
    }
  }
  var posibility3 = (qthreemain/runtimet)*100+"%";
  document.getElementById("TitleWrite").innerHTML = "Question 3 - Run "+runtimet+" times.";
  document.getElementById("ResultWrite").innerHTML=posibility3;
}

















/*

// Beautified Code //
// For Question 1.(a) to 1.(c) //

function question1Calculation(heads) {

	var mainCount = 0;

	for (j = 0; j < 10000; j++) {

		var matchCount = 0;
		for (i = 0; i < 10; i++) {
			var randomNumber = Math.floor(Math.random() * 2) // Random Generates 0,1 two conditions
			if (randomNumber == 0) {
				var matchCount = matchCount + 1;
			}
		}

		if (matchCount >= heads) {
			var mainCount = mainCount + 1;
		}

	}

	var posibility = mainCount / 10000;
	document.getElementById("result").innerHTML = posibility;

}

// End Beautified Code / Question 1.(a) to 1.(c) //

// = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - //

// Beautified Code //
// For Question 2 //

function question2Calculation(rtimes, match) {
	var matched = 0;
	for (k = 0; k < rtimes; k++) {
		var dice1 = Math.floor(Math.random() * 6 + 1);
		var dice2 = Math.floor(Math.random() * 6 + 1);
		var dice3 = Math.floor(Math.random() * 6 + 1);
		var diceSum = dice1 + dice2 + dice3;
		if (diceSum > match) {
			matched = matched + 1;
		}
	}
	var posibility2 = (matched / rtimes) * 100 + "%";
	document.getElementById("ResultWrite").innerHTML = posibility2;
}

// End Beautified Code / Question 2 //

// = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - //

// Beautified Code //
// For Question 3 //

function question3Calculation(runtimet) {
	var qthreemain = 0;
	for (m = 0; m < runtimet; m++) {
		var x = Math.random() * 3;
		var y = Math.random() * 3;
		if ((x - 1) * (x - 1) + (y - 1) * (y - 1) < 1 &&
		    (x - 2) * (x - 2) + (y - 2) * (y - 2) < 1) {
			qthreemain = qthreemain + 1;
		}
	}
	var posibility3 = (qthreemain / runtimet) * 100 + "%";
	document.getElementById("result").innerHTML = posibility3;
}

// End Beautified Code / Question 3 //

*/ 











