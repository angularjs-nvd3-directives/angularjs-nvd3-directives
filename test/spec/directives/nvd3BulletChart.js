'use strict';

describe('nvd3-bullet-chart', function () {
  var template;


  beforeEach(function (done) {
    // fixme - set proper data for this kind of chart
    template = $compile('<nvd3-bullet-chart ' +
        'data="statistics.data" ' +
        'id="formatValueExample" ' +
        'nvd3options="statistics.options" ' +
        'width="1450" ' +
        'height="200" ' +
        'showxaxis="true" ' +
        'showyaxis="true" ' +
        'showValues="true" ' +
        'showLegend="true" ' +
        'showControls="true" ' +
        'interactive="true" ' +
        'tooltips="true" ' +
        'margin="{left:50,top:0,bottom:20,right:0}" ' +
        'valueFormat="statistics.valueFormatFunction()"' +
        '>' +
        '<svg></svg>' +
        '</nvd3-bullet-chart>')($scope);
    $scope.$digest();

    setTimeout(function() {
      done();
    }, 1);
  });

  it('after compiling svg element exists', function () {
    var templateAsHtml = template.html();
    expect(templateAsHtml).toContain('<svg');
  });


  it('', function () {
  });
});