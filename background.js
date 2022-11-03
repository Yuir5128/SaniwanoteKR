//페이지 액션 아이콘
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
  if(/^https?:\/\/pc-play\.games\.dmm\.com\/play\/tohken\/?$/.test(tab.url)){
    chrome.action.enable(tabId);//chrome.pageAction.show(tabId);※V2to3
  }else{chrome.action.disable(tabId);}
});


chrome.runtime.onMessage.addListener(function(request, sender){
  //console.log(request,sender.tab);
  //음소거 pop 부터라고 페이지에서
  if(request=="MTflagP"){
    chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
      if(tabs[0].mutedInfo.muted){chrome.tabs.update(tabs[0].id,{muted:false});}
      else{chrome.tabs.update(tabs[0].id,{muted:true});}
    });
  }
  else if(request=="MTflag"){
    if(sender.tab.mutedInfo.muted){chrome.tabs.update(sender.tab.id,{muted:false});}
    else{chrome.tabs.update(sender.tab.id,{muted:true});}
  }
  
  //스샷 pop 부터라고 페이지에서
  else if(request=="SCflagP"){
    chrome.tabs.create({url:"canvas.html",active:false});
  }
  else if(request=="SCflag"){
    chrome.tabs.create({url:"canvas.html",active:false});
    chrome.windows.update(sender.tab.windowId,{focused:true});
  }
  else if(request.mode=="canvasok"){
    chrome.tabs.query({url:"*://pc-play.games.dmm.com/play/tohken*", currentWindow:true}, function(tabs){
      chrome.tabs.captureVisibleTab({format:"png"},function(dataurl){
        //chrome.tabs.getZoom(tabs[0].id, function(zlv){console.log(zlv);});
        chrome.tabs.sendMessage(tabs[0].id,"SCsize", function(responce){ //座標ゲット
          if(responce){
            var scx=Math.round(responce.x);var scy=Math.round(responce.y);
            chrome.tabs.sendMessage(sender.tab.id,{img:dataurl,sx:scx,sy:scy});
          }else{
            chrome.tabs.sendMessage(sender.tab.id,{img:dataurl,err:true});
          }
          chrome.windows.update(sender.tab.windowId,{focused:true});
          chrome.tabs.update(sender.tab.id,{active:true});          
        });
      });
    });
  }
  
  /*창 변환*/
  else if(request=="WINflag"){
    chrome.windows.get(sender.tab.windowId,function(win){
      if(win.type=="normal"){
        chrome.storage.sync.get(['winposi'], function(items){
          if(items.winposi){
            var winJ = items.winposi;
            if(typeof winJ === "string"){winJ = JSON.parse(winJ);}//★移 유키措置
            var tempzoom = (winJ.z) ? (winJ.z):1;//移 유키措置
            chrome.windows.create({width:winJ.w,height:winJ.h,top:winJ.t,left:winJ.l,tabId:sender.tab.id,type:"popup"});
            chrome.tabs.setZoom(sender.tab.id,tempzoom);
          }else{
            chrome.windows.create({width:1080,height:663,tabId:sender.tab.id,type:"popup"});
            chrome.tabs.setZoom(sender.tab.id,1.0);
          }
        });
      }else{
        chrome.windows.create({tabId:sender.tab.id,type:"normal"});
      }
      chrome.tabs.sendMessage(sender.tab.id,{wint:win.type});
    });
  }
	
	/*창 사이즈*/
  else if(request.flag=="RESIZE"){
    chrome.windows.get(sender.tab.windowId,function(win){
      var stname='winposi';var defw=1080;var defh=663;var defz=1.0;//1
      if(request.setno=="2"){stname='winposi2';defw=1595;defh=977;defz=1.5;}
      if(request.setno=="3"){stname='winposi3';defw=865;defh=537;defz=0.8;}
      
      chrome.storage.sync.get([stname], function(items){
        if(items[stname]){
          var winJ = items[stname];
          if(typeof winJ === "string"){winJ = JSON.parse(winJ);}//★이행 조치
          if(winJ.z){defz=winJ.z;}//이행중 조치
          if(win.type=="popup"){chrome.windows.update(sender.tab.windowId,{width:winJ.w,height:winJ.h,top:winJ.t,left:winJ.l});}
          chrome.tabs.setZoom(sender.tab.id,defz);
        }else{
          if(win.type=="popup"){chrome.windows.update(sender.tab.windowId,{width:defw,height:defh});}
          chrome.tabs.setZoom(sender.tab.id,defz);
        }
      });
    });
  }

  /*변화 배수*/
  else if(request.flag=="ZOOMCHANGE"){
    chrome.windows.get(sender.tab.windowId,function(win){
      chrome.tabs.getZoom(sender.tab.id,function(nowzoom){
        console.log(nowzoom);
        var defw=1080;var defh=663;var defz=1.0;//1
      if(request.setno=="1"){defw=565;defh=360;defz=0.5;}
      else if(request.setno=="2"){defw=668;defh=420;defz=0.6;}
      else if(request.setno=="3"){defw=874;defh=541;defz=0.8;}
      else if(request.setno=="4"){defw=1286;defh=792;defz=1.2;}
      else if(request.setno=="5"){defw=1595;defh=977;defz=1.5;}
        
        if(win.type=="popup"){chrome.windows.update(sender.tab.windowId,{width:defw,height:defh});}
        chrome.tabs.setZoom(sender.tab.id,defz);
      });
    });
  }
  //else if(request.flag=="DOWNTXT"){
  //  chrome.tabs.query({url:"chrome-extension://*/downtxt.html", currentWindow:true}, function(tabs){
  //    chrome.tabs.sendMessage(tabs[0].id,request.mes);
  //  });
  //}
	return true;
});

