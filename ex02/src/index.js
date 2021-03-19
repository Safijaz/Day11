// Create a temps arrey here

 var monday = [31,32,19,37];
  var tuesday = [29,27,55,36];
  var wednesday= [17,27,55,36];
  var thursday =[29,52,21,64];
  var friday= [91,27,31,61];
  var temps = [monday,tuesday,wednesday,thursday,friday];
  
// End of temps arrey
function myArreyFunction(arr){
    var newTemps = [...arr];
    var averageDayTemp = [];
    // only change code below this line 
   for (var i=0; i<newTemps.length; i++) {
         var sumDayTemp=0;
        for (var c=0; c<newTemps[i].length; c++) {
             sumDayTemp=sumDayTemp+newTemps[i][c];

        }
        averageDayTemp.push(sumDayTemp/4);

   }
    // only change code above this line
    return averageDayTemp;
}
console.log (myArreyFunction(temps));
module.exports = myArreyFunction;