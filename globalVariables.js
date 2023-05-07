  poles_list = [{
    name: "Sécurité",
    id: 1
  },
  {
    name: "Equipements électriques et gestion",
    id: 2
  },
  {
    name: "Exploitation",
    id: 3
  },
  {
    name: "Géologie, Géothermie",
    id: 4
  },
  {
    name:"Constructio, Marchés, Exécution",
    id:5
  }
]

let ouvrages_list = [
                {
                id:1,
                name:"Tunnel sous la manche",
                description:"Le Tunnel sous la Manche mesure 50,45 kilomètres de long, il a débuté le 15 décembre 1987 et a été achevé le 10 décembre 1993.Il s'agit d'un tunnel ferroviaire qui relie la France et l'Angleterre",
                pays:"France/Angleterre"
              },{
                id:2,
                name:"Tunnel du fréjus",
                description:"Le tunnel routier du Fréjus, mis en service en 1980, long de 12,87 km, se situe à la jonction entre deux grands axes d'échanges régionaux et internationaux reliant la France et l'Italie.",
                pays:"France"
              },
              {
                id:3,
                name:"Tunnel du mont blanc",
                description:"Ce tunnel alpin a été ouvert à la circulation le 19 juillet 1965 et il fut inauguré par Charles de Gaulle alors président français de l'époque. Lors de son ouverture, ce fut le tunnel routier le plus long du monde.",
                pays:"France"
              },
              {
                id:4,
                name:"Tunnel du simplon",
                description:"Ce tunnel ferroviaire relie l'Italie à la Suisse. Il s'agit là encore d'un tunnel ferroviaire de 19,823 kilomètres de long. Il a été achevé en 1905.",
                pays:"Suisse"
              },
              {
                id:5,
                name:"Tunnel de base des Apennins",
                description:"Le tunnel de base des Apennins mesure 18,5 kilomètres de long et a été terminé en 1934.",
                pays:"Italie"
              }
            ]

let Utilisateurs2 = [
  ["ahere", "Hère", "Axel", "axel.here@betuf.fr", "abcde", "Directeur", ""],
  [
    "vroule",
    "Roule",
    "Vanessa",
    "vanessa.roule@betuf.fr",
    "abcde",
    "Directeur recherche",
    "",
  ],
  [
    "vsunnick",
    "Sunnick",
    "Vincent",
    "vincent.sunnick@betuf.fr",
    "abcde",
    "Secrétaire général",
    "",
  ],
  [
    "gtaie",
    "Taie",
    "Gilbert",
    "gilbert.taie@betuf.fr",
    "abcde",
    "Chef de pôle",
    "Constructio, Marchés, Exécution",
  ],
  [
    "jvoilbout",
    "Voilbout",
    "Jean",
    "jean.voilbout@betuf.fr",
    "abcde",
    "Chef de pôle",
    "Géologie, Géothermie",
  ],
  [
    "lvragedar",
    "Vragedar",
    "Louis",
    "louis.vragedar@betuf.fr",
    "abcde",
    "Chef de pôle",
    "Matériaux, structure",
  ],
  [
    "athinerairebis",
    "Thinérairebis",
    "Ali",
    "ali.thinerairebis@betuf.fr",
    "abcde",
    "Chef de pôle",
    "Ventilation et Environnement",
  ],
  [
    "adoublesens",
    "Doublesens",
    "Angela",
    "angela.doublesens@betuf.fr",
    "abcde",
    "Chef de pôle",
    "Sécurité",
  ],
  [
    "ofour",
    "Four",
    "Oscar",
    "oscar.four@betuf.fr",
    "abcde",
    "Chef de pôle",
    "Exploitation",
  ],
  [
    "rtaurout",
    "Taurout",
    "Roméo",
    "romeo.taurout@betuf.fr",
    "abcde",
    "Chef de pôle",
    "Equipements électriques et gestion",
  ],
  [
    "atoutdroit",
    "Toudroit",
    "Alphonse",
    "alphonse.toudroit@betuf.fr",
    "abcde",
    "Chargé de missions",
    "Géologie, Géothermie",
  ],
  [
    "apartemental",
    "Partemental",
    "Amédée",
    "amedee.partemental@betuf.fr",
    "abcde",
    "Chargé de missions",
    "Constructio, Marchés, Exécution",
  ],
  [
    "afrastructure",
    "Frastructure",
    "Alain",
    "alain.frastructure@betuf.fr",
    "abcde",
    "Chargé de missions",
    "Exploitation",
  ],
  [
    "vdevaux",
    "Devaux",
    "Valérie",
    "valerie.devaux@betuf.fr",
    "abcde",
    "Chargé de missions",
    "Equipements électriques et gestion",
  ],
  [
    "ajohn",
    "John",
    "Aline",
    "aline.john@betuf.fr",
    "abcde",
    "Chargé de missions",
    "Equipements électriques et gestion",
  ],
  [
    "lrection",
    "Rection",
    "Lydie",
    "lydie.rection@betuf.fr",
    "abcde",
    "Chargé de missions",
    "Sécurité",
  ],
  [
    "jdoe",
    "Doe",
    "Jane",
    "jane.doe@betuf.fr",
    "abcde",
    "Technicien",
    "Sécurité",
  ],
];


eventDB = [
  {
    id:"hadw8hiaua",
    title: 'Check up',
    start: '2023-05-01',
    persone:"jdoe",
    url: 'Modifier.html?id=' + "hadw8hiaua",
    ouvrage:"Tunnel sous la manche",
    pole:"Sécurité"
  },
  {
    id:"a9suh9as",
    title: 'Traveaux',
    start: '2023-5-07',
    end: '2023-05-10',
    persone:"atoutdroit",
    url: 'Modifier.html?id=' + "a9suh9as",
    ouvrage:"Tunnel sous la manche",
    pole:"Géologie, Géothermie",
  },

  {
    id: "ashhc8sc",
    title: 'Conference',
    start: '2023-05-09T16:00:00',
    persone:"rtaurout",
    url: 'Modifier.html?id=' + "ashhc8sc",
    ouvrage:"Tunnel de base des Apennins",
    pole:"Equipements électriques et gestion"
  },

  {
    id: "awdadadaaw",
    title: 'Conference',
    start: '2023-05-16T16:00:00',
    persone:"ahere",
    url: 'Modifier.html?id=' + "awdadadaaw",
    ouvrage:"Tunnel de base des Apennins",
    pole:"",
  },
  {
    id: "awdadadaaw",
    title: 'Traveaux',
    start: '2023-05-11',
    end: '2023-05-13',
    persone:"lrection",
    url: 'Modifier.html?id=' + "a9suh9as",
    ouvrage:"Tunnel du simplon",
    pole:"Sécurité",
  },
  {
    id: "drgdrgdr",
    title: 'Traveaux',
    start: '2023-05-12T10:30:00', 
    end: '2023-05-12T12:30:00',
    persone:"atoutdroit",
    url: 'Modifier.html?id=' + "drgdrgdr",
    ouvrage:"Tunnel de base des Apennins",
    pole:"Géologie, Géothermie",
  },
  {
    id: "hgfdsawd",
    title: 'Check up',
    start: '2023-05-12T12:00:00',
    persone:"atoutdroit",
    url: 'Modifier.html?id=' + "hgfdsawd",
    ouvrage:"Tunnel de base des Apennins",
    pole:"Géologie, Géothermie",
  },

]