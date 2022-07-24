# TypeScript Basics[^1]
[^1]:https://www.youtube.com/watch?v=se72XMlG1Ro

## Compiling & Variables

- Use .ts file. Some examples of ts code:

```ts:main.ts
    const bob= 'hey bob';
    const a: number = 5.3;
    const obj: {x: number; y: number } = {
        x: 7,
        y=9
    }
```

- this compiles to JS code:

  ```sh:compile
      tsc main.ts
  ```

- types can be inferred or stated explicity (below)

---

## Interfaces


  ```ts:interface
  interface MyObj {
      x: number;
      y: number;
  }

  const obj: MyObj = {
      x: 5,
      y:7
  }
  ```

  - Optional props indicated with a **?**:

    ```ts:optional
        interface MyObj {
            x: number;
            y: number;
            z?: number;
        }
    ```

---

## Functions

- specify prop types for functions:

    ```ts:required
    const add = (x: number, y: number) => x + y;
    ```

  - if inferred no need to add types - but you can:

    ```ts:optional
    const add: (x: number, y: number) => number = (x: numnber, y: number) => x + y;
    ```

- or create a **type** for reusability:
  
  ```ts:type
  type AddFunc = (x: number, y: number) => number;

  const add: AddFunc = (x: number, y: number) => x + y;
  ```

- passing in **objects**:

  ```ts:prop_object
  const add2 = (nums: {a: number; b: number }) => nums.a + nums.b;
  ```

  - destructured example:

    ```ts:prop_object_destructured
    const add2 = ({a, b}: {a: number, b: number}) => a + b;
    ```

---

## Unions

- If type changes over time, use | to choose multiple available types:

  ```ts:pipe
    let maybeNum: number | string | boolean |AddFunc = 5;

    maybeNum = 'hello!';
    maybeNum = AddFunc;
    ```

- types can be concatenated:

  ```ts:concatenation
  interface Dog {
    bark: string;
  }

  interface Cat {
  bark: string;
  }

  type DogCat = Dog & Cat;

  const dogCat: DogCat = {
    bark: 'bark!',
    purr: 'purr!'
  }
  ```

- you might use this with 'if' statements:

  ```ts:if_typeof
  if (typeof dogCat === 'string') {
    console.log('you are string')
  }
  ```

---

## Casting

- **as** allows type casting:
- any = any type

  ```ts:casting
  add(dogCat as number, dogCat as any)
  ```

---
