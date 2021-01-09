	
function showSub(){
	el[0].style.display="block";
	el[0].style.display="1";
	el[0].style.display="auto";
}
		
function hideSub(){
	for (let i=0; i<el.lenght;i++){
	el[i].style.display="none";
	el[i].style.display="0";
	el[i].style.display="0px";
}
		


//var col=document.getElementByClassName("top-menu");
//col.onmouseover = functionCol(){
 //this.setAttribute("style","background-color:black;");
//}
<script>
			var el=document.getElementByClassName('menu-item');
document.getElementById("").addEventListener("mouseover",showSub,true);
document.getElementById("").addEventListener("mouseout",hideSub,true);
		</script>