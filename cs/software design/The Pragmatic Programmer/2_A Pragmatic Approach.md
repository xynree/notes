# 2 - A Pragmatic Approach
Tips/Tricks that apply at all levels of development and are almost universal

## __7. The Evils of Duplication__

- Understanding of app changes day by day, is routine part of dev
- DRY: Don't Repeat Yourself
- Situations where duplication occurs
  - Imposed: env requires it
    - Can mostly be avoided, code generator, filter
    - Documentation/comments should only be used for high-level explanations
    - boilerplate
  - Inadvertent: Devs don't realize
    - Mistakes in design
  - Impatient: Devs get lazy
    - Shortcuts make for long delays
  - Interdeveloper: Multiple people on a team dup
    - Active and frequent communication

## __8. Orthogonality__

- 2+ things are orthogonal if changes in one do not affect any of the others
- Interdepence = bad
  - Eliminate Effects between unrelated things
  - Better to combine orthogonal components
- Design
  - Cooperating modules, functionality independent of others
- Layers of abstraction: each layer uses only layers underneath it
- In orthogonal systems, 1 module affects 1 other module
- Maintaining Orthogonality
  - Shy code: Modules don't reveal anything unnecessary to other modules
  - Avoid global data, pass all required context into modules
  - Avoid similar functions (design problem)
- Testing: Easier to test, building unit tests helps create orthogonality
  
## __9. Reversibility__

- Critical decisions aren't easy to reverse
- Don't assume that all decisions are cast in stone
- Flexible architecture
  - Some areas distinct from others, abstract interface
    - If not possible, automate metadata requirements*

## __10. Tracer Bullets__
- Build a structure first and then flesh in the details
  - Users get to see it working early
  - Devs build a structure to work on
  - Integration platform
- Learns how app as a whole hangs together: create framework first
  - Lean but complete
  - Prototyping is disposable code, intelligence gathering

## __11. Protypes and Post-it Notes__
- Prototypes designed to answer a few questions
- Investigate risky things with prototypes
  - Architecture
  - New Functionality
  - Third party tools
  - UI
- Ignore in prototypes:
  - Correctness/Completeness/ Robustness
  - Coding styles
- How to use Prototypes:
  - Are major component responsibilities defined/appropriate?
  - Are collaborations btwn components defined?
  - Is coupling minized
  - Identify potential sources of dup
  - Does every module have access to data needed during execution?
    - Does it have access when it needs it?
- How not to use:
  - Make sure code is disposable, incomplete, unable to be completed
  - Only use for identifying and correcting potential problems early in dev

## __12. Domain Languages__
- Try to write code using the vocab of application domain: pseudo code, code at a higher level of abstraction, or even make mini-languages
  - Extend existing languages
- Data Langs and Imperative Langs
  - Data Langs: produce structure used by application
- Easy Dev or Easy Maintenence?
  - More complex + more readable reduces support/maintanence

## __13. Estimating__
- Learn to get a feel for the magnitude of things
  - Helps to determine feasibility
  - Learn which things to optimize and which can be left alone
- How accurate is accurate enough?
  - Units used makes difference in interpretation of results
  - Choose units to reflect accuracy intended to convey

How to build an estimate:
  
1. Build a model of the system
2. Break into components
3. Identify parameters
4. Calculate answers - check if it seems way off: understanding of model is wrong

- Estimate project schedules - can be difficult to determine timetable
  - Incremental development:
    - Check requirements, analyze risk, design, implement, validate
    - Refine guesses about project schedules based on initial functionality requirements, working with experiences doing similar things

- When asked for an estimate, say "I'll get back to you" !
  - Helps to be the most accurate as possible with this