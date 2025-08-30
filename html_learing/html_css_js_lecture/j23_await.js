// async function myData() {
//     setTimeout(function(){
//         console.log("i am inside settimeout block");
//     },3000);
// }
// myData();

//await:


//fetch api

// async function myData() {
//     //get request async
//     let response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
//     // console.log(response);
//     //parse json async
//     let data = await response.json();
//     console.log(data)
// }
// myData();
//scenarion:
//prepare url / api endpoint -> sync
//fetch data -> network call -> async
//process data -> sync


const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const url = "https://jsonplaceholder.typicode.com/posts";
const option={
    method: "POST",
    body: JSON.stringify({ username: "love babbar" }),
    headers: myHeaders,
}
async function postData() {
    const response = await fetch(url,option);
    let data =  await response.json;
    console.log("my data: "+ data)
}
postData();
