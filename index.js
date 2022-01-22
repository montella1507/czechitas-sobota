let jmeno = prompt('Jake je vase jmeno');
let vek = prompt('Jaky je vas vek');

`Vysledek je: ${ vek + vek }`
'Vysledek je: ' +  vek + vek;


prompt("dqdq");

if (vek < 18) {
  console.log(
    `Vaše jméno je ${jmeno}, je vám ${vek} let a tak můžete řídit auto až za ${18 - vek} let`
  );
} else {
  console.log(`Vaše jméno je ${jmeno}, je vám ${vek} let a již můžete řídit`);
}



