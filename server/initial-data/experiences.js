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
      instagram: 'https://www.instagram.com/ibaillanos/?hl=en'
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
      instagram: 'https://www.instagram.com/davidbroncano/?hl=en'
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
      instagram: 'https://www.instagram.com/davidbroncano/?hl=en'
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
  }
]
