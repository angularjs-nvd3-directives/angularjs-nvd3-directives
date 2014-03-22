---
title: line chart
layout: example
description: d3.js, nvd3.js Line Charts with Angular.js Directives
---

<script>

        var app = angular.module("nvd3TestApp", ['nvd3ChartDirectives']);
        function ExampleCtrl($scope){
            $scope.exampleData = [
                {
                    "key": "Series 1",
                    "values": [ [ 1025409600000 , 0] , [ 1028088000000 , -6.3382185140371] , [ 1030766400000 , -5.9507873460847] , [ 1033358400000 , -11.569146943813] , [ 1036040400000 , -5.4767332317425] , [ 1038632400000 , 0.50794682203014] , [ 1041310800000 , -5.5310285460542] , [ 1043989200000 , -5.7838296963382] , [ 1046408400000 , -7.3249341615649] , [ 1049086800000 , -6.7078630712489] , [ 1051675200000 , 0.44227126150934] , [ 1054353600000 , 7.2481659343222] , [ 1056945600000 , 9.2512381306992] , [ 1059624000000 , 11.341210982529] , [ 1062302400000 , 14.734820409020] , [ 1064894400000 , 12.387148007542] , [ 1067576400000 , 18.436471461827] , [ 1070168400000 , 19.830742266977] , [ 1072846800000 , 22.643205829887] , [ 1075525200000 , 26.743156781239] , [ 1078030800000 , 29.597478802228] , [ 1080709200000 , 30.831697585341] , [ 1083297600000 , 28.054068024708] , [ 1085976000000 , 29.294079423832] , [ 1088568000000 , 30.269264061274] , [ 1091246400000 , 24.934526898906] , [ 1093924800000 , 24.265982759406] , [ 1096516800000 , 27.217794897473] , [ 1099195200000 , 30.802601992077] , [ 1101790800000 , 36.331003758254] , [ 1104469200000 , 43.142498700060] , [ 1107147600000 , 40.558263931958] , [ 1109566800000 , 42.543622385800] , [ 1112245200000 , 41.683584710331] , [ 1114833600000 , 36.375367302328] , [ 1117512000000 , 40.719688980730] , [ 1120104000000 , 43.897963036919] , [ 1122782400000 , 49.797033975368] , [ 1125460800000 , 47.085993935989] , [ 1128052800000 , 46.601972859745] , [ 1130734800000 , 41.567784572762] , [ 1133326800000 , 47.296923737245] , [ 1136005200000 , 47.642969612080] , [ 1138683600000 , 50.781515820954] , [ 1141102800000 , 52.600229204305] , [ 1143781200000 , 55.599684490628] , [ 1146369600000 , 57.920388436633] , [ 1149048000000 , 53.503593218971] , [ 1151640000000 , 53.522973979964] , [ 1154318400000 , 49.846822298548] , [ 1156996800000 , 54.721341614650] , [ 1159588800000 , 58.186236223191] , [ 1162270800000 , 63.908065540997] , [ 1164862800000 , 69.767285129367] , [ 1167541200000 , 72.534013373592] , [ 1170219600000 , 77.991819436573] , [ 1172638800000 , 78.143584404990] , [ 1175313600000 , 83.702398665233] , [ 1177905600000 , 91.140859312418] , [ 1180584000000 , 98.590960607028] , [ 1183176000000 , 96.245634754228] , [ 1185854400000 , 92.326364432615] , [ 1188532800000 , 97.068765332230] , [ 1191124800000 , 105.81025556260] , [ 1193803200000 , 114.38348777791] , [ 1196398800000 , 103.59604949810] , [ 1199077200000 , 101.72488429307] , [ 1201755600000 , 89.840147735028] , [ 1204261200000 , 86.963597532664] , [ 1206936000000 , 84.075505208491] , [ 1209528000000 , 93.170105645831] , [ 1212206400000 , 103.62838083121] , [ 1214798400000 , 87.458241365091] , [ 1217476800000 , 85.808374141319] , [ 1220155200000 , 93.158054469193] , [ 1222747200000 , 65.973252382360] , [ 1225425600000 , 44.580686638224] , [ 1228021200000 , 36.418977140128] , [ 1230699600000 , 38.727678144761] , [ 1233378000000 , 36.692674173387] , [ 1235797200000 , 30.033022809480] , [ 1238472000000 , 36.707532162718] , [ 1241064000000 , 52.191457688389] , [ 1243742400000 , 56.357883979735] , [ 1246334400000 , 57.629002180305] , [ 1249012800000 , 66.650985790166] , [ 1251691200000 , 70.839243432186] , [ 1254283200000 , 78.731998491499] , [ 1256961600000 , 72.375528540349] , [ 1259557200000 , 81.738387881630] , [ 1262235600000 , 87.539792394232] , [ 1264914000000 , 84.320762662273] , [ 1267333200000 , 90.621278391889] , [ 1270008000000 , 102.47144881651] , [ 1272600000000 , 102.79320353429] , [ 1275278400000 , 90.529736050479] , [ 1277870400000 , 76.580859994531] , [ 1280548800000 , 86.548979376972] , [ 1283227200000 , 81.879653334089] , [ 1285819200000 , 101.72550015956] , [ 1288497600000 , 107.97964852260] , [ 1291093200000 , 106.16240630785] , [ 1293771600000 , 114.84268599533] , [ 1296450000000 , 121.60793322282] , [ 1298869200000 , 133.41437346605] , [ 1301544000000 , 125.46646042904] , [ 1304136000000 , 129.76784954301] , [ 1306814400000 , 128.15798861044] , [ 1309406400000 , 121.92388706072] , [ 1312084800000 , 116.70036100870] , [ 1314763200000 , 88.367701837033] , [ 1317355200000 , 59.159665765725] , [ 1320033600000 , 79.793568139753] , [ 1322629200000 , 75.903834028417] , [ 1325307600000 , 72.704218209157] , [ 1327986000000 , 84.936990804097] , [ 1330491600000 , 93.388148670744]]
                }
            ];

            $scope.isAreaExampleData = [
                {"key":"Stream0","values":[{"x":0,"y":0.10123346491563687},{"x":1,"y":0.12690740518062005},{"x":2,"y":0.17640897902992675},{"x":3,"y":0.13429189937280933},{"x":4,"y":0.1663959660854444},{"x":5,"y":0.10492295432119941},{"x":6,"y":0.1012303984175346},{"x":7,"y":0.17779273243892946},{"x":8,"y":0.13907320996649564},{"x":9,"y":0.16562203258301106},{"x":10,"y":0.18755059201078275},{"x":11,"y":0.38230653250893193},{"x":12,"y":0.5736897919410685},{"x":13,"y":1.048133615362128},{"x":14,"y":1.8209582673506404},{"x":15,"y":2.820796266692671},{"x":16,"y":3.894304821388285},{"x":17,"y":4.7491522316201165},{"x":18,"y":5.048089165311304},{"x":19,"y":4.832905383561728},{"x":20,"y":4.014324635246319},{"x":21,"y":3.030994126199101},{"x":22,"y":2.0181786618319157},{"x":23,"y":1.2363420924551203},{"x":24,"y":0.6858527548851103},{"x":25,"y":0.3319398743264023},{"x":26,"y":0.24526719944033815},{"x":27,"y":0.20478928731562773},{"x":28,"y":0.18118779186703507},{"x":29,"y":0.11163109489202903},{"x":30,"y":0.18397838858112397},{"x":31,"y":0.17400874375477976},{"x":32,"y":0.1508524250905045},{"x":33,"y":0.19439287073365155},{"x":34,"y":0.16276638218189948},{"x":35,"y":0.12884021181777983},{"x":36,"y":0.18791934857446044},{"x":37,"y":0.12683417185410018},{"x":38,"y":0.1732320037244767},{"x":39,"y":0.10918606957741722},{"x":40,"y":0.17283179629133663},{"x":41,"y":0.17437143035582509},{"x":42,"y":0.11181958217893864},{"x":43,"y":0.1335757958637991},{"x":44,"y":0.1834703246165452},{"x":45,"y":0.18161371957182548},{"x":46,"y":0.19206118975890837},{"x":47,"y":0.23664319240455517},{"x":48,"y":0.3821541392064177},{"x":49,"y":0.43624823478427216},{"x":50,"y":0.5146958380209019},{"x":51,"y":0.7140448603306564},{"x":52,"y":0.8514175379865512},{"x":53,"y":0.9810898590587065},{"x":54,"y":1.1129771396765562},{"x":55,"y":1.3099783036805517},{"x":56,"y":1.3949425177978858},{"x":57,"y":1.355997299789231},{"x":58,"y":1.3245588056274937},{"x":59,"y":1.2807929685246808},{"x":60,"y":1.2088464299894548},{"x":61,"y":1.0113766041350463},{"x":62,"y":0.881484884993623}]},
                {"key":"Stream1","area": true, "values":[{"x":0,"y":1.955950099524088},{"x":1,"y":1.519447279102443},{"x":2,"y":1.2245352060783277},{"x":3,"y":1.2901984013679593},{"x":4,"y":1.7676503889817645},{"x":5,"y":2.6106806687242288},{"x":6,"y":3.9402535915539048},{"x":7,"y":5.603952517605923},{"x":8,"y":7.130626240181372},{"x":9,"y":8.428743711285517},{"x":10,"y":8.98113908748813},{"x":11,"y":8.738913122632738},{"x":12,"y":7.759484398797055},{"x":13,"y":6.323246682871677},{"x":14,"y":4.687733344806634},{"x":15,"y":3.1504860866451585},{"x":16,"y":1.9565887552795178},{"x":17,"y":1.1351961307657898},{"x":18,"y":0.6954586519268663},{"x":19,"y":0.36004352879421203},{"x":20,"y":0.29043907271957853},{"x":21,"y":0.21360381095644862},{"x":22,"y":0.19962255009993682},{"x":23,"y":0.1547305782187245},{"x":24,"y":0.14531806615948134},{"x":25,"y":0.11810663946176886},{"x":26,"y":0.17865607697049332},{"x":27,"y":0.15935389403782318},{"x":28,"y":0.11211220116458666},{"x":29,"y":0.19115521184540238},{"x":30,"y":0.16918842324524797},{"x":31,"y":0.19641056616846808},{"x":32,"y":0.11203908421236797},{"x":33,"y":0.19101995753450626},{"x":34,"y":0.1876368866738238},{"x":35,"y":0.19441046116611368},{"x":36,"y":0.16337435916084678},{"x":37,"y":0.16543056610973222},{"x":38,"y":0.1143508466891956},{"x":39,"y":0.1241943631786854},{"x":40,"y":0.10710227543022484},{"x":41,"y":0.17136750228237363},{"x":42,"y":0.18902077826205643},{"x":43,"y":0.17825439770240337},{"x":44,"y":0.14506592019461095},{"x":45,"y":0.10018612765707076},{"x":46,"y":0.18633547469507905},{"x":47,"y":0.18540953637566418},{"x":48,"y":0.18482169022317976},{"x":49,"y":0.14984436503145845},{"x":50,"y":0.12964752749539912},{"x":51,"y":0.14076081353705377},{"x":52,"y":0.13042350858449936},{"x":53,"y":0.13036318258382382},{"x":54,"y":0.11218480416573584},{"x":55,"y":0.1493127090856433},{"x":56,"y":0.17844136378262193},{"x":57,"y":0.16352732193190606},{"x":58,"y":0.14921706926543266},{"x":59,"y":0.13616684924345465},{"x":60,"y":0.1820188262499869},{"x":61,"y":0.11617356836795807},{"x":62,"y":0.14826966761611404}]},
                {"key":"Stream2","values":[{"x":0,"y":2.4746091034052524},{"x":1,"y":2.242316813404202},{"x":2,"y":2.0030087001792696},{"x":3,"y":1.6335245084856165},{"x":4,"y":1.3238048759802967},{"x":5,"y":0.9823922017265417},{"x":6,"y":0.7648282179631407},{"x":7,"y":0.541309652513872},{"x":8,"y":0.3528798415112324},{"x":9,"y":0.3008261738097312},{"x":10,"y":0.23232713148049228},{"x":11,"y":0.22724899682552757},{"x":12,"y":0.21657584072043962},{"x":13,"y":0.1883356485258254},{"x":14,"y":0.1353056601928539},{"x":15,"y":0.1160630332480542},{"x":16,"y":0.1424458929717467},{"x":17,"y":0.17931707037423475},{"x":18,"y":0.14737104433351936},{"x":19,"y":0.19153315076606808},{"x":20,"y":0.13949197226162321},{"x":21,"y":0.16455234459140433},{"x":22,"y":0.2330956201615661},{"x":23,"y":0.8244339955811739},{"x":24,"y":2.1801904787279947},{"x":25,"y":3.3328421792675536},{"x":26,"y":2.7544601234473323},{"x":27,"y":1.275351158692884},{"x":28,"y":0.35980089739044935},{"x":29,"y":0.1684017984517331},{"x":30,"y":0.16694720597296395},{"x":31,"y":0.1798245130467067},{"x":32,"y":0.19804676892393128},{"x":33,"y":0.14900524482616645},{"x":34,"y":0.15272966995057013},{"x":35,"y":0.16583863733836335},{"x":36,"y":0.2035562098320991},{"x":37,"y":0.2829538879455978},{"x":38,"y":0.29633405126382695},{"x":39,"y":0.4853964245111342},{"x":40,"y":0.7255156699939225},{"x":41,"y":1.0626046800154105},{"x":42,"y":1.5060347275657555},{"x":43,"y":1.9121068118462208},{"x":44,"y":2.359038673987546},{"x":45,"y":2.6849069687420997},{"x":46,"y":2.84159565819266},{"x":47,"y":2.7603973332288674},{"x":48,"y":2.505279724851516},{"x":49,"y":2.0799339951467353},{"x":50,"y":1.6099913926644016},{"x":51,"y":1.2047945771070707},{"x":52,"y":0.803454908212231},{"x":53,"y":0.6140145750583444},{"x":54,"y":0.42487712196939625},{"x":55,"y":0.24807587106063514},{"x":56,"y":0.17564559424960943},{"x":57,"y":0.20065363388477217},{"x":58,"y":0.19216862159459216},{"x":59,"y":0.1400006754133691},{"x":60,"y":0.1686564730236034},{"x":61,"y":0.10680174366768944},{"x":62,"y":0.15221125110083947}]}
             ]

            $scope.noDataData = [
                {
                    "key": "Series 1",
                    "values": [ ]
                }
            ];
			
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

            $scope.xAxisTickFormatFunction = function(){
                return function(d){
                    return d3.time.format('%Y')(new Date(d));
                }
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
                    return d3.format('d')(d);
                }
            }

            $scope.colorFunction = function() {
                return function(d, i) {
                    return '#E01B5D'
                };
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

Creating and Configuring a Line Chart
=========================

<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="exampleId"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        width="550"
        height="350"
        showXAxis="true"
        showYAxis="true">
        <svg></svg>
    </nvd3-line-chart>
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
	        "key": "Series 1",
            "values": [ [ 1025409600000 , 0] , [ 1028088000000 , -6.3382185140371] , [ 1030766400000 , -5.9507873460847] , [ 1033358400000 , -11.569146943813] , [ 1036040400000 , -5.4767332317425] , [ 1038632400000 , 0.50794682203014] , [ 1041310800000 , -5.5310285460542] , [ 1043989200000 , -5.7838296963382] , [ 1046408400000 , -7.3249341615649] , [ 1049086800000 , -6.7078630712489] , [ 1051675200000 , 0.44227126150934] , [ 1054353600000 , 7.2481659343222] , [ 1056945600000 , 9.2512381306992] , [ 1059624000000 , 11.341210982529] , [ 1062302400000 , 14.734820409020] , [ 1064894400000 , 12.387148007542] , [ 1067576400000 , 18.436471461827] , [ 1070168400000 , 19.830742266977] , [ 1072846800000 , 22.643205829887] , [ 1075525200000 , 26.743156781239] , [ 1078030800000 , 29.597478802228] , [ 1080709200000 , 30.831697585341] , [ 1083297600000 , 28.054068024708] , [ 1085976000000 , 29.294079423832] , [ 1088568000000 , 30.269264061274] , [ 1091246400000 , 24.934526898906] , [ 1093924800000 , 24.265982759406] , [ 1096516800000 , 27.217794897473] , [ 1099195200000 , 30.802601992077] , [ 1101790800000 , 36.331003758254] , [ 1104469200000 , 43.142498700060] , [ 1107147600000 , 40.558263931958] , [ 1109566800000 , 42.543622385800] , [ 1112245200000 , 41.683584710331] , [ 1114833600000 , 36.375367302328] , [ 1117512000000 , 40.719688980730] , [ 1120104000000 , 43.897963036919] , [ 1122782400000 , 49.797033975368] , [ 1125460800000 , 47.085993935989] , [ 1128052800000 , 46.601972859745] , [ 1130734800000 , 41.567784572762] , [ 1133326800000 , 47.296923737245] , [ 1136005200000 , 47.642969612080] , [ 1138683600000 , 50.781515820954] , [ 1141102800000 , 52.600229204305] , [ 1143781200000 , 55.599684490628] , [ 1146369600000 , 57.920388436633] , [ 1149048000000 , 53.503593218971] , [ 1151640000000 , 53.522973979964] , [ 1154318400000 , 49.846822298548] , [ 1156996800000 , 54.721341614650] , [ 1159588800000 , 58.186236223191] , [ 1162270800000 , 63.908065540997] , [ 1164862800000 , 69.767285129367] , [ 1167541200000 , 72.534013373592] , [ 1170219600000 , 77.991819436573] , [ 1172638800000 , 78.143584404990] , [ 1175313600000 , 83.702398665233] , [ 1177905600000 , 91.140859312418] , [ 1180584000000 , 98.590960607028] , [ 1183176000000 , 96.245634754228] , [ 1185854400000 , 92.326364432615] , [ 1188532800000 , 97.068765332230] , [ 1191124800000 , 105.81025556260] , [ 1193803200000 , 114.38348777791] , [ 1196398800000 , 103.59604949810] , [ 1199077200000 , 101.72488429307] , [ 1201755600000 , 89.840147735028] , [ 1204261200000 , 86.963597532664] , [ 1206936000000 , 84.075505208491] , [ 1209528000000 , 93.170105645831] , [ 1212206400000 , 103.62838083121] , [ 1214798400000 , 87.458241365091] , [ 1217476800000 , 85.808374141319] , [ 1220155200000 , 93.158054469193] , [ 1222747200000 , 65.973252382360] , [ 1225425600000 , 44.580686638224] , [ 1228021200000 , 36.418977140128] , [ 1230699600000 , 38.727678144761] , [ 1233378000000 , 36.692674173387] , [ 1235797200000 , 30.033022809480] , [ 1238472000000 , 36.707532162718] , [ 1241064000000 , 52.191457688389] , [ 1243742400000 , 56.357883979735] , [ 1246334400000 , 57.629002180305] , [ 1249012800000 , 66.650985790166] , [ 1251691200000 , 70.839243432186] , [ 1254283200000 , 78.731998491499] , [ 1256961600000 , 72.375528540349] , [ 1259557200000 , 81.738387881630] , [ 1262235600000 , 87.539792394232] , [ 1264914000000 , 84.320762662273] , [ 1267333200000 , 90.621278391889] , [ 1270008000000 , 102.47144881651] , [ 1272600000000 , 102.79320353429] , [ 1275278400000 , 90.529736050479] , [ 1277870400000 , 76.580859994531] , [ 1280548800000 , 86.548979376972] , [ 1283227200000 , 81.879653334089] , [ 1285819200000 , 101.72550015956] , [ 1288497600000 , 107.97964852260] , [ 1291093200000 , 106.16240630785] , [ 1293771600000 , 114.84268599533] , [ 1296450000000 , 121.60793322282] , [ 1298869200000 , 133.41437346605] , [ 1301544000000 , 125.46646042904] , [ 1304136000000 , 129.76784954301] , [ 1306814400000 , 128.15798861044] , [ 1309406400000 , 121.92388706072] , [ 1312084800000 , 116.70036100870] , [ 1314763200000 , 88.367701837033] , [ 1317355200000 , 59.159665765725] , [ 1320033600000 , 79.793568139753] , [ 1322629200000 , 75.903834028417] , [ 1325307600000 , 72.704218209157] , [ 1327986000000 , 84.936990804097] , [ 1330491600000 , 93.388148670744]]
		}
	];
}
{% endhighlight %}

