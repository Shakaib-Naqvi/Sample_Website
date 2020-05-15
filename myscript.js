function myFunction() {
  alert("What are You Doing?");
}

// console.log(122131235 * 6342234234999999999n);
// window.alert("Welcome")

// var a, b, c;
// a = 5;
// b = 6;
// c = a + b;
// document.getElementById("demo1").innerHTML = c;
// var price1 = 5;
// var price2 = 6;
// var total = price1 + price2;
// document.getElementById("demo").innerHTML =
//   `The total is: ${total}`;

// var w = window.innerWidth
//   || document.documentElement.clientWidth
//   || document.body.clientWidth;

// var h = window.innerHeight
//   || document.documentElement.clientHeight
//   || document.body.clientHeight;

// var x = document.getElementById("demo");
// x.innerHTML = "Browser inner window width: " + w + ", height: " + h + ".";

function ab(){
var a = document.getElementById("countries").value ="USD";

alert(a);}
var text = "";
var i = 0;
const as = 12;
US_Dollar = 160.7;
Euro = 172.68;
Dirham = 43.61;
Pound = 194.99;
Riyal = 42.64;
Indian_Rupee = 2.12;

function add() {
  if (document.querySelector(`#opti`).value = true) {
    if (document.querySelector(`#currency`).value > 1) {
      mulitply = document.querySelector(`#currency`).value * US_Dollar
      converted = mulitply.toFixed(2)
      alert(`${document.querySelector(`#currency`).value} USD Dollar = ${converted} Pakistani Rupees`);
      // document.write(`${document.querySelector(`#currency`).value} USD Dollar = ${converted} Pakistani Rupees`);
    }
    else if (document.querySelector(`#currency`).value < 1) {
      mulitply = document.querySelector(`#currency`).value * US_Dollar
      converted = mulitply.toFixed(2)
      alert(`${document.querySelector(`#currency`).value} USD Dollar = ${converted} Pakistani Rupees`);
      // document.write(`${document.querySelector(`#currency`).value} USD Dollar = ${converted} Pakistani Rupees`);
    }
    else {
      alert("Input Valid Number");
      document.write(`Input Valid Number`);
    }
  }
  else if (document.querySelector(`#EUR`).value = true) {
    if (document.querySelector(`#currency`).value > 1) {

      mulitply = document.querySelector(`#currency`).value * Euro
      converted = mulitply.toFixed(2)
      alert(`${document.querySelector(`#currency`).value} Euro = ${converted} Pakistani Rupees`);
      document.write(`${document.querySelector(`#currency`).value} Euro = ${converted} Pakistani Rupees`);
    }
    else if (document.querySelector(`#currency`).value < 1) {
      mulitply = document.querySelector(`#currency`).value * Euro
      converted = mulitply.toFixed(2)
      alert(`${document.querySelector(`#currency`).value} Euro = ${converted} Pakistani Rupees`);
      document.write(`${document.querySelector(`#currency`).value} Euro = ${converted} Pakistani Rupees`);
    }
    else {
      alert("Input Valid Number");
      document.write(`Input Valid Number`);
    }
  }
  else if (document.querySelector(`#AED`).value = true) {
    if (document.querySelector(`#currency`).value > 1) {

      mulitply = document.querySelector(`#currency`).value * Dirham
      converted = mulitply.toFixed(2)
      alert(`${document.querySelector(`#currency`).value} Dirham = ${converted} Pakistani Rupees`);
      document.write(`${document.querySelector(`#currency`).value} Dirham = ${converted} Pakistani Rupees`);
    }
    else if (document.querySelector(`#currency`).value < 1) {
      mulitply = document.querySelector(`#currency`).value * Dirham
      converted = mulitply.toFixed(2)
      alert(`${document.querySelector(`#currency`).value} Dirham = ${converted} Pakistani Rupees`);
      document.write(`${document.querySelector(`#currency`).value} Dirham = ${converted} Pakistani Rupees`);
    }
    else {
      alert("Input Valid Number");
      document.write(`Input Valid Number`);
    }
  } else if (document.querySelector(`#GBP`).value = true) {
    if (document.querySelector(`#currency`).value > 1) {

      mulitply = document.querySelector(`#currency`).value * Pound
      converted = mulitply.toFixed(2)
      alert(`${document.querySelector(`#currency`).value} Pound = ${converted} Pakistani Rupees`);
      document.write(`${document.querySelector(`#currency`).value} Pound = ${converted} Pakistani Rupees`);
    }
    else if (document.querySelector(`#currency`).value < 1) {
      mulitply = document.querySelector(`#currency`).value * Pound
      converted = mulitply.toFixed(2)
      alert(`${document.querySelector(`#currency`).value} Pound = ${converted} Pakistani Rupees`);
      document.write(`${document.querySelector(`#currency`).value} Pound = ${converted} Pakistani Rupees`);
    }
    else {
      alert("Input Valid Number");
      document.write(`Input Valid Number`);
    }
  }
  else if (document.querySelector(`#SAR`).value = true) {
    if (document.querySelector(`#currency`).value > 1) {

      mulitply = document.querySelector(`#currency`).value * Riyal
      converted = mulitply.toFixed(2)
      alert(`${document.querySelector(`#currency`).value} Riyal = ${converted} Pakistani Rupees`);
      document.write(`${document.querySelector(`#currency`).value} Riyal = ${converted} Pakistani Rupees`);
    }
    else if (document.querySelector(`#currency`).value < 1) {
      mulitply = document.querySelector(`#currency`).value * Riyal
      converted = mulitply.toFixed(2)
      alert(`${document.querySelector(`#currency`).value} Riyal = ${converted} Pakistani Rupees`);
      document.write(`${document.querySelector(`#currency`).value} Riyal = ${converted} Pakistani Rupees`);
    }
    else {
      alert("Input Valid Number");
      document.write(`Input Valid Number`);
    }
  } else if (document.querySelector(`#INR`).value = true) {
    if (document.querySelector(`#currency`).value > 1) {

      mulitply = document.querySelector(`#currency`).value * Indian_Rupee
      converted = mulitply.toFixed(2)
      alert(`${document.querySelector(`#currency`).value} Indian Rupee = ${converted} Pakistani Rupees`);
      document.write(`${document.querySelector(`#currency`).value} Indian Rupee = ${converted} Pakistani Rupees`);
    }
    else if (document.querySelector(`#currency`).value < 1) {
      mulitply = document.querySelector(`#currency`).value * Indian_Rupee
      converted = mulitply.toFixed(2)
      alert(`${document.querySelector(`#currency`).value} Indian Rupee = ${converted} Pakistani Rupees`);
      document.write(`${document.querySelector(`#currency`).value} Indian Rupee = ${converted} Pakistani Rupees`);
    }
    else {
      alert("Input Valid Number");
      document.write(`Input Valid Number`);
    }
  }
  else {
    document.write("What are You Doing!!!");
  }
}

document.addEventListener(`DOMContentLoaded`, () => {
  // try {
  //   alert("Welcome guest!");
  // } catch (err) {
  //   document.getElementById("demo").innerHTML = err.message;
  // }

  // By default, submit button is disabled
  document.querySelector('#submit').disabled = true;

  // Enable submit button if there is text in the input field
  document.querySelector('#currency').onkeyup = () => {
    if (document.querySelector('#currency').value.length > 1)
      document.querySelector('#submit').disabled = false;
    else
      document.querySelector('#submit').disabled = true;

  };

});

