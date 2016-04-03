function checkClouds (Store) {
  let countCloud = 0;
  let countColorizedCloud = 0;
  Object.keys(Store.objects.Place).forEach(
    (key) => {
      const item = Store.objects.Place[key];
      const itemProps = item.getParams();
      if (itemProps.group == "clouds") {
        countCloud++;
        if (itemProps.isUsed) {
          countColorizedCloud++;
        }
      }
    }
  );
  if (countCloud == countColorizedCloud) {
    // const ship = Store.objects.Place.ship;
    // ship.node.className = "animatedShip";
  }
}

function animateClouds (Store) {
  Object.keys(Store.objects.Place).forEach(
    (key) => {
      const item = Store.objects.Place[key];
      const itemProps = item.getParams();
      if (itemProps.group == "clouds") {
        item.node.className = "animatedShip";
      }
    }
  );  
}

export default   {
  id: 1,
  needColorize: 3,
  classes: {
    ".animatedShip": {
      animation: "moveclouds 8s linear infinite;",
      "-webkit-animation": "moveclouds 8s linear infinite;"
    },
    "@keyframes moveclouds": {
      "0%": "{margin-left: 300px;}",
      "100%": "{margin-left: 0px;}"
    },
    "@-webkit-keyframes moveclouds": {
      "0%": "{margin-left: 300px;}",
      "100%": "{margin-left: 0px;}"
    }
  },
  objects: {
    markers: ['red', 'green'],
    places: [
      {
        name: 'oval',
        x: 30,
        y: 150,
        w: 150,
        h: 50,
        needMarker: 'red',
        img: 'oval.png',
        clickArea: '0, 0, 150, 0, 150, 40, 0, 40',
        onColorize: animateClouds
      }, {
        x: 30,
        y: 80,
        w: 80,
        h: 50,
        group: 'clouds',
        needMarker: 'blue',
        img: 'clouds.png',
        clickArea: '10, 5, 75, 5, 75, 45, 10, 45',
        onColorize: checkClouds
      }, {
        x: 160,
        y: 50,
        w: 80,
        h: 50,
        group: 'clouds',
        needMarker: 'blue',
        img: 'clouds.png',
        clickArea: '10, 5, 75, 5, 75, 45, 10, 45',
        onColorize: checkClouds
      }
    ]
  }
};
