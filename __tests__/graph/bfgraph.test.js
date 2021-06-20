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

  test("that breadth first returns null if vertex not in graph", () => {
    expect(empty.breadthFirst(vArr[5])).toBe(null)
  })

  test("breadth first returns the correct array of nodes", () => {
    expect(empty.size()).toBe(0)
    for (let i=0; i<vArr.length; i++) {
      empty.addNode(vArr[i])
    }
    empty.addEdge(vArr[1], vArr[7], 10)
    empty.addEdge(vArr[1], vArr[9], 2)
    empty.addEdge(vArr[1], vArr[6], 3)
    empty.addEdge(vArr[1], vArr[1], 5)
    empty.addEdge(vArr[6], vArr[9], 3)
    empty.addEdge(vArr[6], vArr[4], 5)
    console.log(empty.breadthFirst(vArr[1]))
    let bf = empty.breadthFirst(vArr[1])
    expect(bf.length).toBe(5)
    expect(bf[0]).toBe(vArr[1])
    expect(bf[1]).toBe(vArr[7])
    expect(bf[4]).toBe(vArr[4])

  })

  test("breadth first returns the correct array of nodes", () => {
    expect(empty.size()).toBe(0)
    for (let i=0; i<vArr.length; i++) {
      empty.addNode(vArr[i])
    }
    empty.addEdge(vArr[1], vArr[7], 10)
    empty.addEdge(vArr[1], vArr[9], 2)
    empty.addEdge(vArr[1], vArr[6], 3)
    empty.addEdge(vArr[1], vArr[1], 5)
    empty.addEdge(vArr[6], vArr[9], 3)
    empty.addEdge(vArr[6], vArr[4], 5)
    let bf = empty.breadthFirst(vArr[6])
    expect(bf.length).toBe(5)
    expect(bf[0]).toBe(vArr[6])
    expect(bf[1]).toBe(vArr[1])
    expect(bf[4]).toBe(vArr[7])
  })

})
