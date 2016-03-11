import BD from '../lib/BuilDom';
import Options from '../options';

export default class Box {

  constructor (props) {
    this.type = "Box";
    this.state = "simple";
    this.x = props.x;
    this.y = props.y;
    this.id = props.id;
    this.colorId = props.colorId;
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
          'background-color': Options.colors[this.colorId].style,
          transform: 'translate(' + this.x + 'px, ' + this.y + 'px)'
        }
      }
    );

    return this.node;
  }

  updatePos (nextPos) {
    this.x = nextPos.x;
    this.y = nextPos.y;
    this.node.style.transform = 'translate(' + this.x + 'px, ' + this.y + 'px)';
  }

  onCollision (item) {
    // item.updatePos({x: 50, y:50});
    return false;
  }

  hide () {
    // this.node.parentNode.remove(this.node);
    this.node.style.display = "none";
  }

  changeState (state) {
    this.state = state;
    this.node.style.backgroundColor = '#000000';
  }

  getParams () {
    return {
      type: this.type,
      state: this.state,
      id: this.id,
      x: this.x,
      y: this.y,
      width: Options.boxSize,
      height: Options.boxSize,
      movable: true,
      colorId: this.colorId
    };
  }

};