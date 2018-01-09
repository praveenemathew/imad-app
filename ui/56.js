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
            
            x = xmlDoc.getElementsByTagName("book")[0];
            xlen = x.childNodes.length;
            y = x.firstChild;
            txt = "";
            for (i = 0; i < xlen; i++) {
                 if (y.nodeType == 1) {
                     txt += i + " " + y.nodeName + "<br>";
                         }
                  y = y.nextSibling;
              }
             document.getElementById("demo").innerHTML = txt; 

            
            
            var span=document.getElementById("demo");
            x=xmlDoc.childNodes;
            console.log(x,"--->ChildNodes");
             x=xmlDoc.doctype;
            console.log(x,"--->Document Type");
             x=xmlDoc.documentElement;
            console.log(x,"---->Document Element");
             x=xmlDoc.documentURI;
            console.log(x,"------>Document URL");
             x=xmlDoc.domConfig;
            console.log(x,"------>Dom Config");
             x=xmlDoc.implementation;
            console.log(x,"----->Implementation");
             x=xmlDoc.firstChild;
            console.log(x,"---->FirstChild");
             x=xmlDoc.inputEncoding;
            console.log(x,"--->Input Encoding");
            
            span.innerHTML=txt;
        }
     }
    };
  request.open('GET','http://praveenemathew.imad.hasura-app.io/change',true);
  request.send();
};
