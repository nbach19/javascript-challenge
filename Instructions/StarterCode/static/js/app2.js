// from data.jsvar tableData = data;// console.log(tableData);
// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");
// Function to add the table, filtered or not
function addTable(td) {    
    // Wipe the table if there is one    
    tbody.html("")
    // Add the table    // weather report values (datetime, city, state, country, shape, durationMinutes, comments)    
    // Loop through the array of ufo sighting objects    
    td.forEach(function (ufoSighting) {        
    // console.log(ufoSighting);        
    // add a table row        
    var row = tbody.append("tr");        
    // we know the structure so just get the values        
    Object.values(ufoSighting).forEach((value) => {            
    // console.log(value);            
    // Append a cell to the row for each value            
    var cell = row.append("td");            
    cell.text(value);        
    });    
});
}
    addTable(tableData);

    // Filter the data based on user form input
    // Select the buttonvar 
    button = d3.select("#filter-btn");
    // listen for the button click event and do...
    button.on("click", function() {
        // Select the input element    
        var inputElement = d3.select("#datetime");      
        // Get the value property of the input element    
        var date = inputElement.property("value");    
        console.log(date);      
        var filteredData = tableData.filter(ufo => ufo.datetime === date);      
        // console.log(filteredData);
        // add the filtered table    
        addTable(filteredData);});