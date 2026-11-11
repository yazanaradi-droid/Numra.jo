const TEMPLATES = [
  {
    "id": "suv",
    "name": "Land Rover Defender",
    "short": "Defender",
    "category": "suv",
    "file": "suv-clean-v13.webp",
    "quad": [
      [
        824,
        934
      ],
      [
        1047,
        930
      ],
      [
        1047,
        988
      ],
      [
        824,
        994
      ]
    ],
    "thumb": "suv-clean-v13-thumb.webp",
    "mount": {
      "cx": 935.5,
      "cy": 961.5,
      "width": 223.0,
      "rise": -4,
      "height": 49.24583333333333,
      "shade": 0.13,
      "noAdapter": true
    },
    "calibration": {
      "plateAspect": "1200:265",
      "method": "bumper-plane",
      "verified": true
    }
  },
  {
    "id": "luxury",
    "name": "Range Rover",
    "short": "Range Rover",
    "category": "suv",
    "file": "luxury-clean-v13.webp",
    "quad": [
      [
        837,
        864
      ],
      [
        1022,
        861
      ],
      [
        1023,
        917
      ],
      [
        837,
        921
      ]
    ],
    "thumb": "luxury-clean-v13-thumb.webp",
    "mount": {
      "cx": 930,
      "cy": 891.5,
      "width": 185.5,
      "rise": 0,
      "height": 40.96458333333333,
      "shade": 0.07,
      "noAdapter": true
    },
    "calibration": {
      "plateAspect": "1200:265",
      "method": "bumper-plane",
      "verified": true
    }
  },
  {
    "id": "gclass",
    "name": "Mercedes-Benz G63",
    "short": "G-Class",
    "category": "suv",
    "file": "gclass-clean-v13.webp",
    "quad": [
      [
        888,
        907
      ],
      [
        1094,
        897
      ],
      [
        1094,
        956
      ],
      [
        888,
        967
      ]
    ],
    "thumb": "gclass-clean-v13-thumb.webp",
    "mount": {
      "cx": 991.0,
      "cy": 931.75,
      "width": 206.0,
      "rise": -8,
      "height": 45.49166666666667,
      "shade": 0.18,
      "noAdapter": true
    },
    "calibration": {
      "plateAspect": "1200:265",
      "method": "bumper-plane",
      "verified": true
    }
  },
  {
    "id": "landcruiser",
    "name": "Toyota Land Cruiser 300",
    "short": "Land Cruiser",
    "category": "suv",
    "file": "landcruiser-clean-v13.webp",
    "quad": [
      [
        906,
        953
      ],
      [
        1080,
        945
      ],
      [
        1080,
        1001
      ],
      [
        907,
        1009
      ]
    ],
    "thumb": "landcruiser-clean-v13-thumb.webp",
    "mount": {
      "cx": 993.25,
      "cy": 977.0,
      "width": 173.5,
      "rise": -6,
      "height": 38.31458333333333,
      "shade": 0.12,
      "noAdapter": true
    },
    "calibration": {
      "plateAspect": "1200:265",
      "method": "bumper-plane",
      "verified": true
    }
  },
  {
    "id": "wrangler",
    "name": "Jeep Wrangler Rubicon",
    "short": "Wrangler",
    "category": "suv",
    "file": "wrangler-clean-v13.webp",
    "quad": [
      [
        940,
        902
      ],
      [
        1101,
        894
      ],
      [
        1101,
        958
      ],
      [
        940,
        965
      ]
    ],
    "thumb": "wrangler-clean-v13-thumb.webp",
    "mount": {
      "cx": 1020.5,
      "cy": 929.75,
      "width": 161.0,
      "rise": -6,
      "height": 35.55416666666667,
      "shade": 0.17,
      "noAdapter": true
    },
    "calibration": {
      "plateAspect": "1200:265",
      "method": "bumper-plane",
      "verified": true
    }
  },
  {
    "id": "porsche",
    "name": "Porsche 911 GT3",
    "short": "Porsche 911",
    "category": "sport",
    "file": "porsche-clean-v13.webp",
    "quad": [
      [
        906,
        947
      ],
      [
        1107,
        932
      ],
      [
        1107,
        995
      ],
      [
        906,
        1009
      ]
    ],
    "thumb": "porsche-clean-v13-thumb.webp",
    "mount": {
      "cx": 1006.5,
      "cy": 970.75,
      "width": 201.0,
      "rise": -10,
      "height": 44.3875,
      "shade": 0.08,
      "noAdapter": true
    },
    "calibration": {
      "plateAspect": "1200:265",
      "method": "bumper-plane",
      "verified": true
    }
  },
  {
    "id": "ferrari",
    "name": "Ferrari Roma",
    "short": "Ferrari Roma",
    "category": "sport",
    "file": "ferrari-clean-v13.webp",
    "quad": [
      [
        897,
        1000
      ],
      [
        1082,
        991
      ],
      [
        1082,
        1046
      ],
      [
        897,
        1057
      ]
    ],
    "thumb": "ferrari-clean-v13-thumb.webp",
    "mount": {
      "cx": 989.5,
      "cy": 1023.5,
      "width": 185.0,
      "rise": -8,
      "height": 40.854166666666664,
      "shade": 0.12,
      "noAdapter": true
    },
    "calibration": {
      "plateAspect": "1200:265",
      "method": "bumper-plane",
      "verified": true
    }
  },
  {
    "id": "mclaren",
    "name": "McLaren 720S",
    "short": "McLaren 720S",
    "category": "sport",
    "file": "mclaren-clean-v13.webp",
    "quad": [
      [
        862,
        940
      ],
      [
        1074,
        937
      ],
      [
        1074,
        1000
      ],
      [
        862,
        1006
      ]
    ],
    "thumb": "mclaren-clean-v13-thumb.webp",
    "mount": {
      "cx": 968.0,
      "cy": 970.75,
      "width": 212.0,
      "rise": -3,
      "height": 46.81666666666667,
      "shade": 0.15,
      "noAdapter": true
    },
    "calibration": {
      "plateAspect": "1200:265",
      "method": "bumper-plane",
      "verified": true
    }
  },
  {
    "id": "lambo",
    "name": "Lamborghini Hurac\u00e1n",
    "short": "Lamborghini",
    "category": "sport",
    "file": "lambo-clean-v13.webp",
    "quad": [
      [
        859,
        974
      ],
      [
        1076,
        963
      ],
      [
        1076,
        1028
      ],
      [
        859,
        1042
      ]
    ],
    "thumb": "lambo-clean-v13-thumb.webp",
    "mount": {
      "cx": 967.5,
      "cy": 1001.75,
      "width": 217.0,
      "rise": -7,
      "height": 47.920833333333334,
      "shade": 0.17,
      "noAdapter": true
    },
    "calibration": {
      "plateAspect": "1200:265",
      "method": "bumper-plane",
      "verified": true
    }
  },
  {
    "id": "gtr",
    "name": "Nissan GT-R",
    "short": "Nissan GT-R",
    "category": "sport",
    "file": "gtr-clean-v13.webp",
    "quad": [
      [
        876,
        888
      ],
      [
        1078,
        880
      ],
      [
        1078,
        948
      ],
      [
        876,
        958
      ]
    ],
    "thumb": "gtr-clean-v13-thumb.webp",
    "mount": {
      "cx": 977.0,
      "cy": 918.5,
      "width": 202.0,
      "rise": -7,
      "height": 44.608333333333334,
      "shade": 0.2,
      "noAdapter": true
    },
    "calibration": {
      "plateAspect": "1200:265",
      "method": "bumper-plane",
      "verified": true
    }
  },
  {
    "id": "rolls",
    "name": "Rolls-Royce Ghost",
    "short": "Rolls-Royce",
    "category": "luxury",
    "file": "rolls-clean-v13.webp",
    "quad": [
      [
        922,
        962
      ],
      [
        1089,
        954
      ],
      [
        1089,
        1005
      ],
      [
        922,
        1016
      ]
    ],
    "thumb": "rolls-clean-v13-thumb.webp",
    "mount": {
      "cx": 1005.5,
      "cy": 984.25,
      "width": 167.0,
      "rise": -8,
      "height": 36.87916666666667,
      "shade": 0.11,
      "noAdapter": true
    },
    "calibration": {
      "plateAspect": "1200:265",
      "method": "bumper-plane",
      "verified": true
    }
  },
  {
    "id": "bentley",
    "name": "Bentley Flying Spur",
    "short": "Bentley",
    "category": "luxury",
    "file": "bentley-clean-v13.webp",
    "quad": [
      [
        856,
        957
      ],
      [
        1056,
        949
      ],
      [
        1056,
        1007
      ],
      [
        856,
        1014
      ]
    ],
    "thumb": "bentley-clean-v13-thumb.webp",
    "mount": {
      "cx": 956.0,
      "cy": 981.75,
      "width": 200.0,
      "rise": -4,
      "height": 44.166666666666664,
      "shade": 0.16,
      "noAdapter": true
    },
    "calibration": {
      "plateAspect": "1200:265",
      "method": "bumper-plane",
      "verified": true
    }
  },
  {
    "id": "sclass",
    "name": "Mercedes-Benz S-Class",
    "short": "S-Class",
    "category": "luxury",
    "file": "sclass-clean-v13.webp",
    "quad": [
      [
        859,
        983
      ],
      [
        1053,
        976
      ],
      [
        1053,
        1031
      ],
      [
        859,
        1040
      ]
    ],
    "thumb": "sclass-clean-v13-thumb.webp",
    "mount": {
      "cx": 956.0,
      "cy": 1007.5,
      "width": 194.0,
      "rise": -6,
      "height": 42.84166666666667,
      "shade": 0.18,
      "noAdapter": true
    },
    "calibration": {
      "plateAspect": "1200:265",
      "method": "bumper-plane",
      "verified": true
    }
  },
  {
    "id": "bmw",
    "name": "BMW 7 Series",
    "short": "BMW 7 Series",
    "category": "luxury",
    "file": "bmw-clean-v13.webp",
    "quad": [
      [
        862,
        973
      ],
      [
        1044,
        964
      ],
      [
        1044,
        1013
      ],
      [
        862,
        1022
      ]
    ],
    "thumb": "bmw-clean-v13-thumb.webp",
    "mount": {
      "cx": 953.0,
      "cy": 993.0,
      "width": 182.0,
      "rise": -7,
      "height": 40.19166666666667,
      "shade": 0.13,
      "noAdapter": true
    },
    "calibration": {
      "plateAspect": "1200:265",
      "method": "bumper-plane",
      "verified": true
    }
  },
  {
    "id": "audi",
    "name": "Audi A8",
    "short": "Audi A8",
    "category": "luxury",
    "file": "audi-clean-v13.webp",
    "quad": [
      [
        869,
        972
      ],
      [
        1051,
        965
      ],
      [
        1051,
        1020
      ],
      [
        869,
        1026
      ]
    ],
    "thumb": "audi-clean-v13-thumb.webp",
    "mount": {
      "cx": 960.0,
      "cy": 995.75,
      "width": 182.0,
      "rise": -3,
      "height": 40.19166666666667,
      "shade": 0.12,
      "noAdapter": true
    },
    "calibration": {
      "plateAspect": "1200:265",
      "method": "bumper-plane",
      "verified": true
    }
  }
];
