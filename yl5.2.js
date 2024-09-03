const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Sisesta kirja suurus megabaitides (nt 1.5): ', (suurus) => {
    rl.question('Sisesta kirja teema pealkiri (või jäta tühjaks, kui pealkirja pole): ', (teema) => {
        rl.question('Kas kirjaga on kaasas fail? (jah/ei): ', (onManus) => {
            let onSpamm = (!teema || (onManus.toLowerCase() === "jah" && parseFloat(suurus) > 1));

            if (onSpamm) {
                console.log("Kiri on spämm");
            } else {
                console.log("Kiri ei ole spämm");
            }

            rl.close();
        });
    });
});