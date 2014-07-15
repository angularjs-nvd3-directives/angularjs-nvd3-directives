function processEvents(chart, scope) {

  function maybeAddListener(object, args) {
    if (!object) {
      return;
    }

    angular.forEach(args, function (name) {
      if (object[name]) {
        object.dispatch.on(name + '.directive', function () {
          var args = Array.prototype.slice.call(arguments);
          args.unshift(name + '.directive');
          scope.$emit.call(scope, args);
        });
      }
    });
  }

  maybeAddListener(chart.dispatch && chart, [ 'tooltipShow', 'tooltipHide', 'beforeUpdate', 'stateChange', 'changeState' ]);
  maybeAddListener(chart.lines, [ 'elementMouseover.tooltip', 'elementMouseout.tooltip', 'elementClick' ]);
  maybeAddListener(chart.stacked && chart.stacked.dispatch && chart.stacked, [ 'areaClick.toggle', 'tooltipShow', 'tooltipHide' ]);

  if (chart.interactiveLayer) {
    maybeAddListener(chart.interactiveLayer.elementMouseout && chart.interactiveLayer, [ 'elementMouseout' ]);
    maybeAddListener(chart.interactiveLayer.elementMousemove && chart.interactiveLayer, [ 'elementMousemove' ]);
  }

  // this adds elementClick for scatter and bullet - not sure if it is ok
  angular.forEach(['discretebar', 'multibar', 'pie', 'scatter', 'bullet' ],
      function (element) {
        maybeAddListener(chart[element], [ 'elementMouseover.tooltip', 'elementMouseout.tooltip', 'elementClick' ]);
      });

  maybeAddListener(chart.legend, [ 'stateChange.legend', 'legendClick', 'legendDblclick', 'legendMouseover' ]);
  maybeAddListener(chart.controls && chart.controls.legendClick && chart.controls, [ 'legendClick' ]);
}
