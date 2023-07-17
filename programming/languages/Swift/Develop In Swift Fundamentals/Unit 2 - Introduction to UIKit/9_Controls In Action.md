# 2.9 - Controls in Action

- Use control-drag to add an IBAction from the button to the view controller
- Usually actions are placed under the `viewDidLoad` block

## Button

- Default control event: "Touch Up inside" : Executes when user taps and releases the touch from within bounds of the button
- When you create an `IBAction` the func is passed to the sender as a param
- Sender: Control that triggered the action

## Switches

- Used to toggle a single option - can use an `IBAction` to execute when a switch is toggled one way or another, or can check toggle by accessing `isOn` value from `sender`

## Sliders

- Allow user to have smooth control over a value

## Text Field

- Can add an IBAction using `Primary Action Triggered` event
- Or can use the `Editing Changed` control event to update when text changes

## Actions and Outlets

- You can create outlets that allow actions to access props even if the view or control isn't the csender
- Use `IBOutlet` to expose variables

```swift
@IBOutlet var toggle: UISwitch!
@IBOutlet var slider: UISlider!

@IBCAction func buttonTaped(_ sender: UIButton) {
  if toggle.isOn {
    print ("Switch on")
  } else {
    print ("Switch off")
  }
}
```

## Gesture Recognizers

- Each of the controls also interact with gestures
- Gestures are tied to a single view, but view can have multiple gestures
- Add a tap gesture recognizer:

```swift
@IBAction func respondToTapGesture(_ sender: UITapGestureRecognizer) {
  ...
}
```

## Programmatic Actions

- First, reference a button in code: `@IBOutlet var button: UIButton!`
- To connect the button to the action: `button.addTarget(self, action: #selector(buttonTapped(_:)), for: .touchUpInside`)
  - `addTarget` method connects a control to a particular action
    - 1st argument: owner of the function you want to execute (self)
    - 2nd arg: selector: name used to select a method to execute for an object
    - 3rd arg: event that should trigger the action
