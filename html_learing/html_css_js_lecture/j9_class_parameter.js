console.log("hello user");
// function give input.........
function myName(myname){
    console.log("my name is : " , myname)
}
myName("bhumika");

// defaul parameter..........
function myName1(nname = "say my name"){
    console.log("my name is : " , nname)
}
myName1();

function myName2(fname = "udai" ,lname ="singh"){
    console.log("my name is : " , fname , " ",lname);
}
myName2();
myName2("love");
myName2("love","babbar");

//vale in parametes

function myValue(value = {age:23 , ht:5.4 , wt : 55}){
    console.log("hey value is: " , value)
}
myValue();


//default parametetr as function
function getAge(){
    return age =190;
}
function ageGetter(name = "bhumika", age = getAge()){
    console.log("my abe => ", name," ",age );
}
ageGetter();
ageGetter(82);
ageGetter("bhumika", 23);

// class and obj.....................
// class Human{
//     // properties.....
//     age =21; //public
//     #weight = 55; //private
//     height=5.5
//     // constructor............
//     constructor(valAge,valWeight,valHeight){
//         this.age=valAge;
//         this.#weight=valWeight;
//         this.height=valHeight;
//     }

//     // behaviour..............
//     #running(){  //private function..
//         console.log("human can run", this.#weight);
//     }
//     walking(){
//         console.log("Humans can walk");
//     }
//     get fetchWeight(){
//         return this.#weight
//     }
//     set modifyWeight(val){
//         this.#weight = val
//     }
// }
// let obj = new Human(25,57,5.4);
// console.log(obj.age)
// console.log(obj.weight) //can't access bcz private element
// console.log(obj.height)
// obj.running();
// obj.walking();
// console.log(obj.fetchWeight);
