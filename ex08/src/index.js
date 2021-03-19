//Only change code below this line
function myMutation (arr){

     arr= [
         ["hello", "Hello"],
         ["hello", "hey"]
        ];
     
    arr.sort(function(a, b){
        var x = a.type.toLowerCase();
        var y = b.type.toLowerCase();
        if (x < y) {return true};
        if (x > y) {return false};
        
        return 0;
      });
    
    }
 


//
console.log (myMutation(["Hello", "hey"]));
module.exports = myMutation;