Include the chart directive in HTML.
The data html attribute should point to the scope variable (exampleData).
Other directive attributes should be the same as the public attributes associated with each chart.

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="exampleId"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        width="550"
        height="350"
        showXAxis="true"
        showYAxis="true">
        	<svg></svg>
    </nvd3-line-chart>
</div>
{% endhighlight %}

#Configuration Options

## ID
Identifier for the chart.  Utilized heavily by d3.js and nvd3.js when creating and updating charts.  If there is more than one chart on a page, every chart should have a unique id.
Datatype: String
    
## Width
Controls the display width of the chart.
Datatype: Number

## Height
Controls the display height of the chart.
Datatype: Number

## Margin
Controls the external margin of the chart.

Datatype: Object, Number: ``{left:0,top:0,bottom:0,right:0}``

## Show X Axis
Toggles visibility of the x axis

Datatype: Boolean

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="showXAxisExample"
        width="550"
        height="300"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="false"
        showYAxis="true">
    		<svg></svg>
    </nvd3-line-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="showXAxisExample"
        width="550"
        height="300"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="false"
        showYAxis="true">
    		<svg></svg>
    </nvd3-line-chart>
</div>

## Show Y Axis
Toggles visibility of the y axis

Datatype: boolean - (true/false)

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="showXAxisExample"
        width="550"
        height="300"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="false">
    		<svg></svg>
    </nvd3-line-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="showYAxisExample"
        width="550"
        height="300"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="false">
    		<svg></svg>
    </nvd3-line-chart>
