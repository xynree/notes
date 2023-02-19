# 16 - Fearless Concurrency

- Concurrent programming: Different parts of program execute independently
- Parallel programming: Different parts of program execute at the same time
- Ownership and type checking provides compile time errors that will prevent being shipped

## 16.1 - Using Threads to Run Code Simultaneously

- In most OS's, program code is run in a `process`, and OS manages mutiple process at once
- Within a program, you can also have independent simultaneous running parts
- Splitting computation into multiple threads can add complexity
  - No inherent guarantee about order in which parts of code on different threads will run
  - Can lead to race conditions
  - Can lead to Deadlocks
  - Can lead to bugs that happen only in certain situations
- Rust standard lib uses a 1:1 model fo thread implementation: Program uses one operating system thread per on elanguage thread

Creating a New Thread with `spawn`

- To create a new thread, call `thread::spawn` and pass it a closure with code to run in a new thread

```rust
fn main(){
  thread::spawn(|| {
    for i in 1..10 {
      println!("hi {i} from spawned thread");
      thread::sleep(Duration::from_millis(1));
    }
  });

  for i in 1.. 5 {
    println!("hi num {i} from main thread");
    thread::sleep(Duration::from_millis(1))
  }
}
```

- When main thread of a rust program completes, all spawned threads are shut down
  - Even if they haven't finished running
  - `thread::sleep` forces a thread to stop execution for a short duration, allowing a different thread to run

Waiting for All Threads to Finish Using `join` Handles

- We can't guarantee that spawned thread will get to run because it stops prematurely and no order on which they run
- We can save the return value of `thread::spawn` in a variable
  - `JoinHandle` type: Owned value that will wait for its thread to finish when we call the `join` method on it

```rust
use std::thread;
use std::time::Duration;

fn main() {
    let handle = thread::spawn(|| {
        for i in 1..10 {
            println!("hi number {} from the spawned thread!", i);
            thread::sleep(Duration::from_millis(1));
        }
    });

    for i in 1..5 {
        println!("hi number {} from the main thread!", i);
        thread::sleep(Duration::from_millis(1));
    }

    handle.join().unwrap();
}
```

- Calling `join` on the handle blocks the thread running until the handle thread terminates
  - Blocking: Thread is prevented from performing work or exiting
- You can adjust how the threads are blocked by moving `join` around

Using `move` Closures with Threads

- We can use the `move` closure passed to `thread::spawn` because lcosure will take ownership of vlaues from the environment
  - this transfers ownership from one thread to another
- Adding `move` keyword forces the closure to take ownership of its values rather than borrowing

## 16.2 - Using Message Passing to Transfer Data Between Threads

- Message passing: Threads communicate by sending each other messages containing data
- Standard library has implementation of `channels`
  - Data is sent from one thread to another
- One part of code calls methods on transmitter with data
- Another part checks the receiving end for messages arriving
- Channel is closed if either transmitter or receiver is dropped

```rust
fn main() {
  let (tx,rx) = mpsc::channel();
}

thread::spawn(move || {
  let val = String::from("hi");
  tx.send(val).unwrap()
})

let received = rx.recv().unwrap()
```

- `mpsc::channel`: mpsc = multiple producer, single consumer
  - Channel can have multiple sending ends that produce values but only one receiving end that consumes the values
- `mpsc::channel` returns a tuple of the (transmitter, receiver)
- We use `move` in the closure to move `tx` so that the spawn thread owns it. Then call `send` method to return a `Result`
- then use the receiver `rx.recv()` to get the message

Channels and Ownership Transference

- When things are send through a thread, ownership rules prevent the value from being used again, sparing error sthat may happen

Sending Multiple Values and Seeing that Receiver Waiting

- we can tread `rx` as an iterater: once the channel closes, iteration will end

```rust
use std::thread;
use std::time::Duration;

fn main() {
    let (tx, rx) = mpsc::channel();

    thread::spawn(move || {
        let vals = vec![
            String::from("hi"),
            String::from("from"),
            String::from("the"),
            String::from("thread"),
        ];

        for val in vals {
            tx.send(val).unwrap();
            thread::sleep(Duration::from_secs(1));
        }
    });

    for received in rx {
        println!("Got: {}", received);
    }
}
```

Creating Multiple Producers by Cloning the Transmitter

- We can clone the transmitter to send things on a new thread
- This way, multiple users can send to a receiver

## 16.3 - Shared-State Concurrency

- Another concurrency method: Multiple threads access the same shared data
- Shared memory concurrency is like multiple ownership
  - There different owners need managing

Using Mutexes to Allow Access to Data from One Thread at a Time

- Mutex: mutual exclusion
  - A mutex only allows one thread to access data at any given time
- To access data inside a mutex, a thread must first signal that it wants access by asking to acquire the mutex's `lock`
  - `Lock`: Data structure that is part of mutex keeping track of who has exclusive access to data currently
- The mutex "guards" the data it holds via the locking system
- 2 rules:
  - Msut attempt to acquire lock before using data
  - When you're done with data that mutex guards, unlock the data so other threads can acquire the lock

The API of `Mutex<T>`

- Create a `Mutex<T>::new`
- To access data inside mutex, use `lock` method to acquire the lock
  - Will block current thread
  - Call to `lock` would fail if anothe thread holding lock panicked
    - `unwrap` and have thread panic if that happens
  - After acquiring lock, treat return value `num` as a mutable rerence to data inside
    - Type of mutex is `Mutex<i32>`, forcing us to call `lock` to be able to use the `i32` value
  - Calling `lock` returns a smart pointer `MutexGuard` wrapped in `LockResult`
  - Smart pointer's `Drop` implementation automatically releases lock when a `MutexGuard` goes out of scope

Sharing a `Mutex<T>` Betwween Multiple Threads

- Arc<T> is safe to use in concurrent situations: atomically reference counted type
- Thread safety has a performance penalty
- `Arc<T>` and `Rc<T>` have the same api
- `std::sync::atomic` module types provide safe concurrent, atomic access to primitive types

Similarities between `RefCell<T> / Rc<T>` and `Mutex<T>/Arc<T>`

- `Mutex<T>` provides interior mutability, allowing us to mutate contents inside an `Arc<T>`
- Mutex comes with risk of creating deadlocks
  - Operation needs to lock 2 resources and two threads have acquired one of the locks, causing an infinite wait

## 16.4 Extensible Concurrency with the `Sync` and `Send` Traits

- Rust lang has very few concurrency features
- Two concepts are embedded in the language: `std::marker` traists `Sync` and `Send`

Allowing Transference of Ownership between Threads with Send

- `Send` trait indicates that ownership of values of the type implementing `Send` can be transferred between threads
  - Almost every Rust type has `Send` but exceptions, including `Rc<T>`
  - Any type composed entiredly of `Send` types is automatically marked `Send` as well
  - All primitive types are `Send` aside from raw pointers

Allowing Access From Multiple threads with `Sync`

- `Sync` indicates that it is safe for the type implementing `Sycn` to be referenced from multiple threads
- Primitve types are `Sync`, and types composed of `Syncs` are also `Sync`
- `Rc<T>`, `RefCell<T> and Cell<T>` types are not `Sync`
- Mutex is `Sync` and can be used to share access with multliple threads

Implementing `Send` and `Sync` Manually is Unsafe

- Manually implementing traits involves implementing unsfae Rust code
- building new concurrent types not made up of Send and Sync parts requires careful thought
