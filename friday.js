let array = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31];
let first = 0;
let second = 0;
let third = 0;
 for (let i = 0; i < array.length; i++) {
   if (array[i] > first) {
     third = second;
     second = first;
     first = array[i];
   } else if (array[i] > second){
     third = second;
     second = array[i];
   } else if (array[i] > third){
     third = array[i];
   }
 }
  console.log('First: ' + first);
  console.log('Second: ' + second);
  console.log('Third: ' + third);