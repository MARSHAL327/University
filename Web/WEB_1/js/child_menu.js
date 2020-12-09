var el=document.getElementsByClassName('menu-item');
for (var i=0; i<el.length;i++){
	console.log(el[i]);
	el[i].addEventListener("mouseenter",showSub,false);
	el[i].addEventListener("mouseleave",hideSub,false);
}
	
function showSub(){
	console.log("ok");
		if(this.children.length>1){
			this.children[1].style.height = "auto";
      		this.children[1].style.overflow = "visible";
      		this.children[1].style.opacity = "1";
		} else{
			return false;
		}
}

function hideSub(){
		if(this.children.length>1){
			this.children[1].style.height = "0";
      		this.children[1].style.overflow = "hidden";
      		this.children[1].style.opacity = "0";
		} else{
			return false;
		}
}

/*var col=document.getElementByClassName("top-menu");
col.onmouseover = function Col(){
 this.setAttribute("style","background-color:black;");
}*/
