import BD from '../lib/BuilDom';
import Options from '../options';
import Store from '../store';
import * as Utils from '../game/utils';
import * as Common from '../game/common';

const size = {
  w: 50,
  h: 50
};

export default class Marker {

  constructor (props) {
    this.x = props.data.x;
    this.y = props.data.y;
    this.id = props.id;
    // this.color = props.data.color;
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
          // display: this.isVisible ? "block" : "none",
          position: 'absolute',
          width: size.w + 'px',
          height: size.h + 'px',
          'background-image': 'url("img/colors_7x3.png")',
          'background-position': this.isVisible ?
            -(this.id*size.w) + 'px 0' :
            -(this.id*size.w) + 'px ' + (-size.w*2) + 'px'
          ,
          // top: this.y + 'px',
          // left: this.x + 'px',
          top: 540 + 'px',
          left: this.id*size.w + 'px',
          // opacity: 1,
          cursor: this.isVisible ?
            'pointer' :
            'default'
        }
      }
    );

    this.node.onclick = () => {
      _this.setActivity();
    };

    return this.node;
  }

  setActivity () {
    if (this.isVisible) {
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
  }

  setActive () {
    // this.node.style.opacity = 0.5;
    this.node.style.backgroundPosition = -(this.id*size.w) + 'px ' + (-size.w) + 'px';
    this.isActive = true;
  }

  setUnactive () {
    // this.node.style.opacity = 1;
    this.node.style.backgroundPosition = -(this.id*size.w) + 'px 0';
    this.isActive = false;
  }

  setVisible () {
    // this.node.style.display = "block";
    this.node.style.backgroundPosition = -(this.id*size.w) + 'px 0';
    this.node.style.cursor = 'pointer';
    this.isVisible = true;
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