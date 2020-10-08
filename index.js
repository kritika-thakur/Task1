// Task 1

var secondsRemaining;
var intervalHandle;

function resetPage(){
    clearInterval(intervalHandle);
}

function tick(){
	// grab the h1
	var timeDisplay = document.getElementById("time");

	// turn the seconds into mm:ss
	var min = Math.floor(secondsRemaining / 60);
	var sec = secondsRemaining - (min * 60);

	//add a leading zero (as a string value) if seconds less than 10
	if (sec < 10) {
		sec = "0" + sec;
	}

	// concatenate with colon
	var message = min.toString() + ":" + sec;

	// now change the display
	timeDisplay.innerHTML = message;
    
	if (secondsRemaining === 5){
		document.getElementById("timerBtn").value = "Reset";
		document.getElementById("time").style.color = "#FF0000";
    }
    
    // stop is down to zero
    if (secondsRemaining === 0){
        resetPage();
        resetColor();
    }

	//subtract from seconds remaining
	secondsRemaining--;
}

function resetColor(){
    document.getElementById("time").innerHTML = "00:00";
    document.getElementById("time").style.color = "#000";
    document.getElementById("timerBtn").value = "Start";
}

function startCountdown(){
    if(document.getElementById("timerBtn").value === "Pause") {
        document.getElementById("timerBtn").value = "Resume";
		resetPage();
    } else if(document.getElementById("timerBtn").value === "Resume") {
        intervalHandle = setInterval(tick, 1000);
        document.getElementById("timerBtn").value = "Pause";
    } else if(document.getElementById("timerBtn").value === "Reset") {
        resetPage();
        resetColor();
    } else {
        document.getElementById("timerBtn").value = "Pause";
        setTimerInterval();
    }
}

function setTimerInterval() {
    var minutes =  document.getElementById("minutes").value;
    // how many seconds
    secondsRemaining = minutes * 60;
    //every second, call the "tick" function
    // have to make it into a variable so that you can stop the interval later!!!
    intervalHandle = setInterval(tick, 1000);
}

// Task 2