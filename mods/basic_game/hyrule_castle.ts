/* eslint-disable @typescript-eslint/no-loop-func */
import players from './nombreAl';
import * as basicGame from './basic_game_customization';

const clc = require('cli-color');

const readFileSync = require('readline-sync');

// joueur
const joueur = players.playersAl;
let lifeJoueur = joueur.hp;
const forceJoueur = joueur.str;

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
let lifeBoss = bossFin.hp;
let lifeBossChang = bossFin.hp;
let forceBoss = bossFin.str;
const nameBf = bossFin.name;

// ::::::::::: basic game customization game
const { ChoixGame } = basicGame;
const { excution } = basicGame;

// ::::::::::::: affichage de la premiere partie

// commencement par le choix du game, difficulté et nombre de partie
ChoixGame();

excution();

const choixPartie = basicGame.newChoise;
const difficulté = basicGame.newDiff;
const nombreDeCombat = basicGame.newNbC;
let NombrePiece = basicGame.nombrePiece;

// jeux
let choixDujoueur = 0;

let i = 0;
let j = 1;

// difficulté
if (difficulté === 1) {
  lifeBolo = lifeBolo;
  lifeBoloChang = lifeBoloChang;
  forceBolo = forceBolo;
  lifeBoss = lifeBoss;
  lifeBossChang = lifeBossChang;
  forceBoss = forceBoss;
} else if (difficulté === 2) {
  lifeBolo *= 1.5;
  lifeBoloChang *= 1.5;
  forceBolo *= 1.5;
  lifeBoss *= 1.5;
  lifeBossChang *= 1.5;
  forceBoss *= 1.5;
} else if (difficulté === 3) {
  lifeBolo *= 2;
  lifeBoloChang *= 2;
  forceBolo *= 2;
  lifeBoss *= 2;
  lifeBossChang *= 2;
  forceBoss *= 2;
}

function combat() {
  while (i < nombreDeCombat) {
    if (choixPartie === 2) {
      console.log(clc.red(' @ ').repeat(15), 'vous avez terminer la partie ************', clc.red(' @ ').repeat(500));
      break;
    }

    console.log('========== FIGHT ', j, '========= sur ', nombreDeCombat);

    while (lifeBolo > 0 || lifeJoueur > 0) {
      const nbPiece = function nombreDePiece() {
        NombrePiece = NombrePiece;
        const z = ' ';
        const w = '*';

        console.log('\n', z.repeat(25), ' Nombre de piece: ', clc.red(w).repeat(NombrePiece), z, NombrePiece, '\n \n');

        return lifeBolo + forceBolo + nameB;
      };
      nbPiece();

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
        const nameJ = joueur.name;
        let x = '#';
        x = clc.red(x);
        console.log(clc.green(nameJ));
        console.log('HP: ', x.repeat(lifeJoueur), lifeJoueur, '/', joueur.hp, '\n');

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

        console.log('vous avez attaqué et infligé ', forceJoueur, ' de dégâts');
        console.log(nameB, 'vous a attaqué et a infligé ', forceBolo, ' de dégâts');
      } else if (choixDujoueur === 2) {
        lifeJoueur += (joueur.hp * 0.5);
        if (lifeJoueur > joueur.hp) {
          lifeJoueur = joueur.hp;
          lifeJoueur -= forceBolo;
        }
        console.clear();

        console.log('tu as utilisé la guérison');
        console.log(nameB, 'vous a attaqué et a infligé ', forceBolo, ' de dégâts');
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
      } else if (j > 9) {
        console.log(clc.green('vous avez gagnez le FIGHT'), j, '========== \n \n');
      }

      NombrePiece += 1;
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
          'Appuyer sur entree pour continuer la partie',
          '\n',
        );
        lifeBolo = enemie.hp;
        break;
      }
      // if(j > 10){
      //   console.log(clc.green(':) :) :) :) :)').repeat(39),
      //  '     FELICITATION TU AS GAGNER LA PARTIE     ',
      // clc.green(':) :) :) :) :)').repeat(40));
      //   readFileSync.question('Appuyer sur entree pour ', clc.bgRed('pour quitter la partie'),
      // '\n');
      // }
    }

    i += 1;

    console.clear();
  }
}

combat();

// if (newChoise <= 1) {
//   // eslint-disable-next-line no-inner-declarations
//   console.log('vous avez terminez la partie');
// } else if (newChoise >= 2) {
