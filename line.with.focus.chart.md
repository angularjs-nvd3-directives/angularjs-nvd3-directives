---
title: line with focus chart
layout: example
description:
---
<script>
var app = angular.module("nvd3TestApp", ['nvd3ChartDirectives']);

    function ExampleCtrl($scope){
        $scope.exampleData = [
            {
                "key" : "Quantity" ,
                "values" : [ [ 1136005200000 , 1271000.0] , [ 1138683600000 , 1271000.0] , [ 1141102800000 , 1271000.0] , [ 1143781200000 , 0] , [ 1146369600000 , 0] , [ 1149048000000 , 0] , [ 1151640000000 , 0] , [ 1154318400000 , 0] , [ 1156996800000 , 0] , [ 1159588800000 , 3899486.0] , [ 1162270800000 , 3899486.0] , [ 1164862800000 , 3899486.0] , [ 1167541200000 , 3564700.0] , [ 1170219600000 , 3564700.0] , [ 1172638800000 , 3564700.0] , [ 1175313600000 , 2648493.0] , [ 1177905600000 , 2648493.0] , [ 1180584000000 , 2648493.0] , [ 1183176000000 , 2522993.0] , [ 1185854400000 , 2522993.0] , [ 1188532800000 , 2522993.0] , [ 1191124800000 , 2906501.0] , [ 1193803200000 , 2906501.0] , [ 1196398800000 , 2906501.0] , [ 1199077200000 , 2206761.0] , [ 1201755600000 , 2206761.0] , [ 1204261200000 , 2206761.0] , [ 1206936000000 , 2287726.0] , [ 1209528000000 , 2287726.0] , [ 1212206400000 , 2287726.0] , [ 1214798400000 , 2732646.0] , [ 1217476800000 , 2732646.0] , [ 1220155200000 , 2732646.0] , [ 1222747200000 , 2599196.0] , [ 1225425600000 , 2599196.0] , [ 1228021200000 , 2599196.0] , [ 1230699600000 , 1924387.0] , [ 1233378000000 , 1924387.0] , [ 1235797200000 , 1924387.0] , [ 1238472000000 , 1756311.0] , [ 1241064000000 , 1756311.0] , [ 1243742400000 , 1756311.0] , [ 1246334400000 , 1743470.0] , [ 1249012800000 , 1743470.0] , [ 1251691200000 , 1743470.0] , [ 1254283200000 , 1519010.0] , [ 1256961600000 , 1519010.0] , [ 1259557200000 , 1519010.0] , [ 1262235600000 , 1591444.0] , [ 1264914000000 , 1591444.0] , [ 1267333200000 , 1591444.0] , [ 1270008000000 , 1543784.0] , [ 1272600000000 , 1543784.0] , [ 1275278400000 , 1543784.0] , [ 1277870400000 , 1309915.0] , [ 1280548800000 , 1309915.0] , [ 1283227200000 , 1309915.0] , [ 1285819200000 , 1331875.0] , [ 1288497600000 , 1331875.0] , [ 1291093200000 , 1331875.0] , [ 1293771600000 , 1331875.0] , [ 1296450000000 , 1154695.0] , [ 1298869200000 , 1154695.0] , [ 1301544000000 , 1194025.0] , [ 1304136000000 , 1194025.0] , [ 1306814400000 , 1194025.0] , [ 1309406400000 , 1194025.0] , [ 1312084800000 , 1194025.0] , [ 1314763200000 , 1244525.0] , [ 1317355200000 , 475000.0] , [ 1320033600000 , 475000.0] , [ 1322629200000 , 475000.0] , [ 1325307600000 , 690033.0] , [ 1327986000000 , 690033.0] , [ 1330491600000 , 690033.0] , [ 1333166400000 , 514733.0] , [ 1335758400000 , 514733.0]]
            },
            {
                "key" : "Price" ,
                "values" : [ [ 1136005200000 , 71.89] , [ 1138683600000 , 75.51] , [ 1141102800000 , 68.49] , [ 1143781200000 , 62.72] , [ 1146369600000 , 70.39] , [ 1149048000000 , 59.77] , [ 1151640000000 , 57.27] , [ 1154318400000 , 67.96] , [ 1156996800000 , 67.85] , [ 1159588800000 , 76.98] , [ 1162270800000 , 81.08] , [ 1164862800000 , 91.66] , [ 1167541200000 , 84.84] , [ 1170219600000 , 85.73] , [ 1172638800000 , 84.61] , [ 1175313600000 , 92.91] , [ 1177905600000 , 99.8] , [ 1180584000000 , 121.191] , [ 1183176000000 , 122.04] , [ 1185854400000 , 131.76] , [ 1188532800000 , 138.48] , [ 1191124800000 , 153.47] , [ 1193803200000 , 189.95] , [ 1196398800000 , 182.22] , [ 1199077200000 , 198.08] , [ 1201755600000 , 135.36] , [ 1204261200000 , 125.02] , [ 1206936000000 , 143.5] , [ 1209528000000 , 173.95] , [ 1212206400000 , 188.75] , [ 1214798400000 , 167.44] , [ 1217476800000 , 158.95] , [ 1220155200000 , 169.53] , [ 1222747200000 , 113.66] , [ 1225425600000 , 107.59] , [ 1228021200000 , 92.67] , [ 1230699600000 , 85.35] , [ 1233378000000 , 90.13] , [ 1235797200000 , 89.31] , [ 1238472000000 , 105.12] , [ 1241064000000 , 125.83] , [ 1243742400000 , 135.81] , [ 1246334400000 , 142.43] , [ 1249012800000 , 163.39] , [ 1251691200000 , 168.21] , [ 1254283200000 , 185.35] , [ 1256961600000 , 188.5] , [ 1259557200000 , 199.91] , [ 1262235600000 , 210.732] , [ 1264914000000 , 192.063] , [ 1267333200000 , 204.62] , [ 1270008000000 , 235.0] , [ 1272600000000 , 261.09] , [ 1275278400000 , 256.88] , [ 1277870400000 , 251.53] , [ 1280548800000 , 257.25] , [ 1283227200000 , 243.1] , [ 1285819200000 , 283.75] , [ 1288497600000 , 300.98] , [ 1291093200000 , 311.15] , [ 1293771600000 , 322.56] , [ 1296450000000 , 339.32] , [ 1298869200000 , 353.21] , [ 1301544000000 , 348.5075] , [ 1304136000000 , 350.13] , [ 1306814400000 , 347.83] , [ 1309406400000 , 335.67] , [ 1312084800000 , 390.48] , [ 1314763200000 , 384.83] , [ 1317355200000 , 381.32] , [ 1320033600000 , 404.78] , [ 1322629200000 , 382.2] , [ 1325307600000 , 405.0] , [ 1327986000000 , 456.48] , [ 1330491600000 , 542.44] , [ 1333166400000 , 599.55] , [ 1335758400000 , 583.98] ]
            }
        ];

        $scope.isAreaExampleData = [
            {"key":"Stream0","area": true, "values":[{"x":0,"y":0.10123346491563687},{"x":1,"y":0.12690740518062005},{"x":2,"y":0.17640897902992675},{"x":3,"y":0.13429189937280933},{"x":4,"y":0.1663959660854444},{"x":5,"y":0.10492295432119941},{"x":6,"y":0.1012303984175346},{"x":7,"y":0.17779273243892946},{"x":8,"y":0.13907320996649564},{"x":9,"y":0.16562203258301106},{"x":10,"y":0.18755059201078275},{"x":11,"y":0.38230653250893193},{"x":12,"y":0.5736897919410685},{"x":13,"y":1.048133615362128},{"x":14,"y":1.8209582673506404},{"x":15,"y":2.820796266692671},{"x":16,"y":3.894304821388285},{"x":17,"y":4.7491522316201165},{"x":18,"y":5.048089165311304},{"x":19,"y":4.832905383561728},{"x":20,"y":4.014324635246319},{"x":21,"y":3.030994126199101},{"x":22,"y":2.0181786618319157},{"x":23,"y":1.2363420924551203},{"x":24,"y":0.6858527548851103},{"x":25,"y":0.3319398743264023},{"x":26,"y":0.24526719944033815},{"x":27,"y":0.20478928731562773},{"x":28,"y":0.18118779186703507},{"x":29,"y":0.11163109489202903},{"x":30,"y":0.18397838858112397},{"x":31,"y":0.17400874375477976},{"x":32,"y":0.1508524250905045},{"x":33,"y":0.19439287073365155},{"x":34,"y":0.16276638218189948},{"x":35,"y":0.12884021181777983},{"x":36,"y":0.18791934857446044},{"x":37,"y":0.12683417185410018},{"x":38,"y":0.1732320037244767},{"x":39,"y":0.10918606957741722},{"x":40,"y":0.17283179629133663},{"x":41,"y":0.17437143035582509},{"x":42,"y":0.11181958217893864},{"x":43,"y":0.1335757958637991},{"x":44,"y":0.1834703246165452},{"x":45,"y":0.18161371957182548},{"x":46,"y":0.19206118975890837},{"x":47,"y":0.23664319240455517},{"x":48,"y":0.3821541392064177},{"x":49,"y":0.43624823478427216},{"x":50,"y":0.5146958380209019},{"x":51,"y":0.7140448603306564},{"x":52,"y":0.8514175379865512},{"x":53,"y":0.9810898590587065},{"x":54,"y":1.1129771396765562},{"x":55,"y":1.3099783036805517},{"x":56,"y":1.3949425177978858},{"x":57,"y":1.355997299789231},{"x":58,"y":1.3245588056274937},{"x":59,"y":1.2807929685246808},{"x":60,"y":1.2088464299894548},{"x":61,"y":1.0113766041350463},{"x":62,"y":0.881484884993623}]},
            {"key":"Stream1","values":[{"x":0,"y":1.955950099524088},{"x":1,"y":1.519447279102443},{"x":2,"y":1.2245352060783277},{"x":3,"y":1.2901984013679593},{"x":4,"y":1.7676503889817645},{"x":5,"y":2.6106806687242288},{"x":6,"y":3.9402535915539048},{"x":7,"y":5.603952517605923},{"x":8,"y":7.130626240181372},{"x":9,"y":8.428743711285517},{"x":10,"y":8.98113908748813},{"x":11,"y":8.738913122632738},{"x":12,"y":7.759484398797055},{"x":13,"y":6.323246682871677},{"x":14,"y":4.687733344806634},{"x":15,"y":3.1504860866451585},{"x":16,"y":1.9565887552795178},{"x":17,"y":1.1351961307657898},{"x":18,"y":0.6954586519268663},{"x":19,"y":0.36004352879421203},{"x":20,"y":0.29043907271957853},{"x":21,"y":0.21360381095644862},{"x":22,"y":0.19962255009993682},{"x":23,"y":0.1547305782187245},{"x":24,"y":0.14531806615948134},{"x":25,"y":0.11810663946176886},{"x":26,"y":0.17865607697049332},{"x":27,"y":0.15935389403782318},{"x":28,"y":0.11211220116458666},{"x":29,"y":0.19115521184540238},{"x":30,"y":0.16918842324524797},{"x":31,"y":0.19641056616846808},{"x":32,"y":0.11203908421236797},{"x":33,"y":0.19101995753450626},{"x":34,"y":0.1876368866738238},{"x":35,"y":0.19441046116611368},{"x":36,"y":0.16337435916084678},{"x":37,"y":0.16543056610973222},{"x":38,"y":0.1143508466891956},{"x":39,"y":0.1241943631786854},{"x":40,"y":0.10710227543022484},{"x":41,"y":0.17136750228237363},{"x":42,"y":0.18902077826205643},{"x":43,"y":0.17825439770240337},{"x":44,"y":0.14506592019461095},{"x":45,"y":0.10018612765707076},{"x":46,"y":0.18633547469507905},{"x":47,"y":0.18540953637566418},{"x":48,"y":0.18482169022317976},{"x":49,"y":0.14984436503145845},{"x":50,"y":0.12964752749539912},{"x":51,"y":0.14076081353705377},{"x":52,"y":0.13042350858449936},{"x":53,"y":0.13036318258382382},{"x":54,"y":0.11218480416573584},{"x":55,"y":0.1493127090856433},{"x":56,"y":0.17844136378262193},{"x":57,"y":0.16352732193190606},{"x":58,"y":0.14921706926543266},{"x":59,"y":0.13616684924345465},{"x":60,"y":0.1820188262499869},{"x":61,"y":0.11617356836795807},{"x":62,"y":0.14826966761611404}]},
            {"key":"Stream2","values":[{"x":0,"y":2.4746091034052524},{"x":1,"y":2.242316813404202},{"x":2,"y":2.0030087001792696},{"x":3,"y":1.6335245084856165},{"x":4,"y":1.3238048759802967},{"x":5,"y":0.9823922017265417},{"x":6,"y":0.7648282179631407},{"x":7,"y":0.541309652513872},{"x":8,"y":0.3528798415112324},{"x":9,"y":0.3008261738097312},{"x":10,"y":0.23232713148049228},{"x":11,"y":0.22724899682552757},{"x":12,"y":0.21657584072043962},{"x":13,"y":0.1883356485258254},{"x":14,"y":0.1353056601928539},{"x":15,"y":0.1160630332480542},{"x":16,"y":0.1424458929717467},{"x":17,"y":0.17931707037423475},{"x":18,"y":0.14737104433351936},{"x":19,"y":0.19153315076606808},{"x":20,"y":0.13949197226162321},{"x":21,"y":0.16455234459140433},{"x":22,"y":0.2330956201615661},{"x":23,"y":0.8244339955811739},{"x":24,"y":2.1801904787279947},{"x":25,"y":3.3328421792675536},{"x":26,"y":2.7544601234473323},{"x":27,"y":1.275351158692884},{"x":28,"y":0.35980089739044935},{"x":29,"y":0.1684017984517331},{"x":30,"y":0.16694720597296395},{"x":31,"y":0.1798245130467067},{"x":32,"y":0.19804676892393128},{"x":33,"y":0.14900524482616645},{"x":34,"y":0.15272966995057013},{"x":35,"y":0.16583863733836335},{"x":36,"y":0.2035562098320991},{"x":37,"y":0.2829538879455978},{"x":38,"y":0.29633405126382695},{"x":39,"y":0.4853964245111342},{"x":40,"y":0.7255156699939225},{"x":41,"y":1.0626046800154105},{"x":42,"y":1.5060347275657555},{"x":43,"y":1.9121068118462208},{"x":44,"y":2.359038673987546},{"x":45,"y":2.6849069687420997},{"x":46,"y":2.84159565819266},{"x":47,"y":2.7603973332288674},{"x":48,"y":2.505279724851516},{"x":49,"y":2.0799339951467353},{"x":50,"y":1.6099913926644016},{"x":51,"y":1.2047945771070707},{"x":52,"y":0.803454908212231},{"x":53,"y":0.6140145750583444},{"x":54,"y":0.42487712196939625},{"x":55,"y":0.24807587106063514},{"x":56,"y":0.17564559424960943},{"x":57,"y":0.20065363388477217},{"x":58,"y":0.19216862159459216},{"x":59,"y":0.1400006754133691},{"x":60,"y":0.1686564730236034},{"x":61,"y":0.10680174366768944},{"x":62,"y":0.15221125110083947}]}
         ]

        $scope.noDataData = [
            {
                "key": "Series 1",
                "values": [ ]
            }
        ];

        $scope.xAxisTickFormatFunction = function(){
            return function(d){
                return d3.time.format('%x')(new Date(d));  //uncomment for date format
            }
        }

        var colorArray = ['#CC0000', '#FF6666', '#FFE6E6'];
        $scope.colorFunction = function() {
            return function(d, i) {
                return colorArray[i];
            };
        }

        $scope.xFunction = function(){
            return function(d){
                return d[0];
            };
        }

        $scope.xAttributeFunction = function(){
            return function(d){
                return d.x;
            };
        }

        $scope.yFunction = function(){
            return function(d){
                return d[1];
            };
        }

        $scope.yAttributeFunction = function(){
            return function(d){
                return d.y;
            };
        }

        $scope.yAxisTickFormatFunction = function(){
            return function(d){
                return d3.format(',d')(d);
            }
        }

        $scope.toolTipContentFunction = function(){
            return function(key, x, y, e, graph) {
                return  'Super New Tooltip' +
                    '<h1>' + key + '</h1>' +
                    '<p>' +  y + ' at ' + x + '</p>'
            }
        }

}
    </script>
