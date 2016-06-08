var blueCart = 29;
var pinkCart = 19;
var orangeCart = 39;
var total = 0;

var BlueinCart = false;
var PinkinCart = false;
var OrangeinCart = false;

function add29() { 
  var cartBlue=document.getElementById("cartBlue")
  if (BlueinCart==false)
  {
    cartBlue.className='active';
    BlueinCart=true;
    total=total+blueCart;
    var input = document.getElementById("subtotal");
    var totalBox = document.getElementById("total");
    input.value = total;
    totalBox.value = calculateTotal(); 
  }
  else
  {
    cartBlue.className="click";
    BlueinCart=false;
    total=total-blueCart;
    var input = document.getElementById("subtotal");
    var totalBox = document.getElementById("total");
    input.value = total;
    totalBox.value = calculateTotal();
  }
}

function add19() { 
  var cartPink=document.getElementById("cartPink")
  if (PinkinCart==false)
  {
    cartPink.className='active';
    PinkinCart=true;
    total=total+pinkCart;
    var input = document.getElementById("subtotal");
    var totalBox = document.getElementById("total");
    input.value = total;
    totalBox.value = calculateTotal(); 
  }
  else
  {
    cartPink.className="click";
    PinkinCart=false;
    total=total-pinkCart;
    var input = document.getElementById("subtotal");
    var totalBox = document.getElementById("total");
    input.value = total;
    totalBox.value = calculateTotal();
  }
}

function add39() { 
  var cartOrange=document.getElementById("cartOrange")
  if (OrangeinCart==false)
  {
    cartOrange.className='active';
    OrangeinCart=true;
    total=total+orangeCart;
    var input = document.getElementById("subtotal");
    var totalBox = document.getElementById("total");
    input.value = total;
    totalBox.value = calculateTotal(); 
  }
  else
  {
    cartOrange.className="click";
    OrangeinCart=false;
    total=total-orangeCart;
    var input = document.getElementById("subtotal");
    var totalBox = document.getElementById("total");
    input.value = total;
    totalBox.value = calculateTotal();
  }
}


function calculateTotal() {
  return (total*.065) + total;
}
