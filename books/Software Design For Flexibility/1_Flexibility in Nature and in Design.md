# 1 - Flexibility in Nature and in Design

- Most engineered systems designed to perform specific jobs
- Digital computer is exception - can simulate other information processing machines
- Each piece of software usually designed to do narrow jobs
- Changes to the problem can often mean big changes to software

### Additive Programming

- Goal: How to construct systems that can be easily adapted to changing requirements
  - `additive programming`
- Encourage a style of thinking focused on flexibility
- Minimize assumptions about how a program works and how it will be used
- Parts we build must be as simple and general as we can make them
  - Choose right abstraction level by ID'ing domain of discourse
- Range of outputs ideally small and well defined (Smaller than acceptable inputs)
- Digital abstraction: Outputs are 'better' than inputs of the next stage, in order to suppress noise
- `Postel's Law`: Be conservative in what you do, be liberal in what you accept from others
- Using more general parts than necessary - builds flexibility
- `Domain Specific Language` - Family of mix-and-match parts for a domain of discourse
- `Generic Dispatch` - Way to extend applicability of a proceure through adding handlers based on args passed
- _Layering_ data and procedures - Enhance programs with new functionality w/o changing original program
- _Combining_ multiple sources of partial info
- _Degeneracy_ - multiple ways to compute something, can be combined or adjusted as needed
  - Selecting from different implementations of algo depending on context
- Costs of Designing for Flexibility:
  - More code & brainpower than is absolutely necessary
- However, minimizes rewriting and refactoring
- Long term costs add rather than multiply
  
## 1.1 Architecture of Computation

- Design process starts with `parti` - organizing principle
  - Sketch of arrangement of parts
  - Also abstract ideas
  - Details are designed around and can modify `parti`, but it is the scaffold along which development occurs
- Abstract plan for computations to be performed
  - Small scale: Algo or data structure description
  - Larger scale: Abstract comp of phases and branches
  - Largest: Allocation of capabilities to logical or physical locales
- In high level languages, `parti` is tightly coupled to elaboration
  - functions and actions are thrown in with type declarations, class declarations, libraries, etc.

## 1.2 Smart parts for flexibility

- Large systems have many smaller components. System engineering program- interfaces that allow interconnection of components
- Complexity of systems increase in complexity
- Biological systems use contextual signals that are informative - parts choose roles based on surroundings
- Combinations of signals enable and siable behaviors
- Systems organized in this way can evolve
- Traditionally, software systems are imperitive and cannot evolve

### Body plans

- All vertebrates have similar body plans. Engineering is similar - good designs are modular

- Modules all decompose into other modules and can be instantiated in different ways
- Compartmental structure supported at higher levels of organization
- Body plan = wrapper combining partially specified components
- `Combinator` - combines subparts into a large part
- `Combinator languages` - Components and composite have same interface specs
  - Possible to build arbitrarily large composites
- Domain-specific languages - abstracting domain enables ability to use same domain-independent code in other places
- Universal element: `evaluator` - Takes description of computation and inputs, then produces outputs.

## 1.3 - Redundancy and Degeneracy

- Biological systems are redundant - perosn missing a part of liver or 1 kidney is still ok
- Degeneracy is a product of evolution  - helps creature be adaptable
- When parts generate partial information, result of combination can be better than individual results

## 1.4 Exploratory Behavior

- Outcomes produced by generate-and-test mechanism
  - Generator mechanism can be general and work independently of testing mechanism
  - Generator does not need to know about how tester accepts or rejects
  - Two parts can be developed separatly

![picture 2](https://s2.loli.net/2022/09/26/UhdvZop1QixRCF3.png)  

- Separate specification from implementation - often multiple ways to satisfy a spec + different design implementations

## 1.5 - The cost of flexibility

- Redundant mechanism has more parts. Elaborate and expensive infrastructure
- Systems that are easily adapted and maintained elminites costs of teaching new programmers how exiting system works
- Cost of brittle infrastructure > cost of flexible design

### The problem with correctness

- Because we intend to apply systems in unpredicted contexts - cannot be sure they work correctly
- Discard idea of making things "correct"
- should not restriction application to situations for which system is provably correct
- Sometimes best way to approach problem: Generalize until proof becomes simple
