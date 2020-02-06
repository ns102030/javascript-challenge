// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
console.log(data);

data.forEach(function(weatherReport) {
    console.log(weatherReport);
    
    var row = tbody.append("tr");
    Object.entries(weatherReport).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
       cell.text(value);
     });
  });

  
  var button= d3.select('');

 // d3.selectAll("#filter-btn").on("click", button_clicked);
  d3.selectAll("#filter-btn").on("click", handleClick);

  function handleClick() {
    // Grab the datetime value from the filter
    var date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
      console.log(filteredData);
    }
  }


  

  // function button_clicked() {
  //   console.log('here!')
  //   var date= d3.select('#datetime');
  //   let filtered_data= tableData;
  //   filtered_data=filtered_data.filter(row => row.datetime === date);
  //   console.log(filtered_data);

  // }