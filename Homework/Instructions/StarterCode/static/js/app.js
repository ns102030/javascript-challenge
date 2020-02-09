// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
console.log(data);
popTable(tableData);


function popTable(stuff) {
  tbody.html("");
  console.log("made it");
  //d3.select("tbody").remove();

stuff.forEach(function(weatherReport) {
    //console.log(weatherReport);
    
    var row = tbody.append("tr");
  
    Object.entries(weatherReport).forEach(function([key, value]) {
      //console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
       cell.text(value);
     });
  });
}

  

 // d3.selectAll("#filter-btn").on("click", button_clicked);
  d3.selectAll("#filter-btn").on("click", handleClick);

  function handleClick() {
    // Grab the datetimeState value from the filter
    var dateState = d3.select("#datetimeState").property("value");
    let filteredData = tableData;
    console.log(dateState);
    if (dateState.length===2 ) {
      filteredData = filteredData.filter(row => row.state=== dateState);
      console.log("Made it inside filter");
    }
    // Check to see if a date was entered and filter the
    // data using that date.
    else if (dateState.length>2) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetimeState` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === dateState);

    }
    else {
      return;
    }
    console.log(filteredData);
    popTable(filteredData);
  }


  

  // function button_clicked() {
  //   console.log('here!')
  //   var date= d3.select('#datetimeState');
  //   let filtered_data= tableData;
  //   filtered_data=filtered_data.filter(row => row.datetimeState === date);
  //   console.log(filtered_data);

  // }

  