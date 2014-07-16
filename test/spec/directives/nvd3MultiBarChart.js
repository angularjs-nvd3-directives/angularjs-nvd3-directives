'use strict';

describe('multiBarChart', function () {
  var template;


  beforeEach(function (done) {
    $scope.statistics.options.chartType = 'multiBarChart';
    template = $compile('<div width="1450" height="200" nvd3-chart="statistics.options" ng-model="statistics.data"><svg></svg></div>')($scope);
    $scope.$digest();
    setTimeout(function() { done(); }, 1);
  });

  it('after compiling svg element exists', function () {
    var templateAsHtml = template.html();
    expect(templateAsHtml).toContain('<svg viewBox="0 0 1450 200"');
    expect(templateAsHtml).toContain('nv-multiBarWithLegend');
    expect(templateAsHtml).toContain('class="nv-bar');
    expect(templateAsHtml).toContain('<g class="nvd3 nv-wrap nv-multiBarWithLegend"');
  });
});
