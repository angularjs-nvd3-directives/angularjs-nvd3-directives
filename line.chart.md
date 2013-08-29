---
title: linechart
layout: example
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

			$scope.yFunction = function(){
				return function(d){
					return d[1];
				};
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
        width="550"
        height="350"
        showXAxis="true"
        showYAxis="true">
        	<svg></svg>
    </nvd3-line-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="exampleId"
        width="550"
        height="350"
        showXAxis="true"
        showYAxis="true">
        <svg></svg>
    </nvd3-line-chart>
</div>

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
        showXAxis="true"
        showYAxis="true"
        color="colorFunction()">
        	<svg></svg></nvd3-line-chart>
</div>

## Is Area
Enables (true) or Disables (false) rendering of the area for a chart.

Datatype: boolean - (true/false)

{% highlight html %}
<div ng-controller="ExampleCtrl">
            <nvd3-line-chart
                    data="exampleData"
                    id="isAreaExample"
                    width="550"
                    height="300"
                    showXAxis="true"
                    showYAxis="true"
                    isArea="true"
                    ><svg></svg></nvd3-line-chart>
        </div>
{% endhighlight %}
        
<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="isAreaExample"
        width="550"
        height="300"
        showXAxis="true"
        showYAxis="true"
        isArea="true">
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
        showXAxis="true"
        showYAxis="true"
        noData="Data aint here">
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
        showXAxis="true"
        showYAxis="true"
        interactive="true">
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
        showXAxis="true"
        showYAxis="true"
        interpolate="monotone">
        	<svg></svg>
    </nvd3-line-chart>
</div>
