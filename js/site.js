(function(){function d(){$("pre").hover(function(){$("code",this).stop(true,false).animate({"max-width":"1000px"},"fast")},function(){$("code",this).stop(true,false).delay(500).animate({"max-width":e+"px"},"fast")})}function f(){$("a").each(function(){$(this).attr("href").indexOf("http")==0&&$(this).attr("target","_blank")})}function g(){$("p.autoalign").each(function(){var a=0;$("img",this).each(function(){a+=$(this).width()});var b=(h-a)/2;$(this).css({width:a,left:b})})}function i(){$("a.email").each(function(){var a=
$(this).text().replace(" at ","@").replace("this domain","nvie.com");$(this).attr("href","mailto:"+a);$(this).text(a)})}function j(){$("a#toggle-edits").toggle(function(){$("ins,div.ins").css({"text-decoration":"underline",color:"green"});$("del,div.del").css({"text-decoration":"line-through",color:"red"});$("div.del").css({display:"block"});$("del").css({display:"inline"});$(this).html("(hide updates)");var a=$("ins,del,div.ins,div.del").first().offset().top-40;$("html,body").animate({scrollTop:a},
800)},function(){$("ins,div.ins").css({"text-decoration":"none",color:"inherit"});$("del,div.del").css({"text-decoration":"none",color:"inherit",display:"none"});$(this).html("(highlight updates)")})}function c(){var a=$(window),b=$("#main"),k=b.position().top+32;a=Math.max(0,a.width()-b.outerWidth())/2+600+48;$("#actionbox").css({top:k,left:a})}var h=600,e=520;$(document).ready(function(){$(".reldate").relatizeDate();c();$("#actionbox").show();d();f();i();j();$(window).resize(c)});$(window).load(function(){g()})})();
