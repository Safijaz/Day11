// Create a monitorsListArray
var monitorsListArray= ["Apple","Peach", "Berry"];
//  End of monitorsListArrey arraz
 
 function myMonitorsFunction(arr){
     var newMonitorsList= [...arr];
     var monitorsList = [];
// Only change code below this line 
     for(var i=0; i<newMonitorsList.length; i++) {
          monitorsList.push([newMonitorsList[i],i+1]);
     }
    
// only change code above this line
     return monitorsList;
 }
 console.log (myMonitorsFunction(monitorsListArray));
 module.exports = myMonitorsFunction;