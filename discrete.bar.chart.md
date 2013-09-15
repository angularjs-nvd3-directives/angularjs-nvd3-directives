---
title: discretebarchart
layout: example
description: d3.js, nvd3.js Discrete Bar Charts with Angular.js
---

<script>
        var app = angular.module("nvd3TestApp", ['nvd3ChartDirectives']);
        function ExampleCtrl($scope){
            $scope.exampleData = [
                {
                    "key": "Series 1",
                    "values": [ [ 1025409600000 , 0] , [ 1028088000000 , -6.3382185140371] , [ 1030766400000 , -5.9507873460847] , [ 1033358400000 , -11.569146943813] , [ 1036040400000 , -5.4767332317425] , [ 1038632400000 , 0.50794682203014] , [ 1041310800000 , -5.5310285460542] , [ 1043989200000 , -5.7838296963382] , [ 1046408400000 , -7.3249341615649] , [ 1049086800000 , -6.7078630712489] , [ 1051675200000 , 0.44227126150934] , [ 1054353600000 , 7.2481659343222] , [ 1056945600000 , 9.2512381306992] ]
                },
                {
                    "key": "Series 2",
                    "values": [ [ 1025409600000 , 0] , [ 1028088000000 , 0] , [ 1030766400000 , 0] , [ 1033358400000 , 0] , [ 1036040400000 , 0] , [ 1038632400000 , 0] , [ 1041310800000 , 0] , [ 1043989200000 , 0] , [ 1046408400000 , 0] , [ 1049086800000 , 0] , [ 1051675200000 , 0] , [ 1054353600000 , 0] , [ 1056945600000 , 0] ]
                },
                {
                    "key": "Series 3",
                    "values": [ [ 1025409600000 , 0] , [ 1028088000000 , -6.3382185140371] , [ 1030766400000 , -5.9507873460847] , [ 1033358400000 , -11.569146943813] , [ 1036040400000 , -5.4767332317425] , [ 1038632400000 , 0.50794682203014] , [ 1041310800000 , -5.5310285460542] , [ 1043989200000 , -5.7838296963382] , [ 1046408400000 , -7.3249341615649] , [ 1049086800000 , -6.7078630712489] , [ 1051675200000 , 0.44227126150934] , [ 1054353600000 , 7.2481659343222] , [ 1056945600000 , 9.2512381306992] ]
                },
                {
                    "key": "Series 4",
                    "values": [ [ 1025409600000 , -7.0674410638835] , [ 1028088000000 , -14.663359292964] , [ 1030766400000 , -14.104393060540] , [ 1033358400000 , -23.114477037218] , [ 1036040400000 , -16.774256687841] , [ 1038632400000 , -11.902028464000] , [ 1041310800000 , -16.883038668422] , [ 1043989200000 , -19.104223676831] , [ 1046408400000 , -20.420523282736] , [ 1049086800000 , -19.660555051587] , [ 1051675200000 , -13.106911231646] , [ 1054353600000 , -8.2448460302143] , [ 1056945600000 , -7.0313058730976] ]
                }
            ];

            $scope.noDataData = [
                {
                    "key": "Series 1",
                    "values": [ ]
                }
            ];

            $scope.reduceXTicksData = [
                {
                    "key": "Series 1",
                    "values": [ 
                    	[ 1025409600000 , 0], 
                    	[ 1028088000000 , -6.3382185140371], 
                    	[ 1030766400000 , -5.9507873460847], 
                    	[ 1033358400000 , -11.569146943813], 
                    	[ 1036040400000 , -5.4767332317425], 
                    	[ 1038632400000 , 0.50794682203014],
                     	[ 1041310800000 , -5.5310285460542] ]
                }
            ];

            $scope.stackedData = [
                {
                    "key": "Series 1",
                    "values": [ 
                    	[ 1025409600000 , 0], 
                    	[ 1028088000000 , -6.3382185140371], 
                    	[ 1030766400000 , -5.9507873460847], 
                    	[ 1033358400000 , -11.569146943813], 
                    	[ 1036040400000 , -5.4767332317425], 
                    	[ 1038632400000 , 0.50794682203014],
                     	[ 1041310800000 , -5.5310285460542] ]
                },
                {
                    "key": "Series 2",
                    "values": [ 
                    	[ 1025409600000 , 10], 
                    	[ 1028088000000 , 5], 
                    	[ 1030766400000 , 8], 
                    	[ 1033358400000 , 4], 
                    	[ 1036040400000 , 14], 
                    	[ 1038632400000 , 22], 
                    	[ 1041310800000 , 15]
                    ]
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

			var colorArray = ['#FF0000', '#0000FF', '#FFFF00', '#00FFFF'];
            $scope.colorFunction = function() {
                return function(d, i) {
                    return colorArray[i];
                };
            }

            $scope.toolTipContentFunction = function(){
                return function(key, x, y, e, graph) {
                        return  'Super New Tooltip' +
                        '<h1>' + key + '</h1>' +
                        '<p>' +  y + ' at ' + x + '</p>'
                }
            }

			var format = d3.format(',.4f');
            $scope.valueFormatFunction = function(){
            	return function(d){
            		return format(d);
            	}
            }
            
        }
</script>
            
Creating and Configuring a Discrete Bar Chart
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
                    "values": [ [ 1025409600000 , 0] , [ 1028088000000 , -6.3382185140371] , [ 1030766400000 , -5.9507873460847] , [ 1033358400000 , -11.569146943813] , [ 1036040400000 , -5.4767332317425] , [ 1038632400000 , 0.50794682203014] , [ 1041310800000 , -5.5310285460542] , [ 1043989200000 , -5.7838296963382] , [ 1046408400000 , -7.3249341615649] , [ 1049086800000 , -6.7078630712489] , [ 1051675200000 , 0.44227126150934] , [ 1054353600000 , 7.2481659343222] , [ 1056945600000 , 9.2512381306992] ]
                },
                {
                    "key": "Series 2",
                    "values": [ [ 1025409600000 , 0] , [ 1028088000000 , 0] , [ 1030766400000 , 0] , [ 1033358400000 , 0] , [ 1036040400000 , 0] , [ 1038632400000 , 0] , [ 1041310800000 , 0] , [ 1043989200000 , 0] , [ 1046408400000 , 0] , [ 1049086800000 , 0] , [ 1051675200000 , 0] , [ 1054353600000 , 0] , [ 1056945600000 , 0] , [ 1059624000000 , 0] , [ 1062302400000 , 0] , [ 1064894400000 , 0] , [ 1067576400000 , 0] , [ 1070168400000 , 0] , [ 1072846800000 , 0] , [ 1075525200000 , -0.049184266875945] ]
                },
                {
                    "key": "Series 3",
                    "values": [ [ 1025409600000 , 0] , [ 1028088000000 , -6.3382185140371] , [ 1030766400000 , -5.9507873460847] , [ 1033358400000 , -11.569146943813] , [ 1036040400000 , -5.4767332317425] , [ 1038632400000 , 0.50794682203014] , [ 1041310800000 , -5.5310285460542] , [ 1043989200000 , -5.7838296963382] , [ 1046408400000 , -7.3249341615649] , [ 1049086800000 , -6.7078630712489] , [ 1051675200000 , 0.44227126150934] , [ 1054353600000 , 7.2481659343222] , [ 1056945600000 , 9.2512381306992] ]
                },
                {
                    "key": "Series 4",
                    "values": [ [ 1025409600000 , -7.0674410638835] , [ 1028088000000 , -14.663359292964] , [ 1030766400000 , -14.104393060540] , [ 1033358400000 , -23.114477037218] , [ 1036040400000 , -16.774256687841] , [ 1038632400000 , -11.902028464000] , [ 1041310800000 , -16.883038668422] , [ 1043989200000 , -19.104223676831] , [ 1046408400000 , -20.420523282736] , [ 1049086800000 , -19.660555051587] , [ 1051675200000 , -13.106911231646] , [ 1054353600000 , -8.2448460302143] , [ 1056945600000 , -7.0313058730976] ]
                }
            ];
}
{% endhighlight %}