Creating and Configuring a Line with Focus Chart
=========================

<div ng-controller="ExampleCtrl">
    <nvd3-line-with-focus-chart
        data="exampleData"
        id="exampleId"
        height="400"
        height2="50"
        margin="{left:80,top:50,bottom:30,right:50}"
        yAxisTickFormat="yAxisTickFormatFunction()"
        xAxisTickFormat="xAxisTickFormatFunction()"
        x2AxisTickFormat="xAxisTickFormatFunction()">
         <svg></svg>
    </nvd3-line-with-focus-chart>
</div>

## How to create a basic chart


Include angularjs-nvd3-directives.js in your HTML file.

{% highlight html %}
<script src="dist/angularjs-nvd3-directives.js"></script>
{% endhighlight %}

Include other dependencies for nvd3.js and d3.js.

{% highlight html %}
<script src="../build/components/d3/d3.js"></script>
<script src="../build/components/nvd3/nv.d3.js"></script>
<link rel="stylesheet" href="path/to/nv.d3.css"/>
{% endhighlight %}


In the Angular App, include nvd3ChartDirectives as a dependency.

{% highlight javascript %}
var app = angular.module("nvd3TestApp", ['nvd3ChartDirectives']);
{% endhighlight %}

Create an Angular.js Controller, and assign json data to a scope variable.

