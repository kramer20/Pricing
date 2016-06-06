var blueCart = 29;
var pinkCart = 19;
var orangeCart = 39;
var tax = .065;
var total = 0;

function add29() {
	total=total+blueCart;
  var input = document.getElementById("subtotal");
  input.value = total;
}

function add19() {
	total=total+pinkCart;
  var input = document.getElementById("subtotal");
  input.value = total;
}

function add39() {
	total=total+orangeCart;
  var input = document.getElementById("subtotal");
  input.value = total;
}


