// Returns the current time
function getTime () {
	return new Date();
}

var minsInWords = {
	5 : "five",
	10 : "ten",
	15 : "quarter",
	20 : "twenty",
	25 : ["twenty", "five"],
	30 : "half",
	35 : ["twenty", "five"],
	40 : "twenty",
	45 : "quarter",
	50 : "ten",
	55 : "five"
};

function setTitle() {
	var date = getTime ();
	var titleTime = date.getHours() + ":" + date.getMinutes(); 
	document.title = titleTime;
}

// Returns the nearest "5" of the given number
function roundToFive (num) {
	return 5 * Math.round(num/5);
}

// Gets the current time and sets it on the text clock
function setTime () {
	$(".clock .changing").children().removeClass("selected", { easing: 'easeOutBounce' });

	var currTime = getTime();
	var hours = currTime.getHours();
	if (hours > 12) {
		hours = hours - 12;
		$("body").removeClass("am");
		$("body").addClass("pm");
	} else {
		$("body").removeClass("pm");
		$("body").addClass("am");
	}

	var mins = currTime.getMinutes();

	// set the hour 
	if (mins <= 30) {
		$("#" + hours).addClass("selected");
		if (mins > 2) {
			$("#past").addClass("selected");
			$("#minutes").addClass("selected");
		}
	} else {
		$("#" + (hours + 1)).addClass("selected");
		$("#to").addClass("selected");
	}

	// set the descriptive words
	if (mins % 5 == 0) {
		// do nothing
	} else if (mins % 5 < 3) {
		$("#around").addClass("selected");
	} else if (mins % 5 <= 4) {
		$("#almost").addClass("selected");
	}

	$("#oclock").addClass("selected");

	// set the minutes
	if (mins > 2) {
		var roundFive = roundToFive(mins);
		var minsWords = minsInWords[roundFive];
		
		// if the mins in words are "quarter" or "half", remove the selection on "minutes"
		if (minsWords == "quarter" || minsWords == "half") $("#minutes").removeClass("selected");
		
		if (Array.isArray(minsWords)) {
			$.each(minsWords, function(i, el) {
				$("#" + el).addClass("selected");
			});
		} else {
			$("#" + minsWords).addClass("selected");
		}
	}

	setTitle();
}

$(document).ready(function(){
	setTime();
	// Function is called every 2 secs to update the UI
	setInterval(function(){ setTime(); }, 2000);
});