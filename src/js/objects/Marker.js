import BD from '../lib/BuilDom';
import Options from '../options';
import Store from '../store';
import * as Utils from '../game/utils';
import * as Common from '../game/common';

const size = {
  w: 20,
  h: 20
};

export default class Marker {

  constructor (props) {
    this.x = props.data.x;
    this.y = props.data.y;
    this.id = props.id;
    this.isVisible = props.isVisible ? true : false;
    this.name = props.data.name;
    this.isActive = false;
  }

  create () {
    const _this = this;
    this.node = BD.createElement(
      'div',
      {
        style: {
          position: 'absolute',
          width: size.w + 'px',
          height: size.h + 'px',
          'background-color': '#ddd',
          top: this.y + 'px',
          left: this.x + 'px'
        }
      }
    );

    this.node.onclick = () => {
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
      if (!Store.click.activeFirst) {
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
      type: 'Marker',
      id: this.id,
      name: this.name,
      x: this.x,
      y: this.y,
      width: size.w,
      height: size.h,
      isVisible: this.isVisible,
      isActive: this.isActive
    };
  }

};