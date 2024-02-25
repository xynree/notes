# Code smells: Bloaters

- Code methods and classes that are too big and hard to work with
- Crop up over time as the program evolves

## Long Method

- Too many lines of code
- > 10 lines should make you start asking questions
- Reason for the problem: Easier to write code that read it, things get added but not taken out
- Treatment: If there is something in a method that needs a comment, take the code and put it in a new method. Use a descriptive name for the method instead of injecting comments
- Solutions:
- To reduce length: Extract Method (move code to a new method)
- Replace Temp with Query :Move entire expression to a separate method and return the result for it instead of using a variable to store the result of an expression
- Try moving entire method to a separate object: Transform method to a separate class so that local variables become fields of the class
  - Allows to isolate problems at the class level
- Conditional operators and loops are a clue that it can be moved to a separate method. Decompose Conditional: Decompose the parts of the conditional to separate methods: condition | then | else should all be separate.
