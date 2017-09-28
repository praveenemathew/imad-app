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
button.onclick=function (){
    
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
        
    if(request.readyState === XMLHttpRequest.DONE){
        if(request.status===200){
            var counter= request.responseText();
            var span=document.getElementById("count");
            span.innerHTML=counter.toString();
            
        }
     }
    };
  request.open('GET','http://praveenemathew.imad.hasura-app.io/counter',true);
  request.send("HELLO");
};