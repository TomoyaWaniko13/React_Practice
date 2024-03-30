const h1Element = document.querySelector('h1');
console.dir(h1Element);

h1Element.textContent = 'changed...'

const btnElement = document.querySelector('button');

// btnElement.addEventListener('click', (ev) => {
//     console.log(ev.target);
// })

const helloFn = (event) => {
    console.log(event.target.textContent);
};

btnElement.addEventListener('click', helloFn);