var myNumber =5;
for (i=5; i <120; i+=10)
{
	console.log("Current Value is [i]",i);
}

var newNumber = 4096;
for (i= 4096; i >= 1 ;i /= 2) {
	console.log("Current Value is [i]",i);
}

var president = ["George Washington","John Adams","Thomas Jefferson"];
 for (i=0; i < president.length ; i++){
 	console.log ("President #"+i+" was " + president[i]);
 		 	} 		


 var antSpecies = {	 	
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}
  for (var ant in antSpecies){
   console.log(ant);
}