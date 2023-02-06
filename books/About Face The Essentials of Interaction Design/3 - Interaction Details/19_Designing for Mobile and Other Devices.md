# 19 - Designing for Mobile and Other Devices

## Anatomy of a Mobile App

- Mobile apps are by their nature transient due to the form factor of the host device
- Information and control density on mobile screens are similar to information and control density of dialogs on a desktop

## Mobile Form Factors

- Handheld: Phones and media
- Most often displayed in a scrolling vertical list, but works in grid, carousel, and swimlane layouts devices like iPod touch
- Tablets: 9/10 in diagonal screens
- Mini-tablets: Devices 7/8in

## Handheld Format Apps

- Full screen apps are standard
- Vertical stacks of UI elements
- High resolution graphics and multi-touch screens
- Carousels, swimlanes, cards are seen as mobile idioms

### Stacks

- List-like display is dictated for smartphones and handheld mobile devices
- Exception: Icons and thumbnails
- Stacks: Vertically organized sructures with a content area arranged in a list or grid, with a top/bottom bar for navigating content and accessing functions

### Screen Carousels

- Most appropriate for dashboard like display
- Interactions on a carousel occur in place on the card
- Usually have page marker widget that shows user's place in carousel content

### Orientation and Layout

- Majority of apps stick with portrait orientation even when rotated
- Photo or video capture makes sense to allow rotation to landscape orientations
  - Use iconic controls to minimize user disorientation

## Tablet Format Apps

### Stacks and Index Panes

- Usually rely on stack pattern as well
- Extra real estate also allows addition of supporting panes
- Typically: Index pane
  - Can also have navigation and functions associated
  - In portrait: Index pane typically launched from a button and overlap the main content
  - In landscape: Overlapping pane should switch to a permanent adjacent pane

### Pop-up control panels

- Pop-up panels don't overlay entire screen and replace navigations to a full screen control panel
- Can improve task flow by retaining context of background screen
  - Feels less like the user is going to a different room
- Different from dialogs: attached to a particular control

