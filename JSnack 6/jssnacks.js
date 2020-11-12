var arrayObj = [{
        name: 'Poppy',
        type: 'tshirt',
        color: 'red'
    },
    {
        name: 'Jumping',
        type: 'occhiali',
        color: 'blue'
    },
    {
        name: 'CrissCross',
        type: 'scarpe',
        color: 'black'
    },
    {
        name: 'Jenny',
        type: 'borsa',
        color: 'pink'
    },
];

let alphabets = "abcdefghijklmnopqrstuvwxyz";

newArrayObj = newArrayObj.map(el => ({
    ...el,
    position: alphabet[Math.floor(Math.random() * alphabet.length)]
}));
console.log(newArrayObj);
console.log(arrayObj);