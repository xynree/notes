# 5. Improving the design of actions

## Aligning Design with Business Requirements

### Choosing a better level of abstraction that matches usage

- Get rid of duplication by reusing total calculation functions

### Aligning the function with business requirements

- Review goal: `gets_Free_shipping` function should take a cart and return whether total of cart is >= 20
- Takes `cart` instead of `total, item_price`

- Implicit inputs limit when you can call a function
- Harder to test

### By grouping our calculations, we learn something about layers of meaning

- Principle: Design is about pulling things apart
- Easier to reuse, Easier to maintain, easier to test
- Atomic functions, make more general, change names to reflect that

### Summary

- Eliminate implicit inputs and outputs by replacing them with arguments and return values
- Design is abt pulling things apart
- As we pull things apart, we find functions are easy to organize around concepts
