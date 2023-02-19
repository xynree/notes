## Basic Regex

Regex format: /regex/

"Test" function:
let regex = /regex/
let result = regex.text(string)


"Match" function:
"Hello, World".match(/Hello/) <!-- ["Hello"]-->

## Flags 
Match multiple words: /yes|no/

Ignore case flag: /regex/i

Search or extract pattern more than once: /repeat/g

## Character Sets
 . will match any one character
 [] defines a group of characters to match
 [a-e] defines a range of characters
 [a-z0-9] can also use numbers and can be combined in one brack
[^aeiou] ^ carrot negates characters

## Matching 0 or more / 1 or more
+ matches a charcter that appears one or more times in a row
/a+/g matches aabc and abc ['aa'] (1 match)  and abab with 'a,a'(2 matches)

* Matches characters that occur 0+ times.regex:`` /go*/`` -->  "goooal"  [gooo] "gut feeling" ["g"], "over the moon" ["null"]

## Greedy/Lazy Match
- Greedy match : Finds the longest part of a string that fits regex pattern and returns it as match
- Lazy match : Find smallest part of string that satisfies match
- Default: Greedy
- To make lazy: add ? after regex to match.

## Search beginning/end of string
-  ^ carrot symbol outside of char sets are used to search beginning of strings for a pattern. ^Cal -> 'California' -> ['Cal']
- $ at end of regex to search end of strings

## Match all

- Shortcut for matching  all letters and numbers + underscor _ : \w 
- Opposite of alphanumerics: \W ([^A-Za-z0-9_])
- digit characters - [0-9] -> \d non digit -> \D

#Whitespace

\s matches whitespace

# Quantity Specifier
- Lower and upper number of patterns -
    - for a appearing between 3 and 5 times:
        - /a{3,5}h/
    - {3,} -> 3 or more
    - {3} -> 3 times

# Check for All or None

- ? checks for zero or one of preceding element.

# Lookaheads
- look-ahead in string to check for patterns further along

- Positive Lookahead:
    - Look to see if a pattern is there but won't match it
    - (?=...) where ... is required part
- Negative Lookahead:
    - Look to see elemnt in search is not there
    - (?!...) where ... is pattern you do not want

# Capture groups

- Enclose group in parantheses to find repeated sustrings
(\w+)
# Capture groups

- Enclose group in parantheses to find repeated sustrings
(\w+)
- saved to a temp variable (\1)
