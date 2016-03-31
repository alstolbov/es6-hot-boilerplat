export default {
  rootNode: '#game',
  gameSize: {
    w: 300,
    h: 200
  },
  markers: [
    {
      name: 'red',
      x: 10,
      y: 10,
      color: '#ff0000'
    }, {
      name: 'blue',
      x: 40,
      y: 10,
      color: '#005A90'
    }, {
      name: 'green',
      x: 70,
      y: 10,
      color: '#009006'
    }
  ],
  mixRules: [
    {
      need: ['red', 'green'],
      res: 'blue'
    }
  ],
  speed: 20
};
