export const FAMILY_TREE = [
  {
    "id":'mariagaweda',
    "pids":[
      'andrzejgasiorek'
    ],
    "mid": "wladyslawapabis",
    "fid":"stefangaweda",
    "name":"Maria Gawęda",
    "gender":"female",
    "img":"assets/family/images/maria.jpg"
  },
  {
    "id": 'andrzejgasiorek',
    "pids":[
      'mariagaweda'
    ],
    "mid": "zofiawieronska",
    "fid": "wladyslawgasiorek",
    "name":"Andrzej Gąsiorek",
    "gender":"male",
    "img":"assets/family/images/andrzej.jpg"
  },
  {
    "id": 'malgorzatagasiorek',
    "mid":'mariagaweda',
    "fid": 'andrzejgasiorek',
    "name":"Małgorzata Gasiorek",
    "gender":"female",
    "pids":[
      'mateuszpolak'
    ],
    "img":"assets/family/images/unknown.jpeg"
  },
  {
    "id": 'adamgasiorek',
    "mid":'mariagaweda',
    "fid": 'andrzejgasiorek',
    "name":"Adam Gasiorek",
    "gender":"male",
    "img":"assets/family/images/adam.jpg"
  },
  {
    "id": 'joannamaga',
    "mid":'mariagaweda',
    "fid":'andrzejgasiorek',
    "pids":[
      'mateuszbil'
    ],
    "name":"Joanna Gasiorek",
    "gender":"female",
    "img":"assets/family/images/unknown.jpeg"
  },
  {
    "id":'mateuszbil',
    "pids":[
      'joannamaga'
    ],
    "name":"Mateusz Bil",
    "gender":"male",
    "img":"assets/family/images/unknown.jpeg"
  },
  {
    "id":'aleksandrabil',
    "mid": 'joannamaga',
    "fid": "mateuszbil",
    "name":"Aleksandra Bil",
    "gender":"female",
    "img":"assets/family/images/unknown.jpeg"
  },
  {
    "id":'mateuszpolak',
    "pids":[
      'malgorzatagasiorek'
    ],
    "name":"Mateusz Polak",
    "gender":"male",
    "img":"assets/family/images/unknown.jpeg"
  },
  {
    "id":'aleksandrabil',
    "mid": 'joannamaga',
    "fid": "mateuszbil",
    "name":"Aleksandra Bil",
    "gender":"female",
    "img":"assets/family/images/unknown.jpeg"
  },
  {
    "id":'piotrpolak',
    "mid": 'malgorzatagasiorek',
    "fid": "mateuszpolak",
    "name":"Piotr Polak",
    "gender":"male",
    "img":"assets/family/images/unknown.jpeg"
  },
  {
    "id":'wladyslawapabis',
    "name":"Wladyslawa Pabiś",
    "gender":"female",
    "mid": "stefaniabizon",
    "fid":"maciejpabis",
    "pids":[
      'stefangaweda'
    ],
    "img":"assets/family/images/unknown.jpeg"
  },
  {
    "id":'wladyslawgasiorek',
    "name":"Wladyslaw Gąsiorek",
    "gender":"male",
    "pids":[
      'zofiawieronska'
    ],
    "fid": "jangasiorek",
    "mid": "annamaga",
    "img":"assets/family/images/unknown.jpeg"
  },
  {
    "id":'annamaga',
    "name":"Anna Maga",
    "pids":[
      'jangasiorek'
    ],
    "mid": "annamaga2",
    "fid": "franciszekmaga",
    "gender":"female",
    "img":"assets/family/images/unknown.jpeg"
  },
  {
    "id":'franciszekmaga',
    "name":"Franciszek Maga",
    "pids":[
      'annamaga2'
    ],
    "gender":"male",
    "img":"assets/family/images/unknown.jpeg"
  },
  {
    "id":'annamaga2',
    "name":"Anna Maga",
    "pids":[
      'franciszekmaga'
    ],
    "gender":"female",
    "img":"assets/family/images/unknown.jpeg"
  },
  {
    "id":'jangasiorek',
    "name":"Jan Gąsiorek",
    "pids":[
      'annamaga'
    ],
    "mid": "annagasiorek",
    "fid": "jozefgasiorek",
    "gender":"male",
    "img":"assets/family/images/unknown.jpeg"
  },
  {
    "id":'jozefgasiorek',
    "name":"Józef Gąsiorek",
    "pids":[
      'annagasiorek'
    ],
    "gender":"male",
    "img":"assets/family/images/unknown.jpeg"
  },
  {
    "id":'annagasiorek',
    "name":"Anna Gąsiorek",
    "pids":[
      'jozefgasiorek'
    ],
    "gender":"female",
    "img":"assets/family/images/unknown.jpeg"
  },
  {
    "id":'zofiawieronska',
    "name":"Zofia Wierońska",
    "gender":"female",
    "pids":[
      'wladyslawgasiorek'
    ],
    "mid": "waleriatora",
    "fid": "alfonswieronski",
    "img":"assets/family/images/unknown.jpeg"
  },
  {
    "id":'waleriatora',
    "name":"Waleria Tora",
    "gender":"female",
    "pids":[
      'alfonswieronski'
    ],
    "img":"assets/family/images/unknown.jpeg"
  },
  {
    "id":'alfonswieronski',
    "name":"Alfons Wieroński",
    "pids":[
      'waleriatora'
    ],
    "gender":"male",
    "img":"assets/family/images/unknown.jpeg"
  },
  {
    "id":'stefangaweda',
    "name":"Stefan Gawęda",
    "pids":[
      'wladyslawapabis'
    ],
    "mid": "annamrajca",
    "fid": "aleksandergaweda",
    "gender":"male",
    "img":"assets/family/images/unknown.jpeg"
  },
  {
    "id":'franciszekgaweda',
    "name":"Franciszek Gawęda",
    "mid": "annamrajca",
    "fid": "aleksandergaweda",
    "gender":"male",
    "img":"assets/family/images/unknown.jpeg"
  },
  {
    "id":'jangaweda',
    "name":"Jan Gawęda",
    "mid": "annamrajca",
    "fid": "aleksandergaweda",
    "gender":"male",
    "img":"assets/family/images/unknown.jpeg"
  },
  {
    "id":'jozefgaweda',
    "name":"Józef Gawęda",
    "mid": "annamrajca",
    "fid": "aleksandergaweda",
    "gender":"male",
    "img":"assets/family/images/unknown.jpeg"
  },
  {
    "id":'eugeniagaweda',
    "name":"Eugenia Gawęda",
    "mid": "annamrajca",
    "fid": "aleksandergaweda",
    "gender":"female",
    "img":"assets/family/images/unknown.jpeg"
  },
  {
    "id":'wiktoriagaweda',
    "name":"Wiktoria Gawęda",
    "mid": "annamrajca",
    "fid": "aleksandergaweda",
    "gender":"female",
    "img":"assets/family/images/unknown.jpeg"
  },
  {
    "id":'mariazydek',
    "name":"Maria Żydek",
    "mid": "annamrajca",
    "fid": "aleksandergaweda",
    "gender":"female",
    "img":"assets/family/images/unknown.jpeg"
  },
  {
    "id":'antoninaswakon',
    "name":"Antonina Swakoń",
    "gender":"female",
    "img":"assets/family/images/unknown.jpeg"
  },
  {
    "id":'stefaniabizon',
    "name":"Stefania Bizoń",
    "pids":[
      'maciejpabis'
    ],
    "mid": "antoninaswakon",
    "gender":"female",
    "img":"assets/family/images/unknown.jpeg"
  },
  {
    "id":'maciejpabis',
    "name":"Maciej Pabiś",
    "pids":[
      'stefaniabizon'
    ],
    "gender":"male",
    "img":"assets/family/images/unknown.jpeg"
  },
  {
    "id":'annamrajca',
    "name":"Anna Mrajca",
    "pids":[
      'aleksandergaweda'
    ],
    "gender":"female",
    "img":"assets/family/images/unknown.jpeg"
  },
  {
    "id":'aleksandergaweda',
    "name":"Aleksander Gawęda",
    "pids":[
      'annamrajca'
    ],
    "gender":"male",
    "img":"assets/family/images/unknown.jpeg"
  }
]
