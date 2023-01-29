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

- Objects on screens can be manipulated directly through a `pointing device`
- Fingers are too blunt to be precise
- Most desktop screens can't recognize ointing
- Mouse is a version of a pointing device that is "relative" (moves based on current cursor position)

### Mouse Ergonomics

- Distinct dividing line between near and far motions
- Near: keep heel of hand stationary
- Far: Must pick up your hand
- When heel of hand is down, you use fine motor skills of finger muscles
- When heel of hand is lifted, use gross motor skills of arm
- Transitioning between gross/fine motor skills is hard
- Don't force users to make the switch continually
- Clicking a mouse also requires fine motor control
- Pay attention to user aptitude, skill and context to make decisions about how much motor work using an interface should require
  - Reducing complexity/user effort vs. providing useful and powerful tools
  - It's a good idea for things to be used together to be placed together
- Switching from keyboard to mouse and back is worse
- Applications should fully support both mouse and keyboard for navigation and selection tasks
- Each mouse idiom should have a non-mouse alternative

### Mouse Button and Controls

Left Mouse Button

- Used for all primary direct-manipulation functions

Right Mouse Button

- OFten treated as nonexistent
- Apple uses to enable direct access to context-specific properties in menus

Scroll Wheels and Scroll Balls

- Avoid dealing with the challenges of scrollbars

Modifier Keys

- Ctrl, Alt, Command, Shift
- Commonly used to modify commands
- Cursor hinting to show meanings of modifier keys for non-text related functions
- When modifier pressed, hint should change to reflect new function

Pointing

- Objects that can be manipulated often should change appearance subtly to indicate this attriburte when hovered (pliancy)

Clicking

- Defined to trigger a state change or control state
- If user moves cursor off control while still holding down the mouse button, the push button should return to unpushed state , but focus remain on control
- When user releases mouse button somewhere off the button, nothing should happen
- This is a form of an escape route

Point-and-click Combinations

- Most users will perform: point, click, right clikc, click and drag, double click
- But most users will not perform: double drag, chord click

Clicking and Dragging

- Common uses include selecting, reshaping, repositioning, drawing, drag and drop
- Good to have an escape hatch here as well
- Click and dragging on trackpad is not ideal
- Drag actions on tablets aren't as good as mouse drag

Double-clicking

- Double clicking most controls has no meaning, and extra click is usually discarded, or sometimes it is seen as a second click (toggle)
- Should be avoided where a single click would work

Chord-Clicking

- Clicking two buttons simultaneously
- Second mouse button must be clicked berfore the first mouse button is releaed
- Clumsy and not often used, though sometimes used as subsitute for Shift key on select
- Chord clicking is sometimes used to cancel a drag

Double-clicking and Dragging

- Only in special sovereign applications
- For most products, stick with more basic mouse actions

Mouse-up and Mouse-down Events

- Mouse-down over object or data should select the data
- Actions should be consistent within a product and platform
- When object is selected, selection should take place on mouse-down
- If cursor is positioned over a control, action on mouse-down state should be to tentatively activate a transition

## Trackpads, trackballs, and gesture Sensors

- Often used in meetings, coffee shops, kitchen tables, bed
- More prone to glitchy behavior than mice
- Also for laptops
- Gestures on trackpad shouldn't interfere with OS gestures without reason

## Cursors

- Hotspot: Single pixel of any cursor that is the actual locus of pointing
- Usually the tip of hte arrow
- All cursors have a single hotspot pixel
- Mouse Cursor Hinting is important for effective interaction idioms

## Selection

- Usually accomplished by pointing to and clicking item in question
- Also used for more complex interactions
- After user chooses something, in the right context to perform actions on that thing
- Sequence of events implied by this idiom: `Object Verb Ordering`

Command Ordering and Selection

- Most commnads have a verb that describe an action and an object that describes what will be acted on
- Consistent with how commands are formed in English
- Users can select which objects to be operated on and then indicate which verb to execute on them
- Selection is used commonly in nonlinguistic actions
- Object-verb ordering is more consistent with direct manipulation
- There are cases where verb-object can work better

Discrete and Contiguous Selection

- One case: data representec by visual objects that can be mainpulated independently of other objects
  - Ex: Icons on desktop and vector objects in drawing apps
  - Discrete data / Discrete selection
- Another case: Representing data as a matrix of many samll contiguous pieces of data
  - Ex: text in a word processor
  - Contiguous data / contiguous selection
- Both types support single-clikc and click-and drag

Mutual Exclusion

- typically when a selection is made, any previous selection is unmade
- Objects remain selected until the user selects something else
- Some applications allow deselct by clicking a second time

Additive Selection

