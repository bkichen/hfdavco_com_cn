// 月影社区 http://wf66.com/ ver8.0  //
//全屏模式
function fullScreen() {
var el = document.documentElement,
rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen,
wscript;
if(typeof rfs != "undefined" && rfs) {
rfs.call(el);
return;
}
if(typeof window.ActiveXObject != "undefined") {
wscript = new ActiveXObject("WScript.Shell");
if(wscript) {
wscript.SendKeys("{F11}");
}
}
}
 
//退出全屏
function exitFullScreen() {
var el = document,
cfs = el.cancelFullScreen || el.webkitCancelFullScreen || el.mozCancelFullScreen || el.exitFullScreen,
wscript;
if (typeof cfs != "undefined" && cfs) {
cfs.call(el);
return;
}
if (typeof window.ActiveXObject != "undefined") {
wscript = new ActiveXObject("WScript.Shell");
if (wscript != null) {
wscript.SendKeys("{F11}");
}
}
}

//新闻排列
function news(name,str,topage,url,list){
var ii=0;
if (topage<1){topage=1}
topage++
if($(name).attr("load")==undefined){for (var i=0;i<str;i++){$(name).append("<div></div>");}}
var div_widtth=$(name).width()/str-str;
var _w=div_widtth*0.8;
var cp=$("#news_data").eq(0).children("li");
if(cp.length>0){
for (var i=0;i<cp.length;i++)
{
if(ii==str){ii=0}
$(name).children("div").eq(ii).append("<li>"+cp.eq(i).html()+"</li>");	
$(name).children("div").eq(ii).css({"width":div_widtth,"left":ii*div_widtth});
cp.eq(i).remove();
ii++;
}
$(name).children("div").css("min-height","100%");
$(name).children("div").eq(0).css("border-left",0);
}

for (var i=0;i<str;i++){$(name).children("div").eq(i).children("li").eq(0).children("ol").attr("style","display:block");}
$(name).children("div").mouseover(function(){$(this).children("li").children("ol").attr("style","")})
$(name).children("div").children("li").mouseleave(function(){$(this).children("ol").attr("style","display:block")})
}

////信息提示
//function error3(content,times){
//if ($(".error3").length==0)
//{$("body").append("<div class=\"error3\"><h1 class=\"title3\"><i class=\"g\"></i>信息提示<span></span></h1><div>"+content+"</div></div>")}
//else
//{clearTimeout($(".error3").attr("timer"));$(".error3").children("div").html(content);}
//$(".error3").children("h1").click(function(){clearTimeout(timer);$(".error3").remove();});
//var top=$(document).scrollTop()+($(window).height()-$(".error3").height())/2;
//$(".error3").css("left",($(window).width()-$(".error3").width())/2).css("top",top);
//if (times>0){
//$(".error3").children("h1").children("span").text(times);
//times=times-1;
//var timer=setTimeout("error3('"+content+"',"+times+")",1000);
//$(".error3").attr("timer",timer);
//}else{clearTimeout(timer);$(".error3").remove();}
//}

//地区选择
function diqu(str){
var shuzu= new Array();  
shuzu="北京,上海,广东,辽宁,广西,海南,湖南,甘肃,河北,湖北,江西,江苏,西藏,山东,浙江,安徽,福建,吉林,黑龙江,山西,云南,贵州,四川,陕西,重庆,天津,河南,青海,宁夏,新疆,台湾,香港,澳门,其它地区".split(",");
for(var i=0;i<shuzu.length;i++){$(str).append("<option value='"+shuzu[i]+"'>"+shuzu[i]+"</option>");}
}


//展示排列
function showlist(name,str,str2,topage,url,list){
var ii=0;
if (topage<1){topage=1}
topage++
if($(name).attr("load")==undefined){for (var i=0;i<str;i++){$(name).append("<div></div>");}}
var div_widtth=$(name).width()/str-str;
var _w=div_widtth*0.8;
$("#showdata").html($("#showdata").html().toLowerCase().replace(/small4_/g,str2));
var cp=$("#showdata").eq(0).children("li");
if(cp.length>0){
for (var i=0;i<cp.length;i++)
{
if(ii==str){ii=0}
$(name).children("div").eq(ii).append("<li>"+cp.eq(i).html()+"</li>");	
$(name).children("div").eq(ii).css({"width":div_widtth,"left":ii*div_widtth});
cp.eq(i).remove();
ii++;
}
$(name).children("div").css("min-height","100%");
$(name).children("div").eq(0).css("border-left",0);
}
if (list==0){$("ul.page_list").css("display","none");
window.onscroll = function () {
	if ($(document).scrollTop()>(document.body.offsetHeight - document.documentElement.clientHeight - 200))
	{
	if ($(name).attr("load")!="no"){
		$(name).attr("load","no");
	$("#showdata").load(url+"&topage="+topage,function(responseTxt,statusTxt,xhr){
		if(statusTxt=="success"&&responseTxt.length>20){$(name).attr("load","yes");showlist(name,str,str2,topage,url,list);}else{$(name).attr("load","no");error3("已经展示了所有数据.",5);}
	});
	}
	}}}
}


