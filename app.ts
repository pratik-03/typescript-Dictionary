var input = [{key:"2020-01-10", value:0},{key:"2020-01-11", value:1},{key:"2020-01-15", value:2}];



var result = {};

PrintValues(input);

console.log(result);

function PrintValues(input){
       
    var startDate=input[0].key;
    var firstDate=input[1].key;
    var endDate=input[input.length-1].key;
    
var dateArray = getDates(new Date(startDate), addDays(new Date(endDate),input[2].value));

for (var i = 0; i < dateArray.length; i ++ ) {
   
    console.log(GetFormattedDate(dateArray[i]));
  
}
    
for(var i = 0; i < input.length; i++)
{
    result[input[i].key] = input[i].value;
}
    
}

function GetFormattedDate(date) {
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var year = date.getFullYear();
    return year +"-"+month+"-"+day;
}


function addDays(date,days){
    date.setDate(date.getDate() + days);
    return date;
}

function getDates(startDate, stopDate) {
    var dateArray = new Array();
    var currentDate = startDate;
    while (currentDate <= stopDate) {
        dateArray.push(new Date (currentDate));
        currentDate = addDays(currentDate,1);
    }
    return dateArray;
}

 

