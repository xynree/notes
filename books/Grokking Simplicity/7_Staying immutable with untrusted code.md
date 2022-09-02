# 7. Staying immutable with untrusted code

## Immutability with legacy code

- defensive copying defends the immutable original
- solution: make two copies
  - When data enters safe zone from untrusted code - make deep copy and throw away mutable original
  - Any data that leaves safe zone should be considered mutable - make a deepy copy and send copy to untrusted code
  
## Implementing defensive copies

- protects originals from modification

## Rules of defensive copying

- Maintains immutability when you have to exchange data with outside code

1. Copy as data leaves your code
    - Make a deep copy of immutable data
    - Pass copy to untrusted code
2. Copy as data enters your code
    - Immeddiately make a deep copy of mutable data passed to code
    - Use data in your code

- Ex: web request API's do defensive copying - sends response back as JSON deep copy
- Defensive copying in Erlang and Elixier: wheneve 2 processes in erlang send messages to each other, data is copies into mailbox of receiver.

## Deep copy in JS is difficult

- Use implementation from lodash - `clonedeep()`

## Conclusion

- Defensive copying is more powerful because it implements immutability all by itself
- More expensive because it needs to ocpy more data
- When used in tandem with copy on write, get benefits of both
