const {LinkedList, Node} = require('./6_LLDef')

const text = [
  "Lorem ipsum dolor sit amet, consectetur",
  "adipiscing elit. Curabitur porttitor nibh in felis laoreet,i",
  "nec condimentum tellus rhoncus.",
  "Donec ornare, tellus quis accumsan ultricies,",
  " neque ipsum euismod purus, vitae fringilla augue libero ut ipsum. Pellentesque lacinia lacus quis magna malesuada volutpat",
  "vitae ut dolor. Proin semper erat sed ante tempus varius quis eu dui. Morbi sed venenatis eros. ",
  "Vivamus ultrices orci eu placerat suscipit. Proin justo nisl, egestas eu sapien et,",
  "dapibus iaculis lacus.",
  "Integer volutpat sit amet tortor eu mollis.",
  "Sed a convallis lacus. Integer porttitor tempor",
  " tellus a blandit. Mauris pellentesque quam eget leo convallis, ac vehicula metus fermentum. Integer",
  "nulla libero, suscipit malesuada pellentesque vitae",
  "hendrerit ut orci. Nunc ut maximus nulla. Donec ultricies lacus lectus. Curabitur elementum enim vel dictum condimentum.",
];

const words = new LinkedList();
[ 'mauris', 'volutpat', 'suscipit','vitae' ].forEach((word)=> words.insert(word))
const concord = concordance(text)
// Concordance

/* Given an array of sentences making up a body of text, output a concordance of words that appear in the text. If the same word appears multiple times on a line it should list the line only once.
 */

// const concordance = (data) => {
//   let map = new Map();
//   data.forEach((line, i) => {
//     let words = line.toLowerCase().split(/[\s.,';]/);
//     words.forEach((word) => {
//       let counted = false;
//       if (word !== "") {
//         if (!map.has(word)) {
//           map.set(word, [i]);
//         } else if (!counted) {
//           map.set(word, [...map.get(word), i]);
//         }
//       }
//     });
//   });

//   return map;
//   return Object.fromEntries(map);
// };

function concordance(data) {
  let hash = new Map();

  data.forEach((line,i) => {
    const sentence = line.toLowerCase().split(/[;.,\s]/);
    sentence.forEach((word) => {
      if (word) {
        if (!hash.has(word)) {
          const set = new Set();
          set.add(i)
          hash.set(word, set)
        } else {
          hash.set(word, hash.get(word).add(i))
        }
      }
    })
  })
  return hash;
}

const searchLines = (ll, con, data) => {
  let contains = new Set()
  for (let i=ll.head; i; i=i.next) {
    con.get(i.value).forEach((index) => {
      if (data[index]) contains.add(data[index]);
    })
  }
  return [...contains]
}



// searchLines
/* Given a linked list, a concordance, and the original data set, return an array of all sentences containing words in the list.*/



// const searchLines = (wordll, concordance, data) => {
//   let sentences = new Set()
//   for (let i = wordll.head; i; i = i.next){
//     let indexes = concordance.get(i.value);
//     if (indexes) {
//       indexes.forEach((index) => {
//         sentences.add(data[index])
//       })
//     }
//   }
//   return [...sentences];
// };

console.log(searchLines(words, concord, text))