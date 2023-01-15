# 17 - Integrating Visual Design

## Visual Art and Visual Design

- Have different purposes
  - Visual Art: Self-expression
  - Designers: Clear Communication
  
## The Elements of Visual Interface Design

- Concerned with treatment and arrangent of visual elements to communicate behavior and information
  - Every element has properties:
  - Capitalizes on ability to differentiate between objects by distinct visual appearance: creates richer meanings
- Content: Every design guideline is subject to context in which it is being used
- Shape: Primary way we recognize what an object is
  - Tend to recognize objects by outlines
  - Distinguishing shapes takes a higher level of attention
  - Not best property to contrast when purpose is for user attention
- Size
  - How big or small in relation to other items?
  - Size is an ordered and quantitative variable: automatically sequenced in terms of sizes and assigned quantities to those differences
    - We assume importance increases with size and weight
  - When something is very small or very large, can be difficult to deicpher other variable such as shape
- Color: Need to first take in account user goals, environment, content, and brand
- Value: How light or dark? Can be dissociative
  - People perceive value ocntrast quickly and easily
  - Also an ordered variable
- Hue: Multilayered associations by context
  - Should use a limited number of hues for an effective visual system
  - Don't forget about color blindness
- Saturation: Draws attention when there is strong contrast at play
  - Quantitative: greater saturation couples with higher vallues
  - Can be read as "loud" and cacophonous
- HSV in Combination: Be judicious in how contrast is used within these variables as well as how they relate across a palette
- Orientation: Up, down, sideways?
  - Useful when there is directional info to convey
  - Can be difficult to perceive with small sizes
  - Best as a secondary communication vector
- Texture: Rough/Smooth? Regular/uneven?
  - Not good for conveying differences or calling attention
  - Ridges of bumps on UI generally mean that it's draggable, and bevel or drop shadow makes buttons seem moe clickable
  - Small amounts of texture can even make minimalist design more learnable
- Position: relation to other elements in space
  - ORdered and quantitative
  - Leverage reading order to locate elements sequentially
    - Most important or first used elements in the top left
- Text and Typography
  - Critical components
  - Be careful to use text appropriately, because it has potentional to confuse/complicate
  - People recognize words primarily by shapes
    - All caps is harder to read than cased text
  - Recognizing words is also different from reading:
    - Reading is ok for content, but not okay for interfaces
    - Interfaces should minimize amount of text that must be read
- Design principle: Visually show what, textually tell which
  - Use high-contrast text (80%+)
  - appropriate typeface and size: crisp sans serif is best for readibility
  - Do not use type sizes < 10
  - Phrase text succintly
- Information Hierarchy
  - For transient apps, info hierarchy should be very apparent with strong contrasts between the levels of importance
  - For sovereign apps, info hierarchy can be more subtle

## Visual Interface Design Principles

- Visual interfaces should:
  - Convey a tone / communicate brand
  - Lead users through the visual hierarchy
  - Provide visual structure and flow at each level of organization
  - Signal what users can do on a screen
  - Respond to commands
  - Draw attention to imporatnat events
  - Build a cohesive visual sytem for consistency across experience
  - Minimize the amount of visual work
  - Keep it simple

### Convey a Tone/Communicate a Brand

- Effective interfaces should embody the brand promise of its product lines
- Understand what the brand promise is before ndertaking the design onf an interface
- Experience attributes: Collection of adjectives that describe how any interaction through a product/service should feel
  - "Word cloud" used
  - Attributes act as guidelines for the interface design
  - Can be used to guide between functionally similar dsigns
- Sometimes attributes express tension between words
  - Style studies can optijmize for one or two of the experience attributes

### Lead users Through the Visual Hierarchy

- Determine which controls and data users need to understand instantly, which are secondary, and which are used only sometimes
- Use the basic visual elements to distinguish levels of hierarchy
- Important eleemnts can be larger, have greater contrast and/or alue in relation to background, or be positioned and indented in relation to other items
- Use restraint: varying just oneof these properties can do the trick
- Turn down the less important ones competing for attention, rather than turn up the more important
  - Leaves more headroom to emphasize critical elements

### Establish Relationships

- Determine which elements have similar functions and which are used together most often
- Elements that tend to be used together generally should be grouped `spatially` and pehaps `sequentially` to reinforce conceptual relationships and minimize mouse movement
- Elements that have similar functions may be grouped visually if not spatially
- Proximity to each other signifies relation
- You can adjust this subtly by using differences in proximity

### Proivde visual structure and flow at each level of organization

- Interfaces composed of visual/behavioral elements which are used in groups -> grouped into panes -> grouped into screesn, views, pages
- Grouping can be accomplished through spacing or shared visual properties
- Sovereign apps may have many levels of structure
- Maintain a clear visual structure so that users can eaisly navigate from one part of interface to another

### Align to a Grid

- Grouped elements should be aligned both horizontally and vertically
- In general, every element on screen should be aligned with as man other elements as possible
- Take care to:
  - Align labels: Labels for vertical controls should be aligned with each other. Left justifcation is easier to scan than right
  - Align within a set of controls: Related group of check boxes, radios, or text fields should bea ligned according to a grid
  - Align across control groups and panes: Groups of controls and screen elements should all follow same grid whenever possible
- Grid systems provide a uniform structure to layout
- Important for interfaces with several levels of visual or functional complexity
- Grid structures should emphasize top level elements and provide room for lower level or less important controls
- Well designed grid employs an `atomic grid unit` representing the smallest spacing between elements
  - If atomic unit is 4 px, spacing between screen elements and groups will all be in multiples of 4 pixels
- Ideally, grid should have consistent relationships between different-sized screen areas expressed as ratios
  - Golden section 1.61
  - Square root of 2: 1:1.14
  - 4:3 aspect ratio of computer
- Good grids are modular: flexible enough to handle variation
- Be decisive in a layout: Adjust the layout so that it is an exact fraction of a screen. Make proportions bold, crisp, and exact
- Benefits of grid system
  - Usability: Quickly learn where to find key interface elements
  - Aesthetic appeal
  - Design will create a sense of order that feels comfortable to users
  - Efficiency: Standardizing layouts reduces the amount of labor required to produce a high-quality interface
