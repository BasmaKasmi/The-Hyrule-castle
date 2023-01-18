const clc = require('cli-color');

const readFileSync = require('readline-sync');

let nomPerso: any;
let hpPerso: any;
let Strperso: any;
const x = '..................  The Hyrule Castle  The Hyrule Castle ..................\n';
const y = ' ';

function affichageAccueil() {
  console.log(clc.red(x).repeat(6));
  console.log(clc.green(y).repeat(26), clc.green(' Creation '), clc.green(' du personnage '), '\n');
  console.log(clc.red(x).repeat(6), '\n \n');
}
affichageAccueil();

function entreeInfo() {
  console.log('------- Entrer vos infos -------');
  nomPerso = readFileSync.question('Entrer le nom de votre personnage \n');
  console.clear();
  hpPerso = readFileSync.question(' Entrer le nombre de vie de votre personnage ( ne doit pas depasser 150 HP ) \n');
  hpPerso = parseInt(hpPerso, 10);
  if (hpPerso > 150) {
    while (hpPerso > 150) {
      console.log('vous avez rentree une valeur superieur à 150');
      hpPerso = readFileSync.question(' Entrer le nombre de vie de votre personnage ( ne doit pas depasser 150 HP ) \n');
      hpPerso = parseInt(hpPerso, 10);
    }
  }
  console.clear();

  Strperso = readFileSync.question(' Entrer la force de votre personnage ( ne doit pas depasser 45 HP )\n');
  Strperso = parseInt(Strperso, 10);
  if (Strperso > 45) {
    while (Strperso > 45) {
      console.log('vous avez rentree une valeur superieur à 45');
      Strperso = readFileSync.question(' Entrer le nombre de vie de votre personnage ( ne doit pas depasser 45 HP ) \n');
      Strperso = parseInt(Strperso, 10);
    }
  }
  console.clear();

  return nomPerso + hpPerso + Strperso;
}
entreeInfo();

function affichagePerso() {
  console.log(clc.red(x).repeat(6));
  console.log(clc.green(y).repeat(26), clc.yellow(' VOTRE PERSONNAGE', ' \n'), clc.yellow(' Nom : ', nomPerso, ' \n'), clc.yellow(' HP  : ', hpPerso, ' \n'), clc.yellow(' STR : ', Strperso, ' \n'), '\n');
  console.log(clc.red(x).repeat(6), '\n \n');

  readFileSync.question('Appuyer sur entree pour confirmer \n');
  console.clear();
}

affichagePerso();
