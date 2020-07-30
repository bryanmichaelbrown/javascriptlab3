"use strict";
// 1
let submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020 - 01 - 24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2018 - 05 - 14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2019 - 07 - 05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020 - 04 - 22",
    passed: true,
  },
];
// 2
const addSubmission = (array, newName, newScore, newDate) => {
  let newObj = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  };
  array.push(newObj);
};

addSubmission(submissions, "Bryan", 100, "2020-05-04");
console.log(submissions);

// // const addSubmission =(array,newName,newScore,newDate)=>{
//     let Obj = {
//         name:newName,
//         score:newScore,
//         date:newDate,
//         passed:newScore >60,
//     };
//     array.push(newObj);
// };

// addSubmission(submissions,"Boo", 25, "2020-05-04");
// console.log(submissions);

// 3
const deleteSubmissionbyIndex = (array, index) => {
  array.splice(index, 1);
};
deleteSubmissionbyIndex(submissions, 4);
console.log(submissions);

// // const deleteSubmissionByIndex = (array,index)=>{
//     array.splice(index,1);
// };

// 4
const deleteSubmissionByName = (array, name) => {
  let byName = array.findIndex((item) => {
    return item.name === name;
  });
  array.splice(byName, 1);
};
deleteSubmissionByName(submissions, "Joe");

console.log(submissions);

// const deleteSubmissionByName = (array,studentsname)=>{
//     let foundIndex = array.findIndex((item)=>{
//         return item.name === studentsname;
//     });
//     array.splice(foundIndex,1);
// };

// deleteSubmissionByName(submissions,"Boo");
// console.log(submissions);

// 5
// const editSubmission = (array, index, score) => {
//   if ((array[index].score = score >= 60)) {
//     array[index].passed = true;
//   } else {
//     array[index].score = score < 60;
//     array[index].passed = false;
//   }
//   array[index].score = score;
// };
// editSubmission(submissions, 0, 60);
// console.log(submissions);

const editSubmission = (array, index, score) => {
  array[index].score = score;
  array[index].passed = score >= 60;
};

editSubmission(submissions, 2, 90);
console.log(submissions);

// 6
const findSubmissionByName = (array, name) => {
  let found = array.find((item) => {
    return item.name === name;
  });
  return found;
};

// const findSubmissionByName = (array,nameImLookingFor)=>{
//     let finder = array.find((whatever)=>{
//         return whatever.name === nameImlookingFor;
//     });
//     return finder;
// };

console.log(findSubmissionByName(submissions, "Jack"));
// 7
const findLowestScore = (array) => {
  let lowest = array[0];
  array.forEach((item) => {
    if (item.score < lowest.score) {
      lowest = item;
    }
  });
  return lowest;
};
console.log(findLowestScore(submissions));

// const findLowestSscore = (array)=>{
//     let currentLowest = array[0];
//     array.forEach((currentObj)=>{
//         if (currentObj.score < currentLowest.score){
//             currentLowest= currentObj;
//         }
//     });
//     return currentLowest;
// };

// 8
const findAverageScore = (array) => {
  let sum = 0;
  for (let item of array) {
    sum += item.score;
  }
  return sum / array.length;
};
console.log(findAverageScore(submissions));
// 9

const filterPassing = (array) => {
  let passing = array.filter((whatever) => {
    return whatever.score >= 60;
  });
  return passing;
};

// 10

const filter90AndAbove = (array) => {
  let above90 = array.filter((whatever) => {
    return whatever.score > 90;
  });
  return above90;
};
