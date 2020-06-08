var usersInput = 0;

var button = document.getElementById("button");
button.addEventListener("click", checkNights,false);
var x = Math.floor(nightInput * 210);

//Check nights
function checkNights() {
	usersInput = parseInt(document.getElementById("nightInput").value);
	console.log(typeof(usersInput))
	if (typeof(usersInput) == "Number") {
		alert("give a number");
		// document.getElementById("nightInput").reset();
		
	} else {
			var n = Math.floor(Math.random()*15);
			console.log (n);
			if (usersInput <= n){
				document.getElementById("pricecheck").innerHTML = "Standard room for " + usersInput + " days will be priced at " + (usersInput*180) + " €" + "<br>" + "and the Deluxe room " + (usersInput*210) + " €";
			} else {
				document.getElementById("pricecheck").innerHTML = "Sorry, no rooms are available."
			}
			console.log("Sorry, no rooms left");
	}
};