Include the chart directive in HTML.
The data html attribute should point to the scope variable (exampleData).
Other directive attributes should be the same as the public attributes associated with each chart.

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-discrete-bar-chart
    	data="exampleData"
        id="exampleId"
        width="550"
        height="350">
        	<svg></svg>
    </nvd3-discrete-bar-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-discrete-bar-chart
    	data="exampleData"
        id="exampleId"
        width="550"
        height="350">
        	<svg></svg>
    </nvd3-discrete-bar-chart>
</div>

# Configuration Options

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
var colorArray = ['#FF0000', '#0000FF', '#FFFF00', '#00FFFF'];
$scope.colorFunction = function() {
	return function(d, i) {
    	return colorArray[i];
	};
}
{% endhighlight %}

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-discrete-bar-chart
    	data="exampleData"
        id="colorExample"
        width="550"
        height="300"
        color="colorFunction()">
        	<svg></svg>
    </nvd3-discrete-bar-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-discrete-bar-chart
    	data="exampleData"
        id="colorExample"
        width="550"
        height="300"
        color="colorFunction()">
        	<svg></svg>
    </nvd3-discrete-bar-chart>
</div>
      
                        
## No Data
Defines the message displayed when data is not available.

Datatype: String

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-discrete-bar-chart
    	data="noDataData"
        id="noDataExample"
        width="550"
        height="300"
        noData="Data aint here">
        	<svg></svg>
    </nvd3-discrete-bar-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-discrete-bar-chart
    	data="noDataData"
        id="noDataExample"
        width="550"
        height="300"
        noData="No Data For You!">
        	<svg></svg>
    </nvd3-discrete-bar-chart>
