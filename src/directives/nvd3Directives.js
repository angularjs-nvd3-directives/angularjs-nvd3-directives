'use strict';

angular.module('nvd3ChartDirectives', [])
    .directive('nvd3LineChart', function(){
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
                nodata: '&',
                margin: '&',
                tooltipcontent: '&',
                color: '&',
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
                                var chart = nv.models.lineChart()
                                    .margin(margin)
                                    .x(function(d){ return d[0] })
                                    .y(function(d){ return d[1] })
                                    .width(width)
                                    .height(height)
                                    .showLegend(attrs.showlegend === undefined ? false : (attrs.showlegend === "true"))
                                    .tooltips(attrs.tooltips === undefined ? false : (attrs.tooltips  === "true"))
                                    .showXAxis(attrs.showxaxis === undefined ? false : (attrs.showxaxis  === "true"))
                                    .showYAxis(attrs.showyaxis === undefined ? false : (attrs.showyaxis  === "true"))
                                    .rightAlignYAxis(attrs.rightalignyaxis === undefined ? false : (attrs.rightalignyaxis  === "true"))
                                    .noData(attrs.nodata === undefined ? 'No Data Available.' : scope.nodata());

                                if(attrs.tooltipcontent){
                                    chart.tooltipContent(scope.tooltipcontent());
                                }
                                if(attrs.color){
                                    chart.color(scope.color());
                                }
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

                                //yaxis
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

                                d3.select('#' + attrs.id + ' svg')
                                    .attr('height', height)
                                    .attr('width', width)
                                    .datum(data)
                                    .call(chart);

                                nv.utils.windowResize(chart.update);

                                return chart;
                            },
                            callback: function(graph){
                            }
                        })
                    }
                })
            }
        }
    })
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
                margin: '&'
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
                                    .x(function(d){ return d[0] })
                                    .y(function(d){ return d[1] })
                                    .width(width)
                                    .height(height)
                                    .showLegend(attrs.showlegend === undefined ? false : (attrs.showlegend === "true"))
                                    .showControls(attrs.showcontrols === undefined ? false : (attrs.showcontrols === "true"))
                                    .tooltips(attrs.tooltips === undefined ? false : (attrs.tooltips  === "true"));

                                chart.xAxis
                                    .tickFormat(function(d) {
                                        return d3.time.format('%X')(new Date((d*1000)))
                                    });

                                chart.yAxis
                                    .tickFormat(d3.format(',2f'));

                                d3.select('#' + attrs.id + ' svg')
                                    .attr('height', height)
                                    .attr('width', width)
                                    .datum(data)
                                    .call(chart);

                                nv.utils.windowResize(chart.update);

                                return chart;
                            },
                            callback: function(graph){
                            }
                        })
                    }
                })
            }
        }
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
                reducexticks: '@',
                staggerlabels: '@',
                rotatelabels: '@',
                transitionduration: '@',
                margin: '&'
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
                                    .x(function(d){ return d[0] })
                                    .y(function(d){ return d[1] })
                                    .width(width)
                                    .height(height)
                                    .showLegend(attrs.showlegend === undefined ? false : (attrs.showlegend === "true"))
                                    .showControls(attrs.showcontrols === undefined ? false : (attrs.showcontrols === "true"))
                                    .tooltips(attrs.tooltips === undefined ? false : (attrs.tooltips  === "true"))
                                    .reduceXTicks(attrs.reducexticks === undefined ? false: (attrs.reducexticks === "true"))
                                    .staggerLabels(attrs.staggerlabels === undefined ? 0 : attrs.staggerlabels)
                                    .rotateLabels(attrs.rotatelabels === undefined ? 0 : attrs.rotatelabels);

                                chart.xAxis
                                    .tickFormat(function(d) {
                                        return d3.time.format('%X')(new Date((d*1000)))
                                    });

                                chart.yAxis
                                    .tickFormat(d3.format(',2f'));

                                d3.select('#' + attrs.id + ' svg')
                                    .attr('height', height)
                                    .attr('width', width)
                                    .datum(data)
                                    .transition().duration((attrs.transitionduration === undefined ? 500 : attrs.transitionduration))
                                    .call(chart);

                                nv.utils.windowResize(chart.update);

                                return chart;
                            },
                            callback: function(graph){
                            }
                        })
                    }
                })
            }
        }
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
                forcex: '@',
                forcey: '@',
                margin: '&'
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
                                    .x(function(d){ return d[0] })
                                    .y(function(d){ return d[1] })
                                    .width(width)
                                    .height(height)
                                    .tooltips(attrs.tooltips === undefined ? false : (attrs.tooltips  === "true"))
                                    .staggerLabels(attrs.staggerlabels === undefined ? false : (attrs.staggerlabels === "true"));