//缩略图替换 注意内容class应为content
//function showpic(c,str){
//$(c).find("img").click(function(){
//fullScreen();
//var oldtop=$(document).scrollTop();
//window.scrollTo(0,0);
//$("body").css("overflow","hidden").append("<div id=\"show\"><div><img src='"+this.src.toLowerCase().replace(str,"")+"' alt=\"点我关闭\"></div><dl class=bian2><dt></dt></dl></div>");
//$("#show").before("<div class=\"show\"></div>");
//var img=$(c).find("img");
//for(var i=0;i<img.length;i++){
//	if(img.eq(i).width()>100){$("#show").children("dl").children("dt").append("<dd><img src="+img.eq(i).attr("src")+"></dd>");}
//	}
//$("#show").children("dl").find("img").hover(function(){
//	  $("#show").children("div").children("img").attr("src",this.src.toLowerCase().replace(str,""));
//},function(){})
//
//$("#show").children("div").click(function(){$("#show").remove();$(".show").remove();$("body").css("overflow","auto");window.scrollTo(0,oldtop);exitFullScreen();})
//})
//$(c).find("img").attr("alt","戳我试试").attr("title","戳我试试");
//}

function base(){var base=window.location.href.split("/");return window.location.href.replace(base[base.length-1],"");}

//ALT
function getEvent(evt){evt=evt?evt:(window.event?window.event:null);return evt}
function getElement(evt){evt=getEvent(evt);return evt.target||evt.srcElement}

document.onmousemove=function (evt){
if($("#alttxt").length==0){$("body").append("<div id='alttxt' style=''></div>")};
var alttxt=document.getElementById("alttxt");
var o=getElement(evt);
if(o.alt!=null&&o.alt!=""){o.dypop=o.alt;o.alt=""}
if(o.title!=null&&o.title!=""){o.dypop=o.title;o.title=""}
if(o.dypop!=null){
alttxt.style.display="block";
alttxt.innerHTML=o.dypop;
evt=getEvent(evt);
var x=evt.clientX;
var y=evt.clientY;
var scrollTop=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;
popWidth=alttxt.clientWidth;
popHeight=alttxt.clientHeight;
if(x+12+popWidth>document.body.clientWidth){popLeftAdjust=-popWidth-24}else{popLeftAdjust=0}
if(y+12+popHeight>document.body.clientHeight){popTopAdjust=-popHeight-24}else{popTopAdjust=0}
alttxt.style.left=x+12+document.body.scrollLeft+popLeftAdjust+'px';alttxt.style.top=y+12+scrollTop+popTopAdjust+'px';
}else{alttxt.style.display="none";}
}

//确认框
function checkclick(msg){if(confirm(msg)){event.returnValue=true;}else{event.returnValue=false;}}

//加载js
function loaddata(url){var script = document.createElement("script");script.type = "text/javascript";script.charset = "utf-8";document.getElementsByTagName("head")[0].appendChild(script);script.src = url;}


if(/MSIE ([^;]+)/.test(navigator.userAgent)){var banben=parseFloat(RegExp["$1"]);
//alert(banben);

//IE9以下HTML5元素兼容
(function(){var e="abbr,article,aside,audio,canvas,datalist,details,dialog,eventsource,figure,footer,header,hgroup,mark,menu,meter,nav,output,progress,section,time,video".split(","),t=e.length;while(t--)document.createElement(e[t])})();}


function isMouseLeaveOrEnter(e, handler) {if (e.type != 'mouseout' && e.type != 'mouseover') return false;var reltg = e.relatedTarget ? e.relatedTarget : e.type == 'mouseout' ? e.toElement : e.fromElement;while (reltg && reltg != handler)reltg = reltg.parentNode;return (reltg != handler);}

