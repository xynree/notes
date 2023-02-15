# 21 - Controls and Dialogs

## Controls

- Self-contained screen objects through which people interact with the product
- 4 basic types:
  - Imperative controls (initiate a function)
  - Selection controls (select options or data)
  - Entry Controls: Enter Data
  - Display controls: Manipulate how app displays data

### Imperative Controls

- When we issuea a command, we specify the verb action
- When we describe what the action will affect, we specify the noun
- Control that corresponds to a verb is an imperative control because it commands action.
- Examples of imperative idioms: Menu Bar Controls, button

Buttons

- General if the control is rectangular with a rounded edge, it has the affordance of an imperative
- Executes as soon as it is tapped or clicked
- Default buttons are often highlighted to indicate the most common actions for a user
- Easily discoverable idiom
- Widespread use, has evolved with diversity across user interface
- Visually pliant: Indicates its pressability
  - Button control will change when hovered to indicate that it has been activated
  - Flat design may remove this pliancy, but can do so only because users have been trained to understand the button

Icon Buttons

- Toolbar with icon buttons has become a standard as familiar as a menu bar
- Changed from rectangular to square, and labels changed to icons
- Always visible and don't demand as much time or dexterity as a drop down
- Easy to memorize, especially in sovereign applicatins
- However, image on face of a button is not usually clear for a first time user
- Tooltips can help with deciphering icons

Hyperlinks

- Web convention of blue underlined text, providing a focus highlight color on mouseover
- Imperative control used for navigation
- Links now are used often in complex transactional websites like Amazon
- Images can also be used as links, however, they lack affordances
- Use links for navigtation through content, and buttons or icons but other actions and functions
- Common tactic for dialog boxes: provide a button for default choice and an adjacent hyperlink for the other option
  - This tactic could be seen as manipulative as it can obscure the hyperlink

### Selection Controls

- Imperative controls represent commands, they need objects (nouns) which to operate
- Selection and entry controls are used to define nouns
- Selection control allows user to choose this noun from a group of valid choices
- Also used to configure actions
- Traditionally, selection controls do not directly result in actions: instead they require an imperative control to activate
- In cases where it is desirable to allow user to make selections before commiting to an action, there should be an explicit control (button)
- In cases where users would benefit from seeing immediate impact and actions are easy to undo, selection controls can double as an imperative control

Check Boxes

- One of the earliest visual control idioms
- Good for presenting a single, binary choice or for selecting among several choices in a short list
- Strong visual affordance for clicking
- Checkbox is primary a text-based control, same weaknesses as menus
- Well-writtten text can make check boxes clearer but forces users to slow down to read it
- Traditionally square
- Don't make them diamond or round (confuses them with radio buttons)

Toggle Buttons

- Graphical approach to a unitary checkbox
- Let icon stay in pushed-in state when clicked
- Appropriate for modeless interactions
- Use tooltips for ambiguity

Avoid state-switching buttons

- Example: collapsing play and pause into the same button
- Problem: control could be interpreted as indicating the player's state (puased or playing)
  - For music players, there is extra context in hearing music, but many interfaces do not have explicit confirmations
- Solution: Spell out the verb: Play or Pause in text on the button

Radio Buttons

- Mutually exclusive: When one option is selected, previous option automatically deselects
- Radio buttons always come in groups of two or more
- One radio button in each group must be selected
- Use the same amount of space on screen as check boxes
- Suited to a pedagogical role: Justified in infrequently used dialogs
- Dropdowns are usualy better in sovereign apps for daily users
- Radio buttons are almost always round

Switches

- Switch control is a more compact version of two radio buttons used together
- Can also be seen as a check box, with states labeled explicitly
- Has two states: on and off, that are on either side of the switch

Combo Icon Buttons

- replace bank of icon buttons with a dropdown list of icons
- User must click and hold icon button to bring up the menu (adobe palette tools)
- Can pack a lot of info into a compact control
- For frequent users
- Idiom is clear after it is discovered or demonstrated

List Controls

- Allow users to set from a finite set of text strings, representing a command, object, or attribute
- Also known as "list boxes" or "listviews"
- Good tool to simplify interaction
  - Eliminate possibility of inputting an invalid selection
