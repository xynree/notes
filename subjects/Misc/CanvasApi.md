# Canvas API


# Basic Use

- get a DOM <canvas> element
- get context to element with getContext()
- draw with ctx interface.

# HTML Canvas Element

- Properties:
    - width, height
- Methods:
    - captureStream() -> returns real time video
    - getContext() -> lets you draw
    - toDataURL() -> returns image
    - toBlob() -> creats blob object

# CanvasRenderingContext2d 

- provides context with methods for drawing elements:

- to get, call getContext() on a canvas element.

```js
<canvas id='this'></canvas>

const canvas = document.getElementById(''this')
const ctx = canvas.getContext('2d')
```

- Like p5js, use to draw elements using methods like strokeRect, fillRect, lineTo, etc.

- Methods

    - drawArc for ellipses
    - save() to save stack and restore() to call it
    - 


