


//!--exc1--!
var dates = [];
const currentDate = new Date(Date.now());
dates.push(currentDate);

//!--exc2--!
const specDate = new Date('2018-12-08');
dates.push(specDate);
specDate.setHours(21,00,00);

for(idx in dates){
    console.log(dates[idx]);
}

    
//!--exc3--!

function toweekDay(date){
    return date.getDay();
}

function daysInMonth(date){
    
    const answer = new Date(date.getFullYear(),date.getMonth(),0);
    return answer.getDate();
}

function toCouples(date){

    var tmp = new Date(date);
    return [daysInMonth(tmp),toweekDay(tmp)];

}
function final(myArray){

  return myArray.map(toCouples);
}

var array2 = final(dates); 
console.log(array2);
//console.log(array2[1][0]);

//!--exc4--!

function zero(i) {
    
    if (i < 10) {
     return  i = "0" + i;
    }
    else{
    return i;
  }
}

var days=["неделя","понеделник","вторник","сряда","четвръртък","петък","събота"];


var array3 = []; // combining both arrays
for(var i = 0; i < dates.length; i++){
    array3.push("Дата:" + zero(dates[i].getDate()) + "." + zero(dates[i].getMonth()) + "." 
    + dates[i].getFullYear() + "," + "час:" + zero(dates[i].getUTCHours()) + ":" +
     zero(dates[i].getUTCMinutes()) + ":" + zero(dates[i].getUTCSeconds()) + ","
     + days[array2[i][1]] + ", "+ array2[i][0]+ "дни" );
}

for(idx in array3){
    console.log(array3[idx]);
}


