---
title: bulletchart
layout: example
description: d3.js, nvd3.js Line Charts with Angular.js, Bullet Chart, Stephen Few,
---

<script>
        var app = angular.module("nvd3TestApp", ['nvd3ChartDirectives']);
        function ExampleCtrl($scope){

            $scope.exampleData =  {
                "title": "Revenue",
                "subtitle": "US$, in thousands",
                "ranges": [150, 225, 300],
                "measures": [220],
                "markers": [250]
            };

            $scope.noDataData = [
                {
                    "key": "Series 1",
                    "values": [ ]
                }
            ];

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

Creating and Configuring a Bullet Chart
=========================

## Overview

Based on Stephen Few's <a href="http://www.perceptualedge.com/articles/misc/Bullet_Graph_Design_Spec.pdf">Bullet Graph Spec</a>

"The bullet graph was developed to replace the meters and gauges that are often used on dashboards. Its linear and no-frills design provides a rich display of data in a small space, which is essential on a dashboard."

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
    $scope.exampleData =  {
        "title": "Revenue",
        "subtitle": "US$, in thousands",
        "ranges": [150, 225, 300],
        "measures": [220],
        "markers": [250]
    };
}
{% endhighlight %}

Include the chart directive in HTML.
The data html attribute should point to the scope variable (exampleData).
Other directive attributes should be the same as the public attributes associated with each chart.

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-bullet-chart
    	data="exampleData"
        id="exampleId"
        width="550"
        height="350">
        	<svg></svg>
    </nvd3-bullet-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-bullet-chart
    	data="exampleData"
        id="exampleId"
        margin="{left:75,top:30,bottom:30,right:10}"
        width="550"
        height="160">
        <svg></svg>
    </nvd3-bullet-chart>
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


## Orient
left, right, top, bottom

default is left

Datatype: String


ranges: '&',

markers: '&',

measures: '&',

tickformat: '&',
