var info=document.getElementById("hidden");
var download=document.getElementById("load");
var user=document.getElementById("header-user");
var enter=document.getElementById("enter");
var header=document.getElementById("header");
var li=header.getElementsByTagName("li");
//点击事件   背景颜色改变
for(let i=0;i<li.length;i++)
{
	li[i].onclick=function(){
		for(let i=0;i<li.length;i++)
		{
			li[i].className="";
		}
		this.className="turn";
	}
}
//当鼠标移入info时，二维码显示
download.onmouseover=function(){
	info.style.display="block";
}
//在info上移动时，二维码及左右边框不消失
info.onmousemove=function(){
	info.style.display="block";
	download.style.borderLeft="1px solid #E8E8E8";
	download.style.borderRight="1px solid #E8E8E8";
}
//移出info时，二维码及左右边框消失
info.onmouseout=function(){
	info.style.display="none";
	download.style.borderLeft="";
	download.style.borderRight="";
}
//二维码隐藏
download.onmouseout=function(){
	info.style.display="none";
}
//当鼠标移入user时，登录显示
user.onmouseover=function(){
	enter.style.display="block";
}
//登录隐藏
user.onmouseout=function(){
	enter.style.display="none";
}
//在enter上移动时，登录及左右边框不消失
enter.onmousemove=function(){
	enter.style.display="block";
	user.style.borderLeft="1px solid #E8E8E8";
	user.style.borderRight="1px solid #E8E8E8";
}
//移出enter时，登录及左右边框消失
enter.onmouseout=function(){
	enter.style.display="none";
	user.style.borderLeft="";
	user.style.borderRight="";
}