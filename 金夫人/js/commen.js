// 导航的JS
var bottom=document.getElementsByClassName("bottom")[0];
var lis1=bottom.getElementsByTagName("li");

for(var i=0;i<lis1.length;i++){
    lis1[i].onclick=function(){
        for(var j=0;j<lis1.length;j++){
            console.log(lis1);
           lis1[j].className="";
        }
        this.className="active";
    }
}