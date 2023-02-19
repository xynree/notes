# Introduction To Events

## Capturing/Bubbling

- An event bubbles from its most deeply nested node to the least
- 3 stages: Capture, Target, Bubble
  - Capture goes from most outer to inner
  - Bubble goes from most inner to outer
  - event.eventPhase says what # of phase event is on



## Event Delegation

- Put one handler on common ancestor instead of handler for multiple elements

ex:
  - event.target.closest(selector) -> returns nearest ancestor that matches selector
  - get selector and do action

```html
<div id="menu">
  <button data-action="save">Save</button>
  <button data-action="load">Load</button>
  <button data-action="search">Search</button>
</div> // HTML with data-action attributes

<script>
  class Menu { // create class to handle Menu
    constructor(elem) {
      this._elem = elem;
      elem.onclick = this.onClick.bind(this); // (*) on click pair Menu to HTML
    }

    save() {
      alert('saving');
    }

    load() {
      alert('loading');
    }

    search() {
      alert('searching');
    }

    onClick(event) {
      let action = event.target.dataset.action; // use this to target multiple dataset handlers
      if (action) {
        this[action]();
      }
    };
  }

  new Menu(menu);
</script>
```

## The 'Behavior' Pattern

1. Custom Attribut to element describes behavior
2. Document-wide handler tracks events, if it happens on attributed element perform action

```html
<input type="button" value="1" data-counter>
One more counter: <input type="button" value="2" data-counter>

<script>
  document.addEventListener('click', function(event) {

    if (event.target.dataset.counter != undefined) { // if the attribute exists...
      event.target.value++;
    }

  });
</script>
```

1. Put handler on container
2. In handler check source event.target
3. If event happens inside right element, use handler.

# Browser Default Actions

- event.preventDefault() or return false for onevent actions.
- all events that flow into each other are canceled e.g. input focus
- passive: true in eventListener helps smooth experience
- event.defaultPrevented() bool to adjust bubbling behavior

# Displatching Custom Events

- New Event object:
  - let event = new Event(type[,options])
    - type: event type
    - options: object with 2 props: bubbles (t/f), candceleable (t/f) - if true, defautl action permitted
    - defaut both false

- After an event object is created, we should “run” it on an element using the call elem.dispatchEvent(event).

- Different UI events to use instead of generic newEvent: MouseEvent, WheelEvent, etc.