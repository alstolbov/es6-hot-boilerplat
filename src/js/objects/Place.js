import BD from '../lib/BuilDom';
import Options from '../options';
import Store from '../store';
import * as Utils from '../game/utils';
import * as Common from '../game/common';

const Type = "Place";

export default class Place {

  constructor (props) {
    this.x = props.data.x;
    this.y = props.data.y;
    this.id = props.id;
    this.w = props.data.w;
    this.h = props.data.h;
    this.needMarker = props.data.needMarker;
    this.isActive = false;
    this.isVisible = props.isVisible || true;
    this.clickArea = props.data.clickArea;
  }

  create () {
    const _this = this;
    this.clickAreaItem = BD.createElement(
      'area',
      {
        shape: "poly",
        coords: this.clickArea
      }
    );

    this.node = BD.createElement(
      'div',
      {
        style: {
          position: 'absolute',
          width: this.w + 'px',
          height: this.h + 'px',
          'background-color': '#666',
          top: this.y + 'px',
          left: this.x + 'px'
        }
      },
      [
        BD.createElement(
          'img',
          {
            usemap: "#place_" + this.id,
            src: '/img/blue-marker.png',
            width: this.w + 'px',
            height: this.h + 'px',
            style: {
              opacity: 0
            }
          }
        ),
        BD.createElement(
          'map',
          {
            name: "#place_" + this.id
          },
          this.clickAreaItem
        )
      ]
    );

    this.clickAreaItem.onclick = (e) => {
      e.preventDefault;
      _this.setActivity();
    };

    return this.node;
  }

  setActivity () {
    const _this = this;

    if (this.isActive) {
      this.setUnactive();
      Store.click = Utils.clearClickStore();
    } else {
      this.setActive();
      if (Store.click.activeFirst.type == Type) {
        Store.objects[Store.click.activeFirst.type][Store.click.activeFirst.id].setUnactive();
      }
      if (
        !Store.click.activeFirst ||
        Store.click.activeFirst.type == Type
      ) {
        Store.click.activeFirst = {};
        Store.click.activeFirst = _this.getParams();
      } else {
        Store.click.activeSecond = {};
        Store.click.activeSecond = _this.getParams();
        Common.onSecondClick();
      }
    }
  }

  setActive () {
    this.node.style.opacity = 0.5;
    this.isActive = true;
  }

  setUnactive () {
    this.node.style.opacity = 1;
    this.isActive = false;
  }

  getParams () {
    return {
      type: Type,
      id: this.id,
      x: this.x,
      y: this.y,
      width: this.w,
      height: this.h,
      isActive: this.isActive,
      isVisible: this.isVisible,
      needMarker: this.needMarker
    };
  }

};