//Celsius to F converter
var temp=prompt("Enter your C to F: "); 
var celciusConv=temp*1.8+32;
console.log(celciusConv)
alert("Your temperature in C is: " + temp + " and your temperature in F is: " + celciusConv)

//Alternative to lengthy if/else statements
var isGoing = false;
var color = isGoing ? "yellow" : "red";
console.log(color);

//For loop sample 
for (var x = 0; x < 26; x = x + 1) {
  for (var y = 0; y < 99; y = y + 1) {
  	console.log(x + "," + y);
  }
}

