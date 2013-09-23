/*! angularjs-nvd3-directives - v0.0.0 - 2013-09-22
* Copyright (c) 2013 Christian Maurer; Licensed Apache */
function configureXaxis(chart, scope, attrs){
"use strict";
    if(attrs.xaxisorient){
        chart.xAxis.orient(attrs.xaxisorient);
    }
    if(attrs.xaxisticks){
        chart.xAxis.scale().ticks(attrs.xaxisticks);
    }
    if(attrs.xaxistickvalues){
        if(Array.isArray(scope.$eval(attrs.xaxistickvalues))){
            chart.xAxis.tickValues(scope.$eval(attrs.xaxistickvalues));
        } else if(typeof scope.xaxistickvalues() === 'function'){
            chart.xAxis.tickValues(scope.xaxistickvalues());
        }
    }
    if(attrs.xaxisticksubdivide){
        chart.xAxis.tickSubdivide(scope.xaxisticksubdivide());
    }
    if(attrs.xaxisticksize){
        chart.xAxis.tickSize(scope.xaxisticksize());
    }
    if(attrs.xaxistickpadding){
        chart.xAxis.tickPadding(scope.xaxistickpadding());
    }
    if(attrs.xaxistickformat){
        chart.xAxis.tickFormat(scope.xaxistickformat());
    }
    if(attrs.xaxislabel){
        chart.xAxis.axisLabel(attrs.xaxislabel);
    }
    if(attrs.xaxisscale){
        chart.xAxis.xScale(scope.xaxisscale());
    }
    if(attrs.xaxisdomain){
        chart.xAxis.domain(scope.xaxisdomain());
    }
    if(attrs.xaxisrange){
        chart.xAxis.range(scope.xaxisrange());
    }
    if(attrs.xaxisrangeband){
        chart.xAxis.rangeBand(scope.xaxisrangeband());
    }
    if(attrs.xaxisrangebands){
        chart.xAxis.rangeBands(scope.xaxisrangebands());
    }
    if(attrs.xaxisshowmaxmin){
        chart.xAxis.showMaxMin((attrs.xaxisshowmaxmin === "true"));
    }
    if(attrs.xaxishighlightzero){
        chart.xAxis.highlightZero((attrs.xaxishighlightzero === "true"));
    }
    if(attrs.xaxisrotatelables){
        chart.xAxis.rotateLabels(attrs.xaxisrotatelables);
    }
//    if(attrs.xaxisrotateylabel){
//        chart.xAxis.rotateYLabel((attrs.xaxisrotateylabel === "true"));
//    }
    if(attrs.xaxisstaggerlabels){
        chart.xAxis.staggerLabels((attrs.xaxisstaggerlabels === "true"));
    }
}

function configureYaxis(chart, scope, attrs){
"use strict";
    if(attrs.yaxisorient){
        chart.yAxis.orient(attrs.yaxisorient);
    }
    if(attrs.yaxisticks){
        chart.yAxis.scale().ticks(attrs.yaxisticks);
    }
    if(attrs.yaxistickvalues){
        if(Array.isArray(scope.$eval(attrs.yaxistickvalues))){
            chart.yAxis.tickValues(scope.$eval(attrs.yaxistickvalues));
        } else if(typeof scope.yaxistickvalues() === 'function'){
            chart.yAxis.tickValues(scope.yaxistickvalues());
        }
    }
    if(attrs.yaxisticksubdivide){
        chart.yAxis.tickSubdivide(scope.yaxisticksubdivide());
    }
    if(attrs.yaxisticksize){
        chart.yAxis.tickSize(scope.yaxisticksize());
    }
    if(attrs.yaxistickpadding){
        chart.yAxis.tickPadding(scope.yaxistickpadding());
    }
    if(attrs.yaxistickformat){
        chart.yAxis.tickFormat(scope.yaxistickformat());
    }
    if(attrs.yaxislabel){
        chart.yAxis.axisLabel(attrs.yaxislabel);
    }
    if(attrs.yaxisscale){
        chart.yAxis.yScale(scope.yaxisscale());
    }
    if(attrs.yaxisdomain){
        chart.yAxis.domain(scope.yaxisdomain());
    }
    if(attrs.yaxisrange){
        chart.yAxis.range(scope.yaxisrange());
    }
    if(attrs.yaxisrangeband){
        chart.yAxis.rangeBand(scope.yaxisrangeband());
    }
    if(attrs.yaxisrangebands){
        chart.yAxis.rangeBands(scope.yaxisrangebands());
    }
    if(attrs.yaxisshowmaxmin){
        chart.yAxis.showMaxMin((attrs.yaxisshowmaxmin === "true"));
    }
    if(attrs.yaxishighlightzero){
        chart.yAxis.highlightZero((attrs.yaxishighlightzero === "true"));
    }
    if(attrs.yaxisrotatelables){
        chart.yAxis.rotateLables(attrs.yaxisrotatelables);
    }
    if(attrs.yaxisrotateylabel){
        chart.yAxis.rotateYLabel((attrs.yaxisrotateylabel === "true"));
    }
    if(attrs.yaxisstaggerlabels){
        chart.yAxis.staggerLabels((attrs.yaxisstaggerlabels === "true"));
    }
}


function configureY1axis(chart, scope, attrs){
    "use strict";
    if(attrs.y1axisticks){
        chart.y1Axis.scale().ticks(attrs.y1axisticks);
    }
    if(attrs.y1axistickvalues){
        chart.y1Axis.tickValues(attrs.y1axistickvalues);
    }
    if(attrs.y1axisticksubdivide){
        chart.y1Axis.tickSubdivide(scope.y1axisticksubdivide());
    }
    if(attrs.y1axisticksize){
        chart.y1Axis.tickSize(scope.y1axisticksize());
    }
    if(attrs.y1axistickpadding){
        chart.y1Axis.tickPadding(scope.y1axistickpadding());
    }
    if(attrs.y1axistickformat){
        chart.y1Axis.tickFormat(scope.y1axistickformat());
    }
    if(attrs.y1axislabel){
        chart.y1Axis.axisLabel(attrs.y1axislabel);
    }
    if(attrs.y1axisscale){
        chart.y1Axis.yScale(scope.y1axisscale());
    }
    if(attrs.y1axisdomain){
        chart.y1Axis.domain(scope.y1axisdomain());
    }
    if(attrs.y1axisrange){
        chart.y1Axis.range(scope.y1axisrange());
    }
    if(attrs.y1axisrangeband){
        chart.y1Axis.rangeBand(scope.y1axisrangeband());
    }
    if(attrs.y1axisrangebands){
        chart.y1Axis.rangeBands(scope.y1axisrangebands());
    }
    if(attrs.y1axisshowmaxmin){
        chart.y1Axis.showMaxMin((attrs.y1axisshowmaxmin === "true"));
    }
    if(attrs.y1axishighlightzero){
        chart.y1Axis.highlightZero((attrs.y1axishighlightzero === "true"));
    }
    if(attrs.y1axisrotatelables){
        chart.y1Axis.highlightZero(scope.y1axisrotatelables);
    }
    if(attrs.y1axisrotateylabel){
        chart.y1Axis.rotateYLabel((attrs.y1axisrotateylabel === "true"));
    }
    if(attrs.y1axisstaggerlabels){
        chart.y1Axis.staggerlabels((attrs.y1axisstaggerlabels === "true"));
    }
}


