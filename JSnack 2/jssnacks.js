var bici = [{
        'nome': 'mountain',
        'peso': 25,
    },
    {
        'nome': 'cross',
        'peso': 32,
    },
    {
        'nome': 'ciclista',
        'peso': 15,
    }
];

let { peso } = bici[0];
console.log(peso);
for (var i = 0; i < bici.length; i++) {
    if (peso > bici[i].peso) {
        peso = bici[i].peso;
    }
}
console.log(`La bici piu leggera pesa ${peso}`);