
let name = "bhumika";
function outerFunction() {
  let name = "lovve "; // let-> block scope
  function innerFunction() {
    let name = "babbar"; // displayName() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
  }
  innerFunction();
}
outerFunction();
