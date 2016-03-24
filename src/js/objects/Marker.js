import BD from '../lib/BuilDom';
import Options from '../options';

const size = {
  w: 20,
  h: 20
};

export default class Marker {

  constructor (props) {
    this.x = props.data.x;
    this.y = props.data.y;
    this.id = props.id;
    this.active = props.isActive ? true : false;
    this.name = props.data.name;
  }

  create () {
    this.node = BD.createElement(
      'div',
      {
        style: {
          position: 'absolute',
          width: size.w + 'px',
          height: size.h + 'px',
          'background-color': '#ddd',
          transform: 'translate(' + this.x + 'px, ' + this.y + 'px)'
        }
      }
    );

    return this.node;
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
      active: this.active
    };
  }

};