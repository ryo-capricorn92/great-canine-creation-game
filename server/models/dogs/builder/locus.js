const LOCUS = {
  A: {
    y: {
      phenotype: 'Sable',
      melanin: 'both',
      dominantTo: ['w', 't', 'a'],
      recessiveTo: [],
      reliantOn: {
        allele: 'kk',
        locus: 'K',
      },
    },
    w: {
      phenotype: 'Wild Sable',
      melanin: 'both',
      dominantTo: ['t', 'a'],
      recessiveTo: ['y'],
      reliantOn: {
        allele: 'kk',
        locus: 'K',
      },
    },
    t: {
      phenotype: 'Tan Points',
      melanin: 'both',
      dominantTo: ['a'],
      recessiveTo: ['y', 'w'],
      reliantOn: {
        allele: 'kk',
        locus: 'K',
      },
    },
    a: {
      phenotype: 'Black',
      melanin: 'eumelanin',
      dominantTo: [],
      recessiveTo: ['y', 'w', 't'],
      reliantOn: {
        allele: 'kk',
        locus: 'K',
      },
    },
  },
  B: {
    B: {
      phenotype: 'Black',
      melanin: 'eumelanin',
      dominantTo: ['b'],
      recessiveTo: [],
      reliantOn: null,
    },
    b: {
      phenotype: 'Liver',
      melanin: 'eumelanin',
      dominantTo: [],
      recessiveTo: ['B'],
      reliantOn: null,
    },
  },
  D: {
    D: {
      phenotype: 'Black',
      melanin: 'eumelanin',
      dominantTo: ['d'],
      recessiveTo: [],
      reliantOn: null,
    },
    d: {
      phenotype: 'Blue',
      melanin: 'eumelanin',
      dominantTo: [],
      recessiveTo: ['D'],
      reliantOn: null,
    },
  },
  E: {
    m: {
      phenotype: 'Mask',
      melanin: 'eumelanin',
      dominantTo: ['g', 'h', 'E', 'e'],
      recessiveTo: [],
      reliantOn: null,
    },
    g: {
      phenotype: 'Grizzle',
      melanin: 'eumelanin',
      dominantTo: ['h', 'E', 'e'],
      recessiveTo: ['m'],
      reliantOn: null,
    },
    h: {
      phenotype: 'Spaniel Sable',
      melanin: 'eumelanin',
      dominantTo: ['E', 'e'],
      recessiveTo: ['m', 'g'],
      reliantOn: null,
    },
    E: {
      phenotype: 'Normal',
      melanin: 'eumelanin',
      dominantTo: ['e'],
      recessiveTo: ['m', 'g', 'h'],
      reliantOn: null,
    },
    e: {
      phenotype: 'Red',
      melanin: 'eumelanin',
      dominantTo: [],
      recessiveTo: ['m', 'g', 'h', 'E'],
      reliantOn: null,
    },
  },
  F: {
    F: {
      phenotype: 'Red',
      hetPheno: true,
      melanin: 'phaeomelanin',
      dominantTo: ['f'],
      recessiveTo: [],
      reliantOn: null,
    },
    f: {
      phenotype: 'Cream',
      melanin: 'phaeomelanin',
      dominantTo: [],
      recessiveTo: ['F'],
    },
  },
  H: {
    H: {
      phenotype: 'Harlequin',
      melanin: 'merle',
      dominantTo: ['h'],
      recessiveTo: [],
      reliantOn: {
        allele: 'Mm',
        locus: 'M',
      },
    },
    h: {
      phenotype: 'Normal',
      melanin: 'merle',
      dominantTo: [],
      recessiveTo: ['H'],
      reliantOn: {
        allele: 'Mm',
        locus: 'M',
      },
    },
  },
  K: {
    K: {
      phenotype: 'Black',
      melanin: 'eumelanin',
      dominantTo: ['b', 'k'],
      recessiveTo: [],
      reliantOn: null,
    },
    b: {
      phenotype: 'Brindle',
      melanin: 'eumelanin',
      dominantTo: ['k'],
      recessiveTo: ['K'],
      reliantOn: null,
    },
    k: {
      phenotype: 'A Locus',
      melanin: 'eumelanin',
      dominantTo: [],
      recessiveTo: ['b', 'k'],
      reliantOn: null,
    },
  },
  M: {
    M: {
      phenotype: 'Merle',
      melanin: 'eumelanin',
      dominantTo: ['m'],
      recessiveTo: [],
      reliantOn: null,
    },
    m: {
      phenotype: 'Normal',
      melanin: 'eumelanin',
      dominantTo: [],
      recessiveTo: ['M'],
      reliantOn: null,
    },
  },
  S: {
    S: {
      phenotype: 'Solid',
      melanin: 'all',
      dominantTo: ['i', 'p', 's'],
      recessiveTo: [],
      reliantOn: null,
    },
    i: {
      phenotype: 'Irish',
      hetPheno: true,
      melanin: 'all',
      dominantTo: ['s'],
      recessiveTo: ['S'],
      reliantOn: null,
    },
    p: {
      phenotype: 'Piebald',
      hetPheno: true,
      melanin: 'all',
      dominantTo: ['s'],
      recessiveTo: ['S'],
      reliantOn: null,
    },
    s: {
      phenotype: 'White',
      melanin: 'all',
      dominantTo: [],
      recessiveTo: ['S', 'i', 'p'],
      reliantOn: null,
    },
  },
  I: {
    I: {
      phenotype: 'Normal',
      melanin: 'all',
      dominantTo: ['i'],
      recessiveTo: [],
      reliantOn: {
        allele: ['is', 'ps', 'ip'],
        locus: 'S',
      },
    },
    i: {
      phenotype: 'Mantle',
      melanin: 'all',
      dominantTo: [],
      recessiveTo: ['I'],
      reliantOn: {
        allele: ['is', 'ps', 'ip'],
        locus: 'S',
      },
    },
  },
  T: {
    T: {
      phenotype: 'Ticking',
      hetPheno: true,
      melanin: 'all',
      dominantTo: ['t'],
      recessiveTo: [],
      reliantOn: null,
    },
    t: {
      phenotype: 'Normal',
      melanin: 'all',
      dominantTo: [],
      recessiveTo: ['T'],
      reliantOn: null,
    },
  },
};


