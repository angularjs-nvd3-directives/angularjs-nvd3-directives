angular.module('nvd3ChartDirectives')
    .directive('nvd3MultiBarChart', ['$filter', 'nvd3Helpers', function($filter, nvd3Helpers) {
      return {
        restrict: 'EA',
        scope: nvd3Helpers.addCommonScopeFields({}),
        controller: ['$scope', '$element', '$attrs', function($scope, $element, $attrs){
          $scope.d3Call = function(data, chart){
            nvd3Helpers.checkElementID($scope, $attrs, $element, chart, data);
          };
        }],
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
                  nvd3Helpers.initializeMargin(scope, attrs);
                  var chart = nv.models.multiBarChart()
                      .width(scope.width)
                      .height(scope.height)
                      .margin(scope.margin)
                      .x(attrs.x === undefined ? function(d){ return d[0]; } : scope.x())
                      .y(attrs.y === undefined ? function(d){ return d[1]; } : scope.y())
                      .forceY(attrs.forcey === undefined ? [0] : scope.$eval(attrs.forcey)) // List of numbers to Force into the Y scale
                      .showLegend(attrs.showlegend === undefined ? false : (attrs.showlegend === 'true'))
                      .showControls(attrs.showcontrols === undefined ? false : (attrs.showcontrols === 'true'))
                      .showXAxis(attrs.showxaxis === undefined ? false : (attrs.showxaxis  === 'true'))
                      .showYAxis(attrs.showyaxis === undefined ? false : (attrs.showyaxis  === 'true'))
                      .tooltips(attrs.tooltips === undefined ? false : (attrs.tooltips  === 'true'))
                      .reduceXTicks(attrs.reducexticks === undefined ? false: (attrs.reducexticks === 'true'))
                      .staggerLabels(attrs.staggerlabels === undefined ? false : (attrs.staggerlabels === 'true'))
                      .noData(attrs.nodata === undefined ? 'No Data Available.' : scope.nodata)
                      .rotateLabels(attrs.rotatelabels === undefined ? 0 : attrs.rotatelabels)
                      .color(attrs.color === undefined ? nv.utils.defaultColor()  : scope.color())
                      .delay(attrs.delay === undefined ? 1200 : attrs.delay)
                      .stacked(attrs.stacked === undefined ? false : (attrs.stacked === 'true'));

                  if(attrs.tooltipcontent){
                    chart.tooltipContent(scope.tooltipcontent());
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
