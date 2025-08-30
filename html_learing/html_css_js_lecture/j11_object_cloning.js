console.log("hello user");
// dynamic object....
// let obj ={
//     age:21,
//     wt:55,
//     ht:5.5
// };
// console.log(obj);
// obj.colour = "white";
// console.log(obj)
// ...............

// cloning........
let src ={
    age:21,
    wt:55,
    ht:5.5
};

let src1 ={
    name:'Bhumika',
    value:101
};
// way1..............
let dest = {...src};
src.age = 25;
console.log("src: " ,src);
console.log("dest: " ,dest);

// way2 :assign........
let dest1 = Object.assign({},src , src1);
src.age = 295;
console.log("src: " ,src);
console.log("dest: " ,dest1);