{% highlight javascript linenos %}
function ExampleCtrl($scope){

    $scope.exampleData = [
        {
            "key" : "Quantity" ,
            "bar": true,
            "values" : [ [ 1136005200000 , 1271000.0] , [ 1138683600000 , 1271000.0] , [ 1141102800000 , 1271000.0] , [ 1143781200000 , 0] , [ 1146369600000 , 0] , [ 1149048000000 , 0] , [ 1151640000000 , 0] , [ 1154318400000 , 0] , [ 1156996800000 , 0] , [ 1159588800000 , 3899486.0] , [ 1162270800000 , 3899486.0] , [ 1164862800000 , 3899486.0] , [ 1167541200000 , 3564700.0] , [ 1170219600000 , 3564700.0] , [ 1172638800000 , 3564700.0] , [ 1175313600000 , 2648493.0] , [ 1177905600000 , 2648493.0] , [ 1180584000000 , 2648493.0] , [ 1183176000000 , 2522993.0] , [ 1185854400000 , 2522993.0] , [ 1188532800000 , 2522993.0] , [ 1191124800000 , 2906501.0] , [ 1193803200000 , 2906501.0] , [ 1196398800000 , 2906501.0] , [ 1199077200000 , 2206761.0] , [ 1201755600000 , 2206761.0] , [ 1204261200000 , 2206761.0] , [ 1206936000000 , 2287726.0] , [ 1209528000000 , 2287726.0] , [ 1212206400000 , 2287726.0] , [ 1214798400000 , 2732646.0] , [ 1217476800000 , 2732646.0] , [ 1220155200000 , 2732646.0] , [ 1222747200000 , 2599196.0] , [ 1225425600000 , 2599196.0] , [ 1228021200000 , 2599196.0] , [ 1230699600000 , 1924387.0] , [ 1233378000000 , 1924387.0] , [ 1235797200000 , 1924387.0] , [ 1238472000000 , 1756311.0] , [ 1241064000000 , 1756311.0] , [ 1243742400000 , 1756311.0] , [ 1246334400000 , 1743470.0] , [ 1249012800000 , 1743470.0] , [ 1251691200000 , 1743470.0] , [ 1254283200000 , 1519010.0] , [ 1256961600000 , 1519010.0] , [ 1259557200000 , 1519010.0] , [ 1262235600000 , 1591444.0] , [ 1264914000000 , 1591444.0] , [ 1267333200000 , 1591444.0] , [ 1270008000000 , 1543784.0] , [ 1272600000000 , 1543784.0] , [ 1275278400000 , 1543784.0] , [ 1277870400000 , 1309915.0] , [ 1280548800000 , 1309915.0] , [ 1283227200000 , 1309915.0] , [ 1285819200000 , 1331875.0] , [ 1288497600000 , 1331875.0] , [ 1291093200000 , 1331875.0] , [ 1293771600000 , 1331875.0] , [ 1296450000000 , 1154695.0] , [ 1298869200000 , 1154695.0] , [ 1301544000000 , 1194025.0] , [ 1304136000000 , 1194025.0] , [ 1306814400000 , 1194025.0] , [ 1309406400000 , 1194025.0] , [ 1312084800000 , 1194025.0] , [ 1314763200000 , 1244525.0] , [ 1317355200000 , 475000.0] , [ 1320033600000 , 475000.0] , [ 1322629200000 , 475000.0] , [ 1325307600000 , 690033.0] , [ 1327986000000 , 690033.0] , [ 1330491600000 , 690033.0] , [ 1333166400000 , 514733.0] , [ 1335758400000 , 514733.0]]
        },
        {
            "key" : "Price" ,
            "values" : [ [ 1136005200000 , 71.89] , [ 1138683600000 , 75.51] , [ 1141102800000 , 68.49] , [ 1143781200000 , 62.72] , [ 1146369600000 , 70.39] , [ 1149048000000 , 59.77] , [ 1151640000000 , 57.27] , [ 1154318400000 , 67.96] , [ 1156996800000 , 67.85] , [ 1159588800000 , 76.98] , [ 1162270800000 , 81.08] , [ 1164862800000 , 91.66] , [ 1167541200000 , 84.84] , [ 1170219600000 , 85.73] , [ 1172638800000 , 84.61] , [ 1175313600000 , 92.91] , [ 1177905600000 , 99.8] , [ 1180584000000 , 121.191] , [ 1183176000000 , 122.04] , [ 1185854400000 , 131.76] , [ 1188532800000 , 138.48] , [ 1191124800000 , 153.47] , [ 1193803200000 , 189.95] , [ 1196398800000 , 182.22] , [ 1199077200000 , 198.08] , [ 1201755600000 , 135.36] , [ 1204261200000 , 125.02] , [ 1206936000000 , 143.5] , [ 1209528000000 , 173.95] , [ 1212206400000 , 188.75] , [ 1214798400000 , 167.44] , [ 1217476800000 , 158.95] , [ 1220155200000 , 169.53] , [ 1222747200000 , 113.66] , [ 1225425600000 , 107.59] , [ 1228021200000 , 92.67] , [ 1230699600000 , 85.35] , [ 1233378000000 , 90.13] , [ 1235797200000 , 89.31] , [ 1238472000000 , 105.12] , [ 1241064000000 , 125.83] , [ 1243742400000 , 135.81] , [ 1246334400000 , 142.43] , [ 1249012800000 , 163.39] , [ 1251691200000 , 168.21] , [ 1254283200000 , 185.35] , [ 1256961600000 , 188.5] , [ 1259557200000 , 199.91] , [ 1262235600000 , 210.732] , [ 1264914000000 , 192.063] , [ 1267333200000 , 204.62] , [ 1270008000000 , 235.0] , [ 1272600000000 , 261.09] , [ 1275278400000 , 256.88] , [ 1277870400000 , 251.53] , [ 1280548800000 , 257.25] , [ 1283227200000 , 243.1] , [ 1285819200000 , 283.75] , [ 1288497600000 , 300.98] , [ 1291093200000 , 311.15] , [ 1293771600000 , 322.56] , [ 1296450000000 , 339.32] , [ 1298869200000 , 353.21] , [ 1301544000000 , 348.5075] , [ 1304136000000 , 350.13] , [ 1306814400000 , 347.83] , [ 1309406400000 , 335.67] , [ 1312084800000 , 390.48] , [ 1314763200000 , 384.83] , [ 1317355200000 , 381.32] , [ 1320033600000 , 404.78] , [ 1322629200000 , 382.2] , [ 1325307600000 , 405.0] , [ 1327986000000 , 456.48] , [ 1330491600000 , 542.44] , [ 1333166400000 , 599.55] , [ 1335758400000 , 583.98] ]
        }
    ];

    $scope.xAxisTickFormatFunction = function(){
        return function(d){
            return d3.time.format('%x')(new Date(d));  //uncomment for date format
        }
    }

}

