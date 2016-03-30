import * as Utils from './utils';
import Store from '../store';

function onTwoMarkerSelection () {
  console.log('two markers');
}

function onMarkerAndPlaceSelection () {
  console.log('marker+place');
}

export function onSecondClick () {
  // console.log(Store.click);

  const firstObj = Store.objects[Store.click.activeFirst.type][Store.click.activeFirst.id];
  firstObj.setUnactive();
  const secObj = Store.objects[Store.click.activeSecond.type][Store.click.activeSecond.id];
  secObj.setUnactive();

  if (
    Store.click.activeFirst.type != Store.click.activeSecond.type
  ) {
    onMarkerAndPlaceSelection();
  }

  if (
    Store.click.activeFirst.type == Store.click.activeSecond.type &&
    Store.click.activeFirst.type == "Marker"
  ) {
    onTwoMarkerSelection();
  }

  Store.click = Utils.clearClickStore();
}

