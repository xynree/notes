# Forms, Controls

## Form Properties and Methods

- Document forms are part of special collection `document.forms`
  - named + ordered
  - `document.forms.my` // form with name 'my'
  - 'document.forms[0] // first form in document
  - Elements in form is available in `form.elements`
    - form.elemName will also work, but changing name works differently
    - Backreference: element.form gets the parent form
  - If multiple elem with same name, form.elemtns[name] is a collection

__Form elements__

- input/textarea can be accessed with input.value or input.checked
  - do not use .innerHTML
- select/option
  - select.options -> `<option>` subelems
  - select.value -> value of currently selected `<option>`
  - select.selectedIndex -> index of currently selected
  - `<select>` allows for multiple elemens
  - new Option(text,value,defaultSelected,seleted)

## Focusing: Focus/Blur

- focusing means: prepare to accept data here
- blur: lose focus (data has been entered)
- current focused element: `document.activeElement`

__Events focus/blur__
- focus called on focusing, blur, when element loses ffocus
- can use .onblur / .onfocus handlers to do something
- focus() and .blur() can be used to set/unset focus.

__tabindex__
- HTML attribute tabindex: element becomes focusable if it has tabindex. tabindex: order num of element.
- Elems with tabindex from 1+ go first in tabindex orer, then other focusable elems like index.
- tabindex=0 gets placed after all the rest of tabindex elements.
- tabindex=-1 means only .focus() will be used to focus element.

__delegation: focusin/focusout__
- `focus/blur` do not bubble but they do propogate down when captured, so eventListeners work but eventHandlers do not work.
- `focusin, focusout` events are same as focus/blur but theybubble.
  - must be set with `elem.addEventListener` not on`<event>`

## Events: change, input, cut, copy, paste

__Event:change__
- `change` (`onchange`) triggers when elem has finished changing
  - input: when loses focus
  - selection: after selection changes

__Event:input__
- triggers whenever a value is modified by use
- input.oninput
- happens after value is modified, so `preventDefault()` does nothing

__Events: cut/copy/paste__
- belongs to `ClipboardEvent` class
- `event.preventDefault()` action aborts action
- document.getSelection() gets selected text
- clipboardData gets DataTransfer interface (check specs)
- forbidden to get global `clipboardData`. more recent: `navigator.clipboard`

## Forms: Event and Method Submit
- `submit()` triggers when form submit. Usually yused to validate before sending to server
- `form.submit()` initates form sending 
- submit is entered when input type='submit' handles enter(treated as click) or a type='submit' button is clicked within form
- to submit a form manually: `form.submit()`. This does not generate a `submit` event as it is assumed processing was already done manually.

