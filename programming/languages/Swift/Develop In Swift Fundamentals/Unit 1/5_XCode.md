# 1.5 - XCode

## XCode Interface

- 1: Editor Area (Main Area)
  - Where you write your code and build UI
  - Minimap used to navigate source code quickly
  - Jump bar: Related items, breadcrumbs, adjust editor, add new tab
- 2: Toolbar Area (Top Toolbar)
  - Build and Run: Verifies and executes code
  - Stop: Stops app from running
  - Active Scheme: Choose which app environment to run
  - Code Review: Source Control
  - Toggles for View
  - Library: Opens library of available objects dependant on what kind of file is open
- 3: Navigator Area (Left Sidebar)
  - Project navigator: Lists files associated with project
  - Source Control
  - Symbol: All data types defined
  - Find
  - Issue: Warnings/Build errors
  - Tests: Lists all written tests for application
  - Debug
  - Breakpoints
  - Reports: Build logs
- 4: Debug area (Bottom pane)
  - Left: Active variables
  - Right: console pane
- 5: Inspector Area (Right bar)
  - Context sensitive info, can also be used to adjust interface with Interface Builder

## Xcode File Types

- Click blue top level xcode link to open `.xcodeproj` file - has settings for project and targets
- You can change details of a particular target: version of iOs, what devices to run on, etc
- Signing and Capabilities: configure code signing (required for deployment to devices/app store)
  - Can add diferent features to target by adding capabilities
- `.swift` : Swift code. XCode gathers up all these files nad runs them through the compiler on build.
- `.storyboard`: Unique to Interface Builder. Info about design of each scene within your app and how they transition between each other
- `.xcassets`: Asset Catalog: Manages different types of assets: Icon, images, color definitions, etc.
- `Info.plist`: Properties and ssettings for your app. Can be adjusted through the `.xcodeproj` file for the most part

## Xcode Preferences

- To customize your dev environment
- Shortcut is defaulted to `cmd ,` but adjusted to match VSCode as `Shift cmd p`
