// from data.js
var tableData = data;

// create var for table body
var tbody = d3.select("tbody")

function addTable(td){
    tbody.html("");
    td.forEach(function(ufoSightings){
    // console.log(ufoSightings);
    var row = tbody.append("tr");
    Object.values(ufoSightings).forEach((value) => {
        // console.log(value);
        // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});
}

addTable(tableData);

// write code for date search button
var button = d3.select("#filter-btn");


button.on("click", function(){
    //select    input element
    var inputField = d3.select("#datetime");
    //select value of the input
    var inputDate = inputField.property("value");
    // console.log for values
    console.log(inputDate);
    // console.log(tableData);
    var filteredData = tableData.filter(ufo => ufo.datetime === inputDate)
    addTable(filteredData);
});