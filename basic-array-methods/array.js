/*
  ...........YOUR MISSION...........

  Write JavaScript functions that perform the following tasks.

  COMPLETED 1. document.write() the characters of any string in reverse order.
  2. document.write() the characters of any string in alphabetical order.
  3. document.write() true, or false, if the passed string is a palidrome.

  Note: document.write() is a fast way to put content into the DOM 
  without the need for a getElementById() and innerHTML.
*/

function reversal(origString) {
	document.write("<div>",origString.split("").reverse().join(""),"</div>");
}

function alphabits(origString) {
	document.write("<div>",origString.split("").sort().join(""),"</div>");
}

function palindrome(origString) {
	origString = origString.toLowerCase().replace(/,. /g,"")
	var reverseString = origString.split("").reverse().join("");
	console.log("origString: ",origString);
	console.log("reverseString: ",reverseString)

	if (reverseString === origString) {
		document.write("<div>","Yes, \"",origString,"\" is a palindrome.");
	}
	else {
		(document.write("<div>","No, \"",origString,"\" is NOT a palindrome."));
	}
}

var testString = "this is A tes..set a si sih";
reversal(testString);
alphabits(testString);
palindrome(testString);