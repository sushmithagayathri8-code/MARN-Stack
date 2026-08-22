// let arr=[1,2,3,4]
// for (let i=0;i<arr.length;i++){
//     console.log(arr[i]*arr[i]);
// }


//  let arr1=[1,2,3,4]
// for(let i=arr1.length-1;i>0;i--){
//     console.log(arr1[i]*arr1[i]);
// }


// arr=[5,4,1,3,2,5,7,9,6,3]
// let n=arr.length
// for ( let i=1;i<=n;i+=2)
// console.log(arr[i]*arr[i])

//  arr=[1,2,3,4,5]
//  for(let i=arr.length-1;i>=0;i--)
//     console.log(arr[i]+1)


//  let n=5
//  for(let i=0;i<=n;i++){
// console.log('*'.repeat(i))
//   } 


//   var myarray=[1,2,3,4,5]
//   myarray.forEach(function(element){
//   console.log(element);
// });


// var myArray=[1,2,3,4,5];
// for (var element of myarray) {
//     console.log(element);
// // }

// function multiple(i){
//     console.log(i);
// }

arr1=[1,2,3,4,5]
 let arr2=arr1.map( function multiple(i){
   return i**2;
 })
 console.log(arr2,arr1)



 let arr3=arr2.filter(function(i){
    return i%2===0;
})
console.log(arr3);

let sum=arr1.reduce(function(a,b){
    return a+b;
},2);
console.log(sum);

let sum2=(a,b)=>{
    return a+b;
}
console.log(arr1.reduce(sum2,1))


function fact(n){
fact=1
for( let i=1;1<=n;i++){
}
console.log(fact(arr[i]));
}
