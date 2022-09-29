# 12 - Reducing Work and Eliminating Excise

- Digital products often have top-heavy interactions: unecessary work for users
- Goal of designers: Minimize user work while enabling users to achieve goals
- Pay attention to human actions required to operate technology
- Result: Taxing experience for users

- 4 Types of Work when Interacting with digital products
  - Cognitive Work: Comprehending Product Behaviors
  - Memory Work: Recalling product behaviors - passwords, names, location of controls, other relationships
  - Visual Work: Figuring out where eyes hould start on screen, finding one object among many, decoidng layouts
  - Physical work: Keystrokes, movements, gestures

## Goal-Directed Tasks versus Excise Tasks

- Excise Tasks: Don't contribute directly to reaching goal: represent extra work that satisfies needs of our tools or outside agents
  
## Types of Excise

### Navigational Excise

- Poorly designed navigation = most common usability problems
- Navigation occurs at multiple places:
  - Across multiple windows/pages
  - Across multiple panes or frames within a window/view/page
  - Across tools, commands, menus
  - Within information displayed in a pane or frame
- Any action that takes the user toa new part of interface or requries him to locate objects, tools, or data elsewhere

- Navigation across Multiple Screens, Views, Pages
  - Most disoreienting kind of navigation
  - Means contents of original window are obscured
  - Moving between too many windows = navigational trauma (gets lost!)
    - Sovereign posture applications avoid this by placing all main interactions in a single primary view
- Navigation Between Panes
  - Adjacent Panes can solve navigation problems by providing useful supporting functions
  - Problems = adjancent panes are too numerous or do not match user work flows
  - Forces scrolling
  - Tabbed Panes = some navigational excise and disoreintation but appropriate for main work area when multiple docs or views of a doc are required
    - Some use tabs to break product capabilities into smaller chunks: but putting them into panes increases excise and decreases orientation
    - Create excise - Hard to name correctly and so needs to be clicked through
- Navigation Between Tools and Menus
  - Need to use different tools, palettes, functions
    - Tools used in conjunction should be grouped spatially
  - Menus require more navigational effort
- Navigation of Information
  - Information navigated with scrolling, linking, zooming
    - Scrolling
      - Often necessity but should be minimied.
      - Trade-off between paging and scrolling: Understand users' mental models and work flows
      - 2d visualization apps benefit from a thumbnail map
    - Linking
      - Visually dislocating, critical navigational web paradigm
    - Zooming/Panning
      - Navigational tools for exploring 2D/3D iinfo
      - Falls short when used to examine arbitrary or abstract data
      - Works great for attributes associated with spatial data
      - Humans have difficulty perceiving 3D properly in a 2D screen

### Skeumorphic Exercise

- Mechcal representations shouldn't be translated verbatim into digital world
- Mechanical procedures are easier to perform by hand than with digital
- Lose subtle visual and tactile clues
- Visual metaphors make it easy to understand relationships, but then managing metaphor becomes excise

### Modal Excise

- Interrupting user's flow for no reason is very disruptive
- Errors,notifiers, vonfimration messages
  - Error message/confirmation message dialogs
![picture 1](https://s2.loli.net/2022/09/30/U14CFXsZKmw9TSd.png)  
- Making Users Ask permission is pure excise
  - This follows implementation model (Input/Output Different PRocesses)
  
### Stylistic Excise

- It takes work to visually decode onscreen information
- Overly styled graphics and interface elements can create mood and reinforce brand, but shouldn't do it at expense of utility

![picture 2](https://s2.loli.net/2022/09/30/cJ8MTGXwx5gPDvI.png)  

## Excise is Contextual

- An action is excise if it is forced on user rather than made available for them as needed
- May vary by software posture
- However, some types of actions are always excise: Most hardware-management tasks

## Eliminating Excise

### Reduce the Number of Places To Go

- If number of modes is kept to minimum, orientation increases dramatically
  - One full-screen window with two or three views is the best for many usrs
  - Keep dialogs to a minimum
  - Apps,websites, and mobile apps with dozens of distinct types of pages, screens, forms are difficult to navigate
- Limit the number of adjacent panes in interface to minimum number needed for users to achieve their goals
- Limit the number of controls to as few as users really need to meet their goals
- Minimize scrolling when possible

### Provide Signposts

- Better points of reference: persistent objects (application windows): Top level Windows, persistent menu bars, toolbars, status bars, etc. Each window should have a distinctive look that will be recognizable
  - In hardware, controls themselves take role of signposts
- Should be permanent fixtures of interface
- Different "rooms" of your page should still be distinctive
- Menus: Main Window and title/menu bars is the most prominent permanent object in a desktop app
- Toolbars: Should be considered a recognizable signpost: idiom for perpetual intermediates
- Other Interface Signposts: Tool palettes, fixed area of screen where data is displayed or edited
- Overviews: Help orient users within the content (not application as a whole). Overview area should be persistent but content dependent on data being navigated
  - Most ubiquitous = breadcrumb
  - Annotated Scroollbar (good for scrolling through text)

### Properly Map Controls to Functions

- Mapping = relationship between a control and result
- Poor maping = control does not relate visually, spatially or symbolically to the object it affects
  - Requires users to stop and think about relationship, breaking flow
  - Increases cognitive Load

![picture 3](https://s2.loli.net/2022/09/30/EGoqUgsSxiBJKeP.png)  

### Avoid Hierarchies

- Most data "comes" in hierarchical form, so devs present hierarchies in user interfaces
- Difficult for users to successfully navigate
- Not natural concepts when it comes to storing and retrieving arbitrary information
- Most natural organization is 1 level deep: Monocline Grouping
- Devs are comfortable with nested systems, but most humans have a difficult time with this idea
- Pile Cabinet: A series of stacks or piles based on some common Characteristic
- Implementation Model of hierarchical structures is confusing to users because it conflicts with mental model of storage systems
  - Most people use monocline grouping as their point of reference
- Is useful as a represented model: Render structure s user imagines it
- Provide search and access tools that only deep hierarchical organizations can offer
- Give them tools to bring appropriate information to themselves

### Don't replicate Mechanical-Age Models

- Why do designers copy mechanical calendar atifacts faithfully?
- Significant change must be significantly better
- Inform assumptions about product use with analysis of user goals in order to remove excise actions

## Other Common Excise Traps

![picture 4](https://s2.loli.net/2022/09/30/YyriAHVx27p5ULj.png)  
