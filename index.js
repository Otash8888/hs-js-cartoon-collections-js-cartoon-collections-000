function dwarfRollCall(dwarves) {
  var dwarves1 = [];

  for (let i=0; i<dwarves.length/2; i++){
    dwarves1[i]=`${i+1}. ${dwarves[i]} `
  }
 
 
 
  return dwarves1.join("");

}

function summonCaptainPlanet(planeteerCalls){
  var planeteerCallsUpperCaseAndExc = [];
  for (let i=0; i<planeteerCalls.length; i++) {
    planeteerCallsUpperCaseAndExc[i]=`${planeteerCalls[i].toUpperCase()}!`
  }
  return planeteerCallsUpperCaseAndExc;
}

function longPlaneteerCalls(words) {
  var x;
   for (let i=0; i<words.length; i++) {
   
  if (words[i].length>4){
    x=true;
  } else{
    x=false;
  }
  
     
   }
   return x;
}

function findTheCheese (foods) {
  var cheese;
 
 for (let i=0;i<foods.length;i++){
   
if ((foods[i]==="cheddar") || (foods[i]==="gouda") || (foods[i]==="camembert") || (foods[i]==="swiss")) {
   cheese = foods[i];
  i=foods.length;
  }
else{
  cheese = "no cheese!"
  }
}  
 return cheese
}

function wordsWithB (arrWords){
  var arrWithB = [];
  
  for (var i = 0; i<arrWords.length; i++){
   if(arrWords[i].includes("b")){
     arrWithB.push(arrWords[i]);
   } 
  }

  return arrWithB
}










