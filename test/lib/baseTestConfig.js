// load the controller's module
beforeEach(module('nvd3ChartDirectives'));
// environment
var $scope,
    $compile,
    $rootScope;


// Initialize the controller and a mock scope
beforeEach(inject(function ($controller, _$rootScope_, _$compile_) {
  $rootScope = _$rootScope_;
  $compile = _$compile_;
  $scope = $rootScope.$new();
}));


// polyfill
if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {
    if (typeof this !== "function") {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
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