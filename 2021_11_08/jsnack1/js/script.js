// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione(benzina, diesel, gpl, elettrico, metano).
// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
// Infine stampa separatamente i 3 array.

const auto = [
    {
        'marca' : 'fiat',
        'modello' : 'punto',
        'alimentazione' : 'metano'
    },
    {
        'marca': 'volkswagen',
        'modello': 'polo',
        'alimentazione': 'metano'
    },
    {
        'marca': 'dacia',
        'modello': 'sandero',
        'alimentazione': 'gpl'
    },
    {
        'marca': 'bmw',
        'modello': '520i',
        'alimentazione': 'benzina'
    },
    {
        'marca': 'citroen',
        'modello': 'c3',
        'alimentazione': 'diesel'
    },
    {
        'marca': 'opel',
        'modello': 'corsa',
        'alimentazione': 'elettrico'
    },
    {
        'marca': 'hyundai',
        'modello': 'i30',
        'alimentazione': 'diesel'
    },
    {
        'marca': 'tesla',
        'modello': 'model 3',
        'alimentazione': 'elettrico'
    },
    {
        'marca': 'fiat',
        'modello': 'punto',
        'alimentazione': 'benzina'
    },
    {
        'marca': 'fiat',
        'modello': 'tipo',
        'alimentazione': 'diesel'
    },
];

const benzina = auto.filter((auto) => {
    return auto.alimentazione === 'benzina';
});
console.log(benzina);

const diesel = auto.filter((auto) => {
    return auto.alimentazione === 'diesel';
});
console.log(diesel);

const eco = auto.filter((auto) => {
    return (auto.alimentazione !== 'diesel' && auto.alimentazione !== 'benzina');
});
console.log(eco);