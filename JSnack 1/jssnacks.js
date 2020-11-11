var palla = {
    'nome': 'palla',
    'peso': 10,
    'toString': function() {
        return `La proprieta nome contiene ${this.nome}
        La proprieta peso contiene ${this.peso}`;
    }
};

// console.log(palla.toString());


//JSnack 1A

palla.peso = parseInt(prompt('Inserisci un peso'));
console.log(palla.toString());