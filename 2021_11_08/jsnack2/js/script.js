// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un’età.
// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.

const persone = [
    {
        'nome' : 'mattia',
        'cognome' : 'barbieri',
        'eta' : 25
    },
    {
        'nome': 'marco',
        'cognome': 'rossi',
        'eta': 17
    },
    {
        'nome': 'sara',
        'cognome': 'ferri',
        'eta': 16
    },
    {
        'nome': 'tizio',
        'cognome': 'caio',
        'eta': 18
    },
    {
        'nome': 'ezio',
        'cognome': 'auditore',
        'eta': 45
    },
    {
        'nome': 'lara',
        'cognome': 'croft',
        'eta': 36
    },
];

console.log(persone);

// const guida = [];
// for (let i = 0; i < persone.length; i++) {
//     if (persone[i].eta < 18) {
//         idoneita = 'non sei idoneo';
//     } else {
//         idoneita = 'sei idoneo';
//     }
//     let persona = { ...persone[i], 'idoneo' : idoneita };
//     guida.push(persona);
// }

const guida = persone.map((persona) => {
    if (persona.eta < 18) {
        return `${persona.nome} ${persona.cognome} non può guidare.`
    } else {
        return `${persona.nome} ${persona.cognome} può guidare.`
    }
} 
);
console.log(guida);