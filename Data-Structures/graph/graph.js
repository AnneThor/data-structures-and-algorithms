'use strict'
const Vertex = require('./vertex.js')
const Edge = require('./edge.js')
const Queue = require('../stacks-and-queues/queue.js')

class Graph {

  /**
   * Constructor method for an empty graph, no parameters
   **/
  constructor() {
    this.list = new Map();
  }

  /**
   * returns a boolean representing if the vertex is
   * contained in the graph
   * @param {object} vertex - the vertex searched for
   * @return {boolean} - representing if the vertex was
   * found in the graph
   */
   contains(vertex) {
    if (!this.list.get(vertex)) { return false }
    else { return true }
   }


  /**
  * AddNodes adds the given vertex to the graph
  * @param {object} vertex - the vertex to add to the graph
  * @return {object} - a node that contains the value
  */
  addNode(vertex) {
    this.list.set(vertex, [])
  }

  /**
   * AddEdge accepts two nodes (must currently be in the graph)
   * and adds an (optionally weighted) edge between them; if the nodes
   * are equal only one edge is added
   * @param {object} v1 - value of first node to connect
   * @param {object} v1 - value of second node to connect
   * @return {string} - error message if one of the nodes isn't in the graph
   **/
   addEdge(v1, v2, weight=0) {
     // check they are both in the graph
     let node1 = this.list.get(v1)
     let node2 = this.list.get(v2)
     if (node1 === node2) {
       let upd1 = node1.push(new Edge(v2, weight))
     } else if (node1 && node2) {
       let upd1 = node1.push(new Edge(v2, weight))
       let upd2 = node2.push(new Edge(v1, weight))
     } else {
       return "One or both vertices are not contained in the graph"
     }
   }

   /**
    * GetNodes returns the current list of nodes in the graph
    * This will be in the form of an array of arrays
    * The first value of each inner array is the vertex value
    * The second value of each inner array is the edges attached to the node
    * @return {object} - array of arrays containing [vertex value, [edges]]
    **/
    getNodes() {
      return Array.from(this.list.keys())
    }

    /**
     * GetNeighbors accepts a node as input, returns a collection
     * of edges attached to the vertex, including the weight of the
     * edges. This will be in the form of an array of lists [vertex, weight]
     * @param {object} vertex - value of vertex to return neighbors of
     * @return {object} - array of neighboring nodes
     **/
     getNeighbors(vertex) {
       let neighbors = this.list.get(vertex)
       if (neighbors) {
         return neighbors;
       } else {
         return "Input vertex is not contained in the graph"
       }
     }

     /**
      * Size returns the number of vertices in the graph
      * @return {number} - the number of nodes in the graph
      **/
      size() {
        return Array.from(this.list.keys()).length
      }

      /**
       * Breadth first traversal from given input vertex that returns
       * an array containing the vertices of the graph
       * @param {object} vertex - the vertex to use as the starting point
       * of the traversal
       * @return {object} - an array of vertices in the tree or null if
       * the original input was not a vertex in the graph
       **/
       breadthFirst(vertex) {
         if (!this.list.get(vertex)) { return null }
         let q = new Queue()
         let visited = []
         q.enqueue(vertex);
         while(!q.isEmpty()) {
           let curr = q.dequeue()
           if (!visited.includes(curr)) {
             visited.push(curr);
             console.log("curr array", visited)
             let neighbors = this.getNeighbors(curr);
             console.log("neighbors are", neighbors)
             neighbors.forEach(neighbor => {
               q.enqueue(neighbor.vertex)
             })
           }
         }
         return visited
       }


}

module.exports = Graph
