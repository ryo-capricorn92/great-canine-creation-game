const PHYSIQUE = {
  sizing: {
    body: {
      size: [1, 10],
    },
    ears: {
      size: [1, 3],
    },
    head: {
      size: [1, 3],
    },
    legs: {
      size: [1, 5],
    },
    muzzle: {
      size: [1, 3],
    },
    tail: {
      size: [1, 3],
    },
  },
  typing: {
    body: {
      A: {
        phenotype: 'Average',
        dominantTo: ['h', 's'],
        recessiveTo: [],
      },
      h: {
        phenotype: 'Heavy',
        dominantTo: ['s'],
        recessiveTo: ['A'],
      },
      s: {
        phenotype: 'Slim',
        dominantTo: [],
        recessiveTo: ['A', 'h'],
      },
    },
    coat: {
      curl: {
        C: {
          phenotype: 'Curly',
          dominantTo: ['c'],
          recessiveTo: [],
        },
        c: {
          phenotype: 'Straight',
          dominantTo: [],
          recessiveTo: ['C'],
        },
      },
      furnishings: {
        F: {
          phenotype: 'Furnishings',
          hetPheno: true,
          dominantTo: ['f'],
          recessiveTo: [],
        },
        f: {
          phenotype: 'Normal',
          dominantTo: [],
          recessiveTo: ['F'],
        },
      },
      long: {
        L: {
          phenotype: 'Short',
          dominantTo: ['l'],
          recessiveTo: [],
        },
        l: {
          phenotype: 'Long',
          dominantTo: [],
          recessiveTo: ['L'],
        },
      },
      wire: {
        W: {
          phenotype: 'Wire',
          dominantTo: ['w'],
          recessiveTo: [],
        },
        w: {
          phenotype: 'Normal',
          dominantTo: [],
          recessiveTo: ['W'],
        },
      },
      hairless: {
        H: {
          phenotype: 'Hairless',
          dominantTo: ['h'],
          recessiveTo: [],
        },
        h: {
          phenotype: 'Normal',
          dominantTo: [],
          recessiveTo: ['H'],
        },
      },
    },
    dewclaws: {
      D: {
        phenotype: 'Dewclaw',
        dominantTo: ['n', 'd'],
        recessiveTo: [],
      },
      n: {
        phenotype: 'No Dewclaws',
        dominantTo: ['d'],
        recessiveTo: ['D'],
      },
      d: {
        phenotype: 'Double Dewclaws',
        dominantTo: [],
        recessiveTo: ['D', 'n'],
      },
    },
    ears: {
      E: {
        phenotype: 'Down',
        hetPheno: true,
        dominantTo: ['e'],
        recessiveTo: [],
      },
      e: {
        phenotype: 'Up',
        dominantTo: [],
        recessiveTo: ['E'],
      },
    },
    eyes: {
      B: {
        phenotype: 'Brown',
        dominantTo: ['h', 'b'],
        recessiveTo: [],
      },
      h: {
        phenotype: 'Hazel',
        dominantTo: ['b'],
        recessiveTo: ['B'],
      },
      b: {
        phenotype: 'Blue',
        dominantTo: [],
        recessiveTo: ['B', 'h'],
      },
    },
    tail: {
      B: {
        phenotype: 'Bobtail',
        dominantTo: ['C', 'b'],
        recessiveTo: [],
      },
      C: {
        phenotype: 'Curly',
        dominantTo: ['b'],
        recessiveTo: ['B'],
      },
      b: {
        phenotype: 'Normal',
        dominantTo: [],
        recessiveTo: ['B', 'C'],
      },
    },
  },
};

function randomInt(min, max) {
  return Math.floor((Math.random() * ((max - min) + 1)) + min);
}

function sortByDominance(locus) {
  return (a, b) => {
    if (locus[a].dominantTo.includes(b)) {
      return -1;
    }
    if (locus[b].dominantTo.includes(a)) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 1;
  };
}

function genLocus(locus) {
  const alleles = Object.keys(locus);
  const alleleA = alleles[Math.floor(Math.random() * alleles.length)];
  const alleleB = alleles[Math.floor(Math.random() * alleles.length)];
  const pair = `${alleleA}${alleleB}`;
  return pair
    .split('')
    .sort(sortByDominance(locus))
    .join('');
}

module.exports = {
  _generateRandomPhysique() {
    const { sizing, typing } = PHYSIQUE;
    this.physique = {};

    /* BODY */
    this.physique.body = {};
    this.physique.body.size = randomInt(sizing.body.size[0], sizing.body.size[1]);
    this.physique.body.gene = genLocus(typing.body);

    /* COAT */
    this.physique.coat = {};
    this.physique.coat.curl = genLocus(typing.coat.curl);
    this.physique.coat.furnishings = genLocus(typing.coat.furnishings);
    this.physique.coat.long = genLocus(typing.coat.long);
    this.physique.coat.wire = genLocus(typing.coat.wire);
    this.physique.coat.hairless = genLocus(typing.coat.hairless);

    /* DEWCLAWS */
    this.physique.dewclaws = {};
    this.physique.dewclaws.gene = genLocus(typing.dewclaws);

    /* EARS */
    this.physique.ears = {};
    this.physique.ears.size = randomInt(sizing.ears.size[0], sizing.ears.size[1]);
    this.physique.ears.gene = genLocus(typing.ears);

    /* EYES */
    this.physique.eyes = {};
    this.physique.eyes.gene = genLocus(typing.eyes);

    /* HEAD */
    this.physique.head = {};
    this.physique.head.size = randomInt(sizing.head.size[0], sizing.head.size[1]);

    /* LEGS */
    this.physique.legs = {};
    this.physique.legs.size = randomInt(sizing.legs.size[0], sizing.legs.size[1]);

    /* MUZZLE */
    this.physique.muzzle = {};
    this.physique.muzzle.size = randomInt(sizing.muzzle.size[0], sizing.muzzle.size[1]);

    /* TAIL */
    this.physique.tail = {};
    this.physique.tail.size = randomInt(sizing.tail.size[0], sizing.tail.size[1]);
    this.physique.tail.gene = genLocus(typing.tail);
  },
};
