# Flow Control Statements: For, if, else, switch and defer

## For

- `go` only has one loop method: `for` loop
- Three componenets separated by semicolons: init(executed before first iteration); condition(evaluated before every iteration); post(executed at the end of every iteration)
- init and post statements are optional

## While

- if you drop semicolons in for loop, it becomes the while loop. just use `for`
- Omitting loop condition will make `for {}` run forever.

## If

- similar to js, but no parantheses needed
- `if` can start with a short statement to execute before condition
- variables declared are only in scope until end of `if`
