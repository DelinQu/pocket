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
//唱片的旋转
function player(audio,pic)
{
	if(audio.paused)//当前状态
	{
		pic.setAttribute("class","animation1");
	}
	else
	{
		pic.setAttribute("class","animation2");
	}
}
function playe_Pause()
{
	if(!document.getElementsByTagName) return false;
	var audioes=document.getElementsByTagName("audio");
	var pictures=document.getElementsByTagName('article')[0].getElementsByTagName("img");
	if(!audioes||!pictures) return false;

	audioes[0].addEventListener("pause",function(){
		player(audioes[0],pictures[0].parentNode);
	});
	audioes[0].addEventListener("play",function(){
		player(audioes[0],pictures[0].parentNode);
	});			
	audioes[1].addEventListener("pause",function(){
		player(audioes[1],pictures[1].parentNode);
	});
	audioes[1].addEventListener("play",function(){
		player(audioes[1],pictures[1].parentNode);
	});		
	audioes[2].addEventListener("pause",function(){
		player(audioes[2],pictures[2].parentNode);
	});
	audioes[2].addEventListener("play",function(){
		player(audioes[2],pictures[2].parentNode);
	});	
	audioes[3].addEventListener("pause",function(){
		player(audioes[3],pictures[3].parentNode);
	});
	audioes[3].addEventListener("play",function(){
		player(audioes[3],pictures[3].parentNode);
	});		
	audioes[4].addEventListener("pause",function(){
		player(audioes[4],pictures[4].parentNode);
	});
	audioes[4].addEventListener("play",function(){
		player(audioes[4],pictures[4].parentNode);
	});	
	audioes[5].addEventListener("pause",function(){
		player(audioes[5],pictures[5].parentNode);
	});
	audioes[5].addEventListener("play",function(){
		player(audioes[5],pictures[5].parentNode);
	});		
	audioes[6].addEventListener("pause",function(){
		player(audioes[6],pictures[6].parentNode);
	});
	audioes[6].addEventListener("play",function(){
		player(audioes[6],pictures[6].parentNode);
	});				
	
}
addLoadEvent(playe_Pause);