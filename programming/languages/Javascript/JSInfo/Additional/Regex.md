# Regex

## Patterns and Flags
---
### Regular Expressions

- 2 syntaxes:
  - `regexp = new RegExp("pattern", "flags")`
  - `regexp = /pattern/gmi`
- Both create instance of `RegExp` class
- /.../ syntax doesn't allow regex to be created with template literals on the fly

### Flags

- i: case-insensitive
- g: all matches
- m: multiline mode
- s: dotail mode (:. matches new line character)
- u: unicode support
- y: sticky mode

### Searching: `str.match`

-  `str.match(regexp)` finds all matches of regexp in str.
  - if `g` flag on, returns an arry of matches
  - otherwise returns an array with 1 item and some properties
  - if no match return `null`
  - Shorthand: `let matches = "str".match(/.../) || [];` will always return array.

### Replacing: `str.replace`

- `str.replace(regexp, replacement)` replaces matches for `regexp` with `replacement`

### Testing: `regexp.test`

- Boolean returned whether str matches regex test

## Character Classes
---
- Matches any symbol from a certain set

- \d: digits from 0 to 9
- \s: space
- \w: letter of alphabet, digit or underscore

- Inverse Classes of above match oppostie
- `.` is any character except newline

## Unicode Characters
---
- `u` flag enables Unicode support
- handles different languages, 4 byte characters
- to use Unicode properties: `\p{...}`

## Anchors: string start `^` and end `$`
---
- Caret matches beginning of text, dollar end
- Both together used to test whether a string fully matches the pattern

## Multiline mode of anchors `^$, "m"`
---
- enabled by flag `m`, only affects behavior of anhors
- Match both beginning and end of string + start/end of line

## Word Boundary: `\b`
---
- Checks that position in string is a word boundary
  - At beginning of string, if first string is word character `\w`
  - Between two characters, if one is word character and one is not
  - At end of string, if last string is a word character `\w`
- Works also with digits

## Escaping, Special Characters
---
- backslash `\` is used as special character
  - `\.` -> period
  - `\(` -> paranetheses
- slash `/` is not special character. Used to open/close a regexp. Must be escaped to search for it.
- When making a `new RegExp` regex, slashes get consumed, must escape with 2 backslashes

## Sets, Ranges `[...]`
---
- Sets `[eao]`: "a", "e", "o"
- Ranges `[a-z]`: a through z
- Excluding ranges with caret `[^a-z]` : NOT a- 
- Characters do not need escaping in square brackets
- Unicode flag still needs to be set to capture in a set/range.

## Quantifiers `+, *, ? and {n}`
---
### Quantity `{n}`
- specifies how many of a character or character class is needed
- can use ranges: `{3,}, {5}, `
### Shorthands
- `+`: one or more
- `?`: zero or one
- `*`: zero or more

## Greedy and Lazy Quantifiers
---
- Normal 'greedy' algorithm: Quantified character is repeated as many times as possible
- Lazy mode: Repeat minimal number of times
  - if `?` after a quantifier - switches matching mode to lazy
- Fine-tuned greedy search with exclusions: `[^"]+`

## Capture Groups

---
 - Enclosing in parantheses `(...)`: Capture Group
  - Allows to get part of match as a separate item in the result array
  - Quantifiers after parantheses apply to parantheses group as a whole
- Parathenses contents in the match
  - index 0: full match
  - 1: first paran
  - 2: second
  - so on...
- Nested groups
  - Parantheses can be nested
  - Outer parantheses is 1, inner is 2,3, from right to left
- Named groups
  - `?<name>` after opening parantheses will name the capture group
- Match groups
  - `str.match` returns capture groups only w/o `g`
  - `str.matchAll` returns all capture groups

## Backreferences in pattern: `\N` and `\k<name>`
---
- Can be referenced by number `\N` where N is the group number
- Or `\k<name>` where name is name of capture group.

## Alternation (OR) |

- Alternation allows any expression, not just one character
  - gra|ey -> gra or ey
  - gr(a|e)y -> gr[ae]y
- Alternation will get all before the | or will choose what is inside parantheses

## Lookahead/Lookbehind

- Find only matches for a pattern that is followed or precedes by another pattern

- Lookahead: `X(?=Y)` : Look for `X`, match only if followed by `Y`
- Not included in the result of the search
- Negative Lookahead: `X(?!Y)` : Search X but only if not followed by Y

- Lookhbehind: Syntax:
  - Positive: `(?<=Y)X`: Matches X if only theres Y befor it
  - Negative `(?<!Y)X`: Matches Y only if there's no Y before it

- Wrapping in additional parantheses will create a captured group.

## Other topics

- Avoiding Backtracking
- Sticky flag `y`

## Methods of RegExp and String

- str.match(regexp)
- str.matchAll(regexp)
- str.split(regexp) - Splits string using the regex as a delimiter
- str.search(regexp) - Returns index of FIRST match
- str.replace(regex) - Search and replace

- regexp.exec(str)
- regexp.test(str) -> bool
