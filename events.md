---
title: events
layout: example
description: d3.js, nvd3.js, Angular.js, event, events, tooltip, mouseover, mouseout, mousemove
---

<script>
    var app = angular.module("nvd3TestApp", ['nvd3ChartDirectives']);

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
                return d3.time.format('%Y')(new Date(d));
            }
        }

        $scope.event = {point:[]};

        $scope.$on('tooltipShow.directive', function(angularEvent, event){
            angularEvent.targetScope.$parent.event = event;
            angularEvent.targetScope.$parent.$digest();
        });

    }
</script>

Working with events
=========================

Events exposed by nvd3.js and d3.js are re-emitted from the directives as scope events ($scope.$emit).  Events are re-emitted with the same names as the underlying framework with the addition on '.directive'.  Using duplicate names overrides existing events.

> If an event listener was already registered for the same type, the existing listener is removed before the new listener is added. To register multiple listeners for the same event type, the type may be followed by an optional namespace, such as "click.foo" and "click.bar"
> [From d3.js wiki](https://github.com/mbostock/d3/wiki/Internals#events)

---

## Event Example

To capture exposed events, add a listener for the event(s) of interest using [scope](http://docs.angularjs.org/api/ng.$rootScope.Scope) `$on` method.

The directives will re-emit an event usingt the events original name, plus `.directive` on the end.

For example, all nvd3 `tooltipShow` events are re-emitted as `tooltipShow.directive`.  Hovering over the chart will cause the tooltipShow event to fire.

{% highlight javascript %}
$scope.$on('tooltipShow.directive', function(angularEvent, event){
    angularEvent.targetScope.$parent.event = event;
    angularEvent.targetScope.$parent.$digest();
});
{% endhighlight %}


{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="exampleId"
        interactive="true"
        xAxisTickFormat="xAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true">
        	<svg></svg>
    </nvd3-line-chart>
    <div><b>Point Data</b>
        <div ng-repeat="point in event.point">
            <div ng-bind="point"></div>
        </div>
    </div>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-line-chart
    	data="exampleData"
        id="exampleId"
        interactive="true"
        width="550"
        height="300"
        xAxisTickFormat="xAxisTickFormatFunction()"
        showXAxis="true"
        showYAxis="true">
    </nvd3-line-chart>
    <div><b>Point Data</b>
        <div ng-repeat="point in event.point">
            <div ng-bind="point"></div>
        </div>
    </div>
</div>

## Exposed Events by Model

[Chart]()

* [Tooltip Show](#Tooltip-Show)
* [Tooltip Hide](#Tooltip-Hide)
* [Before Update](#Before-Update)
* [State Change](#State-Change)
* [Change State](#Change-State)

[Lines]()
* [Element Mouseover Tooltip](#Element-Mouseover-Tooltip)
* [Element Mouseout Tooltip](#Element-Mouseout-Tooltip)
* [Element Click Tooltip](#Element-Click-Tooltip)

[Stacked](#Stacked)
* [Area Click Toggle](#Area-Click-Toggle)
* [Tooltip Show](#Tooltip-Show)
* [Tooltip Hide](#Tooltip-Hide)

[Interactive Layer](#Interactive-Layer)
* [Element Mouseout](#Element-Mouseout)
* [Element Mousemove](#Element-Mousemove)

[Discrete Bar](#Discrete-Bar)
* [Element Mouseover Tooltip](#Element-Mouseover-Tooltip)
* [Element Mouseout Tooltip](#Element-Mouseout-Tooltip)

[Multibar](#Multibar)
* [Element Mouseover Tooltip](#Element-Mouseover-Tooltip)
* [Element Mouseout Tooltip](#Element-Mouseout-Tooltip)
* [Element Click](#Element-Click)

[Pie](#Pie)
* [Element Mouseover Tooltip](#Element-Mouseover-Tooltip)
* [Element Mouseout Tooltip](#Element-Mouseout-Tooltip)

[Scatter](#Scatter)
* [Element Mouseover Tooltip](#Element-Mouseover-Tooltip)
* [Element Mouseout Tooltip](#Element-Mouseout-Tooltip)

[Bullet](#Bullet)
* [Element Mouseover Tooltip](#Element-Mouseover-Tooltip)
* [Element Mouseout Tooltip](#Element-Mouseout-Tooltip)

[Legend](#Legend)
* [State Change Legend](#State-Change-Legend)
* [Legend Click](#Legend-Click)

[Controls](#Controls)
* [Legend Click](#Legend-Click)

---

#### <a id="Tooltip-Show"></a>Tooltip Show
* **Exposed Event** - `tooltipShow.directive`
{% highlight javascript %}
$scope.$on('tooltipShow.directive', function(angularEvent, event){
});
{% endhighlight %}

#### <a id="Tooltip-Hide"></a>Tooltip Hide
* **Exposed Event** - `tooltipHide.directive`
{% highlight javascript %}
$scope.$on('tooltipHide.directive', function(angularEvent, event){
});
{% endhighlight %}

#### <a id="Before-Update"></a>Before Update
* **Exposed Event** - `beforeUpdate.directive`
{% highlight javascript %}
$scope.$on('beforeUpdate.directive', function(angularEvent, event){
});
{% endhighlight %}

#### <a id="State-Change"></a>State Change
* **Exposed Event** - `stateChange.directive`
{% highlight javascript %}
$scope.$on('stateChange.directive', function(angularEvent, event){
});
{% endhighlight %}

#### <a id="Change-State"></a>Change State
* **Exposed Event** - `changeState.directive`
{% highlight javascript %}
$scope.$on('changeState.directive', function(angularEvent, event){
});
{% endhighlight %}

#### <a id="Element-Mouseover-Tooltip"></a>Element Mouseover Tooltip
* **Exposed Event** - `elementMouseover.tooltip.directive`
{% highlight javascript %}
$scope.$on('elementMouseover.tooltip.directive', function(angularEvent, event){
});
{% endhighlight %}

#### <a id="Element-Mouseout-Tooltip"></a>Element Mouseout Tooltip
* **Exposed Event** - `elementMouseout.tooltip.directive`
{% highlight javascript %}
$scope.$on('elementMouseout.tooltip.directive', function(angularEvent, event){
});
{% endhighlight %}

#### <a id="Element-Click"></a>Element Click
* **Exposed Event** - `elementClick.directive`
{% highlight javascript %}
$scope.$on('elementClick.directive', function(angularEvent, event){
});
{% endhighlight %}

### <a id="Area-Click-Toggle"></a>Area Click Toggle
* **Exposed Event** - `areaClick.toggle.directive`
{% highlight javascript %}
$scope.$on('areaClick.directive', function(angularEvent, event){
});
{% endhighlight %}

#### <a id="Element-Mouseout"></a>Element Mouseout
* **Exposed Event** - `elementMouseout.directive`
{% highlight javascript %}
$scope.$on('elementMouseout.directive', function(angularEvent, event){
});
{% endhighlight %}

#### <a id="Element-Mousemove"></a>Element Mousemove
* **Exposed Event** - `elementMousemove.directive`
{% highlight javascript %}
$scope.$on('elementMousemove.directive', function(angularEvent, event){
});
{% endhighlight %}

#### <a id="State-Change-Legend"></a>State Change Legend
* **Exposed Event** - `stateChange.legend.directive`
{% highlight javascript %}
$scope.$on('stateChange.legend.directive', function(angularEvent, event){
});
{% endhighlight %}

#### <a id="Legend-Click"></a>Legend Click
* **Exposed Event** - `legendClick.directive`
{% highlight javascript %}
$scope.$on('legendClick.directive', function(angularEvent, event){
});
{% endhighlight %}



