const BuilDom = {};
BuilDom.createElement = (tag, _options, _content) => {
  const node = document.createElement(tag);
  let options;
  let content;
  let tmp;

  if (arguments[2]) {
    options = _options;
    content = _content;
  } else {
    options = {};
    content = _options;
  }

  if (options && typeof options == 'object') {
    for (let ind in options) {
      switch (ind) {
        case 'onclick':
          node.onclick = options[ind];
          break;
        default:
          switch (typeof options[ind]) {
            case 'string':
              node.setAttribute(ind, options[ind]);
              break;
            case 'object':
              if (!options[ind].length) {
                tmp = '';
                for (let stls in options[ind]) {
                  tmp += stls + ':' + options[ind][stls] + ';';
                }
              }
              node.setAttribute(ind, tmp);
              break;
            default: break;
          }
      }
    }
  }

  if (content) {
    switch (typeof content) {
      case 'string':
        node.innerHTML = content;
        break;
      case 'object':
        if (content.length !== 0) {
            if (!content.length) {
              node.appendChild(content);
            } else {
              content.forEach(
                function (item) {
                  node.appendChild(item);
                }
              );
            }
        }
        break;
      default: break;
    }
    
  }
  return node;
}

BuilDom.mountElement = (rootNode, node) => {
  rootNode.appendChild(node);
}

BuilDom.$ = (selector) => {
    const key = selector[0];
     let OBJ;
    switch(key) {
        case '#': OBJ = document.getElementById(selector.slice(1)); break;
        case '.': OBJ = document.querySelector(selector); break;
        case '@': OBJ = document.getElementsByName(selector.slice(1)); break;
        case '=': OBJ = document.getElementsByTagName(selector.slice(1)); break;
        case '?': OBJ = document.querySelectorAll(selector); break;
    }
    return OBJ;
}

export default BuilDom
