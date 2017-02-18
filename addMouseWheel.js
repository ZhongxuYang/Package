
/*-------------------滚轮事件封装---------------------*/
/*
 * 		obj		-	添加该事件的对象
 * 		fnUp	-	向上滚动执行的函数
 * 		fnDown	-	向下滚动执行的函数
 */
function addMouseWheel(obj,fnUp,fnDown){
	obj.onmousewheel = fn;
	obj.addEventListener('DOMMouseScroll',fn);
	function fn(ev){
		//true向上，false是向下
		var onOff = null;
		if(ev.wheelDelta){
			//chrome/ie
			onOff  = ev.wheelDelta>0?true:false;
		}else{
			//fireFox
			onOff  = ev.detail<0?true:false;
		}
		if(onOff){
			//向上
			if(typeof fnUp == 'function'){
				fnUp && fnUp();
			}
		}else{
			//向下
			if(typeof fnDown == 'function'){
				fnDown && fnDown();
			}
		}
		ev.preventDefault;
	}
}