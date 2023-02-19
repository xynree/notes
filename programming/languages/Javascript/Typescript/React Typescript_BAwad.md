# React Typescript Tutorial [^1]
[^1]: https://www.youtube.com/watch?v=Z5iWr6Srsj8

- **.tsx** in React, **.ts** in other files

## Props/Components


- **React.FC** = 'Functional Component' Type:

    ```ts:Functional_Component
        export const TextField: React.FC = () => {
            return()
        }
    ```

- Passing a Component Prop Interface

    ```ts:Prop_Interface
        interface Props {
            text: string;
        }
        export const TextField: React.FC<Props> = () => {
            return()
        }
    ```

- Prop Types:

    ```ts:Types

    interface Person {
        firstName:string;
    }


        interface Props {
            text: string;
            ok?: booleon;
            i: numnber;
            fn: (bob: string) => void || number || string;
            obj: {
                f1: string
            };
            person: Person;
        }
    ```

- **control + space** for autocompletion!

---

## Hooks

- **UseState**
  - Usually inferred but can pass in types:
  
  ```ts:useState
  const [count, setCount] = useState< number | null | undefined >(5)

  setCount()
  ```

- **UseRef**
  - *tip*: put ref into ref object and HOVER to find the ref type!

  ```ts:useRef
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div>
        <input ref={inputRef} />
    )
  setCount()
  ```

- **UseReducer**
  - types are placed into the Reducer.

---

## Render Props

```tsx:Counter_RenderProp

interface Props {
    children: ({
        data: count: number,
        setCount: React.Dispach<React.SetStateAction<number>> 
    })
     => JSX.element | null;
    )}

export const Counter: React.FC<Props> = ({children}) => {
    const [count, setCount] = useState(0)

    return <div>{children(count, setCount)</div>}
}
```

```tsx:App
const App: React.FC = () => {

    return (
        <div>
        <Counter>
        {(count, setCount) => (
            <div>
            {count}
            <button onClick { ( ) => setCount(count + 1)}>+ 
            </button>
        )
    )
}