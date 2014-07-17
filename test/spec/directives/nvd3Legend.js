'use strict';

describe('Directive: nvd3Legend', function () {


  describe ('works', function () {
    var template;

    beforeEach(function (done) {
      template = $compile('<nvd3-legend data="data"></nvd3-legend>')($scope);
      $scope.$digest();
      setTimeout(function() { done(); }, 1);
    });

    it('works', function () {
      var templateAsHtml = template.html();
      expect(templateAsHtml).toContain('');
    });
  });
});

