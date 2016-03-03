import BD from '../lib/BuilDom';
import Options from '../options';

export default class Box {

  constructor (props) {
    this.x = props.x;
    this.y = props.y;
    this.id = props.id;
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

  updatePos (nextPos) {
    this.x = nextPos.x;
    this.y = nextPos.y;
    this.node.style.transform = 'translate(' + this.x + 'px, ' + this.y + 'px)';
  }

  getParams () {
    return {
      type: 'Box',
      id: this.id,
      x: this.x,
      y: this.y,
      width: Options.boxSize,
      height: Options.boxSize
    };
  }

};