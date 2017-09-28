console.log('Loaded!');
//var element=document.getElementById("main-text");
//element.innerHTML="New Value";

//var image=document.getElementById("madi");
//var marginleft=0;
//function moveRight() {
 //marginleft=marginleft+10;
 //image.style.marginLeft=marginleft+'px';
//}
//image.onclick =function () {
  // var interval=setInterval(moveRight,100);
    //image.style.marginLeft="600px";
//};

var button=document.getElementById("button");
var counter=0;
button.onclick=function (){
  
  counter=counter+1;
  var span=document.getElementById("count");
  span.innerHTML="123";
  //counter.toString();
};