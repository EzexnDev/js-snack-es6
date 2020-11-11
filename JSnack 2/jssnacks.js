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

let biciLeggera = bici[0];
for (var i = 0; i < bici.length; i++) {
    if (biciLeggera.peso > bici[i].peso) {
        biciLeggera = bici[i];
    }
}
console.log(`La bici piu leggera pesa ${biciLeggera.peso}`);