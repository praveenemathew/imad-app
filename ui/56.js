console.log('566666666666666666666666666666Loaded!');
var button=document.getElementById("button");
button.onclick=function (){
    console.log("Hai");
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
        
    if(request.readyState === XMLHttpRequest.DONE){
        if(request.status===200){
            var txt= request.responseText;
            var span=document.getElementById("demo");
            span.innerHTML=txt.toString();
            
        }
     }
    };
  request.open('GET','http://praveenemathew.imad.hasura-app.io/change',true);
  request.send();
};
