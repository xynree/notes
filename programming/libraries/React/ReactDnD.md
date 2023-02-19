# React Drag and Drop

## React Drag & Drop Tutorial - React-DnD Made Simple[^1]
[^1]: https://www.youtube.com/watch?v=4bzJrEETW4w&t=1130s

1.  Wrap highest order component with DndProvider

```js:Wrapper

import { DnDProvider } from 'react-dnd'
import { HTML5Backend } from 'react-html5-backend'

function App() {
    return (
        <DnDProvider backend={HTML5Backend}>
            <div className='App'></div>
        </DnDProvider>
    )
}
export default App
```

2. Define what will be **dragged** and what the **drop area** is.
   - Every object that needs to be dragged needs to use a **separate instance** of the UseDrag Hook.
     - **Map** through a list with a **separate component** implementing **useDrag** Hook.

```jsx:DragDrop
// array of objects

const PictureList = [{id:0, url: 'http://'}]

    return (

        <div className='Pictures'>
            {Pictures.map({id, url} =>
            <Picture url={url} id={id} />)}
        </div>
        <div className='Board'></div>
    )
```

```jsx:Picture
import { useDrag } from 'react-dnd'

    function Picture ({id, url}) {

        // Use Drag Hook: isDragging returns a boolean T/F. useDrag is a function that returns an object.

        const [{isDragging}, drag] = useDrag(() => ({

             // requires a type (can be defined in sep document)
            type: 'image',

            // can pass in info through properties here
            item: {id:id, url:url}

            // technically optional - isDragging returns T/F
            collect: (monitor) => ({
                isDragging: !! monitor.isDragging(), 
            })
        }))

        return (
            <img
                ref: {drag}
                src={url}
                style=({border: isDragging ? '5px solid pink': ''})> />
        )
    }
```

3. Setting up UseDrop Hook

```jsx:DragDrop
import {useDrop} from 'react-dnd'

const [board, setBoard] = useState([])

const [{isOver}, drop] = useDrop(() => {

    // which types are accepted?
    accept: 'image',
    // function to play on drop
    drop: (item) => addImageToBoard(item.id),
    // can edit depending on whether it is over droppable element
    collect: (monitor) => ({
        isOver: !!monitor.isOver(),
    })
})

// adds image to list in drop box 
const addImagetoBoard = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id)
    setBoard((board) => [...board, pictureList[0]])
    }

return <div className='Board'>
    {board.map({id, url} =>
    <Board url={url} id={id} ref={drop}/>)}
</div>
```
