var real=document.getElementsByClassName("real")[0];
var lakes=real.getElementsByClassName("lake");
var right=real.getElementsByClassName("right");
console.log(right)
//console.log(lakes)
for(var i=0;i<lakes.length;i++){
	lakes[i].onclick=function(){
		for(var i=0;i<lakes.length;i++){
			lakes[i].className="lake";
			right[i].className="right";
		}
		this.className="lake active";
		var x=this.getAttribute("dy");
		right[x].className="right active"
	}
}
