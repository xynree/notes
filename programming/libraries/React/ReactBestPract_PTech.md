# React Best Practices [^1]
[^1]: https://www.youtube.com/watch?v=ocKqJCYkJCs

- **Separate visual/functional areas of component (JSX file) + (FUNCTIONS file)**
  - Destructure Referenced Functions

```js:Counter.js

    import Counter from './Counter'

    function Counter() => {
      const [counterVal, setCounterVal] = useState(0)

      const increment = () => {
        setCounterVal(counterVal + 1)

        return {counterVal, increment}
      }
    }
```

```js:App.js

    import Counter from './Counter'

    function App() {
      const { increment, counterVal } = Counter();

      return (
        <div className='App'>
          <button onClick={increment}>Increment</button>
          {counterVal}
        </div>
      )
    }
  ```

- Lambda Functions

  ```html:lambda
  <button onClick={()=>someFunction()}></button>
  ```

  - REMEMBER: Anything in a lambda function will be recreated on every rerender. 
- ESLint + Styled Components