- If no mutual exclusion for interactions, user can select manyu independent objects by clicking them sequentially
- Shift key is used frequently for this task in contiguous selection, Ctrl for discrete selection
- Contiguous interfaces should not use additive selection.

Group Selection

- Click and drag operation is the basis for group selection
- For contigous data: Extend selection from the mouse-down point to the mouse-up point
- For discrete objects, click+drag operation begins a drag+drop move
- Clicking between objects will create a drag rectangle

Visual Indication of Selection

- Selected objects must be clearly,boldly indicated.
- Should be easy to spot on a crowded screen & unambiguous
- Shouldn't obscure normally visible details of an object
- Inversion commmonly used to indicate selection, but this can be difficult to read
  - Other approaches: colored backgrounds, outlines, 3D depression, handles, marquees
- In drawing applications, easy for selections to get lost
- Add selection indicators to an object
  - Many drawing applications use handles to surround selected object and provide points of control
- Another way to ensure visiblity: Indicate selection by movement
- MacPaint: selected objects outlined with a dashed line, all dashes move around selected object: Marching ants
  - Today this is called a marquee

### Insertion and Replacement

- Discrete selection:
- Incoming data is handed to the selected discrete objects
- Replacement action: Incoming data replaces selected object

- Contiguous selection:
  - Incoming data replaces currently selected data
  - Selecting between two elements of data = insertion point
  - In word processors, this is the `caret`

### Drag and Drop

- Drag and drop not used as widely as thought, and hasn't lived up to full potential
- Clicking and ojbect and moving it to a new location, implying a transformation
- Drag and drop has 2 levels of directness: represents putting object somewhere, and user drags object to specific area or onto another object to perform a function

Visual Feedback for Drag and Drop

- Interface should hint at its pliancy
- The idea that an object can be dragged is easily learned idiomatically
- User may forget details of the action, so feedback is importand after user clicks object and starts dragging
- Meaningful drop targets should be obvious (drop candidates)
- Drop candidate should visually hint when hotspot of cursor is over it to show that it will indicate their drop
  - Should not indicate using cursor but instead the drop target itself
- Not permitted = unpleasant idiom
- After drop is performed, the current drop cadidate should become the target
- If released in an invalid location, drag and drop should end with no action. Should use visual inactivity to show this

Indicating Drag Pliancy

- Cursor changing can be distracting
- Consider building indications into the interface, such as through text or a tooltip
- Should be indication of drag operation beginning after the source3 object is picked up
  - Fully animate the drag operation, showing the object moving in real time
  - Dragging a transparent outline or thumbnail of object may be better to prevent obscuring the cursor
  - Also useful for repositioning, because outline can be moved relative to the source object

Indicating Drop Candidacy

- Visually change the drop candidates to alert users that they can do something with the dropped object
- One option is to only show possible drop candidates when in the drag operation and nothing else

Insertion Targets

- Source objects can be dropped in spaces between other objects
- Special type of visual hinting displays behind the GUI objects in the contiguous data: `insertion target`
  - Ex: vertical black bar appears to show where something will be inserted
- When something can be drag and dropped between other objects, application should show an insertion target

Visual Feedback at Completion

- When source object is dropped, should provide feedback that an operation has ocurred
  - If dragging from one directory to other, source object must disappear from source and reapppear in target
  - If target represents a function, icon must hint that it received the drop and is now operating
  - Can do this with animation or by changing visual state in other ways

Auto-Scrolling

- What should happen when selected objects are dragged beyondt he border?
- App must automatically scroll in the direction of the drag if the user wishes to place the object somewhere else in the application
- Wherever drop targets could possible be scrolled offscreen, the app should auto-scroll
- Begin autoscrolling just inside of the app border instead of outscide the border
- Variable auto-scroll rate: Auto scrolling increases ins peed as cursor gets closer to the window edge
- Should have a time delay: Auto scroll should only begin after drag cursor h as been in the auto-scroll zone for about a half second
- If a user drags outside of scrollable window, no auto-scrollign should occur

Avoiding drag-and-drop Twitchiness

- If an object can be either selected or dragged, mouse should bias twoards select
- There should be a bounce and debounce time to ignore extra transistions if they occur soon after the first one
- Drag Threshold: mouse events should be ignored until mouse movement exceeds a small threshold
  - This avoids inadvertent drag and drop
- We can vary the drag thresholds for more unlikely actions

Fine Scrolling

- Idiom to click a modifier in which 10 px of mouse movement are interpreted as a single pixel of object movement "vernier"
- You can also make the arrow keys active during a drag operation - holding rrow keys will move selection 1 pixel at a time
- On activating the vernier, desenstiize the mouse

### Control Manipulation
