import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import * as d3 from "d3";
import { select } from 'd3-selection';
import { scaleTime, scaleLinear } from 'd3-scale';
import { axisBottom, axisLeft } from 'd3-axis';
import { line, curveCardinal, area } from 'd3-shape';
import { extent } from 'd3-array';
import { curveBumpX } from "d3";

export default function TransactionsInfoCard() {
    const [transactionsRecords, setTransactionsRecords] = useState([]);
    const [loading, setLoading] = useState(false);
    const svgRef = useRef();

    useEffect(() => {
        setLoading(true);
        axios
            .get("http://localhost:5555/transactions")
            .then((response) => {
                setTransactionsRecords(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        if (!transactionsRecords.length) return;

        // Sort the transaction records in ascending order by date
        const sortedRecords = [...transactionsRecords].sort((a, b) => new Date(a.date) - new Date(b.date));

        const svg = select(svgRef.current);
        const margin = { top: 20, right: 20, bottom: 60, left: 50 }; // Increased bottom margin for labels
        const width = svg.node().parentElement.clientWidth - margin.left - margin.right; // Calculate width based on parent element's width
        const height = 340 - margin.top - margin.bottom; // Use a fixed height

        // Calculate the domain for the y-axis
        const maxAmount = Math.max(...sortedRecords.map(d => d.amount));
        const minAmount = Math.min(...sortedRecords.map(d => d.amount));
        const yDomainMax = Math.ceil(maxAmount / 40000) * 40000; // Round up to the nearest 40000
        const yDomainMin = Math.floor(minAmount / 40000) * 40000; // Round down to the nearest 40000

        const x = scaleTime()
            .domain(extent(sortedRecords, d => new Date(d.date)))
            .range([margin.left, width + margin.left]);

        const y = scaleLinear()
            .domain([yDomainMin, yDomainMax]) // Set the domain with rounded values
            .nice()
            .range([height + margin.top, margin.top]);

        const xAxis = axisBottom(x).ticks(width / 80).tickSizeOuter(0);
        const yAxis = axisLeft(y).tickValues(d3.range(yDomainMin, yDomainMax + 1, 40000)); // Set tick values at intervals of 40000

        svg.selectAll("*").remove();

        // Define transparent gradient for income
        const incomeGradient = svg.append("defs").append("linearGradient")
            .attr("id", "incomeGradient") // Unique ID for the gradient
            .attr("gradientUnits", "userSpaceOnUse")
            .attr("x1", 0).attr("y1", y(0))
            .attr("x2", 0).attr("y2", y(yDomainMax))
            .selectAll("stop")
            .data([
                { offset: "0%", color: "rgba(132, 204, 22, 0)" }, // Transparent color near x-axis
                { offset: "100%", color: "rgba(132, 204, 22, 0.8)" }, // Start color (line color with transparency)
            ])
            .enter().append("stop")
            .attr("offset", d => d.offset)
            .attr("stop-color", d => d.color);

        // Define transparent gradient for expense
        const expenseGradient = svg.append("defs").append("linearGradient")
            .attr("id", "expenseGradient") // Unique ID for the gradient
            .attr("gradientUnits", "userSpaceOnUse")
            .attr("x1", 0).attr("y1", y(0))
            .attr("x2", 0).attr("y2", y(yDomainMax))
            .selectAll("stop")
            .data([
                { offset: "0%", color: "rgba(239, 68, 68, 0)" }, // Transparent color near x-axis
                { offset: "100%", color: "rgba(239, 68, 68, 0.8)" }, // Start color (line color with transparency)
            ])
            .enter().append("stop")
            .attr("offset", d => d.offset)
            .attr("stop-color", d => d.color);

        svg.append("g")
            .attr("transform", `translate(0,${height + margin.top})`)
            .call(xAxis)
            .append("text") // X-axis label
            .attr("x", width / 2)
            .attr("y", 40) // Adjust position
            .attr("fill", "currentColor")

        svg.append("g")
            .attr("transform", `translate(${margin.left},0)`)
            .call(yAxis)
            .call(g => g.select(".domain").remove())
            .call(g => g.selectAll(".tick line").clone()
                .attr("x2", width - margin.left - margin.right)
                .attr("stroke-opacity", 0.1))
            .call(g => g.append("text")
                .attr("x", -50)
                .attr("y", 10) // Adjust position to ensure proper alignment
                .attr("fill", "currentColor")
                .attr("text-anchor", "start")
                .style("font-size", "14px") // Adjust font size
                .style("font-weight", "bold") // Make text bold
                .text("↑ Amount"));

        const areaGenerator = area()
            .x(d => x(new Date(d.date)))
            .y0(height + margin.top)
            .y1(d => y(d.amount))
            .curve(curveBumpX); // Use a curve interpolation method for smoother lines

        const lineGenerator = line()
            .x(d => x(new Date(d.date)))
            .y(d => y(d.amount))
            .curve(curveBumpX); // Use a curve interpolation method for smoother lines

        // Filter records based on transaction type
        const incomeRecords = sortedRecords.filter(record => record.type === 'income');
        const expenseRecords = sortedRecords.filter(record => record.type === 'expense');

        // Draw area and line for income transactions
        svg.append("path")
            .datum(incomeRecords)
            .attr("fill", "url(#incomeGradient)") // Apply gradient
            .attr("d", areaGenerator);

        svg.append("path")
            .datum(incomeRecords)
            .attr("stroke", "#84cc16") // Adjust color as needed
            .attr("stroke-width", 2)
            .attr("fill", "none")
            .attr("d", lineGenerator);

        // Draw area and line for expense transactions
        svg.append("path")
            .datum(expenseRecords)
            .attr("fill", "url(#expenseGradient)") // Apply gradient
            .attr("d", areaGenerator);

        svg.append("path")
            .datum(expenseRecords)
            .attr("stroke", "#ef4444") // Adjust color as needed
            .attr("stroke-width", 2)
            .attr("fill", "none")
            .attr("d", lineGenerator);

    }, [transactionsRecords]);

    return (
        <div className="pt-12 flex flex-col items-center justify-center align-middle h-[26rem] w-full bg-orange-50">
            <div className="text-base font-semibold  flex items-center justify-center ">
                Transactions Amount vs. Date
            </div>
            <svg className="" ref={svgRef} width="94%" height={340}></svg>
        </div>
    );
}
