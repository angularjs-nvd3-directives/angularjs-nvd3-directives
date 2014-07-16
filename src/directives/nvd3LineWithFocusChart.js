angular.module('nvd3ChartDirectives')
    .directive('nvd3LineWithFocusChart', ['$filter', 'nvd3Helpers', function($filter, nvd3Helpers) {
      return {
        restrict: 'EA',
        scope: nvd3Helpers.addCommonScopeFields({
          //x2axis
          x2axisorient: '&',
          x2axisticks: '&',
          x2axistickvalues: '&xaxistickvalues',
          x2axisticksubdivide: '&',
          x2axisticksize: '&',
          x2axistickpadding: '&',
          x2axistickformat: '&',
          x2axislabel: '@',
          x2axisscale: '&',
          x2axisdomain: '&',
          x2axisrange: '&',
          x2axisrangeband: '&',
          x2axisrangebands: '&',
          x2axisshowmaxmin: '@',
          x2axishighlightzero: '@',
          x2axisrotatelables: '@',
          x2axisrotateylabel: '@',
          x2axisstaggerlabels: '@',

          //yaxis
          y2axisorient: '&',
          y2axisticks: '&',
          y2axistickvalues: '&',
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
          y2axisstaggerlabels: '@'
        }),
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

                  //setup height 2
                  //height 2 is 100

                  //margin
                  //nvd3 default is {top: 30, right: 30, bottom: 30, left: 60}

                  //setup margin 2
                  //nvd3 default is {top: 0, right: 30, bottom: 20, left: 60}
                  if(attrs.margin2){
                    var margin2 = (scope.$eval(attrs.margin2));
                    if (typeof(margin2) !== 'object') {
                      // we were passed a vanilla int, convert to full margin object
                      margin2 = {left: margin2, top: margin2, bottom: margin2, right: margin2};
                    }
                    scope.margin2 = margin2;
                  } else {
                    scope.margin2 = {top: 0, right: 30, bottom: 20, left: 60};
                  }
//'xDomain', 'yDomain', 'xRange', 'yRange', ''clipEdge', 'clipVoronoi'
                  var chart = nv.models.lineWithFocusChart()
                      .width(scope.width)
                      .height(scope.height)
                      .height2((attrs.height2 === undefined ? 100 : (+attrs.height2)))
                      .margin(scope.margin)
                      .margin2(scope.margin2)
                      .x(attrs.x === undefined ? function(d){ return d[0]; } : scope.x())
                      .y(attrs.y === undefined ? function(d){ return d[1]; } : scope.y())
                      .forceX(attrs.forcex === undefined ? [] : scope.$eval(attrs.forcex))
                      .forceY(attrs.forcey === undefined ? [] : scope.$eval(attrs.forcey))
                      .showLegend(attrs.showlegend === undefined ? false : (attrs.showlegend === 'true'))
                      .tooltips(attrs.tooltips === undefined ? false : (attrs.tooltips  === 'true'))
                      .noData(attrs.nodata === undefined ? 'No Data Available.' : scope.nodata)
                      .color(attrs.color === undefined ? nv.utils.defaultColor()  : scope.color())
                      .isArea(attrs.isarea === undefined ? function(d) { return d.area; } : function(){ return (attrs.isarea === 'true'); })
                      .size(attrs.size === undefined ? function(d){ return (d.size === undefined ? 1 : d.size); }: scope.size())
                      .interactive(attrs.interactive === undefined ? false : (attrs.interactive === 'true'))
                      .clipEdge(attrs.clipedge === undefined ? false : (attrs.clipedge === 'true'))
                      .clipVoronoi(attrs.clipvoronoi === undefined ? false : (attrs.clipvoronoi === 'true'))
                      .interpolate(attrs.interpolate === undefined ? 'linear' : attrs.interpolate);

                  if(attrs.defined){
                    chart.defined(scope.defined());
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