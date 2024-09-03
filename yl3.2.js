function pulsivahemik(vanus, sugu, treeningTüüp) {
   
    let maxPulsisagedus;
    if (sugu === 'M' || sugu === 'm') {
        maxPulsisagedus = 220 - vanus;
    } else if (sugu === 'N' || sugu === 'n') {
        maxPulsisagedus = 206 - (0.88 * vanus);
    } else {
        return "Vigane sisend soo jaoks!";
    }

    let protsentVahemik;
    if (treeningTüüp === 1) {
        protsentVahemik = [0.5, 0.7]; 
    } else if (treeningTüüp === 2) {
        protsentVahemik = [0.7, 0.8]; 
    } else if (treeningTüüp === 3) {
        protsentVahemik = [0.8, 0.87]; 
    } else {
        return "Vigane sisend treeningu tüübi jaoks!";
    }

   
    let minPulsisagedus = Math.round(maxPulsisagedus * protsentVahemik[0]);
    let maxPulsisagedusVahemik = Math.round(maxPulsisagedus * protsentVahemik[1]);

    return `${minPulsisagedus} kuni ${maxPulsisagedusVahemik}`;
}


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Sisesta oma vanus: ', vanus => {
    readline.question('Sisesta oma sugu (M või N): ', sugu => {
        readline.question('Vali treeningu tüüp (1 - tervisetreening, 2 - põhivastupidavuse treening, 3 - intensiivne aeroobne treening): ', treeningTüüp => {
            const vahemik = pulsivahemik(parseInt(vanus), sugu, parseInt(treeningTüüp));
            console.log(`Sinu pulsivahemik on: ${vahemik}`);
            readline.close();
        });
    });
});