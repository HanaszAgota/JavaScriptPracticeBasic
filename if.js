// if / else statement

const age = prompt("Add meg az életkorod!");

// if(age < 20) {
//     alert('Fiatalabb, mint 20')
// }else if (age > 20 && age < 30){
//     alert('Idősebb, mint 20 és fiatalabb, mint 30')
// }else {    
//     alert('Időseb mint 30')
// }

//switch statement
// explicit egyezőség

switch(age) {
    case 18:
        console.log('Felhasználó 18 éves');
        break;
    case 19:
        console.log('Felhazsnáló 19 éves');
        break;    
    default:
        console.log('Felhasználó életkora ismeretlen')
}

switch(true) {
    case age < 20:
        alert('Fiatlabb, mint 20');
        break;
    case age > 20 && age < 30:
        alert('Idősebb, mint 20 és fiatalabb, mint 30')
        break;
    default:
        alert('Idősebb, mint 30');
}

