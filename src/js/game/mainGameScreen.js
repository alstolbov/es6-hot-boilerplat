import BD from '../lib/BuilDom';
import Options from '../options';
import Levels from '../Levels';
import Store from '../store';

import Box from '../objects/Box';
import Wall from '../objects/Wall';
import * as Utils from './utils';

const ItemList = {
  Box: Box,
  Wall: Wall
};

const rootNode = BD.$(Options.rootNode);

const Offset = Utils.offset(rootNode);

export default class MainGameScreen {

  constructor () {

  }

  create () {
    const Level = Levels[Store.level];
    const wItems = Options.gameSize.w/Options.boxSize;
    const hItems = Options.gameSize.h/Options.boxSize;

    rootNode.innerHTML = '';
    Store.matrix = [];
    Store.click = Utils.clearClickStore();

    const clickArea = BD.createElement(
      'div',
      {
        style: {
          position: 'absolute',
          width: Options.gameSize.w + 'px',
          height: Options.gameSize.h + 'px'
        }
      }
    );

    clickArea.onmousedown = (e) => {
      if (!Store.click.isMove) {
        const res = Utils.getSquareUnderClick({
          x: e.clientX - Offset.left,
          y: e.clientY - Offset.top,
          matrix: Store.matrix
        });
        if (res.isCollide) {
          Store.click.start.x = e.clientX - Offset.left;
          Store.click.start.y = e.clientY - Offset.top;
          Store.click.itemType = res.itemType;
          Store.click.itemId = res.itemId;
          Store.click.square.start = res.square.start;
        }
      }
    }

    clickArea.onmouseup = (e) => {
      if (!Store.click.isMove && Store.click.itemType && (Store.click.itemId || Store.click.itemId == 0)) {
        const item = Store.objects[Store.click.itemType][Store.click.itemId];
        const itemParams= item.getParams();

        Store.click.end.x = e.clientX - Offset.left;
        Store.click.end.y = e.clientY - Offset.top;

        if (itemParams.movable) {
          Store.click.direction = Utils.getDirection(Store.click.start, Store.click.end);
          Store.click.isMove = true;
          this.update();
        }
      }
    }

    const DOMFragm = document.createDocumentFragment();

    let Item;
    let boxIter = 0;
    Store.objects.Box = [];
    for (let i = 0; i < hItems; i++) {
      Store.matrix.push([]);
      for (let r = 0; r < wItems; r++) {
        if (Math.random() > 0.7) {
          Item = new Box({
            x: r * Options.boxSize,
            y: i * Options.boxSize,
            id: boxIter,
            colorId: Utils.randInt(5)
          });
          DOMFragm.appendChild(Item.create());
          Store.objects.Box.push(Item);
          Store.matrix[i][r] = {
            id: boxIter,
            type: 'Box' 
          }
          boxIter++;
        } else {
          Store.matrix[i][r] = {
            type: 'Empty'
          }
        }
      }
    }

    DOMFragm.appendChild(clickArea);
    BD.mountElement(rootNode, DOMFragm);

    // this.update();
  }

  update () {
    const _this = this;
    Store.Interval = setInterval(
      () => {
        const item = Store.objects[Store.click.itemType][Store.click.itemId];
        const itemParams= item.getParams();

        const nextPos = {
          x: itemParams.x,
          y: itemParams.y
        };
        let needMove = true;

        switch (Store.click.direction) {
          case "up":
            nextPos.y = itemParams.y - Options.speedCoeff;
            if (nextPos.y < 0) {
              needMove = false;
            }
            break;
          case "down":
            nextPos.y = itemParams.y + Options.speedCoeff;
            if (nextPos.y > Options.gameSize.h - Options.boxSize) {
              needMove = false;
            }
            break;
          case "left":
            nextPos.x = itemParams.x - Options.speedCoeff;
            if (nextPos.x < 0) {
              needMove = false;
            }
            break;
          case "right":
            nextPos.x = itemParams.x + Options.speedCoeff;
            if (nextPos.x > Options.gameSize.w - Options.boxSize) {
              needMove = false;
            }
            break;
        }

        const virtObj = itemParams;
        virtObj.x = nextPos.x;
        virtObj.y = nextPos.y;
        const collider = Utils.isCollide(virtObj, Store.objects);
        if (collider.isCollide || !needMove) {
          const newParams = item.getParams();
          Store.matrix = Utils.updateMatrix(
            Store.click.square.start,
            newParams,
            Store.matrix
          );
          Store.click = Utils.clearClickStore();
          _this.unmount();
          if (collider.isCollide) {
            const lines = Utils.checkMatrix(newParams);
            if (lines.length > 2) {
              Array.from(lines).forEach(
                (item) => {
                  // console.log(item.item.id, item.squire);
                  const itemObj = Store.objects[item.item.type][item.item.id];
                  if (!item.primary) {
                    itemObj.hide();
                  } else {
                    itemObj.changeState("colored");
                  }
                }
              );
            }
            Store.objects[collider.itemType][collider.itemId].onCollision(item);
          }
        } else {
          item.updatePos(nextPos);
          // _this.update();
        }

        if (!needMove) {
          this.reset();
        }
      },
      Options.speed
    );
  }

  reset () {
    // const Level = Levels[Store.level]
    // Object.keys(Store.objects).forEach((type) => {
    //   Array.from(Store.objects[type]).forEach((item, iter) => {
    //     const defaultItem = Level.objects[type][iter];
    //     item.updatePos({x: defaultItem[0], y: defaultItem[1]});
    //   });
    // });
    this.create();
  }

  unmount () {
    // clearTimeout(Store.Interval);
    clearInterval(Store.Interval);
    Store.Interval = false;
  }
};
