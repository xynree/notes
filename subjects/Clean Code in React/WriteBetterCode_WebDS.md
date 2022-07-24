
# Write Better Web Code - WebDS [^1]
[^1]:  https://youtu.be/0yzoAbrjV6k

- **State Mistakes**
  - useState always with *const* so you don't accidentally change state without using a setState variable
  - setState runs *ASYNCHRONOUSLY* so console.log's will print out previous state.
    - try placing console.log's in useEffect instead to show rerenders.
  
      ```js:useEffect
        useEffect(() => {
          console.log(count)
        }, [count])
      ```
  
  - you can use .propTypes to set types (w/o typescript)
  - always use a function to adjust useState variables:
  
    ```js:useState
    setCount(currCount => currCount + 1)
    ```

  - make sure useState always uses default strings (useState('')) so component doesn't move from uncontrolled to controlled

- **UseEffect Mistakes**
  - when page refreshes, new versions of the useEffect reference are created, making the value different. (pass by ref ***vs*** pass by value)
  - try using ***useMemo*** to fix this:

    ```js:useMemo
      const user = useMemo(() => {
        return {age, name}
      }, [name, age])

      useEffect(() => {
        console.log(user)
      }, [user])
      ```

  - this version only creates new objects if the 'user' object has been updated

- **Array/List Mistakes**
  - When using filter, sort, find, etc. make sure you aren't directly changing the list, but instead making a copy.
  
    ```js:broken
      setTodo(curTodo => {
        const todo = currDodo.find(todo => todo.id === todoId)
        todo.complete = !todo.complete
        return currTodos
      })
    ```

  - map function returns a **NEW** array instead of the same array :

    ```js:map
      setTodo(curTodo => {
        return currTodos.map(todo => {
          if (todo..id === todoId) {
            return {...todo, complete: !todo.complete }
          } })})
    ```

  - when updating multiple pieces of state through adjustment of one useState, better to use the same object rather than copying (do not store Derived State)

    ```js:same_object
      const [todos, setTodos] = useState(initialTodos)
      const [selectedTodoId, setSelectedTodoId] = useState()
      const selectedTodo = todos.find(todo => todo.id === selectedTodoId)

- Other notes:
  - Try to use more && , toggle and ? symbols to simplify code
  - To select a specific array value, use **.find** to edit code