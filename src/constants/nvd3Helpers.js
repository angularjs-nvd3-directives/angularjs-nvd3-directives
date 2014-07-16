
angular.module('nvd3ChartDirectives')
    /*
     Common functions that sets up width, height, margin
     should prevent NaN errors
     */
    .constant('nvd3Helpers', {
      defaults: function () {
        return {
          margin: {left: 50, top: 50, bottom: 50, right: 50},
          x: function(d){ return d[0]; },
          y: function(d){ return d[1]; },
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
        var invoke = {
          'scale': true
        };
        function internal (chart, options, defaults) {
          angular.forEach(options, function (value, key) {
            if (angular.isFunction(chart[key]) && !special[key]) {
              chart[key](value);
              delete defaults[key];
            } else if (angular.isObject(chart[key])) {
              internal(invoke[key] ? chart[key]() : chart[key], value, defaults[key]);
              delete defaults[key];
            }
          });

          angular.forEach(defaults, function (value, key) {
            if (angular.isFunction(chart[key]) && !special[key]) {
              chart[key](value);
            } else if (angular.isObject(chart[key])) {
              internal(invoke[key] ? chart[key]() : chart[key], value, defaults[key]);
            }
          });
        }

        internal(chart, options, this.defaults());
      },


      checkElementID: function (scope, attrs, element, chart, data) {
        processEvents(chart, scope);

        var svgElem = element.find('svg')[0];

        if (angular.isArray(data) && data.length === 0) {
          d3.select(svgElem).remove();
        }
        if (d3.select(svgElem).empty()) {
          d3.select(element)
              .append('svg');
        }
        d3.select(svgElem)
            .attr('viewBox', '0 0 ' + scope.opts.width + ' ' + scope.opts.height)
            .datum(data)
            .transition().duration((attrs.transitionduration === undefined ? 250 : (+attrs.transitionduration)))
            .call(chart);
      },


      updateDimensions: function (scope, attrs, element, chart) {
        if (chart) {
          chart.width(scope.opts.width).height(scope.opts.height);
          var d3Select = getD3Selector(attrs, element);
          d3.select(d3Select + ' svg')
              .attr('viewBox', '0 0 ' + scope.opts.width + ' ' + scope.opts.height);
          nv.utils.windowResize(chart);
          scope.chart.update();
        }
      }
    });