![picture 1](https://s2.loli.net/2023/01/31/FK6y2iZzQ8Xbsal.png)  

### Orientation-Based Layout

- Tablets needs to be more concerned about orientation
- Tabs, navigation and tool bars need to reorient themselves on the screen by relocating to top or sides of screen as appropriate
- More complex apps may select to support only one orientation

### Mobile vs. Desktop-Like Layout

- More of a case recently for adopting more desktop-like tool bars and panes
- Audio/video production are more suitable to desktop-like approach
- For this category:
  - Make sure that tool bar, contorl panel and menu areas have places that register taps scaled for finger use
  - Avoid drag and drop- easy to make accidentally drops
  - Popup panels should point to where they came from
  - Pay close attention to function hierarchy

### Hardware-like control layout

- Tablets can more easily mimic hardware controls
- Designers should take in account hit areas and spacing
- Allow horizontal or vertical drag gestures and also circular gestures

### Mini-tablet format apps

- Challengers for a touch based design experience
- Navigation and layout strategies for handheld/tablet format apps will usually work with some caveats:
  - Adjuacent panes: Generally not a good idea on full sized tablets in portrait orientation
  - In Landscape, at most 2 adjacent panes
  - In portrait, overlapping popups are better
  - Tool bars: Can feel distant
  - Vertical tool bars may make more sense
  - Lists: Grid, swimlane and card approaches tend to work better than single-column lists
  - Popup vs full screen: Phone sytel full screen idioms won't work: implement them as pop-up dialogs like on a full-size tablet

## Mobile Navigation, Content, and Control Idioms

### Browse Controls

- Most mobile apps are optimized for browsing
- Easier on mobile devices to browse and select content than to input data
- Rich set of patterns around browsing through content

Lists

- Most frequently used pattern for organizing content on handheld
- Tapping content item in a list drills down a level in the hierarchy
  - Sometimes may also launch a modal or popup
- Work in conjunction with tab bars to provide access to multiple screens
- Can be finite or allow infinite scrolling
  - Elegant solution as long as load time is quick

Grids

- Used to organize content into regular rows and columns
- Gallery views are often used to present media objects
- Can be challenging to understand how to navigate
- Most pages with grids as primary navigation use pageless, sometimes infinite scrolling to expose more grid objects
- In landscape orientation, grids usually scroll horizontally
- Generally no zoom in/out on grids

Content Carousels

- Live within a single screen layout but use swipe gesture to navigate between different context objects
- Often spaced so they bleed off the edge of a screen
- Proper carousels should wrap from end to beginning
- Only one carousel should be employed on screen and should take most prominent position

Swimlanes

- Mashup of carousel with grid
- Verical stack of carousels, each of which can be scrolled horizontally independant of others
- Example: Netflix
- Typically used for finite lists but can be used with infinite scroll as well
- Swimlanes should never auto-advance

Cards

- Rich media, content-centric interactions
- Self-contained interactive object combining media, tex,t web links, and social actions like commenting, sharing, tagging, and adding media
- Most often displayed in a scrolling vertical list, but works in grid, carousel, and swimlane layouts

### Navigation and Tool Bars

- Bars are primary mechanism for navigating to different functional and content areas of handheld mobile apps
- Narrow horizontal regions at top or bottom of screen consisting of tab--like or button-like controls with either icons or text labels
- Major operating systems gravitated towaard a flat visual style

Tab Bars

- Contain a set of text/icon buttons
- Tapping a tab switches to a different list or grid view in the main content area

![picture 1](https://s2.loli.net/2023/02/01/hAny5cj8OQPFMdo.png)  

More controls

- Narrow aspect ratio of most screens limits the practical num of controls in a bar to no greater than 5
- `More...` control is a tab or action bar control that gets around limited screen real estate
- Opens a full screen modal popup

TabCoursels

- Tabs are shown in tab bar as usual but extend off edges of the screen
- Selected tab is highlighted in the bar

Nav bars and action bars

- Nav bars at top of screen provide a way to navigate a list or grid hierarchy
- Back button left and title of current list grid of content screen in the center
- Usually navigation is placed at top of screen

Tool bars and PAlettes

- Tool bars contain buttons that execute functions on the current or selected content
- ios apps place action buttons on the right side of the nav bar
- Authoring or editing apps often replace bottom-of-screen tab bar with tool bars
- Tool palettes usually use icons to access tools to operate on a document. These make heavy use of popup control panels

Vertical tool bars and palettes

- Run along the left or right edge of the screen

Tool Carousels

- Popular with image processing apps
![picture 2](https://s2.loli.net/2023/02/01/FTqtpjwbi6P15K7.png)  
- Useful for taming complexity of an application

Menu Bars: Avoid in Mobile

- Desktop style menu bar interaction is not expected on a tablet
- Most of functionality is hidden in the menus
- Approach that uses both a tool bar AND a tool carousel can accomplish most of what a menu bar can do

### Drawers

- Drawers provide access to a vertical list of navigational elements, similar to tasks
- Hide in a panel that lives in a lyer under the main content area
- Also called the hamburger menu
- Slides the content area horizontally to reveal the drawer under it

Scondary-action drawers

- Can be used to replace a navigational tab bar or to interact with a secondary set of objects
- Usually slide open from the left

Double Drawers
Use both a left hand drawer for views and a right hand drawer for messages

Item-Level Drawers

- Move concept of slide-to-reveal drawers into individual ites in a list
- Sliding an item to the left or right reveals a tool bar under the item, avoiding the need for a tool bar at the top or bottom of the content area
  - Difficult for users to discover without a visual cue
  - Swiped item can be obscured when the drawer is open
  - More standard gestures may consequentailly become impossible

Drawer Behaviors to Avoid

- Limit the number of animated screen transitions

Drawer Controversy

- People claim that drawers hamper user engagement by hiding functionality
- Benefits of drawer = cleaner main interface and ability to make functions a swipe and ta paway
- Drawers work well for apps where you expect users to be constantly using many functions
- Apps that are only casually used may be best suited for tabs

### Tap-to-reveal and direct manipulation

- Main difference between mobile apps and desktop apps: Ability to use fingers to manipulate onscreen objects

Tap-to-reveal controls

- Tap an object and then the manipulation tools are revealed
- Streaming apps use tap-to-reveal for controls that are normally hidden during playback

Direct Manipulation Controls

- Some apps replace sliders and other indirect manipulation idioms with gestures on the object being edited
- Requires some discovery but quick to become seocnd nature

## Searching, Sorting and Filtering

- Key user activity on mobile apps - arguably the most important mobile activity

Implicit sorting versus explicit searching

- Mobile apps are optimized for brosing
- We can use that behavior to preempt user nead to build search queries
  - We can track the kinds of things user has viewed, like or purchased in the past
  - Use to build recommendations

Building Search Queries

- User will always need to search for something specific
- How to allow sufficient expression of search terms with minimum of data entry?
  - Voice search
    - Not always reliable
  - Auto-complete
  - Tap-ahead
    - Allow users to take auto-completed term options, load and run the query
  - Recent/Frequent Searches
    - Should also support tap ahead
  - Auto-sugest
    - Use fuzzy matching techniuqes to provide spell-corrected, controlled-vocab and synonym options in the option list
  - Categorized Suggestions
    - Can show suggestions across multiple categories

Sorting and Filtering

- Many interfaces merge sorting and filtering into a single set of controls
- Don't force users to refresh UI when choosing between the interfaces
- Place the filters button in an obvious, visible place and allow users to always see what is currently selected in the filters.

### Welcome and Help Screens

- Welcome screens provide guidance on what the important activities are in an app and how to perform them
- Help provides the same info on demand when the user requests it

Guided Tours

- A carousel of cards which contain text and images or video describing use of app functions
- Employed at first use and after a major release
- Should allow users to exit the tour from any card or screen

Overlays

- Covers entires screen with a transparent layer on which instructions employing arrows to indicate gestures or controls are displayed
- Tapping screen dismisses the overlay

Tooltip Overlays

- Tooltip-like display of all primary functions on a single overlay screen
- Used often in context of complex authoring apps
- Best used not as a welcome but instead a help screen

### Multi-Touch Gestures

Tap to Select, Activate or Toggle

- Tap is used to select objects and toggle the activation state of controls
- Tapped items should get a selection highlight or activation/deactivation state or animation

Tap-and-hold

- Falling out of favor - typically used to open a contextual pop-up menu
- Not very discoverable
- Instead, use a visible menu control on the object

Drag to Scroll

- Fundamental direct manipulation gesture
- Can be used to scroll lists or reorder objects in a list
- Horizontal dragging can scroll a carousel or swimlane or open a drawer

Drag to Move

- Dragging can be used to move or copy an object from one list, pane or container to another, or to move object within a canvas or grid

Drag to Control

- Can also be used to control knobs, switches, sliders, and contextual touch controls

Swipe up/down

- USually synonymous with dragging up
- Swiping a list or grid up causes it to continue scrolling with some momentum

Swipe Left

- Synonmous with dragging left
- Can also open a right hand drawer or close a left handd rawer
  
Swipe Right

- Safari uses this to navigate like the back button
- Chrome uses a swipe right to delete browser tabs in edit mode

Pinch in/out

- Used to shrink or zoom objects physically
- Or can use a semantic zoom: zoom out or up one level in the hierarchy in a set of nested structures

Rotate

- Can be used to actuate knob controls, but knobs should also support drag actions
- Also used to rotate objects like a selection of pixels
- A bit akward to carry out

Multifinger Swipe

- Not very discoverable and may interfere with OS-level gestures
- Best left unused or reserved for special needs.

### Inter-App Integration

- Standalone apps do not always foster integration of functionality and data between their ecosystem
- Some apps like IFTTT allow apps to be wired together with customizable rules

### Other Devices

- Interaction for device-embedded interfaces requires special attention to create an experience that coexists with activity of real world happening around the product

General Design Principles

- Examples: smart appliances and medical informatics
- Basic principles:
  - Dont' think of product as a computer
  - Integrate hardware and software design
  - Let context driv ethe design
  - Use modes sparingly
  - Limit the scope
  - Balance naivation with display density
  - Minimize input complexity

Don't Think Of Your Product As a Computer

- USers will approach your product with specific expectations about what the product can do, or with very few expectations
- Don't bring the baggage of the computer to a simpler device like a camera or oven
- Designers can easily forget that they are not designing software for computers
  - Most assumptions are not valid for embedded devices
- Idioms that are accepted on a PC are inappropriate for embedded devices

Integrate Hardware and Software Design

- Embedded systems often benefit from custom hardware
- Hardware based navigation and input must often take the place of onscreen equivalents
- Hardware and software need to combine to create a compelling experience

Let Context Drive the Design

- Embedded systems are often used in a particular context that pose specific restraints
  - Ex: car navigation controls
- Design of embedded systems must match context of use

Use Modes Judiciously

- Users are easily confused by modal behavior
- Devices have smaller displays and limited input
- Changing modes is hard
- Limit the number of modes - they should result naturally from situational changes in context
  - Ex; when calls are received vs calls turminated

Limit the Scope

- Avoid temptation to turn systems into general purpose computers
- Many devices share info with desktop systems. Approach the design of these as satellites of the desktop

Balance Navigation with Display Density

- Every pixel is significant in design of display-constrained embedded systems
- Tradeoff between clariy of info and complexity of navigation
- Flatten info hierarchy if possible
- If not, develop a simple hierarchy of information

Minimize input complexity

- Most embedded systems have simplified inputs, meaning that input is slow and difficult for users
- Public kiosks also are a disease vector
- Virtual keys should be large
- Avoid idioms that involve dragging

Designing for Single-PUrpose Handheld Devices

- think about how the device will be held and carried
- Determine whether device will support one handed or two handed operation
- Avoid pluralized and pop=up windows

### Designing for Kiosks

- Infrequent users with a specific goal in mind or no goal at all
- No access to keyboards or mice
- Public environment full  of noise
- May be used in tandem

Transaction versus Exploration

- 2 catgories of kiosk: transactional and explorational
- Transactional: tightly scoped transaction or service
  - ATM, ticketing machines, gas pumps
- Explorational
  - Found in museums or info display at a mall
  - Provide additional information and a richer UX for people who come to see ehibits
  - Interface should be pleasing and easy to navigate

Interaction in a Public Environment

- Need to be placed in an optimal location
- Think about account security issues
- How many kiosks to install? Depends on context
- Consider use of sound and design for differently abled people

Managing Input

- Make sure click targets are large enough
  - 20mm click target is the typical minimum
  - Should be increased when in a rush
  - Use soft-keyboard input sparingly
  - Avoid drag and drop

Designing for 10-foot interfaces

- TV based interfaces are often 10 foot interfaces
- Lists, grids, carousels and swimlanes map well to 10 foot interfaces
- Text and navigable content needs to be displayed in a larger size
- Keep onscreen navigation simple
- Keep control integration in mind
- Remotes should be as simple as possible
- Focus on user goals and activities, not product functions

Designing for Automotive Interfaces

- Minimize time user hands are off the wheel
- Enfoce consistent layout froms screen to screen
- Use direct control mapping
- Choose input mechanism carefully
- Differentiate physical design of controls clearly so they can be managed by touch
- Use strong contrasts in visual design of displays and shallow visual hierarchy
- Mode switching should be simple and predictable
- Provide audible feedback

Designing for Audible Interfaces

- Navigation is critical because it is easy to get lost in a tree of functionality with no means of visualization
- Organize and name functions according to mental models
- Always signpost currently available functions
- Provide a way to go back one step and return to top level
- Always provide a means to speak to a human
- Give user enough to respond
