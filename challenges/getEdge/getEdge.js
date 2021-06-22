const Graph = require('../../Data-Structures/graph/graph.js')
const Vertex = require('../../Data-Structures/graph/vertex.js')

/**
* Write a function that takes in a graph, and an array of
* city names. Without using any built-in methods return whether
* the full trip is possible with direct flights, and how
* much it would cost.
**/

/**
 * getEdge accepts a graph (that contains city pairs weighted by
 * cost of connections) and an array of 2 city names. The function
 * returns null (no direct connection) or an integer representing
 * the cost of the trip
 * @param {object} graph - the graph of cities
 * @param {object} cities - array of 2 cities to search for
 * connections between
 * @return {number} - representing the cost of the connection
 * or null if there is no direct connection
 **/
 function getEdge(graph, cities) {
   let [a, b] = cities
   let cityA = new Vertex(a)
   let cityB = new Vertex(b)
   if (cities.length !== 2) { return null }
   if (graph.contains(cityA) && graph.contains(cityB)) {
     let neighbors = graph.getNeighborsValue(a)
     let connection = neighbors.filter(edge => edge.vertex.value === b)
     if (connection.length === 0) { return null }
     return connection[0].weight;
   } else {
     return null;
   }
 }

module.exports = getEdge
