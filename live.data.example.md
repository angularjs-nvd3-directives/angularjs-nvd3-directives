---
title: livedataexample
layout: example
---

<script>
	var app = angular.module("nvd3TestApp", ['nvd3ChartDirectives']);

    app.config(['$httpProvider', function($httpProvider) {
    	$httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }]);

	function ExampleCtrl($scope, $http){
		$scope.fetchData = function(){
		console.log('fetchData');
        	$http.jsonp('http://api.openweathermap.org/data/2.5/forecast?id=5506956&amp;units=imperial&amp;callback=JSON_CALLBACK')
            	.then(function(response) {
            	console.log(response);
                	var dta = [{key:"Las Vegas Weather", values:[]}];
                    	dta[0].values = response.data.list.map(function(d){
                        	return [d.dt, d.main.temp];
                        });
                        $scope.exampleData = dta;
                    });
		}

	$scope.fetchData();

	$scope.xAxisTickFormatFunction = function(){
		return function(d){
        	return d3.time.format('%x-%H:%M')(new Date(d*1000));
		}
	}
}
</script>
<style>
        div{
            font-family: sans-serif;
        }
</style>
    
Working with Live Data
=========================

## Fetching data

Biggest change is the introduction of $http, $resource, or other mechanisms to get data from another service, file, etc.  After the data is returned, assign it to the $scope variable, just like the examples that use static data.
{% highlight javascript %}
$scope.fetchData = function(){
	$http.jsonp('http://api.openweathermap.org/data/2.5/forecast?id=5506956&units=imperial&callback=JSON_CALLBACK')
    	.then(function(response) {
        	var dta = [{key:"Las Vegas Weather", values:[]}];
            dta[0].values = response.data.list.map(function(d){
            	return [d.dt, d.main.temp];
        	});
        	$scope.exampleData = dta;
    	});
}
{% endhighlight %}

{% highlight html %}
<div ng-controller="ExampleCtrl">
    <div>Las Vegas, Nevada - Temperature Forecast</div>
    <div style="font-size: 10px">Weather Data Provided by <a href="http://api.openweathermap.org">http://api.openweathermap.org</a></div>
    <nvd3-line-chart
            data="exampleData"
            id="exampleId"
            width="800"
            height="400"
            showXAxis="true"
            showYAxis="true"
            tooltips="true"
            interactive="true"
            xAxisTickFormat="xAxisTickFormatFunction()"
            margin="{left:50,top:50,bottom:50,right:50}"
            >
        <svg></svg>
    </nvd3-line-chart>
</div>
{% endhighlight %}

<div ng-controller="ExampleCtrl">
    <div>Las Vegas, Nevada - Temperature Forecast</div>
    <div style="font-size: 10px">Weather Data Provided by <a href="http://api.openweathermap.org">http://api.openweathermap.org</a></div>
    <nvd3-line-chart
            data="exampleData"
            id="exampleId"
            width="800"
            height="400"
            showXAxis="true"
            showYAxis="true"
            tooltips="true"
            interactive="true"
            xAxisTickFormat="xAxisTickFormatFunction()"
            margin="{left:50,top:50,bottom:50,right:50}"
            >
        <svg></svg>
    </nvd3-line-chart>
</div>



