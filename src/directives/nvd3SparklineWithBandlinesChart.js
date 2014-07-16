angular.module('nvd3ChartDirectives')
    .directive('nvd3SparklineWithBandlinesChart', ['$filter', 'nvd3Helpers', function($filter, nvd3Helpers) {
      /**
       * http://www.perceptualedge.com/articles/visual_business_intelligence/introducing_bandlines.pdf
       * You need five primary facts about a set of time-series values to construct a bandline:
       * 1) the lowest value,
       * 2) the 25th percentile (i.e., the point at and below which the lowest 25% of the values reside),
       * 3) the median (a.k.a., the 50th percentile, the point at and below which 50% of the values reside),
       * 4) the 75th percentile (i.e., the point at and below which 75% of the values reside), and
       * 5) the highest value.
       */
      return {
        restrict: 'EA',
        scope: {
          data: '=',
          filtername: '=',
          filtervalue: '=',
          width: '@',
          height: '@',
          id: '@',
          margin: '&',
          x: '&',
          y: '&',
          color: '&',
          xscale: '&',
          yscale: '&',
          showvalue: '@',
          alignvalue: '@',
          rightalignvalue: '@',
          nodata: '@',

          callback: '&',

          xtickformat: '&',
          ytickformat: '&',

          //angularjs specific
          objectequality: '@',

          //d3.js specific
          transitionduration: '@'

        },
        controller: ['$scope', '$element', '$attrs', function($scope, $element, $attrs){
          //expect scope to contain bandlineProperties
          $scope.d3Call = function(data, chart){

            var dataAttributeChartID; //randomly generated if id attribute doesn't exist
            var selectedChart;
            var sLineSelection;
            var bandlineData;
            var bandLines;


            if(!$attrs.id){

              dataAttributeChartID = 'chartid' + Math.floor(Math.random() * 1000000001);
              angular.element($element).attr('data-chartid', dataAttributeChartID );

              selectedChart = d3.select('[data-iem-chartid=' + dataAttributeChartID + '] svg')
                  .attr('height', $scope.height)
                  .attr('width', $scope.width)
                  .datum(data);

              //chart.yScale()($scope.bandlineProperties.median)
              //var sLineSelection = d3.select('svg#' + $attrs.id + ' g.nvd3.nv-wrap.nv-sparkline');
              sLineSelection = d3.select('[data-iem-chartid=' + dataAttributeChartID + '] svg' + ' g.nvd3.nv-wrap.nv-sparkline');
              bandlineData = [
                $scope.bandlineProperties.min,
                $scope.bandlineProperties.twentyFithPercentile,
                $scope.bandlineProperties.median,
                $scope.bandlineProperties.seventyFithPercentile,
                $scope.bandlineProperties.max
              ];
              bandLines = sLineSelection.selectAll('.nv-bandline').data([bandlineData]);
              bandLines.enter().append('g')
                  .attr('class', 'nv-bandline');

              selectedChart.transition().duration(($attrs.transitionduration === undefined ? 250 : (+$attrs.transitionduration)))
                  .call(chart);
            }

            else{
              if (!d3.select('#' + $attrs.id+' svg')){
                d3.select('#' + $attrs.id)
                    .append('svg');
              }

              selectedChart = d3.select('#' + $attrs.id+' svg')
                  .attr('height', $scope.height)
                  .attr('width', $scope.width)
                  .datum(data);

              //chart.yScale()($scope.bandlineProperties.median)
              sLineSelection = d3.select('svg#' + $attrs.id + ' g.nvd3.nv-wrap.nv-sparkline');
              bandlineData = [
                $scope.bandlineProperties.min,
                $scope.bandlineProperties.twentyFithPercentile,
                $scope.bandlineProperties.median,
                $scope.bandlineProperties.seventyFithPercentile,
                $scope.bandlineProperties.max
              ];
              bandLines = sLineSelection.selectAll('.nv-bandline').data([bandlineData]);
              bandLines.enter().append('g')
                  .attr('class', 'nv-bandline');

              selectedChart.transition().duration(($attrs.transitionduration === undefined ? 250 : (+$attrs.transitionduration)))
                  .call(chart);
            }
          };
        }],
        link: function(scope, element, attrs){
          scope.$watch('width + height', function() { nvd3Helpers.updateDimensions(scope,attrs,element,scope.chart); });
          scope.$watch('data', function(data){
            if (data && angular.isDefined(scope.filtername) && angular.isDefined(scope.filtervalue)) {
              data =  $filter(scope.filtername)(data, scope.filtervalue);
            }

            if(data){
              //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
              if(scope.chart){
                return scope.d3Call(data, scope.chart);
              }
              nv.addGraph({
                generate: function(){
                  scope.bandlineProperties = {};
                  var sortedValues;
                  nvd3Helpers.initializeMargin(scope, attrs);
                  var chart = nv.models.sparklinePlus()
                      .width(scope.width)
                      .height(scope.height)
                      .margin(scope.margin)
                      .x(attrs.x === undefined ? function(d){ return d.x; } : scope.x())
                      .y(attrs.y === undefined ? function(d){ return d.y; } : scope.y())
                      .xTickFormat(attrs.xtickformat === undefined ? d3.format(',r') : scope.xtickformat())
                      .yTickFormat(attrs.ytickformat === undefined ? d3.format(',.2f') : scope.ytickformat())
                      .color(attrs.color === undefined ? nv.utils.getColor(['#000']) : scope.color())
                      .showValue(attrs.showvalue === undefined ? true : (attrs.showvalue === 'true'))
                      .alignValue(attrs.alignvalue === undefined ? true : (attrs.alignvalue === 'true'))
                      .rightAlignValue(attrs.rightalignvalue === undefined ? false : (attrs.rightalignvalue === 'true'))
                      .noData(attrs.nodata === undefined ? 'No Data Available.' : scope.nodata);

                  //calc bandline data
                  scope.bandlineProperties.min = d3.min(data, function(d){ return d[1]; });
                  scope.bandlineProperties.max = d3.max(data, function(d){ return d[1]; });
                  sortedValues = data.map(function(d){
                    return d[1];
                  }).sort(function(a, b){
                    if(a[0] < b[0]){
                      return -1;
                    } else if (a[0] === b[0]){
                      return 0;
                    } else {
                      return 1;
                    }
                  });

                  scope.bandlineProperties.twentyFithPercentile = d3.quantile(sortedValues, 0.25);
                  scope.bandlineProperties.median = d3.median(sortedValues);
                  scope.bandlineProperties.seventyFithPercentile = d3.quantile(sortedValues, 0.75);

                  if(attrs.xScale){
                    chart.xScale(scope.xScale());
                  }

                  if(attrs.yScale){
                    chart.yScale(scope.yScale());
                  }

                  configureXaxis(chart, scope, attrs);
                  configureYaxis(chart, scope, attrs);
                  processEvents(chart, scope);

                  scope.d3Call(data, chart);

                  nv.utils.windowResize(chart.update);

                  scope.chart = chart;
                  return chart;
                },
                callback: attrs.callback === undefined ? null : scope.callback()
              });
            }
          }, (attrs.objectequality === undefined ? false : (attrs.objectequality === 'true')));
        }
      };
    }])
;
