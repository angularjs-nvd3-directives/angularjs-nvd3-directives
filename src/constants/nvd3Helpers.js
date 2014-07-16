
angular.module('nvd3ChartDirectives', [])
    /*
     Common functions that sets up width, height, margin
     should prevent NaN errors
     */
    .constant('nvd3Helpers', {
      addCommonScopeFields: function (scope) {
        return angular.extend(scope, {
          //xaxis
          xaxisorient: '&',
          xaxisticks: '@',
          xaxistickvalues: '&xaxistickvalues',
          xaxisticksubdivide: '&',
          xaxisticksize: '&',
          xaxistickpadding: '&',
          xaxistickformat: '&',
          xaxislabel: '@',
          xaxisscale: '&',
          xaxisdomain: '&',
          xaxisrange: '&',
          xaxisrangeband: '&',
          xaxisrangebands: '&',
          xaxisshowmaxmin: '@',
          xaxishighlightzero: '@',
          xaxisrotatelabels: '@',
          xaxisrotateylabel: '@',
          xaxisstaggerlabels: '@',
          xaxislabeldistance: '@',

          //yaxis
          yaxisorient: '&',
          yaxisticks: '&',
          yaxistickvalues: '&yaxistickvalues',
          yaxisticksubdivide: '&',
          yaxisticksize: '&',
          yaxistickpadding: '&',
          yaxistickformat: '&',
          yaxislabel: '@',
          yaxisscale: '&',
          yaxisdomain: '&',
          yaxisrange: '&',
          yaxisrangeband: '&',
          yaxisrangebands: '&',
          yaxisshowmaxmin: '@',
          yaxishighlightzero: '@',
          yaxisrotatelabels: '@',
          yaxisrotateylabel: '@',
          yaxisstaggerlabels: '@',
          yaxislabeldistance: '@',

          data: '=',
          filtername: '=',
          filtervalue: '=',
          width: '@',
          height: '@',
          id: '@',
          showlegend: '@',
          tooltips: '@',
          showxaxis: '@',
          showyaxis: '@',
          rightalignyaxis: '@',
          defaultstate: '@',
          nodata: '@',
          margin: '&',
          tooltipcontent: '&',
          color: '&',
          x: '&',
          y: '&',
          forcex: '@',
          forcey: '@',
          isArea: '@',
          interactive: '@',
          clipedge: '@',
          clipvoronoi: '@',
          interpolate: '@',

          callback: '&',

          useinteractiveguideline: '@',

          showcontrols: '@',
          showDistX: '@',
          showDistY: '@',
          rightAlignYAxis: '@',
          fisheye: '@',
          xPadding: '@',
          yPadding: '@',
          tooltipContent: '&',
          tooltipXContent: '&',
          tooltipYContent: '&',
          transitionDuration: '@',
          shape: '&',
          onlyCircles: '@',
          size: '&',
          forceSize: '@',
          xrange: '&',
          xdomain: '&',
          xscale: '&',
          yrange: '&',
          ydomain: '&',
          yscale: '&',
          sizerange: '&',
          sizedomain: '&',
          zscale: '&',

          //angularjs specific
          objectequality: '@',  //$watch(watchExpression, listener, objectEquality)
          //d3.js specific
          transitionduration: '@',

          legendmargin: '&',
          legendwidth: '@',
          legendheight: '@',
          legendkey: '@',
          legendcolor: '&',
          legendalign: '@',
          legendrightalign: '@',
          legendupdatestate: '@',
          legendradiobuttonmode: '@'
        });
      },


      initializeMargin: function (scope, attrs){
        var margin = (scope.$eval(attrs.margin) || {left: 50, top: 50, bottom: 50, right: 50});
        if (typeof(margin) !== 'object') {
          // we were passed a vanilla int, convert to full margin object
          margin = {left: margin, top: margin, bottom: margin, right: margin};
        }
        scope.margin = margin;
      },


      getD3Selector: function (attrs, element) {
        if (!attrs.id) {
          //if an id is not supplied, create a random id.
          if (!attrs['data-chartid']) {
            angular.element(element).attr('data-chartid', 'chartid' + Math.floor(Math.random() * 1000000001));
          }
          return '[data-chartid=' + attrs['data-chartid'] + ']';
        } else {
          return '#' + attrs.id;
        }
      },


      checkElementID: function (scope, attrs, element, chart, data) {
        configureXaxis(chart, scope, attrs);
        configureX2axis(chart, scope, attrs);
        configureYaxis(chart, scope, attrs);
        configureY1axis(chart, scope, attrs);
        configureY2axis(chart, scope, attrs);
        configureLegend(chart, scope, attrs);
        processEvents(chart, scope);

        var svgElem = element.find('svg')[0];

        if (angular.isArray(data) && data.length === 0) {
          d3.select(svgElem).remove();
        }
        if (d3.select(svgElem).empty()) {
          d3.select(element)
              .append('svg');
        }
        d3.select(svgElem)
            .attr('viewBox', '0 0 ' + scope.width + ' ' + scope.height)
            .datum(data)
            .transition().duration((attrs.transitionduration === undefined ? 250 : (+attrs.transitionduration)))
            .call(chart);
      },


      updateDimensions: function (scope, attrs, element, chart) {
        if (chart) {
          chart.width(scope.width).height(scope.height);
          var d3Select = getD3Selector(attrs, element);
          d3.select(d3Select + ' svg')
              .attr('viewBox', '0 0 ' + scope.width + ' ' + scope.height);
          nv.utils.windowResize(chart);
          scope.chart.update();
        }
      }
    });
