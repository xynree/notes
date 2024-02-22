# Chain of Responsibility

## Intent

- A behavioral design pattern that lets you pass requests along a chain of handler
- Each handler on the chain decides either to process it or to pass it to the next handler in the chain.

## Problem

- Imagine an online ordering system that needs restricted access to creating orders
  - Users with admin permissions have full access to all orders
- These checks need to be performed sequentially.
- Over time, you implement more sequential checks.
- Over time the system becomes hard to comprehend and maintain.

## Solution

- Solution relies on transofrming behaviors into stand-alone objects "handlers"
- Each check should be extracted to its own class with a single method that performs the check
- Request + Data passed to this method as an argument.
- Link the handlers in a chain - each linked handler has a field for storing a reference to the next handler in the chain. Each handler passes the request further along the chian.
- Any handler can decide not to pass the request further down the chain and stop processing.
- Or - On receiving a request, handler decides whether it can process it, if not it stops.
- Example: DOM tree is like a chain of handlers and events bubble up from the components.
- Important: All handlers should implement the same interface. Each handler should only care about the following's `execute` method.

## Real World Analogy

- Answering machines pass down your call from the robot to the directory and then finally to a real person.

## Structure

![alt text![picture 0](https://s2.loli.net/2024/02/22/eNJRMpXD91LlTVs.png)  
](image.png)

- `Handler` declares the base interface. It usually has a single method for handling requests, but also may have another for setting the next handler in the chain.
- `BaseHandler`: Boilerplate code common to all handler classes
- `ConcreteHandlers`: Actual code for processing requests (implements the `handle` method)
- The `Client` chooses how and whether to compose chains depending on the app logic.

## Applicability

- Use the Chain of Responsibility pattern when the program is expected to process different kinds of requests in various ways, but exact type and sequence are unknown beforehand.
- Lets you link many handlers and allow them to "figure it out" individually
- Use pattern when it's essentail to execute handlers in a specific order.
- Use the pattern when the set of handlers and order may change at runtime.

## How to Implement

- Declare the handler interface and signature of handler method
- It may be work creating an abstract base handler class from the handler intterface
  - Should have a reference to the next handler in the chain
  - Try implementing default handling behavior (forwarding the request to the next object until there's none left)
- Create concrete handler subclasses and implement the handler methods
  - Each handler should decide: 
    - Whether it'll process th request
    - Whether it'll pass the request down
- Client may either assemble chains or receive prebuilt ones. For the latter case, implement factories to build chains according to specs.
- Client may trigger anyhandler in the chain, not just the first one.
- The client should also anticipate:
  - Chain may just have a single link
  - Requests may not reqch end of the chain
  - Others may reach end of the chain unhandled

## Pros and Cons

### Pros

- Can control the order of request handling
- Single Responsibility Principle: Can decouple classes that invoke operates from classes that perform operations
- Open/Closed Principle: Introduce new handlers into the app without breaking the existing client code.

### Cons

- Some requests may end up unhandled.

## Relations with Other Patterns

- Chain of Responsibility, Command, Mediator and Observer patterns all address ways of connecting senders and receivers of requests:
  - CoR passes a request sequentially along a chain of receivers
  - Command establishes unidirectional connections between senders and receivers.
  - Mediator eliminates direct connections between S and R, forcing to use a mediator object indirectly.
  - Observer lets R dynamically subscribe and unsubscribe from receiving requests.
- CoR is often used with Composite. When a leaf component gets a request, it may pass through the chain of all the parent components down to the root.
- Handlers in CoR can be implemented as Commands - execute operations over the same context object. Or - the request itslelf could be a command object. You could execute the same operation in dfferent contexts within the chain.
- CoR and Decorater has similar class structures. However Cor handlers execute operations independantly. Decorators extend the object behavior while keeping it consistent with the base interface.