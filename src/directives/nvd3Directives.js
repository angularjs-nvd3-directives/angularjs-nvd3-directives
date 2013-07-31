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
                nodata: '@'
            },
            link: function(scope, element, attrs){
                scope.$watch('data', function(data){
                    if(data){
                        nv.addGraph({
                            generate: function(){
                                var margin = {left:50, top:50, bottom:50, right:50};
                                var width = attrs.width - (margin.left + margin.right),
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
                                    .noData(attrs.nodata === undefined ? 'No Data Available.' : attrs.nodata);

                                chart.xAxis
                                    .tickFormat(function(d) {
                                        return d3.time.format('%x')(new Date(d))
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
                                var margin = {left:50, top:50, bottom:50, right:50};
                                var width = attrs.width - (margin.left + margin.right),
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
                                var margin = {left:50, top:50, bottom:50, right:50};
                                var width = attrs.width - (margin.left + margin.right),
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
;