//                                chart.forceX(attrs.forcex === undefined ? false : (attrs.forcex === "true"))
//                                    .forceY(attrs.forcey === undefined ? false : (attrs.forcey === "true"))

                                d3.select('#' + attrs.id + ' svg')
                                    .attr('height', height)
                                    .attr('width', width)
                                    .datum(data)
                                    .transition().duration((attrs.transitionduration === undefined ? 500 : attrs.transitionduration))
                                    .call(chart);

                                nv.utils.windowResize(chart.update);

                                return chart;
                            },
                            callback: function(graph){
                            }
                        })
                    }
                })
            }
        }
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
                forcex: '@',
                forcey: '@',
                margin: '&'
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
                                    .x(function(d){ return d[0] })
                                    .y(function(d){ return d[1] })
                                    .width(width)
                                    .height(height)
                                    .tooltips(attrs.tooltips === undefined ? false : (attrs.tooltips  === "true"))
                                    .showControls(attrs.showcontrols === undefined ? false : (attrs.showcontrols === "true"));

                                d3.select('#' + attrs.id + ' svg')
                                    .attr('height', height)
                                    .attr('width', width)
                                    .datum(data)
                                    .transition().duration((attrs.transitionduration === undefined ? 500 : attrs.transitionduration))
                                    .call(chart);

                                nv.utils.windowResize(chart.update);

                                return chart;
                            },
                            callback: function(graph){
                            }
                        })
                    }
                })
            }
        }
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
                margin: '&'
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
                                    .x(function(d){ return d[0] })
                                    .y(function(d){ return d[1] })
                                    .showLabels(attrs.showlabels === undefined ? false : (attrs.showlabels === "true"));

                                d3.select('#' + attrs.id + ' svg')
                                    .datum(data)
                                    .transition().duration((attrs.transitionduration === undefined ? 500 : attrs.transitionduration))
                                    .call(chart);

                                return chart;
                            },
                            callback: function(graph){
                            }
                        })
                    }
                })
            }
        }
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
//                state
//                defaultState
//                noData
                margin: '&'
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
                                    .tooltipXContent(scope.$eval(attrs.tooltipxcontent) || function(key, x, y) { return '<strong>' + x + '</strong>' } )
                                    .tooltipYContent(scope.$eval(attrs.tooltipycontent) || function(key, x, y) { return '<strong>' + y + '</strong>' } )
                                    .showControls(attrs.showcontrols === undefined ? false : (attrs.showcontrols === "true"))
                                    .showLegend(attrs.showlegend === undefined ? false : (attrs.showlegend === "true"))
                                    .showDistX(attrs.showdistx === undefined ? false : (attrs.showdistx === "true"))
                                    .showDistY(attrs.showdisty === undefined ? false : (attrs.showdisty === "true"))
                                    .xPadding(attrs.xpadding === undefined ? 0 : (+attrs.xpadding))
                                    .yPadding(attrs.ypadding === undefined ? 0 : (+attrs.ypadding))
                                    .fisheye(attrs.fisheye === undefined ? 0 : (+attrs.fisheye))
                                    .color(d3.scale.category10().range());

                                chart.xAxis.tickFormat(d3.format('.02f'));
                                chart.yAxis.tickFormat(d3.format('.02f'));

                                d3.select('#' + attrs.id + ' svg')
                                    .attr('height', height)
                                    .attr('width', width)
                                    .datum(data)
                                    .transition().duration((attrs.transitionduration === undefined ? 500 : attrs.transitionduration))
                                    .call(chart);

                                nv.utils.windowResize(chart.update);

                                return chart;
                            },
                            callback: function(graph){
                            }
                        })
                    }
                })
            }
        }
    })
;