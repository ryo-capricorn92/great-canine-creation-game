const locus = require('./locus');
const rcm = require('./mutant-rcm');
const physique = require('./physique');

function Builder(dam, sire) {
  this.dam = dam;
  this.sire = sire;
  this._parents = [dam, sire];
}

Object.assign(Builder.prototype, locus);
Object.assign(Builder.prototype, rcm);
Object.assign(Builder.prototype, physique);

Builder.prototype.buildRandomDog = function buildRandomDog() {
  this._generateRandomLocus();
  this._generateLocusPhenotype();
  this._generateRandomRCM();
  this._generateRandomPhysique();
};

module.exports = Builder;
