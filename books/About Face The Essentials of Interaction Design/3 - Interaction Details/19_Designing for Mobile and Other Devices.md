# 19 - Designing for Mobile and Other Devices

## Anatomy of a Mobile App

- Mobile apps are by their nature transient due to the form factor of the host device
- Information and control density on mobile screens are similar to information and control density of dialogs on a desktop

## Mobile Form Factors

- Handheld: Phones and media devices like iPod touch
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
