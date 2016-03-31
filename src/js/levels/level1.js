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
    const ship = Store.objects.Place.ship;
    ship.node.className = "animatedShip";
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
  classes: {
    ".animatedShip": {
      animation: "moveclouds 3s linear infinite;"
    },
    "@keyframes moveclouds": {
      "0%": "{margin-left: 100px;}",
      "100%": "{margin-left: 0px;}"
    }
  },
  objects: {
    markers: ['red', 'green'],
    places: [
      {
        name: 'ship',
        x: 30,
        y: 150,
        w: 70,
        h: 20,
        needMarker: 'red',
        clickArea: '0, 0, 20, 0, 20, 20, 0, 20',
        onColorize: animateClouds
      }, {
        x: 30,
        y: 80,
        w: 20,
        h: 20,
        group: 'clouds',
        needMarker: 'blue',
        clickArea: '0, 0, 20, 0, 20, 20, 0, 20',
        onColorize: checkClouds
      }, {
        x: 70,
        y: 80,
        w: 20,
        h: 20,
        group: 'clouds',
        needMarker: 'blue',
        clickArea: '0, 0, 20, 0, 20, 20, 0, 20',
        onColorize: checkClouds
      }
    ]
  }
};
