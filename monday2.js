let arr = [[1, 7, 4, 3], [23, 27, 18, 36], [32, 35, 37, 55], [1000, 10011, 857, 1]]; 

function largest(arr) {
  let firstArr = [];
  var max = 0; 
  for(var i=0;i<arr.length;i++){ 
    max = arr[i][0];
    for(var j=0;j<arr[i].length;j++){ 
      if(arr[i][j] > max){ 
        max = arr[i][j];
      } 
    } 
    firstArr.push(max); 
  } 
  return firstArr;

} 

console.log(largest(arr));



/*function largestOfFour(arr) {

  // You can do this!
  let newArr= []
  let max=0
  for ( let i=0; i < arr.length ; i++){
    max=arr[i][0]
    for ( let j=0; j < arr[i].lenght; j++){
      if( arr[i][j]> max){
        max =arr[i][j]
        console.log(max)
      }
    }
    newArr.push(max)

  }
  return newArr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))*/
