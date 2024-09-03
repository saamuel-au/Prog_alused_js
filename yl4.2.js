const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Kas soovite istekoha ise valida? (ise/loos): ', (valik) => {
    if (valik === 'ise') {
      readline.question('Kas soovite istuda akna ääres või mujal? (aken/muu): ', (kohaValik) => {
        console.log('Valisite ise.');
        if (kohaValik === 'aken') {
          console.log('Aknakoht');
        } else {
          console.log('Vahekäigukoht');
        }
        readline.close();
      });
    } else if (valik === 'loos') {
      console.log('Istekoht loositi.');
      if (Math.random() < 1/3) {
        console.log('Aknakoht');
      } else {
        console.log('Vahekäigukoht');
      }
      readline.close();
    } else {
      console.log('Vigane sisestus. Palun proovige uuesti.');
      readline.close();
    }
  });
  