import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";
import {enqueueSnackbar, useSnackbar} from "notistack";
import {jsPDF} from "jspdf";
import {axisBottom, axisLeft, curveMonotoneX, line, scaleLinear, scaleTime, select} from "d3";
import AddPrice from "./AddPrice";
import * as d3 from "d3-array";

export default function MarketPriceList() {

    const [MarketPriceRecords, setMarketPriceRecords] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();
    const [searchQuery, setSearchQuery] = useState('');
    const { enqueueSnackbar } = useSnackbar();
    //const [showType, setShowType] = useState('table');
    const papayaChartContainer = useRef(null);
    const futurePricesChartContainer = useRef(null);
    const [selectedFilter, setSelectedFilter] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 100;
    const recordsPerPage1 = 365;
    const [futurePrices, setFuturePrices] = useState([]);
    const [futurePricesTF, setFuturePricesTF] = useState([]);
    const [generateClicked, setGenerateClicked] = useState(false);

    const handleFilterChange = (e) => {
        setSelectedFilter(e.target.value);
    };
    const handleGenerateClick = () => {
        setGenerateClicked(true);
    };

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/marketprice', {
                params: {
                    filter: selectedFilter // Pass the selected filter value
                }
            })
            .then((response) => {
                const sortedData = response.data.data.sort((a, b) => new Date(a.date) - new Date(b.date));
                setMarketPriceRecords(sortedData);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, [selectedFilter]);

    useEffect(() => {
        renderPapayaChart();
        renderFuturePricesChart();
    }, [currentPage, MarketPriceRecords, futurePrices, selectedFilter]);

    const nextPage = () => {
        const totalPages = Math.ceil(MarketPriceRecords.length / recordsPerPage);
        if(currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const nextPage1 = () => {
        const totalPages = Math.ceil(futurePrices.length / recordsPerPage1);
        if(currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if(currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const renderPapayaChart = () => {

        if (!selectedFilter) {
            // If no filter is selected, return without rendering the graph
            return;
        }

        const filteredRecords = MarketPriceRecords.filter(record => {
            if (selectedFilter === "") {
                return true; // If no filter is selected, show all records
            } else {
                return record.name === selectedFilter; // Filter records based on selected type
            }
        });

        const startIndex = (currentPage - 1) * recordsPerPage;
        const endIndex = Math.min(startIndex + recordsPerPage, filteredRecords.length);
        const recordsToDisplay = filteredRecords.slice(startIndex, endIndex);
        const allMarketPriceRecords = [...filteredRecords];

        if (!papayaChartContainer.current || recordsToDisplay.length === 0) return;

        if (MarketPriceRecords.length === 0) {
            return;
        }

        const sortedDates = allMarketPriceRecords.slice(startIndex, endIndex).sort((a, b) => new Date(a.date) - new Date(b.date));


        const svg = select(papayaChartContainer.current);

        svg.selectAll("*").remove();

        const margin = { top: 20, right: 20, bottom: 60, left: 60 };
        const width = svg.attr("width") - margin.left - margin.right;
        const height = svg.attr("height") - margin.top - margin.bottom;

        const x = scaleTime()
            .range([0, width])
            .domain([new Date(sortedDates[0].date), new Date(sortedDates[recordsToDisplay.length - 1].date)]);

        const y = scaleLinear()
            .range([height, 0])
            .domain([0, Math.max(
                ...sortedDates.map(record => record.max_price),
                ...sortedDates.map(record => record.min_price)
                )]);

        const g = svg
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        const lineGenerator = line()
            .x(record => x(new Date(record.date)))
            .y(record => y(record.price));

        g.selectAll(".min-price-circle")
            .data(sortedDates)
            .enter()
            .append("circle")
            .attr("cx", (d, i) => x(new Date(d.date)))
            .attr("cy", (d) => y(d.min_price))
            .attr("r", 4)
            .attr("fill", "rgb(64, 64, 191)")
            .on("mouseover", (event, d, i) => {

                tooltip.style("opacity", 1);
                tooltip.html(`Date: ${d.date}<br/>Price: ${d.min_price}`)
                    .style("left", `${event.pageX}px`)
                    .style("top", `${event.pageY}px`);
            })
            .on("mousemove", (event) => {

                tooltip.style("left", `${event.pageX}px`)
                    .style("top", `${event.pageY}px`);
            })
            .on("mouseout", () => {

                tooltip.style("opacity", 0);
            });

        g.selectAll(".max-price-circle")
            .data(sortedDates)
            .enter()
            .append("circle")
            .attr("cx", (d, i) => x(new Date(d.date)))
            .attr("cy", (d) => y(d.max_price))
            .attr("r", 4)
            .attr("fill", "rgba(236, 19, 19)")
            .on("mouseover", (event, d, i) => {

                tooltip.style("opacity", 1);
                tooltip.html(`Date: ${d.date}<br/>Price: ${d.max_price}`)
                    .style("left", `${event.pageX}px`)
                    .style("top", `${event.pageY}px`);
            })
            .on("mousemove", (event) => {

                tooltip.style("left", `${event.pageX}px`)
                    .style("top", `${event.pageY}px`);
            })
            .on("mouseout", () => {

                tooltip.style("opacity", 0);
            });


        const tooltip = select("body")
            .append("div")
            .attr("class", "tooltip")
            .style("opacity", 0)
            .style("position", "absolute")
            .style("pointer-events", "none")
            .style("background-color", "rgb(79, 134, 224)")
            .style("padding", "5px")
            .style("border-radius", "5px")
            .style("border", "1px solid black");

        g.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", "translate(0," + height + ")")
            .call(axisBottom(x).ticks(5));

        g.append("g")
            .attr("class", "axis axis--y")
            .call(axisLeft(y).ticks(10, "s"))
            .append("text")
            .attr("class", "axis-title")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", "0.71em")
            .attr("text-anchor", "end")
            .text("Price");

        g.append("path")
            .datum(sortedDates)
            .attr("fill", "none")
            .attr("stroke", "red")
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("stroke-width", 1.5)
            .attr("d", lineGenerator.y(record => y(record.max_price)));

        g.append("path")
            .datum(sortedDates)
            .attr("fill", "none")
            .attr("stroke", "blue")
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("stroke-width", 1.5)
            .attr("d", lineGenerator.y(record => y(record.min_price)));

        svg.append("text")
            .attr("class", "axis-label")
            .attr("x", margin.left + (width / 2))
            .attr("y", height + margin.top + 50)
            .style("text-anchor", "middle")
            .style("font-weight", "bold")
            .text("Time");

        svg.append("text")
            .attr("class", "axis-label")
            .attr("transform", "rotate(-90)")
            .attr("x", 0 - (height / 2))
            .attr("y", 60 - margin.left)
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .style("font-weight", "bold")
            .text("Price");

        const legend = svg.append("g")
            .attr("transform", `translate(${width - 40}, 5)`);

        legend.append("text")
            .attr("y", 10)
            .text("Max Price")
            .attr("fill", "red");

        legend.append("text")
            .attr("y", 30)
            .text("Min Price")
            .attr("fill", "blue");

    };

    const generatePrediction = () => {
        if (!selectedFilter || selectedFilter === "All Types" ) {
            // If no filter is selected, show an error message
            enqueueSnackbar('Please select a type to generate predictions!!!', { variant: 'error' });
            return;
        }
        axios
            .get('http://localhost:5555/generate_market_prices', {
                params: {
                    name: selectedFilter // Pass the selected filter value
                }
            })
            .then((response) => {
                const {futureMaxPrices, futureMinPrices, futureTensorFlowModel} = response.data;
                const combinedFuturePrices = futureMaxPrices.map((maxPrice, index) => ({
                    date: maxPrice.date,
                    predictedMinPrice: futureMinPrices[index].price,
                    predictedMaxPrice: maxPrice.price,
                    tensorFlowMinPrice: futureTensorFlowModel[index].minPrice,
                    tensorFlowMaxPrice: futureTensorFlowModel[index].maxPrice
                }));
                setFuturePrices(combinedFuturePrices);
                enqueueSnackbar('Predictions generated successfully', { variant: 'success' });
            })
            .catch((error) => {
                console.log(error);
                enqueueSnackbar('Error generating future market prices', {variant: 'error'});
            })
    }

    const renderFuturePricesChart = () => {

        if (!futurePricesChartContainer.current || futurePrices.length === 0) return;

        const startIndex = (currentPage - 1) * recordsPerPage1;
        const endIndex = Math.min(startIndex + recordsPerPage1, futurePrices.length);
        const futurePricesToDisplay = futurePrices.slice(startIndex, endIndex);

        const svg = select(futurePricesChartContainer.current);

        svg.selectAll("*").remove();

        const margin = { top: 20, right: 20, bottom: 60, left: 60 };
        const width = svg.attr("width") - margin.left - margin.right;
        const height = svg.attr("height") - margin.top - margin.bottom;

        const x = scaleTime()
            .range([0, width])
            .domain(d3.extent(futurePricesToDisplay, d => new Date(d.date)));

        const y = scaleLinear()
            .range([height, 0])
            .domain([0, d3.max(futurePricesToDisplay, d => Math.max(d.predictedMaxPrice, d.predictedMinPrice, d.tensorFlowMaxPrice, d.tensorFlowMinPrice)) + 30]);

        const lineMax = line()
            .x(d => x(new Date(d.date)))
            .y(d => y(d.predictedMaxPrice));

        const lineMin = line()
            .x(d => x(new Date(d.date)))
            .y(d => y(d.predictedMinPrice));

        const lineMax1 = line()
            .x(d => x(new Date(d.date)))
            .y(d => y(d.tensorFlowMaxPrice));

        const lineMin1 = line()
            .x(d => x(new Date(d.date)))
            .y(d => y(d.tensorFlowMinPrice));

        const g = svg.append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

       /* g.selectAll(".min-price-circle")
            .data(futurePricesToDisplay)
            .enter()
            .append("circle")
            .attr("cx", (d, i) => x(new Date(d.date)))
            .attr("cy", (d) => y(d.predictedMinPrice))
            .attr("r", 3)
            .attr("fill", "rgb(64, 64, 191)")
            .on("mouseover", (event, d, i) => {

                tooltip.style("opacity", 1);
                tooltip.html(`Date: ${d.date}<br/>Price: ${d.predictedMinPrice}`)
                    .style("left", `${event.pageX}px`)
                    .style("top", `${event.pageY}px`);
            })
            .on("mousemove", (event) => {

                tooltip.style("left", `${event.pageX}px`)
                    .style("top", `${event.pageY}px`);
            })
            .on("mouseout", () => {

                tooltip.style("opacity", 0);
            });

        g.selectAll(".max-price-circle")
            .data(futurePricesToDisplay)
            .enter()
            .append("circle")
            .attr("cx", (d, i) => x(new Date(d.date)))
            .attr("cy", (d) => y(d.predictedMaxPrice))
            .attr("r", 3)
            .attr("fill", "rgba(236, 19, 19)")
            .on("mouseover", (event, d, i) => {

                tooltip.style("opacity", 1);
                tooltip.html(`Date: ${d.date}<br/>Price: ${d.predictedMaxPrice}`)
                    .style("left", `${event.pageX}px`)
                    .style("top", `${event.pageY}px`);
            })
            .on("mousemove", (event) => {

                tooltip.style("left", `${event.pageX}px`)
                    .style("top", `${event.pageY}px`);
            })
            .on("mouseout", () => {

                tooltip.style("opacity", 0);
            });*/

        const tooltip = select("body")
            .append("div")
            .attr("class", "tooltip")
            .style("opacity", 0)
            .style("position", "absolute")
            .style("pointer-events", "none")
            .style("background-color", "rgb(79, 134, 224)")
            .style("padding", "5px")
            .style("border-radius", "5px")
            .style("border", "1px solid black");
        const tooltip1 = select("body")
            .append("div")
            .attr("class", "tooltip")
            .style("opacity", 0)
            .style("position", "absolute")
            .style("pointer-events", "none")
            .style("background-color", "rgba(255, 63, 63, 1)")
            .style("padding", "5px")
            .style("border-radius", "5px")
            .style("border", "1px solid black");

        g.selectAll(".min-price-circle1")
            .data(futurePricesToDisplay)
            .enter()
            .append("circle")
            .attr("cx", (d, i) => x(new Date(d.date)))
            .attr("cy", (d) => y(d.tensorFlowMinPrice))
            .attr("r", 3)
            .attr("fill", "rgb(64, 64, 191)")
            .on("mouseover", (event, d, i) => {

                tooltip.style("opacity", 1);
                tooltip.html(`Date: ${d.date}<br/>Price: ${d.tensorFlowMinPrice}`)
                    .style("left", `${event.pageX}px`)
                    .style("top", `${event.pageY}px`);
            })
            .on("mousemove", (event) => {

                tooltip.style("left", `${event.pageX}px`)
                    .style("top", `${event.pageY}px`);
            })
            .on("mouseout", () => {

                tooltip.style("opacity", 0);
            });

        g.selectAll(".max-price-circle1")
            .data(futurePricesToDisplay)
            .enter()
            .append("circle")
            .attr("cx", (d, i) => x(new Date(d.date)))
            .attr("cy", (d) => y(d.tensorFlowMaxPrice))
            .attr("r", 3)
            .attr("fill", "rgba(236, 19, 19)")
            .on("mouseover", (event, d, i) => {

                tooltip1.style("opacity", 1);
                tooltip1.html(`Date: ${d.date}<br/>Price: ${d.tensorFlowMaxPrice}`)
                    .style("left", `${event.pageX}px`)
                    .style("top", `${event.pageY}px`);
            })
            .on("mousemove", (event) => {

                tooltip1.style("left", `${event.pageX}px`)
                    .style("top", `${event.pageY}px`);
            })
            .on("mouseout", () => {

                tooltip1.style("opacity", 0);
            });


       /* g.append("path")
            .datum(futurePricesToDisplay)
            .attr("fill", "none")
            .attr("stroke", "red")
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("stroke-width", 1.5)
            .attr("class", "line max-price")
            .attr("d", lineMax);

        g.append("path")
            .datum(futurePricesToDisplay)
            .attr("fill", "none")
            .attr("stroke", "blue")
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("stroke-width", 1.5)
            .attr("class", "line min-price")
            .attr("d", lineMin);*/

        g.append("path")
            .datum(futurePricesToDisplay)
            .attr("fill", "none")
            .attr("stroke", "blue")
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("stroke-width", 1.5)
            .attr("class", "line min-price1")
            .attr("d", lineMin1);

        g.append("path")
            .datum(futurePricesToDisplay)
            .attr("fill", "none")
            .attr("stroke", "red")
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("stroke-width", 1.5)
            .attr("class", "line max-price1")
            .attr("d", lineMax1);

        g.append("g")
            .attr("transform", `translate(0,${height})`)
            .call(axisBottom(x));

        g.append("g")
            .call(axisLeft(y));

        g.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 0 - margin.left)
            .attr("x", 0 - (height / 2))
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .style("font-weight", "bold")
            .text("Price");

        g.append("text")
            .attr("transform", `translate(${width / 2},${height + margin.top + 20})`)
            .style("text-anchor", "middle")
            .style("font-weight", "bold")
            .text("Time");

        const legend1 = svg.append("g")
            .attr("transform", `translate(${width - 40}, 5)`);

        legend1.append("text")
            .attr("y", 50)
            .text("Max Price")
            .attr("fill", "red");

        legend1.append("text")
            .attr("y", 70)
            .text("Min Price")
            .attr("fill", "blue");

    };

    const fruitTypes = [...new Set(MarketPriceRecords.map(record => record.name))];

    return (
        <div className=" overflow-x-auto  ">
            <div className="flex flex-row justify-between items-center px-8 mt-1 mb-4">
                <div>
                    <h1 className=" text-lg font-semibold text-left">MARKET PRICES</h1>
                </div>
            </div>
            <div>
                <AddPrice/>
            </div>
            <div className=" flex flex-wrap items-center justify-center mt-4 mb-4">
                <div className= "mr-2">
                    <button
                        onClick={() => {
                            generatePrediction();
                            handleGenerateClick();
                        }}
                        className=" className='mx-auto rounded-md bg-lime-700 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-lime-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Generate Prices
                    </button>
                </div>
                <div className= "ml-2 w-auto">
                    <select
                        value={selectedFilter}
                        onChange={handleFilterChange}
                        className="rounded-full px-2 py-1 w-fit">
                        <option value="All Types">All Types</option>
                        {fruitTypes.map((name) => (
                            <option key={name} value={name}>{name}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div>

            </div>

            {generateClicked && futurePrices.length > 0 && (
                <>
                    <div className=" flex flex-wrap items-center justify-center mb-3 mt-3">
                        <h4 className=" text-lg font-semibold text-center">PREDICTED PRICES</h4>
                    </div>
                    <div className="bg-green-100 border-2 border-blue-600 px-2 py-2 mr-2 ml-2 rounded-lg mb-4">
                        <svg ref={futurePricesChartContainer} width="1200" height="400"></svg>
                    </div>
                    <div className="flex justify-center mt-4 mb-3">
                        <button onClick={prevPage} className="mr-2 px-3 py-2 font-medium bg-lime-300 hover:bg-lime-400 rounded-md">
                            Previous
                        </button>
                        <button onClick={nextPage1} className="mr-2 px-4 py-2 font-medium bg-lime-300 hover:bg-lime-400 rounded-md">
                            Next
                        </button>
                    </div>
                </>
            )}
            {selectedFilter && (
                <>
                    <div className=" flex flex-wrap items-center justify-center mb-3 mt-3">
                        <h4 className=" text-lg font-semibold text-center">HISTORICAL PRICES</h4>
                    </div>
                    <div className="bg-green-100 border-2 border-blue-600 px-2 py-2 mr-2 ml-2 rounded-lg">
                        <svg ref={papayaChartContainer} width="1200" height="400"></svg>
                    </div>
                    <div className="flex justify-center mt-4 mb-3">
                        <button onClick={prevPage} className="mr-2 px-3 py-2 font-medium bg-lime-300 hover:bg-lime-400 rounded-md">
                            Previous
                        </button>
                        <button onClick={nextPage} className="mr-2 px-4 py-2 font-medium bg-lime-300 hover:bg-lime-400 rounded-md">
                            Next
                        </button>
                    </div>
                </>
            )}

            {/* <table className="w-full text-sm text-left rtl:text-right text-gray-500  ">
                <thead className="text-xs text-gray-700 shadow-md uppercase bg-gray-100 border-l-4 border-gray-500 ">
                <tr>
                    <th></th>
                    <th scope="col" className="px-6 py-3">Date</th>
                    <th scope="col" className="px-6 py-3">Predicted Min Price</th>
                    <th scope="col" className="px-6 py-3">Predicted Max Price</th>
                </tr>
                </thead>
                <tbody className="border-b border-green-400">
                {futurePrices.map((price) => (
                    <tr key={price.date} className='divide-y'>
                        <td></td>
                        <td className='px-6 py-4'>{price.date}</td>
                        <td className='px-6 py-4'>{price.predictedMinPrice}</td>
                        <td className='px-6 py-4'>{price.predictedMaxPrice}</td>
                    </tr>
                ))}
                </tbody>
            </table>*/}

            {/*<table className="w-full text-sm text-left rtl:text-right text-gray-500  ">
                <thead
                    className="text-xs text-gray-700 shadow-md uppercase bg-gray-100 border-l-4 border-gray-500 ">
                <tr className=" ">
                    <th></th>
                    <th scope="col" className="px-6 py-3"> Name</th>
                    <th scope="col" className="px-6 py-3">Type</th>
                    <th scope="col" className="px-6 py-3">Date</th>
                    <th scope="col" className="px-6 py-3">Minimum Price</th>
                    <th scope="col" className="px-6 py-3">Maximum Price</th>
                    <th scope="col" className=" py-3"><span className="sr-only">Info</span></th>
                    <th scope="col" className=" py-3"><span className="sr-only">Edit</span></th>
                    <th scope="col" className=" py-3"><span className="sr-only">Delete</span></th>
                </tr>
                </thead>

                <tbody className="border-b border-green-400">

                {filteredRecords
                    .sort((a, b) => new Date(a.date) - new Date(b.date))
                    .map((drecord, index) => (
                    <tr key={drecord._id} className='divide-y'>
                        <td></td>
                        <td className='px-6 py-4'>
                            {drecord.name}
                        </td>
                        <td className='px-6 py-4'>
                            {drecord.type}
                        </td>
                        <td className='px-6 py-4'>
                            {drecord.date}
                        </td>
                        <td className='px-6 py-4'>
                            {drecord.min_price}
                        </td>
                        <td className='px-6 py-4'>
                            {drecord.max_price}
                        </td>
                        <td className=" py-4 text-right">
                            <Link to={`/diseases/records/viewDisease/${drecord._id}`}>
                                <InformationCircleIcon
                                    className="h-6 w-6 flex-none bg-gray-300 p-1 rounded-full text-gray-800 hover:bg-gray-500"
                                    aria-hidden="true"/>
                            </Link>
                        </td>
                        <td className=" py-4 text-right">
                            <Link to={`/diseases/records/updateDisease/${drecord._id}`}>
                                <PencilSquareIcon
                                    className="h-6 w-6 flex-none bg-blue-200 p-1 rounded-full text-gray-800 hover:bg-blue-500"
                                    aria-hidden="true"/>
                            </Link>
                        </td>
                        <td className=" ">
                            <button
                                className="flex items-center"
                                onClick={() => handleDeleteDisease(drecord._id)}
                            >
                                <TrashIcon
                                    className="h-6 w-6 flex-none bg-red-200 p-1 rounded-full text-gray-800 hover:bg-red-500"
                                    aria-hidden="true"/>
                            </button>
                        </td>
                    </tr>
                ))}


                </tbody>
            </table>*/}
        </div>
    )
}
