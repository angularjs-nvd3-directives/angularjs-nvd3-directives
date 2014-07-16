angular.module('nvd3ChartDirectives')
    .directive('nvd3LinePlusBarChart', ['$filter', 'nvd3Helpers', function($filter, nvd3Helpers) {
      return {
        restrict: 'EA',
        scope: nvd3Helpers.addCommonScopeFields({
          //yaxis
          y1axisorient: '&',
          y1axisticks: '&',
          y1axistickvalues: '&y1axistickvalues',
          y1axisticksubdivide: '&',
          y1axisticksize: '&',
          y1axistickpadding: '&',
          y1axistickformat: '&',
          y1axislabel: '@',
          y1axisscale: '&',
          y1axisdomain: '&',
          y1axisrange: '&',
          y1axisrangeband: '&',
          y1axisrangebands: '&',
          y1axisshowmaxmin: '@',
          y1axishighlightzero: '@',
          y1axisrotatelabels: '@',
          y1axisrotateylabel: '@',
          y1axisstaggerlabels: '@',
          y1axisaxislabeldistance: '@',

          //yaxis
          y2axisorient: '&',
          y2axisticks: '&',
          y2axistickvalues: '&y2axistickvalues',
          y2axisticksubdivide: '&',
          y2axisticksize: '&',
          y2axistickpadding: '&',
          y2axistickformat: '&',
          y2axislabel: '@',
          y2axisscale: '&',
          y2axisdomain: '&',
          y2axisrange: '&',
          y2axisrangeband: '&',
          y2axisrangebands: '&',
          y2axisshowmaxmin: '@',
          y2axishighlightzero: '@',
          y2axisrotatelabels: '@',
          y2axisrotateylabel: '@',
          y2axisstaggerlabels: '@',
          y2axisaxislabeldistance: '@',
        }),
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
                  var chart = nv.models.linePlusBarChart()
                      .width(scope.width)
                      .height(scope.height)
                      .margin(scope.margin)
                      .x(attrs.x === undefined ? function(d){ return d[0]; } : scope.x())
                      .y(attrs.y === undefined ? function(d){ return d[1]; } : scope.y())
                      .showLegend(attrs.showlegend === undefined ? false : (attrs.showlegend === 'true'))
                      .tooltips(attrs.tooltips === undefined ? false : (attrs.tooltips  === 'true'))
                      .noData(attrs.nodata === undefined ? 'No Data Available.' : scope.nodata)
                      .interpolate(attrs.interpolate === undefined ? 'linear' : attrs.interpolate)
                      .color(attrs.color === undefined ? nv.utils.defaultColor()  : scope.color());

                  if(attrs.forcex){
                    chart.lines.forceX(scope.$eval(attrs.forcex));
                    chart.bars.forceX(scope.$eval(attrs.forcex));
                  }

                  if(attrs.forcey){
                    chart.lines.forceY(scope.$eval(attrs.forcey));
                    chart.bars.forceY(scope.$eval(attrs.forcey));
                  }

                  if(attrs.tooltipcontent){
                    chart.tooltipContent(scope.tooltipcontent());
                  }

                  if ( attrs.lineinteractive && attrs.lineinteractive === 'false') {
                    chart.lines.interactive(false);
                  }

                  if ( attrs.barinteractive && attrs.barinteractive === 'false') {
                    chart.bars.interactive(false);
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