</div>


## Color
Controls the colors of the chart elements.

Datatype: Function

The function is the same as the d3.js color functions.  Refer to <a href="https://github.com/mbostock/d3/wiki/Colors">d3.js Colors</a> for d3.js color-specific documentation.

To use a configuration function, create a function on the $scope (i.e. $scope.colorFunction).  The function can be named anything, as long as it does not conflict with an existing function name.
To 'connect' the $scope function with the chart.color() function, add a color="" attribute to the directive, with the value of the attribute being the name of the $scope function (i.e. scope="colorFunction()").

{% highlight javascript %}
$scope.colorFunction = function() {
	return function(d, i) {
    	return '#E01B5D'
    };
}
{% endhighlight %}

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="colorExample"
        width="550"
        height="300"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        color="colorFunction()">
        	<svg></svg>
    </nvd3-line-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="colorExample"
        width="550"
        height="300"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        color="colorFunction()">
        	<svg></svg>
    </nvd3-line-chart>
</div>

## Is Area
Enables (true) or Disables (false) rendering of the area for all chart series.

Datatype: boolean - (true/false)

{% highlight html %}
<div ng-controller="ExampleCtrl">
    <nvd3-line-chart
            data="exampleData"
            id="isAreaExample"
            width="550"
            height="300"
            xAxisTickFormat="xAxisTickFormatFunction()"
            yAxisTickFormat="yAxisTickFormatFunction()"
            showXAxis="true"
            showYAxis="true"
            isArea="true">
        <svg></svg>
     </nvd3-line-chart>
