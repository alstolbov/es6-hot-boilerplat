import BD from '../lib/BuilDom';
import Options from '../options';

export default class Box {

  constructor (pos) {
    this.x = pos.x;
    this.y = pos.y
    // return this.create();
  }

  create () {
    this.node = BD.createElement(
      'div',
      {
        style: {
          position: 'absolute',
          width: Options.boxSize + 'px',
          height: Options.boxSize + 'px',
          'background-color': '#ddd',
          transform: 'translate(' + this.x + 'px, ' + this.y + 'px)'
        }
      }
    );

    return this.node;
  }

  move () {
    this.x++;
    this.node.style.transform = 'translate(' + this.x + 'px, ' + this.y + 'px)';
  }

  updatePos (x, y) {
    this.x = x;
    this.y = y;
    this.node.style.transform = 'translate(' + this.x + 'px, ' + this.y + 'px)';
  }

  getParams () {
    return {
      type: 'Box',
      x: this.x,
      y: this.y,
      width: Options.boxSize,
      height: Options.boxSize
    };
  }

};