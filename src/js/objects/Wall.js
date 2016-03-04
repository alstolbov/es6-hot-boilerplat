import BD from '../lib/BuilDom';
import Options from '../options';

export default class Box {

  constructor (props) {
    this.x = props.x;
    this.y = props.y;
    this.id = props.id;
  }

  create () {
    this.node = BD.createElement(
      'div',
      {
        style: {
          position: 'absolute',
          width: Options.boxSize + 'px',
          height: Options.boxSize + 'px',
          'background-color': '#333',
          transform: 'translate(' + this.x + 'px, ' + this.y + 'px)'
        }
      }
    );

    return this.node;
  }

  onCollision (item) {
    // item.updatePos({x: 50, y:50});
    return false;
  }

  getParams () {
    return {
      type: 'Wall',
      id: this.id,
      x: this.x,
      y: this.y,
      width: Options.boxSize,
      height: Options.boxSize,
      movable: false
    };
  }

};