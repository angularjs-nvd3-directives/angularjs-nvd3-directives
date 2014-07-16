angular.module('nvd3ChartDirectives')
    .directive('nvd3ScatterPlusLineChart', ['$filter', 'nvd3Helpers', function($filter, nvd3Helpers) {
      return {
        restrict: 'EA',
        scope: nvd3Helpers.addCommonScopeFields({}),
        link: function(scope, element, attrs){
          scope.$watch('width + height', function() { nvd3Helpers.updateDimensions(scope,attrs,element,scope.chart); });
          scope.$watch('data', function(data){
            if (data && angular.isDefined(scope.filtername) && angular.isDefined(scope.filtervalue)) {
              data =  $filter(scope.filtername)(data, scope.filtervalue);
            }

            if(data){

              if(scope.chart){
                return scope.d3Call(data, scope.chart);
              }
              nv.addGraph({
                generate: function(){
                  var chart = nv.models.scatterPlusLineChart()
                      .width(scope.width)
                      .height(scope.height)
                      .margin(scope.margin)
                      .x(attrs.x === undefined ? function(d){ return d.x; } : scope.x())
                      .y(attrs.y === undefined ? function(d){ return d.y; } : scope.y())
                      .size(attrs.size === undefined ? function(d){ return (d.size === undefined ? 1 : d.size); }: scope.size())
                      .interactive(attrs.interactive === undefined ? false : (attrs.interactive === 'true'))
                      .tooltips(attrs.tooltips === undefined ? false : (attrs.tooltips  === 'true'))
                      .tooltipContent(attrs.tooltipContent === undefined ? null : scope.tooltipContent())
                      .tooltipXContent(attrs.tooltipxcontent === undefined ? function(key, x) { return '<strong>' + x + '</strong>'; } : scope.tooltipXContent())
                      .tooltipYContent(attrs.tooltipycontent === undefined ? function(key, x, y) { return '<strong>' + y + '</strong>'; } : scope.tooltipYContent())
                      .showControls(attrs.showcontrols === undefined ? false : (attrs.showcontrols === 'true'))
                      .showLegend(attrs.showlegend === undefined ? false : (attrs.showlegend === 'true'))
                      .showDistX(attrs.showdistx === undefined ? false : (attrs.showdistx === 'true'))
                      .showDistY(attrs.showdisty === undefined ? false : (attrs.showdisty === 'true'))
                      .fisheye(attrs.fisheye === undefined ? 0 : (+attrs.fisheye))
                      .noData(attrs.nodata === undefined ? 'No Data Available.' : scope.nodata)
                      .color(attrs.color === undefined ? nv.utils.defaultColor()  : scope.color())
                      .transitionDuration(attrs.transitionduration === undefined ? 250 : (+attrs.transitionduration));

                  if(attrs.shape){
                    chart.scatter.onlyCircles(false);
                    chart.scatter.shape(attrs.shape === undefined ? function(d) { return d.shape || 'circle'; } : scope.shape());
                  }

                  scope.d3Call(data, chart);
                  nv.utils.windowResize(chart.update);
                  scope.chart = chart;
                  return chart;
                },
                callback: attrs.callback === undefined ? null : scope.callback()
              });
            }
          });
        }
      };
    }])
;