
var button=document.getElementById("button");
button.onclick=function (){
    
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
        
    if(request.readyState === XMLHttpRequest.DONE){
        if(request.status===200){
            var txt= request.responseText;
            var span=document.getElementById("p");
            span.innerHTML=txt;
            
        }
     }
    };
  request.open('GET','http://praveenemathew.imad.hasura-app.io/counter',true);
  request.send();
};
