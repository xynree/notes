# Dom Tree
- Every HTML tag is an object
  document.body -> <body> tag
- DOM represents HTML as a tree structure of tags

- Element nodes: <html> <head> <body>
- Text Nodes
  - contains only a string
  - no children
  - always a leaf of the tree
  - \n and space are text nodes

__Autocorrection__
- Spaces and newlines before <head> are ignored
- Anything placed after </body> is auto moved inside body
- Malformed html will be corrected:
  - top tag always <html>
  - <body> is created by browser if not there
  - will auto close tags if needed
  - Tables will always have a <tbody> or one will be created

__Other Node Types__
- Comments
- 12 node types
  - 4 common ones:
    - document: entry point into DOM
    - element nodes : HTML tags, tree building blocks
    - text nodes
    - comments
  - Others include:
    - CData Section node
    - Attribute Node
    - Document type node
    - and more!

__Interaction with Console__
- Tools
  - Styles: CSS applied to current element by rule
  - Computed: CSS applied to elem by property
  - Event Listeners
  - etc
- `Esc` to bring up console
- Last selected element is available as $0, previous is $1 etc.

# Walking the DOM

- documentElement and body
  - <html> = document.documentElement
  - <body> = document.body * can be null
  - <head> = document.head

- Children: childNodes, firstChild, lastChild
  - child nodes + descendants
  - `firstChild` & `lastChild` give access to first and lastchildren. or can be called with `elem.childNodes[0]` and `elem.childNodes[elemnchildNodes.length - 1]`

- DOM collections
  - childNodes is not an arry but a collection (arraylike)
    - can use for...of
    - array methods don't work
    - readOnly
    - don't use for...in

- Siblings and the parent
    - siblings are nodes that are children of same parents

- Element-only navigation
  - children: element node children
  - firstElementChild, lastElementChild
  - parentElement
  - previousElementSibling, newElementSibiling

- parentNode and parentElement usually return the same thing except for case of document parent.

- More links: Tables
  - tables have extra properties for rows, bodies, foot, etc.

# Searching: getElement, querySelector

- document.getElementById or just id
```html
<div id="elem">
  <div id="elem-content">Element</div>
</div>

<script>
  // elem is a reference to DOM-element with id="elem"
  elem.style.background = 'red';
```
  - supported for compatibility but getElementById is preferred
  - should be unique

- querySelectorAll & querySelector
  - checks all nodes
  - querySelector is querySelectorAll[0]

- matches: checks if elem matches a css selector
- closest: nearest ancestor matching css selector (including itself)

- Live Collecitons
  - getElementsBy* returns a live collection. Auto update when changes
  - querySelectorAll returns a STATIC collection and does not update when live changes occur.

# Node Properties: type, tag, and contents

- There are common methods and properties between different types of nodes
- Root of node hierarchy is EventTarget
  - Node: Base for DOM Nodes
    - Text, Element, Comment
      - Under Element: (Base class for DOM ElementS)
        - HTMLElement, SVGElement
          - Under HTMLElement:
            - HTMLInputElement, HTMLBodyElement, HTMLAnchorElement

- All properties and methods come from inheritance
  - to see DOM node class name - document.body.toString() or document.body.constructor.name
  - instanceof to check inheritance

- console.log(elem) -> elem DOM tree
- console.dir(elem) -> elem as DOM object, explore properties

__nodeType Property__

- elem.nodeType ==1 : element nodes
- elem.nodeType == 3 : text nodes
- elem.nodeType == 9 : document object

__Tag: nodeName/tagName__
- tagName only exists for Element nodes
- nodeName:
  - for elements: the same as tagName
  - for other nodes: string with node type
  - always uppercase

__Inner/OuterHTML__

- innerHTML += does a full rewrite (optimization issues)
- outerHTML: full HTML of the element
  - writing to outerHTML replaces it in the DOM

__nodeValue/data__
- innerHTML for other node types

__textContent__
- all text inside element, minus tags

__hidden property__
- elem.hidden = true is same as style='display:none'

Other properties:
- value, href, id.. etc.

# Attributes and Properties

- Browser parses HTML and generates dDOM objects, most become properties of objects
ex: <body id ="page"> : body.id ="page"

__DOM properties__
- DOM nodes are regular JS OBjects and can be altered in JS.

