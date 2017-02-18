
/*-----------------碰撞检测函数封装-------------------*/

/*
 * 		如果碰上返回true，没碰上返回false。
 * 
 * 		obj1	-	要检测的元素1；
 * 		obj2	-	要检测的元素2；
 * 
 */

function collide(obj1,obj2){
	var pos1 = obj1.getBoundingClientRect();
	var pos2 = obj2.getBoundingClientRect();
	if(pos1.right<pos2.left || pos1.bottom<pos2.top || pos1.left>pos2.right || pos1.top>pos2.bottom){
		//没碰上
		return false;
	}else{
		//碰上
		return true;
	}
}