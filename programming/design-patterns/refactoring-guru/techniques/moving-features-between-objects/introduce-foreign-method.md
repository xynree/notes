# Introduce Foreign Method

## Problem
- A utility class doesn't contain the method that you need and you can't add the method to the class

## Solution
- Add the method to a client class and pass an object of the utility class as an argument

## Why Refactor
- You have code that uses the data and methods of a certain class
- The code would work better inside a new method in the class.
- But we can't add the method to the class because it's located in a third party library
- Since we pass an object of the utility class to the parameters of the new method, we have access to all its fields

## Benefits

- Removes code deuplication

## Drawbacks

- The reason for having the method of a util class in a client class won't always be clear to others
- Could benefit by creating a wrapper for the utility class ad placing the method there.

## How to Refactor

1. Create a method in the client class
2. In this methodk, create a param to which the object of the util class will be passed. If we can get this object from the client, we don't have to create the parameter
3. Extract code frags to this method and replace them with method calls
4. Leave the `foreign method` tag in the comments for the method along with the advice to place this method in a util class if it becomes possible later.