
/*----------------------拖拽函数封装-----------------------*/

/*
 * 		obj	-	要添加拖拽的元素
 */
function drag(obj){
	obj.onmousedown = function(ev){
	ev.preventDefault();
	var disX = ev.clientX - this.getBoundingClientRect().left;
	var disY = ev.clientY - this.getBoundingClientRect().top;
	document.onmousemove = function(ev){
		var l = ev.clientX - disX;
		var t = ev.clientY - disY;
		obj.style.left = l + 'px';
		obj.style.top = t + 'px';
	}
	document.onmouseup = function(){
		document.onmousemove = document.onmouseup = null;
	}
	//return false;
	}
}