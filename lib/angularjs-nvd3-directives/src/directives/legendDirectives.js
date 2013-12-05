    angular.module('legendDirectives', [])
        .directive('simpleSvgLegend', function(){
            return {
                restrict: 'EA',
                scope: {
                    id: '@',
                    width: '@',
                    height: '@',
                    margin: '@',
                    x: '@',
                    y: '@',
                    labels: '@',
                    styles: '@',
                    classes: '@',
                    shapes: '@',  //rect, circle, ellipse
                    padding: '@',
                    columns: '@'
                },
                compile: function(){
                    return function link(scope, element, attrs){
                        "use strict";
                        var id,
                            width,
                            height,
                            margin,
                            widthTracker = 0,
                            heightTracker = 0,
                            columns = 1,
                            columnTracker = 0,
                            padding = 10,
                            paddingStr,
                            svgNamespace = 'http://www.w3.org/2000/svg',
                            svg,
                            g,
                            labels,
                            styles,
                            classes,
                            shapes,
                            x = 0,
                            y = 0,
                            container;

                        margin = (scope.$eval(attrs.margin) || {left:5, top:5, bottom:5, right:5});
                        width = (attrs.width  === "undefined" ? ((element[0].parentElement.offsetWidth) - (margin.left + margin.right)) : (+attrs.width - (margin.left + margin.right)));
                        height = (attrs.height === "undefined" ? ((element[0].parentElement.offsetHeight) - (margin.top + margin.bottom)) : (+attrs.height - (margin.top + margin.bottom)));

                        if(!attrs.id){
                            //if an id is not supplied, create a random id.
                            id = 'legend-' + Math.random();
                        } else {
                            id = attrs.id;
                        }
                        container = d3.select(this).classed('legend-' + id, true);

                        if(attrs.columns){
                            columns = (+attrs.columns);
                        }

                        if(attrs.padding){
                            padding = (+attrs.padding);
                        }
                        paddingStr = padding + '';

                        svg = document.createElementNS(svgNamespace, 'svg');
                        if(attrs.width){
                            svg.setAttribute('width', width + '');
                        }

                        if(attrs.height){
                            svg.setAttribute('height', height + '');
                        }
                        svg.setAttribute('id', id);

                        if(attrs.x){
                            x = (+attrs.x);
                        }

                        if(attrs.y){
                            y = (+attrs.y);
                        }

                        element.append(svg);

                        g = document.createElementNS(svgNamespace, 'g');
                        g.setAttribute('transform', 'translate(' + x + ',' + y + ')');

                        svg.appendChild(g);

                        if(attrs.labels){
                            labels = scope.$eval(attrs.labels);
                        }

                        if(attrs.styles){
                            styles = scope.$eval(attrs.styles);
                        }

                        if(attrs.classes){
                            classes = scope.$eval(attrs.classes);
                        }

                        if(attrs.shapes){
                            shapes = scope.$eval(attrs.shapes);
                        }

                        for(var i in labels){

                            var shpe = shapes[i], shape, text, textSize, g1;

                            if( ( columnTracker % columns ) === 0 ){
                                widthTracker = 0;
                                heightTracker = heightTracker + ( padding + ( padding * 1.5 ) );
                            }
                            g1 = document.createElementNS(svgNamespace,'g');
                            g1.setAttribute('transform', 'translate(' +  widthTracker + ', ' + heightTracker + ')');

                            if(shpe === 'rect'){
                                shape = document.createElementNS(svgNamespace, 'rect');
                                //x, y, rx, ry
                                shape.setAttribute('y', ( 0 - ( padding / 2 ) ) + '');
                                shape.setAttribute('width', paddingStr);
                                shape.setAttribute('height', paddingStr);
                            } else if (shpe === 'ellipse'){
                                shape = document.createElementNS(svgNamespace, 'ellipse');
                                shape.setAttribute('rx', paddingStr);
                                shape.setAttribute('ry', ( padding + ( padding / 2 ) ) + '');
                            } else {
                                shape = document.createElementNS(svgNamespace, 'circle');
                                shape.setAttribute('r', ( padding / 2 ) + '');
                            }

                            if(styles && styles[i]){
                                shape.setAttribute('style', styles[i]);
                            }

                            if(classes && classes[i]){
                                shape.setAttribute('class', classes[i]);
                            }

                            g1.appendChild(shape);

                            widthTracker = widthTracker + shape.clientWidth + ( padding + ( padding / 2 ) );

                            text = document.createElementNS(svgNamespace, 'text');
                            text.setAttribute('transform', 'translate(10, 5)');
                            text.appendChild(document.createTextNode(labels[i]));

                            g1.appendChild(text);
                            g.appendChild(g1);

                            textSize = text.clientWidth;
                            widthTracker = widthTracker + textSize + ( padding + ( padding * 0.75 ) );

                            columnTracker++;
                        }
                    };
                }
            };
        });