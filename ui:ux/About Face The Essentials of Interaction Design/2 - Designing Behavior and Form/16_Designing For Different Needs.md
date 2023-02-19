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

### Contextual Help and Assistive Interfaces

- There are patterns to support help in context or helping users accomplish involved tasks

#### Guided Tours and Overlays

- Guided tours: Provide introduction to features and interfaces with a sequential set of screens or cards, with explanatory dialogue
- Describe a set of basic functions or take the user through typical sequentail processes
- Usually launch automatically the first time an app is run
- Important that these tours have a `skip` button available on each screen
- Screen to dismiss tour at the end is also needed, as well as a relaunch
- maximum 5 - 7 cards

![picture 2](https://s2.loli.net/2023/01/12/1vYGZNqRl89gjwe.png)  

- Overlays: for simple apps with functions that are not evident
- Overlays point out apps key behaviors and have descriptions of usage
- Useful in that features can be shown in the spatial context of a full screen
- Should include a way to relaunch it somewhere in the app (should be unintrusive)

![picture 1](https://s2.loli.net/2023/01/12/WItaTOUxuinwZH9.png)  

#### Galleries and Templates

- For document building applications: consider giving users some templates for them to work off of
- Gallery of basic document types makes it less **intimidating**

#### Input and Content Area Hints

- Hints: Small and often grayed text that provides directions of examples of use in input fields (placeholder text)
- Content area hints: Notification for what an area is supposed to be (No status indicators)

#### Pros and Cons of Wizards

- Attempts to guarantee success by stepping users through a series of steps
- Dialogs sometimes ask questsions in sequence - can feel like an interrogation
- Most are written as a rigid step by step process
- Appropriate in a few cases: initial configuration, online surveys
- Better way to cfreate a wizard - automatic function that doesn't ask questions of users

#### Tooltips and tooltip overlays

- Very effective for desktop or stylus applications
- For mobile: tooltip overlays are triggered by tapping a help button
- Appropriate for complex apps if used as a "cheat sheet"

#### Traditional Online Help

- Verbose online help should be focused for people who are already using product successfully and want to expand their knowledge
- People will google questions, make sure the official answer is out there to provide a standard definition

#### Full-text search vs. Indexing

- Full text search is only as complete as the wording of the help text
- Helpful to create synonym mappings in the index
- Good design reduces user's reliance on healp systems

### Overview descriptions

- Scope, effect, power, upside, downside general process are the descriptors users are looking for

### In-app user guides

- Reference for detailed info on using complex functions
- Not commmonly looked at

## Customizability

### Personalization

- Giving users ability to customize allows them to express individuality without major structural change
  - Decorate persistant objects: Personalization
  - Tools for personalizing must be simple and easy to use
  - Should be easy to undo
- Do not move the persistent objects themselves

### Configuration

- Moving, adding, deleting persistent objects
- For more experienced users and experts
- Examples: moving controls around on toolbar
- In some cases, configuration is critical: Evolving workflows are an example
- IT manages value configuration: coerces corporate users into practicing common methods
- Buying decisions often decided on how easily an application can be configured for their enterprise
  - Example: Microsoft office is highly configurable

### Idiosyncratically modal behavior

- User populations may be split on effectiveness of certain idioms
- Idiosyncratically modal: Splitting of preferences into 2+ large groups

## Localization and Globalization

- Localization: translating an app for a particular language and culture
- Globalization: making an app as universal as possible across many languages and cultures
- Immediate informations are idiomatic and can be globalized easily
- Pedagogic interfaces: language dependent
  - Words and phrases often change in length in different languages
  - Words can be difficult to sort in some languages
  - Ordering of time varies for countries
  - Decimanl points and currencies represented differently
  - Some countries use week numbers over Gregoriation calendar

## Accessibility

### Goals of Accessibility

- Users can understand all instructions, info, and feedback
- USers can understand and easily manipulate controls and inputs
- USers can navigate easily and always be aware of where they are in an interace and navigational structure
- An acccessibility strategy might be to design separate accessibility modes that alter screen contrast and colors

### Accessibility Personas

- Interview users who have disabilities that would affect use of the product
- Follow guidelines as a starting point for appraoching accessible design

#### Leverage OS Accessibility tools

- App shouldn't use keystrokes that are already used by OS-level accessibility functions
- App should work properly with accessibility features turned on
- App should use standard API's for input and output when possible

#### Don't override user-selected system settings

- App should accomodate system-level accessibility settings for input i/o

#### Enable standard keyboard access methods

- User should be able to traverse the entire set of user interface controls and content ares with a Tab key
- Arrow keys should let user traverse list, table, and menu contents
- Enter key should activate buttons and toggles

#### Incorporate Display options for those with limited vision

- Range of options for users with vision problems;
  - High contrast display option
  - Enlarging typeface and increasing its weight (independently)
  - Color-blind friendly info display
  - Minimizing motion and animation in UI elements
- Application should not use color alone to convey meatning of data: use other attributes like size, position, brightness, shape, and/or text labeling

#### Provide visual-only and audible-only output

- Support vision impaired with audible interfaces

#### Don't flash/flicker/scroll/or blink visual elements

- Automatic scrolling text/other animations and flashing/blinking can cause issues

#### Use simple, clear, brief language

- Short/simple text labels and instructional text will make them easier to learn and use

#### Response times should support all users

- Allow users to choose longer response times
- Avoid timing out on actions or make the time-out period adjustable

#### Keep layouts and task flows consistent

- People work better if they need to remember only a single navigation and action paradigm

#### Provide text equivalents for visual elements

- Tooltips that can be enunciated by screen readers
- Add alt tags to visual elements so they can be understood by people using text-based browsers
