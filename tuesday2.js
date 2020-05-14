
const str = 'the quick brown fox jumped over the lazy dog';

//const longestWord = (str) => 
      const strArray = str.split(' ');
      const sortedStrArray = strArray.sort(
          (strA, strB) => {
            return strB.length - strA.length;
          }
)
console.log(sortedStrArray[0].length);
       
//console.log(longestWord(str));
