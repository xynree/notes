# 5. Bend Or Break

- How to make reversible decisions: 
  - Coupling: Dependencies among modules
  - Metaprogramming: Moving details out of code
  - Temporal Coupling: aspects of time as related to coupling
  - Separation of model from view
  - Blackboarcds
  
## __26. Decoupling and the Law of Demeter__

- Don't reveal yourself to others, & Don't interact with Too Many People
- Organize code into modules and limit interaction between them.

### Minimize Coupling
- Watch how many modules are being interacted with and HOW you came to interact with them
- General contractor -> handles many subcontractors. Client does not talk to subcontractors
  - Follow this model: Service performed on our behalf
- Routines should not be coupled to multiple classes - increases risk that unrelated changes in system will affect code 
  - if `n` objects all know about eah other, a change to just one object can result in the other `n-1` objects needing cheanges.

### Law of Demeter for Functions
- Attempts to minimize coupling. Prevents from reaching into an object to gain access to a third object's methods
- Any method on object should only call methods belonging to:
  - itself
  - parameters that were passed into the method
  - any objects it created
  - any directly held component objects (created in the object)

### Does it make a difference?
- Law of Demeter reduces size of response set - creates fewer errors
- In practice - writing a lot of wrapper methods that forwards requests onto a delegate
- By violating Law of Demeter, coupling modules might increase performance


## __27. Metaprogramming__
- Remove details from code
- Make code configurable and adaptable to changes

### Dynamic Configuration
- Screen colors, prompt text, choice of algos, database products, middleware, interface style. Should be added as configuration options
- Use `metadata` to describe config options for an app: parameters, user prefs, install directory, etc
- Data about data: Describes the application. Used at runtime

### Metadata-Driven Applications
- Think declaratively (specifiying what is to be done, not how) to drive application with metadata
- Program for general case, put specifics outside the compiled base code
  - Decouples design
  - Defers details
  - Customizes app without recompiling
  - Metadata can be expressed closer to problem domain (i.e. real life)
  - May be able to extend project with different metadata
- Defer definition of most details until last moment, and leave details as soft/easy as possible.

### Business Logic
- Maintain business policy/logic in a flexible format
- Encode them in a rule based system, embedded within app.
  - Configure by writing rules

## __28. Temporal Coupling__
- Time: Concurrency / Ordering
  - Watch for temporal coupling: Method A must always be called before Method B
### Workflow
- Figure out what **can** happen at the same time, and what **must** happen in strict order
  - UML diagram to plot out dependencies
  - Hungry Consumer model - replace scheduler with a number of independent consumer tasks + a work queue
  - Consumers grab piece from queue and processes it before coming back from more. Each component is at its own pace
### Design for Concurrency
- Global/Static variables protected from concurrent access
  - When is it valid to query state of object? If object is in invalid state between certain calls, you may be relying on coincidence that no one call your object at that point in time

## __29. It's Just A View__

- Divide and Conquer to separate problems into modules
- But how do they talk to thhem? How to manage dependencies between modules?
- How to synch changes in state or updates to data?
- Concept of Event: Events signal changes in one object that some other object may be interested in

### Publish/Subscribe
- Not good to push all events through a single routine
- Objects register to receive only event shtey need, and never sent events they don't need
- Publish/Subscribe Protocol
  - Register to `Publisher`
  - Publisher keeps track of all interested `Subscriber` objects
  - When `Publisher` generates events, calls each `Subscriber` in turn to notify them about event

### MVC: Model Viewe Controller
- Model: Data itself with functions to manipulate it. No direct knowledge of views/controllers
- Views: Way to interpret model. Subscribes to changes in model and events from controller
- Controller: A way to control view and proovide model with new data. Publishes events to both model and view

- Separates model from both View that represent it and the controls that manage the view
- Can support multiple views of same data
- Can use many viewers on different data models
- Supports Multiple controllers to provide non traditional input

## __30. Blackboards__
- Blackboard approach: All parties add info to blackboard, and then watch blackboard for changes
- No detectives need to know about other detectives
- Detectives may be trained in different disciplines
- No restrictions on what is placed on blackboard
- Objects/code modules : Blackboard system decouples objects from each other completely
- Sets up 1 consistent way to interact with data - elegant system
- What makes a good fit for blackboard approach?
  - Autonomous entities
  - Feedback from decisions important
  - Participants come and go
  