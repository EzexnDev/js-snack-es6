var triangoloRettangolo = {
    'base': 10,
    'altezza': 5,
    'area': function() {
        return (this.base * this.altezza) / 2;
    },
    'perimetro': function() {
        let ipotenusa = Math.sqrt(Math.pow(this.altezza, 2) + Math.pow(this.base, 2));
        console.log(ipotenusa);

        return (this.altezza + this.base + ipotenusa);
    }
};

console.log(`L'area del triangolo ${triangoloRettangolo.area()}
Il perimetro del triangolo${triangoloRettangolo.perimetro()}`);