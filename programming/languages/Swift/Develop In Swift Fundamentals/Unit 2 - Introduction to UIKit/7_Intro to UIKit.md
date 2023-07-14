# 2.7 - Introduction to UIKit

- UIKit framework has pieces needed to build and manage iOS apps
  - Definitions for UI objects, event handling system, and model that allows apps to run in iOS

## Common System Views

- Foundational calss for all visual elements: UIView (view)
  - Rectangular shape that can be customized to display anything on the screen
- UIKit defines special UIView subclasses that perform tasks
  - UILabel: Displays Text
  - UIImageView: Displays image
  - UIScrollView: Put scrollable content onto the screen
- Most screens in an app consist of many views which together make up a view hierarchy
- Views are often nested: Child View vs Parent View
- To display a view onscreen, give it a frame with a size and position and add to view hierarchy
- Attributes to change in a view: Tag, BG Color, position, size, alpha
- Common UIKit Views:

- Label(UILabel): Use text to relay info to a user. Text, Font, Color, alighnment, # Lines
- Image View (UIImageView): Displays an image to the user (not the image itself). Image, Content Mode, Highlighted Image
- Text View(UITextView): Allows user to input text into the app. Accept and display multiple lines of text with support for scroll and editing
- ScrollView(UIScrollView): Scrolling pane
- Table View(UITableView): Presents data in a single scrollable column of rows and sections
- Toolbars (UIToolbar): Usually appears at bottom of screen and contains tab buttons to select a button, tool, action, etc.
- Navigation Bars (UINavigationBar): Usually the top bar of application
- Tab Bars(UITabBar): Access different views in an app. Multiple bar items with icon image and text. Usually used with a controller

## Controls

- Control tools and events such as `primaryActionTriggered` work together to respond to events

- Buttons(UIButton). Triggered on tap. Primary control event triggered when user releases button after tapping. Buttons can also execute at different stages of the tap.
- Segmented Controls (UISegmentedControl): Horizontal set of multiple segments which function as a discrete button
- UITextField - input a single line of text in an app
- UISlider
- UISwitch
- UIDatePicker

## View Controllers

- The `UIViewController` is a special class that controls a view, sets up child views, controls what they display and responds to user interaction
- Each screen in an app is represented by a scene in a storyboard, and each scene in a storyoard = subclass of `UIViewController`
- `UIVieqwController` subclass defined in a .swift file that holds the logic that controls the scene
- Each controller class has a `view` property that represents the parent view of the scene
- Each different type of screen you see in an app is managed by a different type of view controller