module.exports = {
  generateRandomLocus,
  generateLocusPhenotype,
};

function generateRandomLocus() {
  const randomAllele = (alleles) => alleles[Math.floor(Math.random() * alleles.length)];

  return Object.entries(LOCUS).reduce((loci, [locus, alleles]) => {
    loci[locus] = Array.from({ length: 2 }, () => randomAllele(alleles))
      .sort(byDominance)
      .join('');

    return loci;
  }, {});


  function byDominance(a, b) {
    const locus = LOCUS[currentLocus];

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

function generateLocusPhenotype(loci) {
  /* MAP
      eumelaninShade - what color are the eumelanin areas of the dog
      eumelaninCoverage - How much area does the eumelanin cover
      brindle - is the dog brindle
      merle - is the dog merle
      harlequin - is the dog harlequin (relies on merle)
      ticking - what kind of ticking does the dog have, if any
      deferToA - will alleles on the A locus show? (relies on kk on K locus)
      phaeomelanin - what shade will any red be
      whiteCoverage - what white will the dog have, if any
      whiteModifier - if the dog has a homo recessive I locus, will it show as mantle
  */

  const phenotype = generatePhenoBases(loci);
  let description = '';

  const {
    eumelaninShade,
    eumelaninCoverage,
    brindle,
    merle,
    harlequin,
    ticking,
    phaeomelanin,
    whiteCoverage,
  } = phenotype;

  if (whiteCoverage === 'total') {
    description = 'white';
  } else if (harlequin) {
    if (eumelaninCoverage === 'grizzle' || eumelaninCoverage === 'spaniel sable') {
      description = `${phaeomelanin} harlequin with ${eumelaninCoverage}`;
    } else if (eumelaninCoverage === 'solid') {
      description = `${eumelaninShade} ${brindle} harlequin`;
    } else {
      description = `${phaeomelanin} harlequin`;
    }
  } else {
    switch (eumelaninCoverage) {
      case 'none':
        description = `${phaeomelanin} ${whiteCoverage}`;
        break;
      case 'mask':
      case 'grizzle':
      case 'spaniel sable':
        description = `${phaeomelanin} ${whiteCoverage} with ${eumelaninCoverage}`;
        break;
      case 'points':
        if (whiteCoverage === 'irish') {
          description =
            `${eumelaninShade} ${brindle} ${harlequin || merle} tricolor`;
        } else {
          description = `${eumelaninShade} ${brindle} ${harlequin || merle} ` +
            `${whiteCoverage} with ${phaeomelanin} points`;
        }
        break;
      default:
        description = `${eumelaninShade} ${brindle} ${harlequin || merle} ` +
          `${whiteCoverage}`;
    }
  }

  if (ticking) {
    if (description.includes('with')) {
      description += ` and ${ticking}`;
    } else {
      description += ` with ${ticking}`;
    }
  }

  return { phenotype, description: trimExtraSpaces(description) };


  function trimExtraSpaces(str) {
    return str.replace(/\s+/g, ' ');
  }
}

function generatePhenoBases(loci) {
  /* EUMELANIN */
  /* --------- */
  const phenotype = {};

  // SHADE
  phenotype.eumelaninShade = 'black';
  if (loci.B === 'bb') { // liver
    phenotype.eumelaninShade = 'liver';
  }
  if (loci.D === 'dd') { // dilute
    if (phenotype.eumelaninShade === 'black') {
      phenotype.eumelaninShade = 'blue';
    } else {
      phenotype.eumelaninShade = 'isabella';
    }
  }

  // COVERAGE
  if (loci.K === 'bb' || loci.K === 'bk') {
    phenotype.brindle = 'brindle';
  } else {
    phenotype.brindle = '';
  }
  if (loci.M === 'MM' || loci.M === 'Mm') {
    phenotype.merle = 'merle';
  } else {
    phenotype.merle = '';
  }
  if (phenotype.merle && (loci.H === 'HH' || loci.H === 'Hh')) {
    phenotype.harlequin = true;
  }

  phenotype.eumelaninCoverage = 'solid';
  if (loci.E[0] === 'm') {
    phenotype.eumelaninCoverage = 'mask';
  } else if (loci.E[0] === 'g') {
    phenotype.eumelaninCoverage = 'grizzle';
  } else if (loci.E[0] === 'h') {
    phenotype.eumelaninCoverage = 'spaniel sable';
  } else if (loci.E === 'ee') {
    phenotype.eumelaninCoverage = 'none';
  }

  // DEFER TO LOCUS A
  if (loci.K === 'kk') {
    phenotype.deferToA = true;
  }

  if (phenotype.deferToA && phenotype.eumelaninCoverage === 'solid') {
    if (loci.A[0] === 'y') {
      phenotype.eumelaninShade = 'sable';
    } else if (loci.A[0] === 'w') {
      phenotype.eumelaninShade = 'wolf sable';
    } else if (loci.A[0] === 't') {
      phenotype.eumelaninCoverage = 'points';
    }
  }

  // TICKING
  if (loci.T === 'TT') {
    phenotype.ticking = 'roan';
  } else if (loci.T === 'Tt') {
    phenotype.ticking = 'ticking';
  }

  /* PHAEOMELANIN */
  /* ------------ */

  // SHADE
  if (loci.F === 'FF') {
    phenotype.phaeomelanin = 'red';
  } else if (loci.F === 'Ff') {
    phenotype.phaeomelanin = 'fawn';
  } else {
    phenotype.phaeomelanin = 'cream';
  }

  /* WHITE */
  /* ----- */

  // COVERAGE
  if (loci.S[0] === 'S') {
    phenotype.whiteCoverage = '';
  } else if (loci.S === 'ii') {
    phenotype.whiteCoverage = 'irish';
  } else if (loci.S === 'is' || loci.S === 'ps' || loci.S === 'ip') {
    phenotype.whiteCoverage = 'irish';
    phenotype.whiteModified = true;
  } else if (loci.S === 'pp') {
    phenotype.whiteCoverage = 'piebald';
  } else {
    phenotype.whiteCoverage = 'total';
  }

  // MODIFIER
  if (phenotype.whiteModified && phenotype.I === 'ii') {
    phenotype.whiteCoverage = 'mantle';
  }

  return phenotype;
}
