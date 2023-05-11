// (line comment)

/*
blokk 
komment
*/

//Adattípusok

// string karakterfűzér
console.log('Szia');
console.log("Szia");

//number (szám)

console.log(500)

//adjunk hozzá egy másik számot +
//vonjunk ki belőle egy másik számot -
//osztás utáni maradék %
//osztás /
//szorzás *

//boolean (igaz, hamis)

console.log(true);
console.log(false);

//undefined

console.log(undefined);

//null

console.log(null);

//Array <_>
//array of ?

//Array<string>

console.log(['elso', 'masodik', 'harmadik']);

//Array<number>

console.log([2, 12, 3])

//szűrés
//sorba rendezés
//új elem hozzáadása
//aggregálás

console.log([2,12,3][1]);

//nem javasolt

console.log([true, 2, "string"]);

//több dimenziós tömb
//Array<Array<number>>
console.log([[2, 3], [32, 10], [6, 4]][1][1]);

//OBJECT - Objektum
//kulcs-érték párok sorozata

//1.Írd ki a második telefonszámot

console.log(
    {
        firstName: 'Ágota',
        lastName: 'Hanász',
        age: 30
    }.lastName
);

console.log(
    {
        firstName: 'Ágota',
        lastName: 'Hanász',
        age: 30,
        phoneNumbers: ['06302456543', '06203456543'],
        adress: {
            street: 'Törökvész',
            city: 'Budapest',
        }
    }.phoneNumbers[0]
)

//2. Az első telefon neve

console.log(
    [
        {
            barnd: 'Apple',
            name: 'iPhone X',
            price: 250000,
            provider: {
                country: 'HU',
                name: 'Vodafone'
            } 
        },
        {
            barnd: 'Huawei',
            name: '10',
            price: 100000,
            provider: {
                country: 'HU',
                name: 'Yettel'
            } 
        },
        {
            barnd: 'Samsung',
            name: 'Galaxy S22',
            price: 200000,
            provider: {
                country: 'HU',
                name: 'Telekom'
            } 
        },
    ][0].name
)

//2. A második telefon árát

console.log(    
    [
        {
            barnd: 'Apple',
            name: 'iPhone X',
            price: 250000,
            provider: {
                country: 'HU',
                name: 'Vodafone'
            } 
        },
        {
            barnd: 'Huawei',
            name: '10',
            price: 100000,
            provider: {
                country: 'HU',
                name: 'Yettel'
            } 
        },
        {
            barnd: 'Samsung',
            name: 'Galaxy S22',
            price: 200000,
            provider: {
                country: 'HU',
                name: 'Telekom'
            } 
        },
    ][1].price
)

// 3. A harmadik telefon szolgáltatójának orsazágát
console.log(    
    [
        {
            barnd: 'Apple',
            name: 'iPhone X',
            price: 250000,
            provider: {
                country: 'HU',
                name: 'Vodafone'
            } 
        },
        {
            barnd: 'Huawei',
            name: '10',
            price: 100000,
            provider: {
                country: 'HU',
                name: 'Yettel'
            } 
        },
        {
            barnd: 'Samsung',
            name: 'Galaxy S22',
            price: 200000,
            provider: {
                country: 'HU',
                name: 'Telekom'
            } 
        },
    ][2].provider.country
)




























