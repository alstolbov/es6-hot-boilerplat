import * as Utils from './utils';
import Options from '../options';
import Store from '../store';

function onTwoMarkerSelection () {
  console.log('two markers');
  const firstMarker = Store.click.activeFirst;
  const secMarker = Store.click.activeSecond;
  let resMarker = false;
  Options.mixRules.forEach(
    (rule) => {
      if(
        (rule.need.indexOf(firstMarker.name) + 1) &&
        (rule.need.indexOf(secMarker.name) + 1)
      ) {
        resMarker = rule.res;
      }
    }
  );

  if (resMarker) {
    const nextMarker = Store.objects[firstMarker.type][resMarker];
    const nextMarkerProps = nextMarker.getParams();
    if (!nextMarkerProps.isVisible) {
      nextMarker.setVisible();
    }
  }
}

function onMarkerAndPlaceSelection () {
  console.log('marker+place');
  const marker = Store.click.activeFirst.type == "Marker" ?
    Store.click.activeFirst :
    Store.click.activeSecond
  ;
  const place = Store.click.activeFirst.type == "Place" ?
    Store.click.activeFirst :
    Store.click.activeSecond
  ;

  if (
    marker.name == place.needMarker &&
    !place.isUsed
  ) {
    Store.objects[place.type][place.name].colorize();
  }
}

export function onSecondClick () {
  setTimeout(
    () => {
      const firstObj = Store.objects[Store.click.activeFirst.type][Store.click.activeFirst.name];
      firstObj.setUnactive();
      const secObj = Store.objects[Store.click.activeSecond.type][Store.click.activeSecond.name];
      secObj.setUnactive();

      if (
        Store.click.activeFirst.type != Store.click.activeSecond.type
      ) {
        onMarkerAndPlaceSelection();
        Store.click = Utils.clearClickStore();
      }

      if (
        Store.click.activeFirst.type == Store.click.activeSecond.type &&
        Store.click.activeFirst.type == "Marker"
      ) {
        onTwoMarkerSelection();
        Store.click = Utils.clearClickStore();
      }
    },
    150
  );
}

