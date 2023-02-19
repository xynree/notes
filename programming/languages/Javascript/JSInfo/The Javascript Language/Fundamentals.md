**Javascript Fundamentals**

#  Unary Form Operators

- `+` in a single value converts into a number. Equivalent to Number(value)
    - `+true` // 1
    - `+""` // 0
- Precedence
    -  Unary operators are higher than binary operators ->  unary pluses work before addition in "+apples + +oranges"


#  Assignment

- Assignment is also an operator and has low priority. Calculations are done first and then = is evaluated.
- = returns a value! All operators return values.
    - `x = value` writes the value into x and then returns it.
- Chained Assignments
    - `a = b = c = 4`;
    - Chained assignments evaluate from `right to left`.
- Operators like * = have same precedence as normal assignment, so they run after most other calculations.

- counter++ vs.  ++counter
    - prefix form returns the new value while the postfix form returns the old value prior to decrementing.
    - if you want to increase value and immediately use result of the operator, use prefix form ++counter;
        - let counter = 0 alert(++counter); //1
    - if you want to incremen but use previous, use postfix form.
        - let counter=0; alert(counter++) // 0
    - works inside expressions as well


# Bitwise Operators

- & ,|, ^, ~, <<, >>, >>>
- Not used very often but sometimes in cryptography


# Comma

- comma is used to evaluate several expressions, dividing with a comma. Each is evaluated but *only the result of last one is returned*.
    - low precedence, use ()
- Why would you need this?
    - you can use to put several actions in one line:
    - `(a = 1, b = 3, c = a * b)`


* with subtraction, negative strings always convert to numbers.


# Comparisons

- strict vs non-strict
- comparisons get converted to numbers when values of diff types are compared.
- null and undefined equal == each other and do not equal any other value.
    - === checks equality with types
        - alert (0 === false ) // false
        - alert (0 == false ) // true
    - Special rules
        - null == undefined // true
        - null == 0 // false (null only equals undef)
        - null >= 0 // true (comparisons convert null to 0)
        - null converts to 0, undefined becomes NaN
        - undefined will return false for everything except null because it gets converted to NaN.


# Conditionals

- Chaining Ternary ? Statements:

    - message = age <3 ? 'hi!': age < 18? 'hello' : age < 100? 'greetings'!: 'what an unusual age!
    - not recommmended to use ternaries to run statements. use it onlyh for returning one value or another depending on condition. if statements for executing code.


# Logical Operators

- 4 logical operators:
    - || (OR) && (AND) ! (NOT) ?? (NULLISH COALESCING)

##  OR ||

If any arguments are true, returns true, otherwise returns false.
If operand is not a boolean, converted to a boolean for evaluation
    - 1 = true, 0 = false

- result = value1 || value2 || value3||
    - evaluates from left to right
    - conver to boolean, if result is true, returns original value of operand
    - if all evaluatied, returns the last operand.
    - Chain of OR || returns the first truthy value or last one if no truthy value found.
        - 1 || 0  // 1
        - null || 1 // 1
        - null || 0 || 1 // 1
        - undef || null || 0 // 0
    - Use to get the first truthy value from a list of variables
    - Short circuit evaluation
        - Used to execute commands only if condition on left is falsy.

##  AND &&
- Returns true if both operands are truthy and false otherwise.
- result = value && value2 && value3
    - evaluates from L -> R
    - converts to bool, if false stops and returns original value of operand
    - if all evaluated, returns last oeprand.
    - Returns first falsy value or last value if none were found.

- AND returns the first falsy value, OR returns the first truthy one
- Precedence: && goes before OR ||
- Sometimes people use && as a shorter way to right if
    - let x=1;
        (x>0) && alert('Greater than zero)

## NOT !

- Converts operand to boolean type 
- Returns the inverse value
- double NOT !! sometimes used for converting values to boolean
- NOT ! is highest precedence, running first beofre && or ||.


# Nullish Coalescing Operator (??)

- a ?? b -> if a is defined, then a. if a isn't defined, then b.
- ?? returns first argument if it's not null/undefined. Otherwise, second one.
- ?? provides a default value for a potentially undefined variable
- let user
    - user ?? "Anonymous" // Anonymous

- Comparison with Or
    - OR|| can be used in the same way BUT
        - || returns first truthy value
        - ?? returns the first defined value
    - || false/0,""/ null/undef are all falsy with ||
    - ?? : only false with null/undef
- Precedence: 1 Less precedence than ||.
- ?? is evaluated before = and ? but after most operations such as +-.
- JS forbids using ?? with && and || operators unless precedence is specified with parantheses.
- x = 1 && 2 ?? 3 // Syntax Error
- x = (1 && 2) ?? 3 // Works


# Loops : While and For

while (conditionistruthy) { code runs}
- each execution is called an iteration
- shorter way to write (i!=0) is while (i)

- condition can be moved below loop using do/while
    - do { code } while (condition)
    - used only when you want body to execute at least once regardless of truthy condition

- for loop
    - any part of for can be skipped:
        - let i=0 ; for (; i<3; i++){}
        - (;i<3;){i++}
- break vs continue
    - break is like return, exits loop
    - continue: stops current iteration and forces loop to start a new one.     - helps decrease nesting

- label: identifier with a colon before loop
    - labelName: for (){}
    - break <labelName> breaks out to the label:

        - outer: for () {
                for (let j) {
                if (!input) break outer}}

# Switch 

- without break, switch will continu with the next case without any checks.
- so you can do case 3: case5: code as the code continues without break
- equality check is always strict


# Function Expressions

- function decaration: function sayHI() {}
- function expression (allows to create a new function in the middle fof an expression): let sayHi = function() {};
- a function is a value, so we can work with it like other valies
    - create, copy, run copy
- callback functions
    - function ask(question, yesfunc, nofunc) { if (confirm(question)) yesfunc() else nofunc()    - with function expressions:  ask("do you agree"?, function() {}, function() {})
        - anonymous

- Expression vs Declaration
    - function expression created when execution reaches it and only useable from that moment
    - function declaration can be called earlier than it is defined (HOISTING)
    - if you need the function in a larger scope, you can declare function and then use it as a function expression later in code.
        - let welcome; if {welcome = function() {}}

- Use function declarations for most things but for conditional declarations expressions can be used.

# Arrow Functions, The Basics

- good for simpole one-line actions : let sayHi = () => alert("hello")
 
# Javascript Specials

- statements need semicolons, but JS will put them at the end of lines
- semicolons not needed after code blocks and loops
- Strict Mode: to enable all modern JS, start scripts with "use strict"
- 8 data types: number, bigint, string, boolean, null, undefined, object, symbol
- typeof returns type except for null ('object') & function "function"
- Interaction: prompt, confirm alert
