angular.module('nvd3ChartDirectives')
    .directive('nvd3CumulativeLineChart', ['$filter', 'nvd3Helpers', function($filter, nvd3Helpers) {
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
              //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
              if(scope.chart){
                return scope.d3Call(data, scope.chart);
              }
              nv.addGraph({
                generate: function(){
                  var chart = nv.models.cumulativeLineChart()
                      .width(scope.width)
                      .height(scope.height)
                      .margin(scope.margin)
                      .x(attrs.x === undefined ? function(d){ return d[0]; } : scope.x())
                      .y(attrs.y === undefined ? function(d){ return d[1]; } : scope.y())
                      .forceX(attrs.forcex === undefined ? [] : scope.$eval(attrs.forcex)) // List of numbers to Force into the X scale (ie. 0, or a max / min, etc.)
                      .forceY(attrs.forcey === undefined ? [0] : scope.$eval(attrs.forcey)) // List of numbers to Force into the Y scale
                      .showLegend(attrs.showlegend === undefined ? false : (attrs.showlegend === 'true'))
                      .tooltips(attrs.tooltips === undefined ? false : (attrs.tooltips  === 'true'))
                      .showXAxis(attrs.showxaxis === undefined ? false : (attrs.showxaxis  === 'true'))
                      .showYAxis(attrs.showyaxis === undefined ? false : (attrs.showyaxis  === 'true'))
                      .rightAlignYAxis(attrs.rightalignyaxis === undefined ? false : (attrs.rightalignyaxis  === 'true'))
                      .noData(attrs.nodata === undefined ? 'No Data Available.' : scope.nodata)
                      .interactive(attrs.interactive === undefined ? false : (attrs.interactive === 'true'))
                      .clipEdge(attrs.clipedge === undefined ? false : (attrs.clipedge === 'true'))
                      .clipVoronoi(attrs.clipvoronoi === undefined ? false : (attrs.clipvoronoi === 'true'))
                      .useVoronoi(attrs.usevoronoi === undefined ? false : (attrs.usevoronoi === 'true'))
                      .average(attrs.average === undefined ? function(d) { return d.average; } : scope.average())
                      .color(attrs.color === undefined ? d3.scale.category10().range() : scope.color())
                      .isArea(attrs.isarea === undefined ? function(d) { return d.area; } : (attrs.isarea === 'true'));
                  //.rescaleY(attrs.rescaley === undefined ? false : (attrs.rescaley === 'true'));

                  if (attrs.useinteractiveguideline) {
                    chart.useInteractiveGuideline(attrs.useinteractiveguideline === undefined ? false : (attrs.useinteractiveguideline === 'true'));
                  }

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