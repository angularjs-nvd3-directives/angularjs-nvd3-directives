'use strict';

describe('Directive: nvd3Chart -', function () {
  function testChartType(chartType) {

    describe (chartType + ' -', function () {
      var template;

      beforeEach(function (done) {
        $scope.statistics.options.chartType = chartType;
        template = $compile('<div width="1450" height="200" nvd3-chart="statistics.options" ng-model="statistics.data"><svg></svg></div>')($scope);
        $scope.$digest();
        setTimeout(function() { done(); }, 1);
      });

      it('works', function () {
        var templateAsHtml = template.html();
        expect(templateAsHtml).toContain('<svg viewBox="0 0 1450 200"');
        for (var i = 1; i < arguments.length; i++) {
          expect(templateAsHtml).toContain(arguments[i]);
        }
      });
    });
  }

  testChartType('bulletChart');
  testChartType('cumulativeLineChart');
  testChartType('discreteBarChart',
      'nv-discreteBarWithAxes',
      'class="discreteBar"');
  testChartType('lineChart');
  testChartType('linePlusBarChart');
  testChartType('lineWithFocusChart');
  testChartType('multiBarChart',
      'nv-multiBarWithLegend',
      'class="nv-bar',
      '<g class="nvd3 nv-wrap nv-multiBarWithLegend"')
  testChartType('multiBarHorizontalChart');
  testChartType('pieChart');
  testChartType('scatterChart');
  testChartType('scatterPlusLineChart');
  testChartType('stackedAreaChart');
});
