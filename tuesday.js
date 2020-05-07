
// for (a = 200; a <= 270; a++){
// if(a % 5 === 0 && a % 3 ===0){
//     console.log("not return")
// } else if(a%5 === 0){
//     console.log("Div by 5", a)
// } else if(a%3 === 0){
//     console.log("Div by 3", a)
// }
// }

//Algorithem 1

// const x= [2,1,6,4,-7]
// const newArr = []
// for (let index=x.length-1; index>=0; index--){
//     newArr.push(x[index])
// }
// console.log(newArr)

// Algorithem 2


// for (let index=1; index<=135; index++)
//     if(index %5 ===0 && index %3 ===0){
//         console.log("FizzBuzz")
//     } else if(index % 5 === 0){
//         console.log(index, "Fizz")
//     } else if(index%3 === 0){
//         console.log(index, "Buzz")
//     } else if(index % 5 !==0 && index%3 !==0){
//         console.log(index)}

// Algorithem 3

// var a=0;
// var b=1;
// for (var i=0; i<=10; i=a+b){
//     console.log(i)

// a=b;
// b=i;
// }
//  Algorithem 4


// const x = [1,-2,4,1]
// for ( let index = 0; index <= x.length-1; index++){
//    if( x[index] < 0){
//     x[index]=x[x.le];
//     }
// }
// console.log(x)

// Algorithem 5



// var x = ['Man', 'I','Love','The','Restart','Bootcamp']
// var y = '';
// for(var i =0; i<x.length; i++){
//     if (x[i] === 'Restart'){
//         x[i] === 'Turing';
//     }
//     if (x[i] === 'Bootcamp'){
//         var y = " ";
//         for (var j = 0; j <= x[i].length; j++){
//             y = y + '*';
//         }
//         x[i] = y;
//     }
// }
// console.log(x);


// Algorithem 6


const x = [1,-2,4,1,-4,-9]
for ( let index = 0; index < x.length; index++){
   if( x[index] < 0){
    x.splice(index,1)
    }
}
console.log(x) 
//algorithem 5 can't

