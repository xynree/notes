# Clean Code in React: Clean Code Practices for ReactJS  (Roadside Coder) [^1]

[^1]: https://www.youtube.com/watch?v=dZXpgP9ibf8

- **Use Arrow Functions**
  - Cleaner and removes need for *this* keyword.
- **No Return Keyword**
  - You can remove the *return ( )* statement and instead replace with round braces ( ) if there is no sandwiched code

    ```js:before
    const App () => {

        return (
            <div>Hello</div>
            )
    }
    ```
    ```js:after
    const App () => (
        <div>Hello</div>
    )
    ```

    if the return statement is not being used.

- **Using Less Brackets**
  - Round braces can be removed in above case, and arguments/props can also have brackets removed.

    ```js:after
    const App = props => 
        <div>Hello</div>
    ```

- **Destructuring Functions**
  - Separate out parts of functions/returns so that it is cleaner

    ```js:before 
    const Destructure = (
        <div>Hello</div>
    )
    ```

    ```js:after
    import Destructure

    const App = props => <Destructure/>
    ```

- **Destructuring Arrays**
  - destructure your maps

    ```js:before
    {
        name.map((n) => (
            <div>{n.first} {n.last}</div>
        ))
    }
    ```
    ```js:after
    {
        name.map(({first, last}) => (
            <div>{first} {last}</div>
        ))
    }
    ```

- **Optional chaining**
  - Below: If there is something in 'n' only then can you use first value of array
  
    ```js:before
    {
          name.map((n) => (
            <div>{n && n.first}</div>
          ))
    }
    ```

    - would print value '*first*' of *n* only if n existed. Instead you can write this way:

    ```js:after
    {
          name.map((n) => (
            <div>{n?.first}</div>
        ))
    }
    ```