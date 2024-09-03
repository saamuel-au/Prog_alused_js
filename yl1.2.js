
const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function kontrolliTemperatuuri() {
    rl.question('Sisesta õhutemperatuur: ', (sisend) => {
        
        const temperatuur = parseFloat(sisend);

       
        if (temperatuur > 4.0) {
            console.log('Ei ole jäätumise ohtu.');
        } else {
            console.log('On jäätumise oht.');
        }

        
        rl.close();
    });
}


kontrolliTemperatuuri();
