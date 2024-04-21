# Topological Sort

- Many situations can be modelled as a graph with directed edges where some events must happen before others
  
- Example: Classes with prerequesites
- Top sort enables us to figure out the order of which to enroll in classes where we don't enroll in a class that is unnecessary
  
- Example 2: Program build dependencies: Program can't be built until all its dependencies are first built

- Topological Ordering: We can align all nodes in a line and have all the nodes pointing to the right
  - These are not unique
- Top sort algorithmn can find the ordering in O(V+E) time

- Any graph with a cycle cannot have a valid ordering
- Only types of graphs with valid top: Directed Acyclic Graph (DAG)
  - How to figure out if my graph has a directed cycle?
    - Tarjan's strongly connected component algorthm

- All trees have a topological sorting bc by definition they don't have cycles.
  - How: Iteratively pick off all leaf nodes until nothing left

## Topolocial Sort Algorithm

1. Find an unvisited nodes
2. Beginnng with start run DFS on unvisited nodes
3. On the recursive callback of DFs, add the node to the topological ordering in reverse order.

## Topological Sort Pseudocode

- Assume graph is in an adjacency list

```py
function topsort(graph):
N = graph.numberOfNodes()
visited = [false..... false] // Length N
ordering = [0...] // result
i = N - 1 // index to insert things at

for (let i=0; i< N; i++) {
  if visited[i] = false;
    visitedNodes = []
  dfs(i, visited, visitedNodes, graph)
  for node in visitedNodes:
    ordering[i] = nodeId
    i = i - 1
  return ordering
}

function dfs(at, visited, visitedNodes, graph):
  visited[at] = true
  edges = graph.getEdgesFromNode(at)
  for edge in edges:
  if visited[edge.to] = false:
    dfs(edge.to, V, visitedNodes, graph)
  
  visitedNodes.add(at)
```