console.log('Loaded!');
var element=document.getElementById("main-text");
element.innerHTML="New Value";

var image=document.getElementById("madi");
var marginleft=0;
function moveRight() {
 marginleft=marginleft+10;
 image.style.marginleft=marginleft+'px';
}
image.onclick =function () {
   //var interval=setInterval(moveRight,100);
    image.style.height="600px";
};