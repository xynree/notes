# 15 - Preventing Errors and Informing Decisions

## Using Rich Modeless Feedback

- Visual information should be displayed in a modeless fashion in main views in order to eliminate dialogs

### Rich visual modeless feedback (RVMF)

- Gives in-depth information about status or attributes of a process/object in application
- Modeless: Always readily displayed, no special mode shift needed to view and make sense of feedback
- Think about objects in application and attributes as ell as what kind of status information critical for users
- Not for beginners: users will begin to use over time
- RVMF used to replace alerts and warnings of trouble should be very clear to users

### Audible Feedback

- Avoid negative audible feedback
  - Do not emit noise when something bad happens
  - Because negative feedback is issued with a problem = home alarm
- People will usually choose no noise versus noice for negative feedback
- Provide positive audible feedback
  - When succcess with tools = sound, positive audible feedback
  - Software whould give small, constant audible cues

## Undo, Redo, and Reversible Histories

- Undo has lots of variation in purpose and method

### Undo should follow mental models

- User mental models of mistakes
  - Abandon idea that user can make a mistake: everything user does is osmething he or she considers valid and reasonable
- Undo enables exploration
  - Undo provides a way to support assist users in explorations
  - It reassures users
  - Users often don't think about Undo until they need it
- Designing an Undo facility
  - Supports "trustworthiness" on the way to a goal
  - Keeps negative occurances from spoiling effort
  - Make sure undo supports typically used tools and avoids signaling failure to the user
  - A tool for supporting exploration rather than reversing errors

### Common Types of Undo

- Incremental and procedural actions
  - Undo operates on user actions
  - Procedure: What user did
  - Component: What info was affected
  - When user requests Undo, procedure component of action is reversed
  - If action had a data component that results in adjustment of data, data is modified appropriately
- Incremental Actions: Actions that include a data component
- Procedural Actions: Data-Free transformations (reformatting operations)
- Most existing Undo doesn't discriminate between prodecudral/incremental and just reverses the most recent action
- Blind and explanatory Undo
  - Blind Undo: No indication of what last operation was
  - Explanatory Undo: Idiom including textual or visual description of operation that will be undone
- Single and Multiple Undo
  - Single Undo: rreverses effects of most recent action, no others
  - Multiple Undo: performed repeatedly in success: Reversible history. Maintain stack of operations
- Limitations of Single Undo
  - User might accidentatlly short-circuit capability of Undo function
- Limitations of multiple Undo
  - Has to work in a LIFO manner
  - OFten constructed in function-centric manner, bad for scaling
- Undo and Redo
  - Allows user to undo the undo
- Group multiple Undo
  - Not great

### Other types of Undo

- Discontiguous multiple undo
  - How to undo only a subset of actiosn while keeping others?
  - Doesn't work with LIFO stack
- Category Specific Undo
  - Backspace key is really an Undo function, but a spefici one
  - Classic example of incremental undo - reversing some data while ignoring other actions
  - Behavior is consistent with user's mental model of character
  - Might undo within current selection only
  - Incremental Undo is a learned behavior that users find helpful
- Deleted Data Buffers
  - Independent buffer collects all deleted text or data
  - Can be browsed at will, randomly instead of sequentally
  - Would be useful in most applications
- Versioning and Reversion
  - Versioning makes copy of entire document
  - Users must explicitly request a version and allow reverting to past versions
- Freezing
  - Locking selected data within a document so it cannot be changed
  - More useful for graphic documents - all marks up to that point are permanent, but marks can be made at will
- Undoing the Undoeable
  - Some things can't be undone becaus ethey are not controlled by you
  - Still ways to mitigate: Gmail's undo function

### What If: Compare and Preview

- Undo/Redo allows user to see comparison between effects after an action has been taken: what if?
- Ability to see image with transformation and compare to image without transformation can be very helpful
- Very useful in graphic interfaces
