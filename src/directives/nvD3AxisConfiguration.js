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