const locus = require('./locus');

function Builder(dam, sire) {
  this.dam = dam;
  this.sire = sire;
  this._parents = [dam, sire];
}

Object.assign(Builder.prototype, locus);

Builder.prototype.buildRandomDog = function buildRandomDog() {
  this._generateRandomLocus();
};

module.exports = Builder;
