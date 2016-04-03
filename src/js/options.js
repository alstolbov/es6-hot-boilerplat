const markerY = 340;

export default {
  rootNode: '#game',
  gameSize: {
    w: 800,
    h: 600
  },
  markers: [
    {
      name: 'red',
      x: 10,
      y: markerY,
      bgPos: 0
    }, {
      name: 'orange',
      x: 40,
      y: markerY,
      bgPos: 50
    }, {
      name: 'yellow',
      x: 70,
      y: markerY,
      bgPos: 100
    }, {
      name: 'green',
      x: 70,
      y: markerY,
      bgPos: 150
    }, {
      name: 'blue',
      x: 70,
      y: markerY,
      bgPos: 200
    }, {
      name: 'purtle',
      x: 70,
      y: markerY,
      bgPos: 150
    }, {
      name: 'black',
      x: 70,
      y: markerY,
      bgPos: 300
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
