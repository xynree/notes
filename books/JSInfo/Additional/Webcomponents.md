# Web Components

- A set of standards to make self-contained components (custom HTML-elements with their own properties/methods, encapsulated DOM and styles)

__Custom Elements__

- Custom HTML elements can be created. 2 kinds:
  1. Autonomous custom elements (extends `HTMLElement` class)
  2. Customized built-in elements (extends built in elements `HTMLButtonElement`)

- Special methods controls the HTML element class (all optional):

```js
class MyElement extends HTMLElement{
  construcotr(){
    super()
  }
 connectedCallback() {
    // browser calls this method when the element is added to the document
    // (can be called many times if an element is repeatedly added/removed)
  }

  disconnectedCallback() {
    // browser calls this method when the element is removed from the document
    // (can be called many times if an element is repeatedly added/removed)
  }

  static get observedAttributes() {
    return [/* array of attribute names to monitor for changes */];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // called when one of attributes listed above is modified
  }

  adoptedCallback() {
    // called when the element is moved to a new document
    // (happens in document.adoptNode, very rarely used)
  }
  // there can be other element methods and properties
}
```
- then define element with `customElements.define("my-element", MyElement)`

__Customized Builtin elements__

1. Extend `HTMLButtonElement`
`class HelloButton extends HTMLButton Element{...}`
2. Provide third argument to `customElements.define`, specifying tag:
`customElements.define('hello-button', HelloButton, {extends: 'button'})`
3. Add is="nameofcustom" to use on element
`<button is="hello-button">...</button>`


# Shadow DOM
- Allows component to have its own "shadow" DOM tree that can't be accessed from main document.
- `pseudo` element
  - historical attribute that is used to style subelements. eg:
  - one example of an internal DOM structure before shadow DOM was standardized

```css
<input>
<div pseudo="-webkit-scrollbar">
</input>
...
input::-webkit-scrollbar {
  ...
}
```

__Shadow Tree__
- 2 types of DOM stubtrees:
  1. Light tree: regular DOM subtree made of HTML children
  2. Shadow tree: hidden DOM subtree
- If an element has both, browser renders only the shadow tree

- `elem.attachShadow({mode:...})` creates a shadow tree
- Only 1 shadow root per element

- Some elements can't host shadow tree (`<img>`)
- `mode` sets encapsulation level. 'open': available as `elem.shadowRoot`. 'closed' : `elem.shadowRoot` is set to `null` and can only be accessed by referenced returned by `attachShadow`
- Browser-native shadow trees are closed.

__Encapsulation__
1. Shadow DOM elems are not visible to `querySelector`. id's are unique only within shadow tree.
2. Shadow DOM has own stylesheets. Outer DOM styles do not get applied

# Template Element

`<template>` elemnt stores HTML markup templates. Browser uses to check for syntax validity.
- Content: any valid HTML. DOM will not 'fix' these elemnts
- Styles/scripts can also be added to template, but only becomes live when inserted into document

__Inserting template__
- template content available in `content` property as a `DocumentFragment`
- can be accessed inside JS , cloned and used to reuse in a components

# Slots, Composition

- Slots allow to show elements from light dom into places of shadow DOM
- Named Slots:`<slot name="x">./..</slot>` gets light children with slot="x"
- Default slot: First `slot` without a name gets unslotted light children
- Contents of slot element are used as default
- Composition: Rendering slotted elems inside their slots ~ Flattened DOM
- access slots using methods: slot.assignedNodes(), node.assignedSlot
- track slot contents with `slotchange` 

# Shadow DOM syling

- `:host` selects shadow host (elem containing shadow key)
- shadow host resides in light dom, so affected by document CSS rules. document style takes precendence over :host sty les
- `:host[selector]`: affects shadow host only if it has `selector`attribute
- custom CSS properties can be used to style fileds

# Shadow DOM and events 

- shadow tree encapsulates internal implementation details of a component
- scripts in main document do not "know" about internals - browser retargets event instead
- Events in shadow DOM have host element as target
  - event handler inside shadow DOM gets correct target (ie. button inside shadow host)
  - document event handlers will see event coming from shadow host
- Retargetting does not occur on slot elements

__Bubbling, event.composedPath()__
- flattened DOM used in bubbling
- `event.composedPath()` gets an array in order of the full path of element with all shadow elements.
- Most elements bubble but some don't: `mouseenter, mouseleave, load, unload, abort, error, select, slotchange`
- For custom events, `bubbles` and `composed` props need to be set to `true` to bubble out of component