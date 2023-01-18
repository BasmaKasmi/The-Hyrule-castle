const clc = require('cli-color');

const readFileSync = require('readline-sync');

let newChoise: any;
let newDiff: any;
let newNbC: any;
let nombreCombat: number;

const nombrePiece = 12;
function ChoixGame() {
  const x = '..................  The Hyrule Castle  The Hyrule Castle ..................\n';
  const y = ' ';

  console.log(clc.red(x).repeat(10));
  console.log(clc.green(y).repeat(26), clc.green(' NEW GAME '), clc.green(' QUIT '), '\n');
  console.log(clc.red(x).repeat(10), '\n \n');

  console.log('------- Option -------');
  newChoise = readFileSync.question('1- Nouveau Jeu  ------  2- Quitter le jeu \n');

  if (newChoise === 1) {
    console.clear();
    console.log('la partie peut commencer', newChoise);
  } else if (newChoise === 2) {
    console.clear();
    console.log('Vous avez quitter le jeu');
  }

  newChoise = parseInt(newChoise, 10);

  return newChoise;
}

function ChoixDifficulte() {
  const x = '..................  The Hyrule Castle  The Hyrule Castle ..................\n';
  const y = ' ';

  console.log(clc.yellow(x).repeat(6));
  console.log(clc.green(y).repeat(26), clc.green(' DIFFICULTEE '), '\n');
  console.log(clc.green(y).repeat(2), clc.green(' Normal    '), clc.green('*').repeat(5), '\n');
  console.log(clc.green(y).repeat(2), clc.yellow(' Difficile '), clc.yellow('*').repeat(10), '\n');
  console.log(clc.green(y).repeat(2), clc.red(' Insensé   '), clc.red('*').repeat(15), '\n');

  console.log(clc.yellow(x).repeat(6), '\n \n');

  console.log('------- Option -------');
  newDiff = readFileSync.question('1- Normal  ------  2- Difficile  ------  3- Insensé \n');

  if (newDiff === 1) {
    console.clear();
    console.log('Mode Normal');
  } else if (newDiff === 2) {
    console.clear();
    console.log('Mode Difficile');
  } else if (newDiff === 3) {
    console.clear();
    console.log('Mode Insensé');
  }

  console.clear();
  newDiff = parseInt(newDiff, 10);

  return newDiff;
}

function ChoixNbCombat() {
  const x = '..................  The Hyrule Castle  The Hyrule Castle ..................\n';
  const y = ' ';

  console.log(clc.green(x).repeat(5));
  console.log(clc.green(y).repeat(26), clc.green(' NOMBRE DE COMBATS '), '\n');
  console.log(clc.green(y).repeat(2), clc.green('  10  '), clc.green('*').repeat(5), '\n');
  console.log(clc.green(y).repeat(2), clc.yellow('  20  '), clc.yellow('*').repeat(10), '\n');
  console.log(clc.green(y).repeat(2), clc.red('  50  '), clc.cyan('*').repeat(15), '\n');
  console.log(clc.green(y).repeat(2), clc.red('  100 '), clc.red('*').repeat(15), '\n');

  console.log(clc.yellow(x).repeat(5), '\n \n');

  console.log('------- Option -------');
  newNbC = readFileSync.question(' 10 ------  20  ------  50  ------  100  ------\n');
  // newNbC = parseInt(newNbC);

  // if (newNbC === 10) {
  //   nombreCombat = 10;
  // } else if (newNbC === 20) {
  //   nombreCombat = 20;
  // } else if (newNbC === 50) {
  //   nombreCombat = 50;
  // } else if (newNbC === 100) {
  //   nombreCombat = 100;
  // }

  console.clear();

  return newNbC;
}

function excution() {
  if (newChoise === 1) {
    ChoixDifficulte();

    ChoixNbCombat();
  }
}

excution();

export {
  excution, ChoixGame, newChoise, newNbC, newDiff, nombrePiece,
};

console.log(newChoise, newDiff, newNbC, nombrePiece);

// if (j === 10) {
//   lifeBolo = lifeBoss;
//   forceBolo = forceBoss;
//   nameB = nameBf;
//   lifeBoloChang = lifeBossChang;
//   console.log(clc.red(':) :) :) :) :)').repeat(39), '     VOUS ALLEZ AFFRONTER L BOSS     ', clc.red(':) :) :) :) :)').repeat(40));
//   readFileSync.question('Appuyer sur entree pour ', clc.red('AFFRONTER LE BOSS'), '\n');
//   lifeBolo = bossFin.hp;
// }
// // else if (j === 11) {
// //   console.log(
// //     clc.green(':) :) :) :) :)').repeat(39),
// //     '     FELICITATION TU AS TUER LE BOSS     ',
// //     clc.green(':) :) :) :) :)').repeat(40),
// //   );
// //   readFileSync.question(
// //     'Appuyer sur entree pour continuer la partie',
// //     '\n',
// //   );
// //   lifeBolo = enemie.hp;
// // }
