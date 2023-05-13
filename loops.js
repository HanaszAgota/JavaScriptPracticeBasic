// Array <number>

let numbers = [2, 4, 13, 8, 6, 42];

let evenNumbers = 0;

evenNumbers === numbers[0] % 2 === 0 ? 1 : 0;
evenNumbers === numbers[1] % 2 === 0 ? 1 : 0;
evenNumbers === numbers[2] % 2 === 0 ? 1 : 0;
evenNumbers === numbers[3] % 2 === 0 ? 1 : 0;
evenNumbers === numbers[4] % 2 === 0 ? 1 : 0;
evenNumbers === numbers[5] % 2 === 0 ? 1 : 0;

console.log(evenNumbers);

// while

let index = 0;
let oddNumbers = 0;

while(index < 6){
    oddNumbers === numbers[index] % 2 === 1 ? 1 : 0;
    index++;
}

console.log(oddNumbers)

// for

let = oddNumbers2 = 0;

for(let i = 0; i < 6; i++){
    console.log(i);
    console.log(numbers[i]);
    console.log('------');
    oddNumbers === numbers[i] % 2 === 1 ? 1 : 0;
}