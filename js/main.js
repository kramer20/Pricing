var blueCart = 29;
var pinkCart = 19;
var orangeCart = 39;
var total = 0;

function add29() {
	total=total+blueCart;
  var input = document.getElementById("subtotal");
  var totalBox = document.getElementById("total");
  input.value = total;
  totalBox.value = calculateTotal();
}

function add19() {
	total=total+pinkCart;
  var input = document.getElementById("subtotal");
  var totalBox = document.getElementById("total");
  input.value = total;
  totalBox.value = calculateTotal();
}

function add39() {
	total=total+orangeCart;
  var input = document.getElementById("subtotal");
  var totalBox = document.getElementById("total");
  input.value = total;
  totalBox.value = calculateTotal();
}

function calculateTotal() {
  return (total*.065) + total;
}
