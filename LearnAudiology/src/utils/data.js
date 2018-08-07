import store from 'react-native-simple-store';

/*
 * Save graph with provided title and generated local date-time variable.
 */
function saveGraph(title, pointArray) {
  // DAYOFWEEK MONTH [BLANK] DAY TIME YEAR
  var timeComplete = new Date().toLocaleString().split(' ');
  var index = 2;
  if (timeComplete[2] === '') {
    index++;
  }
  var date = timeComplete[0] + ' ' + timeComplete[1] + ' ' +
  timeComplete[index++] + ' ' + timeComplete[++index];
  var time = timeComplete[--index];
  var graph = {
    date: date,
    time: time,
    points: pointArray
  }
  store.push(title, graph)
}

/*
 * Retrieve a graph with the given title.
 */
function getGraph(title) {
  store.get(title)
  .then(graph => {
      if (!graph) {
        console.log('No graphs with that title saved!');
      } else {
        console.log(graph);
        store.delete(graph);
      }
    }
  )
}

/*
 * Delete graph with the given title.
 */
function deleteGraph(title) {
  store.delete(title);
}

module.exports = {
  saveGraph: saveGraph,
  getGraph: getGraph,
  deleteGraph: deleteGraph
}
