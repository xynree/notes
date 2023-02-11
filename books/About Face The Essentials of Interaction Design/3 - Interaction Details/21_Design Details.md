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
