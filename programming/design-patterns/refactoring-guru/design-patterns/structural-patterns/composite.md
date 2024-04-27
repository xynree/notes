# Composite / Object Tree

## Intent

- Structural design pattern that lets you compose objects into tree structures and then work with them as if they were individual objects

## Problem

- The core model of your app should be able to be represented as a tree.
- If you were to create an ordering system, how could you easily go through all levels of the tree and do some work?

## Solution

- Composite pattern: Work with `Products` and `Boxes` through a common interface which has a method for calculating a total price.
  - For a product, return the product price
  - For a box, go over each item in a box, ask its price, then return total for box.
- We don't need to care about the concrete classes of objects in te tree. We can treat them the same with the common interface.
- When calling a method, objects pass the request down the tree.

## Real World Analogy

- Armies are hierarchies
- Orders are given at the top of the hierarchy and passed down onto each level.

## Structure

1. Component interface describes operationst hat are common to all elements of the tree
2. A leaf is a basic elemnt of the tree with no subelements. Leaves tend to do the "real work".
3. The Container/Composite is an element with subelements - leaves or other containers. It doesn't know the classes of its children, working with the children just through the component interface. When it gets a request, it sends the work to subelements, processes result sand returns the final result to the client.
4. The client works with all elements through the component interface

## Applicability

- Use the Compositte pattern when you have to implement a tree like structure
- Use the pattern when you want the client to treat all elements uniformly.

## How to Implement

1. Make sure the core model can be represented as a tree
2. Declare the component interface with a list of common methods
3. Create a leaf class for simple elements
4. Create a container class for complex elements. This class should provide a field for storing refs to subelements.
5. Define the methods for adding and removing child elements to the container.

## Pros and Cons

- Pro: We can work with tree structures more conveniently, which allows use to use polymorphism and recursion
- Pro: Can introduce new element types w/o breaking exissting code
- Con: May be difficult to provide a common interface when functionality differs too much.
  j
