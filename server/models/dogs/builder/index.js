const locus = require('./locus');
const rcm = require('./mutant-rcm');

function Builder(dam, sire) {
  this.dam = dam;
  this.sire = sire;
  this._parents = [dam, sire];
}

Object.assign(Builder.prototype, locus);
Object.assign(Builder.prototype, rcm);

Builder.prototype.buildRandomDog = function buildRandomDog() {
  this._generateRandomLocus();
  this._generateRandomRCM();
};

module.exports = Builder;
