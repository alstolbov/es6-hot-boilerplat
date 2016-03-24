import BD from '../lib/BuilDom';
import Options from '../options';

export default class Place {

  constructor (props) {
    this.x = props.data.x;
    this.y = props.data.y;
    this.id = props.id;
    this.w = props.data.w;
    this.h = props.data.h;
  }

  create () {
    this.node = BD.createElement(
      'div',
      {
        style: {
          position: 'absolute',
          width: this.w + 'px',
          height: this.h + 'px',
          'background-color': '#666',
          top: this.x + 'px',
          left: this.y + 'px'
        }
      }
    );

    return this.node;
  }

  getParams () {
    return {
      type: 'Item',
      id: this.id,
      x: this.x,
      y: this.y,
      width: this.w,
      height: this.h,
      movable: true
    };
  }

};