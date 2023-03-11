# 7 - Modules

- Program: Collection of modules where main module loads up other modules
- Prelude: standard module library
- Syntax for importing modules: `import <module name>
- When imported, all functions that the module exports become available in the global namespace
- You can put functions of modules into the global namescpace in GHCI with this syntax:
- `ghci :m + <modulename> <othermodules> <moremodules>`
- If you load a script that already imports a module, you don't need to use :m to get access to it
- Can selectively import functions from a module:
- `import Data.List (nub, sort)`
- To import all the functions except for a specific one:
- `import Data.List hiding (name)`
- Qualified imports to avoid namespace classes:
- `import qualified Data.Map as Nickname`
- To search for functions: use Hoogle

## Data.List

- Useful functions for dealing with lists
- `intersperse` takes an element and a list and then puts that element in between each pair of elements in a list
- `intercalate` takes a list and a list of lists, inserts that list between all lists and flattens the result
- `transpose`: Transposes a list of lists. As a 2D matrix: columns becomes rows and vice versa
  - example: adding [3,5,9,0] + [10,0,9,0], [8,5,1,-1] by each index: transpose and sum each array
- `foldl foldl1` : strict versions of fold
- `concat`: flattens a list of lists into a list of elements
  - removes one level of nesting
  - concatMap: `concat + map`
- `and` takes a list and returns `True` only if all list values are true
- `or` returns `True` if any boolean values in a list is `True`
- `any` `all` take a predicate and check that any or all elements in a list satisfy a predicate
- `iterate` takes a function and a starting value -applies that function to the starting value and then keeps going with the result infinitely
  - used often in combination with `take`
- `splitAt`: takes a num and a list, then splits the list at that many elements, returning two lists in a tuple
- `takeWhile`: takes elements from the list while a condition holds
- `dropWhile`: same as above but drop
- `span`: returns a pair of lists, first list containing everything from takeWhile, second list returns dropped segment
- `group`: groups adjacent elements into nested lists if they are equal
- `inits` `tails`: recursively applied until there is nothing left
- `isInfixOf` returns True if the sublist is somewhere within the target list
- `isPrefixOf` `isSuffixOf` search for a sublist at the beginning and end of a list
- `elem` `notElem` check if element is or isn't in a list
- `partition` takes a list and condiiton and returns a pair of lists, matching and not matching
- `find`: takes a list and a condition and returns first element that satisfies the condition, but returns element wrapped in a `Maybe`
- `elemIndex` returns a Maybe with index of element
- `elemIndices`: returns a list of indices or an empty list
- `findIndex/findIndices`
- `lines/unlines`
- `words/unwords`
- `nub`: Takes a list and weeds out duplicate elements, returning only unique elements
- `delete`: takes an element and deletes first occurance of the elemnt in a list
- `\\` list difference: removes matching element in right list from left list
- `union` - a join on sets, returns union of two lists. Removes duplicates
- `intersect`: returns only elements found on both lists
- `insert`: Takes an element and a list of elements that can be sorted and inserts it into last position where it's less than or equal to next element
- There are generic equivalents of the functions that take only Int lists: `genericLength`, `genericTake`, etc.
- `nub, delete,union,intersect,group` have generic counterparts called `nubBy, delteBy` etc. the By functions take an equality function and compare them using that function.
- Lists can be compared but are compared lexographically
  - Can use `sortBy` to compare in a specific way

## Data.Char

- Exports functions that deal with characters

- is___ functions: checks whether a character is a specific type of character. Includes `isControl`, `isSpace`, `isLower`, and other helper functions
  - All have type signature `Char -> Bool`
- `Ordering` `GeneralCategory`  types: describes results that can arise from comparing two elements
- `digitToInt` `intToDigit` for hexadecimal: must be in ranges 0-9 and 'a-f'
- `ord` `chr` functions convert to ASCII

## Making Our Own Modules

- Sytax: module name, then specify functions to export

```haskell

module Geometry
( sphereVolume,
sphereArea,
cubeVolume)
where

sphereVolume :: Float -> Float  
sphereVolume radius = (4.0 / 3.0) * pi * (radius ^ 3)  
  
sphereArea :: Float -> Float  
sphereArea radius = 4 * pi * (radius ^ 2)  
  
cubeVolume :: Float -> Float  
cubeVolume side = cuboidVolume side side side  
```

- then to use module: `import Geometry`
- Geometry.hs has to be in the same folder that the program is importing it is in
