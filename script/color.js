const btn = document.getElementById('nav-btn');

let randomNum = () => {
    return Math.floor(Math.random() * 256);
}

let changeColor = () => {
   let randomColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`
   document.body.style.backgroundColor = randomColor
   console.log('clikc me');
}

btn?.addEventListener('click', changeColor);
// window.addEventListener('load', changeColor) - if i want to keep my css background color as base than i do not need this line. if i want to use the bacckground color from random then i can use this line 