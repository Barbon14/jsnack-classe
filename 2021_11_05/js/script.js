const bici = [
    {
        'nome': 'nome0',
        'peso': 10,
        'brand': 'brand0'
    },
    {
        'nome': 'nome1',
        'peso': 11,
        'brand': 'brand1'
    },
    {
        'nome': 'nome2',
        'peso': 12,
        'brand': 'brand2'
    },
    {
        'nome': 'nome3',
        'peso': 13,
        'brand': 'brand3'
    },
    {
        'nome': 'nome4',
        'peso': 14,
        'brand': 'brand4'
    },
    {
        'nome': 'nome5',
        'peso': 15,
        'brand': 'brand5'
    },
    {
        'nome': 'nome6',
        'peso': 16,
        'brand': 'brand6'
    }    
];

console.log('array iniziale: ', bici);

const obj = {
    'nome': 'nome7',
    'peso': 17,
    'brand': 'brand7'
};

console.log('oggetto iniziale: ', obj);

const newObj = {...obj, 'numeroMarce': 10};

console.log('nuovo oggetto: ', newObj);

bici.push(newObj);

console.log('array finale: ', bici);

const cont = document.getElementById("container");
for (let i = 0; i<bici.length; i++) {

    let {nome, peso, brand} = bici[i];
    cont.innerHTML +=`
    <div class="bici">
            <h2>${nome}</h2>
            <h3>peso: ${peso}kg</h3>
            <h3>${brand}</h3>
        </div>
    `;
    console.log(bici[i]);
}