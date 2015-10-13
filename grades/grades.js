// A score between 50-60 is an F
// A score between 61-70 is a D
// A score between 71-80 is a C
// A score between 81-90 is a B
// A score between 91-100 is an A

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
console.log("Scores: ",scores);

var aGrades = 0;
var bGrades = 0;
var cGrades = 0;
var dGrades = 0;
var fGrades = 0;

// How many of each grade?
for (var i=0; i < scores.length; i++) {
	if (scores[i] > 90) { aGrades++}
	else if (scores[i] > 80) {bGrades++}
	else if (scores[i] > 70) { cGrades++}
	else if (scores[i] > 60) { dGrades++}
	else if (scores[i] > 49) { fGrades++}
	else {
		console.log("Student "+i+"Score below 50, please have Parent/Teacher Conference")}
}

console.log("There are "+aGrades+" A's");
console.log("There are "+bGrades+" B's");
console.log("There are "+cGrades+" C's");
console.log("There are "+dGrades+" D's");
console.log("There are "+fGrades+" F's");

// What is the lowest grade?
console.log(Math.max.apply(Math,scores));

// What is the highest grade?
console.log(Math.min.apply(Math,scores));