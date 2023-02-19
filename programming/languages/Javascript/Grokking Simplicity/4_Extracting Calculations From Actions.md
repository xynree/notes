# 4. Extracting Calculations from Actions

- Looking at existing piece of software and refactoring
- New feature: Icon appears if certain criteria met

### The imperative way to do it

  1. Get all buy buttons, then loop
  2. Figure out if they get free shipping
  3. Show or hide icon appropriately

- Call this new function at the end of calculation function, so update all icons

- Problem: Make it easier to test
- Code contains business rules that are not easy to test
  - Every time code changes, test have to:
    - Set up a browser
    - Load a page
    - Click button to add items to card
    - Wait for DOM
    - Scrape value out of DOM
    - Parse string into a number
    - Compare to expected value

- In order to test it easily, separate business rules from DOM updates
- Remove global variables

- Problem: Make it reuseable
  - Don't depend on global variables
  - Don't assume answer goes into the DOM
  - Return the answer from the function
  
- Look at what category each function belongs in
- Functions have inputs and outputs
- Can be explicit or implicit
  - If we eliminate all implicit inputs and ouputs from an action, it becomes a calculation
  - Replace implicit inputs with arguments, then replace the implicit outputs with return values

## Summary

- Functions that are actions will have implicit inputs & outputs
- Calculations have no implicit inputs or outputs by definition
- Shared variables are common implicit inputs and outputs
- Implicit inputs can often be replaced by arguments
- Implicit outputs can often be replace dby return values
