/*! angularjs-nvd3-directives - v0.0.7 - 2014-07-16
* http://cmaurer.github.io/angularjs-nvd3-directives
* Copyright (c) 2014 Christian Maurer; Licensed Apache License, v2.0 */
angular.module('nvd3ChartDirectives', []);
angular.module('legendDirectives', []);
angular.module('nvd3ChartDirectives').constant('nvd3Helpers', {
  defaults: function () {
    return {
      margin: {
        left: 50,
        top: 50,
        bottom: 50,
        right: 50
      },
      x: function (d) {
        return d[0];
      },
      y: function (d) {
        return d[1];
      },
      forceY: [0],
      showValues: false,
      tooltips: false,
      showXAxis: false,
      showYAxis: false,
      showLegend: false,
      showControls: false,
      noData: 'No Data Available.',
      staggerLabels: false,
      color: nv.utils.defaultColor(),
      tooltips: false,
      reduceXTicks: false,
      rotateLabels: 0,
      delay: 1200,
      stacked: false
    };
  },
  initializeMargin: function (scope, attrs) {
    var margin = scope.$eval(attrs.margin) || {
        left: 50,
        top: 50,
        bottom: 50,
        right: 50
      };
    if (typeof margin !== 'object') {
      // we were passed a vanilla int, convert to full margin object
      margin = {
        left: margin,
        top: margin,
        bottom: margin,
        right: margin
      };
    }
    scope.opts.margin = margin;
  },
  getD3Selector: function (attrs, element) {
    if (!attrs.id) {
      //if an id is not supplied, create a random id.
      if (!attrs['data-chartid']) {
        angular.element(element).attr('data-chartid', 'chartid' + Math.floor(Math.random() * 1000000001));
      }
      return '[data-chartid=' + attrs['data-chartid'] + ']';
    } else {
      return '#' + attrs.id;
    }
  },
  rewriteOptions: function (chart, options) {
    var special = {
        'yAxis': true,
        'y1Axis': true,
        'y2Axis': true,
        'xAxis': true,
        'x1Axis': true,
        'x2Axis': true
      };
    var invoke = { 'scale': true };
    function internal(chart, options) {
      angular.forEach(options, function (value, key) {
        if (angular.isFunction(chart[key]) && !special[key]) {
          chart[key](value);
        } else if (angular.isObject(chart[key])) {
          internal(invoke[key] ? chart[key]() : chart[key], value);
        }
      });
    }
    internal(chart, options);
  },
  checkElementID: function (scope, attrs, element, chart, data) {
    processEvents(chart, scope);
    var svgElem = element.find('svg')[0];
    if (angular.isArray(data) && data.length === 0) {
      d3.select(svgElem).remove();
    }
    if (d3.select(svgElem).empty()) {
      d3.select(element).append('svg');
    }
    d3.select(svgElem).attr('viewBox', '0 0 ' + scope.opts.width + ' ' + scope.opts.height).datum(data).transition().duration(attrs.transitionduration === undefined ? 250 : +attrs.transitionduration).call(chart);
  },
  updateDimensions: function (scope, attrs, element, chart) {
    if (chart) {
      chart.width(scope.opts.width).height(scope.opts.height);
      var d3Select = getD3Selector(attrs, element);
      d3.select(d3Select + ' svg').attr('viewBox', '0 0 ' + scope.opts.width + ' ' + scope.opts.height);
      nv.utils.windowResize(chart);
      scope.chart.update();
    }
  }
});
function processEvents(chart, scope) {
  function maybeAddListener(object, args) {
    if (!object) {
      return;
    }
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
  maybeAddListener(chart.dispatch && chart, [
    'tooltipShow',
    'tooltipHide',
    'beforeUpdate',
    'stateChange',
    'changeState'
  ]);
  maybeAddListener(chart.lines, [
    'elementMouseover.tooltip',
    'elementMouseout.tooltip',
    'elementClick'
  ]);
  maybeAddListener(chart.stacked && chart.stacked.dispatch && chart.stacked, [
    'areaClick.toggle',
    'tooltipShow',
    'tooltipHide'
  ]);
  if (chart.interactiveLayer) {
    maybeAddListener(chart.interactiveLayer.elementMouseout && chart.interactiveLayer, ['elementMouseout']);
    maybeAddListener(chart.interactiveLayer.elementMousemove && chart.interactiveLayer, ['elementMousemove']);
  }
  // this adds elementClick for scatter and bullet - not sure if it is ok
  angular.forEach([
    'discretebar',
    'multibar',
    'pie',
    'scatter',
    'bullet'
  ], function (element) {
    maybeAddListener(chart[element], [
      'elementMouseover.tooltip',
      'elementMouseout.tooltip',
      'elementClick'
    ]);
  });
  maybeAddListener(chart.legend, [
    'stateChange.legend',
    'legendClick',
    'legendDblclick',
    'legendMouseover'
  ]);
  maybeAddListener(chart.controls && chart.controls.legendClick && chart.controls, ['legendClick']);
}
angular.module('nvd3ChartDirectives').directive('nvd3BulletChart', [
  '$filter',
  'nvd3Helpers',
  function ($filter, nvd3Helpers) {
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
        orient: '@',
        ranges: '&',
        markers: '&',
        measures: '&',
        tickformat: '&',
        nodata: '@',
        callback: '&',
        objectequality: '@',
        transitionduration: '@'
      },
      link: function (scope, element, attrs) {
        scope.$watch('width + height', function () {
          nvd3Helpers.updateDimensions(scope, attrs, element, scope.chart);
        });
        scope.$watch('data', function (data) {
          if (data && angular.isDefined(scope.filtername) && angular.isDefined(scope.filtervalue)) {
            data = $filter(scope.filtername)(data, scope.filtervalue);
          }
          if (data) {
            //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
            if (scope.chart) {
              return scope.d3Call(data, scope.chart);
            }
            nv.addGraph({
              generate: function () {
                nvd3Helpers.initializeMargin(scope, attrs);
                var chart = nv.models.bulletChart().width(scope.width).height(scope.height).margin(scope.margin).orient(attrs.orient === undefined ? 'left' : attrs.orient).tickFormat(attrs.tickformat === undefined ? null : scope.tickformat()).tooltips(attrs.tooltips === undefined ? false : attrs.tooltips === 'true').noData(attrs.nodata === undefined ? 'No Data Available.' : scope.nodata);
                if (attrs.tooltipcontent) {
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
        }, attrs.objectequality === undefined ? false : attrs.objectequality === 'true');
      }
    };
  }
]);
;
angular.module('nvd3ChartDirectives').directive('nvd3Chart', [
  '$filter',
  'nvd3Helpers',
  function ($filter, nvd3Helpers) {
    return {
      restrict: 'EA',
      scope: {
        'opts': '=nvd3Chart',
        'data': '=ngModel'
      },
      controller: [
        '$scope',
        '$element',
        '$attrs',
        function ($scope, $element, $attrs) {
          $scope.d3Call = function (data, chart) {
            nvd3Helpers.checkElementID($scope, $attrs, $element, chart, data);
            nvd3Helpers.rewriteOptions(chart, $scope.opts);
          };
        }
      ],
      link: function (scope, element, attrs) {
        scope.$watch('opts.width + opts.height', function () {
          nvd3Helpers.updateDimensions(scope, attrs, element, scope.chart);
        });
        scope.$watch('data', function (data) {
          if (data && angular.isDefined(scope.opts.filtername) && angular.isDefined(scope.opts.filtervalue)) {
            data = $filter(scope.opts.filtername)(data, scope.opts.filtervalue);
          }
          if (data) {
            //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
            if (scope.chart) {
              return scope.d3Call(data, scope.chart);
            }
            nv.addGraph({
              generate: function () {
                nvd3Helpers.initializeMargin(scope, attrs);
                var chart = nv.models[scope.opts.chartType]();
                nvd3Helpers.rewriteOptions(chart, $scope.opts);
                scope.d3Call(data, chart);
                nv.utils.windowResize(chart.update);
                scope.chart = chart;
                return chart;
              },
              callback: scope.opts.callback === undefined ? null : scope.opts.callback()
            });
          }
        }, !!scope.opts.objectequality);
      }
    };
  }
]);
;
angular.module('nvd3ChartDirectives').directive('nvd3CumulativeLineChart', [
  '$filter',
  'nvd3Helpers',
  function ($filter, nvd3Helpers) {
    return {
      restrict: 'EA',
      scope: nvd3Helpers.addCommonScopeFields({}),
      link: function (scope, element, attrs) {
        scope.$watch('width + height', function () {
          nvd3Helpers.updateDimensions(scope, attrs, element, scope.chart);
        });
        scope.$watch('data', function (data) {
          if (data && angular.isDefined(scope.filtername) && angular.isDefined(scope.filtervalue)) {
            data = $filter(scope.filtername)(data, scope.filtervalue);
          }
          if (data) {
            //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
            if (scope.chart) {
              return scope.d3Call(data, scope.chart);
            }
            nv.addGraph({
              generate: function () {
                nvd3Helpers.initializeMargin(scope, attrs);
                var chart = nv.models.cumulativeLineChart().width(scope.width).height(scope.height).margin(scope.margin).x(attrs.x === undefined ? function (d) {
                    return d[0];
                  } : scope.x()).y(attrs.y === undefined ? function (d) {
                    return d[1];
                  } : scope.y()).forceX(attrs.forcex === undefined ? [] : scope.$eval(attrs.forcex)).forceY(attrs.forcey === undefined ? [0] : scope.$eval(attrs.forcey)).showLegend(attrs.showlegend === undefined ? false : attrs.showlegend === 'true').tooltips(attrs.tooltips === undefined ? false : attrs.tooltips === 'true').showXAxis(attrs.showxaxis === undefined ? false : attrs.showxaxis === 'true').showYAxis(attrs.showyaxis === undefined ? false : attrs.showyaxis === 'true').rightAlignYAxis(attrs.rightalignyaxis === undefined ? false : attrs.rightalignyaxis === 'true').noData(attrs.nodata === undefined ? 'No Data Available.' : scope.nodata).interactive(attrs.interactive === undefined ? false : attrs.interactive === 'true').clipEdge(attrs.clipedge === undefined ? false : attrs.clipedge === 'true').clipVoronoi(attrs.clipvoronoi === undefined ? false : attrs.clipvoronoi === 'true').useVoronoi(attrs.usevoronoi === undefined ? false : attrs.usevoronoi === 'true').average(attrs.average === undefined ? function (d) {
                    return d.average;
                  } : scope.average()).color(attrs.color === undefined ? d3.scale.category10().range() : scope.color()).isArea(attrs.isarea === undefined ? function (d) {
                    return d.area;
                  } : attrs.isarea === 'true');
                //.rescaleY(attrs.rescaley === undefined ? false : (attrs.rescaley === 'true'));
                if (attrs.useinteractiveguideline) {
                  chart.useInteractiveGuideline(attrs.useinteractiveguideline === undefined ? false : attrs.useinteractiveguideline === 'true');
                }
                if (attrs.tooltipcontent) {
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
        }, attrs.objectequality === undefined ? false : attrs.objectequality === 'true');
      }
    };
  }
]);
;
angular.module('nvd3ChartDirectives').directive('nvd3DiscreteBarChart', [
  '$filter',
  'nvd3Helpers',
  function ($filter, nvd3Helpers) {
    return {
      restrict: 'EA',
      scope: nvd3Helpers.addCommonScopeFields({}),
      link: function (scope, element, attrs) {
        scope.$watch('width + height', function () {
          nvd3Helpers.updateDimensions(scope, attrs, element, scope.chart);
        });
        scope.$watch('data', function (data) {
          if (data && angular.isDefined(scope.filtername) && angular.isDefined(scope.filtervalue)) {
            data = $filter(scope.filtername)(data, scope.filtervalue);
          }
          if (data) {
            //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
            if (scope.chart) {
              return scope.d3Call(data, scope.chart);
            }
            nv.addGraph({
              generate: function () {
                nvd3Helpers.initializeMargin(scope, attrs);
                var chart = nv.models.discreteBarChart().width(scope.width).height(scope.height).margin(scope.margin).x(attrs.x === undefined ? function (d) {
                    return d[0];
                  } : scope.x()).y(attrs.y === undefined ? function (d) {
                    return d[1];
                  } : scope.y()).forceY(attrs.forcey === undefined ? [0] : scope.$eval(attrs.forcey)).showValues(attrs.showvalues === undefined ? false : attrs.showvalues === 'true').tooltips(attrs.tooltips === undefined ? false : attrs.tooltips === 'true').showXAxis(attrs.showxaxis === undefined ? false : attrs.showxaxis === 'true').showYAxis(attrs.showyaxis === undefined ? false : attrs.showyaxis === 'true').noData(attrs.nodata === undefined ? 'No Data Available.' : scope.nodata).staggerLabels(attrs.staggerlabels === undefined ? false : attrs.staggerlabels === 'true').color(attrs.color === undefined ? nv.utils.defaultColor() : scope.color());
                if (attrs.tooltipcontent) {
                  chart.tooltipContent(scope.tooltipcontent());
                }
                if (attrs.valueformat) {
                  chart.valueFormat(scope.valueformat());
                }
                scope.d3Call(data, chart);
                nv.utils.windowResize(chart.update);
                scope.chart = chart;
                return chart;
              },
              callback: attrs.callback === undefined ? null : scope.callback()
            });
          }
        }, attrs.objectequality === undefined ? false : attrs.objectequality === 'true');
      }
    };
  }
]);
;
angular.module('nvd3ChartDirectives').directive('nvd3HistoricalBarChart', [
  '$filter',
  'nvd3Helpers',
  function ($filter, nvd3Helpers) {
    return {
      restrict: 'EA',
      scope: nvd3Helpers.addCommonScopeFields({}),
      link: function (scope, element, attrs) {
        scope.$watch('width + height', function () {
          nvd3Helpers.updateDimensions(scope, attrs, element, scope.chart);
        });
        scope.$watch('data', function (data) {
          if (data && angular.isDefined(scope.filtername) && angular.isDefined(scope.filtervalue)) {
            data = $filter(scope.filtername)(data, scope.filtervalue);
          }
          if (data) {
            //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
            if (scope.chart) {
              return scope.d3Call(data, scope.chart);
            }
            nv.addGraph({
              generate: function () {
                nvd3Helpers.initializeMargin(scope, attrs);
                var chart = nv.models.historicalBarChart().width(scope.width).height(scope.height).margin(scope.margin).x(attrs.x === undefined ? function (d) {
                    return d[0];
                  } : scope.x()).y(attrs.y === undefined ? function (d) {
                    return d[1];
                  } : scope.y()).forceY(attrs.forcey === undefined ? [0] : scope.$eval(attrs.forcey)).tooltips(attrs.tooltips === undefined ? false : attrs.tooltips === 'true').noData(attrs.nodata === undefined ? 'No Data Available.' : scope.nodata).interactive(attrs.interactive === undefined ? false : attrs.interactive === 'true').color(attrs.color === undefined ? nv.utils.defaultColor() : scope.color());
                if (attrs.useinteractiveguideline) {
                  chart.useInteractiveGuideline(attrs.useinteractiveguideline === undefined ? false : attrs.useinteractiveguideline === 'true');
                }
                if (attrs.tooltipcontent) {
                  chart.tooltipContent(scope.tooltipcontent());
                }
                if (attrs.valueformat) {
                  chart.valueFormat(scope.valueformat());
                }
                scope.d3Call(data, chart);
                nv.utils.windowResize(chart.update);
                scope.chart = chart;
                return chart;
              },
              callback: attrs.callback === undefined ? null : scope.callback()
            });
          }
        }, attrs.objectequality === undefined ? false : attrs.objectequality === 'true');
      }
    };
  }
]);
angular.module('legendDirectives').directive('nvd3Legend', [function () {
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
              return d3.select('#' + attrs.id + ' svg').attr('height', height).attr('width', width).datum(data).transition().duration(250).call(scope.chart);
            }
            margin = scope.$eval(attrs.margin) || {
              top: 5,
              right: 0,
              bottom: 5,
              left: 0
            };
            width = attrs.width === undefined ? element[0].parentElement.offsetWidth - (margin.left + margin.right) : +attrs.width - (margin.left + margin.right);
            height = attrs.height === undefined ? element[0].parentElement.offsetHeight - (margin.top + margin.bottom) : +attrs.height - (margin.top + margin.bottom);
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
                var chart = nv.models.legend().width(width).height(height).margin(margin).align(attrs.align === undefined ? true : attrs.align === 'true').rightAlign(attrs.rightalign === undefined ? true : attrs.rightalign === 'true').updateState(attrs.updatestate === undefined ? true : attrs.updatestate === 'true').radioButtonMode(attrs.radiobuttonmode === undefined ? false : attrs.radiobuttonmode === 'true').color(attrs.color === undefined ? nv.utils.defaultColor() : scope.color()).key(attrs.key === undefined ? function (d) {
                    return d.key;
                  } : scope.key());
                if (!d3.select('#' + attrs.id + ' svg')[0][0]) {
                  d3.select('#' + attrs.id).append('svg');
                }
                d3.select('#' + attrs.id + ' svg').attr('height', height).attr('width', width).datum(data).transition().duration(250).call(chart);
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
angular.module('nvd3ChartDirectives').directive('nvd3LineChart', [
  '$filter',
  'nvd3Helpers',
  function ($filter, nvd3Helpers) {
    return {
      restrict: 'EA',
      scope: nvd3Helpers.addCommonScopeFields({}),
      link: function (scope, element, attrs) {
        scope.$watch('width + height', function () {
          nvd3Helpers.updateDimensions(scope, attrs, element, scope.chart);
        });
        scope.$watch('data', function (data) {
          if (data && angular.isDefined(scope.filtername) && angular.isDefined(scope.filtervalue)) {
            data = $filter(scope.filtername)(data, scope.filtervalue);
          }
          if (data) {
            //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
            if (scope.chart) {
              return scope.d3Call(data, scope.chart);
            }
            nv.addGraph({
              generate: function () {
                nvd3Helpers.initializeMargin(scope, attrs);
                var chart = nv.models.lineChart().width(scope.width).height(scope.height).margin(scope.margin).x(attrs.x === undefined ? function (d) {
                    return d[0];
                  } : scope.x()).y(attrs.y === undefined ? function (d) {
                    return d[1];
                  } : scope.y()).forceX(attrs.forcex === undefined ? [] : scope.$eval(attrs.forcex)).forceY(attrs.forcey === undefined ? [0] : scope.$eval(attrs.forcey)).showLegend(attrs.showlegend === undefined ? false : attrs.showlegend === 'true').tooltips(attrs.tooltips === undefined ? false : attrs.tooltips === 'true').showXAxis(attrs.showxaxis === undefined ? false : attrs.showxaxis === 'true').showYAxis(attrs.showyaxis === undefined ? false : attrs.showyaxis === 'true').rightAlignYAxis(attrs.rightalignyaxis === undefined ? false : attrs.rightalignyaxis === 'true').noData(attrs.nodata === undefined ? 'No Data Available.' : scope.nodata).interactive(attrs.interactive === undefined ? false : attrs.interactive === 'true').clipEdge(attrs.clipedge === undefined ? false : attrs.clipedge === 'true').clipVoronoi(attrs.clipvoronoi === undefined ? false : attrs.clipvoronoi === 'true').interpolate(attrs.interpolate === undefined ? 'linear' : attrs.interpolate).color(attrs.color === undefined ? nv.utils.defaultColor() : scope.color()).isArea(attrs.isarea === undefined ? function (d) {
                    return d.area;
                  } : function () {
                    return attrs.isarea === 'true';
                  });
                if (attrs.useinteractiveguideline) {
                  chart.useInteractiveGuideline(attrs.useinteractiveguideline === undefined ? false : attrs.useinteractiveguideline === 'true');
                }
                if (attrs.tooltipcontent) {
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
        }, attrs.objectequality === undefined ? false : attrs.objectequality === 'true');
      }
    };
  }
]);
;
angular.module('nvd3ChartDirectives').directive('nvd3LinePlusBarChart', [
  '$filter',
  'nvd3Helpers',
  function ($filter, nvd3Helpers) {
    return {
      restrict: 'EA',
      scope: nvd3Helpers.addCommonScopeFields({
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
        y2axisaxislabeldistance: '@'
      }),
      link: function (scope, element, attrs) {
        scope.$watch('width + height', function () {
          nvd3Helpers.updateDimensions(scope, attrs, element, scope.chart);
        });
        scope.$watch('data', function (data) {
          if (data && angular.isDefined(scope.filtername) && angular.isDefined(scope.filtervalue)) {
            data = $filter(scope.filtername)(data, scope.filtervalue);
          }
          if (data) {
            //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
            if (scope.chart) {
              return scope.d3Call(data, scope.chart);
            }
            nv.addGraph({
              generate: function () {
                nvd3Helpers.initializeMargin(scope, attrs);
                var chart = nv.models.linePlusBarChart().width(scope.width).height(scope.height).margin(scope.margin).x(attrs.x === undefined ? function (d) {
                    return d[0];
                  } : scope.x()).y(attrs.y === undefined ? function (d) {
                    return d[1];
                  } : scope.y()).showLegend(attrs.showlegend === undefined ? false : attrs.showlegend === 'true').tooltips(attrs.tooltips === undefined ? false : attrs.tooltips === 'true').noData(attrs.nodata === undefined ? 'No Data Available.' : scope.nodata).interpolate(attrs.interpolate === undefined ? 'linear' : attrs.interpolate).color(attrs.color === undefined ? nv.utils.defaultColor() : scope.color());
                if (attrs.forcex) {
                  chart.lines.forceX(scope.$eval(attrs.forcex));
                  chart.bars.forceX(scope.$eval(attrs.forcex));
                }
                if (attrs.forcey) {
                  chart.lines.forceY(scope.$eval(attrs.forcey));
                  chart.bars.forceY(scope.$eval(attrs.forcey));
                }
                if (attrs.tooltipcontent) {
                  chart.tooltipContent(scope.tooltipcontent());
                }
                if (attrs.lineinteractive && attrs.lineinteractive === 'false') {
                  chart.lines.interactive(false);
                }
                if (attrs.barinteractive && attrs.barinteractive === 'false') {
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
        }, attrs.objectequality === undefined ? false : attrs.objectequality === 'true');
      }
    };
  }
]);
;
angular.module('nvd3ChartDirectives').directive('nvd3LineWithFocusChart', [
  '$filter',
  'nvd3Helpers',
  function ($filter, nvd3Helpers) {
    return {
      restrict: 'EA',
      scope: nvd3Helpers.addCommonScopeFields({
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
      link: function (scope, element, attrs) {
        scope.$watch('width + height', function () {
          nvd3Helpers.updateDimensions(scope, attrs, element, scope.chart);
        });
        scope.$watch('data', function (data) {
          if (data && angular.isDefined(scope.filtername) && angular.isDefined(scope.filtervalue)) {
            data = $filter(scope.filtername)(data, scope.filtervalue);
          }
          if (data) {
            //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
            if (scope.chart) {
              return scope.d3Call(data, scope.chart);
            }
            nv.addGraph({
              generate: function () {
                nvd3Helpers.initializeMargin(scope, attrs);
                //setup height 2
                //height 2 is 100
                //margin
                //nvd3 default is {top: 30, right: 30, bottom: 30, left: 60}
                //setup margin 2
                //nvd3 default is {top: 0, right: 30, bottom: 20, left: 60}
                if (attrs.margin2) {
                  var margin2 = scope.$eval(attrs.margin2);
                  if (typeof margin2 !== 'object') {
                    // we were passed a vanilla int, convert to full margin object
                    margin2 = {
                      left: margin2,
                      top: margin2,
                      bottom: margin2,
                      right: margin2
                    };
                  }
                  scope.margin2 = margin2;
                } else {
                  scope.margin2 = {
                    top: 0,
                    right: 30,
                    bottom: 20,
                    left: 60
                  };
                }
                //'xDomain', 'yDomain', 'xRange', 'yRange', ''clipEdge', 'clipVoronoi'
                var chart = nv.models.lineWithFocusChart().width(scope.width).height(scope.height).height2(attrs.height2 === undefined ? 100 : +attrs.height2).margin(scope.margin).margin2(scope.margin2).x(attrs.x === undefined ? function (d) {
                    return d[0];
                  } : scope.x()).y(attrs.y === undefined ? function (d) {
                    return d[1];
                  } : scope.y()).forceX(attrs.forcex === undefined ? [] : scope.$eval(attrs.forcex)).forceY(attrs.forcey === undefined ? [] : scope.$eval(attrs.forcey)).showLegend(attrs.showlegend === undefined ? false : attrs.showlegend === 'true').tooltips(attrs.tooltips === undefined ? false : attrs.tooltips === 'true').noData(attrs.nodata === undefined ? 'No Data Available.' : scope.nodata).color(attrs.color === undefined ? nv.utils.defaultColor() : scope.color()).isArea(attrs.isarea === undefined ? function (d) {
                    return d.area;
                  } : function () {
                    return attrs.isarea === 'true';
                  }).size(attrs.size === undefined ? function (d) {
                    return d.size === undefined ? 1 : d.size;
                  } : scope.size()).interactive(attrs.interactive === undefined ? false : attrs.interactive === 'true').clipEdge(attrs.clipedge === undefined ? false : attrs.clipedge === 'true').clipVoronoi(attrs.clipvoronoi === undefined ? false : attrs.clipvoronoi === 'true').interpolate(attrs.interpolate === undefined ? 'linear' : attrs.interpolate);
                if (attrs.defined) {
                  chart.defined(scope.defined());
                }
                if (attrs.tooltipcontent) {
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
        }, attrs.objectequality === undefined ? false : attrs.objectequality === 'true');
      }
    };
  }
]);
;
angular.module('nvd3ChartDirectives').directive('nvd3MultiBarHorizontalChart', [
  '$filter',
  'nvd3Helpers',
  function ($filter, nvd3Helpers) {
    return {
      restrict: 'EA',
      scope: nvd3Helpers.addCommonScopeFields({}),
      link: function (scope, element, attrs) {
        scope.$watch('width + height', function () {
          nvd3Helpers.updateDimensions(scope, attrs, element, scope.chart);
        });
        scope.$watch('data', function (data) {
          if (data && angular.isDefined(scope.filtername) && angular.isDefined(scope.filtervalue)) {
            data = $filter(scope.filtername)(data, scope.filtervalue);
          }
          if (data) {
            //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
            if (scope.chart) {
              return scope.d3Call(data, scope.chart);
            }
            nv.addGraph({
              generate: function () {
                nvd3Helpers.initializeMargin(scope, attrs);
                var chart = nv.models.multiBarHorizontalChart().width(scope.width).height(scope.height).margin(scope.margin).x(attrs.x === undefined ? function (d) {
                    return d[0];
                  } : scope.x()).y(attrs.y === undefined ? function (d) {
                    return d[1];
                  } : scope.y()).showXAxis(attrs.showxaxis === undefined ? false : attrs.showxaxis === 'true').showYAxis(attrs.showyaxis === undefined ? false : attrs.showyaxis === 'true').forceY(attrs.forcey === undefined ? [0] : scope.$eval(attrs.forcey)).tooltips(attrs.tooltips === undefined ? false : attrs.tooltips === 'true').noData(attrs.nodata === undefined ? 'No Data Available.' : scope.nodata).color(attrs.color === undefined ? nv.utils.defaultColor() : scope.color()).showLegend(attrs.showlegend === undefined ? false : attrs.showlegend === 'true').showControls(attrs.showcontrols === undefined ? false : attrs.showcontrols === 'true').showValues(attrs.showvalues === undefined ? false : attrs.showvalues === 'true').stacked(attrs.stacked === undefined ? false : attrs.stacked === 'true');
                if (attrs.tooltipcontent) {
                  chart.tooltipContent(scope.tooltipcontent());
                }
                if (attrs.valueformat) {
                  chart.valueFormat(scope.valueformat());
                }
                scope.d3Call(data, chart);
                nv.utils.windowResize(chart.update);
                scope.chart = chart;
                return chart;
              },
              callback: attrs.callback === undefined ? null : scope.callback()
            });
          }
        }, attrs.objectequality === undefined ? false : attrs.objectequality === 'true');
      }
    };
  }
]);
;
angular.module('nvd3ChartDirectives').directive('nvd3PieChart', [
  '$filter',
  'nvd3Helpers',
  function ($filter, nvd3Helpers) {
    return {
      restrict: 'EA',
      scope: nvd3Helpers.addCommonScopeFields({
        objectequality: '@',
        transitionduration: '@'
      }),
      link: function (scope, element, attrs) {
        scope.$watch('width + height', function () {
          nvd3Helpers.updateDimensions(scope, attrs, element, scope.chart);
        });
        scope.$watch('data', function (data) {
          if (data && angular.isDefined(scope.filtername) && angular.isDefined(scope.filtervalue)) {
            data = $filter(scope.filtername)(data, scope.filtervalue);
          }
          if (data) {
            //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
            if (scope.chart) {
              return scope.d3Call(data, scope.chart);
            }
            nv.addGraph({
              generate: function () {
                nvd3Helpers.initializeMargin(scope, attrs);
                var chart = nv.models.pieChart().x(attrs.x === undefined ? function (d) {
                    return d[0];
                  } : scope.x()).y(attrs.y === undefined ? function (d) {
                    return d[1];
                  } : scope.y()).width(scope.width).height(scope.height).margin(scope.margin).tooltips(attrs.tooltips === undefined ? false : attrs.tooltips === 'true').noData(attrs.nodata === undefined ? 'No Data Available.' : scope.nodata).showLabels(attrs.showlabels === undefined ? false : attrs.showlabels === 'true').labelThreshold(attrs.labelthreshold === undefined ? 0.02 : attrs.labelthreshold).labelType(attrs.labeltype === undefined ? 'key' : attrs.labeltype).pieLabelsOutside(attrs.pielabelsoutside === undefined ? true : attrs.pielabelsoutside === 'true').valueFormat(attrs.valueformat === undefined ? d3.format(',.2f') : attrs.valueformat).showLegend(attrs.showlegend === undefined ? false : attrs.showlegend === 'true').description(attrs.description === undefined ? function (d) {
                    return d.description;
                  } : scope.description()).color(attrs.color === undefined ? nv.utils.defaultColor() : scope.color()).donutLabelsOutside(attrs.donutlabelsoutside === undefined ? false : attrs.donutlabelsoutside === 'true').donut(attrs.donut === undefined ? false : attrs.donut === 'true').donutRatio(attrs.donutratio === undefined ? 0.5 : attrs.donutratio);
                if (attrs.tooltipcontent) {
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
        }, attrs.objectequality === undefined ? false : attrs.objectequality === 'true');
      }
    };
  }
]);
;
angular.module('nvd3ChartDirectives').directive('nvd3ScatterChart', [
  '$filter',
  'nvd3Helpers',
  function ($filter, nvd3Helpers) {
    return {
      restrict: 'EA',
      scope: nvd3Helpers.addCommonScopeFields({}),
      link: function (scope, element, attrs) {
        scope.$watch('width + height', function () {
          nvd3Helpers.updateDimensions(scope, attrs, element, scope.chart);
        });
        scope.$watch('data', function (data) {
          if (data && angular.isDefined(scope.filtername) && angular.isDefined(scope.filtervalue)) {
            data = $filter(scope.filtername)(data, scope.filtervalue);
          }
          if (data) {
            //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
            if (scope.chart) {
              return scope.d3Call(data, scope.chart);
            }
            nv.addGraph({
              generate: function () {
                nvd3Helpers.initializeMargin(scope, attrs);
                var chart = nv.models.scatterChart().width(scope.width).height(scope.height).margin(scope.margin).x(attrs.x === undefined ? function (d) {
                    return d.x;
                  } : scope.x()).y(attrs.y === undefined ? function (d) {
                    return d.y;
                  } : scope.y()).size(attrs.size === undefined ? function (d) {
                    return d.size === undefined ? 1 : d.size;
                  } : scope.size()).forceX(attrs.forcex === undefined ? [] : scope.$eval(attrs.forcex)).forceY(attrs.forcey === undefined ? [] : scope.$eval(attrs.forcey)).forceSize(attrs.forcesize === undefined ? [] : scope.$eval(attrs.forcesize)).interactive(attrs.interactive === undefined ? false : attrs.interactive === 'true').tooltips(attrs.tooltips === undefined ? false : attrs.tooltips === 'true').tooltipContent(attrs.tooltipContent === undefined ? null : scope.tooltipContent()).tooltipXContent(attrs.tooltipxcontent === undefined ? function (key, x) {
                    return '<strong>' + x + '</strong>';
                  } : scope.tooltipXContent()).tooltipYContent(attrs.tooltipycontent === undefined ? function (key, x, y) {
                    return '<strong>' + y + '</strong>';
                  } : scope.tooltipYContent()).showControls(attrs.showcontrols === undefined ? false : attrs.showcontrols === 'true').showLegend(attrs.showlegend === undefined ? false : attrs.showlegend === 'true').showDistX(attrs.showdistx === undefined ? false : attrs.showdistx === 'true').showDistY(attrs.showdisty === undefined ? false : attrs.showdisty === 'true').xPadding(attrs.xpadding === undefined ? 0 : +attrs.xpadding).yPadding(attrs.ypadding === undefined ? 0 : +attrs.ypadding).fisheye(attrs.fisheye === undefined ? 0 : +attrs.fisheye).noData(attrs.nodata === undefined ? 'No Data Available.' : scope.nodata).color(attrs.color === undefined ? nv.utils.defaultColor() : scope.color()).transitionDuration(attrs.transitionduration === undefined ? 250 : +attrs.transitionduration);
                if (attrs.shape) {
                  chart.scatter.onlyCircles(false);
                  chart.scatter.shape(attrs.shape === undefined ? function (d) {
                    return d.shape || 'circle';
                  } : scope.shape());
                }
                //'pointActive', 'clipVoronoi', 'clipRadius', 'useVoronoi'
                if (attrs.xdomain) {
                  if (Array.isArray(scope.$eval(attrs.xdomain))) {
                    chart.xDomain(scope.$eval(attrs.xdomain));
                  } else if (typeof scope.xdomain() === 'function') {
                    chart.xDomain(scope.xdomain());
                  }
                }
                if (attrs.ydomain) {
                  if (Array.isArray(scope.$eval(attrs.ydomain))) {
                    chart.yDomain(scope.$eval(attrs.ydomain));
                  } else if (typeof scope.ydomain() === 'function') {
                    chart.yDomain(scope.ydomain());
                  }
                }
                if (attrs.xscale) {
                  chart.xDomain(scope.xdomain());
                  chart.xRange(scope.xrange());
                  chart.xScale(scope.xscale());
                }
                if (attrs.yscale) {
                  chart.yDomain(scope.ydomain());
                  chart.yRange(scope.yrange());
                  chart.yScale(scope.yscale());
                }
                if (attrs.zscale) {
                  chart.sizeDomain(scope.sizedomain());
                  chart.sizeRange(scope.sizerange());
                  chart.zScale(scope.zscale());
                }
                scope.d3Call(data, chart);
                nv.utils.windowResize(chart.update);
                scope.chart = chart;
                return chart;
              },
              callback: attrs.callback === undefined ? null : scope.callback()
            });
          }
        }, attrs.objectequality === undefined ? false : attrs.objectequality === 'true');
      }
    };
  }
]);
;
angular.module('nvd3ChartDirectives').directive('nvd3ScatterPlusLineChart', [
  '$filter',
  'nvd3Helpers',
  function ($filter, nvd3Helpers) {
    return {
      restrict: 'EA',
      scope: nvd3Helpers.addCommonScopeFields({}),
      link: function (scope, element, attrs) {
        scope.$watch('width + height', function () {
          nvd3Helpers.updateDimensions(scope, attrs, element, scope.chart);
        });
        scope.$watch('data', function (data) {
          if (data && angular.isDefined(scope.filtername) && angular.isDefined(scope.filtervalue)) {
            data = $filter(scope.filtername)(data, scope.filtervalue);
          }
          if (data) {
            if (scope.chart) {
              return scope.d3Call(data, scope.chart);
            }
            nv.addGraph({
              generate: function () {
                nvd3Helpers.initializeMargin(scope, attrs);
                var chart = nv.models.scatterPlusLineChart().width(scope.width).height(scope.height).margin(scope.margin).x(attrs.x === undefined ? function (d) {
                    return d.x;
                  } : scope.x()).y(attrs.y === undefined ? function (d) {
                    return d.y;
                  } : scope.y()).size(attrs.size === undefined ? function (d) {
                    return d.size === undefined ? 1 : d.size;
                  } : scope.size()).interactive(attrs.interactive === undefined ? false : attrs.interactive === 'true').tooltips(attrs.tooltips === undefined ? false : attrs.tooltips === 'true').tooltipContent(attrs.tooltipContent === undefined ? null : scope.tooltipContent()).tooltipXContent(attrs.tooltipxcontent === undefined ? function (key, x) {
                    return '<strong>' + x + '</strong>';
                  } : scope.tooltipXContent()).tooltipYContent(attrs.tooltipycontent === undefined ? function (key, x, y) {
                    return '<strong>' + y + '</strong>';
                  } : scope.tooltipYContent()).showControls(attrs.showcontrols === undefined ? false : attrs.showcontrols === 'true').showLegend(attrs.showlegend === undefined ? false : attrs.showlegend === 'true').showDistX(attrs.showdistx === undefined ? false : attrs.showdistx === 'true').showDistY(attrs.showdisty === undefined ? false : attrs.showdisty === 'true').fisheye(attrs.fisheye === undefined ? 0 : +attrs.fisheye).noData(attrs.nodata === undefined ? 'No Data Available.' : scope.nodata).color(attrs.color === undefined ? nv.utils.defaultColor() : scope.color()).transitionDuration(attrs.transitionduration === undefined ? 250 : +attrs.transitionduration);
                if (attrs.shape) {
                  chart.scatter.onlyCircles(false);
                  chart.scatter.shape(attrs.shape === undefined ? function (d) {
                    return d.shape || 'circle';
                  } : scope.shape());
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
  }
]);
;
angular.module('nvd3ChartDirectives').directive('nvd3SparklineChart', [
  '$filter',
  'nvd3Helpers',
  function ($filter, nvd3Helpers) {
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
        objectequality: '@',
        transitionduration: '@'
      },
      link: function (scope, element, attrs) {
        scope.$watch('width + height', function () {
          nvd3Helpers.updateDimensions(scope, attrs, element, scope.chart);
        });
        scope.$watch('data', function (data) {
          if (data && angular.isDefined(scope.filtername) && angular.isDefined(scope.filtervalue)) {
            data = $filter(scope.filtername)(data, scope.filtervalue);
          }
          if (data) {
            //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
            if (scope.chart) {
              return scope.d3Call(data, scope.chart);
            }
            nv.addGraph({
              generate: function () {
                nvd3Helpers.initializeMargin(scope, attrs);
                var chart = nv.models.sparklinePlus().width(scope.width).height(scope.height).margin(scope.margin).x(attrs.x === undefined ? function (d) {
                    return d.x;
                  } : scope.x()).y(attrs.y === undefined ? function (d) {
                    return d.y;
                  } : scope.y()).xTickFormat(attrs.xtickformat === undefined ? d3.format(',r') : scope.xtickformat()).yTickFormat(attrs.ytickformat === undefined ? d3.format(',.2f') : scope.ytickformat()).color(attrs.color === undefined ? nv.utils.getColor(['#000']) : scope.color()).showValue(attrs.showvalue === undefined ? true : attrs.showvalue === 'true').alignValue(attrs.alignvalue === undefined ? true : attrs.alignvalue === 'true').rightAlignValue(attrs.rightalignvalue === undefined ? false : attrs.rightalignvalue === 'true').noData(attrs.nodata === undefined ? 'No Data Available.' : scope.nodata);
                if (attrs.xScale) {
                  chart.xScale(scope.xScale());
                }
                if (attrs.yScale) {
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
        }, attrs.objectequality === undefined ? false : attrs.objectequality === 'true');
      }
    };
  }
]);
;
angular.module('nvd3ChartDirectives').directive('nvd3SparklineWithBandlinesChart', [
  '$filter',
  'nvd3Helpers',
  function ($filter, nvd3Helpers) {
    /**
       * http://www.perceptualedge.com/articles/visual_business_intelligence/introducing_bandlines.pdf
       * You need five primary facts about a set of time-series values to construct a bandline:
       * 1) the lowest value,
       * 2) the 25th percentile (i.e., the point at and below which the lowest 25% of the values reside),
       * 3) the median (a.k.a., the 50th percentile, the point at and below which 50% of the values reside),
       * 4) the 75th percentile (i.e., the point at and below which 75% of the values reside), and
       * 5) the highest value.
       */
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
        objectequality: '@',
        transitionduration: '@'
      },
      controller: [
        '$scope',
        '$element',
        '$attrs',
        function ($scope, $element, $attrs) {
          //expect scope to contain bandlineProperties
          $scope.d3Call = function (data, chart) {
            var dataAttributeChartID;
            //randomly generated if id attribute doesn't exist
            var selectedChart;
            var sLineSelection;
            var bandlineData;
            var bandLines;
            if (!$attrs.id) {
              dataAttributeChartID = 'chartid' + Math.floor(Math.random() * 1000000001);
              angular.element($element).attr('data-chartid', dataAttributeChartID);
              selectedChart = d3.select('[data-iem-chartid=' + dataAttributeChartID + '] svg').attr('height', $scope.height).attr('width', $scope.width).datum(data);
              //chart.yScale()($scope.bandlineProperties.median)
              //var sLineSelection = d3.select('svg#' + $attrs.id + ' g.nvd3.nv-wrap.nv-sparkline');
              sLineSelection = d3.select('[data-iem-chartid=' + dataAttributeChartID + '] svg' + ' g.nvd3.nv-wrap.nv-sparkline');
              bandlineData = [
                $scope.bandlineProperties.min,
                $scope.bandlineProperties.twentyFithPercentile,
                $scope.bandlineProperties.median,
                $scope.bandlineProperties.seventyFithPercentile,
                $scope.bandlineProperties.max
              ];
              bandLines = sLineSelection.selectAll('.nv-bandline').data([bandlineData]);
              bandLines.enter().append('g').attr('class', 'nv-bandline');
              selectedChart.transition().duration($attrs.transitionduration === undefined ? 250 : +$attrs.transitionduration).call(chart);
            } else {
              if (!d3.select('#' + $attrs.id + ' svg')) {
                d3.select('#' + $attrs.id).append('svg');
              }
              selectedChart = d3.select('#' + $attrs.id + ' svg').attr('height', $scope.height).attr('width', $scope.width).datum(data);
              //chart.yScale()($scope.bandlineProperties.median)
              sLineSelection = d3.select('svg#' + $attrs.id + ' g.nvd3.nv-wrap.nv-sparkline');
              bandlineData = [
                $scope.bandlineProperties.min,
                $scope.bandlineProperties.twentyFithPercentile,
                $scope.bandlineProperties.median,
                $scope.bandlineProperties.seventyFithPercentile,
                $scope.bandlineProperties.max
              ];
              bandLines = sLineSelection.selectAll('.nv-bandline').data([bandlineData]);
              bandLines.enter().append('g').attr('class', 'nv-bandline');
              selectedChart.transition().duration($attrs.transitionduration === undefined ? 250 : +$attrs.transitionduration).call(chart);
            }
          };
        }
      ],
      link: function (scope, element, attrs) {
        scope.$watch('width + height', function () {
          nvd3Helpers.updateDimensions(scope, attrs, element, scope.chart);
        });
        scope.$watch('data', function (data) {
          if (data && angular.isDefined(scope.filtername) && angular.isDefined(scope.filtervalue)) {
            data = $filter(scope.filtername)(data, scope.filtervalue);
          }
          if (data) {
            //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
            if (scope.chart) {
              return scope.d3Call(data, scope.chart);
            }
            nv.addGraph({
              generate: function () {
                scope.bandlineProperties = {};
                var sortedValues;
                nvd3Helpers.initializeMargin(scope, attrs);
                var chart = nv.models.sparklinePlus().width(scope.width).height(scope.height).margin(scope.margin).x(attrs.x === undefined ? function (d) {
                    return d.x;
                  } : scope.x()).y(attrs.y === undefined ? function (d) {
                    return d.y;
                  } : scope.y()).xTickFormat(attrs.xtickformat === undefined ? d3.format(',r') : scope.xtickformat()).yTickFormat(attrs.ytickformat === undefined ? d3.format(',.2f') : scope.ytickformat()).color(attrs.color === undefined ? nv.utils.getColor(['#000']) : scope.color()).showValue(attrs.showvalue === undefined ? true : attrs.showvalue === 'true').alignValue(attrs.alignvalue === undefined ? true : attrs.alignvalue === 'true').rightAlignValue(attrs.rightalignvalue === undefined ? false : attrs.rightalignvalue === 'true').noData(attrs.nodata === undefined ? 'No Data Available.' : scope.nodata);
                //calc bandline data
                scope.bandlineProperties.min = d3.min(data, function (d) {
                  return d[1];
                });
                scope.bandlineProperties.max = d3.max(data, function (d) {
                  return d[1];
                });
                sortedValues = data.map(function (d) {
                  return d[1];
                }).sort(function (a, b) {
                  if (a[0] < b[0]) {
                    return -1;
                  } else if (a[0] === b[0]) {
                    return 0;
                  } else {
                    return 1;
                  }
                });
                scope.bandlineProperties.twentyFithPercentile = d3.quantile(sortedValues, 0.25);
                scope.bandlineProperties.median = d3.median(sortedValues);
                scope.bandlineProperties.seventyFithPercentile = d3.quantile(sortedValues, 0.75);
                if (attrs.xScale) {
                  chart.xScale(scope.xScale());
                }
                if (attrs.yScale) {
                  chart.yScale(scope.yScale());
                }
                configureXaxis(chart, scope, attrs);
                configureYaxis(chart, scope, attrs);
                processEvents(chart, scope);
                scope.d3Call(data, chart);
                nv.utils.windowResize(chart.update);
                scope.chart = chart;
                return chart;
              },
              callback: attrs.callback === undefined ? null : scope.callback()
            });
          }
        }, attrs.objectequality === undefined ? false : attrs.objectequality === 'true');
      }
    };
  }
]);
;
angular.module('nvd3ChartDirectives').directive('nvd3StackedAreaChart', [
  '$filter',
  'nvd3Helpers',
  function ($filter, nvd3Helpers) {
    return {
      restrict: 'EA',
      scope: nvd3Helpers.addCommonScopeFields({}),
      link: function (scope, element, attrs) {
        scope.$watch('width + height', function () {
          nvd3Helpers.updateDimensions(scope, attrs, element, scope.chart);
        });
        scope.$watch('data', function (data) {
          if (data && angular.isDefined(scope.filtername) && angular.isDefined(scope.filtervalue)) {
            data = $filter(scope.filtername)(data, scope.filtervalue);
          }
          if (data) {
            //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
            if (scope.chart) {
              return scope.d3Call(data, scope.chart);
            }
            nv.addGraph({
              generate: function () {
                nvd3Helpers.initializeMargin(scope, attrs);
                var chart = nv.models.stackedAreaChart().width(scope.width).height(scope.height).margin(scope.margin).x(attrs.x === undefined ? function (d) {
                    return d[0];
                  } : scope.x()).y(attrs.y === undefined ? function (d) {
                    return d[1];
                  } : scope.y()).forceX(attrs.forcex === undefined ? [] : scope.$eval(attrs.forcex)).forceY(attrs.forcey === undefined ? [0] : scope.$eval(attrs.forcey)).size(attrs.size === undefined ? function (d) {
                    return d.size === undefined ? 1 : d.size;
                  } : scope.size()).forceSize(attrs.forcesize === undefined ? [] : scope.$eval(attrs.forcesize)).showLegend(attrs.showlegend === undefined ? false : attrs.showlegend === 'true').showControls(attrs.showcontrols === undefined ? false : attrs.showcontrols === 'true').showXAxis(attrs.showxaxis === undefined ? false : attrs.showxaxis === 'true').showYAxis(attrs.showyaxis === undefined ? false : attrs.showyaxis === 'true').tooltips(attrs.tooltips === undefined ? false : attrs.tooltips === 'true').noData(attrs.nodata === undefined ? 'No Data Available.' : scope.nodata).interactive(attrs.interactive === undefined ? false : attrs.interactive === 'true').clipEdge(attrs.clipedge === undefined ? false : attrs.clipedge === 'true').color(attrs.color === undefined ? nv.utils.defaultColor() : scope.color());
                if (attrs.useinteractiveguideline) {
                  chart.useInteractiveGuideline(attrs.useinteractiveguideline === undefined ? false : attrs.useinteractiveguideline === 'true');
                }
                if (attrs.usevoronoi) {
                  chart.useVoronoi(attrs.usevoronoi === 'true');
                }
                if (attrs.style) {
                  chart.style(attrs.style);
                }
                if (attrs.order) {
                  chart.order(attrs.order);
                }
                if (attrs.offset) {
                  chart.offset(attrs.offset);
                }
                if (attrs.interpolate) {
                  chart.interpolate(attrs.interpolate);
                }
                if (attrs.tooltipcontent) {
                  chart.tooltipContent(scope.tooltipcontent());
                }
                if (attrs.xscale) {
                  chart.xScale(scope.xscale());
                }
                if (attrs.yscale) {
                  chart.yScale(scope.yscale());
                }
                if (attrs.xdomain) {
                  if (Array.isArray(scope.$eval(attrs.xdomain))) {
                    chart.xDomain(scope.$eval(attrs.xdomain));
                  } else if (typeof scope.xdomain() === 'function') {
                    chart.xDomain(scope.xdomain());
                  }
                }
                if (attrs.ydomain) {
                  if (Array.isArray(scope.$eval(attrs.ydomain))) {
                    chart.yDomain(scope.$eval(attrs.ydomain));
                  } else if (typeof scope.ydomain() === 'function') {
                    chart.yDomain(scope.ydomain());
                  }
                }
                if (attrs.sizedomain) {
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
        }, attrs.objectequality === undefined ? false : attrs.objectequality === 'true');
      }
    };
  }
]);
;
angular.module('legendDirectives').directive('simpleSvgLegend', function () {
  return {
    restrict: 'EA',
    scope: {
      id: '@',
      width: '@',
      height: '@',
      margin: '@',
      x: '@',
      y: '@',
      labels: '@',
      styles: '@',
      classes: '@',
      shapes: '@',
      padding: '@',
      columns: '@'
    },
    compile: function () {
      return function link(scope, element, attrs) {
        var id, width, height, margin, widthTracker = 0, heightTracker = 0, columns = 1, columnTracker = 0, padding = 10, paddingStr, svgNamespace = 'http://www.w3.org/2000/svg', svg, g, labels, styles, classes, shapes, x = 0, y = 0;
        margin = scope.$eval(attrs.margin) || {
          left: 5,
          top: 5,
          bottom: 5,
          right: 5
        };
        width = attrs.width === 'undefined' ? element[0].parentElement.offsetWidth - (margin.left + margin.right) : +attrs.width - (margin.left + margin.right);
        height = attrs.height === 'undefined' ? element[0].parentElement.offsetHeight - (margin.top + margin.bottom) : +attrs.height - (margin.top + margin.bottom);
        if (!attrs.id) {
          //if an id is not supplied, create a random id.
          id = 'legend-' + Math.random();
        } else {
          id = attrs.id;
        }
        if (attrs.columns) {
          columns = +attrs.columns;
        }
        if (attrs.padding) {
          padding = +attrs.padding;
        }
        paddingStr = padding + '';
        svg = document.createElementNS(svgNamespace, 'svg');
        if (attrs.width) {
          svg.setAttribute('width', width + '');
        }
        if (attrs.height) {
          svg.setAttribute('height', height + '');
        }
        svg.setAttribute('id', id);
        if (attrs.x) {
          x = +attrs.x;
        }
        if (attrs.y) {
          y = +attrs.y;
        }
        element.append(svg);
        g = document.createElementNS(svgNamespace, 'g');
        g.setAttribute('transform', 'translate(' + x + ',' + y + ')');
        svg.appendChild(g);
        if (attrs.labels) {
          labels = scope.$eval(attrs.labels);
        }
        if (attrs.styles) {
          styles = scope.$eval(attrs.styles);
        }
        if (attrs.classes) {
          classes = scope.$eval(attrs.classes);
        }
        if (attrs.shapes) {
          shapes = scope.$eval(attrs.shapes);
        }
        for (var i in labels) {
          if (labels.hasOwnProperty(i)) {
            var shpe = shapes[i], shape, text, textSize, g1;
            if (columnTracker % columns === 0) {
              widthTracker = 0;
              heightTracker = heightTracker + (padding + padding * 1.5);
            }
            g1 = document.createElementNS(svgNamespace, 'g');
            g1.setAttribute('transform', 'translate(' + widthTracker + ', ' + heightTracker + ')');
            if (shpe === 'rect') {
              shape = document.createElementNS(svgNamespace, 'rect');
              //x, y, rx, ry
              shape.setAttribute('y', 0 - padding / 2 + '');
              shape.setAttribute('width', paddingStr);
              shape.setAttribute('height', paddingStr);
            } else if (shpe === 'ellipse') {
              shape = document.createElementNS(svgNamespace, 'ellipse');
              shape.setAttribute('rx', paddingStr);
              shape.setAttribute('ry', padding + padding / 2 + '');
            } else {
              shape = document.createElementNS(svgNamespace, 'circle');
              shape.setAttribute('r', padding / 2 + '');
            }
            if (styles && styles[i]) {
              shape.setAttribute('style', styles[i]);
            }
            if (classes && classes[i]) {
              shape.setAttribute('class', classes[i]);
            }
            g1.appendChild(shape);
            widthTracker = widthTracker + shape.clientWidth + (padding + padding / 2);
            text = document.createElementNS(svgNamespace, 'text');
            text.setAttribute('transform', 'translate(10, 5)');
            text.appendChild(document.createTextNode(labels[i]));
            g1.appendChild(text);
            g.appendChild(g1);
            textSize = text.clientWidth;
            widthTracker = widthTracker + textSize + (padding + padding * 0.75);
            columnTracker++;
          }
        }
      };
    }
  };
});
;