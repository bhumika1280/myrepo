let mydiv = document.querySelector('#mydiv');
let newElement = document.createElement('span')

newElement.textContent = "this is me love babbar";

// mydiv.insertAdjacentElement('beforebegin', newElement);
mydiv.insertAdjacentElement('afterbegin', newElement);
// mydiv.insertAdjacentElement('beforend', newElement);
// mydiv.insertAdjacentElement('beforend', newElement);
