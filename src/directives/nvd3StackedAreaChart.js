angular.module('nvd3ChartDirectives')
    .directive('nvd3StackedAreaChart', ['$filter', 'nvd3Helpers', function($filter, nvd3Helpers) {
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
                  var chart = nv.models.stackedAreaChart()
                      .width(scope.width)
                      .height(scope.height)
                      .margin(scope.margin)
                      .x(attrs.x === undefined ? function(d){ return d[0]; } : scope.x())
                      .y(attrs.y === undefined ? function(d){ return d[1]; } : scope.y())
                      .forceX(attrs.forcex === undefined ? [] : scope.$eval(attrs.forcex)) // List of numbers to Force into the X scale (ie. 0, or a max / min, etc.)
                      .forceY(attrs.forcey === undefined ? [0] : scope.$eval(attrs.forcey)) // List of numbers to Force into the Y scale
                      .size(attrs.size === undefined ? function(d) { return (d.size === undefined ? 1 : d.size); } : scope.size())
                      .forceSize(attrs.forcesize === undefined ? [] : scope.$eval(attrs.forcesize)) // List of numbers to Force into the Size scale
                      .showLegend(attrs.showlegend === undefined ? false : (attrs.showlegend === 'true'))
                      .showControls(attrs.showcontrols === undefined ? false : (attrs.showcontrols === 'true'))
                      .showXAxis(attrs.showxaxis === undefined ? false : (attrs.showxaxis  === 'true'))
                      .showYAxis(attrs.showyaxis === undefined ? false : (attrs.showyaxis  === 'true'))
                      .tooltips(attrs.tooltips === undefined ? false : (attrs.tooltips  === 'true'))
                      .noData(attrs.nodata === undefined ? 'No Data Available.' : scope.nodata)
                      .interactive(attrs.interactive === undefined ? false : (attrs.interactive === 'true'))
                      .clipEdge(attrs.clipedge === undefined ? false : (attrs.clipedge === 'true'))
                      .color(attrs.color === undefined ? nv.utils.defaultColor()  : scope.color());

                  if (attrs.useinteractiveguideline) {
                    chart.useInteractiveGuideline(attrs.useinteractiveguideline === undefined ? false : (attrs.useinteractiveguideline === 'true'));
                  }

                  if(attrs.usevoronoi){
                    chart.useVoronoi((attrs.usevoronoi === 'true'));
                  }

                  if(attrs.style){
                    chart.style(attrs.style);
                  }

                  if(attrs.order){
                    chart.order(attrs.order);
                  }

                  if(attrs.offset){
                    chart.offset(attrs.offset);
                  }

                  if(attrs.interpolate){
                    chart.interpolate(attrs.interpolate);
                  }

                  if(attrs.tooltipcontent){
                    chart.tooltipContent(scope.tooltipcontent());
                  }

                  if(attrs.xscale){
                    chart.xScale(scope.xscale());
                  }

                  if(attrs.yscale){
                    chart.yScale(scope.yscale());
                  }

                  if(attrs.xdomain){
                    if(Array.isArray(scope.$eval(attrs.xdomain))){
                      chart.xDomain(scope.$eval(attrs.xdomain));
                    } else if(typeof scope.xdomain() === 'function'){
                      chart.xDomain(scope.xdomain());
                    }
                  }

                  if(attrs.ydomain){
                    if(Array.isArray(scope.$eval(attrs.ydomain))){
                      chart.yDomain(scope.$eval(attrs.ydomain));
                    } else if(typeof scope.ydomain() === 'function'){
                      chart.yDomain(scope.ydomain());
                    }
                  }

                  if(attrs.sizedomain){
                    chart.sizeDomain(scope.sizedomain());
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