</div>


## Show Values
Displays the data values on the chart.

Datatype: boolean - (true/false)

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-discrete-bar-chart
    	data="reduceXTicksData"
        id="showValueExample"
        width="550"
        height="300"
        showValues="true">
        	<svg></svg>
    </nvd3-discrete-bar-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-discrete-bar-chart
    	data="reduceXTicksData"
        id="showValueExample"
        width="550"
        height="300"
        showValues="true">
        	<svg></svg>
    </nvd3-discrete-bar-chart>
</div>


## Value Format
Formats the value labels.  Defaults to d3.format(',.2f');

Datatype: Function

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-discrete-bar-chart
    	data="reduceXTicksData"
        id="formatValueExample"
        width="550"
        height="300"
        showValues="true"
        valueFormat="valueFormatFunction()">
        	<svg></svg>
    </nvd3-discrete-bar-chart>
</div>
{% endhighlight %}

{% highlight javascript %}
var format = d3.format(',.4f');
$scope.valueFormatFunction = function(){
	return function(d){
    	return format(d);
    }
}
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-discrete-bar-chart
    	data="reduceXTicksData"
        id="formatValueExample"
        width="550"
        height="300"
        showValues="true"
        valueFormat="valueFormatFunction()">
        	<svg></svg>
    </nvd3-discrete-bar-chart>
</div>

## Stagger Labels

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-discrete-bar-chart
    	data="reduceXTicksData"
        id="staggerLablesExample"
        width="550"
        height="300"
        staggerLabels="true">
        	<svg></svg>
    </nvd3-discrete-bar-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-discrete-bar-chart
    	data="reduceXTicksData"
        id="staggerLablesExample"
        width="550"
        height="300"
        staggerLabels="true">
        	<svg></svg>
    </nvd3-discrete-bar-chart>
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
	<nvd3-discrete-bar-chart
    	data="exampleData"
        id="xExample"
        width="550"
        height="300"
        x="xFunction()">
        	<svg></svg>
    </nvd3-discrete-bar-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-discrete-bar-chart
    	data="exampleData"
        id="xExample"
        width="550"
        height="300"
        x="xFunction()">
        	<svg></svg>
    </nvd3-discrete-bar-chart>
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
	<nvd3-discrete-bar-chart
    	data="exampleData"
        id="yExample"
        width="550"
        height="300"
        y="yFunction()">
        	<svg></svg>
    </nvd3-discrete-bar-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-discrete-bar-chart
    	data="exampleData"
        id="yExample"
        width="550"
        height="300"
        y="yFunction()">        
        	<svg></svg>
    </nvd3-discrete-bar-chart>
</div> 
            
## Force Y
List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.).  The numbers tell the d3.js the values to use in the scale, rather than d3.js determining the values.

Datatype: Array of Numbers (i.e. [0, 50]

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-discrete-bar-chart
    	data="exampleData"
        id="forceyExample"
        width="550"
        height="300"
        forcey="[500]">
        	<svg></svg>
    </nvd3-discrete-bar-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-discrete-bar-chart
    	data="exampleData"
        id="forceyExample"
        width="550"
        height="300"
        forcey="[500]">
    		<svg></svg>
    </nvd3-discrete-bar-chart>
</div>

## Tooltips
Enables (true) or Disables (false) rendering of the tooltips.

Datatype: boolean - (true/false)

{% highlight html %}
<div ng-controller="ExampleCtrl">
	<nvd3-discrete-bar-chart
    	data="exampleData"
        id="toolTipExample"
        width="550"
        height="350"
        tooltips="true">
        	<svg></svg>
    </nvd3-discrete-bar-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-discrete-bar-chart
    	data="exampleData"
        id="toolTipExample"
        width="550"
        height="350"
        tooltips="true">
        	<svg></svg>
    </nvd3-discrete-bar-chart>
</div>


## Tooltip Content
Controls how the tooltips are displayed.

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
	<nvd3-discrete-bar-chart
    	data="exampleData"
        id="toolTipContentExample"
        width="550"
        height="350"
        tooltips="true"
        tooltipcontent="toolTipContentFunction()">
        	<svg></svg>
    </nvd3-discrete-bar-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
	<nvd3-discrete-bar-chart
    	data="exampleData"
        id="toolTipContentExample"
        width="550"
        height="350"
        tooltips="true"
        tooltipcontent="toolTipContentFunction()">
        	<svg></svg>
    </nvd3-discrete-bar-chart>
</div>

