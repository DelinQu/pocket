function addLoadEvent(func)
{
	var oldonload=window.onload;
	if(typeof window.onload!='function')//未被绑定
	{
		window.onload=func;
	}
	else
	{
		window.onload=function()//匿名函数添加
		{
			oldonload();
			func();
		}
	}
}
function insertAfter(newElement,targetElement)
{
	if(!targetElement) return false;
	var parent=targetElement.parentNode;//获取目标的父节点
	if(parent.lastChild==targetElement)
	{
		parent.appendChild(newElement);
	}
	else
	{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}
function addClass(elem,value)
{
	if(!elem.className)
	{
		elem.className=value;
	}
	else elem.className+=" "+value;
}
function hightLightPage()
{
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	var header=document.getElementsByTagName("header");
	if(header.length==0) return false;
	var vans=header[0].getElementsByTagName("ul");
	if(vans.length==0) return false;
	var links=vans[0].getElementsByTagName("a");
	for(var i=0;i<links.length;i++)
	{
		var url=links[i].getAttribute("href");
		if(window.location.href.indexOf(url)!=-1)
		{
			links[i].className="here";
		}
	}
}
addLoadEvent(hightLightPage);
function prepareSlidshow()
{
	if(!document.getElementById) return false;
	if(!document.getElementsByTagName) return false;
	var slideShow=document.createElement("div");
	slideShow.setAttribute("id","slideShow");
	
	var preview=document.createElement("img");
	preview.setAttribute("src","images/test.jpg");
	preview.setAttribute("alt","Choose a picture");
	preview.setAttribute("id","preview");
	slideShow.appendChild(preview);

	var gallery=document.getElementById("gallery");//找到插入位置
	insertAfter(slideShow,gallery);

	preview.style.position="absolute";
	preview.style.left="0px";
	preview.style.top="0px";
	var move=0;
	loop("preview",move,2000,20);
}
addLoadEvent(prepareSlidshow);
function loop(id,move,time,movetime)//动画
{
	if(move<=-2000) move=0;//边界
	else move-=400;
	moveElement(id,move,0,movetime);
	//loop(id,move,time,movetime);
	var repeat="loop('"+id+"',"+move+","+time+","+movetime+")";
	t=setTimeout(repeat,time);
}
function moveElement(elementId,final_x,final_y,interval)
{
	if(!document.getElementById) return false;
	if(!document.getElementById(elementId)) return false;
	var elem=document.getElementById(elementId);
	var x=parseInt(elem.style.left);
	var y=parseInt(elem.style.top);
	if(elem.timer) clearTimeout(elem.timer);
	if(x==final_x&&y==final_y) return true;//边界条件
	var dis_x,dis_y;
	dis_x=Math.ceil((final_x-x)/10);//向上取整
	x+=dis_x;
	//round向下取整
	dis_y=Math.ceil((final_y-y)/10);//向上取整
	y+=dis_y;
	elem.style.left=x+"px";
	elem.style.top=y+"px";
	var repeat="moveElement('"+elementId+"',"+final_x+","+final_y+","+interval+")";
	elem.timer=setTimeout(repeat,interval);//定时器设置，递归调用
}
function prepareGallery()
{
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("photoGallery")) return false;
	var gallery=document.getElementById("photoGallery");
	var links=gallery.getElementsByTagName("a");
	for(var i=0;i<links.length;i++)
	{
		links[i].onclick=function()
		{
			return !showPic(this);//调用showPic函数
		}
		links[i].onkeypress=links[i].onclick;
	}                                                         
}
function showPic(element){
	if(!document.getElementById("placeholder")) return false;
	var source=element.getAttribute("href");//获取元素节点的src属性值
	var placeholder=document.getElementById("placeholder");//查找placeholder元素节点
	if(placeholder.nodeName!="IMG") return false;//nodeName总是返回大写字母
	placeholder.setAttribute("src",source);//设置placeholder的src属性值为
	if(document.getElementById("description"))
	{
		var description=document.getElementById("description");//获取元素
		var text=element.getAttribute("title")?element.getAttribute("title"):"";
		//查找成功则获取title，否则获取空串,这样不会因为无法访问title而导致图片也无法加载
		if (description.firstChild.nodeType==3) description.firstChild.nodeValue=text;//当节点类型为3的时候，添加
	}
	return true;
}
function preparePlaceHolder()
{
	if(!document.createTextNode) return false;
	if(!document.createElement) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("photoGallery")) return false;
	var placeholder=document.createElement("img");
	placeholder.setAttribute("id","placeholder");
	placeholder.setAttribute("src","images/background6.jpg");
	placeholder.setAttribute("alt","This is my photoGallery");
	placeholder.setAttribute("height","400");
	placeholder.setAttribute("width","629");
	var description=document.createElement("p");
	description.setAttribute("id","description");
	var txt=document.createTextNode("Choose an image");
	description.appendChild(txt);
	var photoGallery=document.getElementById("photoGallery");
	//photoGallery.parentNode.insertBefore(placeholder,photoGallery);
	//photoGallery.parentNode.insertBefore(description,photoGallery);
	insertAfter(placeholder,photoGallery);
	insertAfter(description,placeholder);
}
addLoadEvent(preparePlaceHolder);
addLoadEvent(prepareGallery);

function getNextElement(node)
{
	if(node.nodeType==1)
	{
		return node;
	}
	if(node.nextSibling)
	{
		return getNextElement(node.nextSibling);
	}
	return null;
}
function styleHeaderSiblings()
{
	if(!document.getElementsByTagName) return false;
	var headers=document.getElementsByTagName("h1");
	for(var i=0;i<headers.length;i++)
	{
		elem=getNextElement(headers[i].nextSibling);//取出下一个元素节点
		if(elem)
		{
			elem.style.fontWeight="bold";
			elem.style.fontSize="1.2em";			
		}
	}
}
function tripeTables()
{
	if(!document.getElementsByTagName) return false;
	var tables=document.getElementsByTagName("table");

	for(var i=0;i<tables.length;i++)
	{
		var rows=tables[i].getElementsByTagName("tr");//取得所有列
		for(var j=0;j<rows.length;j++)
		{
			if(j%2) rows[j].setAttribute("class",'odd');
				else rows[j].setAttribute("class",'even')
		}
	}
}
function HightRows()
{
	if(!document.getElementsByTagName) return false;
	var rows=document.getElementsByTagName("tr");
	var oldClass;
	for(var i=0;i<rows.length;i++)
	{
		rows[i].onmouseover=function()
		{
			oldClass=this.getAttribute("class");
			this.setAttribute("class","styleover")
		}
		rows[i].onmouseout=function()
		{
			this.className=oldClass;
		}
	}
}
addLoadEvent(tripeTables);
addLoadEvent(HightRows);