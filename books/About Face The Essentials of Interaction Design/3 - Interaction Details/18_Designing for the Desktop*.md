# 18 - Designing for the Desktop

## Anatomy of a Desktop App

- The majority of work that is done on desktop apps is in sovereign applications
- Transient apps exist in supporting roles for brief, intermittent, and background tasks

### Primary and Secondary Windows

- Think of your application having a primary window and in many cases 1+ secondary windows
- Top level structure of desktop apps is the window: Movable, resizable container within contrent and fucntional controls reside

Primary Window

- Contains application content, expressed in the form of docs that can be created, edited, and shared
- Contains other objects with properties that can be manipulated and configured, or media that can be viewed or played
- Often divided into panes that contain content, a way to navigate between content, and sets of frequently used functions
- Designed to assume sovereign posture, filling most of the screen and supporting full-screen modes

Secondary windows

- Support primary window, providing access to less frequently used properties and functions, typically in `dialogs`
- Floating panels or palettes are also considered secondary windows

### Primary window structure

- Multiple functional areas:
  - Content or work area
  - Menu bar
  - Multiple toolbars, panels, palettes that help navigate or select content objects

Menus and Toolbars

- Collections of relaated actions a user can instruct application to perform
- Menus accessed by clicking on words arranged near top of screen
  - Often subject to standardization rules
- Toolbars are more specific:
  - Sometimes summoned through menus
  - present their functions as a collection of visual icons, sometimes with small labels

Content Panes

- Primary work area within most desktop applications
- Editable view of a form or document or a complex ontrol panel
- App typically has one primary content area
- Apps that support editing multiple documents or views of a document side by side may have multiple content panes

Index Panes

- Provide navigation andn access to docs or objects that ultimately appear inthe content view
- Sometimes used to select content display, other times drag-and drop used to add to content pane

Sidebars

- Allow object or document properties to be manipulated without modal or modeless dialogs

## Windows on the Desktop

### Overlapping Windows

- Overlapping windows do not scale well
- Can cause problems - misclicks, "losing" applications
- Other desktop idioms also overlap: Dialog box, menus/tool palettes

### Tiled Windows

- Applicationsd ivide screen into uniform tiles
- Has a drawback in pixel real estate

### Virtual Desktop Spaces

- Session Managers/virtual desktop extend the display by adding virtual screens

### Full-screen applications

- Recent releases have moved toward full-screen applications

### Multipaned applications

- Multipaned windows: Independent views or panes that shre a window
- Adjacentpanes separated by spilitters
- Example: Outlook
- Independent but related info can be displayed in a sovereign posture, reducing navigation and window management excise
- Stacked panes or tabs: common for prefs, settings, dialogs

### Window States

- minimized, maximized, pluralized
- Minimized: Collapsed into icons on the desktop or taskbar
- Maximized: fill entire screen
- Pluralized: Switches a maximized primary window to aanother state
  - In-between condition where window is not icon and not maximized
- Normal state for a sovereign app: Maximized
- Transient posture apps: Pluralized

### Making Use of Windows

Unneccessary Rooms

- We don't add aroom to house unless it has a purpose that cannot be served by other rooms
- Think through question of purpose by considering users' goals and mental models
- Too many unnecessary rooms: Seocndary windows that contain functions that should be integrated into panes or other surfaces within primary window

Necessary Rooms

- When users perform a function outside of normal sequence of events, provide a special place in which to perform it
- Examine user goals to find appropriate form: Decide which functions should be inclosed and which shouldn't by user necessity

## Menus

- Drop down menus: Made of a popup window
- Menu bar: usually visible across top row of a screen or window
- Rollver effect indicates pliancy
- Variant of menu that pops up when clicked: pop-up menu
- Selection user makes on a menu either takes effect immeidate or launches a dialog box of further options, and then menu is collapsed back

### Menus as a pedagogic vector

- Not main methods by which users perform functions
- Glancing at set of functions by way of menus and dialogs helps to get an impression of application purpose
- Textual nature of menus helps explain functions
- Used as an index to known tools
- Also a stable location to access one of many possible commands, or to be reminded about shortcuts
- Main purpose of menu is not to execute commands, but to teach us about what is available
  - Be verbose and specific: scanning menu should make clear scope of application and depth of abilities
