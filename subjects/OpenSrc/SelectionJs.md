# How Selection.JS Works

###  Selection.JS is an IIFE that is called when the script is loaded with a `new` constructor function.

- Even though `selection.js` is not a class, `new` is used here to bind a new `this` object to the function and run the function on call.

`Selection.JS` IIFE calls private function `_selection`, which returns two functions used to 1. configure the module and 2. start the module.

1. If config is needed, it is passed as an argument options object.

2. `init` gets called to start/attach the module. This can be appended after `config` call or run separately
  - selection.config({...}).init()
  - selection.config();
    selection.init();

---

## Config Object

- Expects an object with config properties. If not given it will default to the defaults set in `menu` inside `_selection.js`
----

## Init() Call

1. Calls `IconStyle()` which creates a node appended to body with icon color.
2. Calls `attachEvents()`
  - sets an event listener to window for `mouseTimeOut` every 10 ms
    - checks 2 booleans (if tooltip is available and if selection has a string to change position of tooltip) to run `drawTooltip` or `moveTooltip`

- `drawTooltip`: creates the tooltip element and attaches `selection` class to it for bool above to check.  `appendIcons` attaches icons and returns an object with `icons` property and `length` inside Tooltip.
------
## DrawTooltip

- creates a `div` with style + position set by `setTooltipPosition()` and then attaches `appendIcons()` div into itself.

### appendIcons

- creates a `div` and then attaches icons to it. returns the `div`
- each item has a `call` method that creates a button with `Button` function class. `

### popupwindow

- A function called for some `Button` elements. Opens a popup window with `url` property.

---

### MoveTooltip

- adjusts tooltip position

---
## Button constructor

- normal function used in a constructor context with `new`
- `Button` creates a div with a click event listener and animation.
- Each `Button` element has its own function passed as prop that will run when button is clicked. Eg. copy, open in twitter, translate, speak, etc.

-----

## Takeaways from Code Deconstruction:

### System Design

1. By using `return`, config and other options can be exposed to the end user.
2. Splitting up *creating* objects and *moving/adjusting/appending* them into different functions will help cleanly separate code.
3. IIFE used to encapsulate variable names, making modules extensible.


### Javascript
1. IIFE's can be used to invoke a function on start with `new`.
2. Any function can be used as a constructor with `new` for reuseability.
3. Double bang `!!` for instant booleanity
4. Every function in this library returns something, and other functions use those returns to build on their own objects to be returned - Keeps responsibilities encapsulated.