</div>
{% endhighlight %}
        
<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="isAreaExample"
        width="550"
        height="300"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        isArea="true">
        	<svg></svg>
    </nvd3-line-chart>
</div>        

## Is Area - Individual Data Series
To enable the area on a specific data series, add an additional attribute ```area: true``` to the specific data series.

Datatype: boolean - (true/false)

```
...
{"key":"Stream1", "area": true, "values":[{"x
...
```


{% highlight html %}
<div ng-controller="ExampleCtrl">
    <nvd3-line-chart
            data="isAreaExampleData"
            id="isAreaDataExample"
            width="550"
            height="300"
            x="xAttributeFunction()"
            y="yAttributeFunction()"
            yAxisTickFormat="yAxisTickFormatFunction()"
            showXAxis="true"
            showYAxis="true">
        <svg></svg>
     </nvd3-line-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="isAreaExampleData"
        id="isAreaDataExample"
        width="550"
        height="300"
        x="xAttributeFunction()"
        y="yAttributeFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true">
        	<svg></svg>
    </nvd3-line-chart>
</div>


## Show Legend
Enables (true) or Disables (false) rendering of the Chart Legend.

Datatype: boolean - (true/false)

{% highlight html %}
<div ng-controller="ExampleCtrl">
 	<nvd3-line-chart
    	data="exampleData"
        id="showLegendExample"
        width="550"
        height="300"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        showLegend="true">
        	<svg></svg>
    </nvd3-line-chart>
