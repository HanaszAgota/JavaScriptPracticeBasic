const quantity = prompt('Add meg a darabszámot!');
const type = prompt('Add meg a típust!');

console.log(quantity);
console.log(type);

const types = {
    student: 300,
    adult: 350,
    retired: 280,
}

const price = types[type];
const discount = quantity > 10 ? 0.9 : 1;

const total = quantity * price * discount;

alert(total);

// Input:
//     Hány jegyet kér?
//     Milyen típusú jegyet kér? (student vagy adult)

//     A diák jegy ára 300.- 
//     A  felnőtt jegy 350.-
//     Nyugíjas jegy ára 280.-
//     10-nél több jegy vásárlása esetén 10% kedvezmény