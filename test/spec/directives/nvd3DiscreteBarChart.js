'use strict';

describe('discreteBarChart', function () {
  var template;


  beforeEach(function (done) {
    // discreteBarChart
    $scope.statistics.options.chartType = 'discreteBarChart';

    template = $compile('<div width="1450" height="200" nvd3-chart="statistics.options" ng-model="statistics.data"><svg></svg></div>')($scope);
    $scope.$digest();

    setTimeout(function() {
      done();
    }, 1);
  });

  it('after compiling svg element exists', function () {
    var templateAsHtml = template.html();
    expect(templateAsHtml).toContain('<svg viewBox="0 0 1450 200"');
    expect(templateAsHtml).toContain('nv-discreteBarWithAxes');
    expect(templateAsHtml).toContain('class="discreteBar"');
  });


  it('', function () {
  });
});
