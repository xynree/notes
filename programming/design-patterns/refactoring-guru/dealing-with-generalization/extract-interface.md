# Extract Interface

## Problem
- Multiple clients are using the same portion of a class interface
- Part of the interface in two classes is the same

## Solution
- Move the identical portion to its own interface

## Why Refactor
- Interfaces are useful when classes play special roles in difference situations. This allows you to explicitly indicate which role.
- If you need to describe the operations that a class performs on its server, all servers must implement the interface.

## Good to Know
- Extract Superclass and Extract interface are similar
- Extracting intederface allows isolating just common interfaces, not common code.

## How to Refactor

- Create an empty interface
- Declare common operations in the interface
- Declare the necessary classes as implementing the interface
- Change type declarations to use the new interface 