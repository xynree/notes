# More Types: Structs, Slices, and Maps

## Pointers

- Pointers hold the memory address of a value
- Type `*T` is a pointer to `T` value. Zero value is `nil`

`var p * int`

- `&` operator generates a pointer to its operand

```go
  i :- 42
  p = &i
```

- `*` denotes pointer's underlying value (dereferencing)

```go
  *p = 42
```
