const main = document.querySelector(".main");
const text = main.querySelector("h1");

function shadow(e) {
let height = main.offsetHeight;
let width = main.offsetWidth;
//or let {offsetWidth: width, offsetHeight: height} = main;
let x = e.offsetX;
let y = e.offsetY;
//or let {offsetX: x, offsetY: y} = e;
if (this !== e.target) //this is the event listener, in our case it's main
                    // e.target will change depending on the element it's pointing
{
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
}
console.log(x, y);
}
main.addEventListener("mousemove", shadow);