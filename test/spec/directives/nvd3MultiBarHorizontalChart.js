'use strict';

describe('nvd3-multi-bar-horizontal-chart', function () {
  var template;


  beforeEach(function (done) {
    template = $compile('<nvd3-multi-bar-horizontal-chart ' +
        'data="statistics.data" ' +
        'id="formatValueExample" ' +
        'nvd3options="statistics.options" ' +
        'width="1450" ' +
        'height="200" ' +
        'xAxisTickFormat="statistics.xAxisTickFormatFunction()" ' +
        'yAxisTickFormat="statistics.yAxisTickFormatFunction()" ' +
        'showxaxis="true" ' +
        'showyaxis="true" ' +
        'showValues="true" ' +
        'showLegend="true" ' +
        'showControls="true" ' +
        'interactive="true" ' +
        'tooltips="true" ' +
        'margin="{left:50,top:0,bottom:20,right:0}" ' +
        '>' +
        '<svg></svg>' +
        '</nvd3-multi-bar-horizontal-chart>')($scope);
    $scope.$digest();

    setTimeout(function() {
      done();
    }, 1);
  });

  it('after compiling svg element exists', function () {
    var templateAsHtml = template.html();
    expect(templateAsHtml).toContain('<svg viewBox="0 0 1450 200"');
  });


  it('', function () {
  });
});