/*! angularjs-nvd3-directives - v0.0.0 - 2013-08-23
* Copyright (c) 2013 ; Licensed  */
function configureXaxis(chart, scope, attrs){
"use strict";
    if(attrs.xaxisorient){
        chart.xAxis.orient(scope.xaxisorient());
    }
    if(attrs.xaxisticks){
        chart.xAxis.ticks(scope.xaxisticks());
    }
    if(attrs.xaxistickvalues){
        chart.xAxis.tickValues(scope.xaxistickvalues());
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
        chart.xAxis.axisLabel(scope.xaxislabel());
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
        chart.xAxis.showMaxMin((scope.xaxisshowmaxmin === "true"));
    }
    if(attrs.xaxishighlightzero){
        chart.xAxis.highlightZero((scope.xaxishighlightzero === "true"));
    }
    if(attrs.xaxisrotatelables){
        chart.xAxis.highlightZero(scope.xaxisrotatelables);
    }
    if(attrs.xaxisrotateylabel){
        chart.xAxis.rotateYLabel((scope.xaxisrotateylabel === "true"));
    }
    if(attrs.xaxisstaggerlabels){
        chart.xAxis.staggerlabels((scope.xaxisstaggerlabels === "true"));
    }
}

function configureYaxis(chart, scope, attrs){
"use strict";
    if(attrs.yaxisticks){
        chart.yAxis.ticks(scope.yaxisticks());
    }
    if(attrs.yaxistickvalues){
        chart.yAxis.tickValues(scope.yaxistickvalues());
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
        chart.yAxis.axisLabel(scope.yaxislabel());
    }
    if(attrs.yaxisscale){
        chart.yAxis.xScale(scope.yaxisscale());
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
        chart.yAxis.showMaxMin((scope.yaxisshowmaxmin === "true"));
    }
    if(attrs.yaxishighlightzero){
        chart.yAxis.highlightZero((scope.yaxishighlightzero === "true"));
    }
    if(attrs.yaxisrotatelables){
        chart.yAxis.highlightZero(scope.yaxisrotatelables);
    }
    if(attrs.yaxisrotateylabel){
        chart.yAxis.rotateYLabel((scope.yaxisrotateylabel === "true"));
    }
    if(attrs.yaxisstaggerlabels){
        chart.yAxis.staggerlabels((scope.yaxisstaggerlabels === "true"));
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
//                'xScale', 'yScale', 'xDomain', 'yDomain', defined

                //xaxis
                xaxisorient: '&',
                xaxisticks: '&',
                xaxistickvalues: '&',
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
                yaxistickvalues: '&',
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
                yaxisstaggerlabels: '@'

            },
            link: function(scope, element, attrs){
                scope.$watch('data', function(data){
                    if(data){
                        nv.addGraph({
                            generate: function(){
                                var margin = (scope.$eval(attrs.margin) || {left:50, top:50, bottom:50, right:50}),
                                    width = (attrs.width || element[0].parentElement.offsetWidth) - (margin.left + margin.right),
                                    height = (attrs.height || element[0].parentElement.offsetHeight) - (margin.top + margin.bottom);

                                var chart = nv.models.lineChart()
                                    .margin(margin)
                                    .x(attrs.x === undefined ? function(d){ return d[0]; } : scope.x())
                                    .y(attrs.y === undefined ? function(d){ return d[1]; } : scope.y())
                                    .forceX(attrs.forcex === undefined ? [] : scope.$eval(attrs.forcex)) // List of numbers to Force into the X scale (ie. 0, or a max / min, etc.)
                                    .forceY(attrs.forcey === undefined ? [] : scope.$eval(attrs.forcey)) // List of numbers to Force into the Y scale
                                    .width(width)
                                    .height(height)
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

                                d3.select('#' + attrs.id + ' svg')
                                    .attr('height', height)
                                    .attr('width', width)
                                    .datum(data)
                                    .call(chart);

                                var chartResize = function() {
                                    var currentWidth = d3.select('#' + attrs.id + ' svg').attr('width'),
                                        currentHeight = d3.select('#' + attrs.id + ' svg').attr('height'),
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
                                        .call(chart);
                                };

                                var timeoutPromise;
                                var windowResize = function() {
                                    $timeout.cancel(timeoutPromise);
                                    timeoutPromise = $timeout(chartResize, 1);
                                };

                                $window.addEventListener('resize', windowResize);

                                return chart;
                            }
                        });
                    }
                });
            }
        };
    }])
    .directive('nvd3StackedAreaChart', function(){
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
                color: '&',
                x: '&',
                y: '&',
                forcex: '@',
                forcey: '@',

                //xaxis
                xaxisorient: '&',
                xaxisticks: '&',
                xaxistickvalues: '&',
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
                yaxistickvalues: '&',
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
                yaxisstaggerlabels: '@'

            },
            link: function(scope, element, attrs){
                scope.$watch('data', function(data){
                    if(data){
                        nv.addGraph({
                            generate: function(){
                                var margin = (scope.$eval(attrs.margin) || {left:50, top:50, bottom:50, right:50}),
                                    width = attrs.width - (margin.left + margin.right),
                                    height = attrs.height - (margin.top + margin.bottom);

                                var chart = nv.models.stackedAreaChart()
                                    .margin(margin)
                                    .x(attrs.x === undefined ? function(d){ return d[0]; } : scope.x())
                                    .y(attrs.y === undefined ? function(d){ return d[1]; } : scope.y())
                                    .forceX(attrs.forcex === undefined ? [] : scope.$eval(attrs.forcex)) // List of numbers to Force into the X scale (ie. 0, or a max / min, etc.)
                                    .forceY(attrs.forcey === undefined ? [] : scope.$eval(attrs.forcey)) // List of numbers to Force into the Y scale
                                    .width(width)
                                    .height(height)
                                    .showLegend(attrs.showlegend === undefined ? false : (attrs.showlegend === "true"))
                                    .showControls(attrs.showcontrols === undefined ? false : (attrs.showcontrols === "true"))
                                    .tooltips(attrs.tooltips === undefined ? false : (attrs.tooltips  === "true"))
                                    .noData(attrs.nodata === undefined ? 'No Data Available.' : scope.nodata)
                                    .color(attrs.color === undefined ? nv.utils.defaultColor()  : scope.color());

                                configureXaxis(chart, scope, attrs);
                                configureYaxis(chart, scope, attrs);

                                d3.select('#' + attrs.id + ' svg')
                                    .attr('height', height)
                                    .attr('width', width)
                                    .datum(data)
                                    .call(chart);

                                nv.utils.windowResize(chart.update);

                                return chart;
                            }
                        });
                    }
                });
            }
        };
    })
    .directive('nvd3MultiBarChart', function(){
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
                reducexticks: '@',
                staggerlabels: '@',
                rotatelabels: '@',
                transitionduration: '@',
                margin: '&',
                x: '&',
                y: '&',
                forcex: '@',
                forcey: '@',

                //xaxis
                xaxisorient: '&',
                xaxisticks: '&',
                xaxistickvalues: '&',
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
                yaxistickvalues: '&',
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
                yaxisstaggerlabels: '@'

            },
            link: function(scope, element, attrs){
                scope.$watch('data', function(data){
                    if(data){
                        nv.addGraph({
                            generate: function(){
                                var margin = (scope.$eval(attrs.margin) || {left:50, top:50, bottom:50, right:50}),
                                    width = attrs.width - (margin.left + margin.right),
                                    height = attrs.height - (margin.top + margin.bottom);
                                var chart = nv.models.multiBarChart()
                                    .margin(margin)
                                    .x(attrs.x === undefined ? function(d){ return d[0]; } : scope.x())
                                    .y(attrs.y === undefined ? function(d){ return d[1]; } : scope.y())
                                    .forceX(attrs.forcex === undefined ? [] : scope.$eval(attrs.forcex)) // List of numbers to Force into the X scale (ie. 0, or a max / min, etc.)
                                    .forceY(attrs.forcey === undefined ? [] : scope.$eval(attrs.forcey)) // List of numbers to Force into the Y scale
                                    .width(width)
                                    .height(height)
                                    .showLegend(attrs.showlegend === undefined ? false : (attrs.showlegend === "true"))
                                    .showControls(attrs.showcontrols === undefined ? false : (attrs.showcontrols === "true"))
                                    .tooltips(attrs.tooltips === undefined ? false : (attrs.tooltips  === "true"))
                                    .reduceXTicks(attrs.reducexticks === undefined ? false: (attrs.reducexticks === "true"))
                                    .staggerLabels(attrs.staggerlabels === undefined ? 0 : attrs.staggerlabels)
                                    .noData(attrs.nodata === undefined ? 'No Data Available.' : scope.nodata)
                                    .rotateLabels(attrs.rotatelabels === undefined ? 0 : attrs.rotatelabels);

                                configureXaxis(chart, scope, attrs);
                                configureYaxis(chart, scope, attrs);

                                d3.select('#' + attrs.id + ' svg')
                                    .attr('height', height)
                                    .attr('width', width)
                                    .datum(data)
                                    .transition().duration((attrs.transitionduration === undefined ? 500 : attrs.transitionduration))
                                    .call(chart);

                                nv.utils.windowResize(chart.update);

                                return chart;
                            }
                        });
                    }
                });
            }
        };
    })
    .directive('nvd3DiscreteBarChart', function(){
        return {
            restrict: 'E',
            scope: {
                data: '=',
                width: '@',
                height: '@',
                id: '@',
                showlegend: '@',
                tooltips: '@',
                staggerlabels: '@',
                margin: '&',
                nodata: '@',
                x: '&',
                y: '&',
                forcex: '@',
                forcey: '@',

                //xaxis
                xaxisorient: '&',
                xaxisticks: '&',
                xaxistickvalues: '&',
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
                yaxistickvalues: '&',
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
                yaxisstaggerlabels: '@'

            },
            link: function(scope, element, attrs){
                scope.$watch('data', function(data){
                    if(data){
                        nv.addGraph({
                            generate: function(){
                                var margin = (scope.$eval(attrs.margin) || {left:50, top:50, bottom:50, right:50}),
                                    width = attrs.width - (margin.left + margin.right),
                                    height = attrs.height - (margin.top + margin.bottom);
                                var chart = nv.models.discreteBarChart()
                                    .margin(margin)
                                    .x(attrs.x === undefined ? function(d){ return d[0]; } : scope.x())
                                    .y(attrs.y === undefined ? function(d){ return d[1]; } : scope.y())
                                    .forceX(attrs.forcex === undefined ? [] : scope.$eval(attrs.forcex)) // List of numbers to Force into the X scale (ie. 0, or a max / min, etc.)
                                    .forceY(attrs.forcey === undefined ? [] : scope.$eval(attrs.forcey)) // List of numbers to Force into the Y scale
                                    .width(width)
                                    .height(height)
                                    .tooltips(attrs.tooltips === undefined ? false : (attrs.tooltips  === "true"))
                                    .noData(attrs.nodata === undefined ? 'No Data Available.' : scope.nodata)
                                    .staggerLabels(attrs.staggerlabels === undefined ? false : (attrs.staggerlabels === "true"));

                                configureXaxis(chart, scope, attrs);
                                configureYaxis(chart, scope, attrs);

                                d3.select('#' + attrs.id + ' svg')
                                    .attr('height', height)
                                    .attr('width', width)
                                    .datum(data)
                                    .transition().duration((attrs.transitionduration === undefined ? 500 : attrs.transitionduration))
                                    .call(chart);

                                nv.utils.windowResize(chart.update);

                                return chart;
                            }
                        });
                    }
                });
            }
        };
    })
    .directive('nvd3MultiBarHorizontalChart', function(){
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
                margin: '&',
                nodata: '@',
                x: '&',
                y: '&',
                forcex: '@',
                forcey: '@',

                //xaxis
                xaxisorient: '&',
                xaxisticks: '&',
                xaxistickvalues: '&',
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
                yaxistickvalues: '&',
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
                yaxisstaggerlabels: '@'
            },
            link: function(scope, element, attrs){
                scope.$watch('data', function(data){
                    if(data){
                        nv.addGraph({
                            generate: function(){
                                var margin = (scope.$eval(attrs.margin) || {left:50, top:50, bottom:50, right:50}),
                                    width = attrs.width - (margin.left + margin.right),
                                    height = attrs.height - (margin.top + margin.bottom);
                                var chart = nv.models.multiBarHorizontalChart()
                                    .margin(margin)
                                    .x(attrs.x === undefined ? function(d){ return d[0]; } : scope.x())
                                    .y(attrs.y === undefined ? function(d){ return d[1]; } : scope.y())
                                    .forceX(attrs.forcex === undefined ? [] : scope.$eval(attrs.forcex)) // List of numbers to Force into the X scale (ie. 0, or a max / min, etc.)
                                    .forceY(attrs.forcey === undefined ? [] : scope.$eval(attrs.forcey)) // List of numbers to Force into the Y scale
                                    .width(width)
                                    .height(height)
                                    .tooltips(attrs.tooltips === undefined ? false : (attrs.tooltips  === "true"))
                                    .noData(attrs.nodata === undefined ? 'No Data Available.' : scope.nodata)
                                    .showControls(attrs.showcontrols === undefined ? false : (attrs.showcontrols === "true"));

                                configureXaxis(chart, scope, attrs);
                                configureYaxis(chart, scope, attrs);

                                d3.select('#' + attrs.id + ' svg')
                                    .attr('height', height)
                                    .attr('width', width)
                                    .datum(data)
                                    .transition().duration((attrs.transitionduration === undefined ? 500 : attrs.transitionduration))
                                    .call(chart);

                                nv.utils.windowResize(chart.update);

                                return chart;
                            }
                        });
                    }
                });
            }
        };
    })
    .directive('nvd3PieChart', function(){
        return {
            restrict: 'E',
            scope: {
                data: '=',
                width: '@',
                height: '@',
                id: '@',
                showlabels: '@',
                nodata: '@',
                margin: '&',
                x: '&',
                y: '&'

            },
            link: function(scope, element, attrs){
                scope.$watch('data', function(data){
                    if(data){
                        nv.addGraph({
                            generate: function(){
                                var margin = (scope.$eval(attrs.margin) || {left:50, top:50, bottom:50, right:50}),
                                    width = attrs.width - (margin.left + margin.right),
                                    height = attrs.height - (margin.top + margin.bottom);
                                var chart = nv.models.pieChart()
                                    .x(attrs.x === undefined ? function(d){ return d[0]; } : scope.x())
                                    .y(attrs.y === undefined ? function(d){ return d[1]; } : scope.y())
                                    .width(width)
                                    .height(height)
                                    .noData(attrs.nodata === undefined ? 'No Data Available.' : scope.nodata)
                                    .showLabels(attrs.showlabels === undefined ? false : (attrs.showlabels === "true"));

                                d3.select('#' + attrs.id + ' svg')
                                    .datum(data)
                                    .transition().duration((attrs.transitionduration === undefined ? 500 : attrs.transitionduration))
                                    .call(chart);

                                return chart;
                            }
                        });
                    }
                });
            }
        };
    })
    .directive('nvd3ScatterChart', function(){
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
                fisheye: '@',
                xPadding: '@',
                yPadding: '@',
                tooltipXcontent: '&',
                tooltipYcontent: '&',
                margin: '&',
                nodata: '@',

                //xaxis
                xaxisorient: '&',
                xaxisticks: '&',
                xaxistickvalues: '&',
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
                yaxistickvalues: '&',
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
                yaxisstaggerlabels: '@'

            },
            link: function(scope, element, attrs){
                scope.$watch('data', function(data){
                    if(data){
                        nv.addGraph({
                            generate: function(){
                                var margin = (scope.$eval(attrs.margin) || {left:50, top:50, bottom:50, right:50}),
                                    width = attrs.width - (margin.left + margin.right),
                                    height = attrs.height - (margin.top + margin.bottom);
                                var chart = nv.models.scatterChart()
                                    .margin(margin)
                                    .tooltips(attrs.tooltips === undefined ? false : (attrs.tooltips  === "true"))
                                    .tooltipXContent(scope.$eval(attrs.tooltipxcontent) || function(key, x) { return '<strong>' + x + '</strong>'; } )
                                    .tooltipYContent(scope.$eval(attrs.tooltipycontent) || function(key, x, y) { return '<strong>' + y + '</strong>'; } )
                                    .showControls(attrs.showcontrols === undefined ? false : (attrs.showcontrols === "true"))
                                    .showLegend(attrs.showlegend === undefined ? false : (attrs.showlegend === "true"))
                                    .showDistX(attrs.showdistx === undefined ? false : (attrs.showdistx === "true"))
                                    .showDistY(attrs.showdisty === undefined ? false : (attrs.showdisty === "true"))
                                    .xPadding(attrs.xpadding === undefined ? 0 : (+attrs.xpadding))
                                    .yPadding(attrs.ypadding === undefined ? 0 : (+attrs.ypadding))
                                    .fisheye(attrs.fisheye === undefined ? 0 : (+attrs.fisheye))
                                    .noData(attrs.nodata === undefined ? 'No Data Available.' : scope.nodata)
                                    .color(d3.scale.category10().range());

                                configureXaxis(chart, scope, attrs);
                                configureYaxis(chart, scope, attrs);

                                d3.select('#' + attrs.id + ' svg')
                                    .attr('height', height)
                                    .attr('width', width)
                                    .datum(data)
                                    .transition().duration((attrs.transitionduration === undefined ? 500 : attrs.transitionduration))
                                    .call(chart);

                                nv.utils.windowResize(chart.update);

                                return chart;
                            }
                        });
                    }
                });
            }
        };
    });