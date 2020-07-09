// 轮播图部分JS
var car=document.getElementsByClassName("carousel")[0];
var btns =car.getElementsByTagName("button");
var carousel_img=document.getElementsByClassName("carousel_img")[0];
var imgs=carousel_img.getElementsByTagName("img");
var lis=car.getElementsByTagName("li");
var j=0;
for(var i=0;i<btns.length;i++){
    btns[i].onclick=function(){
        if(this.innerHTML=="&gt;"){
            j++;
            if(j==3){
                j=0;
            }
            for(var i=0;i<imgs.length;i++){
                imgs[i].className="";
                lis[i].className="";
            }
            imgs[j].className="active"; 
            lis[j].className="active";
        }else{
            j--;
            if(j==-1){
                j=2;
            }
            for(var i=0;i<imgs.length;i++){
                imgs[i].className="";
                lis[i].className="";
            }
            imgs[j].className="active"; 
            lis[j].className="active";
        }
    } 
}
for(var i=0;i<lis.length;i++){
    lis[i].onclick=function(){
        for(var i=0;i<lis.length;i++){
            lis[i].className="";
            imgs[i].className="";
        }
        this.className="active";
        j=this.getAttribute("dy");
        imgs[j].className="active";
    }
}
//开启定时器
 timer=setInterval(function(){
            j++;
            if(j==3){
                j=0;
            }
            for(var i=0;i<imgs.length;i++){
                imgs[i].className="";
                lis[i].className="";
            }
            imgs[j].className="active"; 
            lis[j].className="active";
},2000);
//当鼠标移入的时候，定时器就关闭
car.onmouseover=function(){
    clearInterval(timer);
    timer=null;
}
//当鼠标移开的时候，定时器就开启
car.onmouseout=function(){
        timer=setInterval(function(){
            j++;
            if(j==3){
                j=0;
            }
            for(var i=0;i<imgs.length;i++){
                imgs[i].className="";
                lis[i].className="";
            }
            imgs[j].className="active"; 
            lis[j].className="active";
        },2000);
}


