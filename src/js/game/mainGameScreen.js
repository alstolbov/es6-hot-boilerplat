import BD from '../lib/BuilDom';
import Options from '../options';
import Levels from '../Levels';
import Store from '../store';

import Box from '../objects/Box';
import * as Utils from './utils';

const rootNode = BD.$(Options.rootNode);

export default class MainGameScreen {

  constructor () {

  }

  create () {
    const Level = Levels[Store.level];

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
        const res = Utils.getItemUnderClick({
          x: e.clientX,
          y: e.clientY,
          items: Store.objects
        });

        if (res.isCollide) {
          Store.click.start.x = e.clientX;
          Store.click.start.y = e.clientY;
          Store.click.itemType = res.itemType;
          Store.click.itemId = res.itemId;
        }
      }
    }

    clickArea.onmouseup = (e) => {
      if (!Store.click.isMove) {
        Store.click.end.x = e.clientX;
        Store.click.end.y = e.clientY;
        if (Store.click.itemType == "Box") {
          Store.click.direction = Utils.getDirection(Store.click.start, Store.click.end);
          Store.click.isMove = true;
          this.update();
        }
      }
    }

    const DOMFragm = document.createDocumentFragment();
    Object.keys(Level.objects).forEach((key) => {
      Store.objects[key] = Array.from(Level.objects[key]).map(
        (item, iter) => {
          const Item = new Box({x: item[0], y: item[1], id: iter});
          DOMFragm.appendChild(Item.create())

          return Item;
        }
      );
    });

    DOMFragm.appendChild(clickArea);
    BD.mountElement(rootNode, DOMFragm);

    // this.update();
  }

  update () {
    // if (Store.click.isMove) {
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
            nextPos.y = itemParams.y-1;
            if (nextPos.y <= 0) {
              needMove = false;
            }
            break;
          case "down":
            nextPos.y = itemParams.y+1;
            if (nextPos.y >= Options.gameSize.h) {
              needMove = false;
            }
            break;
          case "left":
            nextPos.x = itemParams.x-1;
            if (nextPos.x <= 0) {
              needMove = false;
            }
            break;
          case "right":
            nextPos.x = itemParams.x+1;
            if (nextPos.x >= Options.gameSize.w) {
              needMove = false;
            }
            break;
        }

        const virtObj = itemParams;
        virtObj.x = nextPos.x;
        virtObj.y = nextPos.y;
        const collider = Utils.isCollide(virtObj, Store.objects);

        if (collider.isCollide || !needMove) {
          Store.click = Utils.clearClickStore();
          _this.unmount();
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
    const Level = Levels[Store.level]
    Object.keys(Store.objects).forEach((type) => {
      Array.from(Store.objects[type]).forEach((item, iter) => {
        const defaultItem = Level.objects[type][iter];
        item.updatePos({x: defaultItem[0], y: defaultItem[1]});
      });
    });
  }

  unmount () {
    // clearTimeout(Store.Interval);
    clearInterval(Store.Interval);
    Store.Interval = false;
  }
};
