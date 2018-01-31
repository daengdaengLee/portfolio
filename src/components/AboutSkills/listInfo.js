const listInfo = [
  {
    id: 1,
    listTerm: 'Web Front End',
    listDesc: [
      {
        id: 1,
        listTerm: 'HTML',
      },
      {
        id: 2,
        listTerm: 'CSS',
      },
      {
        id: 3,
        listTerm: 'JavaScript',
        listDesc: [
          {
            id: 1,
            listTerm: 'jQuery'
          },
          {
            id: 2,
            listTerm: 'React',
          },
          {
            id: 3,
            listTerm: 'Vue.js',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    listTerm: 'Web Back End',
    listDesc: [
      {
        id: 1,
        listTerm: 'Node.js',
        listDesc: [
          {
            id: 1,
            listTerm: 'Express.js',
          },
        ],
      },
    ],
  },
];

export default listInfo;