// object creation.......................

// let obj = {
//     name :"bhumika chundawat",
//     age:21,
//     weight:55,
//     height:"5.4ft",
//     greet: function(){
//         console.log("hello ji kaise ho saare");
//     }
// };

// console.log(obj);
// obj.greet();


//array creation....................................................
//creating array
// let arr = [1,2,3,4,5];
//creating array by construtor
// let arr1 = [1,"love",true,null];
// console.log(arr);
// console.log(arr1);
// console.log(arr1[0]);
// console.log(arr1[1]);
// console.log(arr1[2]);
// console.log(arr1[3]);
// console.log(typeof(arr));
// console.log(typeof(arr1));

// arr1.push('babbar');
// console.log(arr1)
// arr1.pop();
// console.log(arr1)
// arr1.shift();
// console.log(arr1)
// arr1.unshift('love babbar');
// console.log(arr1)
// arr1.push(70)
// arr1.push(6)
// arr1.push(100)
// console.log(arr1)
// console.log(arr1.slice(2,4));
// arr1.splice(1,0,"bhumika");
// console.log(arr1)

// let arr = [10,20,30]
// arr.map((number,index) =>{
//     console.log(number);
//     console.log(index);
// })
// arr.map((number) =>{
//     console.log(number+1);
// })

// let arrAns= arr.map((number)=> {
//     return number*number;
// })
// console.log(arrAns);

// let arr =[10,20,30,51,40,33,71];
// let arreven = arr.filter((number) => {
//     if(number%2===0){
//         return true;
//     }
//     else{
//         return false;
//     }
// });
// console.log(arreven);

// let arr = [ 1, 'love', true, null, 'babbar' ];

// let arrString = arr.filter((value) => {
//     if(typeof(value) == 'string'){
//         return true;
//     }
//     else{
//         return false;
//     }
// })
// console.log(arrString)

// let arr =[10,20,30,40]
// let ans= arr.reduce((acc,curr)=>{
//     return acc + curr;
// },0);
// console.log(ans)

// let arr=[4,3,2,1,8,4,7]
// console.log(arr.sort());
// console.log(arr.indexOf(2));

// arr.forEach((value,index)=>{
//     console.log("value:",value,"index:",index);
// })
// let obj = {
//     name :"bhumika chundawat",
//     age:   21,
//     weight:55,
//     height:"5.4ft",
//     greet: function(){
//         console.log("hello ji kaise ho saare");
//     }
// };

// for(let key in obj){
//     console.log(key, " ", obj[key]); 
// }

// let arr=[4,3,2,1,8,4,7]
// for(let value of arr){
//     console.log(value);
// }

// array with function......................

let arr= [10,20,30,40,50];

let setSum =function(arr){
    let len = arr.length;
    let sum = 0;
    for(let index=0; index< len ; index++){
        sum = sum+ arr[index];
    }
    return sum;
}
let getSum= setSum(arr);
console.log(getSum);