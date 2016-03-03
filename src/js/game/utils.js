function _isCollide (rect1, rect2) {
  let res = false;
  if (rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.height + rect1.y > rect2.y
  ) {
    res = true;
  }

  return res;
}

function _Collider (rect1, items, exeption) {
  const res = {};
  Object.keys(items).forEach((type) => {
    Array.from(items[type]).forEach((item, iter) => {
      const itemParams = item.getParams();
      let isCompare = true;

      if (exeption &&
        itemParams.id == rect1.id
      ) {
        isCompare = false;
      }
      if (isCompare && _isCollide(rect1, itemParams)) {
        res.isCollide = true;
        res.itemType = type;
        res.itemId = iter;
      }
    });
  });

  return res;
}

export function getItemUnderClick (params) {
  const virtObj = {
    x: params.x,
    y: params.y,
    width: 0,
    height: 0
  };

  return _Collider(virtObj, params.items);
};

export function isCollide (rect1, items) {
  return _Collider(rect1, items, true);
}

export function getDirection(start, end) {
  let direct = false;
  if (Math.abs(end.x - start.x) > Math.abs(end.y - start.y)) {
    if (end.x - start.x > 0) {
      direct = 'right';
    } else {
      direct = 'left';
    }
  } else {
    if (end.y - start.y > 0) {
      direct = 'down';
    } else {
      direct = 'up';
    }
  }

  return direct;
};


export function clearClickStore () {
  return {
    start: {},
    end: {},
    itemType: '',
    itemId: false,
    isMove: false,
    direction: false
  }
};
