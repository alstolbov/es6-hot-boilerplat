import BD from '../lib/BuilDom';
import Options from '../options';
import Levels from '../Levels';
import Store from '../store';

import Place from '../objects/Place';
import Marker from '../objects/Marker';
import * as Utils from './utils';

const rootNode = BD.$(Options.rootNode);
const Offset = Utils.offset(rootNode);
 
export default class MainGameScreen {

  constructor () {

  }

  create () {
    const Level = Levels[Store.level];
    let DOMFragm = document.createDocumentFragment();

    BD.mountElement(
      rootNode,
      BD.createElement(
        'style',
        {
          type: "text/css"
        },
        Utils.addLevelStyles(Level.classes || {})
      )
    );

    Store.objects.Place = {};
    Level.objects.places.forEach(
      (item, iter) => {
        const place = new Place({
          data: item,
          id: iter
        });
        DOMFragm.appendChild(place.create())
        Store.objects.Place[place.name || 'Place_' + iter] = place;
      }
    );

    Store.objects.Marker = {};
    Options.markers.forEach(
      (item, iter) => {
        const marker = new Marker({
          data:item,
          id: iter,
          isVisible: Level.objects.markers.indexOf(item.name) + 1
        });
        DOMFragm.appendChild(marker.create())
        Store.objects.Marker[marker.name] = marker;
      }
    );

    const ItemArea = BD.createElement(
      'div',
      {
        class: 'itemArea area',
        style: {
          width: Options.gameSize.w + 'px',
          height: Options.gameSize.h + 'px'
        }
      },
      DOMFragm
    );
    BD.mountElement(rootNode, ItemArea);

  }

};
