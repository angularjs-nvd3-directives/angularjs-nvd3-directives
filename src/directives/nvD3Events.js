function processEvents(chart, scope) {

  function maybeAddListener(object, args) {
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

  if (chart.dispatch) {
    maybeAddListener(chart, [ 'tooltipShow', 'tooltipHide', 'beforeUpdate', 'stateChange', 'changeState' ]);
  }

  if (chart.lines) {
    maybeAddListener(chart.lines, [ 'elementMouseover.tooltip', 'elementMouseout.tooltip', 'elementClick' ]);
  }

  if (chart.stacked && chart.stacked.dispatch) {
    maybeAddListener(chart.stacked, [ 'areaClick.toggle', 'tooltipShow', 'tooltipHide' ]);
  }

  if (chart.interactiveLayer) {
    if (chart.interactiveLayer.elementMouseout) {
      maybeAddListener(chart.interactiveLayer, [ 'elementMouseout' ]);
    }

    if (chart.interactiveLayer.elementMousemove) {
      maybeAddListener(chart.interactiveLayer, [ 'elementMousemove' ]);
    }
  }

  // this adds elementClick for scatter and bullet - not sure if it is ok
  angular.forEach(['discretebar', 'multibar', 'pie', 'scatter', 'bullet' ],
      function (element) {
        if (chart[element]) {
          maybeAddListener(chart[element], [ 'elementMouseover.tooltip', 'elementMouseout.tooltip', 'elementClick' ]);
        }
      });

  if (chart.legend) {
    maybeAddListener(chart.legend, [ 'stateChange.legend', 'legendClick', 'legendDblclick', 'legendMouseover' ]);
  }

  if (chart.controls && chart.controls.legendClick) {
    maybeAddListener(chart.controls, [ 'legendClick' ]);
  }
}
