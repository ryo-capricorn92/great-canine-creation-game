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

function trim(string) {
  return string
    .trim()
    .split(' ')
    .filter(str => !!str)
    .join(' ');
}

module.exports = {
  _generateRandomLocus() {
    const loci = {};
    Object.keys(LOCUS).forEach((locus) => {
      const alleles = Object.keys(LOCUS[locus]);
      const alleleA = alleles[Math.floor(Math.random() * alleles.length)];
      const alleleB = alleles[Math.floor(Math.random() * alleles.length)];
      const pair = `${alleleA}${alleleB}`;
      loci[locus] = pair
        .split('')
        .sort(sortByDominance(locus))
        .join('');
    });
    this.loci = loci;
    return loci;

    function sortByDominance(currentLocus) {
      return (a, b) => {
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
  },
  _generateLocusPhenotype() {
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

    this.phenotype = {};
    this._generatePhenoBases();

    const {
      eumelaninShade,
      eumelaninCoverage,
      brindle,
      merle,
      harlequin,
      ticking,
      phaeomelanin,
      whiteCoverage,
    } = this.phenotype;

    if (whiteCoverage === 'total') {
      this.phenotypeDescription = 'white';
    } else if (harlequin) {
      if (eumelaninCoverage === 'grizzle' || eumelaninCoverage === 'spaniel sable') {
        this.phenotypeDescription = `${phaeomelanin} harlequin with ${eumelaninCoverage}`;
      } else if (eumelaninCoverage === 'solid') {
        this.phenotypeDescription = `${eumelaninShade} ${brindle} harlequin`;
      } else {
        this.phenotypeDescription = `${phaeomelanin} harlequin`;
      }
    } else {
      switch (eumelaninCoverage) {
        case 'none':
          this.phenotypeDescription = `${phaeomelanin} ${whiteCoverage}`;
          break;
        case 'mask':
        case 'grizzle':
        case 'spaniel sable':
          this.phenotypeDescription = `${phaeomelanin} ${whiteCoverage} with ${eumelaninCoverage}`;
          break;
        case 'points':
          if (whiteCoverage === 'irish') {
            this.phenotypeDescription = `${eumelaninShade} ${brindle} ${harlequin || merle} tricolor`;
          } else {
            this.phenotypeDescription = `${eumelaninShade} ${brindle} ${harlequin || merle} ${whiteCoverage} with ${phaeomelanin} points`;
          }
          break;
        default:
          this.phenotypeDescription = `${eumelaninShade} ${brindle} ${harlequin || merle} ${whiteCoverage}`;
      }
    }

    if (ticking) {
      if (this.phenotypeDescription.includes('with')) {
        this.phenotypeDescription += ` and ${ticking}`;
      } else {
        this.phenotypeDescription += ` with ${ticking}`;
      }
    }

    this.phenotypeDescription = trim(this.phenotypeDescription);
  },
  _generatePhenoBases() {
    /* EUMELANIN */
    /* --------- */

    // SHADE
    this.phenotype.eumelaninShade = 'black';
    if (this.loci.B === 'bb') { // liver
      this.phenotype.eumelaninShade = 'liver';
    }
    if (this.loci.D === 'dd') { // dilute
      if (this.phenotype.eumelaninShade === 'black') {
        this.phenotype.eumelaninShade = 'blue';
      } else {
        this.phenotype.eumelaninShade = 'isabella';
      }
    }

    // COVERAGE
    if (this.loci.K === 'bb' || this.loci.K === 'bk') {
      this.phenotype.brindle = 'brindle';
    } else {
      this.phenotype.brindle = '';
    }
    if (this.loci.M === 'MM' || this.loci.M === 'Mm') {
      this.phenotype.merle = 'merle';
    } else {
      this.phenotype.merle = '';
    }
    if (this.phenotype.merle && (this.loci.H === 'HH' || this.loci.H === 'Hh')) {
      this.phenotype.harlequin = true;
    }

    this.phenotype.eumelaninCoverage = 'solid';
    if (this.loci.E[0] === 'm') {
      this.phenotype.eumelaninCoverage = 'mask';
    } else if (this.loci.E[0] === 'g') {
      this.phenotype.eumelaninCoverage = 'grizzle';
    } else if (this.loci.E[0] === 'h') {
      this.phenotype.eumelaninCoverage = 'spaniel sable';
    } else if (this.loci.E === 'ee') {
      this.phenotype.eumelaninCoverage = 'none';
    }

    // DEFER TO LOCUS A
    if (this.loci.K === 'kk') {
      this.phenotype.deferToA = true;
    }

    if (this.phenotype.deferToA && this.phenotype.eumelaninCoverage === 'solid') {
      if (this.loci.A[0] === 'y') {
        this.phenotype.eumelaninShade = 'sable';
      } else if (this.loci.A[0] === 'w') {
        this.phenotype.eumelaninShade = 'wolf sable';
      } else if (this.loci.A[0] === 't') {
        this.phenotype.eumelaninCoverage = 'points';
      }
    }

    // TICKING
    if (this.loci.T === 'TT') {
      this.phenotype.ticking = 'roan';
    } else if (this.loci.T === 'Tt') {
      this.phenotype.ticking = 'ticking';
    }

    /* PHAEOMELANIN */
    /* ------------ */

    // SHADE
    if (this.loci.F === 'FF') {
      this.phenotype.phaeomelanin = 'red';
    } else if (this.loci.F === 'Ff') {
      this.phenotype.phaeomelanin = 'fawn';
    } else {
      this.phenotype.phaeomelanin = 'cream';
    }

    /* WHITE */
    /* ----- */

    // COVERAGE
    if (this.loci.S[0] === 'S') {
      this.phenotype.whiteCoverage = '';
    } else if (this.loci.S === 'ii') {
      this.phenotype.whiteCoverage = 'irish';
    } else if (this.loci.S === 'is' || this.loci.S === 'ps' || this.loci.S === 'ip') {
      this.phenotype.whiteCoverage = 'irish';
      this.phenotype.whiteModified = true;
    } else if (this.loci.S === 'pp') {
      this.phenotype.whiteCoverage = 'piebald';
    } else {
      this.phenotype.whiteCoverage = 'total';
    }

    // MODIFIER
    if (this.phenotype.whiteModified && this.phenotype.I === 'ii') {
      this.phenotype.whiteCoverage = 'mantle';
    }
  },
};
