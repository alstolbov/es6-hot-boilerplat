import BD from '../lib/BuilDom';
import Options from '../options';
import Store from '../store';
import * as Utils from '../game/utils';

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
      // e.
      _this.setActivity();
      console.log(Store.click);
    };

    return this.node;
  }

  setActivity () {

  }

  getParams () {
    return {
      type: 'Item',
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