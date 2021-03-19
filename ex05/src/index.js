//Only change code below this line 
var myNestedArray= [["Tablerone",5], ["Milka",3]];
function myNestedFunction(arr){

    var newNestedArayy =[...arr];
    
    return newNestedArayy;
}
// Only change code above this line
console.log(myNestedFunction(myNestedArray));
module.exports =myNestedFunction;
