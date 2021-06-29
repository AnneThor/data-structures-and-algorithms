const Graph = require('../../Data-Structures/graph/graph.js')
const Vertex = require('../../Data-Structures/graph/vertex.js')
const Edge = require('../../Data-Structures/graph/edge.js')

describe("GRAPH - TRAVERSE DEPTH FIRST functionality", () => {

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

  test("that depth first returns null on an empty graph", () => {
    expect(empty.depthFirst(vArr[0])).toBeNull()
  })

  test("that depth first returns null if not given proper inputs", () => {
    expect(empty.depthFirst()).toBeNull();
  })

  test("that depth first returns null if vertex not in graph", () => {
    expect(empty.depthFirst(vArr[5])).toBe(null)
  })

  test("depth first returns the correct array of nodes", () => {
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

    let df = empty.depthFirst(vArr[1])
    expect(df.length).toBe(5)
    expect(df[0]).toBe(vArr[1])
    expect(df[1]).toBe(vArr[7])
    expect(df[2]).toBe(vArr[9])
    expect(df[3]).toBe(vArr[6])
    expect(df[4]).toBe(vArr[4])
  })

})