//li.hover
function infohover(ById,TagName,classNames){try{var o=document.getElementById(ById);var obj=o.getElementsByTagName(TagName);obj[0].className=classNames;
var ii=-obj[0].offsetWidth;for(var i=0;i<obj.length;i++){ii=ii+obj[0].offsetWidth;try{obj[i].getElementsByTagName("dd")[0].style.left=-ii+"px";obj[i].getElementsByTagName("dd")[0].style.width=o.offsetWidth-22+"px";}catch(err){}if(i>0)obj[i].className="";obj[i].onmouseover=function(){for (var ii=0;ii<i;ii++){obj[ii].className = ""}this.className=classNames;}}}catch(err){}}
function lihover(ById,TagName,classNames){try{var obj=document.getElementById(ById).getElementsByTagName(TagName);for(var i=0;i<obj.length;i++){obj[i].onmouseover=function(){this.className=classNames;};obj[i].onmouseout=function(){this.className=""}}}catch(err){}}

//table样式
var $table = function(a) { return document.getElementById(a) };
function table(c, styover, styout) {$table(c).onmouseover = function() { var tr1 = this.getElementsByTagName("tr"); for (var i = 0; i < tr1.length; i++) { if (tr1[i].className != "trclass") { tr1[i].onmouseover = function() { this.className = styover }; tr1[i].onmouseout = function() { this.className = styout }; } } }  }

//检查checkbox
function startUsing(str){
	var allText = document.getElementsByName(str);
	var str2=allText[0].checked;for(var i = 0;
	i < allText.length; i++){if (i>0 && str2==false){allText[i].disabled = "";
	}
	if(i>0 &&  str2==true){allText[i].disabled = "disabled";allText[i].checked="checked";}}}

//链接选择记忆selectlink(ID名,变换样式名)
function selectlink(str,str2){	var a=document.getElementById(str);var b=a.getElementsByTagName("a");var c=a.getElementsByTagName("li");for(var i = 0; i < b.length; i++){if(decodeURI(b[i].href)==decodeURI(window.location.href)){c[i].className=str2;}}}


//Showbox
function showbox(str){document.getElementById("wf66com_flash").innerHTML="<style>html{overflow:hidden;}</style><iframe id='showbox'></iframe><div id='showbox2'></div><div id='closebox'><a href='#' onclick='closebox()'>关闭</a></div><div id='loadbox' ><div id='loadlayer'>"+str+"</div></div> ";var loadbox =document.getElementById("loadlayer");var showbox = document.getElementById("showbox");loadbox.style.display = "block" ;showbox.style.display = "block";}
function closebox(){document.getElementById("wf66com_flash").innerHTML="<style>html{overflow:auto;}</style>";document.getElementById("showbox").style.display = "none";document.getElementById("showbox2").style.display = "none";document.getElementById("loadlayer").style.display = "none";document.getElementById("closebox").style.display = "none";}   

//内容替换
function replaces(id,id2){if (id2==""){document.getElementById(id).innerHTML=""}else{document.getElementById(id).innerHTML=document.getElementById(id2).innerHTML}}

//sethtml
function sethtml(str,str2){document.getElementById(str).innerHTML=str2;}


//2010.8.12  新增标题字数限制
function div_title(num,lei){document.write("<style type='text/css'><!--#div_title"+lei+" div{width:"+num+"px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;}--></style>")}


