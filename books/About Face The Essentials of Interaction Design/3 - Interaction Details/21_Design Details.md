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
