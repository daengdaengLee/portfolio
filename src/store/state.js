const avatarImgUrl = require('../assets/avatarimage.jpg');
const thumbImgUrl1 = require('../assets/thumbnails/01.jpg');
const thumbImgUrl2 = require('../assets/thumbnails/02.jpg');
const thumbImgUrl3 = require('../assets/thumbnails/03.jpg');
const thumbImgUrl4 = require('../assets/thumbnails/04.jpg');
const thumbImgUrl5 = require('../assets/thumbnails/05.jpg');
const thumbImgUrl6 = require('../assets/thumbnails/06.jpg');
const thumbImgUrl7 = require('../assets/thumbnails/07.jpg');

export default {
  snsContacts: {
    githubAddress: 'https://github.com/daengdaengLee',
    facebookAddress: 'https://www.facebook.com/gunho.lee.566',
    codepenAddress: 'https://codepen.io/daengdaengLee/',
    mailAddress: 'gunho1020@gmail.com',
  },
  avatarImgUrl,
  thumbnailsInfo: [
    [
      {
        id: 'thumb-1',
        linkUrl: 'https://daengdaenglee.github.io/calculator_with_vuejs/',
        imgUrl: thumbImgUrl1,
        altMessage: 'web calculator thumbnail image',
        headingText: 'Web Calculator',
        descripttionText: 'html, css, javascript, vue.js',
      },
      {
        id: 'thumb-2',
        linkUrl: 'https://www.google.com',
        imgUrl: thumbImgUrl2,
        altMessage: 'thumbnail image 2',
        headingText: 'Heading Text 2',
        descripttionText: 'Description Text 2',
      },
    ],
    [
      {
        id: 'thumb-3',
        linkUrl: 'https://www.google.com',
        imgUrl: thumbImgUrl3,
        altMessage: 'thumbnail image 3',
        headingText: 'Heading Text 3',
        descripttionText: 'Description Text 3',
      },
      {
        id: 'thumb-4',
        linkUrl: 'https://www.google.com',
        imgUrl: thumbImgUrl4,
        altMessage: 'thumbnail image 4',
        headingText: 'Heading Text 4',
        descripttionText: 'Description Text 4',
      },
      {
        id: 'thumb-5',
        linkUrl: 'https://www.google.com',
        imgUrl: thumbImgUrl5,
        altMessage: 'thumbnail image 5',
        headingText: 'Heading Text 5',
        descripttionText: 'Description Text 5',
      },
    ],
    [
      {
        id: 'thumb-6',
        linkUrl: 'https://www.google.com',
        imgUrl: thumbImgUrl6,
        altMessage: 'thumbnail image 6',
        headingText: 'Heading Text 6',
        descripttionText: 'Description Text 6',
      },
      {
        id: 'thumb-7',
        linkUrl: 'https://www.google.com',
        imgUrl: thumbImgUrl7,
        altMessage: 'thumbnail image 7',
        headingText: 'Heading Text 7',
        descripttionText: 'Description Text 7',
      },
    ],
  ],
};
