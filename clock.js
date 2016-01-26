

var Clock = (function () {
    var that ={}; //contains public methods
    
    //private variables
    var currTime;
    var hours;
    var mins;
    
    //private functions
    var _getTime = function () {
        currTime = new Date();
        hours = currTime.getHours();
        mins = currTime.getMinutes();
    };

    //creating a function which would add the Class
    var _selected = function () {
        var args = arguments[0];
        args = typeof args === 'string' ? args.split(' ') : null;

        for (var i in args) {
            s = "#" + args[i];
            $(s).addClass("selected");
        }//order not important so used for in loop
        
    };
    
    //public accessable function
    that.setTime = function () {
        _getTime();
        $(".clock .changing").children().removeClass("selected");

        if (hours > 12) {
            hours = hours - 12;
            $("body").removeClass("am");
            $("body").addClass("pm");
        } else {
            $("body").removeClass("pm");
            $("body").addClass("am");
        }
    
        // set the hour 
        if (mins <= 30) {
            _selected(hours + "");
        } else {
            _selected(hours + 1 + "");
        }
        // set the minutes
        if (mins === 0) {
            // do nothing
        } else if (mins < 3) {
            _selected("around");

        } else if (mins >= 3 && mins < 5) {
            _selected("almost fiveM minutes past");

        } else if (mins == 5) {
            _selected("minutes fiveM past");

        } else if (mins < 7) {
            _selected("around fiveM minutes past");

        } else if (mins >= 7 && mins < 10) {
            _selected("almost tenM minutes past");

        } else if (mins == 10) {
            _selected("tenM minutes past");

        } else if (mins < 13) {
            _selected("around tenM minutes past");

        } else if (mins >= 13 && mins < 15) {
            _selected("almost quarter past");

        } else if (mins == 15) {
            _selected("quarter past");

        } else if (mins < 17) {
            _selected("around quarter past");

        } else if (mins >= 17 && mins < 20) {
            _selected("almost twenty minutes past");

        } else if (mins == 20) {
            _selected("twenty minutes past");

        } else if (mins < 23) {
            _selected("around twenty minutes past");

        } else if (mins >= 23 && mins < 25) {
            _selected("almost twenty fiveM minutes past");

        } else if (mins == 25) {
            _selected("twenty fiveM past");

        } else if (mins < 27) {
            _selected("around twenty fiveM minutes past");

        } else if (mins >= 27 && mins < 30) {
            _selected("almost half past");

        } else if (mins == 30) {
            _selected("half past");

        } else if (mins < 33) {
            _selected("around half past");
        } else if (mins >= 33 && mins < 35) {
            _selected("almost twenty fiveM minutes past");

        } else if (mins == 35) {
            _selected("twenty fiveM minutes to");

        } else if (mins < 37) {
            _selected("around twenty fiveM minutes to");

        } else if (mins >= 37 && mins < 40) {
            _selected("almost twenty minutes to");

        } else if (mins == 40) {
            _selected("twenty minutes to");

        } else if (mins < 43) {
            _selected("around twenty minutes to ");

        } else if (mins >= 43 && mins < 45) {
            _selected("almost quarter to");

        } else if (mins == 45) {
            _selected("quarter to");

        } else if (mins < 47) {
            _selected("around quarter to");

        } else if (mins >= 47 && mins < 50) {
            _selected("almost tenM minutes to");

        } else if (mins == 50) {
            _selected("tenM minutes to");

        } else if (mins < 53) {
            _selected("around tenM minutes to");

        } else if (mins >= 53 && mins < 55) {
            _selected("almost fiveM minutes to");

        } else if (mins == 55) {
            _selected("fiveM minutes to");

        } else if (mins < 57) {
            _selected("around fiveM minutes to");

        } else if (mins >= 57 && mins <= 59) {
            _selected("almost");

        }
        _selected("oclock");
    };
    
    return that;
    /* returned an object with one property that is setTime
       as it is self executing block.
    */
})();