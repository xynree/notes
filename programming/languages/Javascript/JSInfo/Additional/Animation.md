# Animation

## Bezier Curve
- Defined by control points
- Curve order = number of points - 1 (2pt: linear, 3pt: quadratic, 4pt: cubic)
- Curve is always inside the "convex hull" of the control points
- Use De Casteljau's algortihm or a specific math formula to make
- Smooth lines made by moving control points

## CSS-animations

- CSS transitions
```js
.animated {
  transition-property: background-color;
  transition-duration: 3s;
}
```

Properties:
- transition-property: list of properties to animate
- transition-duration: how long animation should take
- transition-timing-function: how animation is distributed along timeline. Bezier curve or steps. `linear, ease, ease-in, ease-out, ease-in-out` common curves.
- transition-delay : delay before animation
- transition: `property duration timing-function delay` handles all 4

- Event transitionend
  - `transitionend` triggers after CSS animation finishes.
  - event.propertyName: property that finished animating
  - event.elapsedTime: seconds in time that the animation took (minus transition-delay)

- Keyframes

- joins simple animations together `@keyframes`

Performance
- Animations that skip 'layout" step of CSS drawing are faster
- `transform` creates smooth transitions because of this. Better performance.

## JS Animations

- using setInterval
  - set change at setInterval with small delays to create animation
- requestAnimationFrame
`requestid = requestAnimationFrame(callback)`: runs calllback function in the closest time browser is ready to animate
`cancelAnimationFrame(requestId) // cancels call`

- Timing Functions

- Power of n 
`function quad(timeFraction) { return Math.pow(timeFraction, 2)}`|

```js
function animate({timing, draw, duration}) {

  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction goes from 0 to 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // calculate the current animation state
    let progress = timing(timeFraction);

    draw(progress); // draw it

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
}
```
Helper animate function to setup most animations
