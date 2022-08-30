# Distinguishing actions, calculations, and data

- Before beginning coding, break down into actions, calculations, and data
- Coding a solutions: reflect the three categories in code. Always ask whether an action couldn't be rewritten as a calculation
- Reading code - be conscious of what goes in what category, and look for hidden actions. Fucntional programmers look for ways to refactor code to better separate actions, calculations, and data
- Exercise: Break down a normal routine into actions, calculations, and data

- Actions can hide actions, calculations, and data
- Calculations can be composed of smaller calculations and data. Sometimes it's advantageous to break things apart. Usually this means breaking up a calculation, with data output form the first passing to the second as input.
- Data can only be composed of more data
- Calculations sometimes happen "in our heads"

## Deep dive: Data

- Data= facts about events
- Implemented in nums, strings, arrays, and objects, etc. Sometimes schemas
- Data encodes meaning in structure
- Immutability:
  - Copy-on-write: Make a copy of data before modifying it
  - Defensive copying: Make a copy of data you want to keep
- Advantages of data:
  - Cannot be run, is inert
  - Serializable: No problem being transmitted and stored to preserve for later
  - Easy to compare two pieces of data to see if they are equal
  - Open to interpreation
- Disadvantages: Data must be interpreted to be useful. No meaning without interpretatiaon

- Drawing a ACD system
- Actions on left, data on right, calculations in the middle pointing to interation
- Start with most constrained category (data), then add calculations to derive more data from those. Then put it together with actions

## Deep Dive: Calculations

- Computations from inputs to outputs
- No matter when or how many times they are run tey give same output for same inputs
- Represent calculations as functions
- Much easier to understand than actions
- Easier to test and analyze by a machine
- Very composable, can be put together into bigger calculations or higher order calculations
- "pure functions", "mathematical functions"

- Actions spread through the code. If you call an action in a function, that function becomes an action
- Actions can take many forms:
  - "Does it depend on when or how many times it runs?"

## Deep dive; Actions

- Anything that have an effect on the world or are affected by the world
- Depend on when or how many times they are run
  - Ordering, Repitition can affect actions
- Meaning of the action is the effect it has on the world
  - Ex: sending an email, withdrawing money, modifying global variable, sending a rerquest
- "impure functions, side -effect functions
- Use fewer actions if possible
- Keep actions small, remove everything no necessary from the action
- Restrict your actions to interactions with the outside - all things that are affected by world outside or can affect world outside. Inside, just calculations and data
- Limit how dependent on time an action is