function SDMenu(id){if(!document.getElementById||!document.getElementsByTagName)return false;this.menu=document.getElementById(id);this.submenus=this.menu.getElementsByTagName("div");this.remember=true;this.speed=5;this.markCurrent=true;this.oneSmOnly=true}
SDMenu.prototype.init=function(){var mainInstance=this;for(var i=0;i<this.submenus.length;i++)this.submenus[i].getElementsByTagName("span")[0].onclick=function(){mainInstance.toggleMenu(this.parentNode)};if(this.markCurrent){var links=this.menu.getElementsByTagName("a");for(var i=0;i<links.length;i++)if(links[i].href==document.location.href){links[i].className="current";break}}if(this.remember){var regex=new RegExp("sdmenu_"+encodeURIComponent(this.menu.id)+"=([01]+)");var match=regex.exec(document.cookie);if(match){var states=match[1].split("");for(var i=0;i<states.length;i++)this.submenus[i].className=(states[i]==0?"collapsed":"")}}};
SDMenu.prototype.toggleMenu=function(submenu){if(submenu.className=="collapsed")this.expandMenu(submenu);else this.collapseMenu(submenu)};
SDMenu.prototype.expandMenu=function(submenu){var fullHeight=submenu.getElementsByTagName("span")[0].offsetHeight;var links=submenu.getElementsByTagName("a");for(var i=0;i<links.length;i++)fullHeight+=links[i].offsetHeight;var moveBy=Math.round(this.speed*links.length);var mainInstance=this;var intId=setInterval(function(){var curHeight=submenu.offsetHeight;var newHeight=curHeight+moveBy;if(newHeight<fullHeight)submenu.style.height=newHeight+"px";else{clearInterval(intId);submenu.style.height="";submenu.className="";mainInstance.memorize()}},30);this.collapseOthers(submenu)};
SDMenu.prototype.collapseMenu=function(submenu){var minHeight=submenu.getElementsByTagName("span")[0].offsetHeight;var moveBy=Math.round(this.speed*submenu.getElementsByTagName("a").length);var mainInstance=this;var intId=setInterval(function(){var curHeight=submenu.offsetHeight;var newHeight=curHeight-moveBy;if(newHeight>minHeight)submenu.style.height=newHeight+"px";else{clearInterval(intId);submenu.style.height="";submenu.className="collapsed";mainInstance.memorize()}},30)};
SDMenu.prototype.collapseOthers=function(submenu){if(this.oneSmOnly){for(var i=0;i<this.submenus.length;i++)if(this.submenus[i]!=submenu&&this.submenus[i].className!="collapsed")this.collapseMenu(this.submenus[i])}};
SDMenu.prototype.expandAll=function(){var oldOneSmOnly=this.oneSmOnly;this.oneSmOnly=false;for(var i=0;i<this.submenus.length;i++)if(this.submenus[i].className=="collapsed")this.expandMenu(this.submenus[i]);this.oneSmOnly=oldOneSmOnly};
SDMenu.prototype.collapseAll=function(){for(var i=0;i<this.submenus.length;i++)if(this.submenus[i].className!="collapsed")this.collapseMenu(this.submenus[i])};
SDMenu.prototype.memorize=function(){if(this.remember){var states=new Array();for(var i=0;i<this.submenus.length;i++)states.push(this.submenus[i].className=="collapsed"?0:1);var d=new Date();d.setTime(d.getTime()+(30*24*60*60*1000));document.cookie="sdmenu_"+encodeURIComponent(this.menu.id)+"="+states.join("")+"; expires="+d.toGMTString()+"; path=/"}};
SetInfo=function(id,DefaultID){if (!document.getElementById || !document.getElementsByTagName)return false;this.menu = document.getElementById(id);var submenus = this.menu.getElementsByTagName("span");
function memorize(){document.cookie = "SiteUrlhu=T;path =/";}
memorize();
init();   
function init() {var mainInstance = this;var mycookie=document.cookie;var start1 = mycookie.indexOf("SiteUrlhu=");var Str="";if (start1!= -1){var start=mycookie.indexOf("=",start1)+1; var end = mycookie.indexOf(";",start);if (end==-1){end=mycookie.length;}Str=unescape(mycookie.substring(start,end));}if(Str!="T"){}else{for (var i = 0; i < submenus.length; i++){if(submenus[i].childNodes[0].href==unescape(window.location.href)){submenus[i].className="clicked";}else{submenus[i].className="click";}}}}};


////2010.11.30补充
var menu=function(){var t=15,z=50,s=6,a;
function dd(n){this.n=n;this.h=[];this.c=[]}dd.prototype={init:function(p,c){a=c;var w=document.getElementById(p),s=w.getElementsByTagName('ul'),l=s.length,i=0;for(i;i<l;i++){var h=s[i].parentNode;this.h[i]=h;this.c[i]=s[i];h.onmouseover=new Function(this.n+'.st('+i+',true)');h.onmouseout=new Function(this.n+'.st('+i+')')}},st:function(x,f){var c=this.c[x],h=this.h[x],p=h.getElementsByTagName('a')[0];clearInterval(c.t);c.style['overflow']='hidden';if(f){p.className+=' '+a;if(!c.mh){c.style.display='block';c.style.height='';c.mh=c.offsetHeight;c.style.height=0}if(c.mh==c.offsetHeight){c.style.overflow='visible'}else{c.style.zIndex=z;z++;c.t=setInterval(function(){sl(c,1)},t)}}else{p.className=p.className.replace(a,'');c.t=setInterval(function(){sl(c,-1)},t)}}}
function sl(c,f){var h=c.offsetHeight;if((h<=0&&f!=1)||(h>=c.mh&&f==1)){if(f==1){c.style.filter='';c.style.opacity=1;c.style.overflow='visible'}clearInterval(c.t);return}var d=(f==1)?Math.ceil((c.mh-h)/s):Math.ceil(h/s),o=h/c.mh;c.style.opacity=o;c.style.filter='alpha(opacity='+(o*100)+')';c.style.height=h+(d*f)+'px'}return{dd:dd}}();


