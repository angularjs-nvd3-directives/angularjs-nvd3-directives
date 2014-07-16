'use strict';

describe('nvd3-multi-bar-chart', function () {
  var template;


  beforeEach(function (done) {
    $scope.statistics = {
      data: [
        { "key": "Serie 1", "values": [ [ 1025409600000 , 10], [ 1028088000000 , 120], [ 1030766400000 , 200] ] },
        { "key": "Serie 2", "values": [ [ 1025409600000 , 1010], [ 1028088000000 , 70], [ 1030766400000 , 250] ] }
      ],

      xFunction: function(){
        return function(d){
          return d[0];
        };
      },

      yFunction: function(){
        return function(d){
          return d[1];
        };
      },

      xAxisTickFormatFunction: function() {
        return function(d){
          return d3.time.format('%m/%y')(new Date(d));
        };
      },

      yAxisTickFormatFunction: function() {
        return function(d){
          return d3.format('d')(d);
        };
      },

      colorArray: ['#FF0000', '#0000FF', '#FFFF00', '#00FFFF'],

      colorFunction: function() {
        return function(d, i) {
          return $scope.statistics.colorArray[i];
        };
      },

      toolTipContentFunction: function() {
        return function(key, x, y, e, graph) {
          return  'Super New Tooltip' +
              '<h1>' + key + '</h1>' +
              '<p>' +  y + ' at ' + x + '</p>'
        }
      },

      format: d3.format(',.2f'),

      valueFormatFunction: function() {
        return function(d){
          return $scope.statistics.format(d);
        }
      }
    };


    template = $compile('<nvd3-multi-bar-chart ' +
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
        'valueFormat="statistics.valueFormatFunction()"' +
        '>' +
        '<svg></svg>' +
        '</nvd3-multi-bar-chart>')($scope);
    $scope.$digest();

    setTimeout(function() {
      done();
    }, 500);
  });

  it('after compiling svg element exists', function () {
    var templateAsHtml = template.html();
    expect(templateAsHtml).toContain('<svg viewBox="0 0 1450 200">');
  });


  it('', function () {
  });
});