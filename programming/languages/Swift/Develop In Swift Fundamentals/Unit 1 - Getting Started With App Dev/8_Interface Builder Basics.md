# 1.8 - Interface Builder Basics

- Interface builder opens whenever you select a XIB file (.xib) or Storyboard File (.storyboard) from project navigator
- Storyboard includes many pieces of the interface, defining the layout of screens and screen progression from one to another

## Layout

- Left of main canvas: Document Outline
  - List of each view controller in the scene
    - + Library button displays Object Library
  - You can drag these components into view

## Outlets and Actions

- Reference from Interface Builder to code is called an outlet
- Create actions for interactions with objects
- Outlet: A reference to a visual element in code so it can be adjusted at runtime
- Action: Fn that is called when interaction with outlet happens

## A Note about Interface Builder

- Every attribute in the builder represents a property that can be controlled with code
- a GUI for configuring and setting UIKit class properties