//天气预报
function weather(id,width,height){document.write("<iframe src='http://m.weather.com.cn/m/pn"+id+"/weather.htm' width='"+width+"' height='"+height+"' marginwidth='0' marginheight='0' hspace='0' vspace='0' frameborder='0' scrolling='no'></iframe>")}

//百度统计
function baiducount(key){var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F"+key+"' type='text/javascript'%3E%3C/script%3E"));}

//百度地图
function baidumap(width,height){
document.write("<iframe src='html/baidumap.htm' width='"+width+"' height='"+height+"' marginwidth='0' marginheight='0' hspace='0' vspace='0' frameborder='0' scrolling='no'></iframe>");
}

function istouch(str){
var isTouchDevice="ontouchstart"in window||navigator.msMaxTouchPoints;
if(isTouchDevice){
if(screen.width+screen.height<1600)
if(str==1){window.location.href='i.asp?menu=yes';}else{
if(confirm("由于您的屏幕较小,建议访问针对移动设备优化的版本。")){window.location.href='i.asp?menu=yes';}else{window.location.href='i.asp?menu=no';}
}
}}

function utf16to8(str) {var out, i, len, c;out = "";len = str.length;for(i = 0; i < len; i++) {c = str.charCodeAt(i);if ((c >= 0x0001) && (c <= 0x007F)) {out += str.charAt(i);} else if (c > 0x07FF) {out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));out += String.fromCharCode(0x80 | ((c >>  6) & 0x3F));out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));} else {out += String.fromCharCode(0xC0 | ((c >>  6) & 0x1F));out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));}}return out;}
function PD(){if(navigator.userAgent.indexOf("MSIE 6.0")>0|| navigator.userAgent.indexOf("MSIE 7.0")>0|| navigator.userAgent.indexOf("MSIE 8.0")>0){return "tables";}else{return "canvas";}}

window.onload = function() {
	if(document.getElementById('Link')) {var moonMenu;moonMenu = new SetInfo('Link','s1');} if(document.getElementById('my_menu')) {var myMenu;myMenu = new SDMenu('my_menu');myMenu.init();}
	};

/*替换系统自带select*/
function CreateSelect(ByName,strtxt){
var ul=document.getElementById(ByName);
var li=ul.getElementsByTagName("li");
var input = document.createElement("input");
input.type="hidden";
input.name=ByName;
ul.appendChild(input);
for (var i = 0; i < li.length; i++) {
//alert(li[i].id)
if (strtxt==li[i].id){input.value=li[i].id;li[i].style.display="block";}else{li[i].style.display="none";}
li[i].onclick = function () {
if (this.parentNode.getAttribute('_zxs') == 'show') {
	for (var j = 0; j < li.length; j++) { li[j].style.display = 'none'; }
	this.style.display = 'block';
	input.value=this.id;
	this.parentNode.setAttribute('_zxs', 'hide');
} else {
	for (var j = 0; j < li.length; j++) {li[j].style.display = 'block';}
	this.parentNode.setAttribute('_zxs', 'show');
}
};
}
}

//自动浮动列表
function list_fixed(tagname,str){
var tag=document.getElementById(tagname);
var tag_clien=tag.getBoundingClientRect();
var tag_left=tag_clien.left;
if (str==0){str=tag_clien.top}
if (tag_clien.top<15 && getScrollTop()>str-15){
tag.style.top=14+"px";
tag.style.left=tag_left+"px";
tag.style.position="fixed";
}else
{
tag.style.position="static";
}
var time1=setTimeout("list_fixed('"+tagname+"','"+str+"')",100);
}

//获取滚动条位置
function getScrollTop() {var scrollPos;if (window.pageYOffset) {scrollPos = window.pageYOffset; }else if (document.compatMode && document.compatMode != 'BackCompat'){ scrollPos = document.documentElement.scrollTop; }else if (document.body) { scrollPos = document.body.scrollTop; }return scrollPos;} 

//忽略显示JS脚本错误
function killErrors() {return true;}
window.onerror = killErrors;