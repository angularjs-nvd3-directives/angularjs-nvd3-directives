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
      '<g class="nvd3 nv-wrap nv-multiBarWithLegend"');
  testChartType('multiBarHorizontalChart');
  testChartType('pieChart');
  testChartType('scatterChart');
  testChartType('scatterPlusLineChart');
  testChartType('stackedAreaChart');


  function spyNvd3Helper(field, done) {
    // add subtype
    nvd3Helpers.chartSubTypeDefaults.customGroupSpacing = {
      groupSpacing: 17
    };

    var spy = spyOn(nvd3Helpers, field);

    $scope.statistics.options.chartType = 'multiBarChart';
    // use subtype
    $scope.statistics.options.chartSubType = ['customGroupSpacing'];
    var template = $compile('<div width="1450" height="200" nvd3-chart="statistics.options" ng-model="statistics.data"><svg></svg></div>')($scope);
    $scope.$digest();
    setTimeout(function() { done(); }, 1);

    return { spy: spy, template: template };
  }


  describe ('chart\'s subtype is taken into account', function () {
    var context;

    beforeEach(function (done) {
      context = spyNvd3Helper('merge', done);
    });

    it('works', function () {
      expect(context.spy.calls.mostRecent().args.length).toBe(4);
      expect(context.spy.calls.mostRecent().args[2].groupSpacing).toBe(17);
    });
  });


  describe ('chart\'s subtype is taken into account', function () {
    var context;

    beforeEach(function (done) {
      context = spyNvd3Helper('internalRewriteOptions', done);
    });

    it('works', function () {
      expect(context.spy.calls.first().args[1].groupSpacing).toBe(17);
    });
  });


  describe ('merge works correctly', function () {
    var result;

    beforeEach(function () {
      result = nvd3Helpers.merge({
        a: 1,
        b: 2,
        c: {}
      }, {
        c: {
          d: 8
        }
      });
    });

    it('works', function () {
      expect(result.a).toBe(1);
      expect(result.b).toBe(2);
      expect(result.c.d).toBe(8);
    });
  });
});