__HTML Attributes__
- Browser recognizes standard attributes (id, etc) and creates properties. But not for non-standard
- DOM-property is not created for non-standard elements but can be accessed with:
  - elem.hasAttribute(name) , etc.
  - elem.getAttribute('name')
- Special Properties:
  - case insensitive
  - values are always strings
- Attributes are iterable and has all attributes of HTML element as objects with `name` and `value` props.

__Property-attribute synch__
- When standard attr changes, property is auto updated.
- some exceptions: input.value synchs from attribue -> property but not back

__Dom Properties are Typed__
- DOM properties are not always strings (input.checked is bool)
- Sometimes DOM Property is different from HTML Attribute (ex. href)

__Non-standard Attributes__
- Sometimes used to pass data from HTML to JS.
- To avoid conflicts with non-standard JS - `data-*` attributes.
  - Available in the `dataset` prop
  - order.dataset.orderState will refer to attribute data-orderState=''

# Modifying the Document

__Creating an Element__

- document.createElement(nodetype): creates a new element node with given tag
- document.createTextNode(text):
creates a new textnode with given text.

__Insertion__
- node.append, node.prepnd, node.before, node.after, node.replaceWith

- insertAdjacentHTML/Text/Element(where, html):
  - where is relative to elem: beforebegin, afterbegin, beforened,aftereend
  - html: HTML string inserted as HTML

__Node removal__
- node.remove();
- all insertion methods auto remove from the old place.

__Cloning nodes__
- elem. cloneNode(true) -> deep clone
- elem.cloneNode(false) -> shallow clone

__DocumentFragment__
- wrapper to pass lists of nodes
- Can append nodes to it, but when inserted the content is placed instead of "Fragment"
- Rarely used - return array of nodes instead:
  - `ul.append(...getListContent())`

- Old-school insert/remove Methods:
  - apendChild(node)
  - insertBefore
  - replaceChild
  - remove Child
  - document.write
    0- only works while page is loading

# Styles and Classes

- JS Can modify both classes and style properties
- Prefer CSS classes to style

className and classList
- className replaces whole string of classes
- to add/remove a single class: elem.classList
  - classList.add('article')
  - classList.contains('')
  - classList.toggle('')

Element style
- elem.style corresponds to style sttribute
- camelcase used for multiword properties
- browser properties like webkit uses dash for uppercase:
  - -webkit-border-radius: WebkitBorderRadius

Resetting Style Property
- reset properties with setting to empty string; elemstyle.display = '' 
- Full rewrite with style.cssText (like className)

getComputedStyle
- getComputedStyle gets style with respect to all CSS classes

# Element Size and Scrolling

- offsetParent, offsetLeft/Top
  - nearest ancestor that browser uses for coords
- client Top/Left
  - relative coords of inner side from outer side
- scrollWidth/Height
  - like clientW/H but including scrolled out parts
- scrollLeft/scrollTop
  - width/height of hidden, scrolled out part
- don't use getComputedStyle() but instead elemntsize for geometry because of browser differences + scrollbar

# Window Sizes and Scrolling
- `clientWidth/clientHeight`: window w/h (without scrollbar)
- `innerWidth/innerHeight`: includes scrollbar
- width/height of document: 
```js
let scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);

```
- `scrollLeft/scrollTop` have current scroll states
- scroll is also available in `window.pageXOffset/window.pageYOffset` or `scrollX/scrollY`
- changing `ScrollTop/scrollLeft` or `window.scrollBy(x,y)` and `window.scrollTo(pageX,pageY)` will adjust scroll.

- `scrollIntoView(top)` will scroll page to make elem visible. top=true: top of window, false: bottom
- no scroll with: `document.body.style.overflow = "hidden"`

# Coordinates

- 2 coordinate systems:
  1. Relative to Window (clientX, clientY) (position.fixed)
  2. Relative to document: pageX/pageY (position: absolute)

- On scroll:
  - clientX/Y: Window relative coordinate changes
  - pageX/Y: Document-relative coordinate stays the same

- getBoundingClientRect() returns window coordinates of rectangle enclosing the DOM elem
  - has x,y,width/height, top/bottom, left/right

-  elementFromPoint(x,y) returns most nested element at coordinates x,y
  - if coordinates are out of window, returns null.

- Use for Fixed Positioining
  - can use getBoundingClientRect and then CSS Position with top/left/right/bottom
  - how to make postiion stay on scroll?
    - add clientX/Y + window.pageX/YOffset to add the scroll value.

