const _ = require('lodash')

/**
 *
 * @type {RetoPlusOne.Experience[]}
 */
module.exports = [
  {
    id: 1,
    stripeId: null,
    host: {
      id: 1,
      name: 'Ibai Llanos',
      profile_pic: 'https://static-cdn.jtvnw.net/jtv_user_pictures/574228be-01ef-4eab-bc0e-a4f6b68bedba-profile_image-300x300.png',
      instagram: null
    },
    ngo: {
      id: 1,
      name: 'Médicos sin fronteras',
      icon: 'https://pbs.twimg.com/profile_images/855142032066695173/GGdhnJvg_400x400.jpg',
      url: 'https://www.msf.es/'
    },
    title: 'Cenita en mi casa',
    description: 'Vente a ',
    // To be shown on the detail
    full_description: _.repeat('Loren ipsum', 40),
    pic_thumbnail_url: 'http://',
    pic_url: 'https://media.vandal.net/i/1280x720/2-2021/202121123140_1.jpg.webp',
    // For the carousel
    pics: [{
      url: 'http://',
      is_video: true
    },
    {
      url: 'http://',
      is_video: false
    }
    ],
    is_bought: null, // Depends on user
    starred: false,
    n_participants: 10,
    priority: 0.8, // low 0 < priority < 1 top
    date_start: '2020-10-10 10:10',
    date_end: '2021-03-03 10:10',
    date_at: '2021-12-10 10:10',
    currency: 'eur',
    price: 500 // 12,34
  },
  {
    id: 2,
    stripeId: null,
    host: {
      id: 2,
      name: 'David Broncano',
      profile_pic: 'https://www.ecestaticos.com/image/clipping/f197c74808f3ed3033df14dd146a027d/asi-se-forjo-el-fenomeno-david-broncano-la-resistencia-del-nuevo-pachacho-de-la-tele.jpg',
      instagram: null
    },
    ngo: {
      id: 2,
      name: 'Save the Children',
      icon: 'https://static.diariosur.es/www/pre2017/multimedia/noticias/201601/26/media/cortadas/save-the-children_1--575x323.jpg',
      url: 'https://www.savethechildren.net/'
    },
    title: 'Ven a la Resistencia de invitado',
    description: 'Vente a ',
    // To be shown on the detail
    full_description: _.repeat('Loren ipsum', 40),
    pic_thumbnail_url: 'http://',
    pic_url: 'https://i.ytimg.com/vi/GKgDTSLiONA/sddefault.jpg#404_is_fine',
    // For the carousel
    pics: [{
      url: 'http://',
      is_video: true
    },
    {
      url: 'http://',
      is_video: false
    }
    ],
    is_bought: null, // Depends on user
    starred: false,
    n_participants: 5,
    priority: 0.8, // low 0 < priority < 1 top
    date_start: '2020-10-10 10:10',
    date_end: '2021-10-10 10:10',
    date_at: '2021-12-10 10:10',
    currency: 'eur',
    price: 1344 // 12,34
  },
  {
    id: 3,
    stripeId: null,
    host: {
      id: 3,
      name: 'Rafael Nadal',
      profile_pic: 'https://as.com/tenis/imagenes/2018/09/07/us_open/1536349049_080213_1536480307_noticia_normal.jpg',
      instagram: null
    },
    ngo: {
      id: 3,
      name: 'Fundación Rafa Nadal',
      icon: 'https://rafaelnadal.com/wp-content/uploads/2017/03/logo-fundacion-rafa-nadal.png',
      url: 'http://www.fundacionrafanadal.org/es/default.asp/'
    },
    title: 'Partido de Tenis',
    description: 'Vente a ',
    // To be shown on the detail
    full_description: _.repeat('Loren ipsum', 40),
    pic_thumbnail_url: 'http://',
    pic_url: 'https://lh3.googleusercontent.com/proxy/SDBUjTRcxmx1XAZTuFvxlFlZlZ8PNlBUZYQp1_tjg2JQR8JS4h_l9TKiahluxj_llLpKOzrrSRDaxwAt-r_R-Lb7fJjdvw',
    // For the carousel
    pics: [{
      url: 'http://',
      is_video: true
    },
    {
      url: 'http://',
      is_video: false
    }
    ],
    is_bought: null, // Depends on user
    starred: false,
    n_participants: 5,
    priority: 0.8, // low 0 < priority < 1 top
    date_start: '2020-10-10 10:10',
    date_end: '2021-10-10 10:10',
    date_at: '2021-12-10 10:10',
    currency: 'eur',
    price: 1344 // 12,34
  },
  {
    id: 4,
    stripeId: null,
    host: {
      id: 4,
      name: 'El Rubius',
      profile_pic: 'https://static3.elcomercio.es/www/multimedia/202101/18/media/cortadas/rubius-andorra-polemica-impuestos-ibai-llanos-k79C-U13025706315123C-624x385@El%20Comercio.jpg',
      instagram: null
    },
    ngo: {
      id: 4,
      name: 'Cáritas',
      icon: 'https://www.caritas.es/ibiza/ImagesRepository/8a92c1bf.jpg',
      url: 'https://www.caritas.es/'
    },
    title: 'Esquía conmigo en Andorra',
    description: 'Vente a ',
    // To be shown on the detail
    full_description: _.repeat('Loren ipsum', 40),
    pic_thumbnail_url: 'http://',
    pic_url: 'https://i.guim.co.uk/img/media/40d62051394665489d89a3db4a082ce24b932f9f/0_212_5076_3045/master/5076.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=a55a3f6de500c28c063ba4073bdc376e',
    // For the carousel
    pics: [{
      url: 'http://',
      is_video: true
    },
    {
      url: 'http://',
      is_video: false
    }
    ],
    is_bought: null, // Depends on user
    starred: true,
    n_participants: 5,
    priority: 0.8, // low 0 < priority < 1 top
    date_start: '2020-10-10 10:10',
    date_end: '2021-02-20 10:10',
    date_at: '2021-12-10 10:10',
    currency: 'eur',
    price: 1344 // 12,34
  },
  {
    id: 5,
    stripeId: null,
    host: {
      id: 5,
      name: 'Bertín Osborne',
      profile_pic: 'https://okdiario.com/img/2019/05/21/bertin-osborne-se-sincera-655x368.jpg',
      instagram: null
    },
    ngo: {
      id: 5,
      name: 'Fundación Bertín Osborne',
      icon: 'https://www.fundacionbertinosborne.org/wp-content/uploads/faviconFBO.png',
      url: 'https://www.fundacionbertinosborne.org/colabora/'
    },
    title: 'Mi casa es la tuya',
    description: 'Vente a ',
    // To be shown on the detail
    full_description: _.repeat('Loren ipsum', 40),
    pic_thumbnail_url: 'http://',
    pic_url: 'https://images-na.ssl-images-amazon.com/images/I/71SJoowWjZL._SL1500_.jpg',
    // For the carousel
    pics: [{
      url: 'http://',
      is_video: true
    },
    {
      url: 'http://',
      is_video: false
    }
    ],
    is_bought: null, // Depends on user
    starred: false,
    n_participants: 5,
    priority: 0.8, // low 0 < priority < 1 top
    date_start: '2020-10-10 10:10',
    date_end: '2021-10-10 10:10',
    date_at: '2021-12-10 10:10',
    currency: 'eur',
    price: 1344 // 12,34
  },
  {
    id: 6,
    stripeId: null,
    host: {
      id: 6,
      name: 'Dulceida',
      profile_pic: 'https://instagram.fmad16-1.fna.fbcdn.net/v/t51.2885-19/s150x150/72421535_677893275954133_1208687239719026688_n.jpg?_nc_ht=instagram.fmad16-1.fna.fbcdn.net&_nc_ohc=DBx0NetQCNwAX-V7dYQ&tp=1&oh=e391ca914aa07fd4c4014e70deb1c0c0&oe=6051B08E',
      instagram: null
    },
    ngo: {
      id: 6,
      name: 'Ayuda en Acción',
      icon: 'https://plataformadeinfancia.org/wp-content/uploads/2016/04/entidades-plataforma-de-infancia-logo-ayuda-en-accion-400x400.jpg',
      url: 'https://ayudaenaccion.org/'
    },
    title: 'Ven de fotos conmigo',
    description: 'Vente a ',
    // To be shown on the detail
    full_description: _.repeat('Loren ipsum', 40),
    pic_thumbnail_url: 'http://',
    pic_url: 'https://images-na.ssl-images-amazon.com/images/I/71SJoowWjZL._SL1500_.jpg',
    // For the carousel
    pics: [{
      url: 'http://',
      is_video: true
    },
    {
      url: 'http://',
      is_video: false
    }
    ],
    is_bought: null, // Depends on user
    starred: false,
    n_participants: 5,
    priority: 0.8, // low 0 < priority < 1 top
    date_start: '2020-10-10 10:10',
    date_end: '2021-02-14 10:10',
    date_at: '2021-12-10 10:10',
    currency: 'eur',
    price: 1344 // 12,34
  },
  {
    id: 7,
    stripeId: null,
    host: {
      id: 7,
      name: 'Ester Expósito',
      profile_pic: 'https://instagram.fmad16-1.fna.fbcdn.net/v/t51.2885-19/s150x150/150463737_425983045395402_2266951643320558496_n.jpg?_nc_ht=instagram.fmad16-1.fna.fbcdn.net&_nc_ohc=uqQqQkn-6LkAX-p6K51&tp=1&oh=370da9714eb6477347f80a7a43765ffc&oe=605191DB',
      instagram: null
    },
    ngo: {
      id: 7,
      name: 'WWF',
      icon: 'https://d1diae5goewto1.cloudfront.net/_skins/capetown/img/logo.png',
      url: 'https://www.wwf.es//'
    },
    title: 'Noche de Pelis',
    description: 'Vente a ',
    // To be shown on the detail
    full_description: _.repeat('Loren ipsum', 40),
    pic_thumbnail_url: 'http://',
    pic_url: 'https://images-na.ssl-images-amazon.com/images/I/71SJoowWjZL._SL1500_.jpg',
    // For the carousel
    pics: [{
      url: 'http://',
      is_video: true
    },
    {
      url: 'http://',
      is_video: false
    }
    ],
    is_bought: null, // Depends on user
    starred: false,
    n_participants: 5,
    priority: 0.8, // low 0 < priority < 1 top
    date_start: '2020-10-10 10:10',
    date_end: '2021-10-10 10:10',
    date_at: '2021-12-10 10:10',
    currency: 'eur',
    price: 1344 // 12,34
  },
  {
    id: 8,
    stripeId: null,
    host: {
      id: 8,
      name: 'Amancio Ortega',
      profile_pic: 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c76b94131358e35dd27748e%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D179%26cropX2%3D2232%26cropY1%3D216%26cropY2%3D2269',
      instagram: null
    },
    ngo: {
      id: 8,
      name: 'Confederacion Galega de Persoas con Discapacidade (cogami)',
      icon: 'http://www.cogami.gal/iOApps/F048C26A-4796-43E0-AA1D-EAB0B7D08F3D/Themes/E2F6C6AF-5E51-42C4-81D4-DF71E1499700/assets/img/themes/logo-cogami.png',
      url: 'http://www.cogami.gal//'
    },
    title: 'Vayamos a navegar',
    description: 'Vente a ',
    // To be shown on the detail
    full_description: _.repeat('Loren ipsum', 40),
    pic_thumbnail_url: 'http://',
    pic_url: 'https://images-na.ssl-images-amazon.com/images/I/71SJoowWjZL._SL1500_.jpg',
    // For the carousel
    pics: [{
      url: 'http://',
      is_video: true
    },
    {
      url: 'http://',
      is_video: false
    }
    ],
    is_bought: null, // Depends on user
    starred: false,
    n_participants: 5,
    priority: 0.8, // low 0 < priority < 1 top
    date_start: '2020-10-10 10:10',
    date_end: '2021-10-10 10:10',
    date_at: '2021-12-10 10:10',
    currency: 'eur',
    price: 1344 // 12,34
  },
  {
    id: 9,
    stripeId: null,
    host: {
      id: 9,
      name: 'Abel Caballero',
      profile_pic: 'https://4.bp.blogspot.com/-04-ZCClcWIY/WzrChFN7AoI/AAAAAAABkFM/V-XYTq-mlcwzIi6UwqRpqry9XxL0Gyf4ACLcBGAs/s1600/Abel%2BCaballero%2BCelta.jpg',
      instagram: null
    },
    ngo: {
      id: 9,
      name: 'Fundación Menela',
      icon: 'http://atenciontemprana.com/wp-content/uploads/2019/01/MENELA.jpg/',
      url: 'https://menela.gal/'
    },
    title: 'Un paseo por Vigo',
    description: 'Vente a ',
    // To be shown on the detail
    full_description: _.repeat('Loren ipsum', 40),
    pic_thumbnail_url: 'http://',
    pic_url: 'https://images-na.ssl-images-amazon.com/images/I/71SJoowWjZL._SL1500_.jpg',
    // For the carousel
    pics: [{
      url: 'http://',
      is_video: true
    },
    {
      url: 'http://',
      is_video: false
    }
    ],
    is_bought: null, // Depends on user
    starred: false,
    n_participants: 5,
    priority: 0.8, // low 0 < priority < 1 top
    date_start: '2020-10-10 10:10',
    date_end: '2021-10-10 10:10',
    date_at: '2021-12-10 10:10',
    currency: 'eur',
    price: 1344 // 12,34
  },
  {
    id: 10,
    stripeId: null,
    host: {
      id: 10,
      name: 'Pedro Alonso',
      profile_pic: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Pedro_Alonso.jpg',
      instagram: null
    },
    ngo: {
      id: 10,
      name: 'Fundación Menela',
      icon: 'https://www.arela.org/templates/arela2012/images/logo_portada_new.png',
      url: 'https://www.arela.org//'
    },
    title: 'Partida de Mus',
    description: 'Vente a ',
    // To be shown on the detail
    full_description: _.repeat('Loren ipsum', 40),
    pic_thumbnail_url: 'http://',
    pic_url: 'https://images-na.ssl-images-amazon.com/images/I/71SJoowWjZL._SL1500_.jpg',
    // For the carousel
    pics: [{
      url: 'http://',
      is_video: true
    },
    {
      url: 'http://',
      is_video: false
    }
    ],
    is_bought: null, // Depends on user
    starred: false,
    n_participants: 5,
    priority: 0.8, // low 0 < priority < 1 top
    date_start: '2020-10-10 10:10',
    date_end: '2021-10-10 10:10',
    date_at: '2021-12-10 10:10',
    currency: 'eur',
    price: 1344 // 12,34
  }
]
