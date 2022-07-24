// 1 -  “Create a grades object that stores a set of student grades in an object. Provide a function for adding a grade and a function for displaying the student’s grade average.”

class Grades {

  gradeList = {
    'Math': 0,
    'Science':0,
    'PE':0
  }

 addGrade = (subject, grade) =>{
    this.gradeList[subject] = grade
  }

  average = () => {
    let avg = 0
    let len = Object.keys(this.gradeList).length
    for (let grade in this.gradeList) {
        avg += this.gradeList[grade]
    }
    return (avg/len).toFixed(2);
  }
}

console.log('Exercise 1:')
const xGrades = new Grades();
xGrades.addGrade('Math', 89)
xGrades.addGrade('Science', 99)
console.log('Added Grades:', xGrades.gradeList)
console.log('Average:', xGrades.average())
console.log('\n')


// 2 - “Store a set of words in an array and display the contents both forward and backward.”

const words = ["Hello", "World", "My", "Name", "Is", "Xinrui"]
const forward = words.join(' ')
const backward = words.reverse().join(' ')

console.log('Exercise 2:')
console.log('Forward:', forward)
console.log('Backward:', backward)
console.log('\n')

// 3 - “Modify the weeklyTemps object in the chapter so that it stores a month’s worth of data using a two-dimensional array. Create functions to display the monthly average, a specific week’s average, and all the weeks’ averages.”

class MonthTemp {
  dataStore = [
    [52,39,63,34,26,45,23], 
    [39,45,13,85,35,85,54], 
    [34,45,67,85,36,43,45],
    [10,34,73,99,88,94,55]
  ]
  monthAvg = () => {
    let total = 0;
    let dayCount = 0;
    for (let i=0; i<this.dataStore.length; i++){
      for (let j=0; j<this.dataStore[i].length; j++){
        total+= this.dataStore[i][j];
        dayCount++;
      }
    }
    return (total/dayCount).toFixed();
  }

  weekAvg = (wkNum) => {

    let total = 0;
    let dayCount = this.dataStore[wkNum-1].length;
    for (let i=0; i<this.dataStore[wkNum-1].length; i++){
    total+= this.dataStore[wkNum-1][i]

    }
    return (total/dayCount).toFixed();
    
  }

  allWeeksAvg = (wkNum) => {

    let avgList = [];

    for (let i=0; i<this.dataStore.length; i++){
      let total = 0;
      for (let j=0; j<this.dataStore[i].length; j++){
        total+= this.dataStore[i][j];
      }
      avgList.push((total/this.dataStore[i].length).toFixed())
    }
    return avgList
  }

}

const temps = new MonthTemp

console.log('Exercise 3:')
console.log('Month Average:', temps.monthAvg())
console.log('Week 1 Average:', temps.weekAvg(1))
console.log('All Weeks Average:', temps.allWeeksAvg())
console.log('\n')


// 4 - “Create an object that stores individual letters in an array and has a function for displaying the letters as a single word.”

class Letters{
  list = []
  add = (lett) => this.list.push(lett)
  display = () => this.list.join('')
}


console.log('Exercise 4:')
const myWord = new Letters();
myWord.add('H')
myWord.add('I');
console.log(myWord.display())