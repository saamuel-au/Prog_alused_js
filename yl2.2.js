
const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function kontrolliPerekonnanime() {
    rl.question('Sisesta Leedu perekonnanimi: ', (nimi) => {
        
        nimi = nimi.trim();

        
        if (nimi.slice(-2) === 'ne') {
            console.log('Abielus');
        } else if (nimi.slice(-2) === 'te') {
            console.log('Vallaline');
        } else if (nimi.slice(-1) === 'e') {
            console.log('Määramata');
        } else {
            console.log('Pole ilmselt leedulanna perekonnanimi');
        }

       
        rl.close();
    });
}


kontrolliPerekonnanime();
