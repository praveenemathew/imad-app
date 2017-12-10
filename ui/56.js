console.log('566666666666666666666666666666Loaded!');
var button=document.getElementById("button");
button.onclick=function (){
    console.log("Hai");
    var i,x,txt;
    txt="";
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
        
    if(request.readyState === XMLHttpRequest.DONE){
        if(request.status===200){
            var xmlDoc= request.responseXML;
            var span=document.getElementById("demo");
            x=xmlDoc.documentElement.childNodes;
            
           
            span.innerHTML=txt;
        }
     }
    };
  request.open('GET','http://praveenemathew.imad.hasura-app.io/change',true);
  request.send();
};
