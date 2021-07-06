// Read the data
//   Get a list of years
d3.csv("https://gist.githubusercontent.com/gurmanbh/7f24b09ec9da582559c63869ead3d3a3/raw/d33b4387e7a4553ef28bce9c8f047a3adefa8d7c/oscars.csv")
  .then(ready)

function ready(data){
  console.log(data)
  // our concept: 1 thing on the page for every data point
  // but..... we have more data points than we want years
  // so let's make a new list, where every year is a winner
  // so we can say: hey, 1 option for every winner
  // only places where Winner is '1'
  let winners = data.filter(d => d.Winner === '1')
  console.log(winners.length, "winners")
 //   d3 selects our element with year id
//   Go and select our future "option" with the class "opt"
//   Bind our data to that selection
//   Enter to our selection
//   Append those options
//   Give that option a class
//   Set the value as d which in this case is the year
//   Set the text as d which in this case in the year
 
  // i want an <option> for every single datapoint in winners
  d3.select("#year") // grabbed some section of the page
     .selectAll("option") // added an option for every
     .data(winners) // winner
     .enter().append("option")
     .text(d => d.Year) // and wrote the year out

  d3.select("button")
    .on('click', function() {
      console.log('i was clicked');
      const selected = d3.select("#year").node().value;
      // const winner = data.filter(d => d.Year === selected && d.Winner === '1')[0]
      const winner = data.find(d => d.Year === selected && d.Winner === '1')
      d3.select(".movie").text(winner.Name)
      
      // how do i list all of the nominees???
      d3.select("???") // what section of the page are we editing?
     .selectAll("???") // what kind of element do we want to add?
     .data(winners) // what is our data? start with data, move to a filtered list
     .enter().append("???")
     .text(d => d.Year) // what column are we interested in???
   })
}

