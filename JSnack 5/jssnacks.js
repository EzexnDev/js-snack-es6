var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

var indexUser = [prompt(`Inserisci un numero da 0 a ${myArray.length-1}`), prompt(`Inserisci un numero da 0 a ${myArray.length}`)];
indexUser = indexUser.sort();

const filteredArray = myArray.filter((element, index) => {
    return index >= indexUser[0] && index <= indexUser[1];
});

console.log(filteredArray);