- Drop down can be considerred a variant of list control
- Barrel rendering for alarms (iOs)
- Try out using the dropdown control with an icon, or with a preview

Earmarking

- Users will select items ina list control as input to some function
- Occassionally list control are used to select multiple icons
- List control selection is much wewaker idiom for multiple selection
- When lists are long and can scroll off screen use a different idiom: Checkbox
- Adding a checkbox to list control helps with displaying mutual exclusivity "earmarking"

Dragging and Dropping from lists

- List controls can be used with direct manipulation
- Drag items can help users gather items into a set
- Provide two lists: Available items and chosen items

Ordering Lists

- Sometimes users need to reorder lists
- Many applicatons offer automatic sort
- For advanced users: Offer custom sort
- Also make sure the application remembers settings from session to session

Horizontal scrolling in lists

- Horizontal scrolling is a pain for users and should only be allowed in large tables like spreadsheets
- Search for alternative solutions:
  - Shorten entries, wrap text to next line, enter aliases for longer entries, graphical entries, tooltips, widen control, rearrange window
- If no alternative: Wrap text to next line, and indicate that it is diferent from other entries, or truncate with the ellipsis

Entering Data into a List

- Edit in place is a common idiom
- Edge case: adding new entry to a list

Dropdown and Popup Lists

- Take the place of a stack of radio buttons
- Current selection shown when the pop up list closes
- Focus on selecting objects rather than executing commands
- Can sometimes affect display if used as part of live search filter

Combo Boxes

