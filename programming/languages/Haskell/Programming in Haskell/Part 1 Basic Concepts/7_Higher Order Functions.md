# 7 - Higher order Functions

## 7.1 Basic Concepts

- Function that takes a fn as an arg or returns a fn as a result is called a higher-order function

## 7.2 Processing Lists

- map
- filter

## 7.3 The foldr function

- Foldr maps the empty list to a value v and any non-empty list to the function f applied to head of the list and recursively processed tail
- Foldr associates to the right (from the end of the list)

## 7.4 Foldl

- Foldr associates to the left (from the beginnning of the list)

## 7.5 Composition operator

- the operator . returns composition of two functions f (g x)
- Because . has low precedent, it reduces the need for parantheses
