# 9 - Platform and Posture

- platform: combination of hardware and software enabling function
- posture: behavioral stance: how it presents itself to users

## Product Platforms

- Common platforms:
  - Desktop
  - Websites/Web apps
  - Mobile devices
  - Kiosks
  - In-vehicle systems
  - Profressional devices
- Shorthand to describe important product features

## Product Postures

- Software applications should have a specific presentation that matches with their purpose
- Look and behavior should reflect how it is used rather than personal taste of designers, developers or stakeholders
- Look and feel is a behavioral choice

## Postures for the Desktop

### Sovereign Posture

- Monopolize Users' attention for long, continous periods of time
- Word Processors, Spreadsheets, Email applications
- Usually used maximaized

_Target Intermediate Users_

- Users are interested in progressing up learning curve to become intermediate users
- Optimized for use by intermediates
- If possible, satisfy infrequent users as well

_Be Generous with Screen Real Estate_

- Take up as much real estate as possible. No other app competing with yours
- Usually run maximized
- Needs to be fully resizeable but optimized for full-screen

_Minimum Visual Style_

- Take care to mute colors and textures of visual presentation
- Narrow and conservative color palette with small accents

_Provide rich visual feedback_

- Can productively add extra information to interface - status bars, title bar, indicators, hints for action.
  - Do not clutter up
- After a period of steady use, artifacts will start to get use. Richness adds to experience

_Support rich input_

- Keyboard shortcuts, direct manipulation, sensitive areas can be small.
- Use corners and edges for controls

_Design for Documents_

- Maximize document views within the application
- Child windows with documents should always be maximized unless user instructs otherwise
- Sovereigh apps create and view documents with rich data. If there is only a single, simple function, it has `Transient` posture

### Transient Posture

- Comes and goes, presenting a single function with a constrained set of controls
- Invoked when needed, appears, performs its job, then leaves, letting user continue normal activities
- Temporary nature
- UI should be obvious and helpful, controls clear and bold

_Make it Bright and Clear_

- Controls should be larger than those on sovereign app
- Should have instructions built into the surface
- May be seen infrequently and will forget meanings and implications of choices presented

_Keep it Simple_

- Keep user's attention on the window
- Don't force into supporting subwindows
- If transient app performs more than a single function, interface should communicate this unambiguously

_Remember User Choices_

- Use most recent size and placement in all applications

### Daemonic Posture

- Apps that normally do not interact with the user
- Serve quietly in the background. Manage processes
- Hiding/Showing daemonic icons when not needed / using control panels

## Postures For the Web

- Three basic categories: informational, transactional, web app

### Informational Websites

- Way to view shared and linked documents
- Ssequential/hierarchical sets of documents
- Consist of a navigation model to take users from one page to another plus search
- Exist today in the form of personal sites, marketing, support, and information centric
  - Wikipedia
- Biggest issue: Findability

- Balancing Sovereign and Transient
  - Purely informational sites must balance two forces:
    - Need to display reasonable density of useful information
    - Need to allow first-time and infrequent users to learn and navigate site easily
- Which stance is more dominant depends on who target personas are and what their behavior patterns are
- Real time data naturally attracts repeat users more (sovereign)
- Infrequently updated sites (transient)

- Sovereign Attributes
- Detailed info displayed best with sovereign stance, but must choose proper resolution
- Optimize design for most common display sizes used by personas

- Transient Attributes
- Less frequently used = more transient stance
- Ease and clarity of navigation/orientation important
- Enable users to bookmark
- Helpful whenm sites retain info about users
  - Mobile web access more transient

### Transactional Website Posture

- Ex: online storefronts, financial service sites
- Hierarchical page-based
- Pages have functional elements with complex behaviors
- Many transactional sites have significant informational aspect
- Transient aspects = make sure users don't navigate more than necessary (confusion/click fatigure)
- Requires attention to information architecture for content and page organization
- Must effectively communicate brand attributes

### Web Application Posture

- Heavily interactive, similar to robust desktop applications
- Examples: Google Docs, Facebook, Hulu, Flickr
- Chan be chasllenging designing interactions across browsers and browser versions

_Sovereign Web Applications_

- Deliver info and functionality in a way that supports more complex human activies
- Rich/interactive UI
- should be full screen, densely populated
- Users should feel they are in an environment, not navigating from page to page or place to place
- Redrawing/re-rendering minimized
- Treat them like desktop applications - break out of page-oriented models of interaction

_Transient Web Applications_

- Gives user better access to occasional info and functionality without installs
- Provide clear orientation and navigation

## Mobile Posture

_Satellite Posture_

- Handheld devices designed as satellites of desktop systems
- Emphasizes retrieving and viewing data'
- Less common than convergence handheld

_Standalone Posture_

- full-screen and functional
- Standalone apps make less use of and with larger controls and text
- Need to be self-explanatory

_Tablet device Posture_

- Enough screen real estate to support sovereign-posture apps
- Tablets often enforce full screen
- Similar to desktop but are more sparse and simplified

## Posture for other Platforms

_Kiosk_

- For wayfinding, purchasing, checking in, sellf checkout
- Often first time users and not daily, not conmfortably seated with good liking
- Kiosks biased towards transient posture
- Contextural orientation and navigation more important than global navigation
- Help users understand where they are in their process
- Provide scape hatches

_Ten-foot Interface_

- Televisiona nd console gaming: replace screen and swipe with D pad interactions
- Need a "current focus" UI

_Automotive_

- Resemble kiosks
- Must be minimally distracting but should be availalbe for focused use by a passanger
- Transient entertainment, /HVAC, settings, etc.
- Navigation interface can be more sovereign
- Rich/dynamic content like mapping and current route
  - - Must be clear, readable at a glance

_Smart Appliances_

- Simple siplays and rely on hardware - however "smart" appliances with LCD and rich output exist
- Transient-posture interfaces
- Status info as daemonic icons

## Summary

- Remember that the top level patterns of posture/platform should be among the first decisions makde in the design.
- Take a step back and consider what platform/posture will best meet needs of users and business.
