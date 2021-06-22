const Graph = require('../../Data-Structures/graph/graph.js')
const Vertex = require('../../Data-Structures/graph/vertex.js')
const Edge = require('../../Data-Structures/graph/edge.js')
const getEdge = require('../../challenges/getEdge/getEdge.js')


describe("EDGE functionality", () => {

  let empty = new Graph();
  let cityArr = ["Cincinatti", "Anchorage", "Portland", "Seattle", "Boston",
              "Spokane", "Juneau", "New Orleans", "Dallas", "LA"]
  let vArr = []
  for (let i=0; i < cityArr.length; i++) {
    let vertex = new Vertex(cityArr[i]);
    vArr.push(new Vertex(cityArr[i]))
  }

  beforeEach(() => {

  })

  afterEach(() => {
    empty.list.clear()
  })

  test("that contains helper function works", () => {
    for (let i=0; i<vArr.length; i++) {
      empty.addNode(vArr[i])
    }
    expect(empty.contains(vArr[1])).toBeTruthy()
    let testNode = new Vertex("Cincinatti")
    expect(empty.contains(testNode)).toBeTruthy();
  })

  test("that we get a null for two cities that are not connected", () => {
    for (let i=0; i<vArr.length; i++) {
      empty.addNode(vArr[i])
    }
    expect(getEdge(empty, ["A", "B"])).toBe(null)
    expect(getEdge(empty, ["Cincinatti", "Anchorage"])).toBe(null);
  })

  test("that we get the correct weight for a pair of connected cities", () => {
    for (let i=0; i<vArr.length; i++) {
      empty.addNode(vArr[i])
    }
    empty.addEdge(vArr[1], vArr[7], 10)
    empty.addEdge(vArr[1], vArr[9], 2)
    empty.addEdge(vArr[1], vArr[6], 3)
    empty.addEdge(vArr[1], vArr[1], 5)
    empty.addEdge(vArr[6], vArr[9], 3)
    empty.addEdge(vArr[6], vArr[4], 5)
    let testNode = new Vertex(cityArr[1])
    expect(getEdge(empty, ["Anchorage", "New Orleans"])).toBe(10);
  })

})
