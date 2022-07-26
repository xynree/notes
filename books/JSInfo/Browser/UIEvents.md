# UI Events

# Mouse Events

- Types:
  - mousedown/mouseup
  - mouseover/mouseout
  - mousemove
  - click
  - dblclick
  - contextmenu
- Events order
  - action may trigger multiple events
    - mousedown -> mouseup -> click
- Mouse Button
  - click evens have `button` prop
    - possible events: 0-4 (left,mid,right,x1,x2)
  - Modifiers:
    - props for shiftKey, altKey, ctrlKey, metaKey are true if key pressed
  - Coordinates: clientX/Y, pageX/Y
  - onmousedown = 'return false' will prevent selection
  - oncopy='return false' will prevent copy/pasting

# Moving the mouse: mouseover/out, mouseenter/leave

__mouseover/mouseout, relatedTarget__
  - mouseover ofccurs when mouse pointer comes over an element,
  - mouseout when it leaves
  - they have prop `relatedTarget`
  - when one mouse leaves elem for another, one becomes target, other `relatedTarget`
  - (mouseover) relatedTarget ----> target(current mouse)
  - (mouseout) relatedTarget(currentMouse) -----> target
  - can also be null.
- Some DOM elements may be skipped or Jumped -> relatedTarget is NULL
  - if mouseover triggered, must be mouseout.
- Mouseout when leaving for a child
  - mouseout triggers when pointer moves from element to its descendant
  - Mouse cursor can only be over ONE element at a time (most nested)
  - mouseover bubbles out

__mouseenter, mouseleave__

- Trigger when mouse pointer enters/leaves elem
  - Transitions from descents do not count
  - Events do not bubble
- do not work with event delegation

# Drag n Drop with mouse events

1.  mousedown: prepare element for moving
2. mousemove move it by changing left/top w/ position: absolute
3. mouseup : actions to finish dragndrop

- elem.ondragstart = () => false to prevent browser behavior
- use listener on document not element to track mousemove.
- adjusting so initial shift relative to cpointer is always correct: 
```js
// onmousedown
let shiftX = event.clientX - ball.getBoundingClientRect().left;
let shiftY = event.clientY - ball.getBoundingClientRect().top;
// onmousemove
// ball has position:absolute
ball.style.left = event.pageX - shiftX + 'px';
ball.style.top = event.pageY - shiftY + 'px';
```

- Droppables
  - How to get most nested droppable objects?
    - document.elementFromPoint(clientx,clientY) -> most nested element

# Pointer Events

- use instead of mouse or touch events - able to be used for phones and etc.
- pointerdown
- pointerup
- all correspond

- Pointer event properties
- pointerId: UUID of pointer
- pointerType: pointer device type
- isPrimary: true for first finger in multi touch
- others for area/pressure:
  - width, height, pressure, tangentialPRessure, tiltX, tiltY, twist

- Multitouch
  - pointerID + isPrimary handles multitouch

- pointercancel
  - pointing aborted (tablet rotated, table tturned off, etc)
  - can mess up bc of browser's native drag and drop
  - prevent default browser action to stop pointercancel (ondragstart false)

- setPointerCapture
  - event handlers bound to one object 
  - makes event listeners not run when pointer strays to a different area

# Keyboard: keydown and keyup

- keydown: key pressed
- keyup: key released
- key property of event gets character - code gets physical key code
  - event.key: z , event.code: KeyZ
- event.code wil map to location on keyboard while event.key matches to character
- repeat: event.repeat (bool)
- preventing default on keydown will stop most default key actions

# Scrolling

- `scroll` event reactss to page or elem scrolling
- prevent scrolling use css overflow