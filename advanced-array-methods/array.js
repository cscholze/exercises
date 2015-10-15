var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

// COMPLETED: Use the forEach method to add the name of each planet to a div element in your HTML
planets.forEach(function(planet) {
	document.getElementById("planetList").innerHTML += "<div>"+planet+"</div>";
});

// COMPLETED: Use the map method to create a new array where the first letter of each planet is capitalized
var capitalPlanets = planets.map(function(planet) {
	planet =  planet.charAt(0).toUpperCase() + planet.slice(1);
	document.getElementById("capitalPlanetList").innerHTML += "<div>"+planet+"</div>";
	return planet;
});

// COMPLETED Use the filter method to create a new array that contains planets with the letter 'e'
var ePlanetsList = planets.filter(function(planet) {
	if (planet.indexOf("e") > -1) {
	document.getElementById("ePlanets").innerHTML += "<div>"+planet+"</div>";
	return true;
	}
	else {return false;}
});

// COMPLETED Use the reduce method to create a sentence from the words in the following array
var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

var sentence = words.reduce(function(prevWord,curWord) {
	return prevWord + " " + curWord;
});
document.getElementById("sentence").innerHTML += "<div>"+sentence+"."+"</div>";