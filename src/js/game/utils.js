import Options from '../options';
import Store from '../store';

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
    direction: false,
    square: {}
  }
};

export function offset (elt) {
  const rect = elt.getBoundingClientRect(), bodyElt = document.body;
  return {
      top: rect.top + bodyElt .scrollTop,
      left: rect.left + bodyElt .scrollLeft
  }
}

function getSquare (data) {
  return {
    x: Math.floor(data.x/Options.boxSize),
    y: Math.floor(data.y/Options.boxSize)
  };
}

export function getSquareUnderClick (data) {
  let res = false;
  // const xSquare = Math.floor(data.x/Options.boxSize);
  // const ySquare = Math.floor(data.y/Options.boxSize);
  const squarePos = getSquare(data);
  const obj = data.matrix[squarePos.y][squarePos.x];

  if (obj.id || obj.id == 0) {
    res = {};
    res.itemType = obj.type;
    res.itemId = obj.id;
    res.isCollide = true;
    res.square = {};
    res.square.start = {x: squarePos.x, y: squarePos.y};
  }

  return res;
}

export function updateMatrix (start, end, matrix) {
  const tmpMatrix = matrix;
  const endSquare = getSquare(end);
  tmpMatrix[endSquare.y][endSquare.x] = tmpMatrix[start.y][start.x];
  tmpMatrix[start.y][start.x] = {
    type: 'Empty'
  };

  return tmpMatrix;
}

export function randInt (_max) {
  const max = _max || 1;
  return Math.floor(Math.random()*max);
}

function checkMatrixItem (square, directions, res) {
  const itemInMatrix = Store.matrix[square.y][square.x];

  if (
    (itemInMatrix.id || itemInMatrix.id == 0) &&
    itemInMatrix.type == "Box"
  ) {
    const item = Store.objects.Box[itemInMatrix.id]
    const itemParams = item.getParams();
    const nextSquare = {};
    switch (directions) {
      case "r":
        nextSquare.x = square.x + 1;
        nextSquare.y = square.y;
        break;
      case "l":
        nextSquare.x = square.x - 1;
        nextSquare.y = square.y;
        break;
      case "u":
        nextSquare.x = square.x;
        nextSquare.y = square.y - 1;
        break;
      case "d":
        nextSquare.x = square.x;
        nextSquare.y = square.y + 1;
        break;
    }

    if (Store.matrix[nextSquare.y] && Store.matrix[nextSquare.y][nextSquare.x]) {
      const nextItemInMatrix = Store.matrix[nextSquare.y][nextSquare.x];
      if (
        (nextItemInMatrix.id || nextItemInMatrix.id == 0) &&
        nextItemInMatrix.type == "Box"
      ) {
        const nextItem = Store.objects.Box[nextItemInMatrix.id];
        const nextItemParams = nextItem.getParams();
        if (itemParams.colorId == nextItemParams.colorId) {
          res.push({
            item: nextItemParams,
            squire: nextSquare
          });
          checkMatrixItem(nextSquare, directions, res);
        }
        // console.log(square, nextSquare);
      }
    }
  }
}

export function checkMatrix (item) {
  const res = [];
  const square = getSquare(item);

  res.push({
    item: item,
    squire: square,
    primary: true
  });
  checkMatrixItem (square, 'r', res);
  checkMatrixItem (square, 'l', res);
  checkMatrixItem (square, 'u', res);
  checkMatrixItem (square, 'd', res);

  return res;
}
