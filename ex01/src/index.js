//create an arrey here
var myArr =[2,4,0,8,10];
// End of crearing an arrey
function myArreyFunction(arr){
var myItems = [...arr];
//Only change code below this lin
myItems[2]=6;

return myItems;
 
//Only change code above this line 

}
console.log(myArreyFunction(myArr));
module.exports = myArreyFunction;