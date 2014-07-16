angular.module('nvd3ChartDirectives')
    .directive('nvd3Chart', ['$filter', 'nvd3Helpers', function ($filter, nvd3Helpers) {
      return {
        restrict: 'EA',
        scope: {
          'opts': '=nvd3Chart',
          'data': '=ngModel'
        },

        controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {
          $scope.d3Call = function (data, chart) {
            nvd3Helpers.checkElementID($scope, $attrs, $element, chart, data);
            nvd3Helpers.rewriteOptions(chart, $scope.opts);

          };
        }],

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
    }])
;