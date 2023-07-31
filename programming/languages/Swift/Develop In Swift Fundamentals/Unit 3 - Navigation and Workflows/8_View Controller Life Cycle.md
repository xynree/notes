# 3.8 View Controller Life Cycle

## States

- One of several different states:
  - View not loaded
  - View appearing
  - View appeared
  - View disappearing
  - View disappeared

## View Did Load

- After view controller has been instantiated and all views have loaded

## View Event Management

- Some units of work may only be performed one time - - for these tasks, `viewDidLoad` is the best place to set these variables

- For work performed multiple times, use view event notifications --
  - viewWillAppear
  - viewDidAppear
  - viewWillDisappear
  - viewDidDisappear

- Must call the superclass at some point during implementations. Usually used on the first line

```swift
override func viewWillAppear(_ animated: Bool) {
  super.viewWillAppear(animated)
  // more code
}
```

## View Will Appear and View Did Appear

- `viewWillAppear` : Called right before view appears on the screen
- `viewDidAppear` : Called after the view appears on the screen
  - Use if work needs to be performed each time the view appears but may require more than a couple of seconds
  - Good for animation or long-running code: Fetching data

## View Will Disappear and View Did Disappear

- Called right before and then right after the view disappears from the screen
- viewWillDisappear: Saving Edits, hiding keyboard, canceling requests
- viewDidDisappear: stop view-related services
