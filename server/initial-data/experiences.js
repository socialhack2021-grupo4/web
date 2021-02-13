const _ = require('lodash')
module.exports = [
  {
    id: 1,
    host: {
      id: 1,
      profile_pic: 'http://',
      instagram: 'http://'
    },
    ngo: {
      id: 1,
      icon: 'http',
      url: 'http'
    },
    title: 'Cena en mi casa',
    description: 'Disfruta en la nueva casa de ibai...',
    // To be shown on the detail
    full_description: _.times('Loren ipsum', 40),
    pic_thumbnail_url: 'http://',
    pic_url: 'http://',
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
    price: 1234 // 12,34
  }
]
