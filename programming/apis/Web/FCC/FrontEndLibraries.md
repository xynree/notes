# JQuery
```js
<script>
  $(document).ready(function() {

  });
</script>

```
loads jQuery on document load.

- Targeting by Class/Id: $(".class").addClass(''), $("#id").addClass('') 
- Targeting with Selectors: $("button").addClass(')

- remove classA: $('').removeClass() vs add class .addClass('')
- adjust HTML: $("h3").html("<em>jQuery Playground</em>");
- remove element: $("h3").remove() 

- target parent, css: `$("#left-well").parent().css("background-color", "blue")`
- appending: `$("#target4").appendTo("#left-well");`
- specific elements: `$(".target:odd").addClass("animated shake");`
`$(".target:nth-child(3)").addClass("animated bounce");`


# SASS

- Store variables with SASS with $varname
- CSS rules can be nested inside each other to target children elems
- Mixin: group of reuseable CSS elements that take variables
```css:mixin
@mixin box-shadow($x, $y, $blur, $c){  
  box-shadow: $x $y $blur $c;
}
```
- @if and @else, @elseif can be used inside @mixin to change css styles
```css:if/else
@mixin make-bold($bool) {
  @if $bool == true {
    font-weight: bold;
  }
}
```
- @each and @for to map over items in a list 
```css:@each/@for
$colors: (color1: blue, color2: red, color3: green);

@each $key, $color in $colors {
  .#{$color}-text {color: $color;}
}

@for $i from 1 through 12 {
  .col-#{$i} { width: 100%/12 * $i; }
}
```
- @while to make while loops (increment and adjust varables until @while becomes false)
```css:@while
$x: 1;
@while $x < 13 {
  .col-#{$x} { width: 100%/12 * $x;}
  $x: $x + 1;
}
```

- @extend CSS styles
- CSS can be imported with partials @import '_syntax.css'
- 



# React (FCC)

ReactDOM.render(component, nodetoAppendTo) // syntax

```js:BasicSyntax

class Component extends React.Component{
  constructor(props) {
    super(props)
  }
  render(){
    return(
      <div></div>
    )
  }
}
```

- Pass props down into "constructor" element

`Component.defaultProps`: set def props 
`Component.defaultProps = {item: 'defaultvalue'}`

`Component.PropTypes`: set prop types and requirement 
`Component.PropTypes = {item: PropTypes.string.isRequired}`

- State can be stored in constructor with `this.state ={}`
- accessed later this `this.state.name`

- setState method updates state
- this.setState({name: 'key'})

- must use `this` to bind methods `(this.handleClick = this.handleClick.bind(this))`

- Keep props at top level and pass them down with `this.props.nameofprop`

## Lifecycle Methods: Allow performance of actions at specific points of lifecycle

- `componentWillMount()`
  - called before render() method when component is being mounted to DOM
- `componentDidMount()`
  - called after component is mounted to DOM
  - API calls, calls to server
  - calls to setState() here trigger rerendering
  - attach event listeners (onClick) or .addEventListener
- shouldComponentUpdate()
  - takes nextProps and nextState as parameters. Declares specifically if componenet should update or not
  - can use to compare props to check when to update
  - compare this.props to nextProps and return true or false if need to update.
- componentDidUpdate()
- componentWillUnmount()

- use if/elses in render statement to render different views
- Can use && for more concise conditional

- renderToString() method
  - renders React component on the server
  - `ReactDOMServer.renderToString(<App />)`

# Redux

- Redux Store
  - `Redux.createStore()` takes a reducer function that state -> state
  - `store.getState()` to get state
   
- Redux Action
  - State updates triggered by actions
  - Store receives actions and updates state accordingly
  - must have a `type` property that specificies type of action
  - `const action = {type: 'LOGIN'}`
  - `actionCreator` returns an `action`.
  - `store.dispatch(actionCreator / action)` -> dispatch actions of type specified by value passed in
   
- Handle an Action in the Store
  - `reducer` functions responsible for state mods that take place in response to actions
  - `reducer` takes `state` and `action` as args and returns new `state` : pure function
  - state is read-only
  - reducer returns a new copy of state instead of modifying state directly.
  ```js:reducer_args
  const reducer = (defaultState, action) => (newState)
  ```
   
- Use Switch Case
  - You can use switch case in the reducer funciton to switch between different action types
   
- Use const for action types
  - set action types as const and use them for variables so that they are immutable
    
- Register a Store Listener
  - method on Redux store obj: `store.subscribe()`
    - Allow to add listener functions
    - Called when action is dispatched in store
  - store.subscribe(listenerCallback)

- Combine Multiple Reducers
  - All app state is held in a single state object in a store
  - Reducer Composition:
    - Define multiple reduces for different pcs of state
    - Compose into 1 root reducer
    - Root is passed into `createStore()` method.
    - `combineReducers()` method - accepts arg that pairs keys to reducer functions
    ```js
    const rootReducer = Redux.combineReducers({
    auth: authenticationReducer,
    notes: notesReducer
    });
    ```

- Sent Action Data to the Store
  - Can send info other than `type`
  - `{type: action, text: 'mytext'}`
  - state updates using text data, depending on action type

- Middleware Async Functions
  - Redux Thunk
  - Pass as argument to Redux.applyMiddleware()
  - Then pass as second param to createStore()
  - action creator now returns function with `dispatch`
  - use `dispatch(functionhere)` to run middleware actions asynchronously.

- Summary:

- Redux store created with `Redux.createStore()`
- Pass a reducer object to your store to handle actions.
- Reducer syntax: 
```js:Reducer
const reducer=(state=defaultState, action)=> {
  (returns new state)
}
```
- Action objects are dispatched to reducer to pass information. These must have a `type` prop often held in constants.
```js:ActionObj
const MYCONSTANT = 'MYCONSTANT'
const action = () => {type: MYCONSTANT, otherdata: data}
```
- Reducers commonly use switch cases to handle different action types.
- 

-----

# Redux + React

- Pass a Redux.Provider component that wraps App component to provide state to the project.

```js
<Provider store={store}>
  <App/>
</Provider>
```

- `mapStateTopProps()` and `mapDispatchToProps` declares what pieces of state to access and which action creators to dispatch
- Redux `connect` attaches them to components.
- this is using store.subscribe() to implement `mapStateToProps()`
- `mapStateToProps` places state into specific prop elements
```js
mapStateToProps = (state) => {
return {
  message: state
}
}
```
- `mapDispatchToProps`  returns an object mapping dispatch actions to property names. Each prop returns a function that calls disaptch with an action creator.
```js
mapDispatchToProps = (dispatch) => {
return {
  submitNewMessage: (message) => dispatch(addMessage(message))
}
}
```

- Redux `connect` -> takes mapStateToProps and mapDispatchToProps as props
`connect(mapStateToProps, mapDispatchToProps)(MyComponent)`

- State and dispatch are now passed down from props to the app.

```js
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './redux/reducers'
import App from './components/App'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
```