"use strict";jQuery(document).ready(function(i){var n=[];function t(t){i("body").append('<div id="AI_lightbox"><span class="close"><i class="material-icons">&#xE5CD;</i></span><img src="" alt="" /><span class="prev"><i class="material-icons">&#xE5CB;</i></span><span class="next"><i class="material-icons">&#xE5CC;</i></span></div>'),i("#AI_lightbox").css("display","block"),i("#AI_lightbox img").attr("id",t),i("#AI_lightbox img").attr("src",i("#"+t).attr("src")),i("#AI_lightbox").animate({opacity:1})}i(".lightbox").each(function(t){n.push(i(this).attr("src")),i(this).attr("id",t)}),i(document).on("click",".lightbox",function(){t(i(this).attr("id"))}),i(document).on("click","#AI_lightbox .next",function(){parseInt(i("#AI_lightbox img").attr("id"))<n.length-1&&t(parseInt(i("#AI_lightbox img").attr("id"))+1)}),i(document).on("click","#AI_lightbox .prev",function(){0<parseInt(i("#AI_lightbox img").attr("id"))&&t(parseInt(i("#AI_lightbox img").attr("id"))-1)}),i(document).on("click","#AI_lightbox .close",function(){i("#AI_lightbox").animate({opacity:0},200,function(){i("#AI_lightbox").css("display","none"),i("#AI_lightbox").remove()})})});