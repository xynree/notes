# Error Handling, "try... catch" 


try...catch allows to "catch" errors so script will do something more reasonable instead of dying

```js
try {
...
} catch (err){
  ...
}
```
if error occurs inside code, ignore rest of "try". then execute catch block
- try...catch is synchronous, doesn't work in asynch code like setTimeout
- generates an err object
  - 2 properties: name, message 
- throw <error object>
- Standard errors: Error, SyntaxError, ReferenceError, TypeError, etc.

### Rethrowing
- Catch should only process errors that it knows and rethrow all others.
  1. Catch gets all errors
  2. catch(err) analyzes error object `err`
  3. If we don't know how to handle, throw err.  
  4. Can be caught by an outer try...catch or will kill the script.
- Finally:
  - try...catch....finally
  - will run in all cases:
    - after try, if there were no errs
    - after catch, if there was errors
  - Finally works after any exit from try...catch including explicit return.
- Global catch
  - browser has: window.onerror = () => alert(message)
- Web services can also be used to provide error logging for businesses.

---
# Custom Errors, Extending Error
- inheriting errors allow to use obj instanceof Error
### Extending Error

```js:Custom_ValidationError
class ValidationError extends Error {
  constructor(message) {
    super(message); // (1)
    this.name = "ValidationError"; // (2)
  }
}

function test() {
  throw new ValidationError("Whoops!");
}

try {
  test();
} catch(err) {
  alert(err.message); // Whoops!
  alert(err.name); // ValidationError
  alert(err.stack); // a list of nested calls with line numbers for each
}
```

- Wrapping exceptions: Function handles low level exceptions and creates higher level errors instead of low level ones