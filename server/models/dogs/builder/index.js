const locus = require('./locus');
const rcm = require('./mutant-rcm');
const physique = require('./physique');

class Builder {
  constructor(dam, sire) {
    this.dam = dam;
    this.sire = sire;
    this._parents = [dam, sire];

    this.loci = null;
    this.phenotype = null;
    this.phenotypeDescription = null;
    this.rcm = null;
    this.physique = null;
  }

  static buildRandomDog() {
    const builder = new Builder();

    builder.loci = locus.generateRandomLocus();

    const { phenotype, description } =
      locus.generateLocusPhenotype(builder.loci);

    builder.phenotype = phenotype;
    builder.phenotypeDescription = description;

    builder.rcm = rcm.generateRandomRCM();
    builder.physique = physique.generateRandomPhysique();

    return builder;
  }
}

module.exports = Builder;