//알람
chrome.alarms.onAlarm.addListener(function(alarm){
  if(alarm){
    var t_title = "원정 종료";
    var t_msessage = "부대가 귀환했습니다";
    if(alarm.name){
      var timer_cat = alarm.name.charAt(0);
      var timer_num = alarm.name.charAt(1);
      if(timer_cat=="e"){t_msessage = "차례"+timer_num+t_msessage;}
      else if(timer_cat=="t"){t_title = "도검제작완료";t_msessage = "단도실"+timer_num+"의 단도가 완료되었습니다";}
      else if(timer_cat=="r"){t_title = "수리완료";t_msessage = "수리실"+timer_num+"의 수리가 완료되었습니다";}
      else if(alarm.name=="u1"){t_title = "내번완료";t_msessage = "내번이 완료되었습니다";}
      else if(alarm.name=="s2"){t_title = "수행귀환";t_msessage = "수행간 도검이 귀환했습니다";}
      
      if(alarm.name=="s1"){chrome.alarms.clear("s1");}
      else{
        chrome.notifications.create(alarm.name,{
          type: 'basic',
          iconUrl: '/saniwanote48.png',
          title: t_title,
          message: t_msessage,
          requireInteraction: true
        });
        chrome.alarms.clear(alarm.name);
      }
    }
  }
});
chrome.notifications.onClicked.addListener(function(notid){
  chrome.notifications.clear(notid);
});
/* //최전면
  if(request=="OnTopflag"){
    chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
      chrome.windows.get(tabs[0].windowId,function(win){
        console.log(win);
        if(win.alwaysOnTop){chrome.windows.update(win.id,{alwaysOnTop:false});console.log("最前OFF");}
        else{chrome.windows.update(win.id,{alwaysOnTop:true});console.log("最前ON");}
      });
    });
  }

//이중 기동 방지 구현 시에는 manifest로 →"webNavigation",
chrome.webNavigation.onBeforeNavigate.addListener(function(request){
  if(request.frameId>0)return;
  console.log(request);
  if(/^http:\/\/www\.dmm\.com\/netgame\/social\/\-\/gadgets\/\=\/app_id=825012\/$/.test(request.url)){
    chrome.tabs.query({active:false,currentWindow:true,url:"http://www.dmm.com/netgame/social/-/gadgets/=/app_id=825012/"},function(tabs){
      if(tabs.length>0){
        chrome.tabs.reload(request.tabId,{bypassCache:true});
        alert("이미 열려있습니다");
      }
    });
  }
});
*/