</div>            
{% endhighlight %}
            
<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="showLegendExample"
        width="550"
        height="300"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        showLegend="true">
        	<svg></svg>
    </nvd3-line-chart>
</div>            
            
## No Data
Defines the message displayed when data is not available.

Datatype: String

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="noDataData"
        id="noDataExample"
        width="550"
        height="300"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        noData="No Data For You!">
        	<svg></svg>
    </nvd3-line-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="noDataData"
        id="noDataExample"
        width="550"
        height="300"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        noData="No Data For You!">
        	<svg></svg>
    </nvd3-line-chart>
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
	<nvd3-line-chart
    	data="exampleData"
        id="xExample"
        width="550"
        height="300"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        x="xFunction()">
        	<svg></svg>
    </nvd3-line-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="xExample"
        width="550"
        height="300"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        x="xFunction()">
        	<svg></svg>
    </nvd3-line-chart>
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
	<nvd3-line-chart
    	data="exampleData"
        id="yExample"
        width="550"
        height="300"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        y="yFunction()">
        	<svg></svg>
    </nvd3-line-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="yExample"
        width="550"
        height="300"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        y="yFunction()">        
        	<svg></svg>
    </nvd3-line-chart>
</div>
            
## Force X
List of numbers to Force into the X scale (ie. 0, or a max / min, etc.).  The numbers tell the d3.js the values to use in the scale, rather than d3.js determining the values.

