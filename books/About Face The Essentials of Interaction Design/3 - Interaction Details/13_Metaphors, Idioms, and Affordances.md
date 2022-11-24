# 13 - Metaphors, Idioms and Affordances

- Visual representation of familiar objects have given way to a post-metaphorical era of interaction design
- Modern UI's are content and data-centric, minimizing cognitive footprint
- Metaphors have limited universability cross-culture

## Interface Paradigms

- Design progressed from heavy focus on technology (implementation) to metaphor and most recently into an idiomatic focus
- Most modern, info-centric designs are idiomatic today

### Implementation-centric

- Based on understanding how things actually work under the hood
- Shows precisely how software is built: one button per function and one dialog per module of code
- Need ot learn how software works in order to understand and use interface
- Easiest to build - easy to troubleshoot. Satisfying for engineers and helps them debug
- Complicate things for users
- Most people would rather be successful than knowledgeable
- Relative: org-chart-centric interface
  - Product is organized by which part of the organization owns whatever piece of info the user is looking to access

### Metaphoric

- Intuiting how things work
- Visual metaphor that signals a function
  - Iconography

#### Instinct, intuition, and learning

- Intuitive - easy to use or easy to understand
- Intuition, unlike instinct, works by inference - seeing connections between disparate subjects
- Users may not have the needed user experience or inferential ability to make those connections

#### Tyranny of the global metaphor

- After understanding functions, metaphor adds significantly to the overhead
- Global metaphor = single, overarching metaphor that provides a framework for all other metpahors
- Mistaken belief that other low-level metphors enjoy cognitive benefits by association
- Don't bend your interface to fit a metaphor

#### Other metaphorical interface limitations

- Don't scale well
- Rely on associations perceived in similar ways by both the designer and the user
- Metaphors come with a cost with intermediate users

#### Exceptions

- Video Games, simulation software, music creation software

### Idiomatic

- Based on learning how to accomplisht things

#### Graphical interfaces are largely idiomatic

- We learn to use these idiomatically rather than intuiting them
- Mouse input also is learned idiomatically
- Resizable windows/nested file folders do not have any parallels in the real world, but have easy idiomatic learnability

#### Good idioms must be learned only once

- We don't usually understand things like why someone's face is composed a certain way, but we know a face - we automatically memorize it
- All idioms must be learned but good idioms need to be learned only once

## Building Idioms

- Original graphical UI's were better because graphical interfaes required a restriction of range of vocabulary of interaction
- Interaction vocabulary can be represented by an intervted pyramid
  - Primitives - atmoic elements (clicking, positioning mouse, etc)
  - Compounds (middle layer) - Complex constructs created by combining primitives
    - Simple visual objects: text display, buttons, check boxes, form, links, etc
  - Idioms (upper layer) - Combine and structure compounds using domain knowledge of the problem
    - Labeled buttons and fields, nav bars, icons, groups of fields and controls

## Manual Affordances

- Affordance = the perceived properties of a thing that determine how it could possibly be used
- How do we know what those properties offer? How are you making the mental connection?
- Purely cognitive concept: What we think an object can do
- Buttons: An example of things we instinctually know how to deal with: Intuiting an interface
  - Manual affordances are much more compelling than written instructions

### Semantics of manual affordances

- Virtual manual affordances: No idea what a function will do
  - Rely on supplementary text and images or previous learning and experience
- Controls must have texrt or iconic labels on them to make sense
  - If not suggested by the control, we can only learn by experimentation or training

### Fulfilling expectations of affordances

- False impressions are easy to cfreate virtually
- Applications should deliver on expectations set by use of manual affordances

## Direct Manipulation and Pliancy

- Interface design strategy made of 3 visual components:
  - Visual representatoin of data objects
  - Visual and general mechanisms for acting on those objects
  - Immediate visible results
- Rich visual feedback = key to direct manipulation
  - Interactions that are not implemented with adequate visual feedback will fail to create the experience of direct manipulation

### Uses of direct manipulation

- With direct manipulation, we can point and interact with whatever we want
- The more flow-inducing interfaces are ones with sophisticated direct manipulation idioms
- Many art and design tools provide a high degree of direct manipulation of objects
- Seldom seen for complex numeric data
- Simple, striaghtforward, easy to use and remember
- Must still first be larned

### Direct Manipulation isn't always appropriate

- Drawbacks - hard to do a really good job with them
- Require skill development
- Consider what personas need to manipulate manually

### Pliancy and Hinting

- How can interface elements be directly manipulated?
- Plaint = react to input and can be manipulated by users
- Visually communicate pliancy when possible
- 3 ways to communicate pliancy to users:

#### Static Hinting

- Plaincy communicated by render of object itself
  - ex: making buttons 3d to provide affordance for pushing
- Flattening and simplifying elements creates challenges in visual hierarchy

#### Dynamic hinting

- Used often in desktop user interfaces
- When cursor passes over plaint objects, object temporarily changes its appearance
  - "rollover"
  - Hints that control has behavior indicated by rollover
  - Reduces visual clutter on a toolbar
- No mobile equivalnet

#### Pliant Response Hinting

- Occurs if cursors clicked by not released
- Shows that it is plised to undergo a state change

#### Cursor Hinting

- Changes cursor appearance as it passes over an object or screen area
- Makes it clear to users what type of action is possible
- Controls should offer static or dynamic visual hinting
- Pliant data should offer cursor hinting

## Escape the grip of metaphor

- Creating memorable and appropriate idioms will make users more effective and efficient
- Use pliant feedback to focus on content and function of app rather than Mechanical Age metaphors and interactions
  