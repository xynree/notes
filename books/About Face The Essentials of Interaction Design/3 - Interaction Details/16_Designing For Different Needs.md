# 16 - Designing For Different Needs

## Learnability and Help

### Command Modalities

- UI is a means for users to enter data and issue commands to a computer
- Commands that activate functions are difficult to learn, more than data entry
- Command Modalities: Techniques to allow users to issue instructions to an application
  - Drop down
  - Handles
  - Popups
  - Toolbar controls
- Considerate UI often provides multiple command modalities for critical functions

### Pedagogic, Immediate and Invisible Commands

- Dialog boxes/commmand menus teach user with descriptive text
- Pedagogic Modality
  - Commands that teach behavior with inspection
  - Beginners use pedagogical menus to get oriented
  - Intermediates often want to find more immediate/effective tools
    - Immediate/Invisible commands
- Immediate Modality
  - Real-time manipulation controls
    - sliders/knobs, push buttons, toolbars
  - Immediate effect on data without any intermediary
  - Not like menus or dialog boxes
- Invisible Modality
  - Invisible keystrokes, swipes, pinches, etc.
  - Needc to be initally identified for the user, unless they follow widely used conventions

#### Information in the world versus information in the head

- Info in your head is much faster and easier to use than information in the world
  - But you are responsible for ensuring that you learn it
- Info in the world is slower and more cumbersome, but dependable
- Pedagogic commands: designed to be learnable via info in the world
- Invisible commands must be memorized
- Intermediate commands: somewhere inbetween

#### Memorization Vectors

- Pedagogic interfaces become tedious because of repetitiveness and verbosity
- Users like immediate comands for frequent tasks
- To encourage learning immediate commands, we must provide a path by which the user can learn the corresponding commands: `memorization vector`
- How to provide memorization vectors?
  - Bad: mention only in documentation
  - Less bad: Put in online help system
  - Better: Integrate memorization vectors directly into the main interface
    - Example: Showing keyboard shortcuts on the main interface
    - This is good becausde it doesn't intrude on a new user
    - Icon buttons could be more utilized to indicate different areas of application

#### Working Sets

- Intermediate users end up memorizing a subset of commands and features: `working set`
- Minimal Working Set: A subset of functions that are frequently accessed by most users
- Designer should use immediate modality for all commands in the minimal working set of the application's primary users
- Exception to multiple command modalities rule: Dangerous commands such as Erase All, Clear, etc. should not have easy, immediate modality commands. These should be protected within menus.