{% endhighlight %}
Include the chart directive in HTML.
The data html attribute should point to the scope variable (exampleData).
Other directive attributes should be the same as the public attributes associated with each chart.

{% highlight html %}
<div ng-controller="ExampleCtrl">
    <nvd3-line-with-focus-chart
            data="exampleData"
            id="exampleId"
            height="400"
            height2="50"
            margin="{left:80,top:50,bottom:30,right:50}"
            yAxisTickFormat="yAxisTickFormatFunction()"
            xAxisTickFormat="xAxisTickFormatFunction()"
            x2AxisTickFormat="xAxisTickFormatFunction()">
         <svg></svg>
    </nvd3-line-with-focus-chart>
</div>
{% endhighlight %}

#Configuration Options


<!--

.showLegend(attrs.showlegend === undefined ? false : (attrs.showlegend === "true"))
.tooltips(attrs.tooltips === undefined ? false : (attrs.tooltips  === "true"))
.noData(attrs.nodata === undefined ? 'No Data Available.' : scope.nodata)
.isArea(attrs.isarea === undefined ? function(){return false;} : function(){ return (attrs.isarea === "true"); });

-->



## ID
Identifier for the chart.  Utilized heavily by d3.js and nvd3.js when creating and updating charts.  If there is more than one chart on a page, every chart should have a unique id.
Datatype: String

## Width
Controls the display width of the chart.
Datatype: Number

## Height
Controls the display height of the top chart.
Datatype: Number

## Height2
Controls the display height of the bottom chart.
Datatype: Number

## Margin
Controls the external margin of the top chart.

Datatype: Object, Number: ``{left:0,top:0,bottom:0,right:0}``

## Margin2
Controls the external margin of the bottom chart.

Datatype: Object, Number: ``{left:0,top:0,bottom:0,right:0}``

## Color
Controls the colors of the chart elements.

Datatype: Function

The function is the same as the d3.js color functions.  Refer to <a href="https://github.com/mbostock/d3/wiki/Colors">d3.js Colors</a> for d3.js color-specific documentation.

To use a configuration function, create a function on the $scope (i.e. $scope.colorFunction).  The function can be named anything, as long as it does not conflict with an existing function name.
To 'connect' the $scope function with the chart.color() function, add a color="" attribute to the directive, with the value of the attribute being the name of the $scope function (i.e. scope="colorFunction()").

