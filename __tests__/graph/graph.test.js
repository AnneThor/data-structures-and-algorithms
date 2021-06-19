// const ll = require('../../Data-Structures/linkedList/linked-list.js')
// const node = require('../../Data-Structures/linkedList/node.js')
const Graph = require('../../Data-Structures/graph/graph.js')
const Vertex = require('../../Data-Structures/graph/vertex.js')
const Edge = require('../../Data-Structures/graph/edge.js')

describe("GRAPH functionality", () => {

  let empty = new Graph();
  let vArr = []
  for (let i=0; i < 100; i+=10) {
    vArr.push(new Vertex(i))
  }

  beforeEach(() => {

  })

  afterEach(() => {
    empty.list.clear()
  })

  test("that we can create an empty graph", () => {
    expect(Array.from(empty.list)).toEqual([]);
  })

  test("that we can add a node to the graph", () => {
    empty.addNode(vArr[1]); // should be 10
    expect(Array.from(empty.list)).toEqual([[vArr[1], []]]);
    empty.addNode(vArr[6]) // should be 60
    expect(Array.from(empty.list)).toEqual([[vArr[1], []], [vArr[6], []]]);
  })

  test("that we can add an edge to the graph with no weight", () => {
    empty.addNode(vArr[1]); // should be 10
    empty.addNode(vArr[6]) // should be 60
    empty.addEdge(vArr[1], vArr[6])
    expect(Array.from(empty.list)[0][1]).toBeTruthy();
    expect(Array.from(empty.list)[0][1][0].vertex).toEqual(vArr[6]);
  })

  test("that we can retrieve a collection of vertices", () => {
    for (let i=0; i<vArr.length; i++) {
      empty.addNode(vArr[i])
    }
    expect(empty.getNodes().length).toEqual(10);
    expect(empty.getNodes()[1]).toEqual(vArr[1]);
  })

  test("that neighbors are correctly retrieved from the graph", () => {
    for (let i=0; i<vArr.length; i++) {
      empty.addNode(vArr[i])
    }
    empty.addEdge(vArr[1], vArr[7], 10)
    empty.addEdge(vArr[1], vArr[9], 2)
    empty.addEdge(vArr[1], vArr[6], 3)
    empty.addEdge(vArr[1], vArr[1], 5)
    let neighbors = empty.getNeighbors(vArr[1])
    expect(neighbors).toBeTruthy()
    expect(neighbors.length).toBe(4)
    let n2 = empty.getNeighbors(vArr[7])
    expect(n2).toBeTruthy()
    expect(n2.length).toBe(1)
    let testEdge = new Edge(vArr[1], 10)
    expect(n2[0]).toEqual(testEdge);
  })

  test("that neighbors include weight accurately", () => {
    for (let i=0; i<vArr.length; i++) {
      empty.addNode(vArr[i])
    }
    empty.addEdge(vArr[1], vArr[7], 10)
    empty.addEdge(vArr[1], vArr[9], 2)
    empty.addEdge(vArr[1], vArr[6], 3)
    empty.addEdge(vArr[1], vArr[1], 5)
    let neighbors = empty.getNeighbors(vArr[1])
    let weightArr = [10, 2, 3, 5]
    for (let i=0; i < neighbors.length; i++) {
      expect(neighbors[i].weight).toBe(weightArr[i])
    }
    let n2 = empty.getNeighbors(vArr[7])
    expect(n2[0].weight).toBe(10)
  })

  test("that size properly returns the number of vertices", () => {
    expect(empty.size()).toBe(0)
    for (let i=0; i<vArr.length; i++) {
      empty.addNode(vArr[i])
    }
    empty.addEdge(vArr[1], vArr[7], 10)
    empty.addEdge(vArr[1], vArr[9], 2)
    empty.addEdge(vArr[1], vArr[6], 3)
    empty.addEdge(vArr[1], vArr[1], 5)
    expect(empty.size()).toBe(10)
  })

  test("that a graph with one node and one edge can be properly returned", () => {
    empty.addNode(vArr[0]);
    empty.addEdge(vArr[0], vArr[0], 20);
    expect(empty.size()).toBe(1)
    expect(empty.getNodes().length).toBe(1)
    expect(empty.getNodes()).toEqual([vArr[0]])
    expect(empty.getNeighbors(vArr[0])).toBeTruthy()
    expect(empty.getNeighbors(vArr[0]).length).toBe(1)
  })

})