Datatype: Array of Numbers (i.e. [0, 50])

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="forcexExample"
        width="550"
        height="300"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        forcex="[0]">
        	<svg></svg>
    </nvd3-line-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="forcexExample"
        width="550"
        height="300"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        forcex="[0]">
        	<svg></svg>
    </nvd3-line-chart>
</div>
            
## Force Y
List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.).  The numbers tell the d3.js the values to use in the scale, rather than d3.js determining the values.

Datatype: Array of Numbers (i.e. [0, 50]

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="forceyExample"
        width="550"
        height="300"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        forcey="[500]">
        	<svg></svg>
    </nvd3-line-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="forceyExample"
        width="550"
        height="300"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        forcey="[500]">
    		<svg></svg>
    </nvd3-line-chart>
</div>
      
## Interactive
Enables (true) or Disables (false) interactivity for a chart.  Interactivity includes tooltips, click events, etc.

Datatype: boolean - (true/false)

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="interactiveExample"
        width="550"
        height="350"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        interactive="true">
        	<svg></svg>
    </nvd3-line-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="interactiveExample"
        width="550"
        height="350"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        interactive="true">
        	<svg></svg>
    </nvd3-line-chart>
</div>

## Use Interactive Guideline
Enables (true) or Disables (false) interactive Guide Line.

Datatype: boolean - (true/false)

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="interactiveGuideLineExample"
        width="550"
        height="350"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        useInteractiveGuideLine="true">
        	<svg></svg>
    </nvd3-line-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="interactiveGuideLineExample"
        width="550"
        height="350"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        useInteractiveGuideLine="true">
        	<svg></svg>
    </nvd3-line-chart>
</div>

## Tooltips
Enables (true) or Disables (false) rendering of the tooltips.

The Interactive attribute must be included and set to true before tooltips will be rendered.

Datatype: boolean - (true/false)

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="toolTipExample"
        width="550"
        height="350"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        interactive="true"
        tooltips="true">
        	<svg></svg>
    </nvd3-line-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="toolTipExample"
        width="550"
        height="350"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        interactive="true"
        tooltips="true">
        	<svg></svg>
    </nvd3-line-chart>
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
	<nvd3-line-chart
    	data="exampleData"
        id="toolTipContentExample"
        width="550"
        height="350"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        interactive="true"
        tooltips="true"
        tooltipcontent="toolTipContentFunction()">
        	<svg></svg>
    </nvd3-line-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="toolTipContentExample"
        width="550"
        height="350"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        interactive="true"
        tooltips="true"
        tooltipcontent="toolTipContentFunction()">
        	<svg></svg>
    </nvd3-line-chart>
</div>
            
## Clip Edge
Enables (true) or Disables (false) masking points within x and y scale.

Datatype: boolean - (true/false)

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="clipEdgeExample"
        width="550"
        height="350"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        interactive="true"
        clipEdge="true">
        	<svg></svg>
    </nvd3-line-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="clipEdgeExample"
        width="550"
        height="350"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        interactive="true"
        clipEdge="true">
    		<svg></svg>
    </nvd3-line-chart>
</div>
            
## Clip Voronoi
Enables (true) or Disables (false) the masking of each point with a circle.

Datatype: boolean - (true/false)

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="clipVoronoiExample"
        width="550"
        height="350"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        interactive="true"
        clipVoronoi="true">
        	<svg></svg>
    </nvd3-line-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="clipVoronoiExample"
        width="550"
        height="350"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        interactive="true"
        clipVoronoi="true">
    		<svg></svg>
    </nvd3-line-chart>
</div>


## Interpolate

Refer to Interpolation on the <a href="https://github.com/mbostock/d3/wiki/SVG-Shapes#wiki-line_interpolate">d3.js</a> wiki.

If interpolate is specified, sets the interpolation mode to the specified string. If interpolate is not specified, returns the current interpolation mode.

### *Linear*
Piecewise linear segments, as in a polyline.

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="interpolateExampleLinear"
        width="550"
        height="350"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        interpolate="linear">
        	<svg></svg>
    </nvd3-line-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="interpolateExampleLinear"
        width="550"
        height="350"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        interpolate="linear">
        	<svg></svg>
    </nvd3-line-chart>
</div>

### *Linear-Closed*
Close the linear segments to form a polygon.

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="interpolateExampleLinearClosed"
        width="550"
        height="350"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        interpolate="linear-closed">
        	<svg></svg>
    </nvd3-line-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="interpolateExampleLinearClosed"
        width="550"
        height="350"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        interpolate="linear-closed">
        	<svg></svg>
    </nvd3-line-chart>
</div>

### *Step*
Alternate between horizontal and vertical segments, as in a step function.

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="interpolateExampleStep"
        width="550"
        height="350"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        interpolate="step">
        	<svg></svg>
    </nvd3-line-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="interpolateExampleStep"
        width="550"
        height="350"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        interpolate="step">
        	<svg></svg>
    </nvd3-line-chart>
</div>

### *Step-Before*
Alternate between vertical and horizontal segments, as in a step function.

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="interpolateExampleStepBefore"
        width="550"
        height="350"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        interpolate="step-before">
        	<svg></svg>
    </nvd3-line-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="interpolateExampleStepBefore"
        width="550"
        height="350"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        interpolate="step-before">
        	<svg></svg>
    </nvd3-line-chart>
</div>

### *Step-After*
Alternate between horizontal and vertical segments, as in a step function.

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="interpolateExampleStepAfter"
        width="550"
        height="350"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        interpolate="step-after">
        	<svg></svg>
    </nvd3-line-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="interpolateExampleStepAfter"
        width="550"
        height="350"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        interpolate="step-after">
        	<svg></svg>
    </nvd3-line-chart>
</div>

### *Basis*
A B-spline, with control point duplication on the ends.

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="interpolateExampleBasis"
        width="550"
        height="350"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        interpolate="basis">
        	<svg></svg>
    </nvd3-line-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="interpolateExampleBasis"
        width="550"
        height="350"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        interpolate="basis">
        	<svg></svg>
    </nvd3-line-chart>
</div>

### *Basis-Open*
An open B-spline; may not intersect the start or end.

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="interpolateExampleBasisOpen"
        width="550"
        height="350"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        interpolate="basis-open">
        	<svg></svg>
    </nvd3-line-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="interpolateExampleBasisOpen"
        width="550"
        height="350"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        interpolate="basis-open">
        	<svg></svg>
    </nvd3-line-chart>
</div>

### *Basis-Closed*
A closed B-spline, as in a loop.

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="interpolateExampleBasisClosed"
        width="550"
        height="350"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        interpolate="basis-closed">
        	<svg></svg>
    </nvd3-line-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="interpolateExampleBasisClosed"
        width="550"
        height="350"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        interpolate="basis-closed">
        	<svg></svg>
    </nvd3-line-chart>
</div>

### *Bundle*
Equivalent to basis, except the tension parameter is used to straighten the spline.

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="interpolateExampleBundle"
        width="550"
        height="350"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        interpolate="bundle">
        	<svg></svg>
    </nvd3-line-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="interpolateExampleBundle"
        width="550"
        height="350"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        interpolate="bundle">
        	<svg></svg>
    </nvd3-line-chart>
</div>

### *Cardinal*
A Cardinal spline, with control point duplication on the ends.

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="interpolateExampleCardinal"
        width="550"
        height="350"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        interpolate="cardinal">
        	<svg></svg>
    </nvd3-line-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="interpolateExampleCardinal"
        width="550"
        height="350"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        interpolate="cardinal">
        	<svg></svg>
    </nvd3-line-chart>
</div>

### *Cardinal-Open*
An open Cardinal spline; may not intersect the start or end, but will intersect other control points.

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="interpolateExampleCardinalOpen"
        width="550"
        height="350"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        interpolate="cardinal-open">
        	<svg></svg>
    </nvd3-line-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="interpolateExampleCardinalOpen"
        width="550"
        height="350"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        interpolate="cardinal-open">
        	<svg></svg>
    </nvd3-line-chart>
</div>

### *Cardinal-Closed*
A closed Cardinal spline, as in a loop.

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="interpolateExampleCardinalClosed"
        width="550"
        height="350"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        interpolate="cardinal-closed">
        	<svg></svg>
    </nvd3-line-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="interpolateExampleCardinalClosed"
        width="550"
        height="350"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        interpolate="cardinal-closed">
        	<svg></svg>
    </nvd3-line-chart>
</div>

### *Monotone*
Cubic interpolation that preserves monotonicity in y.

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="interpolateExampleMonotone"
        width="550"
        height="350"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        interpolate="monotone">
        	<svg></svg>
    </nvd3-line-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="interpolateExampleMonotone"
        width="550"
        height="350"
        xAxisTickFormat="xAxisTickFormatFunction()"
        yAxisTickFormat="yAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true"
        interpolate="monotone">
        	<svg></svg>
    </nvd3-line-chart>
</div>
