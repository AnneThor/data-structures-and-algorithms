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
   let a, b = [cities]
   if (cities.length !== 2) { return null }
   if (!graph.contains(a) || !graph.contains(b)) {
     return null
   }
   // ok now we now we have 2 cities and they're both in the
   // Graph
   if (!graph.getNeighbors(new Vertex(a)))
 }
