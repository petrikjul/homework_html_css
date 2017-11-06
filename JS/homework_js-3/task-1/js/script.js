var allNumbers = [];
var evenNumbers = [];
var oddNumbers = [];

var userNumber = parseInt(prompt('Введите число:'));

var counter = userNumber;

for (var i = 0; counter <= userNumber + 100; i++, counter++) {
    allNumbers[i] = counter;

    if (counter % 2 === 0) {
        evenNumbers.push(counter);
        
    } else {
        oddNumbers.push(counter);
    }
}

console.log('Все числа:', allNumbers);
console.log('Четные числа:', evenNumbers);
console.log('Нечетные числа:', oddNumbers);