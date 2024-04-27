# Pull Up Field

## Problem
- Two classes have the same field

## Solution
- Remove the field from subclasses and move it to the superclass

## Why Refactor
- Subclasses can grow and develop separately, causing identical fields and methods.

## Benefits
- Eliminate duplicate of fields
- Eases relocating duplicate methods

## How to Refactor
- Make sure the fields are used for the same needs in both classes
- If the fields have different names, adjust to give them the same name
- Create a field with the same name in the superclass. If the fields were private, note that the superclass field should be protected.
- Remove the fields from subclasses
- You may want to Self Encapsulate the field - Create a getter and setter for the field to use just for accessing the field. This can be useful when you want to initiate a field value when the first query is made or perform certain operations on new values of the field when they're assigned.
  - This improves control of the data - can perform complex operations when data is set or received