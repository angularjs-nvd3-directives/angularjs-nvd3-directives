angular.module('legendDirectives')
    .directive('nvd3Legend', [function () {
  var margin, width, height, id;
  return {
    restrict: 'EA',
    scope: {
      data: '=',
      id: '@',
      margin: '&',
      width: '@',
      height: '@',
      key: '&',
      color: '&',
      align: '@',
      rightalign: '@',
      updatestate: '@',
      radiobuttonmode: '@',
      x: '&',
      y: '&'
    },
    link: function (scope, element, attrs) {
      scope.$watch('data', function (data) {
        if (data) {
          if (scope.chart) {
            return d3.select('#' + attrs.id + ' svg')
                .attr('height', height)
                .attr('width', width)
                .datum(data)
                .transition()
                .duration(250)
                .call(scope.chart);
          }
          margin = (scope.$eval(attrs.margin) || {top: 5, right: 0, bottom: 5, left: 0});
          width = (attrs.width === undefined ? ((element[0].parentElement.offsetWidth) - (margin.left + margin.right)) : (+attrs.width - (margin.left + margin.right)));
          height = (attrs.height === undefined ? ((element[0].parentElement.offsetHeight) - (margin.top + margin.bottom)) : (+attrs.height - (margin.top + margin.bottom)));
          if (width === undefined || width < 0) {
            width = 400;
          }
          if (height === undefined || height < 0) {
            height = 20;
          }
          if (!attrs.id) {
            //if an id is not supplied, create a random id.
            id = 'legend-' + Math.random();
          } else {
            id = attrs.id;
          }
          nv.addGraph({
            generate: function () {
              var chart = nv.models.legend()
                  .width(width)
                  .height(height)
                  .margin(margin)
                  .align(attrs.align === undefined ? true : (attrs.align === 'true'))
                  .rightAlign(attrs.rightalign === undefined ? true : (attrs.rightalign === 'true'))
                  .updateState(attrs.updatestate === undefined ? true : (attrs.updatestate === 'true'))
                  .radioButtonMode(attrs.radiobuttonmode === undefined ? false : (attrs.radiobuttonmode === 'true'))
                  .color(attrs.color === undefined ? nv.utils.defaultColor() : scope.color())
                  .key(attrs.key === undefined ? function (d) {
                    return d.key;
                  } : scope.key());

              if (!d3.select('#' + attrs.id + ' svg')[0][0]) {
                d3.select('#' + attrs.id).append('svg');
              }
              d3.select('#' + attrs.id + ' svg')
                  .attr('height', height)
                  .attr('width', width)
                  .datum(data)
                  .transition()
                  .duration(250)
                  .call(chart);
              nv.utils.windowResize(chart.update);
              scope.chart = chart;
              return chart;
            }
          });
        }
      });
    }
  };
}]);