---
title: pie chart
layout: example
description: d3.js, nvd3.js Pie Charts with Angular.js Directives
---

<script>
        var app = angular.module("nvd3TestApp", ['nvd3ChartDirectives']);
        function ExampleCtrl($scope){

            $scope.exampleData = [
                	{ key: "One", y: 5 },
                	{ key: "Two", y: 2 },
                	{ key: "Three", y: 9 },
                	{ key: "Four", y: 7 },
                	{ key: "Five", y: 4 },
                	{ key: "Six", y: 3 },
                	{ key: "Seven", y: 9 }
            	];

            $scope.noDataData = [];
	

        	$scope.xFunction = function(){
            	return function(d) {
                	return d.key;
            	};
        	}
        	
            $scope.yFunction = function(){
                return function(d) {
                    return d.y;
                };
            }

			var colorArray = ['#000000', '#660000', '#CC0000', '#FF6666', '#FF3333', '#FF6666', '#FFE6E6'];
			$scope.colorFunction = function() {
				return function(d, i) {
    				return colorArray[i];
    			};
	  		}

	  		$scope.descriptionFunction = function(){
	  		    return function(d){
	  		        return d.key;
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

Creating and Configuring a Pie Chart
=========================

<div ng-controller="ExampleCtrl">
	<nvd3-pie-chart
    	data="exampleData"
        id="exampleId"
        width="550"
        height="350"
        x="xFunction()"
        y="yFunction()"
        showLabels="true">
    </nvd3-pie-chart>
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
    	{ key: "One", y: 5 },
        { key: "Two", y: 2 },
        { key: "Three", y: 9 },
        { key: "Four", y: 7 },
        { key: "Five", y: 4 },
        { key: "Six", y: 3 },
        { key: "Seven", y: 9 }
    ];
}
{% endhighlight %}

Include the chart directive in HTML.
The data html attribute should point to the scope variable (exampleData).
Other directive attributes should be the same as the public attributes associated with each chart.

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-pie-chart
    	data="exampleData"
        id="exampleId"
        width="550"
        height="350"
        x="xFunction()"
        y="yFunction()"
        showLabels="true">
        <svg></svg>
    </nvd3-pie-chart>
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

## Color
Controls the colors of the chart elements.

Datatype: Function

The function is the same as the d3.js color functions.  Refer to <a href="https://github.com/mbostock/d3/wiki/Colors">d3.js Colors</a> for d3.js color-specific documentation.

To use a configuration function, create a function on the $scope (i.e. $scope.colorFunction).  The function can be named anything, as long as it does not conflict with an existing function name.
To 'connect' the $scope function with the chart.color() function, add a color="" attribute to the directive, with the value of the attribute being the name of the $scope function (i.e. scope="colorFunction()").

{% highlight javascript %}
var colorArray = ['#000000', '#660000', '#CC0000', '#FF6666', '#FF3333', '#FF6666', '#FFE6E6'];
$scope.colorFunction = function() {
	return function(d, i) {
    	return colorArray[i];
    };
}
{% endhighlight %}

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-pie-chart
    	data="exampleData"
        id="colorExample"
        width="550"
        height="350"
        x="xFunction()"
        y="yFunction()"
        color="colorFunction()">
        <svg height="250"></svg>
    </nvd3-pie-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-pie-chart
    	data="exampleData"
        id="colorExample"
        width="550"
        height="350"
        x="xFunction()"
        y="yFunction()"
        color="colorFunction()">
        <svg height="250"></svg>
    </nvd3-pie-chart>
</div>

## X
Function that allows nvd3.js and d3.js to access x values from the 'data'.

Datatype: Function
            
{% highlight javascript %}
$scope.xFunction = function(){
    return function(d) {
        return d.key;
    };
}
{% endhighlight %}

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-pie-chart
    	data="exampleData"
        id="xExample"
        width="550"
        height="350"
        x="xFunction()"
        y="yFunction()">
        	<svg height="250"></svg>
    </nvd3-pie-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-pie-chart
    	data="exampleData"
        id="xExample"
        width="550"
        height="350"
        x="xFunction()"
        y="yFunction()">
        	<svg height="250"></svg>
    </nvd3-pie-chart>
</div>
            
## Y
Function that allows nvd3 and d3 to access y values from the 'data'.

Datatype: Function

{% highlight javascript %}
$scope.yFunction = function(){
	return function(d){
		return d.y;
	};
}
{% endhighlight %}

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-pie-chart
    	data="exampleData"
        id="yExample"
        width="550"
        height="350"
        x="xFunction()"
        y="yFunction()">
        	<svg height="250"></svg>
    </nvd3-pie-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-pie-chart
    	data="exampleData"
        id="yExample"
        width="550"
        height="350"
        x="xFunction()"
        y="yFunction()">        
        	<svg height="250"></svg>
    </nvd3-pie-chart>
</div>

## Show Legend
Enables (true) or Disables (false) rendering of the Chart Legend.

Datatype: boolean - (true/false)

{% highlight html %}
<div ng-controller="ExampleCtrl">
 	<nvd3-pie-chart
    	data="exampleData"
        id="showLegendExample"
        width="550"
        height="350"        
        x="xFunction()"
        y="yFunction()"
        showLegend="true">
        	<svg height="250"></svg>
    </nvd3-pie-chart>
</div>            
{% endhighlight %}
            
<div ng-controller="ExampleCtrl">
 	<nvd3-pie-chart
    	data="exampleData"
        id="showLegendExample"
        width="550"
        height="350"
        x="xFunction()"
        y="yFunction()"
        showLegend="true">
        	<svg height="250"></svg>
    </nvd3-pie-chart>
</div>            
            
## No Data
Defines the message displayed when data is not available.

Datatype: String

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-pie-chart
    	data="noDataData"
        id="noDataExample"
        width="550"
        height="350"
        showXAxis="true"
        showYAxis="true"
        x="xFunction()"
        y="yFunction()"        
        noData="Data aint here">
        	<svg height="250"></svg>
    </nvd3-pie-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-pie-chart
    	data="noDataData"
        id="noDataExample"
        width="550"
        height="350"
        x="xFunction()"
        y="yFunction()"
        noData="No Data For You!">
        	<svg height="250"></svg>
    </nvd3-pie-chart>
</div>
      
## Tooltips
Enables (true) or Disables (false) rendering of the tooltips.

The Interactive attribute must be included and set to true before tooltips will be rendered.

Datatype: boolean - (true/false)

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-pie-chart
    	data="exampleData"
        id="toolTipExample"
        width="550"
        height="350"
        x="xFunction()"
        y="yFunction()"
        tooltips="true">
        	<svg height="250"></svg>
    </nvd3-pie-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-pie-chart
    	data="exampleData"
        id="toolTipExample"
        width="550"
        height="350"
        x="xFunction()"
        y="yFunction()"
        tooltips="true">
        	<svg height="250"></svg>
    </nvd3-pie-chart>
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
	<nvd3-pie-chart
    	data="exampleData"
        id="toolTipContentExample"
        width="550"
        height="350"
        x="xFunction()"
        y="yFunction()"
        tooltips="true"
        tooltipcontent="toolTipContentFunction()">
        	<svg height="250"></svg>
    </nvd3-pie-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-pie-chart
    	data="exampleData"
        id="toolTipContentExample"
        width="550"
        height="350"
        x="xFunction()"
        y="yFunction()"
        tooltips="true"
        tooltipcontent="toolTipContentFunction()">
        	<svg height="250"></svg>
    </nvd3-pie-chart>
</div>

## Description
Controls the text that is displayed in the tooltip.

{% highlight javascript %}
$scope.descriptionFunction = function(){
    return function(d){
        return d.key;
    }
}
{% endhighlight %}

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-pie-chart
    	data="exampleData"
        id="descriptionExample"
        width="550"
        height="350"
        x="xFunction()"
        y="yFunction()"
        tooltips="true"
        description="descriptionFunction()">
        	<svg height="250"></svg>
    </nvd3-pie-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-pie-chart
    	data="exampleData"
        id="descriptionExample"
        width="550"
        height="350"
        x="xFunction()"
        y="yFunction()"
        tooltips="true"
        tooltipcontent="descriptionFunction()">
        	<svg height="250"></svg>
    </nvd3-pie-chart>
</div>

## Show Labels

Toggles the display of chart labels.

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-pie-chart
    	data="exampleData"
        id="showLabelsExample"
        width="550"
        height="350"
        x="xFunction()"
        y="yFunction()"
        showLabels="true">
        	<svg height="250"></svg>
    </nvd3-pie-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-pie-chart
    	data="exampleData"
        id="showLabelsExample"
        width="550"
        height="350"
        x="xFunction()"
        y="yFunction()"
        showLabels="true">
            <svg height="250"></svg>
    </nvd3-pie-chart>
</div>


## Pie Labels Outside

Toggles whether labels are displayed on the outside (true) or the inside (false) of the chart.  The default setting is outside (true).


{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-pie-chart
    	data="exampleData"
        id="pieLabelsOutsideExample"
        width="550"
        height="350"
        x="xFunction()"
        y="yFunction()"
        showLabels="true"
        pieLabelsOutside="false">
        	<svg height="250"></svg>
    </nvd3-pie-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-pie-chart
    	data="exampleData"
        id="pieLabelsOutsideExample"
        width="550"
        height="350"
        x="xFunction()"
        y="yFunction()"
        showLabels="true"
        pieLabelsOutside="false">
            <svg height="250"></svg>
    </nvd3-pie-chart>
</div>

## Label Type

The Pie Chart supports three different label types (key, value, percent).  Key is the value of the key data, value is the data value, and percent represents the percentage that the slice of data represents.

### Key
{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-pie-chart
    	data="exampleData"
        id="labelTypeKeyExample"
        width="550"
        height="350"
        x="xFunction()"
        y="yFunction()"
        showLabels="true"
        labelType="key">
        	<svg height="250"></svg>
    </nvd3-pie-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-pie-chart
    	data="exampleData"
        id="labelTypeKeyExample"
        width="550"
        height="350"
        x="xFunction()"
        y="yFunction()"
        showLabels="true"
        labelType="key">
        	<svg height="250"></svg>
    </nvd3-pie-chart>
</div>

### Value
{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-pie-chart
    	data="exampleData"
        id="labelTypeValueExample"
        width="550"
        height="350"
        x="xFunction()"
        y="yFunction()"
        showLabels="true"
        labelType="value">
        	<svg height="250"></svg>
    </nvd3-pie-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-pie-chart
    	data="exampleData"
        id="labelTypeValueExample"
        width="550"
        height="350"
        x="xFunction()"
        y="yFunction()"
        showLabels="true"
        labelType="value">
        	<svg height="250"></svg>
    </nvd3-pie-chart>
</div>

### Percent
{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-pie-chart
    	data="exampleData"
        id="labelTypePercentExample"
        width="550"
        height="350"
        x="xFunction()"
        y="yFunction()"
        showLabels="true"
        labelType="percent">
        	<svg height="250"></svg>
    </nvd3-pie-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-pie-chart
    	data="exampleData"
        id="labelTypePercentExample"
        width="550"
        height="350"
        x="xFunction()"
        y="yFunction()"
        showLabels="true"
        labelType="percent">
        	<svg height="250"></svg>
    </nvd3-pie-chart>
</div>


## Donut
Turns pie chart into a donut chart.

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-pie-chart
    	data="exampleData"
        id="donutExample"
        width="550"
        height="350"
        x="xFunction()"
        y="yFunction()"
        donut="true">
        	<svg height="250"></svg>
    </nvd3-pie-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-pie-chart
    	data="exampleData"
        id="donutExample"
        width="550"
        height="350"
        x="xFunction()"
        y="yFunction()"
        donut="true">
        	<svg height="250"></svg>
    </nvd3-pie-chart>
</div>



## Donut Ratio

Determines how large the donut hole will be.  0 is no hole.

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-pie-chart
    	data="exampleData"
        id="donutRatioExample"
        width="550"
        height="350"
        x="xFunction()"
        y="yFunction()"
        donut="true"
        donutRatio=".25">
        	<svg height="250"></svg>
    </nvd3-pie-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-pie-chart
    	data="exampleData"
        id="donutRatioExample"
        width="550"
        height="350"
        x="xFunction()"
        y="yFunction()"
        donut="true"
        donutRatio=".25">
        	<svg height="250"></svg>
    </nvd3-pie-chart>
</div>


## Donut Labels Outside

Displays labels on the outside of the chart.
Default: false

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-pie-chart
    	data="exampleData"
        id="donutLabelsOutsideExample"
        width="550"
        height="350"
        x="xFunction()"
        y="yFunction()"
        donut="true"
        showLabels="true"
        donutLabelsOutside="true">
        	<svg height="250"></svg>
    </nvd3-pie-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-pie-chart
    	data="exampleData"
        id="donutLabelsOutsideExample"
        width="550"
        height="350"
        x="xFunction()"
        y="yFunction()"
        donut="true"
        showLabels="true"
        donutLabelsOutside="true">
            <svg height="250"></svg>
    </nvd3-pie-chart>
</div>

## Label Threshold


{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-pie-chart
    	data="exampleData"
        id="labelThresholdExample"
        width="550"
        height="350"
        x="xFunction()"
        y="yFunction()"
        showLabels="true"
        labelThreshold="0.5">
        	<svg height="250"></svg>
    </nvd3-pie-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-pie-chart
    	data="exampleData"
        id="labelThresholdExample"
        width="550"
        height="350"
        x="xFunction()"
        y="yFunction()"
        showLabels="true"
        labelThreshold="0.5">
            <svg height="250"></svg>
    </nvd3-pie-chart>
</div>
