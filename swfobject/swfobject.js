/*	SWFObject v2.0 rc3 <http://code.google.com/p/swfobject/>
	Copyright (c) 2007 Geoff Stearns, Michael Williams, and Bobby van der Sluis
	This software is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/
var swfobject=function(){var U="undefined",N="object",X="visibility:visible",a="visibility:hidden",B="Shockwave Flash",c="ShockwaveFlash.ShockwaveFlash",T="application/x-shockwave-flash",J="SWFObjectExprInst",b=[],G=[],O=null,K=null,Q=false,C=false;var V=function(){var k=typeof document.getElementById!=U&&typeof document.getElementsByTagName!=U&&typeof document.createElement!=U&&typeof document.appendChild!=U&&typeof document.replaceChild!=U&&typeof document.removeChild!=U&&typeof document.cloneNode!=U,r=[0,0,0],m=null;if(typeof navigator.plugins!=U&&typeof navigator.plugins[B]==N){m=navigator.plugins[B].description;if(m){m=m.replace(/^.*\s+(\S+\s+\S+$)/,"$1");r[0]=parseInt(m.replace(/^(.*)\..*$/,"$1"),10);r[1]=parseInt(m.replace(/^.*\.(.*)\s.*$/,"$1"),10);r[2]=/r/.test(m)?parseInt(m.replace(/^.*r(.*)$/,"$1"),10):0}}else{if(typeof window.ActiveXObject!=U){var n=null,q=false;try{n=new ActiveXObject(c+".7")}catch(j){try{n=new ActiveXObject(c+".6");r=[6,0,21];n.AllowScriptAccess="always"}catch(j){if(r[0]==6){q=true}}if(!q){try{n=new ActiveXObject(c)}catch(j){}}}if(!q&&n){try{m=n.GetVariable("$version");if(m){m=m.split(" ")[1].split(",");r=[parseInt(m[0],10),parseInt(m[1],10),parseInt(m[2],10)]}}catch(j){}}}}var s=navigator.userAgent.toLowerCase(),h=navigator.platform.toLowerCase(),o=/webkit/.test(s),g=o?parseFloat(s.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):0,f=false,i=h?/win/.test(h):/win/.test(s),l=h?/mac/.test(h):/mac/.test(s);/*@cc_on f=true;@if(@_win32)i=true;@elif(@_mac)l=true;@end@*/return{w3cdom:k,playerVersion:r,webkit:o,webkitVersion:g,ie:f,win:i,mac:l}}();var Z=function(){if(!V.w3cdom){return }I(H);if(V.ie&&V.win){try{document.write("<script id=__ie_ondomload defer=true src=//:><\/script>");var d=document.getElementById("__ie_ondomload");if(d){d.onreadystatechange=function(){if(this.readyState=="complete"){this.parentNode.removeChild(this);S()}}}}catch(f){}}if(V.webkit&&typeof document.readyState!=U){O=setInterval(function(){if(/loaded|complete/.test(document.readyState)){S()}},10)}if(typeof document.addEventListener!=U){document.addEventListener("DOMContentLoaded",S,null)}L(S)}();function S(){if(Q){return }if(V.ie&&V.win){var h=document.createElement("span");try{var g=document.getElementsByTagName("body")[0].appendChild(h);g.parentNode.removeChild(g)}catch(j){return }}Q=true;if(O){clearInterval(O);O=null}var d=b.length;for(var f=0;f<d;f++){b[f]()}}function I(d){if(Q){d()}else{b[b.length]=d}}function L(e){if(typeof window.addEventListener!=U){window.addEventListener("load",e,false)}else{if(typeof document.addEventListener!=U){document.addEventListener("load",e,false)}else{if(typeof window.attachEvent!=U){window.attachEvent("onload",e)}else{if(typeof window.onload=="function"){var d=window.onload;window.onload=function(){d();e()}}else{window.onload=e}}}}}function H(){var f=G.length;for(var d=0;d<f;d++){var g=G[d].id;if(V.playerVersion[0]>0){var e=document.getElementById(g);if(e){G[d].width=e.getAttribute("width")?e.getAttribute("width"):"0";G[d].height=e.getAttribute("height")?e.getAttribute("height"):"0";if(M(G[d].swfVersion)){if(V.webkit&&V.webkitVersion<312){R(e)}}else{if(G[d].expressInstall&&!C&&M([6,0,65])&&(V.win||V.mac)){D(G[d])}else{Y(e)}}}}A("#"+g,X)}}function R(g){var d=g.getElementsByTagName(N)[0];if(d){var l=document.createElement("embed"),n=d.attributes;if(n){var k=n.length;for(var h=0;h<k;h++){if(n[h].nodeName.toLowerCase()=="data"){l.setAttribute("src",n[h].nodeValue)}else{l.setAttribute(n[h].nodeName,n[h].nodeValue)}}}var m=d.childNodes;if(m){var o=m.length;for(var f=0;f<o;f++){if(m[f].nodeType==1&&m[f].nodeName.toLowerCase()=="param"){l.setAttribute(m[f].getAttribute("name"),m[f].getAttribute("value"))}}}g.parentNode.replaceChild(l,g)}}function F(d){if(V.ie&&V.win&&M([8,0,0])){window.attachEvent("onunload",function(){var f=document.getElementById(d);for(var e in f){if(typeof f[e]=="function"){f[e]=function(){}}}f.parentNode.removeChild(f)})}}function D(e){C=true;var j=document.getElementById(e.id);if(j){if(e.altContentId){var g=document.getElementById(e.altContentId);if(g){K=g}}else{K=W(j)}if(!(/%$/.test(e.width))&&parseInt(e.width,10)<310){e.width="310"}if(!(/%$/.test(e.height))&&parseInt(e.height,10)<137){e.height="137"}document.title=document.title.slice(0,47)+" - Flash Player Installation";var i=V.ie&&V.win?"ActiveX":"PlugIn",f=document.title,h="MMredirectURL="+window.location+"&MMplayerType="+i+"&MMdoctitle="+f,k=e.id;if(V.ie&&V.win&&j.readyState!=4){var d=document.createElement("div");k+="SWFObjectNew";d.setAttribute("id",k);j.parentNode.insertBefore(d,j);j.style.display="none";window.attachEvent("onload",function(){j.parentNode.removeChild(j)})}P({data:e.expressInstall,id:J,width:e.width,height:e.height},{flashvars:h},k)}}function Y(e){if(V.ie&&V.win&&e.readyState!=4){var d=document.createElement("div");e.parentNode.insertBefore(d,e);d.parentNode.replaceChild(W(e),d);e.style.display="none";window.attachEvent("onload",function(){e.parentNode.removeChild(e)})}else{e.parentNode.replaceChild(W(e),e)}}function W(h){var g=document.createElement("div");if(V.win&&V.ie){g.innerHTML=h.innerHTML}else{var e=h.getElementsByTagName(N)[0];if(e){var j=e.childNodes;if(j){var d=j.length;for(var f=0;f<d;f++){if(!(j[f].nodeType==1&&j[f].nodeName.toLowerCase()=="param")&&!(j[f].nodeType==8)){g.appendChild(j[f].cloneNode(true))}}}}}return g}function P(AA,y,f){var d,h=document.getElementById(f);if(typeof AA.id==U){AA.id=f}if(V.ie&&V.win){var z="";for(var v in AA){if(AA[v]!=Object.prototype[v]){if(v=="data"){y.movie=AA[v]}else{if(v.toLowerCase()=="styleclass"){z+=' class="'+AA[v]+'"'}else{if(v!="classid"){z+=" "+v+'="'+AA[v]+'"'}}}}}var x="";for(var u in y){if(y[u]!=Object.prototype[u]){x+='<param name="'+u+'" value="'+y[u]+'" />'}}h.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+z+">"+x+"</object>";F(AA.id);d=document.getElementById(AA.id)}else{if(V.webkit&&V.webkitVersion<312){var w=document.createElement("embed");w.setAttribute("type",T);for(var t in AA){if(AA[t]!=Object.prototype[t]){if(t=="data"){w.setAttribute("src",AA[t])}else{if(t.toLowerCase()=="styleclass"){w.setAttribute("class",AA[t])}else{if(t!="classid"){w.setAttribute(t,AA[t])}}}}}for(var s in y){if(y[s]!=Object.prototype[s]){if(s!="movie"){w.setAttribute(s,y[s])}}}h.parentNode.replaceChild(w,h);d=w}else{var g=document.createElement(N);g.setAttribute("type",T);for(var q in AA){if(AA[q]!=Object.prototype[q]){if(q.toLowerCase()=="styleclass"){g.setAttribute("class",AA[q])}else{if(q!="classid"){g.setAttribute(q,AA[q])}}}}for(var p in y){if(y[p]!=Object.prototype[p]&&p!="movie"){E(g,p,y[p])}}h.parentNode.replaceChild(g,h);d=g}}return d}function E(f,d,e){var g=document.createElement("param");g.setAttribute("name",d);g.setAttribute("value",e);f.appendChild(g)}function M(d){return(V.playerVersion[0]>d[0]||(V.playerVersion[0]==d[0]&&V.playerVersion[1]>d[1])||(V.playerVersion[0]==d[0]&&V.playerVersion[1]==d[1]&&V.playerVersion[2]>=d[2]))?true:false}function A(i,e){if(V.ie&&V.mac){return }var g=document.getElementsByTagName("head")[0],f=document.createElement("style");f.setAttribute("type","text/css");f.setAttribute("media","screen");if(!(V.ie&&V.win)&&typeof document.createTextNode!=U){f.appendChild(document.createTextNode(i+" {"+e+"}"))}g.appendChild(f);if(V.ie&&V.win&&typeof document.styleSheets!=U&&document.styleSheets.length>0){var d=document.styleSheets[document.styleSheets.length-1];if(typeof d.addRule==N){d.addRule(i,e)}}}return{registerObject:function(h,d,g){if(!V.w3cdom||!h||!d){return }var f={};f.id=h;var e=d.split(".");f.swfVersion=[parseInt(e[0],10),parseInt(e[1],10),parseInt(e[2],10)];f.expressInstall=g?g:false;G[G.length]=f;A("#"+h,a)},getObjectById:function(g){var d=null;if(V.w3cdom&&Q){var e=document.getElementById(g);if(e){var f=e.getElementsByTagName(N)[0];if(!f||(f&&typeof e.SetVariable!=U)){d=e}else{if(typeof f.SetVariable!=U){d=f}}}}return d},embedSWF:function(h,p,m,o,d,g,e,k,n){if(!V.w3cdom||!h||!p||!m||!o||!d){return }m+="";o+="";if(M(d.split("."))){A("#"+p,a);var l=(typeof n==N)?n:{};l.data=h;l.width=m;l.height=o;var j=(typeof k==N)?k:{};if(typeof e==N){for(var f in e){if(e[f]!=Object.prototype[f]){if(typeof j.flashvars!=U){j.flashvars+="&"+f+"="+e[f]}else{j.flashvars=f+"="+e[f]}}}}I(function(){P(l,j,p);A("#"+p,X)})}else{if(g&&!C&&M([6,0,65])&&(V.win||V.mac)){A("#"+p,a);I(function(){var i={};i.id=i.altContentId=p;i.width=m;i.height=o;i.expressInstall=g;D(i);A("#"+p,X)})}}},getFlashPlayerVersion:function(){return{major:V.playerVersion[0],minor:V.playerVersion[1],release:V.playerVersion[2]}},hasFlashPlayerVersion:function(d){return M(d.split("."))},createSWF:function(f,e,d){if(V.w3cdom&&Q){return P(f,e,d)}else{return undefined}},createCSS:function(e,d){if(V.w3cdom){A(e,d)}},addDomLoadEvent:I,addLoadEvent:L,getQueryParamValue:function(g){var f=document.location.search||document.location.hash;if(g==null){return f}if(f){var e=f.substring(1).split("&");for(var d=0;d<e.length;d++){if(e[d].substring(0,e[d].indexOf("="))==g){return e[d].substring((e[d].indexOf("=")+1))}}}return""},expressInstallCallback:function(){if(C&&K){var d=document.getElementById(J);if(d){d.parentNode.replaceChild(K,d);K=null;C=false}}}}}();