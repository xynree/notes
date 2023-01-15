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