- Most functions available should be able to be found in menu
- Show keyboard shortcuts as well

### Disabled Menu Items

- Menu items should be disabled when they are unavailable in the current state
  - Gray out: useful and expected idiom

### Check mark menu items

- Used to enable or disable aspects of interface
- Effective because it indicates control's state
- Best used in apps with simple menu structures
- If attributes are frequently toggled, should be accessible from a toolbar
- Check mark menu is more preferable than a toggle

### Accelerators

- Keyboard shortcuts
- Include these annotations in the menu
- Follow Standards, provide for daily use, show how to access
- Identify functions that are likely to be used frequently
- Customizing accelerators is often a good idea
  - Be sure to add a Return to Default control along with customization options

### Access Keys

- Purpose is to provide a keyboard equivalent for each menu command
- Accessed using Alt, arrow keys, and underlined letters

### Cascading menus versus monocline groupings

- Cascading menus are notoriously difficult to use
- Hard for users to locate items, and require precise mouse movements in two dimensions
- Modern GUI's have flattened menus, and most are only 1 level deep (monocline grouping)
- Flattening organization can improve discoerability and learnability
- Dialog box enabled simplification of menus
- Cascading menus should only be employed in sophisticated sovereign applications, for rarely used functions

## Toolbars, Palettes, and Sidebars

- Toolbar functions are modeless and plainly visible
- Usually one or sometimes 2 rows/columns of visible, immediate, labeld functions

### Toolbars and Menus

- Work together with menus to satisfy user needs
- Toolbars are for frequently used commands and cater to intermediates
- Receptacles for essential functions

### Toolbars versus modeless dialogs

- Toolbars are modeless but: visually different from modal dialogs and there is no need to worry about dismissing them
- Efficient in screen space
- Don't cover what they are operating on
- Modeless dialogs are free-floating windows: but can result in window management excise
- Docking toolbars: Dragging a toolbar away from application forms its own small window

### Toolbar Buttons

- Icon button: visual mnemonic for a function
- Identifiers must have quick recognition
- Image on button doesn't need to teach users its purpose - just needs to be easy to distinguish from other icons in the set
- Users should help learn purpose of icons through other means

### Tooltips

- Using both text and images can take up too much screen space
- Tooltips bridge gap between two classes of users with different needs
- Adds pedagogical vector to icon buttons without he drawbacks of tesxt labeling
- Delay is important to tooltip - displays info only after the user has hovered the cursor for a second or so
- Tooltips make toolbar controls more accesible for intermediates

### Disabling Toolbar Controls

- Toolbar controls should become disabled if not applicable
- Should not be pliant
- Do not make toolbar controls disappear as users remember toolbar layouts by position

### Toolbar Control Proliferation

- As toolbars developed, controls began to reflect the state of application data
- Toolbars often now contain drop down menus  - compact way to provide powerful functionality

### Moveable Toolbars

- Moveable/Detacheable toolbars & palettes
  - Introduce potential for parts of toolbar to be obscured, but ways to get around it include expansion icon buttons and dorp down menus

### Customizable Toolbars

- Allowing advanced users to customize and configure ribbon control

### Contextual (popup) toolbars

- Small group of icon buttons adjacent to the mouse cursor
- Different dependent on object selected

### The Ribbon Control

- Oversized, horizontal, tabbed toolbar

### Tool Palette

- Differ from toolbars: set of mutually exclusive tools, which represent an operating mode of the application
  - Creation
  - Selection
  - Manipulation
- Typically dock and float
- Used mostly in graphics applications

### Sidebars, Task Panes, and Drawers

- Sidebar/task pane: Pane dedicated to provide functions that were delivered through dialog boxes
- Sidebars like properties area below a document pane or work space - lets you modify a selected object while minimizing confusion and screen excise
- Drawers: Can be stowed away or offscreen in a pop open drawer
- Alternative to drawers: Ability to hide and restore secondary panes with a keystroke

## Pointing, Selection, and Direct Manipulation