{% highlight javascript %}
var colorArray = ['#CC0000', '#FF6666', '#FFE6E6'];
$scope.colorFunction = function() {
    return function(d, i) {
        return colorArray[i];
    };
}
{% endhighlight %}

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-line-with-focus-chart
    	data="exampleData"
        id="colorExample"
        height="400"
        height2="50"
        margin="{left:80,top:50,bottom:30,right:50}"
        yAxisTickFormat="yAxisTickFormatFunction()"
        xAxisTickFormat="xAxisTickFormatFunction()"
        x2AxisTickFormat="xAxisTickFormatFunction()"
        color="colorFunction()">
        	<svg></svg>
    </nvd3-line-with-focus-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-with-focus-chart
    	data="exampleData"
        id="colorExample"
        height="400"
        height2="50"
        margin="{left:80,top:50,bottom:30,right:50}"
        yAxisTickFormat="yAxisTickFormatFunction()"
        xAxisTickFormat="xAxisTickFormatFunction()"
        x2AxisTickFormat="xAxisTickFormatFunction()"
        color="colorFunction()">
        	<svg></svg>
    </nvd3-line-with-focus-chart>
</div>

## Is Area
Enables (true) or Disables (false) rendering of the area for a chart.

Datatype: boolean - (true/false)

{% highlight html %}
<div ng-controller="ExampleCtrl">
    <nvd3-line-with-focus-chart
        data="exampleData"
        id="isAreaExample"
        height="400"
        height2="50"
        margin="{left:80,top:50,bottom:30,right:50}"
        yAxisTickFormat="yAxisTickFormatFunction()"
        xAxisTickFormat="xAxisTickFormatFunction()"
        x2AxisTickFormat="xAxisTickFormatFunction()"
        isArea="true">
        <svg></svg>
    </nvd3-line-with-focus-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
    <nvd3-line-with-focus-chart
        data="exampleData"
        id="isAreaExample"
        height="400"
        height2="50"
        margin="{left:80,top:50,bottom:30,right:50}"
        yAxisTickFormat="yAxisTickFormatFunction()"
        xAxisTickFormat="xAxisTickFormatFunction()"
        x2AxisTickFormat="xAxisTickFormatFunction()"
        isArea="true">
        <svg></svg>
    </nvd3-line-with-focus-chart>
</div>

## Is Area - Individual Data Series
To enable the area on a specific data series, add an additional attribute ```area: true``` to the specific data series.

Datatype: boolean - (true/false)

```
...
{"key":"Stream0","area": true, "values":[{"x":0
...
```

{% highlight html %}
<div ng-controller="ExampleCtrl">
    <nvd3-line-with-focus-chart
        data="isAreaExampleData"
        id="isAreaIndividualExample"
        height="400"
        height2="50"
        x="xAttributeFunction()"
        y="yAttributeFunction()"
        margin="{left:80,top:50,bottom:30,right:50}"
        yAxisTickFormat="yAxisTickFormatFunction()">
        <svg></svg>
    </nvd3-line-with-focus-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
    <nvd3-line-with-focus-chart
        data="isAreaExampleData"
        id="isAreaIndividualExample"
        height="400"
        height2="50"
        x="xAttributeFunction()"
        y="yAttributeFunction()"
        margin="{left:80,top:50,bottom:30,right:50}"
        yAxisTickFormat="yAxisTickFormatFunction()">
        <svg></svg>
    </nvd3-line-with-focus-chart>
</div>

## Show Legend
Enables (true) or Disables (false) rendering of the Chart Legend.

Datatype: boolean - (true/false)

{% highlight html %}
<div ng-controller="ExampleCtrl">
 	<nvd3-line-with-focus-chart
    	data="exampleData"
        id="showLegendExample"
        height="400"
        height2="50"
        margin="{left:80,top:50,bottom:30,right:50}"
        yAxisTickFormat="yAxisTickFormatFunction()"
        xAxisTickFormat="xAxisTickFormatFunction()"
        x2AxisTickFormat="xAxisTickFormatFunction()"
        showLegend="true">
        	<svg></svg>
    </nvd3-line-with-focus-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-with-focus-chart
    	data="exampleData"
        id="showLegendExample"
        height="400"
        height2="50"
        margin="{left:80,top:50,bottom:30,right:50}"
        yAxisTickFormat="yAxisTickFormatFunction()"
        xAxisTickFormat="xAxisTickFormatFunction()"
        x2AxisTickFormat="xAxisTickFormatFunction()"
        showLegend="true">
        	<svg></svg>
    </nvd3-line-with-focus-chart>
</div>

## No Data
Defines the message displayed when data is not available.

Datatype: String

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-line-with-focus-chart
    	data="noDataData"
        id="noDataExample"
        height="400"
        height2="50"
        margin="{left:80,top:50,bottom:30,right:50}"
        yAxisTickFormat="yAxisTickFormatFunction()"
        xAxisTickFormat="xAxisTickFormatFunction()"
        x2AxisTickFormat="xAxisTickFormatFunction()"
        noData="No Data For You!">
        	<svg></svg>
    </nvd3-line-with-focus-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-with-focus-chart
    	data="noDataData"
        id="noDataExample"
        height="400"
        height2="50"
        margin="{left:80,top:50,bottom:30,right:50}"
        yAxisTickFormat="yAxisTickFormatFunction()"
        xAxisTickFormat="xAxisTickFormatFunction()"
        x2AxisTickFormat="xAxisTickFormatFunction()"
        noData="No Data For You!">
        	<svg></svg>
    </nvd3-line-with-focus-chart>
</div>

## X
Function that allows nvd3.js and d3.js to access x values from the 'data'.

Datatype: Function

{% highlight javascript %}
$scope.xFunction = function(){
	return function(d){
		return d[0];
	};
}
{% endhighlight %}

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-line-with-focus-chart
    	data="exampleData"
        id="xExample"
        height="400"
        height2="50"
        margin="{left:80,top:50,bottom:30,right:50}"
        yAxisTickFormat="yAxisTickFormatFunction()"
        xAxisTickFormat="xAxisTickFormatFunction()"
        x2AxisTickFormat="xAxisTickFormatFunction()"
        x="xFunction()">
        	<svg></svg>
    </nvd3-line-with-focus-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-with-focus-chart
    	data="exampleData"
        id="xExample"
        height="400"
        height2="50"
        margin="{left:80,top:50,bottom:30,right:50}"
        yAxisTickFormat="yAxisTickFormatFunction()"
        xAxisTickFormat="xAxisTickFormatFunction()"
        x2AxisTickFormat="xAxisTickFormatFunction()"
        x="xFunction()">
        	<svg></svg>
    </nvd3-line-with-focus-chart>
</div>

## Y
Function that allows nvd3 and d3 to access y values from the 'data'.

Datatype: Function

