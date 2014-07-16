angular.module('nvd3ChartDirectives')
    .directive('nvd3SparklineChart', ['$filter', 'nvd3Helpers', function($filter, nvd3Helpers) {
      return {
        restrict: 'EA',
        scope: {
          data: '=',
          filtername: '=',
          filtervalue: '=',
          width: '@',
          height: '@',
          id: '@',
          margin: '&',
          x: '&',
          y: '&',
          color: '&',
          xscale: '&',
          yscale: '&',
          showvalue: '@',
          alignvalue: '@',
          rightalignvalue: '@',
          nodata: '@',

          callback: '&',

          xtickformat: '&',
          ytickformat: '&',

          //angularjs specific
          objectequality: '@',

          //d3.js specific
          transitionduration: '@'

        },
        link: function(scope, element, attrs){
          scope.$watch('width + height', function() { nvd3Helpers.updateDimensions(scope,attrs,element,scope.chart); });
          scope.$watch('data', function(data){
            if (data && angular.isDefined(scope.filtername) && angular.isDefined(scope.filtervalue)) {
              data =  $filter(scope.filtername)(data, scope.filtervalue);
            }

            if(data){
              //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
              if(scope.chart){
                return scope.d3Call(data, scope.chart);
              }
              nv.addGraph({
                generate: function(){
                  var chart = nv.models.sparklinePlus()
                      .width(scope.width)
                      .height(scope.height)
                      .margin(scope.margin)
                      .x(attrs.x === undefined ? function(d){ return d.x; } : scope.x())
                      .y(attrs.y === undefined ? function(d){ return d.y; } : scope.y())
                      .xTickFormat(attrs.xtickformat === undefined ? d3.format(',r') : scope.xtickformat())
                      .yTickFormat(attrs.ytickformat === undefined ? d3.format(',.2f') : scope.ytickformat())
                      .color(attrs.color === undefined ? nv.utils.getColor(['#000']) : scope.color())
                      .showValue(attrs.showvalue === undefined ? true : (attrs.showvalue === 'true'))
                      .alignValue(attrs.alignvalue === undefined ? true : (attrs.alignvalue === 'true'))
                      .rightAlignValue(attrs.rightalignvalue === undefined ? false : (attrs.rightalignvalue === 'true'))
                      .noData(attrs.nodata === undefined ? 'No Data Available.' : scope.nodata);

                  if(attrs.xScale){
                    chart.xScale(scope.xScale());
                  }

                  if(attrs.yScale){
                    chart.yScale(scope.yScale());
                  }

                  scope.d3Call(data, chart);
                  nv.utils.windowResize(chart.update);
                  scope.chart = chart;
                  return chart;
                },
                callback: attrs.callback === undefined ? null : scope.callback()
              });
            }
          }, (attrs.objectequality === undefined ? false : (attrs.objectequality === 'true')));
        }
      };
    }])
;