const months = {
    0: "January",
    1: "February",
    2: "March",
    3:"April",
    4: "May",
    5: "June", 
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December"
}

const monthS = {
    "January": 1,
    "February": 2,
    "March": 3,    
    "April": 4,
    "May": 5,
    "June": 6, 
    "July": 7,
    "August": 8,
    "September": 9,
    "October": 10,
    "November": 11,
    "December": 12
}




window.onload = function(){
    window.today = new Date();
    window.day = today.getDate();
    renderCalendar(today.getFullYear(), months[today.getMonth()]);


    // Listen for changes

    let year = document.getElementById("year");
    let month = document.getElementById("month");
    let day = document.querySelector(".day");
    
    day.innerHTML = window.day;

    year.value = today.getFullYear();

    year.addEventListener("change", () => {
        renderCalendar(Number(year.value), month.value);
    });


    month.addEventListener("change", () => {
        renderCalendar(Number(year.value), month.value);
    });
}



/**
 * *********** Same as Date.prototype.getDay();  **********************
 * 
 * over a period of four hundred years, there are 97 leap years and 303 normal years. 
 * Each normal year, the day of January 1 advances by one and for each leap year it advances by two.
 * Thus, January 1 in year N occurs on the same day of the week as January 1 in year N + 400.
 * Then, to get the day number:
 *      @formula W = (k + floor(2.6m - 0.2) - 2C + Y + floor(y/4) + floor(c/4)) mod 7
 * where: 
 *      k is day (1 to 31)
 *      @important m is month (1 = March, ..., 10 = December, 11 = Jan, 12 = Feb) Treat Jan & Feb as months of the preceding year
 *      C is century (1987 has C = 19)
 *      Y is year (1987 has Y = 87 except Y = 86 for Jan & Feb)
 *      W is week day (0 = Sunday, ..., 6 = Saturday)
 * 
 * @param {int} dayNb 
 * @param {int} monthNb 
 * @param {int} centuryNb 
 * @param {int} yearNb 
 * @returns {string} dayName
 */
function getDayName(dayNb, monthNb, centuryNb, yearNb){
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    let day = (dayNb + Math.floor(2.6 * monthNb - 0.2) - (2 *  centuryNb) + yearNb + Math.floor(yearNb / 4) + Math.floor(centuryNb / 4)) % 7;
    return day;
    // return [day, days[day]];
}




/***
 * Check if the current year is leap or not. in order to determine the number of days in february.
 * 
 * @param {int} year
 * @returns {boolean}
 */
function isLeapYear(year){
    if((year % 4) == 0){
        if((year % 100) == 0){
            if((year % 400) == 0){
                return true;
            }else{
                return false;
            }
        }
        return true;
    }
    return false;
}





/***
 * Render the calendar in the UI.
 * 
 * @param {year} int
 * @param {String} month
 * @returns {void}
 */
function renderCalendar(year, _month){
    
    let feb = 0;
    if(isLeapYear(year)){
        feb = 29;
    }else{
        feb = 28;
    } 
    
    const months = {
        January: 31,
        February: feb,
        March: 31,
        April:30,
        May: 31,
        June: 30, 
        July: 31,
        August: 31,
        September: 30,
        October: 31,
        November: 30,
        December: 31
    }

    
    
    
    

    // fill the calendar 
    let parent = document.querySelector(".month-days");
    let calendarEntries = Array.from(parent.children);
    
    if(!calendarEntries.length == 0){
        calendarEntries.forEach((span) => {
            span.remove();
        });
    }
    for (const [month, nbOfDays] of Object.entries(months)) {
        if(month == _month){
            document.querySelector(".year").innerHTML = year;
            document.querySelector(".month").innerHTML = monthS[_month];
            document.querySelector(".day").innerHTML = window.day;
            
            for(let i = 1; i <= nbOfDays; i++){
                let day = document.createElement("span");
                day.innerText = i;
                if(i == 1){
                    let d = getDayName(1, getMonthNumber(_month), getCentury(year), year);
                    d -= 1;
                    if(d <= 0){
                        day.style.gridColumnStart = 7;
                    }else{
                        day.style.gridColumnStart = d;
                    }
                }

                if(i == window.day){
                    day.classList.add("today");
                }
                parent.appendChild(day);
            }
            dayChanges(parent);
        }
    }
    
    
    // Fill out the "year" <select>
    let selectYear = document.getElementById("year");
    
    for(let i = 1900; i <= window.today.getFullYear(); i++){
        let year = document.createElement("option");
        year.setAttribute("value", i);
        year.innerText = i;
        selectYear.appendChild(year);
    }
}




function dayChanges(parent){
    Array.from(parent.children).forEach((day) => {
        day.addEventListener("click", (e) => {
            document.querySelector(".day").innerHTML = day.innerHTML;
            window.day = document.querySelector(".day").innerHTML;
            removeDays(parent);
            day.classList.add("today");
        });
    });
}



/***
 * return the month number according to the @above algorithm
 * 
 * @param {String} month
 * @returns {int} month number 
 */

function getMonthNumber(month){
    const months = {
        January: 11,
        February: 12,
        March: 1,
        April: 2,
        May: 3,
        June: 4, 
        July: 5,
        August: 6,
        September: 7,
        October: 8,
        November: 9,
        December: 10
    }
    return months[month];
}


/**
 * get the century for the corresponding year.
 * 
 * @param {int} year 
 * @returns {int} century
 */
function getCentury(year){
    let century = 0;
    year = Math.floor(year / 100);
    if(year >= 1 && year <= 99){
        century = year + 1;
    }else{
        century = year;
    }
    return century;
}








function removeDays(parent){
    Array.from(parent.children).forEach(child => {
        if(child.classList.contains("today")){
            child.classList.remove("today");
        }
    });
}