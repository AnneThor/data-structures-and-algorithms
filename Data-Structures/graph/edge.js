'use strict'

class Edge {

  /**
   * Constructor method for Edge objects
   * @param {object} vertex - a vertex object to add the edge to
   * @param {number} weight - associated weight of the edge
   **/
  constructor(vertex, weight=0) {
    this.vertex = vertex
    this.weight = weight
  }
}

module.exports = Edge
