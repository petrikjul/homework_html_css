var b = prompt("Введите число");
var order = b;
var steps = 0;
var verh = 0;

while (b !== 1) {
  if (b % 2 === 0) {
    b = b/2;        
  } else {
    b = b * 3 + 1;     
  }

  order += ' ' + b;
  steps++;
  verh = verh < b ? b: verh;
}

console.log("order:", order);
console.log("steps:", steps);
console.log("verh:", verh);