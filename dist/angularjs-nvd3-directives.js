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
      interactive: false,
      noData: 'No Data Available.',
      staggerLabels: false,
      delay: 2000,
      color: nv.utils.defaultColor()
    };
  },
  chartDefaults: {
    bulletChart: {
      forceX: [],
      orient: 'left',
      tickFormat: null
    },
    cumulativeLineChart: {
      forceX: [],
      rightAlignYAxis: false,
      clipEdge: false,
      clipVoronoi: false,
      useVoronoi: false,
      average: function (d) {
        return d.average;
      },
      isArea: function (d) {
        return d.area;
      }
    },
    discreteBarChart: {},
    lineChart: {
      forceX: [],
      size: function (d) {
        return d.size === undefined ? 1 : d.size;
      },
      rightAlignYAxis: false,
      clipEdge: false,
      clipVoronoi: false,
      interpolate: 'linear',
      isArea: function (d) {
        return d.area;
      }
    },
    linePlusBar: {
      forceX: [],
      interpolate: 'linear'
    },
    lineWithFocusChart: {
      forceX: [],
      height2: 200,
      size: function (d) {
        return d.size === undefined ? 1 : d.size;
      },
      isArea: function (d) {
        return d.area;
      },
      clipEdge: false,
      clipVoronoi: false,
      interpolate: 'liear'
    },
    multiBarChart: { groupSpacing: 0.1 },
    multiBarHorizontalChart: { stacked: false },
    pieChart: {
      forceX: [],
      labelThreshold: 0.02,
      labelType: 'key',
      pieLabelsOutside: true,
      valueFormat: d3.format(',.2f'),
      description: function (d) {
        return d.description;
      },
      donutLabelsOutside: false,
      donut: false,
      donutRatio: 0.5
    },
    scatterChart: {
      forceX: [],
      size: function (d) {
        return d.size === undefined ? 1 : d.size;
      },
      forceSize: [],
      tooltipContent: null,
      tooltipXContent: function (key, x) {
        return '<strong>' + x + '</strong>';
      },
      tooltipYContent: function (key, x, y) {
        return '<strong>' + y + '</strong>';
      },
      showDistX: false,
      showDistY: false,
      xPadding: 0,
      yPadding: 0,
      fisheye: 0,
      transitionDuration: 250
    },
    scatterPlusLineChart: {
      forceX: [],
      size: function (d) {
        return d.size === undefined ? 1 : d.size;
      },
      tooltipContent: null,
      tooltipXContent: function (key, x) {
        return '<strong>' + x + '</strong>';
      },
      tooltipYContent: function (key, x, y) {
        return '<strong>' + y + '</strong>';
      },
      showDistX: false,
      showDistY: false,
      fisheye: 0,
      transitionDuration: 250
    },
    sparklinePlus: {
      forceX: [],
      xTickFormat: d3.format(',r'),
      yTickFormat: d3.format(',.2f'),
      showValue: true,
      alignValue: true,
      rightAlignValue: false
    },
    stackedAreaChart: {
      forceX: [],
      size: function (d) {
        return d.size === undefined ? 1 : d.size;
      },
      forceSize: [],
      clipEdge: false
    }
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
        'x2Axis': true,
        'legend': true
      };
    var invoke = { 'scale': true };
    function internal(chart, options) {
      angular.forEach(options, function (value, key) {
        if (chart && angular.isFunction(chart[key]) && !special[key]) {
          if (!angular.isUndefined(value)) {
            chart = chart[key](value);
          }
        } else if (chart && special[key]) {
          internal(invoke[key] ? chart[key]() : chart[key], value);
        } else {
          if (key !== 'chartType') {
            console.log('Unknown configuration option: ' + key);
          }
        }
      });
    }
    internal(chart, this.merge(this.defaults(), this.chartDefaults[options.chartType], options));
  },
  merge: function (dst) {
    var merge = this.merge;
    angular.forEach(arguments, function (obj) {
      if (obj && obj !== dst) {
        angular.forEach(obj, function (value, key) {
          if (dst[key] && dst[key].constructor && dst[key].constructor === Object) {
            merge(dst[key], value);
          } else {
            dst[key] = value;
          }
        });
      }
    });
    return dst;
  },
  processEvents: function (chart, scope) {
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
  },
  checkElementID: function (scope, attrs, element, chart, data) {
    this.processEvents(chart, scope);
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
                console.log('creating chart: ' + scope.opts.chartType);
                var chart = nv.models[scope.opts.chartType]();
                nvd3Helpers.rewriteOptions(chart, scope.opts);
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