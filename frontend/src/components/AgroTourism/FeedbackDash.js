import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { select, scaleBand, scaleLinear, axisBottom, axisLeft } from "d3";

export default function FeedbackDashboard() {
    const [feedbackData, setFeedbackData] = useState([]);
    const [loading, setLoading] = useState(false);
    const chartContainer = useRef(null);

    useEffect(() => {
        setLoading(true);
        axios
            .get("http://localhost:5555/feedback") // Assuming this is the endpoint for fetching feedback data
            .then((response) => {
                setFeedbackData(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        renderBarChart();
    }, [feedbackData]);

    const renderBarChart = () => {
        if (!chartContainer.current || feedbackData.length === 0) return;

        const ratingsCount = new Map();

        feedbackData.forEach((feedback) => {
            const rating = feedback.rating;
            ratingsCount.set(
                rating,
                (ratingsCount.get(rating) || 0) + 1
            );
        });

        const labels = [...ratingsCount.keys()];
        const data = [...ratingsCount.values()];

        const svg = select(chartContainer.current);

        svg.selectAll("*").remove();

        const margin = { top: 20, right: 20, bottom: 60, left: 60 };
        const width = svg.attr("width") - margin.left - margin.right;
        const height = svg.attr("height") - margin.top - margin.bottom;

        const x = scaleBand()
            .range([0, width])
            .padding(0.3)
            .domain(labels);

        const y = scaleLinear()
            .range([height, 0])
            .domain([0, Math.max(...data)]);

        const g = svg
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        g.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", "translate(0," + height + ")")
            .call(axisBottom(x));

        g.append("g")
            .attr("class", "axis axis--y")
            .call(axisLeft(y).ticks(10, "s"))
            .append("text")
            .attr("class", "axis-title")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", "0.71em")
            .attr("text-anchor", "end")
            .text("Number of Ratings");

        g.selectAll(".bar")
            .data(ratingsCount)
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("x", (d) => x(d[0]))
            .attr("y", (d) => y(d[1]))
            .attr("width", x.bandwidth())
            .attr("height", (d) => height - y(d[1]))
            .style("fill", "steelblue");

        svg.append("text")
            .attr("class", "axis-label")
            .attr("x", margin.left + (width / 2))
            .attr("y", height + margin.top + 50)
            .style("text-anchor", "middle")
            .style("font-weight", "bold")
            .text("Ratings");

        svg.append("text")
            .attr("class", "axis-label")
            .attr("transform", "rotate(-90)")
            .attr("x", 0 - (height / 2))
            .attr("y", 60 - margin.left)
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .style("font-weight", "bold")
            .text("Number of Feedbacks");
    };

    return (
        <div className="overflow-x-auto">
            <div className="flex flex-row justify-center items-center px-8 py-4"> {/* Centering the content */}
                <div className="text-center"> {/* Centering the text */}
                    <h1 className="text-2xl font-semibold"> {/* Making the heading larger */}
                        Feedback Ratings Analysis
                    </h1>
                    <p className="mt-1 text-xl font-normal text-gray-500">
                        Visualization of feedback ratings given by users.
                    </p>
                </div>
            </div>
            {loading ? (
                <div>Loading...</div>
            ) : feedbackData.length === 0 ? (
                <div className="text-base font-semibold text-left px-8">
                    No feedback data available.
                </div>
            ) : (
                <div className="mx-auto px-8 w-fit border-2 rounded-xl border-gray-400">
                    <div className="py-4">
                        <svg ref={chartContainer} width="800" height="400"></svg>
                    </div>
                </div>
            )}
            <div><br/></div>
        </div>

    );
}
