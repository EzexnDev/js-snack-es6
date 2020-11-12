var arrayObj = [
    { name: 'Poppy', type: 'tshirt', color: 'red' },
    { name: 'Jumping', type: 'occhiali', color: 'blue' },
    { name: 'CrissCross', type: 'scarpe', color: 'black' },
    { name: 'Jenny', type: 'borsa', color: 'pink' },
];

let alphabets = "abcdefghijklmnopqrstuvwxyz";

var newArrayObj = arrayObj.map((element) => {
    var o = Object.assign({}, element);
    o.position = 's';
    return o;
});
console.log(newArrayObj);
console.log(arrayObj);