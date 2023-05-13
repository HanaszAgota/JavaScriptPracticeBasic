// Function 
// alprogram (subrutine)

function fryTheScrambledEggs() {
    console.log('Pour oil into the pen')
    console.log('Add 3 eggs')
    AddSpices();
    console.log('Fry for 4 min')
    console.log('Ready')
}

function AddSpices() {
    console.log('Add salt');
    console.log('Add pepper');
    console.log('Add paprika');
}

// function call 

fryTheScrambledEggs();
console.log('-----');
fryTheScrambledEggs();
console.log('-----');
fryTheScrambledEggs();

// function Math
// input adatból output adatot kigeneráló eszköz

//beérkezik egy (number) és távozik egy --> number

function addOne(number) {
    console.log(number)
    return number + 1;
}

console.log(addOne(addOne(addOne(addOne(3)))));

function addTwo(number) {
    return {
        0: 1,
        1: 3,
        2: 4,

    }[number]
}

console.log(addTwo(addTwo(0)));

// first class citizen
// anonim function

const addThree = function(number) {
    return number + 3;
}

console.log(addThree(4));