function configureY2axis(chart, scope, attrs){
    "use strict";
    if(attrs.y2axisticks){
        chart.y2Axis.scale().ticks(attrs.y2axisticks);
    }
    if(attrs.y2axistickvalues){
        chart.y2Axis.tickValues(scope.$eval(attrs.y2axistickvalues));
    }
    if(attrs.y2axisticksubdivide){
        chart.y2Axis.tickSubdivide(scope.y2axisticksubdivide());
    }
    if(attrs.y2axisticksize){
        chart.y2Axis.tickSize(scope.y2axisticksize());
    }
    if(attrs.y2axistickpadding){
        chart.y2Axis.tickPadding(scope.y2axistickpadding());
    }
    if(attrs.y2axistickformat){
        chart.y2Axis.tickFormat(scope.y2axistickformat());
    }
    if(attrs.y2axislabel){
        chart.y2Axis.axisLabel(attrs.y2axislabel);
    }
    if(attrs.y2axisscale){
        chart.y2Axis.yScale(scope.y2axisscale());
    }
    if(attrs.y2axisdomain){
        chart.y2Axis.domain(scope.y2axisdomain());
    }
    if(attrs.y2axisrange){
        chart.y2Axis.range(scope.y2axisrange());
    }
    if(attrs.y2axisrangeband){
        chart.y2Axis.rangeBand(scope.y2axisrangeband());
    }
    if(attrs.y2axisrangebands){
        chart.y2Axis.rangeBands(scope.y2axisrangebands());
    }
    if(attrs.y2axisshowmaxmin){
        chart.y2Axis.showMaxMin((attrs.y2axisshowmaxmin === "true"));
    }
    if(attrs.y2axishighlightzero){
        chart.y2Axis.highlightZero((attrs.y2axishighlightzero === "true"));
    }
    if(attrs.y2axisrotatelables){
        chart.y2Axis.highlightZero(scope.y2axisrotatelables);
    }
    if(attrs.y2axisrotateylabel){
        chart.y2Axis.rotateYLabel((attrs.y2axisrotateylabel === "true"));
    }
    if(attrs.y2axisstaggerlabels){
        chart.y2Axis.staggerlabels((attrs.y2axisstaggerlabels === "true"));
    }
}
angular.module('nvd3ChartDirectives', [])
    .directive('nvd3LineChart', ['$window', '$timeout', function($window, $timeout){
        "use strict";
        return {
            restrict: 'E',
            scope: {
                data: '=',
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

                //xaxis
                xaxisorient: '&',
                xaxisticks: '@',
                xaxistickvalues: '&xaxistickvalues',
                xaxisticksubdivide: '&',
                xaxisticksize: '&',
                xaxistickpadding: '&',
                xaxistickformat: '&',
                xaxislabel: '&',
                xaxisscale: '&',
                xaxisdomain: '&',
                xaxisrange: '&',
                xaxisrangeband: '&',
                xaxisrangebands: '&',
                xaxisshowmaxmin: '@',
                xaxishighlightzero: '@',
                xaxisrotatelables: '@',
                xaxisrotateylabel: '@',
                xaxisstaggerlabels: '@',

                //yaxis
                yaxisorient: '&',
                yaxisticks: '&',
                yaxistickvalues: '&yaxistickvalues',
                yaxisticksubdivide: '&',
                yaxisticksize: '&',
                yaxistickpadding: '&',
                yaxistickformat: '&',
                yaxislabel: '&',
                yaxisscale: '&',
                yaxisdomain: '&',
                yaxisrange: '&',
                yaxisrangeband: '&',
                yaxisrangebands: '&',
                yaxisshowmaxmin: '@',
                yaxishighlightzero: '@',
                yaxisrotatelables: '@',
                yaxisrotateylabel: '@',
                yaxisstaggerlabels: '@',

                //angularjs specific
                objectequality: '@',  //$watch(watchExpression, listener, objectEquality)

                //d3.js specific
                transitionduration: '@'

            },
            controller: function($scope, $element, $attrs){  //function($scope, $element, $attrs, $transclude)
                $scope.d3Call = function(data, chart){
                    d3.select('#' + $attrs.id + ' svg')
                        .attr('height', $scope.height)
                        .attr('width', $scope.width)
                        .datum(data)
                        .transition().duration(($attrs.transitionduration === undefined ? 500 : $attrs.transitionduration))
                        .call(chart);
                };
            },
            link: function(scope, element, attrs){
                scope.$watch('data', function(data){
                    if(data){
                        //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
                        if(scope.chart){
                            return scope.d3Call(data, scope.chart);
                        }
                        nv.addGraph({
                            generate: function(){
                                var margin = (scope.$eval(attrs.margin) || {left:50, top:50, bottom:50, right:50});

                                scope.width = (attrs.width || element[0].parentElement.offsetWidth) - (margin.left + margin.right);
                                scope.height = (attrs.height || element[0].parentElement.offsetHeight) - (margin.top + margin.bottom);

                                var chart = nv.models.lineChart()
                                    .width(scope.width)
                                    .height(scope.height)
                                    .margin(margin)
                                    .x(attrs.x === undefined ? function(d){ return d[0]; } : scope.x())
                                    .y(attrs.y === undefined ? function(d){ return d[1]; } : scope.y())
                                    .forceX(attrs.forcex === undefined ? [] : scope.$eval(attrs.forcex)) // List of numbers to Force into the X scale (ie. 0, or a max / min, etc.)
                                    .forceY(attrs.forcey === undefined ? [0] : scope.$eval(attrs.forcey)) // List of numbers to Force into the Y scale
                                    .showLegend(attrs.showlegend === undefined ? false : (attrs.showlegend === "true"))
                                    .tooltips(attrs.tooltips === undefined ? false : (attrs.tooltips  === "true"))
                                    .showXAxis(attrs.showxaxis === undefined ? false : (attrs.showxaxis  === "true"))
                                    .showYAxis(attrs.showyaxis === undefined ? false : (attrs.showyaxis  === "true"))
                                    .rightAlignYAxis(attrs.rightalignyaxis === undefined ? false : (attrs.rightalignyaxis  === "true"))
                                    .noData(attrs.nodata === undefined ? 'No Data Available.' : scope.nodata)
                                    .interactive(attrs.interactive === undefined ? false : (attrs.interactive === "true"))
                                    .clipEdge(attrs.clipedge === undefined ? false : (attrs.clipedge === "true"))
                                    .clipVoronoi(attrs.clipvoronoi === undefined ? false : (attrs.clipvoronoi === "true"))
                                    .interpolate(attrs.interpolate === undefined ? 'linear' : attrs.interpolate)
                                    .color(attrs.color === undefined ? nv.utils.defaultColor()  : scope.color())
                                    .isArea(attrs.isarea === undefined ? function(){return false;} : function(){ return (attrs.isarea === "true"); });

                                if(attrs.tooltipcontent){
                                    chart.tooltipContent(scope.tooltipcontent());
                                }

                                configureXaxis(chart, scope, attrs);
                                configureYaxis(chart, scope, attrs);

                                scope.d3Call(data, chart);

                                var chartResize = function() {
                                    var currentWidth = parseInt(d3.select('#' + attrs.id + ' svg').attr('width'), 10),
                                        currentHeight = parseInt(d3.select('#' + attrs.id + ' svg').attr('height'), 10),
                                        newWidth = (attrs.width || element[0].parentElement.offsetWidth) - (margin.left + margin.right),
                                        newHeight = (attrs.height || element[0].parentElement.offsetHeight) - (margin.top + margin.bottom);

                                    if(newHeight < 0){
                                        newHeight = 0;
                                    }

                                    if(newWidth === currentWidth && newHeight === currentHeight) {
                                        return; //Nothing to do, the size is fixed or not changing.
                                    }

                                    d3.select('#' + attrs.id + ' svg').node().remove(); // remove old graph first
                                    nv.log('newWidth',newWidth, 'newHeight', newHeight );
                                    chart.width(newWidth).height(newHeight); //Update the dims
                                    d3.select(element[0]).append("svg")
                                        .attr('id', attrs.id)
                                        .attr('width', newWidth)
                                        .attr('height', newHeight)
                                        .datum(data)
                                        .transition()
                                        .duration(500)
                                        .call(chart);
                                };

                                var timeoutPromise;
                                var windowResize = function() {
                                    $timeout.cancel(timeoutPromise);
                                    timeoutPromise = $timeout(chartResize, 100);
                                };
                                $window.addEventListener('resize', windowResize);
                                scope.chart = chart;
                                return chart;
                            }
                        });
                    }
                }, (attrs.objectequality === undefined ? false : (attrs.objectequality === "true")));
            }
        };
    }])
    .directive('nvd3CumulativeLineChart', ['$window', '$timeout', function($window, $timeout){
        "use strict";
        return {
            restrict: 'E',
            scope: {
                data: '=',
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
                usevoronoi: '@',
                average: '&',
                rescaley: '@',

                //xaxis
                xaxisorient: '&',
                xaxisticks: '&',
                xaxistickvalues: '&xaxistickvalues',
                xaxisticksubdivide: '&',
                xaxisticksize: '&',
                xaxistickpadding: '&',
                xaxistickformat: '&',
                xaxislabel: '&',
                xaxisscale: '&',
                xaxisdomain: '&',
                xaxisrange: '&',
                xaxisrangeband: '&',
                xaxisrangebands: '&',
                xaxisshowmaxmin: '@',
                xaxishighlightzero: '@',
                xaxisrotatelables: '@',
                xaxisrotateylabel: '@',
                xaxisstaggerlabels: '@',

                //yaxis
                yaxisorient: '&',
                yaxisticks: '&',
                yaxistickvalues: '&yaxistickvalues',
                yaxisticksubdivide: '&',
                yaxisticksize: '&',
                yaxistickpadding: '&',
                yaxistickformat: '&',
                yaxislabel: '&',
                yaxisscale: '&',
                yaxisdomain: '&',
                yaxisrange: '&',
                yaxisrangeband: '&',
                yaxisrangebands: '&',
                yaxisshowmaxmin: '@',
                yaxishighlightzero: '@',
                yaxisrotatelables: '@',
                yaxisrotateylabel: '@',
                yaxisstaggerlabels: '@',

                //angularjs specific
                objectequality: '@',  //$watch(watchExpression, listener, objectEquality)

                //d3.js specific
                transitionduration: '@'

            },
            controller: function($scope, $element, $attrs){
                $scope.d3Call = function(data, chart){
                    d3.select('#' + $attrs.id + ' svg')
                        .attr('height', $scope.height)
                        .attr('width', $scope.width)
                        .datum(data)
                        .transition().duration(($attrs.transitionduration === undefined ? 500 : $attrs.transitionduration))
                        .call(chart);
                };
            },
            link: function(scope, element, attrs){
                scope.$watch('data', function(data){
                    if(data){
                        //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
                        if(scope.chart){
                            return scope.d3Call(data, scope.chart);
                        }
                        nv.addGraph({
                            generate: function(){
                                var margin = (scope.$eval(attrs.margin) || {left:50, top:50, bottom:50, right:50});
                                scope.width = (attrs.width || element[0].parentElement.offsetWidth) - (margin.left + margin.right);
                                scope.height = (attrs.height || element[0].parentElement.offsetHeight) - (margin.top + margin.bottom);

                                var chart = nv.models.cumulativeLineChart()
                                    .width(scope.width)
                                    .height(scope.height)
                                    .margin(margin)
                                    .x(attrs.x === undefined ? function(d){ return d[0]; } : scope.x())
                                    .y(attrs.y === undefined ? function(d){ return d[1]; } : scope.y())
                                    .forceX(attrs.forcex === undefined ? [] : scope.$eval(attrs.forcex)) // List of numbers to Force into the X scale (ie. 0, or a max / min, etc.)
                                    .forceY(attrs.forcey === undefined ? [0] : scope.$eval(attrs.forcey)) // List of numbers to Force into the Y scale
                                    .showLegend(attrs.showlegend === undefined ? false : (attrs.showlegend === "true"))
                                    .tooltips(attrs.tooltips === undefined ? false : (attrs.tooltips  === "true"))
                                    .showXAxis(attrs.showxaxis === undefined ? false : (attrs.showxaxis  === "true"))
                                    .showYAxis(attrs.showyaxis === undefined ? false : (attrs.showyaxis  === "true"))
                                    .rightAlignYAxis(attrs.rightalignyaxis === undefined ? false : (attrs.rightalignyaxis  === "true"))
                                    .noData(attrs.nodata === undefined ? 'No Data Available.' : scope.nodata)
                                    .interactive(attrs.interactive === undefined ? false : (attrs.interactive === "true"))
                                    .clipEdge(attrs.clipedge === undefined ? false : (attrs.clipedge === "true"))
                                    .clipVoronoi(attrs.clipvoronoi === undefined ? false : (attrs.clipvoronoi === "true"))
                                    .useVoronoi(attrs.usevoronoi === undefined ? false : (attrs.usevoronoi === "true"))
                                    .average(attrs.average === undefined ? function(d) { return d.average; } : scope.average())
                                    .color(attrs.color === undefined ? d3.scale.category10().range() : scope.color())
                                    .isArea(attrs.isarea === undefined ? false : (attrs.isarea === "true"));
                                    //.rescaleY(attrs.rescaley === undefined ? false : (attrs.rescaley === "true"));

                                if(attrs.tooltipcontent){
                                    chart.tooltipContent(scope.tooltipcontent());
                                }

                                configureXaxis(chart, scope, attrs);
                                configureYaxis(chart, scope, attrs);

                                scope.d3Call(data, chart);

                                var chartResize = function() {
                                    var currentWidth = parseInt(d3.select('#' + attrs.id + ' svg').attr('width'),10),
                                        currentHeight = parseInt(d3.select('#' + attrs.id + ' svg').attr('height'),10),
                                        newWidth = (attrs.width || element[0].parentElement.offsetWidth) - (margin.left + margin.right),
                                        newHeight = (attrs.height || element[0].parentElement.offsetHeight) - (margin.top + margin.bottom);

                                    if(newHeight < 0){
                                        newHeight = 0;
                                    }

                                    if(newWidth === currentWidth && newHeight === currentHeight) {
                                        return; //Nothing to do, the size is fixed or not changing.
                                    }

                                    d3.select('#' + attrs.id + ' svg').node().remove(); // remove old graph first
                                    nv.log('newWidth',newWidth, 'newHeight', newHeight );
                                    chart.width(newWidth).height(newHeight); //Update the dims
                                    d3.select(element[0]).append("svg")
                                        .attr('id', attrs.id)
                                        .attr('width', newWidth)
                                        .attr('height', newHeight)
                                        .datum(data)
                                        .transition()
                                        .call(chart);
                                };

                                var timeoutPromise;
                                var windowResize = function() {
                                    $timeout.cancel(timeoutPromise);
                                    timeoutPromise = $timeout(chartResize, 100);
                                };
                                $window.addEventListener('resize', windowResize);
                                scope.chart = chart;
                                return chart;
                            }
                        });
                    }
                }, (attrs.objectequality === undefined ? false : (attrs.objectequality === "true")));
            }
        };
    }])
    .directive('nvd3StackedAreaChart', ['$window', '$timeout', function($window, $timeout){
        return {
            restrict: 'E',
            scope: {
                data: '=',
                width: '@',
                height: '@',
                id: '@',
                showlegend: '@',
                tooltips: '@',
                showcontrols: '@',
                nodata: '@',
                margin: '&',
                tooltipcontent: '&',
                color: '&',
                x: '&',
                y: '&',
                forcex: '@', //List of numbers to Force into the X scale (ie. 0, or a max / min, etc.)
                forcey: '@', // List of numbers to Force into the Y scale
                forcesize: '@', // List of numbers to Force into the Size scale

                interactive: '@',
                usevoronoi: '@',
                clipedge: '@',
                interpolate: '@',
                style: '@',     //stack, stream, stream-center, expand
                order: '@',     //default, inside-out
                offset: '@',    //zero, wiggle, silhouette, expand
                size: '&',      //accessor to get the point size
                xScale: '&',
                yScale: '&',
                xDomain: '&',
                yDomain: '&',
                xRange: '&',
                yRange: '&',
                sizeDomain: '&',

                //xaxis
                xaxisorient: '&',
                xaxisticks: '&',
                xaxistickvalues: '&xaxistickvalues',
                xaxisticksubdivide: '&',
                xaxisticksize: '&',
                xaxistickpadding: '&',
                xaxistickformat: '&',
                xaxislabel: '&',
                xaxisscale: '&',
                xaxisdomain: '&',
                xaxisrange: '&',
                xaxisrangeband: '&',
                xaxisrangebands: '&',
                xaxisshowmaxmin: '@',
                xaxishighlightzero: '@',
                xaxisrotatelables: '@',
                xaxisrotateylabel: '@',
                xaxisstaggerlabels: '@',

                //yaxis
                yaxisorient: '&',
                yaxisticks: '&',
                yaxistickvalues: '&yaxistickvalues',
                yaxisticksubdivide: '&',
                yaxisticksize: '&',
                yaxistickpadding: '&',
                yaxistickformat: '&',
                yaxislabel: '&',
                yaxisscale: '&',
                yaxisdomain: '&',
                yaxisrange: '&',
                yaxisrangeband: '&',
                yaxisrangebands: '&',
                yaxisshowmaxmin: '@',
                yaxishighlightzero: '@',
                yaxisrotatelables: '@',
                yaxisrotateylabel: '@',
                yaxisstaggerlabels: '@',

                //angularjs specific
                objectequality: '@',

                //d3.js specific
                transitionduration: '@'


            },
            controller: function($scope, $element, $attrs){
                $scope.d3Call = function(data, chart){
                    d3.select('#' + $attrs.id + ' svg')
                        .attr('height', $scope.height)
                        .attr('width', $scope.width)
                        .datum(data)
                        .transition().duration(($attrs.transitionduration === undefined ? 500 : $attrs.transitionduration))
                        .call(chart);
                };
            },
            link: function(scope, element, attrs){
                scope.$watch('data', function(data){
                    if(data){
                        //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
                        if(scope.chart){
                            return scope.d3Call(data, scope.chart);
                        }
                        nv.addGraph({
                            generate: function(){
                                var margin = (scope.$eval(attrs.margin) || {left:50, top:50, bottom:50, right:50});
                                scope.width = (attrs.width || element[0].parentElement.offsetWidth) - (margin.left + margin.right);
                                scope.height = (attrs.height || element[0].parentElement.offsetHeight) - (margin.top + margin.bottom);

                                var chart = nv.models.stackedAreaChart()
                                    .width(scope.width)
                                    .height(scope.height)
                                    .margin(margin)
                                    .x(attrs.x === undefined ? function(d){ return d[0]; } : scope.x())
                                    .y(attrs.y === undefined ? function(d){ return d[1]; } : scope.y())
                                    .forceX(attrs.forcex === undefined ? [] : scope.$eval(attrs.forcex)) // List of numbers to Force into the X scale (ie. 0, or a max / min, etc.)
                                    .forceY(attrs.forcey === undefined ? [0] : scope.$eval(attrs.forcey)) // List of numbers to Force into the Y scale
                                    .size(attrs.size === undefined ? function(d) { return d.size || 1; } : scope.size())
                                    .forceSize(attrs.forcesize === undefined ? [] : scope.$eval(attrs.forcesize)) // List of numbers to Force into the Size scale
                                    .showLegend(attrs.showlegend === undefined ? false : (attrs.showlegend === "true"))
                                    .showControls(attrs.showcontrols === undefined ? false : (attrs.showcontrols === "true"))
                                    .tooltips(attrs.tooltips === undefined ? false : (attrs.tooltips  === "true"))
                                    .noData(attrs.nodata === undefined ? 'No Data Available.' : scope.nodata)
                                    .interactive(attrs.interactive === undefined ? false : (attrs.interactive === "true"))
                                    .clipEdge(attrs.clipedge === undefined ? false : (attrs.clipedge === "true"))
                                    .color(attrs.color === undefined ? nv.utils.defaultColor()  : scope.color());

                                if(attrs.usevoronoi){
                                    chart.useVoronoi((attrs.usevoronoi === "true"));
                                }

                                if(attrs.style){
                                    chart.style(attrs.style);
                                }

                                if(attrs.order){
                                    chart.order(attrs.order);
                                }

                                if(attrs.offset){
                                    chart.offset(attrs.offset);
                                }

                                if(attrs.interpolate){
                                    chart.interpolate(attrs.interpolate);
                                }

                                if(attrs.tooltipcontent){
                                    chart.tooltipContent(scope.tooltipcontent());
                                }

                                if(attrs.xscale){
                                    chart.xScale(scope.xscale());
                                }

                                if(attrs.yscale){
                                    chart.yScale(scope.yscale());
                                }

                                if(attrs.xdomain){
                                    chart.xDomain(scope.xdomain());
                                }

                                if(attrs.ydomain){
                                    chart.yDomain(scope.ydomain());
                                }

                                if(attrs.sizedomain){
                                    chart.sizeDomain(scope.sizedomain());
                                }

                                configureXaxis(chart, scope, attrs);
                                configureYaxis(chart, scope, attrs);

                                scope.d3Call(data, chart);

                                var chartResize = function() {
                                    var currentWidth = parseInt(d3.select('#' + attrs.id + ' svg').attr('width'),10),
                                        currentHeight = parseInt(d3.select('#' + attrs.id + ' svg').attr('height'),10),
                                        newWidth = (attrs.width || element[0].parentElement.offsetWidth) - (margin.left + margin.right),
                                        newHeight = (attrs.height || element[0].parentElement.offsetHeight) - (margin.top + margin.bottom);

                                    if(newWidth === currentWidth && newHeight === currentHeight) {
                                        return; //Nothing to do, the size is fixed or not changing.
                                    }

                                    d3.select('#' + attrs.id + ' svg').node().remove(); // remove old graph first

                                    chart.width(newWidth).height(newHeight); //Update the dims
                                    d3.select(element[0]).append("svg")
                                        .attr('id', attrs.id)
                                        .attr('width', newWidth)
                                        .attr('height', newHeight)
                                        .datum(data)
                                        .transition()
                                        .duration(500)
                                        .call(chart);
                                };

                                var timeoutPromise;
                                var windowResize = function() {
                                    $timeout.cancel(timeoutPromise);
                                    timeoutPromise = $timeout(chartResize, 100);
                                };

                                $window.addEventListener('resize', windowResize);
                                scope.chart = chart;
                                return chart;
                            }
                        });
                    }
                }, (attrs.objectequality === undefined ? false : (attrs.objectequality === "true")));
            }
        };
    }])
    .directive('nvd3MultiBarChart', ['$window', '$timeout', function($window, $timeout){
        return {
            restrict: 'E',
            scope: {
                data: '=',
                width: '@',
                height: '@',
                id: '@',
                showlegend: '@',
                tooltips: '@',
                tooltipcontent: '&',
                color: '&',
                showcontrols: '@',
                nodata: '@',
                reducexticks: '@',
                staggerlabels: '@',
                rotatelabels: '@',
                margin: '&',
                x: '&',
                y: '&',
                //forcex is not exposed in the nvd3 multibar.js file.  it is not here on purpose.
                forcey: '@',
                delay: '@',
                stacked: '@',

                //xaxis
                xaxisorient: '&',
                xaxisticks: '&',
                xaxistickvalues: '&xaxistickvalues',
                xaxisticksubdivide: '&',
                xaxisticksize: '&',
                xaxistickpadding: '&',
                xaxistickformat: '&',
                xaxislabel: '&',
                xaxisscale: '&',
                xaxisdomain: '&',
                xaxisrange: '&',
                xaxisrangeband: '&',
                xaxisrangebands: '&',
                xaxisshowmaxmin: '@',
                xaxishighlightzero: '@',
                xaxisrotatelables: '@',
                xaxisrotateylabel: '@',
                xaxisstaggerlabels: '@',

                //yaxis
                yaxisorient: '&',
                yaxisticks: '&',
                yaxistickvalues: '&yaxistickvalues',
                yaxisticksubdivide: '&',
                yaxisticksize: '&',
                yaxistickpadding: '&',
                yaxistickformat: '&',
                yaxislabel: '&',
                yaxisscale: '&',
                yaxisdomain: '&',
                yaxisrange: '&',
                yaxisrangeband: '&',
                yaxisrangebands: '&',
                yaxisshowmaxmin: '@',
                yaxishighlightzero: '@',
                yaxisrotatelables: '@',
                yaxisrotateylabel: '@',
                yaxisstaggerlabels: '@',

                //angularjs specific
                objectequality: '@',

                //d3.js specific
                transitionduration: '@'


            },
            controller: function($scope, $element, $attrs){
                $scope.d3Call = function(data, chart){
                    d3.select('#' + $attrs.id + ' svg')
                        .attr('height', $scope.height)
                        .attr('width', $scope.width)
                        .datum(data)
                        .transition().duration(($attrs.transitionduration === undefined ? 500 : $attrs.transitionduration))
                        .call(chart);
                };
            },
            link: function(scope, element, attrs){
                scope.$watch('data', function(data){
                    if(data){
                        //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
                        if(scope.chart){
                            return scope.d3Call(data, scope.chart);
                        }
                        nv.addGraph({
                            generate: function(){
                                var margin = (scope.$eval(attrs.margin) || {left:50, top:50, bottom:50, right:50});
                                scope.width = (attrs.width || element[0].parentElement.offsetWidth) - (margin.left + margin.right);
                                scope.height = (attrs.height || element[0].parentElement.offsetHeight) - (margin.top + margin.bottom);

                                var chart = nv.models.multiBarChart()
                                    .width(scope.width)
                                    .height(scope.height)
                                    .margin(margin)
                                    .x(attrs.x === undefined ? function(d){ return d[0]; } : scope.x())
                                    .y(attrs.y === undefined ? function(d){ return d[1]; } : scope.y())
                                    .forceY(attrs.forcey === undefined ? [0] : scope.$eval(attrs.forcey)) // List of numbers to Force into the Y scale
                                    .showLegend(attrs.showlegend === undefined ? false : (attrs.showlegend === "true"))
                                    .showControls(attrs.showcontrols === undefined ? false : (attrs.showcontrols === "true"))
                                    .tooltips(attrs.tooltips === undefined ? false : (attrs.tooltips  === "true"))
                                    .reduceXTicks(attrs.reducexticks === undefined ? false: (attrs.reducexticks === "true"))
                                    .staggerLabels(attrs.staggerlabels === undefined ? false : (attrs.staggerlabels === "true"))
                                    .noData(attrs.nodata === undefined ? 'No Data Available.' : scope.nodata)
                                    .rotateLabels(attrs.rotatelabels === undefined ? 0 : attrs.rotatelabels)
                                    .color(attrs.color === undefined ? nv.utils.defaultColor()  : scope.color())
                                    .delay(attrs.delay === undefined ? 1200 : attrs.delay)
                                    .stacked(attrs.stacked === undefined ? false : (attrs.stacked === "true"));

                                configureXaxis(chart, scope, attrs);
                                configureYaxis(chart, scope, attrs);

                                if(attrs.tooltipcontent){
                                    chart.tooltipContent(scope.tooltipcontent());
                                }

                                scope.d3Call(data, chart);

                                var chartResize = function() {
                                    var currentWidth = parseInt(d3.select('#' + attrs.id + ' svg').attr('width'),10),
                                        currentHeight = parseInt(d3.select('#' + attrs.id + ' svg').attr('height'),10),
                                        newWidth = (attrs.width || element[0].parentElement.offsetWidth) - (margin.left + margin.right),
                                        newHeight = (attrs.height || element[0].parentElement.offsetHeight) - (margin.top + margin.bottom);

                                    if(newWidth === currentWidth && newHeight === currentHeight) {
                                        return; //Nothing to do, the size is fixed or not changing.
                                    }

                                    d3.select('#' + attrs.id + ' svg').node().remove(); // remove old graph first

                                    chart.width(newWidth).height(newHeight); //Update the dims
                                    d3.select(element[0]).append("svg")
                                        .attr('id', attrs.id)
                                        .attr('width', newWidth)
                                        .attr('height', newHeight)
                                        .datum(data)
                                        .transition()
                                        .duration(500)
                                        .call(chart);
                                };

                                var timeoutPromise;
                                var windowResize = function() {
                                    $timeout.cancel(timeoutPromise);
                                    timeoutPromise = $timeout(chartResize, 100);
                                };

                                $window.addEventListener('resize', windowResize);
                                scope.chart = chart;
                                return chart;
                            }
                        });
                    }
                }, (attrs.objectequality === undefined ? false : (attrs.objectequality === "true")));
            }
        };
    }])
    .directive('nvd3DiscreteBarChart', ['$window', '$timeout', function($window, $timeout){
        return {
            restrict: 'E',
            scope: {
                data: '=',
                width: '@',
                height: '@',
                id: '@',
                tooltips: '@',
                tooltipcontent: '&',
                staggerlabels: '@',
                color: '&',
                margin: '&',
                nodata: '@',
                x: '&',
                y: '&',
                //forcex is not exposed in the nvd3 multibar.js file.  it is not here on purpose.
                forcey: '@',
                showvalues: '@',
                valueformat: '&',

                //xaxis
                xaxisorient: '&',
                xaxisticks: '&',
                xaxistickvalues: '&xaxistickvalues',
                xaxisticksubdivide: '&',
                xaxisticksize: '&',
                xaxistickpadding: '&',
                xaxistickformat: '&',
                xaxislabel: '&',
                xaxisscale: '&',
                xaxisdomain: '&',
                xaxisrange: '&',
                xaxisrangeband: '&',
                xaxisrangebands: '&',
                xaxisshowmaxmin: '@',
                xaxishighlightzero: '@',
                xaxisrotatelables: '@',
                xaxisrotateylabel: '@',
                xaxisstaggerlabels: '@',

                //yaxis
                yaxisorient: '&',
                yaxisticks: '&',
                yaxistickvalues: '&yaxistickvalues',
                yaxisticksubdivide: '&',
                yaxisticksize: '&',
                yaxistickpadding: '&',
                yaxistickformat: '&',
                yaxislabel: '&',
                yaxisscale: '&',
                yaxisdomain: '&',
                yaxisrange: '&',
                yaxisrangeband: '&',
                yaxisrangebands: '&',
                yaxisshowmaxmin: '@',
                yaxishighlightzero: '@',
                yaxisrotatelables: '@',
                yaxisrotateylabel: '@',
                yaxisstaggerlabels: '@',

                //angularjs specific
                objectequality: '@',

                //d3.js specific
                transitionduration: '@'

            },
            controller: function($scope, $element, $attrs){
                $scope.d3Call = function(data, chart){
                    d3.select('#' + $attrs.id + ' svg')
                        .attr('height', $scope.height)
                        .attr('width', $scope.width)
                        .datum(data)
                        .transition().duration(($attrs.transitionduration === undefined ? 500 : $attrs.transitionduration))
                        .call(chart);
                };
            },
            link: function(scope, element, attrs){
                scope.$watch('data', function(data){
                    if(data){
                        //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
                        if(scope.chart){
                            return scope.d3Call(data, scope.chart);
                        }
                        nv.addGraph({
                            generate: function(){
                                var margin = (scope.$eval(attrs.margin) || {left:50, top:50, bottom:50, right:50});
                                scope.width = (attrs.width || element[0].parentElement.offsetWidth) - (margin.left + margin.right);
                                scope.height = (attrs.height || element[0].parentElement.offsetHeight) - (margin.top + margin.bottom);

                                var chart = nv.models.discreteBarChart()
                                    .width(scope.width)
                                    .height(scope.height)
                                    .margin(margin)
                                    .x(attrs.x === undefined ? function(d){ return d[0]; } : scope.x())
                                    .y(attrs.y === undefined ? function(d){ return d[1]; } : scope.y())
                                    .forceY(attrs.forcey === undefined ? [0] : scope.$eval(attrs.forcey)) // List of numbers to Force into the Y scale
                                    .showValues(attrs.showvalues === undefined ? false : (attrs.showvalues === "true"))
                                    .tooltips(attrs.tooltips === undefined ? false : (attrs.tooltips  === "true"))
                                    .noData(attrs.nodata === undefined ? 'No Data Available.' : scope.nodata)
                                    .staggerLabels(attrs.staggerlabels === undefined ? false : (attrs.staggerlabels === "true"))
                                    .color(attrs.color === undefined ? nv.utils.defaultColor()  : scope.color());

                                configureXaxis(chart, scope, attrs);
                                configureYaxis(chart, scope, attrs);

                                if(attrs.tooltipcontent){
                                    chart.tooltipContent(scope.tooltipcontent());
                                }

                                if(attrs.valueformat){
                                    chart.valueFormat(scope.valueformat());
                                }

                                scope.d3Call(data, chart);

                                var chartResize = function() {
                                    var currentWidth = parseInt(d3.select('#' + attrs.id + ' svg').attr('width'),10),
                                        currentHeight = parseInt(d3.select('#' + attrs.id + ' svg').attr('height'),10),
                                        newWidth = (attrs.width || element[0].parentElement.offsetWidth) - (margin.left + margin.right),
                                        newHeight = (attrs.height || element[0].parentElement.offsetHeight) - (margin.top + margin.bottom);

                                    if(newWidth === currentWidth && newHeight === currentHeight) {
                                        return; //Nothing to do, the size is fixed or not changing.
                                    }

                                    d3.select('#' + attrs.id + ' svg').node().remove(); // remove old graph first

                                    chart.width(newWidth).height(newHeight); //Update the dims
                                    d3.select(element[0]).append("svg")
                                        .attr('id', attrs.id)
                                        .attr('width', newWidth)
                                        .attr('height', newHeight)
                                        .datum(data)
                                        .transition()
                                        .duration(500)
                                        .call(chart);
                                };

                                var timeoutPromise;
                                var windowResize = function() {
                                    $timeout.cancel(timeoutPromise);
                                    timeoutPromise = $timeout(chartResize, 100);
                                };

                                $window.addEventListener('resize', windowResize);
                                scope.chart = chart;
                                return chart;
                            }
                        });
                    }
                }, (attrs.objectequality === undefined ? false : (attrs.objectequality === "true")));
            }
        };
    }])
    .directive('nvd3HistoricalBarChart', ['$window', '$timeout', function($window, $timeout){
        return {
            restrict: 'E',
            scope: {
                data: '=',
                width: '@',
                height: '@',
                id: '@',
                tooltips: '@',
                tooltipcontent: '&',
                color: '&',
                margin: '&',
                nodata: '@',
                x: '&',
                y: '&',
//                forcex: '@',
                forcey: '@',
                isarea: '@',
                interactive: '@',
                clipedge: '@',
                clipvoronoi: '@',
                interpolate: '@',
                highlightPoint: '@',
                clearHighlights: '@',

                //xaxis
                xaxisorient: '&',
                xaxisticks: '&',
                xaxistickvalues: '&xaxistickvalues',
                xaxisticksubdivide: '&',
                xaxisticksize: '&',
                xaxistickpadding: '&',
                xaxistickformat: '&',
                xaxislabel: '&',
                xaxisscale: '&',
                xaxisdomain: '&',
                xaxisrange: '&',
                xaxisrangeband: '&',
                xaxisrangebands: '&',
                xaxisshowmaxmin: '@',
                xaxishighlightzero: '@',
                xaxisrotatelables: '@',
                xaxisrotateylabel: '@',
                xaxisstaggerlabels: '@',

                //yaxis
                yaxisorient: '&',
                yaxisticks: '&',
                yaxistickvalues: '&yaxistickvalues',
                yaxisticksubdivide: '&',
                yaxisticksize: '&',
                yaxistickpadding: '&',
                yaxistickformat: '&',
                yaxislabel: '&',
                yaxisscale: '&',
                yaxisdomain: '&',
                yaxisrange: '&',
                yaxisrangeband: '&',
                yaxisrangebands: '&',
                yaxisshowmaxmin: '@',
                yaxishighlightzero: '@',
                yaxisrotatelables: '@',
                yaxisrotateylabel: '@',
                yaxisstaggerlabels: '@',

                //angularjs specific
                objectequality: '@',

                //d3.js specific
                transitionduration: '@'

            },
            controller: function($scope, $element, $attrs){
                $scope.d3Call = function(data, chart){
                    d3.select('#' + $attrs.id + ' svg')
                        .attr('height', $scope.height)
                        .attr('width', $scope.width)
                        .datum(data)
                        .transition().duration(($attrs.transitionduration === undefined ? 500 : $attrs.transitionduration))
                        .call(chart);
                };
            },
            link: function(scope, element, attrs){
                scope.$watch('data', function(data){
                    if(data){
                        //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
                        if(scope.chart){
                            return scope.d3Call(data, scope.chart);
                        }
                        nv.addGraph({
                            generate: function(){
                                var margin = (scope.$eval(attrs.margin) || {left:50, top:50, bottom:50, right:50});
                                    scope.width = (attrs.width || element[0].parentElement.offsetWidth) - (margin.left + margin.right);
                                    scope.height = (attrs.height || element[0].parentElement.offsetHeight) - (margin.top + margin.bottom);

                                var chart = nv.models.historicalBarChart()
                                    .width(scope.width)
                                    .height(scope.height)
                                    .margin(margin)
                                    .x(attrs.x === undefined ? function(d){ return d[0]; } : scope.x())
                                    .y(attrs.y === undefined ? function(d){ return d[1]; } : scope.y())
                                    .forceY(attrs.forcey === undefined ? [0] : scope.$eval(attrs.forcey)) // List of numbers to Force into the Y scale
                                    .tooltips(attrs.tooltips === undefined ? false : (attrs.tooltips  === "true"))
                                    .noData(attrs.nodata === undefined ? 'No Data Available.' : scope.nodata)
                                    .interactive(attrs.interactive === undefined ? false : (attrs.interactive === "true"))
                                    .color(attrs.color === undefined ? nv.utils.defaultColor()  : scope.color());

                                configureXaxis(chart, scope, attrs);
                                configureYaxis(chart, scope, attrs);

                                if(attrs.tooltipcontent){
                                    chart.tooltipContent(scope.tooltipcontent());
                                }

                                if(attrs.valueformat){
                                    chart.valueFormat(scope.valueformat());
                                }

                                scope.d3Call(data, chart);

                                var chartResize = function() {
                                    var currentWidth = parseInt(d3.select('#' + attrs.id + ' svg').attr('width'),10),
                                        currentHeight = parseInt(d3.select('#' + attrs.id + ' svg').attr('height'),10),
                                        newWidth = (attrs.width || element[0].parentElement.offsetWidth) - (margin.left + margin.right),
                                        newHeight = (attrs.height || element[0].parentElement.offsetHeight) - (margin.top + margin.bottom);

                                    if(newWidth === currentWidth && newHeight === currentHeight) {
                                        return; //Nothing to do, the size is fixed or not changing.
                                    }

                                    d3.select('#' + attrs.id + ' svg').node().remove(); // remove old graph first

                                    chart.width(newWidth).height(newHeight); //Update the dims
                                    d3.select(element[0]).append("svg")
                                        .attr('id', attrs.id)
                                        .attr('width', newWidth)
                                        .attr('height', newHeight)
                                        .datum(data)
                                        .transition()
                                        .duration(500)
                                        .call(chart);
                                };

                                var timeoutPromise;
                                var windowResize = function() {
                                    $timeout.cancel(timeoutPromise);
                                    timeoutPromise = $timeout(chartResize, 100);
                                };

                                $window.addEventListener('resize', windowResize);
                                scope.chart = chart;
                                return chart;
                            }
                        });
                    }
                }, (attrs.objectequality === undefined ? false : (attrs.objectequality === "true")));
            }
        };
    }])
    .directive('nvd3MultiBarHorizontalChart', ['$window', '$timeout', function($window, $timeout){
        return {
            restrict: 'E',
            scope: {
                data: '=',
                width: '@',
                height: '@',
                id: '@',
                showlegend: '@',
                tooltips: '@',
                tooltipcontent: '&',
                color: '&',
                showcontrols: '@',
                margin: '&',
                nodata: '@',
                x: '&',
                y: '&',
                //forcex: '@',  //forcex is rebound from multibarhorizontalchart, but is not on multibar
                forcey: '@',
                stacked: '@',
                showvalues: '@',
                valueformat: '&',
                //'xDomain', 'yDomain',
                //state: '@', //stacked, grouped: same as stacked === true, or stacked === false

                //xaxis
                xaxisorient: '&',
                xaxisticks: '&',
                xaxistickvalues: '&xaxistickvalues',
                xaxisticksubdivide: '&',
                xaxisticksize: '&',
                xaxistickpadding: '&',
                xaxistickformat: '&',
                xaxislabel: '&',
                xaxisscale: '&',
                xaxisdomain: '&',
                xaxisrange: '&',
                xaxisrangeband: '&',
                xaxisrangebands: '&',
                xaxisshowmaxmin: '@',
                xaxishighlightzero: '@',
                xaxisrotatelables: '@',
                xaxisrotateylabel: '@',
                xaxisstaggerlabels: '@',

                //yaxis
                yaxisorient: '&',
                yaxisticks: '&',
                yaxistickvalues: '&yaxistickvalues',
                yaxisticksubdivide: '&',
                yaxisticksize: '&',
                yaxistickpadding: '&',
                yaxistickformat: '&',
                yaxislabel: '&',
                yaxisscale: '&',
                yaxisdomain: '&',
                yaxisrange: '&',
                yaxisrangeband: '&',
                yaxisrangebands: '&',
                yaxisshowmaxmin: '@',
                yaxishighlightzero: '@',
                yaxisrotatelables: '@',
                yaxisrotateylabel: '@',
                yaxisstaggerlabels: '@',

                //angularjs specific
                objectequality: '@',

                //d3.js specific
                transitionduration: '@'

            },
            controller: function($scope, $element, $attrs){
                $scope.d3Call = function(data, chart){
                    d3.select('#' + $attrs.id + ' svg')
                        .attr('height', $scope.height)
                        .attr('width', $scope.width)
                        .datum(data)
                        .transition().duration(($attrs.transitionduration === undefined ? 500 : $attrs.transitionduration))
                        .call(chart);
                };
            },
            link: function(scope, element, attrs){
                scope.$watch('data', function(data){
                    if(data){
                        //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
                        if(scope.chart){
                            return scope.d3Call(data, scope.chart);
                        }
                        nv.addGraph({
                            generate: function(){
                                var margin = (scope.$eval(attrs.margin) || {left:50, top:50, bottom:50, right:50});
                                    scope.width = (attrs.width || element[0].parentElement.offsetWidth) - (margin.left + margin.right);
                                    scope.height = (attrs.height || element[0].parentElement.offsetHeight) - (margin.top + margin.bottom);

                                var chart = nv.models.multiBarHorizontalChart()
                                    .width(scope.width)
                                    .height(scope.height)
                                    .margin(margin)
                                    .x(attrs.x === undefined ? function(d){ return d[0]; } : scope.x())
                                    .y(attrs.y === undefined ? function(d){ return d[1]; } : scope.y())
                                    .forceY(attrs.forcey === undefined ? [0] : scope.$eval(attrs.forcey))
                                    .tooltips(attrs.tooltips === undefined ? false : (attrs.tooltips  === "true"))
                                    .noData(attrs.nodata === undefined ? 'No Data Available.' : scope.nodata)
                                    .color(attrs.color === undefined ? nv.utils.defaultColor()  : scope.color())
                                    .showLegend(attrs.showlegend === undefined ? false : (attrs.showlegend === "true"))
                                    .showControls(attrs.showcontrols === undefined ? false : (attrs.showcontrols === "true"))
                                    .showValues(attrs.showvalues === undefined ? false : (attrs.showvalues === "true"))
                                    .stacked(attrs.stacked === undefined ? false : (attrs.stacked === "true"));

                                configureXaxis(chart, scope, attrs);
                                configureYaxis(chart, scope, attrs);

                                if(attrs.tooltipcontent){
                                    chart.tooltipContent(scope.tooltipcontent());
                                }

                                if(attrs.valueformat){
                                    chart.valueFormat(scope.valueformat());
                                }

                                scope.d3Call(data, chart);

                                var chartResize = function() {
                                    var currentWidth = parseInt(d3.select('#' + attrs.id + ' svg').attr('width'),10),
                                        currentHeight = parseInt(d3.select('#' + attrs.id + ' svg').attr('height'),10),
                                        newWidth = (attrs.width || element[0].parentElement.offsetWidth) - (margin.left + margin.right),
                                        newHeight = (attrs.height || element[0].parentElement.offsetHeight) - (margin.top + margin.bottom);

                                    if(newWidth === currentWidth && newHeight === currentHeight) {
                                        return; //Nothing to do, the size is fixed or not changing.
                                    }

                                    d3.select('#' + attrs.id + ' svg').node().remove(); // remove old graph first

                                    chart.width(newWidth).height(newHeight); //Update the dims
                                    d3.select(element[0]).append("svg")
                                        .attr('id', attrs.id)
                                        .attr('width', newWidth)
                                        .attr('height', newHeight)
                                        .datum(data)
                                        .transition()
                                        .duration(500)
                                        .call(chart);
                                };

                                var timeoutPromise;
                                var windowResize = function() {
                                    $timeout.cancel(timeoutPromise);
                                    timeoutPromise = $timeout(chartResize, 100);
                                };

                                $window.addEventListener('resize', windowResize);
                                scope.chart = chart;
                                return chart;
                            }
                        });
                    }
                }, (attrs.objectequality === undefined ? false : (attrs.objectequality === "true")));
            }
        };
    }])
    .directive('nvd3PieChart', ['$window', '$timeout', function($window, $timeout){
        return {
            restrict: 'E',
            scope: {
                data: '=',
                width: '@',
                height: '@',
                id: '@',
                showlabels: '@',
                showlegend: '@',
                donutLabelsOutside: '@',
                pieLabelsOutside: '@',
                labelType: '@',
                nodata: '@',
                margin: '&',
                x: '&',
                y: '&',
                color: '&',
                donut: '@',
                donutRatio: '@',
                labelThreshold: '@',
                description: '&',
                tooltips: '@',
                tooltipcontent: '&',
                valueFormat: '&',

                //angularjs specific
                objectequality: '@',

                //d3.js specific
                transitionduration: '@'

            },
            controller: function($scope, $element, $attrs){
                $scope.d3Call = function(data, chart){
                    d3.select('#' + $attrs.id + ' svg')
                        .attr('height', $scope.height)
                        .attr('width', $scope.width)
                        .datum(data)
                        .transition().duration(($attrs.transitionduration === undefined ? 500 : $attrs.transitionduration))
                        .call(chart);
                };
            },
            link: function(scope, element, attrs){
                scope.$watch('data', function(data){
                    if(data){
                        //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
                        if(scope.chart){
                            return scope.d3Call(data, scope.chart);
                        }
                        nv.addGraph({
                            generate: function(){
                                var margin = (scope.$eval(attrs.margin) || {left:50, top:50, bottom:50, right:50});
                                scope.width = (attrs.width || element[0].parentElement.offsetWidth) - (margin.left + margin.right);
                                scope.height = (attrs.height || element[0].parentElement.offsetHeight) - (margin.top + margin.bottom);
                                var chart = nv.models.pieChart()
                                    .x(attrs.x === undefined ? function(d){ return d[0]; } : scope.x())
                                    .y(attrs.y === undefined ? function(d){ return d[1]; } : scope.y())
                                    .width(scope.width)
                                    .height(scope.height)
                                    .margin(margin)
                                    .tooltips(attrs.tooltips === undefined ? false : (attrs.tooltips  === "true"))
                                    .noData(attrs.nodata === undefined ? 'No Data Available.' : scope.nodata)
                                    .showLabels(attrs.showlabels === undefined ? false : (attrs.showlabels === "true"))
                                    .labelThreshold(attrs.labelThreshold === undefined ? 0.02 : attrs.labelthreshold)
                                    .labelType(attrs.labeltype === undefined ? 'key' : attrs.labeltype)
                                    .pieLabelsOutside(attrs.pielabelsoutside === undefined ? true : (attrs.pielabelsoutside === "true"))
                                    .valueFormat(attrs.valueformat === undefined ? d3.format(',.2f') : attrs.valueformat)
                                    .showLegend(attrs.showlegend === undefined ? false : (attrs.showlegend === "true"))
                                    .description(attrs.description === undefined ?  function(d) { return d.description; } : scope.description())
                                    .color(attrs.color === undefined ? nv.utils.defaultColor()  : scope.color())
                                    .donutLabelsOutside(attrs.donutlabelsoutside === undefined ? false : (attrs.donutlabelsoutside === "true"))
                                    .donut(attrs.donut === undefined ? false : (attrs.donut === "true"))
                                    .donutRatio(attrs.donutratio === undefined ? 0.5 : (attrs.donutratio));

                                if(attrs.tooltipcontent){
                                    chart.tooltipContent(scope.tooltipcontent());
                                }

                                scope.d3Call(data, chart);

                                var chartResize = function() {
                                    var currentWidth = parseInt(d3.select('#' + attrs.id + ' svg').attr('width'),10),
                                        currentHeight = parseInt(d3.select('#' + attrs.id + ' svg').attr('height'),10),
                                        newWidth = (attrs.width || element[0].parentElement.offsetWidth) - (margin.left + margin.right),
                                        newHeight = (attrs.height || element[0].parentElement.offsetHeight) - (margin.top + margin.bottom);

                                    if(newWidth === currentWidth && newHeight === currentHeight) {
                                        return; //Nothing to do, the size is fixed or not changing.
                                    }

                                    d3.select('#' + attrs.id + ' svg').node().remove(); // remove old graph first

                                    chart.width(newWidth).height(newHeight); //Update the dims
                                    d3.select(element[0]).append("svg")
                                        .attr('id', attrs.id)
                                        .attr('width', newWidth)
                                        .attr('height', newHeight)
                                        .datum(data)
                                        .transition()
                                        .duration((attrs.transitionduration === undefined ? 500 : attrs.transitionduration))
                                        .call(chart);
                                };

                                var timeoutPromise;
                                var windowResize = function() {
                                    $timeout.cancel(timeoutPromise);
                                    timeoutPromise = $timeout(chartResize, 100);
                                };

                                $window.addEventListener('resize', windowResize);

                                scope.chart = chart;
                                return chart;
                            }
                        });
                    }
                }, (attrs.objectequality === undefined ? false : (attrs.objectequality === "true")));
            }
        };
    }])
    .directive('nvd3ScatterChart', ['$window', '$timeout', function($window, $timeout){
        return {
            restrict: 'E',
            scope: {
                data: '=',
                width: '@',
                height: '@',
                id: '@',
                showlegend: '@',
                tooltips: '@',
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
                color: '&',
                margin: '&',
                nodata: '@',
                transitionDuration: '@',
                shape: '@',
                onlyCircles: '@',

                //xaxis
                xaxisorient: '&',
                xaxisticks: '&',
                xaxistickvalues: '&xaxistickvalues',
                xaxisticksubdivide: '&',
                xaxisticksize: '&',
                xaxistickpadding: '&',
                xaxistickformat: '&',
                xaxislabel: '&',
                xaxisscale: '&',
                xaxisdomain: '&',
                xaxisrange: '&',
                xaxisrangeband: '&',
                xaxisrangebands: '&',
                xaxisshowmaxmin: '@',
                xaxishighlightzero: '@',
                xaxisrotatelables: '@',
                xaxisrotateylabel: '@',
                xaxisstaggerlabels: '@',

                //yaxis
                yaxisorient: '&',
                yaxisticks: '&',
                yaxistickvalues: '&yaxistickvalues',
                yaxisticksubdivide: '&',
                yaxisticksize: '&',
                yaxistickpadding: '&',
                yaxistickformat: '&',
                yaxislabel: '&',
                yaxisscale: '&',
                yaxisdomain: '&',
                yaxisrange: '&',
                yaxisrangeband: '&',
                yaxisrangebands: '&',
                yaxisshowmaxmin: '@',
                yaxishighlightzero: '@',
                yaxisrotatelables: '@',
                yaxisrotateylabel: '@',
                yaxisstaggerlabels: '@',

                //angularjs specific
                objectequality: '@',

                //d3.js specific
                transitionduration: '@'

            },
            controller: function($scope, $element, $attrs){
                $scope.d3Call = function(data, chart){
                    d3.select('#' + $attrs.id + ' svg')
                        .attr('height', $scope.height)
                        .attr('width', $scope.width)
                        .datum(data)
                        .transition().duration(($attrs.transitionduration === undefined ? 500 : $attrs.transitionduration))
                        .call(chart);
                };
            },
            link: function(scope, element, attrs){
                scope.$watch('data', function(data){
                    if(data){
                        //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
                        if(scope.chart){
                            return scope.d3Call(data, scope.chart);
                        }
                        nv.addGraph({
                            generate: function(){
                                var margin = (scope.$eval(attrs.margin) || {left:50, top:50, bottom:50, right:50});
                                    scope.width = (attrs.width || element[0].parentElement.offsetWidth) - (margin.left + margin.right);
                                    scope.height = (attrs.height || element[0].parentElement.offsetHeight) - (margin.top + margin.bottom);

                                var chart = nv.models.scatterChart()
                                    .width(scope.width)
                                    .height(scope.height)
                                    .margin(margin)
                                    .tooltips(attrs.tooltips === undefined ? false : (attrs.tooltips  === "true"))
                                    .tooltipContent(attrs.tooltipContent === undefined ? null : scope.tooltipContent())
                                    .tooltipXContent(attrs.tooltipxcontent === undefined ? function(key, x) { return '<strong>' + x + '</strong>'; } : scope.tooltipXContent())
                                    .tooltipYContent(attrs.tooltipycontent === undefined ? function(key, x, y) { return '<strong>' + y + '</strong>'; } : scope.tooltipYContent())
                                    .showControls(attrs.showcontrols === undefined ? false : (attrs.showcontrols === "true"))
                                    .showLegend(attrs.showlegend === undefined ? false : (attrs.showlegend === "true"))
                                    .showDistX(attrs.showdistx === undefined ? false : (attrs.showdistx === "true"))
                                    .showDistY(attrs.showdisty === undefined ? false : (attrs.showdisty === "true"))
                                    .xPadding(attrs.xpadding === undefined ? 0 : (+attrs.xpadding))
                                    .yPadding(attrs.ypadding === undefined ? 0 : (+attrs.ypadding))
                                    .fisheye(attrs.fisheye === undefined ? 0 : (+attrs.fisheye))
                                    .noData(attrs.nodata === undefined ? 'No Data Available.' : scope.nodata)
                                    .color(attrs.color === undefined ? nv.utils.defaultColor()  : scope.color())
                                    .shape(attrs.shape === undefined ? function(d) { return d.shape || 'circle'; } : attrs.shape)
                                    .onlyCircles(attrs.onlycircles === undefined ? true : (attrs.onlycircles === "true"))
                                    .transitionDuration(attrs.transitionduration === undefined ? 250 : (+attrs.transitionduration));

//'interactive', 'pointActive', 'x', 'y', 'shape', 'size', 'xScale', 'yScale', 'zScale', 'xDomain', 'yDomain', 'xRange', 'yRange', 'sizeDomain', 'sizeRange', 'forceX', 'forceY', 'forceSize', 'clipVoronoi', 'clipRadius', 'useVoronoi'

                                configureXaxis(chart, scope, attrs);
                                configureYaxis(chart, scope, attrs);

                                scope.d3Call(data, chart);

                                var chartResize = function() {
                                    var currentWidth = parseInt(d3.select('#' + attrs.id + ' svg').attr('width'),10),
                                        currentHeight = parseInt(d3.select('#' + attrs.id + ' svg').attr('height'),10),
                                        newWidth = (attrs.width || element[0].parentElement.offsetWidth) - (margin.left + margin.right),
                                        newHeight = (attrs.height || element[0].parentElement.offsetHeight) - (margin.top + margin.bottom);

                                    if(newWidth === currentWidth && newHeight === currentHeight) {
                                        return; //Nothing to do, the size is fixed or not changing.
                                    }

                                    d3.select('#' + attrs.id + ' svg').node().remove(); // remove old graph first

                                    chart.width(newWidth).height(newHeight); //Update the dims
                                    d3.select(element[0]).append("svg")
                                        .attr('id', attrs.id)
                                        .attr('width', newWidth)
                                        .attr('height', newHeight)
                                        .datum(data)
                                        .transition()
                                        .duration(500)
                                        .call(chart);
                                };

                                var timeoutPromise;
                                var windowResize = function() {
                                    $timeout.cancel(timeoutPromise);
                                    timeoutPromise = $timeout(chartResize, 100);
                                };

                                $window.addEventListener('resize', windowResize);
                                scope.chart = chart;
                                return chart;
                            }
                        });
                    }
                }, (attrs.objectequality === undefined ? false : (attrs.objectequality === "true")));
            }
        };
    }])
    .directive('nvd3LinePlusBarChart', ['$window', '$timeout', function($window, $timeout){
        "use strict";
        return {
            restrict: 'E',
            scope: {
                data: '=',
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
                clipvoronoi: '@',
                interpolate: '@',
//                'xScale', 'yScale', 'xDomain', 'yDomain', defined

                //xaxis
                xaxisorient: '&',
                xaxisticks: '&',
                xaxistickvalues: '&xaxistickvalues',
                xaxisticksubdivide: '&',
                xaxisticksize: '&',
                xaxistickpadding: '&',
                xaxistickformat: '&',
                xaxislabel: '&',
                xaxisscale: '&',
                xaxisdomain: '&',
                xaxisrange: '&',
                xaxisrangeband: '&',
                xaxisrangebands: '&',
                xaxisshowmaxmin: '@',
                xaxishighlightzero: '@',
                xaxisrotatelables: '@',
                xaxisrotateylabel: '@',
                xaxisstaggerlabels: '@',

                //yaxis
                yaxisorient: '&',
                yaxisticks: '&',
                yaxistickvalues: '&yaxistickvalues',
                yaxisticksubdivide: '&',
                yaxisticksize: '&',
                yaxistickpadding: '&',
                yaxistickformat: '&',
                yaxislabel: '&',
                yaxisscale: '&',
                yaxisdomain: '&',
                yaxisrange: '&',
                yaxisrangeband: '&',
                yaxisrangebands: '&',
                yaxisshowmaxmin: '@',
                yaxishighlightzero: '@',
                yaxisrotatelables: '@',
                yaxisrotateylabel: '@',
                yaxisstaggerlabels: '@',

                //yaxis
                y2axisorient: '&',
                y2axisticks: '&',
                y2axistickvalues: '&',
                y2axisticksubdivide: '&',
                y2axisticksize: '&',
                y2axistickpadding: '&',
                y2axistickformat: '&',
                y2axislabel: '&',
                y2axisscale: '&',
                y2axisdomain: '&',
                y2axisrange: '&',
                y2axisrangeband: '&',
                y2axisrangebands: '&',
                y2axisshowmaxmin: '@',
                y2axishighlightzero: '@',
                y2axisrotatelables: '@',
                y2axisrotateylabel: '@',
                y2axisstaggerlabels: '@',

                //angularjs specific
                objectequality: '@',

                //d3.js specific
                transitionduration: '@'

            },
            controller: function($scope, $element, $attrs){
                $scope.d3Call = function(data, chart){
                    d3.select('#' + $attrs.id + ' svg')
                        .attr('height', $scope.height)
                        .attr('width', $scope.width)
                        .datum(data)
                        .transition().duration(($attrs.transitionduration === undefined ? 500 : $attrs.transitionduration))
                        .call(chart);
                };
            },
            link: function(scope, element, attrs){
                scope.$watch('data', function(data){
                    if(data){
                        //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
                        if(scope.chart){
                            return scope.d3Call(data, scope.chart);
                        }
                        nv.addGraph({
                            generate: function(){
                                var margin = (scope.$eval(attrs.margin) || {left:50, top:50, bottom:50, right:50});
                                    scope.width = (attrs.width || element[0].parentElement.offsetWidth) - (margin.left + margin.right);
                                    scope.height = (attrs.height || element[0].parentElement.offsetHeight) - (margin.top + margin.bottom);

                                var chart = nv.models.linePlusBarChart()
                                    .width(scope.width)
                                    .height(scope.height)
                                    .margin(margin)
                                    .x(attrs.x === undefined ? function(d){ return d[0]; } : scope.x())
                                    .y(attrs.y === undefined ? function(d){ return d[1]; } : scope.y())
                                    .showLegend(attrs.showlegend === undefined ? false : (attrs.showlegend === "true"))
                                    .tooltips(attrs.tooltips === undefined ? false : (attrs.tooltips  === "true"))
                                    .noData(attrs.nodata === undefined ? 'No Data Available.' : scope.nodata)
                                    .color(attrs.color === undefined ? nv.utils.defaultColor()  : scope.color());

                                if(attrs.tooltipcontent){
                                    chart.tooltipContent(scope.tooltipcontent());
                                }

                                configureXaxis(chart, scope, attrs);
                                configureY1axis(chart, scope, attrs);
                                configureY2axis(chart, scope, attrs);

                                scope.d3Call(data, chart);

                                var chartResize = function() {
                                    var currentWidth = parseInt(d3.select('#' + attrs.id + ' svg').attr('width'),10),
                                        currentHeight = parseInt(d3.select('#' + attrs.id + ' svg').attr('height'),10),
                                        newWidth = (attrs.width || element[0].parentElement.offsetWidth) - (margin.left + margin.right),
                                        newHeight = (attrs.height || element[0].parentElement.offsetHeight) - (margin.top + margin.bottom);

                                    if(newWidth === currentWidth && newHeight === currentHeight) {
                                        return; //Nothing to do, the size is fixed or not changing.
                                    }

                                    d3.select('#' + attrs.id + ' svg').node().remove(); // remove old graph first

                                    chart.width(newWidth).height(newHeight); //Update the dims
                                    d3.select(element[0]).append("svg")
                                        .attr('id', attrs.id)
                                        .attr('width', newWidth)
                                        .attr('height', newHeight)
                                        .datum(data)
                                        .transition()
                                        .duration(500)
                                        .call(chart);
                                };

                                var timeoutPromise;
                                var windowResize = function() {
                                    $timeout.cancel(timeoutPromise);
                                    timeoutPromise = $timeout(chartResize, 100);
                                };

                                $window.addEventListener('resize', windowResize);
                                scope.chart = chart;
                                return chart;
                            }
                        });
                    }
                }, (attrs.objectequality === undefined ? false : (attrs.objectequality === "true")));
            }
        };
    }])
    .directive('nvd3LineWithFocusChart', ['$window', '$timeout', function($window, $timeout){
        "use strict";
        return {
            restrict: 'E',
            scope: {
                data: '=',
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
                margin2: '&',
                tooltipcontent: '&',
                color: '&',
                x: '&',
                y: '&',
                clipvoronoi: '@',
                interpolate: '@',
//                'xScale', 'yScale', 'xDomain', 'yDomain', defined

                //xaxis
                xaxisorient: '&',
                xaxisticks: '&',
                xaxistickvalues: '&xaxistickvalues',
                xaxisticksubdivide: '&',
                xaxisticksize: '&',
                xaxistickpadding: '&',
                xaxistickformat: '&',
                xaxislabel: '&',
                xaxisscale: '&',
                xaxisdomain: '&',
                xaxisrange: '&',
                xaxisrangeband: '&',
                xaxisrangebands: '&',
                xaxisshowmaxmin: '@',
                xaxishighlightzero: '@',
                xaxisrotatelables: '@',
                xaxisrotateylabel: '@',
                xaxisstaggerlabels: '@',

                //yaxis
                yaxisorient: '&',
                yaxisticks: '&',
                yaxistickvalues: '&yaxistickvalues',
                yaxisticksubdivide: '&',
                yaxisticksize: '&',
                yaxistickpadding: '&',
                yaxistickformat: '&',
                yaxislabel: '&',
                yaxisscale: '&',
                yaxisdomain: '&',
                yaxisrange: '&',
                yaxisrangeband: '&',
                yaxisrangebands: '&',
                yaxisshowmaxmin: '@',
                yaxishighlightzero: '@',
                yaxisrotatelables: '@',
                yaxisrotateylabel: '@',
                yaxisstaggerlabels: '@',

                //yaxis
                y2axisorient: '&',
                y2axisticks: '&',
                y2axistickvalues: '&',
                y2axisticksubdivide: '&',
                y2axisticksize: '&',
                y2axistickpadding: '&',
                y2axistickformat: '&',
                y2axislabel: '&',
                y2axisscale: '&',
                y2axisdomain: '&',
                y2axisrange: '&',
                y2axisrangeband: '&',
                y2axisrangebands: '&',
                y2axisshowmaxmin: '@',
                y2axishighlightzero: '@',
                y2axisrotatelables: '@',
                y2axisrotateylabel: '@',
                y2axisstaggerlabels: '@',

                //angularjs specific
                objectequality: '@',

                //d3.js specific
                transitionduration: '@'

            },
            controller: function($scope, $element, $attrs){
                $scope.d3Call = function(data, chart){
                    d3.select('#' + $attrs.id + ' svg')
                        .attr('height', $scope.height)
                        .attr('width', $scope.width)
                        .datum(data)
                        .transition().duration(($attrs.transitionduration === undefined ? 500 : $attrs.transitionduration))
                        .call(chart);
                };
            },
            link: function(scope, element, attrs){
                scope.$watch('data', function(data){
                    if(data){
                        //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
                        if(scope.chart){
                            return scope.d3Call(data, scope.chart);
                        }
                        nv.addGraph({
                            generate: function(){
                                var margin = (scope.$eval(attrs.margin) || {left:50, top:50, bottom:50, right:50});
                                    scope.width = (attrs.width || element[0].parentElement.offsetWidth) - (margin.left + margin.right);
                                    scope.height = (attrs.height || element[0].parentElement.offsetHeight) - (margin.top + margin.bottom);

                                var chart = nv.models.lineWithFocusChart()
                                    .width(scope.width)
                                    .height(scope.height)
                                    .margin(margin)
                                    .x(attrs.x === undefined ? function(d){ return d[0]; } : scope.x())
                                    .y(attrs.y === undefined ? function(d){ return d[1]; } : scope.y())
                                    .showLegend(attrs.showlegend === undefined ? false : (attrs.showlegend === "true"))
                                    .tooltips(attrs.tooltips === undefined ? false : (attrs.tooltips  === "true"))
                                    .noData(attrs.nodata === undefined ? 'No Data Available.' : scope.nodata);

                                if(attrs.tooltipcontent){
                                    chart.tooltipContent(scope.tooltipcontent());
                                }

                                configureXaxis(chart, scope, attrs);
                                configureY1axis(chart, scope, attrs);
                                configureY2axis(chart, scope, attrs);

                                scope.d3Call(data, chart);

                                var chartResize = function() {
                                    var currentWidth = parseInt(d3.select('#' + attrs.id + ' svg').attr('width'),10),
                                        currentHeight = parseInt(d3.select('#' + attrs.id + ' svg').attr('height'),10),
                                        newWidth = (attrs.width || element[0].parentElement.offsetWidth) - (margin.left + margin.right),
                                        newHeight = (attrs.height || element[0].parentElement.offsetHeight) - (margin.top + margin.bottom);

                                    if(newWidth === currentWidth && newHeight === currentHeight) {
                                        return; //Nothing to do, the size is fixed or not changing.
                                    }

                                    d3.select('#' + attrs.id + ' svg').node().remove(); // remove old graph first

                                    chart.width(newWidth).height(newHeight); //Update the dims
                                    d3.select(element[0]).append("svg")
                                        .attr('id', attrs.id)
                                        .attr('width', newWidth)
                                        .attr('height', newHeight)
                                        .datum(data)
                                        .transition()
                                        .duration(500)
                                        .call(chart);
                                };

                                var timeoutPromise;
                                var windowResize = function() {
                                    $timeout.cancel(timeoutPromise);
                                    timeoutPromise = $timeout(chartResize, 100);
                                };

                                $window.addEventListener('resize', windowResize);
                                scope.chart = chart;
                                return chart;
                            }
                        });
                    }
                }, (attrs.objectequality === undefined ? false : (attrs.objectequality === "true")));
            }
        };
    }])
    .directive('nvd3BulletChart', ['$window', '$timeout', function($window, $timeout){
        "use strict";
        return {
            restrict: 'E',
            scope: {
                data: '=',
                width: '@',
                height: '@',
                id: '@',
                margin: '&',
                tooltips: '@',
                tooltipcontent: '&',
                orient: '@',
                ranges: '&',
                markers: '&',
                measures: '&',
                tickformat: '&',
                nodata: '@',

                //angularjs specific
                objectequality: '@',

                //d3.js specific
                transitionduration: '@'

            },
            controller: function($scope, $element, $attrs){
                $scope.d3Call = function(data, chart){
                    d3.select('#' + $attrs.id + ' svg')
                        .attr('height', $scope.height)
                        .attr('width', $scope.width)
                        .datum(data)
                        .transition().duration(($attrs.transitionduration === undefined ? 500 : $attrs.transitionduration))
                        .call(chart);
                };
            },
            link: function(scope, element, attrs){
                scope.$watch('data', function(data){
                    if(data){
                        //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
                        if(scope.chart){
                            return scope.d3Call(data, scope.chart);
                        }
                        nv.addGraph({
                            generate: function(){
                                var margin = (scope.$eval(attrs.margin) || {left:50, top:50, bottom:50, right:50});
                                    scope.width = (attrs.width || element[0].parentElement.offsetWidth) - (margin.left + margin.right);
                                    scope.height = (attrs.height || element[0].parentElement.offsetHeight) - (margin.top + margin.bottom);

                                var chart = nv.models.bulletChart()
                                    .width(scope.width)
                                    .height(scope.height)
                                    .margin(margin)
                                    .orient(attrs.orient === undefined ? 'left' : attrs.orient)
                                    .ranges(attrs.ranges === undefined ? function(d){ return d.ranges; } : scope.ranges())
                                    .markers(attrs.markers === undefined ? function(d){ return d.markers; } : scope.markers())
                                    .measures(attrs.measures === undefined ? function(d){ return d.measures; } : scope.measures())
                                    .tickFormat(attrs.tickformat === undefined ? null : scope.tickformat())
                                    .tooltips(attrs.tooltips === undefined ? false : (attrs.tooltips  === "true"))
                                    .noData(attrs.nodata === undefined ? 'No Data Available.' : scope.nodata);

                                if(attrs.tooltipcontent){
                                    chart.tooltipContent(scope.tooltipcontent());
                                }

                                scope.d3Call(data, chart);

                                var chartResize = function() {
                                    var currentWidth = parseInt(d3.select('#' + attrs.id + ' svg').attr('width'),10),
                                        currentHeight = parseInt(d3.select('#' + attrs.id + ' svg').attr('height'),10),
                                        newWidth = (attrs.width || element[0].parentElement.offsetWidth) - (margin.left + margin.right),
                                        newHeight = (attrs.height || element[0].parentElement.offsetHeight) - (margin.top + margin.bottom);

                                    if(newWidth === currentWidth && newHeight === currentHeight) {
                                        return; //Nothing to do, the size is fixed or not changing.
                                    }

                                    d3.select('#' + attrs.id + ' svg').node().remove(); // remove old graph first

                                    chart.width(newWidth).height(newHeight); //Update the dims
                                    d3.select(element[0]).append("svg")
                                        .attr('id', attrs.id)
                                        .attr('width', newWidth)
                                        .attr('height', newHeight)
                                        .datum(data)
                                        .transition()
                                        .duration(500)
                                        .call(chart);
                                };

                                var timeoutPromise;
                                var windowResize = function() {
                                    $timeout.cancel(timeoutPromise);
                                    timeoutPromise = $timeout(chartResize, 100);
                                };

                                $window.addEventListener('resize', windowResize);
                                scope.chart = chart;
                                return chart;
                            }
                        });
                    }
                }, (attrs.objectequality === undefined ? false : (attrs.objectequality === "true")));
            }
        };
    }])
    .directive('nvd3Sparkline', ['$window', '$timeout', function($window, $timeout){
        "use strict";
        return {
            restrict: 'E',
            scope: {
                data: '=',
                width: '@',
                height: '@',
                id: '@',
                animate: '@',
                margin: '&',
                x: '&',
                y: '&',
                color: '&',
                xscale: '&',
                yscale: '&',
                xdomain: '&',
                ydomain: '&',
                xrange: '&',
                yrange: '&',

                //angularjs specific
                objectequality: '@',

                //d3.js specific
                transitionduration: '@'

            },
            controller: function($scope, $element, $attrs){
                $scope.d3Call = function(data, chart){
                    d3.select('#' + $attrs.id + ' svg')
                        .attr('height', $scope.height)
                        .attr('width', $scope.width)
                        .datum(data)
                        .transition().duration(($attrs.transitionduration === undefined ? 500 : $attrs.transitionduration))
                        .call(chart);
                };
            },
            link: function(scope, element, attrs){
                scope.$watch('data', function(data){
                    if(data){
                        //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
                        if(scope.chart){
                            return scope.d3Call(data, scope.chart);
                        }
                        nv.addGraph({
                            generate: function(){
                                var margin = (scope.$eval(attrs.margin) || {left:50, top:50, bottom:50, right:50});
                                    scope.width = (attrs.width || element[0].parentElement.offsetWidth) - (margin.left + margin.right);
                                    scope.height = (attrs.height || element[0].parentElement.offsetHeight) - (margin.top + margin.bottom);

                                var chart = nv.models.bulletChart()
                                    .width(scope.width)
                                    .height(scope.height)
                                    .margin(margin)
                                    .x(attrs.x === undefined ? function(d){ return d[0]; } : scope.x())
                                    .y(attrs.y === undefined ? function(d){ return d[1]; } : scope.y())
                                    .animate(attrs.animate === undefined ? true : (attrs.animate === "true"))
                                    .color(attrs.color === undefined ? nv.utils.getColor(['#000']) : scope.color())
                                    .xscale(attrs.xscale === undefined ? null : scope.$eval(attrs.xscale))
                                    .yscale(attrs.yscale === undefined ? null : scope.$eval(attrs.yscale))
                                    .xdomain(attrs.xdomain === undefined ? null : scope.$eval(attrs.xdomain))
                                    .ydomain(attrs.ydomain === undefined ? null : scope.$eval(attrs.ydomain))
                                    .xrange(attrs.xrange === undefined ? null : scope.$eval(attrs.xrange))
                                    .yrange(attrs.yrange === undefined ? null : scope.$eval(attrs.yrange));

                                scope.d3Call(data, chart);

                                var chartResize = function() {
                                    var currentWidth = parseInt(d3.select('#' + attrs.id + ' svg').attr('width'),10),
                                        currentHeight = parseInt(d3.select('#' + attrs.id + ' svg').attr('height'),10),
                                        newWidth = (attrs.width || element[0].parentElement.offsetWidth) - (margin.left + margin.right),
                                        newHeight = (attrs.height || element[0].parentElement.offsetHeight) - (margin.top + margin.bottom);

                                    if(newWidth === currentWidth && newHeight === currentHeight) {
                                        return; //Nothing to do, the size is fixed or not changing.
                                    }

                                    d3.select('#' + attrs.id + ' svg').node().remove(); // remove old graph first

                                    chart.width(newWidth).height(newHeight); //Update the dims
                                    d3.select(element[0]).append("svg")
                                        .attr('id', attrs.id)
                                        .attr('width', newWidth)
                                        .attr('height', newHeight)
                                        .datum(data)
                                        .transition()
                                        .duration(500)
                                        .call(chart);
                                };

                                var timeoutPromise;
                                var windowResize = function() {
                                    $timeout.cancel(timeoutPromise);
                                    timeoutPromise = $timeout(chartResize, 100);
                                };

                                $window.addEventListener('resize', windowResize);
                                scope.chart = chart;
                                return chart;
                            }
                        });
                    }
                }, (attrs.objectequality === undefined ? false : (attrs.objectequality === "true")));
            }
        };
    }]);

//still need to implement

//nv.models.sparkline
//nv.models.sparklinePlus
//nv.models.multiChart
//nv.models.scatterPlusLineChart
//nv.models.linePlusBarWithFocusChart
//dual y-axis chart

//crossfilter using $services?