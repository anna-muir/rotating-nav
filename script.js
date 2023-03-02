const container = document.getElementById('container')

const delayTransition = () => {
    container.classList.remove('no-transition');
}

(function () {
    delayTransition();
})()


const open = document.getElementById('open');
const close = document.getElementById('close');


const rotateDiv = () => {
    container.classList.add('active');
    open.classList.add('display-none');
    console.log(open)
    close.classList.remove('display-none');
}

const rotateDivOpposite = () => {
    container.classList.remove('active');
    open.classList.remove('display-none');
    close.classList.add('display-none')
}

open.addEventListener('click', rotateDiv)
close.addEventListener('click', rotateDivOpposite)