{% highlight javascript %}
$scope.yFunction = function(){
	return function(d){
		return d[1];
	};
}
{% endhighlight %}

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-line-with-focus-chart
    	data="exampleData"
        id="yExample"
        height="400"
        height2="50"
        margin="{left:80,top:50,bottom:30,right:50}"
        yAxisTickFormat="yAxisTickFormatFunction()"
        xAxisTickFormat="xAxisTickFormatFunction()"
        x2AxisTickFormat="xAxisTickFormatFunction()"
        y="yFunction()">
        	<svg></svg>
    </nvd3-line-with-focus-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-with-focus-chart
    	data="exampleData"
        id="yExample"
        height="400"
        height2="50"
        margin="{left:80,top:50,bottom:30,right:50}"
        yAxisTickFormat="yAxisTickFormatFunction()"
        xAxisTickFormat="xAxisTickFormatFunction()"
        x2AxisTickFormat="xAxisTickFormatFunction()"
        y="yFunction()">
        	<svg></svg>
    </nvd3-line-with-focus-chart>
</div>

## Force X
List of numbers to Force into the X scale (ie. 0, or a max / min, etc.).  The numbers tell the d3.js the values to use in the scale, rather than d3.js determining the values.

Datatype: Array of Numbers (i.e. [0, 50])

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-line-with-focus-chart
    	data="exampleData"
        id="forcexExample"
        height="400"
        height2="50"
        margin="{left:80,top:50,bottom:30,right:50}"
        yAxisTickFormat="yAxisTickFormatFunction()"
        xAxisTickFormat="xAxisTickFormatFunction()"
        x2AxisTickFormat="xAxisTickFormatFunction()"
        forcex="[0]">
        	<svg></svg>
    </nvd3-line-with-focus-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-with-focus-chart
    	data="exampleData"
        id="forcexExample"
        height="400"
        height2="50"
        margin="{left:80,top:50,bottom:30,right:50}"
        yAxisTickFormat="yAxisTickFormatFunction()"
        xAxisTickFormat="xAxisTickFormatFunction()"
        x2AxisTickFormat="xAxisTickFormatFunction()"
        forcex="[0]">
        	<svg></svg>
    </nvd3-line-with-focus-chart>
</div>
            
## Force Y
List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.).  The numbers tell the d3.js the values to use in the scale, rather than d3.js determining the values.

