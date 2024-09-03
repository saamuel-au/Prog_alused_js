const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function arvutaTrahv(lubatudKiirus, tegelikKiirus) {
    let uleLaadimine = tegelikKiirus - lubatudKiirus;

    if (uleLaadimine <= 0) {
        return 0;
    }

    let esialgneTrahv = uleLaadimine * 3;
    return Math.min(190, esialgneTrahv);
}

rl.question("Sisesta oma nimi: ", (nimi) => {
    rl.question("Sisesta lubatud kiirus (km/h): ", (lubatudKiirus) => {
        rl.question("Sisesta tegelik kiirus (km/h): ", (tegelikKiirus) => {
            lubatudKiirus = parseInt(lubatudKiirus);
            tegelikKiirus = parseInt(tegelikKiirus);

            let trahv = arvutaTrahv(lubatudKiirus, tegelikKiirus);

            if (trahv > 0) {
                console.log(`${nimi}, kiiruse ületamise eest on teie trahv ${trahv} eurot.`);
            } else {
                console.log(`${nimi}, kiirust ei ületatud, trahvi ei määrata.`);
            }

            rl.close();
        });
    });
});