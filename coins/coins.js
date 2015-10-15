/* ...........YOUR MISSION...........

Write a program that will convert a dollar amount to the number of coins that make up the amount. Use the common American coins of quarters, dimes, nickels, and pennies.

Input: 0.67 Output: { quarters: 2, dimes: 1, nickels: 1, pennies: 2 }
*/

//Coinpurse object
var coinPurse = {
	quarters: 0,
	dimes: 0,
	nickels: 0,
	pennies: 0,

	// Object methods
	coinCounter: function(dollarAmount) {
		dollarAmount = dollarAmount*100; //multiply to avoid float operations
		coinPurse.quarters = Math.floor(dollarAmount/25);
		dollarAmount = dollarAmount - coinPurse.quarters*25;
		console.log(dollarAmount);
		coinPurse.dimes = Math.floor(dollarAmount/10);
		dollarAmount = dollarAmount - coinPurse.dimes*10;
		console.log(dollarAmount);
		coinPurse.nickels = Math.floor(dollarAmount/5);
		coinPurse.pennies = Math.round(dollarAmount - coinPurse.nickels*5); 
	}
}

// TEST CODE HERE, ENTER DOLLAR AMOUNT AS xxxx.xx
DOLLARAMOUNT = 143.65;

coinPurse.coinCounter(DOLLARAMOUNT);
console.log(coinPurse);