angular.module('nvd3ChartDirectives')
    .directive('nvd3BulletChart', ['$filter', 'nvd3Helpers', function($filter, nvd3Helpers) {
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
          tooltips: '@',
          tooltipcontent: '&',
          orient: '@',  // left, right, top, bottom
          ranges: '&', //ranges (bad, satisfactory, good)
          markers: '&', // markers (previous, goal)
          measures: '&', // measures (actual, forecast)
          tickformat: '&',
          nodata: '@',

          callback: '&',

          //angularjs specific
          objectequality: '@',

          //d3.js specific
          transitionduration: '@'

        },
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
                  var chart = nv.models.bulletChart()
                      .width(scope.width)
                      .height(scope.height)
                      .margin(scope.margin)
                      .orient(attrs.orient === undefined ? 'left' : attrs.orient)
                    //                                    .ranges(attrs.ranges === undefined ? function(d){ return d.ranges; } : scope.ranges())
                    //                                    .markers(attrs.markers === undefined ? function(d){ return d.markers; } : scope.markers())
                    //                                    .measures(attrs.measures === undefined ? function(d){ return d.measures; } : scope.measures())
                      .tickFormat(attrs.tickformat === undefined ? null : scope.tickformat())
                      .tooltips(attrs.tooltips === undefined ? false : (attrs.tooltips  === 'true'))
                      .noData(attrs.nodata === undefined ? 'No Data Available.' : scope.nodata);

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
;