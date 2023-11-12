/* 
  Filename: ComplexCode.js

  Description: This code demonstrates a complex solution for a graph traversal problem.
*/

class Node {
  constructor(value) {
    this.value = value;
    this.adjacentNodes = [];
    this.visited = false;
  }

  addAdjacentNode(node) {
    this.adjacentNodes.push(node);
  }
}

class Graph {
  constructor() {
    this.nodes = [];
  }

  addNode(value) {
    const newNode = new Node(value);
    this.nodes.push(newNode);
  }

  getNode(value) {
    return this.nodes.find(node => node.value === value);
  }

  addEdge(sourceValue, destinationValue) {
    const sourceNode = this.getNode(sourceValue);
    const destinationNode = this.getNode(destinationValue);

    if (sourceNode && destinationNode) {
      sourceNode.addAdjacentNode(destinationNode);
    }
  }

  depthFirstSearch(startNode) {
    const stack = [];
    stack.push(startNode);
    startNode.visited = true;

    while (stack.length > 0) {
      const currentNode = stack.pop();
      console.log(currentNode.value);

      for (const adjacentNode of currentNode.adjacentNodes) {
        if (!adjacentNode.visited) {
          adjacentNode.visited = true;
          stack.push(adjacentNode);
        }
      }
    }
  }
}

// Create a sample graph
const graph = new Graph();

graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addNode("E");
graph.addNode("F");
graph.addNode("G");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("B", "E");
graph.addEdge("C", "F");
graph.addEdge("D", "G");
graph.addEdge("F", "G");

// Perform Depth First Search traversal
graph.depthFirstSearch(graph.getNode("A"));
