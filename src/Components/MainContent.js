

const MainContent = []
MainContent.push(
  {
    id: 1,
    date: 'February 10 2017' ,
    body: 'Bureaux exquisite delightful carefully curated soft power.',
    sub: 'Presented by',
    link: 'Lorem Ipsum',
    img: require('../images/column1-img1.jpg')
  },
  {
    id: 2,
    date: 'January 21 2017' ,
    body: 'Esse airport ryokan soft power.',
    sub: 'Presented by',
    link: 'Lorem Ipsum',
    img: require('../images/column1-img2.jpg')
  },
  {
    id: 3,
    date: 'February 2 2017' ,
    body: 'Sharp bureaux sleepy K-pop carefully curated.',
    sub: 'Presented by',
    link: 'Lorem Ipsum',
    img: require('../images/column2-img1.jpg')
  },
  {
    id: 4,
    date: 'January 18 2017' ,
    body: 'K-pop extraordinary.',
    sub: 'Presented by',
    link: 'Lorem Ipsum',
    img: require('../images/column2-img2.jpg')
  },
  {
    id: 5,
    date: 'January 27 2017' ,
    body: 'St Moritz uniforms Beams.',
    sub: 'Presented by',
    link: 'Lorem Ipsum',
    img: require('../images/column3-img1.png')
  },
  {
    id: 6,
    date: 'January 12 2017' ,
    body: 'Artisanal iconic cutting-edge business class.',
    sub: 'Presented by',
    link: 'Lorem Ipsum',
    img: require('../images/column3-img2.jpg')
  })

  const sortByDate = (a,b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();

  }
  MainContent.sort(sortByDate);
  console.log(MainContent, 'content')

export default MainContent