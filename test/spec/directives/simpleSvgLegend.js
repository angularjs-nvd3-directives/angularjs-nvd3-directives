'use strict';

describe('Directive: simpleSvgLegend', function () {


  describe ('works', function () {
    var template;

    beforeEach(function (done) {
      template = $compile('<simple-svg-legend></simple-svg-legend>')($scope);
      $scope.$digest();
      setTimeout(function() { done(); }, 1);
    });

    it('works', function () {
      var templateAsHtml = template.html();
      expect(templateAsHtml).toContain('');
    });
  });
});

