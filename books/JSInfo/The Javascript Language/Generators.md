# Generators

- Generators return multiple values on demand

Generator Functions:

function* generate(){
yield 1
yeld2
return 3;
}

- when generattor is called, doesn't run its code. Instead returns a generator object

Main method is next(). When called, it runs execution under nearest yield statement. Then function pauses and yielded value returned to code.
    - next()-> value: the yielded value, done: true if finished, else false
    - are iterable but do not return the last value.
    - can also be used with spread syntax
- complements iterators.

- Instead of joining generator function results, use yield* syntax to "embed" generators into another.


- you can pass results back and forth to generator with .next()
- generator.throw(err) 

# Async Iteration and Generators

- Allows iteration over asynchronous, ondemand data.

- Async iterables

1. use Symbol.asyncIterator
- next() returns a promise
- use async next()
- for await (let item of iterable)

- async generators

async function* generateSequence(start, end) {

  for (let i = start; i <= end; i++) {

    // Wow, can use await!
    await new Promise(resolve => setTimeout(resolve, 1000));

    yield i;
  }

}

(async () => {

  let generator = generateSequence(1, 5);
  for await (let value of generator) {
    alert(value); // 1, then 2, then 3, then 4, then 5 (with delay between)
  }

  - async generators with .next() returns promises

})();
