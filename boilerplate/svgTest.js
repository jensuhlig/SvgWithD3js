svgTest = function(valOuter) {
    return (function() {
        /* =================== private methods ================= */
        var svgContainer = null;

        // cache DOM elements
        function cacheDom() {
            svgContainer = d3.select(".svg-container").append("svg")
                                                .attr("width", "100%")
                                                .attr("height", "100%")
                                                .attr("viewBox", "0 0 100 100");
        }

        // bind events
        function bindEvents() {
        }

        // handle click events
        function handleClick(e) {
        }

        function processSvg(circleRadii) {
            
            
            // bind data
            var circles = svgContainer.selectAll("circle")
                                    .data(circleRadii);

            // Enter…
            circles.enter().append("circle")
                .transition().duration(1000)
                .attr("cx", function (d) { return d; })
                .attr("cy", function (d) { return d; })
                .attr("r", 0)
                .style("fill", function() {
                    return "hsl(" + Math.random() * 360 + ",100%,50%)";
                })
                .transition()
                .attr("r", function (d) { return d; });

            //exit
            circles.exit().transition().duration(1000).attr("r", 0).remove();

            
            //update
            circles.transition().duration(1000).style("fill", "black")
        }

       
        
        /* =================== public methods ================== */
        
        function update(val) {
            console.debug("update", val);
            var circleRadii = [40, 20, 10, 23];
            circleRadii.push(val);
            processSvg(circleRadii);
        }

        function init(val) {
            console.debug("init", val);
            cacheDom();
            var circleRadii = [40, 20, 10];
            circleRadii.push(val);
            processSvg(circleRadii);
            
        }

        init(valOuter);
        return {
            update: update
        }
    })();
};
