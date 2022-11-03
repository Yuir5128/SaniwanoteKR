chrome.storage.sync.get(['ddark'], function(items){
  if(items.ddark){document.documentElement.setAttribute('theme-mode','dark');console.log("다크 모드");}
});