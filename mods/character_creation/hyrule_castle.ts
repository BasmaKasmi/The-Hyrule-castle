/* eslint-disable @typescript-eslint/no-loop-func */

import players from './nombreAl';
import character from './character_creation';

const clc = require('cli-color');

const readFileSync = require('readline-sync');

// bokoblin
// const bokoblin = fs.readFileSync(recu2, 'utf-8');
// const blin = JSON.parse(bokoblin);
const enemie = players.enemiesAl;
let lifeBolo = enemie.hp;
let lifeBoloChang = enemie.hp;
let forceBolo = enemie.str;
let nameB = enemie.name;

// boss final

const bossFin = players.bossesAl;
const lifeBoss = bossFin.hp;
const lifeBossChang = bossFin.hp;
const forceBoss = bossFin.str;
const nameBf = bossFin.name;

// ::::::::::::: affichage de la  choix du personnage
const { affichageAccueil } = character;
const { entreeInfo } = character;
const { affichagePerso } = character;

affichageAccueil();
entreeInfo();
affichagePerso();

const { nomPerso } = character;
const { hpPerso } = character;
const { Strperso } = character;

// joueur
let lifeJoueur = hpPerso;
const forceJoueur = Strperso;

// ::::::::::::: affichage de la  partie jeux

let choixDujoueur = 0;

let i = 0;
let j = 1;
while (i < 10) {
  console.log('========== FIGHT ', j, '=========');

  while (lifeBolo > 0 || lifeJoueur > 0) {
    // enemie

    const affBolo = function affichageBolo() {
      let y = '#';
      y = clc.yellow(y);
      console.log(clc.red(nameB));
      console.log('HP: ', y.repeat(lifeBolo), lifeBolo, '/', lifeBoloChang, '\n');

      return lifeBolo + forceBolo + nameB;
    };
    affBolo();

    // joueur

    const affJoueur = function affichageJoueur() {
      const nameJ = nomPerso;
      let x = '#';
      x = clc.red(x);
      console.log(clc.green(nameJ));
      console.log('HP: ', x.repeat(lifeJoueur), lifeJoueur, '/', hpPerso, '\n');

      return lifeJoueur + forceJoueur;
    };
    affJoueur();

    // ::::::: le choix du joueur

    const jchoise = function joueurChoise() {
      console.log('---Options------');
      let choise = readFileSync.question('1. Attack   2.Heal \n');

      const attack = 1;
      const defense = 2;

      choise = parseInt(choise, 10);

      if (choise === attack) {
        choixDujoueur = 1;
      } else if (choise === defense) {
        choixDujoueur = 2;
      }
      //   else {
      //     console.log('vous n\'avez pas fais un choix');
      //   }

      return choixDujoueur;
    };

    jchoise();

    if (choixDujoueur === 1) {
      lifeBolo -= forceJoueur;
      lifeJoueur -= forceBolo;
      console.clear();

      console.log('vous avez attaqu?? et inflig?? ', forceJoueur, ' de d??g??ts');
      console.log(nameB, 'vous a attaqu?? et a inflig?? ', forceBolo, ' de d??g??ts');
    } else if (choixDujoueur === 2) {
      lifeJoueur += (hpPerso * 0.5);
      if (lifeJoueur > hpPerso) {
        lifeJoueur = hpPerso;
        lifeJoueur -= forceBolo;
      }
      console.clear();

      console.log('tu as utilis?? la gu??rison');
      console.log(nameB, 'vous a attaqu?? et a inflig?? ', forceBolo, ' de d??g??ts');
    }

    if (lifeBolo <= 0) {
      console.log('vous avez vaincu', enemie.name, '\n');
      break;
    } else if (lifeJoueur <= 0) {
      console.log('vous avez perdu');
      break;
    }
  }

  if (lifeJoueur <= 0) {
    console.log(clc.red(':( :( :( :( :(').repeat(39), '     VOUS AVEZ PERDU LA PARTIE     ', clc.red(':( :( :( :( :(').repeat(40));
    break;
  } else {
    if (j <= 8) {
      console.log(clc.green('vous avez gagnez le FIGHT'), j, '========== \n \n');
      readFileSync.question('Appuyer sur entree pour passer au niveau suivant \n');
      lifeBolo = enemie.hp;
    } else if (j >= 9) {
      console.log(clc.green('vous avez gagnez le FIGHT'), j, '========== \n \n');
    }

    j += 1;

    if (j === 10) {
      lifeBolo = lifeBoss;
      forceBolo = forceBoss;
      nameB = nameBf;
      lifeBoloChang = lifeBossChang;
      console.log(clc.red(':) :) :) :) :)').repeat(39), '     VOUS ALLEZ AFFRONTER L BOSS     ', clc.red(':) :) :) :) :)').repeat(40));
      readFileSync.question('Appuyer sur entree pour ', clc.red('AFFRONTER LE BOSS'), '\n');
      lifeBolo = bossFin.hp;
    } else if (j > 10) {
      console.log(
        clc.green(':) :) :) :) :)').repeat(39),
        '     FELICITATION TU AS TUER LE BOSS     ',
        clc.green(':) :) :) :) :)').repeat(40),
      );
      readFileSync.question(
        'Appuyer sur entree pour terminer la partie',
        '\n',
      );
      lifeBolo = enemie.hp;
      break;
    }

    i += 1;

    console.clear();
  }
}