- Combination of list box and an edit field
- ![picture 1](https://s2.loli.net/2023/02/11/jY6SbxdMBFD4VrL.png)  
- Clearly differentiate between selection and entry part, minimizing confusion
- By nature a single-selection tool

Tree Controls

- List views that present hierarchical data
- Sideways tree of visually connected branches
- Can be problematic for users
- Only use when what the tree represents can be naturally thought of as a hierarchy

### Entry Controls

- Enable users to supply information or set a value in an application
- Basic entry control: Text Edit Field
- Represent nouns to the application

Bounded and Unbounded Entry Controls

- Bounded entry control: Control that restricts available set of values that user can enter
- Unbounded entry field: Will accept any character typed into it
- Bounded controls should be used wherever bounded values are needed
  - Should communicate the acceptable data boundaries
  - A field that rejects user input after being entered is not a bounded control - it is a rude control!

Spinners

- Common form of numeric entry control that permits data entry using mouse, keyboard or finger, called Stepper on ios
- ![picture 2](https://s2.loli.net/2023/02/12/uhTwWCEaNrtev7R.png)  
- Spinners blur the difference between bounded and unbounded controls

Dials and sliders

- idioms from mechanical age metaphors of knobs and levers
- Dials are space efficient
- Good at providing visual feedback about settings
- Dials can be difficult to manipulate - sliders can be better if there's enough space for them
- Implementing a dial should allow linear input in two dimensions: Clicking and moving up or right vs moving down or left + velocity
- Dials are best used in specialized sovereign applications. Popular with audio software

Thumbwheels

- Variant of a dial, looks similar to a scrollwheel
- Good for 3D applications

Other bounded entry controls

- 2D graphs for interfaces, complex diredt manipulation interfaces
- Control surfaces often provide a mechanism for visual feedback
- Most appropriate for situations where users attempt to express themselves with a number of variables and are okay with developing a complex idiom

Unbounded Entry: Text Edit Controls

- Primary unbounded entry control  = text edit
- Often used as data-entry fields in database apps, as option entry fields or as entry field in a combo box
- Text edit control can be designed to reject nonalphabetic characters and disallow invalid characters

Validated Entry Controls

- When unbounded text-entry is provided but filed only accepts entries of a certain form, you may need to help users construct a "valid" entry
- Give users generous feedback as close to real-time as possible, so they can catch errors immediately
- Another way is to make validated entry controls distinct from nonvalidated controls

Active and Passive Validation

- When a control actively rejects keystrokes during entry this is "active validation"
- It must tell the user it has rejected the stroke and why it occurred
- Sometimes the range of data cannot validate until user has completed his entry
- If control waits until user finishes entering data before editing the value: passive validation
- Try using a debounce for validation processing to about half a second

Hints

- Popup text that behaves like a tooltip, explaining range of acceptable data for a validation control

Handling Out of Bounds Data

- Do not allow users to type invalid data, but consider that they may enter data that is close but not necessarily invalid

Avoid Text Edit Controls for Output

- If there is text data to output, use a text dispaly control, not a text edit control

### Display Controls

- Display controls are used to display and manage the visual opresentation of information onscreen
- Examples: Scrollbars, screen splitters
- These are controls that manage how objects are displayed visually, and also display static, read-only information

Text Controls

- Displays a wirtten messasge at some location
- Prblem: Used often where edit controls should be and vice versa.
- In many cases where app displays an editable value, it should do so in an editable field so that the user can click it and change it directly.
  
Scrollbars

- Can be3 overused and underexamined
- Provides useful context about where you are in the window
- Best scrollbars use thumbs that are proportional to the percentage of document that is visible
- Scrollbars for pages of text should also show total pages, page number, thumbnail
- Limitations are found when using scrollbars in inappropriate situations: such as for calendar controls
- Alternatives to scrollbars: Document navigator, outlines

Splitters

- Tools for dividing a sovereign application into multiple related panes
- Movable splitters should advertise pliancy with cursor hinting
- A splitter should be unable to be moved in a way that makes the pane's contents unusable
- When panes need to collapse, a drawer might be a better idioma

Drawers and Levers

- Drawers are panes that can be opened and closed with a single action
- Can be used in conjunction with splitters
- Must have a handle control to click open and close. This control should be visible at all times
- Good place to put controls and functions that are less frequently used but most useful in the context of the application's main work area
- Do not cover the main work area the way a dialog does
- Property details, searchable lists of objects or components, and history are good candidates for drawers
- On mobile: Horizontally sliding drawers that take users to different functional screens

## Dialogs

- Pop-up windows superimposed over the application's main window
- When finished, user can dismiss or accept dialog
- In era of modeless controls, a hallmark of poor interaction design is a user interface consisting primarily of control-laden modal dialogs
- Primary actions and controls for an application belong in its main screen or window

### Appropriate Use of Dialogs

- Useful to take users out of the flow and force them to focus on particular questions
- Appropriate for functions or features that are out of the normal course of things
- Good for actions that make immediate and major changes to the application state
- Prevents features from being invoked accidentally
- A robust undo function should also be provided
- Well suited for concentrating information related to a single subject, appropriate for organizing controls and info
- Effective for users who are still learning an application
- Dialogs must be compact and powerful, speedy and smooth

### Basic Dialog Interactions

- Most dialogs contain a combination of informative text, interactive controls, and associated text labels
- Dialog should appear on the topmost visula layer so that it is obvious to a user
- Should have a title that clearly identifies its purpose. Use verbs to show function's action
- Most dialogs also have a terminating Cancel command

### Modal and modeless dialogs

- Modal dialogs: Owner application cannot continue until dialog is clkosed. Stops all proceedings. All controls and objects on surface of app are deactivated
- Modal dialogs are easier for users and designers to understand.
- Rarely misunderstood
- Operate on the entire application or the entire active document
- Because modal dialogs stop only their owning applications, they are described as "application-modal"
- Also possible to make a "system-modal" dialog that brings every app to a halt. Howerver, this should not happen
- Modeless dialogs are less common. When it opens, parent app continues without interruption
- Does not stop the proceedings, even though they have terminating commands. Can be difficult to understand
- Sometimes can drag objects between main windows and modeless dialogs. Makes them useful for tool or object palettes

### differentiating modla nd modeless dialogs

- When using both dialogs in an application:
- Modal dialogs must include 1+ terminating commmands
- Modeless dialogs should not use terminating command buttons. Instead they should use the Close control in its title bar
- Modal dialogs should not use close controls in their title bars

### Issues with modal dialogs

- Avoid changein the terminating buttons from Cancel to Apply or from Cancel to Close depending on whether or not user has taken an action
- These labels should never change
- The cognitive strength of modal dialogs is their rigidly consistent OK and Cancel buttons

### Issues with modeless dialogs
