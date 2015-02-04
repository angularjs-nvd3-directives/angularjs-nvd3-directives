'use strict';

describe('getD3Selector', function() {
  var attrs;
  var scope;
  var element;

  beforeEach(inject(function($rootScope, $compile) {
          attrs = {};
          element = angular.element('<div><p>foo</p></div>');

          scope = $rootScope;

          $compile(element)(scope);
          scope.$digest();
      }));

  it('should have a valid random id for data-chartid', function() {
    var res_str = getD3Selector( attrs, element );
    expect(res_str).toMatch(/\[data-chartid=chartid\d+\]/);
  });

  it('should have "flubber" for data-chartid', function() {
    attrs['data-chartid'] = 'flubber';
    var res_str = getD3Selector( attrs, element );
    expect(res_str).toEqual('[data-chartid=flubber]');
  });

  it('should have "#boo" for an id', function() {
    attrs.id = 'boo';
    var res_str = getD3Selector( attrs, element );
    expect(res_str).toEqual('#boo');
  });
});
