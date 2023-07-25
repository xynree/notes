# 3.6 Segues and Navigation Controllers

- You'll need to transition between scenes and use different scenes with different view controllers to allow the user to navigate the app
- Segues help transition from one view controller to another
- Navigation controllers help manage scenes that display related content
- How to define relationships between view controllers

- Use `@IBAction` func that takes in `YUIStoryboardSegue` in a view controller to tell the builder that the scene is a valid destination for a segue

## Navigation Controllers

- Navigation controllers are best used for related view controllers, while modal segues are good for transitioning from one context to another.
- Adding a new controller - "pushing onto the stack"
- Dismissing a view controller from top of stack "popping off the stack"
- LIFO
- Every navigation controller has a root view controller

## Navigation Bar

- Every `UIViewController` has a `navigationItem` that you can use to customize its navbar

## Passing information

- Use the `prepare(for:sender)` method to set an id, destination to send info down the segue

```swift
override func prepar(for segue: UIStoryboardSegue, sender: Any?) {
  segue.destination.navigationItem.title = textField.text
}
```
