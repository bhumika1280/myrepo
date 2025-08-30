//performance flow.........................................................................

// code 1
// let t1 = performance.now();
// for (let i = 0; i < 50; i++) {
//     let para = document.createElement('p');
//     para.textContent=('this is para: ' +i);
//     document.body.appendChild(para);
// }
// let t2 =performance.now();
// console.log("total time by code 1 is: " +(t2 - t1));

// //code2
// let tc1 = performance.now();
//  let mydiv = document.createElement('div');
// for (let i = 0; i < 50; i++) {
//     let para = document.createElement('p');
//     para.textContent="this is div : " +i;
//     mydiv.appendChild(para);
// }
// document.body.appendChild(mydiv)
// let tc2 = performance.now();
// console.log("total time by code 2: " +(tc2 - tc1));

// //best code 
// let tf1 = performance.now();
// let fragment = document.createDocumentFragment();
// for (let i =0 ;i<50 ; i++){
//     let para = document.createElement('p')
//     para.textContent= "this is para : " + i+ "abc";
//     fragment.appendChild(para);
// }
// document.body.appendChild(fragment);
// let tf2 = performance.now();
// console.log("total time to run best code : " +  (tf2-tf1))

//promise.................................................................................

//syncrinus code
// let newPrmomise = new Promise((resolve,reject)=>{
//     console.log("hello babbar");
//     // resolve(1001);
//     reject(new Error("internal server error"))
// });

//asyncronus code
//  let newPrmomise = new Promise((resovle,reject)=>{
//     setTimeout(function sayMyName(){
//         console.log("love babbar")
//  },10000)
//     resovle(1)
//  })

// let promise1 = new Promise((resolve,reject)=> {
//    let succes=true;
//     if(succes){
//         resolve(" Promised fulfilled")
//     }
//     else{
//         reject("promised rejected")
//     }
// })
// promise1.then((message) =>{
//     console.log("then ka msg is : "+ message);
//     return"promise fulfilled second msg";
// }).then((message) =>{                        //chaining
//     console.log("second msg : "+ message);
//     return"promise fulfilled third msg"
// }).then((message) =>{
//     console.log("third msg : "+ message);
// }).catch((error) => {
//     console.log("error: "+ error);
// })       

let promise1 = new Promise((resolve,reject)=> {
  setTimeout(resolve,1000,"first")
})
let promise2 = new Promise((resolve,reject)=> {
  setTimeout(resolve,2000,"second")
})
let promise3 = new Promise((resolve,reject)=> {
  setTimeout(resolve,3000,"third")
})
Promise.all([promise1,promise2,promise3])
.then((value)=>{
    console.log(value)
})
