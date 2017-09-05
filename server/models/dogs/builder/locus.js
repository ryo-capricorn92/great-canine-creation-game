export const LOCUS = {
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

export default {};
