const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function kysiSisend(question) {
  return new Promise(resolve => rl.question(question, resolve));
}

async function main() {
  try {
    const ainepunktid = parseInt(await kysiSisend("Sisestage ainepunktide arv (täisarv): "));
    const nädalad = parseInt(await kysiSisend("Sisestage nädalate arv (täisarv): "));
    
    rl.close();
    
    const koguaeg = ainepunktid * 26;
    const ajakulu = koguaeg / nädalad;
    
    const ümardatudAjakulu = Math.round(ajakulu);
    
    console.log("Ühe nädala eeldatav ajakulu on: " + ümardatudAjakulu + " tundi");
  } catch (error) {
    console.error("Tekkis viga:", error);
  }
}

main();