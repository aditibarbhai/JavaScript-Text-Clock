function getTime () {
	return new Date();
}

function setTime () {
	$(".clock .changing").children().removeClass("selected");

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
	} else {
		$("#" + (hours + 1)).addClass("selected");
	}

	// set the minutes
	if (mins == 0) {
		// do nothing
	} else if (mins < 3) {
		$("#around").addClass("selected");
	} else if (mins >= 3 && mins < 5) {
		$("#almost").addClass("selected");
		$("#fiveM").addClass("selected");
		$("#minutes").addClass("selected");
		$("#past").addClass("selected");
	} else if (mins == 5) {
		$("#minutes").addClass("selected");
		$("#fiveM").addClass("selected");
		$("#past").addClass("selected");
	} else if (mins < 7) {
		$("#around").addClass("selected");
		$("#minutes").addClass("selected");
		$("#fiveM").addClass("selected");
		$("#past").addClass("selected");
	} else if (mins >= 7 && mins < 10) {
		$("#almost").addClass("selected");
		$("#minutes").addClass("selected");
		$("#tenM").addClass("selected");
		$("#past").addClass("selected");
	} else if (mins == 10) {
		$("#minutes").addClass("selected");
		$("#tenM").addClass("selected");
		$("#past").addClass("selected");
	} else if (mins < 13) {
		$("#around").addClass("selected");
		$("#minutes").addClass("selected");
		$("#tenM").addClass("selected");
		$("#past").addClass("selected");
	} else if (mins >= 13 && mins < 15) {
		$("#almost").addClass("selected");
		$("#quarter").addClass("selected");
		$("#past").addClass("selected");
	} else if (mins == 15) {
		$("#quarter").addClass("selected");
		$("#past").addClass("selected");
	} else if (mins < 17) {
		$("#around").addClass("selected");
		$("#quarter").addClass("selected");
		$("#past").addClass("selected");
	} else if (mins >= 17 && mins < 20) {
		$("#almost").addClass("selected");
		$("#minutes").addClass("selected");
		$("#twenty").addClass("selected");
		$("#past").addClass("selected");
	} else if (mins == 20) {
		$("#minutes").addClass("selected");
		$("#twenty").addClass("selected");
		$("#past").addClass("selected");
	} else if (mins < 23) {
		$("#around").addClass("selected");
		$("#minutes").addClass("selected");
		$("#twenty").addClass("selected");
		$("#past").addClass("selected");
	} else if (mins >= 23 && mins < 25) {
		$("#almost").addClass("selected");
		$("#twenty").addClass("selected");
		$("#minutes").addClass("selected");
		$("#fiveM").addClass("selected");
		$("#past").addClass("selected");
	} else if (mins == 25) {
		$("#twenty").addClass("selected");
		$("#fiveM").addClass("selected");
		$("#past").addClass("selected");
	} else if (mins < 27) {
		$("#around").addClass("selected");
		$("#minutes").addClass("selected");
		$("#twenty").addClass("selected");
		$("#fiveM").addClass("selected");
		$("#past").addClass("selected");
	} else if (mins >= 27 && mins < 30) {
		$("#almost").addClass("selected");
		$("#half").addClass("selected");
		$("#past").addClass("selected");
	} else if (mins == 30) {
		$("#half").addClass("selected");
		$("#past").addClass("selected");
	} else if (mins < 33) {
		$("#around").addClass("selected");
		$("#half").addClass("selected");
		$("#past").addClass("selected");
	} else if (mins >= 33 && mins < 35) {
		$("#almost").addClass("selected");
		$("#twenty").addClass("selected");
		$("#minutes").addClass("selected");
		$("#fiveM").addClass("selected");
		$("#to").addClass("selected");
	} else if (mins == 35) {
		$("#twenty").addClass("selected");
		$("#minutes").addClass("selected");
		$("#fiveM").addClass("selected");
		$("#to").addClass("selected");
	} else if (mins < 37) {
		$("#around").addClass("selected");
		$("#minutes").addClass("selected");
		$("#twenty").addClass("selected");
		$("#fiveM").addClass("selected");
		$("#to").addClass("selected");
	} else if (mins >= 37 && mins < 40) {
		$("#minutes").addClass("selected");
		$("#almost").addClass("selected");
		$("#twenty").addClass("selected");
		$("#to").addClass("selected");
	} else if (mins == 40) {
		$("#minutes").addClass("selected");
		$("#twenty").addClass("selected");
		$("#to").addClass("selected");
	} else if (mins < 43) {
		$("#minutes").addClass("selected");
		$("#around").addClass("selected");
		$("#twenty").addClass("selected");
		$("#to").addClass("selected");
	} else if (mins >= 43 && mins < 45) {
		$("#almost").addClass("selected");
		$("#quarter").addClass("selected");
		$("#to").addClass("selected");
	} else if (mins == 45) {
		$("#quarter").addClass("selected");
		$("#to").addClass("selected");
	} else if (mins < 47) {
		$("#around").addClass("selected");
		$("#quarter").addClass("selected");
		$("#to").addClass("selected");
	} else if (mins >= 47 && mins < 50) {
		$("#minutes").addClass("selected");
		$("#almost").addClass("selected");
		$("#tenM").addClass("selected");
		$("#to").addClass("selected");
	} else if (mins == 50) {
		$("#minutes").addClass("selected");
		$("#tenM").addClass("selected");
		$("#to").addClass("selected");
	} else if (mins < 53) {
		$("#minutes").addClass("selected");
		$("#around").addClass("selected");
		$("#tenM").addClass("selected");
		$("#to").addClass("selected");
	} else if (mins >= 53 && mins < 55) {
		$("#minutes").addClass("selected");
		$("#almost").addClass("selected");
		$("#fiveM").addClass("selected");
		$("#to").addClass("selected");
	} else if (mins == 55) {
		$("#minutes").addClass("selected");
		$("#fiveM").addClass("selected");
		$("#to").addClass("selected");
	} else if (mins < 57) {
		$("#minutes").addClass("selected");
		$("#around").addClass("selected");
		$("#fiveM").addClass("selected");
		$("#to").addClass("selected");
	} else if (mins >= 57 && mins <= 59) {
		$("#almost").addClass("selected");
	}

	$("#oclock").addClass("selected");
}

$(document).ready(function(){
	setTime();
	setInterval(function(){ setTime(); }, 5000);
});