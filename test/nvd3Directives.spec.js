'use strict';

describe('nvd3Directives', function() {
  var $scope, $compile, exampleData, element;

  beforeEach(function() {
    module('nvd3ChartDirectives');

    // Polyfill to allow nvd3 and phantomjs to play nicely. See here for details: https://github.com/novus/nvd3/issues/367
    // This should likely be moved outside of this test file, but I will leave that to the original contributors
    if (!Function.prototype.bind) {
      Function.prototype.bind = function (oThis) {
        if (typeof this !== "function") {
          // closest thing possible to the ECMAScript 5
          // internal IsCallable function
          throw "TypeError : Function.prototype.bind - what is trying to be bound is not callable";
        }

        var aArgs = Array.prototype.slice.call(arguments, 1), 
                    fToBind = this, 
                    fNOP = function () {},
                    fBound = function () {
                      return fToBind.apply(this instanceof fNOP && oThis
                                    ? this
                                    : oThis,
                                    aArgs.concat(Array.prototype.slice.call(arguments)));
                    };

          fNOP.prototype = this.prototype;
          fBound.prototype = new fNOP();

          return fBound;
        };
      }
  });

  beforeEach(inject(function($rootScope,  _$compile_) {
    $scope = $rootScope;
    $compile = _$compile_;
  }));

  describe('the nvd3StackedAreaChart directive', function(){

    beforeEach(function() {
      $scope.exampleData = [
           {
               "key": "Series 1",
               "values": [ [ 1025409600000 , 0] , [ 1028088000000 , -6.3382185140371]]
           },
           {
               "key": "Series 2",
               "values": [ [ 1025409600000 , 0] , [ 1028088000000 , 0]]
           },
           {
               "key": "Series 3",
               "values": [ [ 1025409600000 , 0] , [ 1028088000000 , -6.3382185140371]]
           },
           {
               "key": "Series 4",
               "values": [ [ 1025409600000 , -7.0674410638835] , [ 1028088000000 , -14.663359292964]]
           }
      ];

      $scope.setXScale = function() {
        return d3.time.scale();
      };

      var directive = ['<nvd3-stacked-area-chart ',
                         'data="exampleData" ',
                         'id="exampleId" ',
                         'xScale="setXScale()"',
                         'showXAxis="true" ',
                         'showYAxis="true" ',
                         'showLegend="true" ',
                         'width="725" ',
                         'height="255"> ',
                         '<svg></svg> ',
                       '</nvd3-stacked-area-chart> '].join('');

      element = $compile(directive)($scope);
      $scope.$digest();
    });

    it('should compile and have isolate scope', function() {
      expect(element.isolateScope()).toNotBe(null); 
    });
    
    it('should have a isolate scope property of xscale', function() {
      expect(element.isolateScope().xscale).toBeDefined();
      // previously, the isolate scope was set to be xScale. this should NOT work
      expect(element.isolateScope().xScale).toBeUndefined();
    });

  });

});
