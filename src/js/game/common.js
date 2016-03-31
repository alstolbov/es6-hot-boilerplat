import * as Utils from './utils';
import Options from '../options';
import Store from '../store';

function onTwoMarkerSelection () {
  console.log('two markers');
  const firstMarker = Store.click.activeFirst;
  const secMarker = Store.click.activeSecond;
  let resMarker = false;
  Options.mixRules.forEach(
    function (rule) {
      if(
        (rule.need.indexOf(firstMarker.name) + 1) &&
        (rule.need.indexOf(secMarker.name) + 1)
      ) {
        resMarker = rule.res;
      }
    }
  );

  if (resMarker) {
    Store.objects.Marker.forEach(
      function (marker) {
        if (
          marker.name == resMarker &&
          !marker.isVisible
        ) {
          marker.setVisible();
        }
      }
    );
  }
}

function onMarkerAndPlaceSelection () {
  console.log('marker+place');
}

export function onSecondClick () {
  // console.log(Store.click);
  setTimeout(
    function (){
      const firstObj = Store.objects[Store.click.activeFirst.type][Store.click.activeFirst.id];
      firstObj.setUnactive();
      const secObj = Store.objects[Store.click.activeSecond.type][Store.click.activeSecond.id];
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

