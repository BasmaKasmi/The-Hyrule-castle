import Player from './Player';

const fs = require('fs');

const recu: string = './players.json';
const recu2: string = './enemies.json';
const recu3: string = './bosses.json';

const play = fs.readFileSync(recu, 'utf-8');
const ene = fs.readFileSync(recu2, 'utf-8');
const bos = fs.readFileSync(recu3, 'utf-8');

const plays = JSON.parse(play);
const enemie = JSON.parse(ene);
const boss = JSON.parse(bos);

const joueur = plays;
const enemies = enemie;
const bosses = boss;

const maxJ = joueur.length;
const maxE = enemies.length;
const maxB = bosses.length;

let jAl: number;
let eAl: number;
let bAl: number;

function nombreAl() {
  jAl = Math.random();
  jAl *= maxJ;
  jAl = Math.round(jAl);

  return jAl;
}
nombreAl();

function nombreEl() {
  eAl = Math.random();
  eAl *= maxE;
  eAl = Math.round(eAl);

  return eAl;
}
nombreEl();

function nombreBl() {
  bAl = Math.random();
  bAl *= maxB;
  bAl = Math.round(bAl);

  return bAl;
}
nombreBl();

const playersAl: Player = joueur[jAl];
const enemiesAl: Player = enemies[eAl];
const bossesAl: Player = bosses[bAl];

export default { playersAl, enemiesAl, bossesAl };
