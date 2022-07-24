# Swift Essentials (SwiftUI Tutorials)

1 - Creating and Combining Views
------
#1: Create a New Project & Explore the Canvas

- Structure of a SwiftUI app conforms to protocol:
    - body returns scenes w/ content
    - @main attribute identifies entry point
- SwiftUI View files declare 2 structs:
    - 1: View protocol (describes content + layout)
    - 2: Declares a preview for the view

#2: Customize the Text View

- Customize a view's display by changing code/using inspector
- Inspecotr: CMD+click: show SwiftUI Inspector
    - can change attributes, code updates to reflect any changes

#3: Combine Views Using Stacks

- Each SwiftUI view body only returns a single view
- Combine/embed views into Stacks
- You can add elements using "Library" (+ symbol upper right)
- Edit initializers to change properies (alignment, spacing, etc)
    - VStack, HStack to place view in a flex container
- Spacer() expands to make containing view use all of the space of its parent

#4: Create a Custom Image View

- can drag images into Asset Editor, initialize images in code with Image("name")
    - add attributes: .clipShape(Circle()) for a circle mask

#5: Use SwiftUI Views From Other Frameworks

- import statement: import MapKit
- Private State Variable: @State establishes source of truth for data
    - Swift automatically updates views that depend on the value
- prefix state variables with $
- for non-native Swift views use live preview mode

#6: Compose the Detail View

- padding() and Spacer() to push and pull things 
- ignoreSafeArea to extend areas to the full length of screen
- can add modifiers to Stacks (.font(subheader)) to apply to everything in the stack


# Create a Landmark Model:
    - Building a struct for a landmark:
    - Model after a JSON document, adjust public and private variables depending on what you want to expose to user
    - make array initialized with landmarks from a file

