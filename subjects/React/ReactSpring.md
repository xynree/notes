# React- Spring

1) useSpring



```js

    // In this example, useMeasure returns the {width} of an HTML element. use {...bind} to spread the useMeasure additions to your HTML element


const [active, toggle] = useState(false)
const [bind, {width}] = useMeasure()


const props = useSpring({
from: {width:0},
to: {width}})

return(

    // use animated.div to bind the html element to your useSpring hook.

<div {...bind} class='main' onClick= {() => toggle(!active)}>
    <animated.div class="fill" style={{width: props.width}} />

```

- Interpolate method gets the value of widht:
    {props.width.interpolate(x -> )

2) useTransition

```js

const transisitons = useTransition(slides[index], item => item.id, {
from: {opacity: 0, transform: scale(1.1)'},
enter:{opacity: 0, transform: scale(1.1)'}
leave: {opacity: 0, transform: scale(1.1)'}}

return <animated.div key={key} class='bg' style={{
backgroundImage: `url({item.url}`,
...props
}}}
/>
```



