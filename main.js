window.onload = function() {
    let body = document.body;
    function particles(e) {
        let element = document.createElement('span');
        element.classList.add('element');
        let colors = ['#a0a0d5','#bb8b3b','#8383e1','#3e9156','#f1ff3f'];
        let  randomColors = colors[Math.floor(Math.random() * colors.length)]
        let randomSize = Math.random() * 10;
        let randomTransform = Math.random() * 360;
        let X = e.offsetX;
        let Y = e.offsetY;
        element.style.left= `${X}px`;
        element.style.top = `${Y}px`;
        element.style.width = `${3 + randomSize}px`;
        element.style.height = `${3 + randomSize}px`;
        element.style.transform = `rotate(${randomTransform}deg)`;
        element.style.backgroundColor = `${randomColors}`;
        body.appendChild(element);
        setTimeout(() => {
            element.remove();
        },2000)
    }
    document.addEventListener('mousemove', particles);
}