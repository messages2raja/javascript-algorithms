// function chunk(arr, strlength) {
//   let res = [];
//   let div = arr.length / strlength;
//   for (i = 0; i < div; i++) {
//     let spliceStr = arr.splice(0, strlength);
//     res.push(spliceStr);
//   }
//   return res;
// }
// console.log(chunk(['a', 'b', 'c', 'd'], 2));

// function anagrams(stringA, stringB) {
//   const strA = stringA.replace('/[W]/g').toLowerCase().split('').sort().join('');
//   const strB = stringB.toLowerCase().split('').sort().join('');
//   console.log('strA', strA);
//   console.log('strB', strB);
//   return strA === strB;
// }

// console.log(anagrams('heart', 'earth'));

// function caesarCipher(str, num) {
//   let result = '';

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     // If the character is a letter, apply the shift
//     if (char.match(/[a-z]/i)) {
//       let code = str.charCodeAt(i);
//       // Uppercase letters have ASCII codes 65-90
//       // Lowercase letters have ASCII codes 97-122
//       //let shift = code < 91 ? 65 : 97;
//      // console.log(shift);
//       char = String.fromCharCode((num% 26) + num);
//     }
//     result += char;
//   }

//   return result;
// }

// // Example usage
// console.log(caesarCipher('hello, world', 5)); // "Mjqqt, Btwqi!"

// function steps(n) {
//   let step = '';
//   for (let i = 1; i <= n; i++) {
//     step += '#'.repeat(i);
//     step += ' '.repeat(n - i);
//   }
//   return step;
// }
// console.log(steps(5));

// function pyramid(n) {
//   for (let i = 1; i <= n; i++) {
//     const space = '_'.repeat(n - i);
//     const hashes = '#'.repeat(i * 2 - 1);
//     console.log(space + hashes + space);
//   }
// }
// pyramid(5);

// function vowels(str) {
//   const vowel = 'aeiou'.split('');
//   const filterStr = str.split('').filter((st) => vowel.includes(st));
//   console.log(filterStr);
//   const reduceStr = filterStr.reduce((acc, str) => {
//     acc[str] = (acc[str] || 0) + 1;
//     return acc;
//   }, {});
//   return reduceStr;
// }
// console.log(vowels('RajaPriyaRithvikRhea'));

// const binarySearch = (sortedArr, value) => {
//   let left = 0;
//   let right = sortedArr.length - 1;
//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);
//     const midVal = sortedArr[mid];
//     if (midVal === value) {
//       return mid;
//     } else if (midVal < value) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return -1;
// };

// console.log(binarySearch([0, 10, 2, 3, 40, 50, 6, 7, 8, 9, 10], 50));

// const stringPatternSearch = (str, pattern) => {
//   let count = 0;
//   const strArr = str.split('');
//   const patternArr = pattern.split('');
//   for (let i = 0; i <= strArr.length; i++) {
//     for (let j = 0; j <= patternArr.length; j++) {
//       if (pattern[j] !== str[i + j]) {
//         break;
//       }
//       if (j === patternArr.length - 1) {
//         count += 1;
//       }
//     }
//   }
//   return count;
// };

// console.log(stringPatternSearch('RamaRamaRama', 'Rama'));

// const bubbleSort = (arr) => {
//   for (let j = 0; j < arr.length; j++) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > arr[i + 1]) {
//         swap(arr, i, i + 1);
//       }
//     }
//   }
//   return arr;
// };

// function swap(arr, i, j) {
//   let temp = arr[j];
//   arr[j] = arr[i];
//   arr[i] = temp;
// }
// console.log(bubbleSort([10, 100, 30, 60, 80, 20, 50, 40]));

// const employee = {
//   name: 'Raja',
//   employer: 'TCS',
//   id: '822322',
//   skills: 'UI',
// };

// delete employee.employer;
// console.log(employee);
// employee.status = 'resigned';
// console.log(employee);

// const arrTest = ["Raja","Priya"];
// arrTest.shift('Rithvik');
// console.log(arrTest);

// function longestWord(str) {
//   let maxLength = 0;
//   let result = [];
//   str.split(' ').forEach((s) => {
//     if (s.length > maxLength) {
//       maxLength = s.length;
//       result.push(s);
//     }else{
//       result=[]
//     }
//   });
//   return result;
// }
// console.log(longestWord('I love my family forever'));

// function capitalize(str) {
//   const capstr = str
//     .split(' ')
//     .map((s) => s.charAt(0).toUpperCase() + s.slice(1, s.length));
//   return capstr.join(' ');
// }
// console.log(capitalize('I love my family forever'));


// function unique(str){
// return [...new Set(str.toLowerCase().split(''))]
// }
// console.log(unique('Ilovemyfamilyforever'));

function repeatNumbers(arr){
const countNumbers = arr.split(' ').reduce((acc,num)=>{
acc[num] = (acc[num] || 0)+1;
return acc
},{})
Object.entries(countNumbers).
}
console.log(repeatNumbers('ffffeeerrrkkkkkk'))