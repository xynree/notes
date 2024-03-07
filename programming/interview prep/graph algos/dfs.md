# Depth-First Search

- Graph Traversal: Find a way to visit every vertex of a graph
- Differentiated by order of visitation

## DFS Intuition

- Go to next vertex, then if there's nothing further go a step back.
- Go to next vertex and continue traversing until nothing left
- Go to new vertexes as we see them until there is nothing left, then go back and do again until we hit a dead end.

## DFS Implementation 1: Recursive

- Visit first node
- Hold a marked array of size of the graph
- For each neighbor, visit DFS on each neighbor

(Preorder)
```py
marked = [False] * G.size()
def dfs_pre(G, v):
  visit(v) // Mark visited as soon as we look at the node
  marked[v] = True
  for w in G.neighbors(v):
    dfs(G,w)
```

(Postorder)
```py
makred = [False] * G.size()
def dfs_post(G,v):
  marked[v] = True
  for w in G.neighbors(v):
    if not marked[w]:
      dfs(G,w)
  visit(v) // Mark it visited only after there are no neighbors left
```


## DFS Implementation 2: Iterative

- Use a stack data structure
```py
marked = [False] * G.size()
def dfs_iter(G,v):
  stack = [v]
  while len(stack) > 0:
    v.stack.pop()
    if not marked[v]:
      visit(v)
      marked[v] = True
      for w in G.neighbors(v):
        if not marked[w]:
          stack.append(w)
```
- Useful to identify or order stack by hand
- Preorder vs Postorder
  - Preorder: Output the value as soon as we visit
  - Postorder: Output the value only when there's no other neighbors we can travel to

## Applications

- Cycle detection
  - Any time we encounter a new edge that points to an already encountered vertex, we have a cycle
- Finding connected components
  - Run DFS multiple times
- Topological Sort
  - Reversing DFS Postorder gives you a valid top.sort
- Maze Generation
  - We randomly inser thte neighbors into a stack instead of always inserting all neighbors