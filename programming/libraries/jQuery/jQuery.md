# JQuery Basics

- $ = jQuery function: $('li') -> jQuery('li')

jQuery/$ methods:

- $(document).ready(function(){})
        - function runs once document is ready
        - shorthand: $() -> $(function() {})

- get elements: $('#header')
    - $(document.body.children[0]) // get from a DOM element
    - $( [window, document]) // get from a list of DOM elements
    - var firstchild = document.body.children[0]
    $('li', firstchild) // make a selection inside a dom element
    - var pargraph = $('p')
    $('a', paragraph) // make selection within previous selection

Did my selection get anything?
    - if ($('nonexistent')) {} -> truthy, won't work
    - if ($('nonextent).length > 0 ) {} -> works

Getting single elements from a selection
    - Jquery doesn't work with raw DOM, if selection is a group use .eq() and pass index of element: listItems.eq(1)

Creating New Elements
    - If you pass an HTML snippet to $() it will create a new element in memory
    - $('<p>', {
    html: 'hello',
    'class': 'greet'}); // jquery html element with attributes

Testing a Selection
    - .is() method, then provide a selector
        - $('li').eq(0).is('.special') // true or false

Getters, Setters, Implicit Iteration
    - getters retrieve info from selection
        - operate only on first element in a selection
    - setters alter selection
        - operate on all elements in selection (implicit iteration -> jquery automatically iterates)
            - $('li').html(function(i, val) { return val + '!'})

Explicit Iteration
    - .each() lets you do a forEach

Chaining
    - call series of methods without having to repeat selection.
    - Setter methods return selections on which they are caled

