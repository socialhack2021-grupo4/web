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
    full_description: _.times('Loren ipsum', 40),
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
    starred: null, // Depends on user
    n_participants: 10,
    priority: 0.8, // low 0 < priority < 1 top
    date_start: '2020-10-10 10:10',
    date_end: '2021-10-10 10:10',
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
    full_description: _.times('Loren ipsum', 40),
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
    starred: null, // Depends on user
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
    full_description: _.times('Loren ipsum', 40),
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
    starred: null, // Depends on user
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
      id: 3,
      name: 'Cáritas',
      icon: 'https://www.caritas.es/ibiza/ImagesRepository/8a92c1bf.jpg',
      url: 'https://www.caritas.es/'
    },
    title: 'Esquía conmigo en Andorra',
    description: 'Vente a ',
    // To be shown on the detail
    full_description: _.times('Loren ipsum', 40),
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
    starred: null, // Depends on user
    n_participants: 5,
    priority: 0.8, // low 0 < priority < 1 top
    date_start: '2020-10-10 10:10',
    date_end: '2021-10-10 10:10',
    date_at: '2021-12-10 10:10',
    currency: 'eur',
    price: 1344 // 12,34
  },
  {
    id: 5,
    stripeId: null,
    host: {
      id: 4,
      name: 'Bertín Osborne',
      profile_pic: 'https://okdiario.com/img/2019/05/21/bertin-osborne-se-sincera-655x368.jpg',
      instagram: null
    },
    ngo: {
      id: 3,
      name: 'Fundación Bertín Osborne',
      icon: 'https://www.fundacionbertinosborne.org/wp-content/uploads/faviconFBO.png',
      url: 'https://www.fundacionbertinosborne.org/colabora/'
    },
    title: 'Mi casa es la tuya',
    description: 'Vente a ',
    // To be shown on the detail
    full_description: _.times('Loren ipsum', 40),
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
    starred: null, // Depends on user
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
      id: 4,
      name: 'Dulceida',
      profile_pic: 'https://instagram.fmad16-1.fna.fbcdn.net/v/t51.2885-19/s150x150/72421535_677893275954133_1208687239719026688_n.jpg?_nc_ht=instagram.fmad16-1.fna.fbcdn.net&_nc_ohc=DBx0NetQCNwAX-V7dYQ&tp=1&oh=e391ca914aa07fd4c4014e70deb1c0c0&oe=6051B08E',
      instagram: null
    },
    ngo: {
      id: 3,
      name: 'Fundación Rafa Nadal',
      icon: 'https://rafaelnadal.com/wp-content/uploads/2017/03/logo-fundacion-rafa-nadal.png',
      url: 'http://www.fundacionrafanadal.org/es/default.asp/'
    },
    title: 'Ven de fotos conmigo',
    description: 'Vente a ',
    // To be shown on the detail
    full_description: _.times('Loren ipsum', 40),
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
    starred: null, // Depends on user
    n_participants: 5,
    priority: 0.8, // low 0 < priority < 1 top
    date_start: '2020-10-10 10:10',
    date_end: '2021-10-10 10:10',
    date_at: '2021-12-10 10:10',
    currency: 'eur',
    price: 1344 // 12,34
  }
]
