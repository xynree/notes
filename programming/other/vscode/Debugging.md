# How to Use a Debugger [^1]
[^1]: https://www.youtube.com/watch?v=7qZBwhSlfOo

## Debugger Window


### Variables

- **Locals**: will show all local variables inside the scope

- **Globals**: will show all global variables seen

### Watch

- Can create a new expression to 'watch' that will evaluate when run:
  
  ```py:watch_expression
  nums = generate_numbers(100)
  # Under Watch Tab, shows a slice of num up to 5
  # > nums[:5]:
  ```

### Call Stack

- shows what gets run in what order
  
  > first gets called  
    > then this gets called  
      > then this one  

### Breakpoints

- Shows list of all breakpoints, can be toggled on/off
- Place by clicking "gutter" next to line #

### How to Open

- Go into Debugger Window
  - Click **Run + Debug** + add details to open your debugger

## Control Window

## Continue

> plays program up to next breakpoint

## Step Over

> moves to next line of code
  
## Step Into

> steps into method/function

## Step Out

> moves out of current scope into last area where function was called 

## Pause/Stop

> exits Debugger

-----

# Debugging React with Visual Studio Code [^2]
[^2]: https://www.youtube.com/watch?v=DSxQUlfkISk

- Navigate into Debugger menu
  - Click **Cog Symbol** and choose Browser
    - Creates a Launch.json file. Put in Port #
- Click **red dot** next to line #'s for breakpoints
  - Under Breakpoints you can toggle dots
- Click **Play** button to run until breakpoint
  - If there are errors, can set to automatically stop at Exceptions under **Breakpoints** tab
- Task Bar: 
  - can go **into** or **out of** functions
  - **step over**: highlights next function
