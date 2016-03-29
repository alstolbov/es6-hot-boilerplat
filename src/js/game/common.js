import * as Utils from './utils';
import Store from '../store';

export function onSecondClick () {
  console.log(Store.click);

  const firstObj = Store.objects[Store.click.activeFirst.type][Store.click.activeFirst.id];
  firstObj.setUnactive();
  const secObj = Store.objects[Store.click.activeSecond.type][Store.click.activeSecond.id];
  secObj.setUnactive();

  Store.click = Utils.clearClickStore();
}