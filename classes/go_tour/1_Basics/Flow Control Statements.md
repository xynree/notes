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

## Switch

- Go only runs selected case, not all cases that follow (`break` is provided automatically)
- evaluated from top to bottom, stopping when a case succeeds. So only one case will resolve at any time.
- Switch with no condition is the same as `switch true`

## Defer

- `defer` waits to execute function until surrounding function returns
- `defer` is pushed onto a stack. When they are called, they are run in LIFO order
