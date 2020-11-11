let squadre = [];

for (var i = 0; i < 5; i++) {
    let inputUser = prompt(`Inserisci il nome di una squadra`);
    var squadra = {
        'nome': inputUser,
        'puntiFatti': 0,
        'falliSubiti': 0,
    };
    squadra.puntiFatti = Math.floor(Math.random() * (5)),
        squadra.falliSubiti = Math.floor(Math.random() * (5 - 1) + 1),

        console.log(`La squadra: ${squadra.nome},
        ha ${squadra.puntiFatti} punti,
        ed ha subito ${squadra.falliSubiti} falli`);
    squadre.push(squadra);


}