Datatype: Array of Numbers (i.e. [0, 50]

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-line-with-focus-chart
    	data="exampleData"
        id="forceyExample"
        height="400"
        height2="50"
        margin="{left:80,top:50,bottom:30,right:50}"
        yAxisTickFormat="yAxisTickFormatFunction()"
        xAxisTickFormat="xAxisTickFormatFunction()"
        x2AxisTickFormat="xAxisTickFormatFunction()"
        forcey="[500]">
        	<svg></svg>
    </nvd3-line-with-focus-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-with-focus-chart
    	data="exampleData"
        id="forceyExample"
        height="400"
        height2="50"
        margin="{left:80,top:50,bottom:30,right:50}"
        yAxisTickFormat="yAxisTickFormatFunction()"
        xAxisTickFormat="xAxisTickFormatFunction()"
        x2AxisTickFormat="xAxisTickFormatFunction()"
        forcey="[500]">
    		<svg></svg>
    </nvd3-line-with-focus-chart>
</div>

## Interactive
Enables (true) or Disables (false) interactivity for a chart.  Interactivity includes tooltips, click events, etc.

Datatype: boolean - (true/false)

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-line-with-focus-chart
    	data="exampleData"
        id="interactiveExample"
        height="400"
        height2="50"
        margin="{left:80,top:50,bottom:30,right:50}"
        yAxisTickFormat="yAxisTickFormatFunction()"
        xAxisTickFormat="xAxisTickFormatFunction()"
        x2AxisTickFormat="xAxisTickFormatFunction()"
        interactive="true">
        	<svg></svg>
    </nvd3-line-with-focus-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-with-focus-chart
    	data="exampleData"
        id="interactiveExample"
        height="400"
        height2="50"
        margin="{left:80,top:50,bottom:30,right:50}"
        yAxisTickFormat="yAxisTickFormatFunction()"
        xAxisTickFormat="xAxisTickFormatFunction()"
        x2AxisTickFormat="xAxisTickFormatFunction()"
        interactive="true">
        	<svg></svg>
    </nvd3-line-with-focus-chart>
</div>


## Tooltips
Enables (true) or Disables (false) rendering of the tooltips.

The Interactive attribute must be included and set to true before tooltips will be rendered.

Datatype: boolean - (true/false)

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-line-with-focus-chart
    	data="exampleData"
        id="toolTipExample"
        height="400"
        height2="50"
        margin="{left:80,top:50,bottom:30,right:50}"
        yAxisTickFormat="yAxisTickFormatFunction()"
        xAxisTickFormat="xAxisTickFormatFunction()"
        x2AxisTickFormat="xAxisTickFormatFunction()"
        tooltips="true">
        	<svg></svg>
    </nvd3-line-with-focus-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-with-focus-chart
    	data="exampleData"
        id="toolTipExample"
        height="400"
        height2="50"
        margin="{left:80,top:50,bottom:30,right:50}"
        yAxisTickFormat="yAxisTickFormatFunction()"
        xAxisTickFormat="xAxisTickFormatFunction()"
        x2AxisTickFormat="xAxisTickFormatFunction()"
        tooltips="true">
        	<svg></svg>
    </nvd3-line-with-focus-chart>
</div>

## Tooltip Content
Controls how the tooltips are displayed.

The Interactive attribute must be included and set to true before tooltips will be rendered.

The Tooltips attribute must be included and set to true before tooltips will be rendered.

Datatype: Function

The function has the following signature function(key, x, y, e, graph), and should return a String.

{% highlight javascript %}
$scope.toolTipContentFunction = function(){
	return function(key, x, y, e, graph) {
    	return  'Super New Tooltip' +
        	'<h1>' + key + '</h1>' +
            '<p>' +  y + ' at ' + x + '</p>'
	}
}
{% endhighlight %}

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-line-with-focus-chart
    	data="exampleData"
        id="toolTipContentExample"
        height="400"
        height2="50"
        margin="{left:80,top:50,bottom:30,right:50}"
        yAxisTickFormat="yAxisTickFormatFunction()"
        xAxisTickFormat="xAxisTickFormatFunction()"
        x2AxisTickFormat="xAxisTickFormatFunction()"
        tooltips="true"
        tooltipcontent="toolTipContentFunction()">
        	<svg></svg>
    </nvd3-line-with-focus-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-with-focus-chart
    	data="exampleData"
        id="toolTipContentExample"
        height="400"
        height2="50"
        margin="{left:80,top:50,bottom:30,right:50}"
        yAxisTickFormat="yAxisTickFormatFunction()"
        xAxisTickFormat="xAxisTickFormatFunction()"
        x2AxisTickFormat="xAxisTickFormatFunction()"
        tooltips="true"
        tooltipcontent="toolTipContentFunction()">
        	<svg></svg>
    </nvd3-line-with-focus-chart>
</div>


## Interpolate

Refer to Interpolation on the <a href="https://github.com/mbostock/d3/wiki/SVG-Shapes#wiki-line_interpolate">d3.js</a> wiki.

If interpolate is specified, sets the interpolation mode to the specified string. If interpolate is not specified, returns the current interpolation mode.

### *Linear*
Piecewise linear segments, as in a polyline.

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-line-with-focus-chart
    	data="exampleData"
        id="interpolateExampleLinear"
        height="400"
        height2="50"
        margin="{left:80,top:50,bottom:30,right:50}"
        yAxisTickFormat="yAxisTickFormatFunction()"
        xAxisTickFormat="xAxisTickFormatFunction()"
        x2AxisTickFormat="xAxisTickFormatFunction()"
        interpolate="linear">
        	<svg></svg>
    </nvd3-line-with-focus-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-with-focus-chart
    	data="exampleData"
        id="interpolateExampleLinear"
        height="400"
        height2="50"
        margin="{left:80,top:50,bottom:30,right:50}"
        yAxisTickFormat="yAxisTickFormatFunction()"
        xAxisTickFormat="xAxisTickFormatFunction()"
        x2AxisTickFormat="xAxisTickFormatFunction()"
        interpolate="linear">
        	<svg></svg>
    </nvd3-line-with-focus-chart>
</div>

### *Linear-Closed*
Close the linear segments to form a polygon.

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-line-with-focus-chart
    	data="exampleData"
        id="interpolateExampleLinearClosed"
        height="400"
        height2="50"
        margin="{left:80,top:50,bottom:30,right:50}"
        yAxisTickFormat="yAxisTickFormatFunction()"
        xAxisTickFormat="xAxisTickFormatFunction()"
        x2AxisTickFormat="xAxisTickFormatFunction()"
        interpolate="linear-closed">
        	<svg></svg>
    </nvd3-line-with-focus-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-with-focus-chart
    	data="exampleData"
        id="interpolateExampleLinearClosed"
        height="400"
        height2="50"
        margin="{left:80,top:50,bottom:30,right:50}"
        yAxisTickFormat="yAxisTickFormatFunction()"
        xAxisTickFormat="xAxisTickFormatFunction()"
        x2AxisTickFormat="xAxisTickFormatFunction()"
        interpolate="linear-closed">
        	<svg></svg>
    </nvd3-line-with-focus-chart>
</div>

### *Step*
Alternate between horizontal and vertical segments, as in a step function.

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-line-with-focus-chart
    	data="exampleData"
        id="interpolateExampleStep"
        height="400"
        height2="50"
        margin="{left:80,top:50,bottom:30,right:50}"
        yAxisTickFormat="yAxisTickFormatFunction()"
        xAxisTickFormat="xAxisTickFormatFunction()"
        x2AxisTickFormat="xAxisTickFormatFunction()"
        interpolate="step">
        	<svg></svg>
    </nvd3-line-with-focus-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-with-focus-chart
    	data="exampleData"
        id="interpolateExampleStep"
        height="400"
        height2="50"
        margin="{left:80,top:50,bottom:30,right:50}"
        yAxisTickFormat="yAxisTickFormatFunction()"
        xAxisTickFormat="xAxisTickFormatFunction()"
        x2AxisTickFormat="xAxisTickFormatFunction()"
        interpolate="step">
        	<svg></svg>
    </nvd3-line-with-focus-chart>
</div>

### *Step-Before*
Alternate between vertical and horizontal segments, as in a step function.

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-line-with-focus-chart
    	data="exampleData"
        id="interpolateExampleStepBefore"
        height="400"
        height2="50"
        margin="{left:80,top:50,bottom:30,right:50}"
        yAxisTickFormat="yAxisTickFormatFunction()"
        xAxisTickFormat="xAxisTickFormatFunction()"
        x2AxisTickFormat="xAxisTickFormatFunction()"
        interpolate="step-before">
        	<svg></svg>
    </nvd3-line-with-focus-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-with-focus-chart
    	data="exampleData"
        id="interpolateExampleStepBefore"
        height="400"
        height2="50"
        margin="{left:80,top:50,bottom:30,right:50}"
        yAxisTickFormat="yAxisTickFormatFunction()"
        xAxisTickFormat="xAxisTickFormatFunction()"
        x2AxisTickFormat="xAxisTickFormatFunction()"
        interpolate="step-before">
        	<svg></svg>
    </nvd3-line-with-focus-chart>
</div>

### *Step-After*
Alternate between horizontal and vertical segments, as in a step function.

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-line-with-focus-chart
    	data="exampleData"
        id="interpolateExampleStepAfter"
        height="400"
        height2="50"
        margin="{left:80,top:50,bottom:30,right:50}"
        yAxisTickFormat="yAxisTickFormatFunction()"
        xAxisTickFormat="xAxisTickFormatFunction()"
        x2AxisTickFormat="xAxisTickFormatFunction()"
        interpolate="step-after">
        	<svg></svg>
    </nvd3-line-with-focus-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-with-focus-chart
    	data="exampleData"
        id="interpolateExampleStepAfter"
        height="400"
        height2="50"
        margin="{left:80,top:50,bottom:30,right:50}"
        yAxisTickFormat="yAxisTickFormatFunction()"
        xAxisTickFormat="xAxisTickFormatFunction()"
        x2AxisTickFormat="xAxisTickFormatFunction()"
        interpolate="step-after">
        	<svg></svg>
    </nvd3-line-with-focus-chart>
</div>

### *Basis*
A B-spline, with control point duplication on the ends.

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-line-with-focus-chart
    	data="exampleData"
        id="interpolateExampleBasis"
        height="400"
        height2="50"
        margin="{left:80,top:50,bottom:30,right:50}"
        yAxisTickFormat="yAxisTickFormatFunction()"
        xAxisTickFormat="xAxisTickFormatFunction()"
        x2AxisTickFormat="xAxisTickFormatFunction()"
        interpolate="basis">
        	<svg></svg>
    </nvd3-line-with-focus-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-with-focus-chart
    	data="exampleData"
        id="interpolateExampleBasis"
        height="400"
        height2="50"
        margin="{left:80,top:50,bottom:30,right:50}"
        yAxisTickFormat="yAxisTickFormatFunction()"
        xAxisTickFormat="xAxisTickFormatFunction()"
        x2AxisTickFormat="xAxisTickFormatFunction()"
        interpolate="basis">
        	<svg></svg>
    </nvd3-line-with-focus-chart>
</div>

### *Basis-Open*
An open B-spline; may not intersect the start or end.

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-line-with-focus-chart
    	data="exampleData"
        id="interpolateExampleBasisOpen"
        height="400"
        height2="50"
        margin="{left:80,top:50,bottom:30,right:50}"
        yAxisTickFormat="yAxisTickFormatFunction()"
        xAxisTickFormat="xAxisTickFormatFunction()"
        x2AxisTickFormat="xAxisTickFormatFunction()"
        interpolate="basis-open">
        	<svg></svg>
    </nvd3-line-with-focus-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-with-focus-chart
    	data="exampleData"
        id="interpolateExampleBasisOpen"
        height="400"
        height2="50"
        margin="{left:80,top:50,bottom:30,right:50}"
        yAxisTickFormat="yAxisTickFormatFunction()"
        xAxisTickFormat="xAxisTickFormatFunction()"
        x2AxisTickFormat="xAxisTickFormatFunction()"
        interpolate="basis-open">
        	<svg></svg>
    </nvd3-line-with-focus-chart>
</div>

### *Basis-Closed*
A closed B-spline, as in a loop.

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-line-with-focus-chart
    	data="exampleData"
        id="interpolateExampleBasisClosed"
        height="400"
        height2="50"
        margin="{left:80,top:50,bottom:30,right:50}"
        yAxisTickFormat="yAxisTickFormatFunction()"
        xAxisTickFormat="xAxisTickFormatFunction()"
        x2AxisTickFormat="xAxisTickFormatFunction()"
        interpolate="basis-closed">
        	<svg></svg>
    </nvd3-line-with-focus-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-with-focus-chart
    	data="exampleData"
        id="interpolateExampleBasisClosed"
        height="400"
        height2="50"
        margin="{left:80,top:50,bottom:30,right:50}"
        yAxisTickFormat="yAxisTickFormatFunction()"
        xAxisTickFormat="xAxisTickFormatFunction()"
        x2AxisTickFormat="xAxisTickFormatFunction()"
        interpolate="basis-closed">
        	<svg></svg>
    </nvd3-line-with-focus-chart>
</div>

### *Bundle*
Equivalent to basis, except the tension parameter is used to straighten the spline.

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-line-with-focus-chart
    	data="exampleData"
        id="interpolateExampleBundle"
        height="400"
        height2="50"
        margin="{left:80,top:50,bottom:30,right:50}"
        yAxisTickFormat="yAxisTickFormatFunction()"
        xAxisTickFormat="xAxisTickFormatFunction()"
        x2AxisTickFormat="xAxisTickFormatFunction()"
        interpolate="bundle">
        	<svg></svg>
    </nvd3-line-with-focus-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-with-focus-chart
    	data="exampleData"
        id="interpolateExampleBundle"
        height="400"
        height2="50"
        margin="{left:80,top:50,bottom:30,right:50}"
        yAxisTickFormat="yAxisTickFormatFunction()"
        xAxisTickFormat="xAxisTickFormatFunction()"
        x2AxisTickFormat="xAxisTickFormatFunction()"
        interpolate="bundle">
        	<svg></svg>
    </nvd3-line-with-focus-chart>
</div>

### *Cardinal*
A Cardinal spline, with control point duplication on the ends.

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-line-with-focus-chart
    	data="exampleData"
        id="interpolateExampleCardinal"
        height="400"
        height2="50"
        margin="{left:80,top:50,bottom:30,right:50}"
        yAxisTickFormat="yAxisTickFormatFunction()"
        xAxisTickFormat="xAxisTickFormatFunction()"
        x2AxisTickFormat="xAxisTickFormatFunction()"
        interpolate="cardinal">
        	<svg></svg>
    </nvd3-line-with-focus-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-with-focus-chart
    	data="exampleData"
        id="interpolateExampleCardinal"
        height="400"
        height2="50"
        margin="{left:80,top:50,bottom:30,right:50}"
        yAxisTickFormat="yAxisTickFormatFunction()"
        xAxisTickFormat="xAxisTickFormatFunction()"
        x2AxisTickFormat="xAxisTickFormatFunction()"
        interpolate="cardinal">
        	<svg></svg>
    </nvd3-line-with-focus-chart>
</div>

### *Cardinal-Open*
An open Cardinal spline; may not intersect the start or end, but will intersect other control points.

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-line-with-focus-chart
    	data="exampleData"
        id="interpolateExampleCardinalOpen"
        height="400"
        height2="50"
        margin="{left:80,top:50,bottom:30,right:50}"
        yAxisTickFormat="yAxisTickFormatFunction()"
        xAxisTickFormat="xAxisTickFormatFunction()"
        x2AxisTickFormat="xAxisTickFormatFunction()"
        interpolate="cardinal-open">
        	<svg></svg>
    </nvd3-line-with-focus-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-with-focus-chart
    	data="exampleData"
        id="interpolateExampleCardinalOpen"
        height="400"
        height2="50"
        margin="{left:80,top:50,bottom:30,right:50}"
        yAxisTickFormat="yAxisTickFormatFunction()"
        xAxisTickFormat="xAxisTickFormatFunction()"
        x2AxisTickFormat="xAxisTickFormatFunction()"
        interpolate="cardinal-open">
        	<svg></svg>
    </nvd3-line-with-focus-chart>
</div>

### *Cardinal-Closed*
A closed Cardinal spline, as in a loop.

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-line-with-focus-chart
    	data="exampleData"
        id="interpolateExampleCardinalClosed"
        height="400"
        height2="50"
        margin="{left:80,top:50,bottom:30,right:50}"
        yAxisTickFormat="yAxisTickFormatFunction()"
        xAxisTickFormat="xAxisTickFormatFunction()"
        x2AxisTickFormat="xAxisTickFormatFunction()"
        interpolate="cardinal-closed">
        	<svg></svg>
    </nvd3-line-with-focus-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-with-focus-chart
    	data="exampleData"
        id="interpolateExampleCardinalClosed"
        height="400"
        height2="50"
        margin="{left:80,top:50,bottom:30,right:50}"
        yAxisTickFormat="yAxisTickFormatFunction()"
        xAxisTickFormat="xAxisTickFormatFunction()"
        x2AxisTickFormat="xAxisTickFormatFunction()"
        interpolate="cardinal-closed">
        	<svg></svg>
    </nvd3-line-with-focus-chart>
</div>

### *Monotone*
Cubic interpolation that preserves monotonicity in y.

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-line-with-focus-chart
    	data="exampleData"
        id="interpolateExampleMonotone"
        height="400"
        height2="50"
        margin="{left:80,top:50,bottom:30,right:50}"
        yAxisTickFormat="yAxisTickFormatFunction()"
        xAxisTickFormat="xAxisTickFormatFunction()"
        x2AxisTickFormat="xAxisTickFormatFunction()"
        interpolate="monotone">
        	<svg></svg>
    </nvd3-line-with-focus-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-with-focus-chart
    	data="exampleData"
        id="interpolateExampleMonotone"
        height="400"
        height2="50"
        margin="{left:80,top:50,bottom:30,right:50}"
        yAxisTickFormat="yAxisTickFormatFunction()"
        xAxisTickFormat="xAxisTickFormatFunction()"
        x2AxisTickFormat="xAxisTickFormatFunction()"
        interpolate="monotone">
        	<svg></svg>
    </nvd3-line-with-focus-chart>
</div>
