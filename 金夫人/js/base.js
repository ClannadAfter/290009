var lake=document.getElementsByClassName("lake");
var lux =document.getElementsByClassName("lux")[0];
var ul=lux.getElementsByTagName("ul");
// ul[0].style.display="block";
var i = 0;

for(var j=0;j<lake.length;j++){
    lake[j].onclick=function(e){
        i++;
        if(i%2==1){
         for(var y=0;y<ul.length;y++){
            lake[y].className="lake";
            ul[y].style.display="";
         }
        this.className="lake active";
        var x=this.getAttribute("dy");
        ul[x].style.display="block";
        }else{
            for(var y=0;y<ul.length;y++){
                lake[y].className="lake";
                ul[y].style.display="";
             }
            this.className="lake active";
            var x=this.getAttribute("dy");
            ul[x].style.display="none";
        }
        
    }
}

// 图片点击部分JS
var bottom=document.getElementsByClassName("bottom")[1];
var btns=bottom.getElementsByTagName("button");
var imgs=bottom.getElementsByTagName("img");
var see =bottom.getElementsByClassName("see");
for(var i=0;i<imgs.length;i++){
    imgs[i].onmouseover=function(){
        for(var j=0;j<imgs.length;j++){
            imgs[j].style.transform="scale(1)";
            see[j].style.display="none";
        }
        this.style.transform="scale(1.1)";
        var x=this.getAttribute("dy");
        see[x].style.display="block";
    }
}
//点击切换效果
var lux =document.getElementsByClassName("lux")[0];
var left=lux.getElementsByClassName("left")[0];
var a=left.getElementsByTagName("a");
var right=lux.getElementsByClassName("right");
var tops=lux.getElementsByClassName("top")[0];
var span =tops.getElementsByTagName("span")[0];
console.log(span)
for(var i=0;i<a.length;i++){
	a[i].onclick=function(){
		for(var i=0;i<a.length;i++){
			a[i].className="";
			right[i].className="right";
		}
		this.className="active";
		var x=this.getAttribute("dy");
		console.log(x);
		right[x].className="right active"
		span.innerHTML=this.innerHTML;
	}
}

// 阻止浏览器的默认行为



