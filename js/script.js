
let inp = document.querySelector('#inp');
let btn = document.querySelector('#btn');
let elem = document.querySelector('#elem');

btn.addEventListener('click', function fact() {
    let sum = 1;
    for (let i = inp.value; i>0; i--) {
        sum *= +i;
    }
    elem.textContent = sum;
})










