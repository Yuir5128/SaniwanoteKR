$(document).ready(function(){
//誤이동방지
chrome.storage.sync.get(['idoflug','gdark'], function(items){
  if(items.idoflug){$(window).on('beforeunload', function(){return '';});console.log("이동방지ON");}
  else{console.log("이동방지OFF");}

  //const isdark = window.matchMedia('(prefers-color-scheme:dark)').matches;
if(items.gdark){
  document.documentElement.setAttribute('theme-mode','dark');
  $('body.appdetail-gh-phase02,#page,#w').css("background-color","#1c1c1a");console.log("다크 모드");
}
});

//DMMENU開閉
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
  //console.log(request);
  if(request=="SCsize"){
    var gframe =$("iframe#game_frame");
    sendResponse({x:gframe.offset().left, y:gframe.offset().top});
    return true;
  }else if(request.wint){
    if(request.wint=="normal"){
      $('#dm_swi').hide();
      chrome.storage.sync.get(['sclock'], function(settei){//sclロック설정
        if(settei.sclock){
          window.scrollTo(0,0);
          $('#scrl').prop('checked',true);
          $('body').css("overflow","hidden");
        }
      });
    }
    else{$('button#dm_swi').show();}
    return;
  }else if(request=="DMflag" || request=="POPflag"){
    if($('div.dmm-ntgnavi').is(':visible')){
      $('div.dmm-ntgnavi').children().css("display","none");
      $('div.dmm-ntgnavi').css("display","none");
      $('div.page-inner div:first').css("padding-bottom","0px").css("display","none");//flash警告
			$('div#main-ntg').css("margin-top","0px");
      //$('div#ntg-recommend').children().hide();//$('span.slide-trg').hide();
      $('div.dmm-ntgnavi-left').css("visibility","hidden");//左課金
      //$('iframe#twitter-widget-1').css("visibility","hidden");//左twi
      $('body').css("min-width","964px");
      if(!$('#ctbutton')[0]){
        $('#main-ntg').before('<div id="ctbutton"><button id="sc_swi" title="촬영"><img style="vertical-align:top"  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAMCAMAAAC+5dbKAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAGUExURf///0tLS9uOv4kAAAABdFJOUwBA5thmAAAAW0lEQVR42mJgAAFGRkYQBgEGCAAIIJgwMgAJAQQQFmGwBEAAIYvDmUAGQAAhiSNsAYoBBBBCnAFBAsUAAgiXOEAA4RIHCCBc5gMEEC73AAQQLvcDBBAu/wIEGABiHACyw9f33wAAAABJRU5ErkJggg=="></button><button id="mt_swi" title="消音전환"><img style="vertical-align:top"  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAMCAMAAABGBS09AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAJUExURf8XHUtLS////7xMSm4AAAADdFJOU///ANfKDUEAAACBSURBVHjaYmBCBYzIHIAAYkATYWRCEgEIIBCTkRHOZYQIQUUAAgjMYmRiRJJkYoCJAAQQiIGQhBCMDFARgADCKgmUBYsABBCKJNRokCxYBCCAcEhC9AIEELKD4D4CiYD0AgQQslcQ3gWJAPUCBBCSlxnRAoqBCSCAGHCEHBgABBgAeLsCKdimXysAAAAASUVORK5CYII="></button><button id="win_swi" title="別窓전환"><span>窓전환</span></button><button id="dm_swi" title="DMM메뉴 표시 "><span>메뉴 표시 </span></button><button id="resize_swi1" title="窓설정『1』"><span>一</span></button><button id="resize_swi2" title="窓설정『2』"><span>二</span></button><button id="resize_swi3"  title="窓설정『3』"><span>三</span></button><input type="checkbox" id="scrl" title="スクロールバー停止"><div id="zoomenu"><button title="화면 표시 배율변경" id="z_def"><span class="btxt">배율</span></button><div id="zoombar"><button id="z_100" title="100％"><span>100％</span></button><button id="z_50" class="sbtn" title="50％"><span>50％</span></button><button id="z_60" class="sbtn"  title="60％"><span>60％</span></button><button id="z_80" class="sbtn"  title="80％"><span>80％</span></button><button id="z_120" class="bbtn"  title="120％"><span>120％</span></button><button id="z_150" class="bbtn" title="150％"><span>150％</span></button></div></div><br></div>');
      }else{$('#ctbutton').css("display","block");}
    }else{
      if(request=="DMflag"){
        $('#scrl').prop('checked', false);//ロック해제
        $('body').css("overflow","auto");
        $('body').css("min-width","1024px");
				$('div#main-ntg').css("margin-top","88px");
        $('div.dmm-ntgnavi').children().css("display","block");
        $('div.dmm-ntgnavi').css("display","block");
        //$('div#ntg-recommend').children().show();
        $('div.dmm-ntgnavi-left').css("visibility","visible");//左課金
        //$('iframe#twitter-widget-1').css("visibility","visible");//左twi
        $('#ctbutton').css("display","none");
        return;
      }
    }
    if(request=="POPflag"){chrome.runtime.sendMessage("WINflag");}
  }
  sendResponse({});
});

$("#w").on('click','#sc_swi',function(){
  chrome.runtime.sendMessage("SCflag");
});
$("#w").on('click','#mt_swi',function(){
  chrome.runtime.sendMessage("MTflag");
});
$("#w").on('click','#dm_swi',function(){
  $('input#scrl').prop('checked', false);
  $('body').css("overflow","auto");
  $('body').css("min-width","1024px");
  $('div.dmm-ntgnavi').children().css("display","block");
  $('div.dmm-ntgnavi').css("display","block");
	$('div#main-ntg').css("margin-top","88px");
  $('div#ctbutton').css("display","none");
});
$("#w").on('click','#win_swi',function(){
  chrome.runtime.sendMessage("WINflag");
});
  
$("#w").on('click','#resize_swi1',function(){
  chrome.runtime.sendMessage({flag:"RESIZE",setno:"1"});
});
$("#w").on('click','#resize_swi2',function(){
  chrome.runtime.sendMessage({flag:"RESIZE",setno:"2"});
});
$("#w").on('click','#resize_swi3',function(){
  chrome.runtime.sendMessage({flag:"RESIZE",setno:"3"});
});

$("#w").on('change','#scrl',function(){
  if($('#scrl').prop('checked')){$('body').css("overflow","hidden");}
  else{$('body').css("overflow","auto");}
});  

$("#w").on('click','#z_def',function(){
chrome.runtime.sendMessage({flag:"ZOOMCHANGE",setno:"0"});
});
$("#w").on('click','#z_100',function(){
chrome.runtime.sendMessage({flag:"ZOOMCHANGE",setno:"0"});
});
$("#w").on('click','#z_50',function(){
chrome.runtime.sendMessage({flag:"ZOOMCHANGE",setno:"1"});
});
$("#w").on('click','#z_60',function(){
chrome.runtime.sendMessage({flag:"ZOOMCHANGE",setno:"2"});
});
$("#w").on('click','#z_80',function(){
chrome.runtime.sendMessage({flag:"ZOOMCHANGE",setno:"3"});
});
$("#w").on('click','#z_120',function(){
chrome.runtime.sendMessage({flag:"ZOOMCHANGE",setno:"4"});
});
$("#w").on('click','#z_150',function(){
chrome.runtime.sendMessage({flag:"ZOOMCHANGE",setno:"5"});
});


});
/* 
$(window).resize(function(){
  wx=$("iframe#game_frame").offset().left;
  wy=$("iframe#game_frame").offset().top;
  console.log(wx,wy);
});
*/
