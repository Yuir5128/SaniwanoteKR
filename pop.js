window.onload = function(){
  //DMMENU
  document.getElementById("dmbar_swi").addEventListener("click", function(){
    chrome.tabs.query({active:true, currentWindow:true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id,"DMflag", function(){});
    });
  }, false);
  
  //別窓
  document.getElementById("popwin_swi").addEventListener("click", function(){
    chrome.tabs.query({active:true, currentWindow:true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id,"POPflag", function(){});
    });
  }, false);
  
  //スクショ
  document.getElementById("sc_swi").addEventListener("click", function(){
    chrome.runtime.sendMessage("SCflagP", function(){});
  }, false);
  
  //ミュート
  document.getElementById("mt_swi").addEventListener("click", function(){
    chrome.runtime.sendMessage("MTflagP");
  }, false);
};