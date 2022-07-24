# Sets and Map Questions 

__1. Given two strings s1 and s2, determine if the two strings are anagrams of each other or not.__

Solution: Place all letters of s1 into a map and increment by # of letters. Decrement with all letters of s2. If any letter in the map has a count != 0, it is not an anagram, otherwise it is. __O(n)__

```js:Anagram
function anagram (a,b) {
  
  let hash = new Map;
  let isAnagram = true;

  Array.from(a.toLowerCase()).forEach((lett) => {
    if (hash.has(lett)){
hash.set(lett, hash.get(lett)+1);
    } else {
hash.set(lett, 1);
}
  })
  
  Array.from(b.toLowerCase()).forEach((lett) => {
  if (hash.has(lett)){
    hash.set(lett, hash.get(lett) - 1)
  } else {
    isAnagram = false;
  }
})
  
 hash.forEach((val, key) => {
   if (val !==0) {
isAnagram = false;
}
 })

return isAnagram;
}
```


__2. Write an algorithm to check whether any anagram of some string is a palindrome.__

Solution: Place each letter of string into a set, deleting if letter is already in the set. If any letter occurs an odd num of times more than once, it is not a palindrome. __O(n)__

```js:Palindrome
function permutationPalindrome(word) {
  let set = new Set();
Array.from(word.toLowerCase()).forEach((lett) => {
  if (set.has(lett)) set.delete(lett);
  else set.add(lett);
}
);

return set.size < 2
}
```

__3. Given a list of words, group the words into anagram groups.__

Solution: Create a map arranged with alphabetically sorted versions of each word, then place each word that matches into the map as an array. Return the values of map as array. O(n)

```js:AnagramGroups
function anagramGroups(words) {
  
let map = new Map();
words.forEach((word) => {
  let groupName = Array.from(word.toLowerCase()).sort((prev,curr) => prev<curr? -1:1).join('')

  if (map.has(groupName)) {
    map.set(groupName, [...map.get(groupName), word]);
  } else {
    map.set(groupName, [word]);
  }
})
  return [...map.values()]
 
}
```

__4. Return the first character in the string that occurs only once.__

Solution: Add all letters with their counts to a map. Iterate through the map to find the first letter with count of 2.

```js
function firstSingleCharacter(word) {
  let map = new Map();

  for(let i=0; i<word.length; i++){
    const lett = word.charAt(i)
    if (map.has(word.charAt(i))){
        map.set(lett, map.get(lett)+1)
        } else {
          map.set(lett, 1)
        }
  }
  
  for (let [key, value] of map.entries()) {
    if (value === 1) {
      return key;
    }
  }
  return null;
}
```
