// Read the data
//   Get a list of years
d3.csv("https://gist.githubusercontent.com/gurmanbh/7f24b09ec9da582559c63869ead3d3a3/raw/d33b4387e7a4553ef28bce9c8f047a3adefa8d7c/oscars.csv")
  .then(ready)

function ready(data){
  // console.log(data)
  let oscars = data.filter(d => d.Winner === '1')
  console.log(oscars.length, "oscars")
 
  // i want an <option> for every single datapoint in oscars
  d3.select("#year") // grabbed id=year section of the page
     .selectAll("option") // added an option for every
     .data(oscars) // oscars
     .enter().append("option")
     .text(d => d.Year) // and wrote the year out

  d3.select("button") // grabbed type=button of the page
    .on('click', function() {
    console.log('I clicked');

    d3.select('.oscar')
    //     Remove the class hide
    .classed('hide', false);

    const selected = d3.select("#year").node().value;
    const winner = data.find(d => d.Year === selected && d.Winner === '1')
    d3.select(".movie").text(winner.Name); // grabbed class=movie div of the page
    
    d3.select('.oscarnom')
    //     Remove the class hide
    .classed('hide', false);

    const nomFiltered = data.filter(d => d.Year===selected && d.Winner=='')
    d3.select(".nominee").text(nomFiltered.map(d => d.Name))

    })
}

