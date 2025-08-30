// function changeText(event){
//     console.log(event)
//     let fpara = document.getElementById('fpara');
//     fpara.textContent = "love babbar"
// }

// let fpara = document.getElementById('fpara');

// fpara.addEventListener('click',changeText);
// fpara.removeEventListener('click',changeText);

// let achorElement = document.getElementById('fachor');
// achorElement.addEventListener('click',function(event){
//      event.preventDefault();
//     achorElement.textContent='default behavior change';
// });

// let paras = document.querySelectorAll('p');
// for(let i = 0 ; i<=paras.length; i++){
//     let para = paras[i];
//     para.addEventListener('click',function(){
//         alert("you have clicked on para : " + i+1);
//     })
// }

let paras = document.querySelectorAll('p');

// function alertPara(event){
//         alert("you have clicked on para : " + event.target.textContent);
//     }
function alertPara(event){
    if(event.target.nodeName=== 'SPAN'){
        alert("you have clicked on para : " + event.target.textContent);
        }
    }
//   for(let i = 0 ; i<=paras.length; i++){
//     let para = paras[i];
//     console.log("printing")
//     para.addEventListener('click',alertPara)
// }  

let mydiv = document.getElementById('wrapper');
mydiv.addEventListener('click',alertPara);
mydiv.addEventListener('mousedown',function(){
    console.log(" mouse down")
});

mydiv.addEventListener('mouseup',function(){
    console.log(" mouse up")
});
mydiv.addEventListener('mouseout',function(){
    console.log(" mouse out")
});
mydiv.addEventListener('mousein',function(){
    console.log(" mouse in")
});

