'use strict';

describe('lineChart', function () {
  var template;


  beforeEach(function (done) {
    $scope.statistics.options.chartType = 'lineChart';
    template = $compile('<div width="1450" height="200" nvd3-chart="statistics.options" ng-model="statistics.data"><svg></svg></div>')($scope);
    $scope.$digest();
    setTimeout(function() { done(); }, 1);
  });

  it('after compiling svg element exists', function () {
    var templateAsHtml = template.html();
    expect(templateAsHtml).toContain('<svg viewBox="0 0 1450 200"');
  });
});